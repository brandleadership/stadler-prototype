import {
    getStoryblokApi,
    StoryblokStory,
    apiPlugin,
    storyblokInit,
} from '@storyblok/react/rsc';
import Layout from '/src/components/sections/Layout';
import { redirect } from 'next/navigation';

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
});

const isDev = 'development';
export const revalidate = isDev ? 0 : 3600;

async function fetchData(slug, lang) {
    const sbParams = {
        resolve_links: 'url',
        version: 'published',
        cv: isDev || isDraft ? Date.now() : undefined,
        resolve_relations: [
            'global_contact_reference.reference',
            'success-story-grid.success_stories',
            'news.categories',
            'medienmitteilungen.categories',
            'alle-medienmitteilungen.filter_years',
            'alle-medienmitteilungen.filter_country',
            'alle-medienmitteilungen.filter_medienmitteilungencategories',
            'alle-medienmitteilungen.filter_products',
            'all-news.filter_years',
            'all-news.filter_country',
            'all-news.filter_newscategories',
            'all-news.filter_products',
            'reference-grid.highlight_reference',
            'reference-grid.reference',
            'reference-page.categories',
            'medienmitteilungen_teaser.categories',
            'all-locations.filter_business_area',
            'all-locations.filter_country',
            'single-location-wrapper.tag_division',
            'single-location-wrapper.tag_country',
            'single-location-wrapper.tag_business_area',
        ],
        language: lang,
    };

    const storyblokApi = getStoryblokApi();
    try {
        const { data } = await storyblokApi.get(
            `cdn/stories/${slug}`,
            sbParams
        );
        const config_footer = await storyblokApi.get(
            'cdn/stories/config-footer-new',
            sbParams
        );
        const config_header = await storyblokApi.get(
            'cdn/stories/config-header-new',
            sbParams
        );

        if (!data.story) return redirect('/not-found');

        return {
            story: data.story,
            config_footer: config_footer.data.story,
            config_header: config_header.data.story,
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return redirect('/not-found');
    }
}

export async function generateStaticParams() {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get('cdn/links/', {
        version: 'published',
    });
    const paths = [];
    Object.keys(data.links).forEach((linkKey) => {
        if (
            data.links[linkKey].is_folder ||
            data.links[linkKey].slug === 'home'
        ) {
            return;
        }

        const slug = data.links[linkKey].slug;
        let splittedSlug = slug.split('/');

        paths.push({ slug: splittedSlug });
    });

    return paths;
}

export async function generateMetadata({ params }) {
    const slug = Array.isArray(params?.slug) ? params.slug.join('/') : 'home';
    const lang = params.lang || 'en';
    const data = await fetchData(slug, lang);
    if (!data || !data.story) {
        return redirect('/not-found');
    }

    const { story } = data;
    const metatags = story.content.metatags || {};
    const title = metatags.title || 'Default Title';
    const description = metatags.description || 'Default Description';

    return {
        title: `${title} · Stadler`,
        description: description,
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            og_title: title,
            og_description: description,
            url: `/${story.slug}`,
        },
        twitter: {
            card: 'summary',
            twitter_title: title,
            twitter_description: description,
        },
    };
}

generateMetadata({ params: { slug: 'home', lang: 'en' } })
    .then((metadata) => console.log(metadata))
    .catch((error) => console.error(error));

export default async function Detailpage({ params }) {
    const slug = Array.isArray(params?.slug) ? params.slug.join('/') : 'home';
    const lang = params.lang || 'en';
    const data = await fetchData(slug, lang);

    if (!data || !data.story) {
        return redirect('/not-found');
    }

    const { story, config_footer, config_header } = data;

    return (
        <Layout
            lang={lang}
            config_footer={config_footer}
            config_header={config_header}
        >
            <StoryblokStory story={story} />
        </Layout>
    );
}
