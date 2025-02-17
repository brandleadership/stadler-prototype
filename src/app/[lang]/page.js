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

const getVersion = (searchParams = undefined) => {
    if (searchParams) {
        // const pathname = searchParams.get('x-search-paramethers-url') || '';
        console.log('pathname 3', searchParams);
        if (JSON.stringify(searchParams).includes('_storyblok_published')) {
            return 'published';
        } else if (JSON.stringify(searchParams).includes('_storyblok')) {
            return 'draft';
        } else {
            return 'published';
        }
    } else {
        return 'published';
    }
};

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'de' }];
}

async function fetchData(slug, lang, search) {
    const sbParams = {
        resolve_links: 'url',
        version: getVersion(search),
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

let metadataCache = {};

export async function generateMetadata({ params }) {
    const slug = params?.slug ? params.slug.join('/') : 'home';
    const lang = params.lang || 'en';
    const cacheKey = `${lang}-${slug}`;

    if (metadataCache[cacheKey]) {
        return metadataCache[cacheKey];
    }

    const { story } = await fetchData(slug, lang);

    if (!story) {
        return redirect('/not-found');
    }

    const metatags = story.content.metatags || {};
    const title = metatags.title || 'Stadler';
    const description =
        metatags.description ||
        `Welcome to Stadler's website. Discover our wide range of innovative solutions in the fields of Rolling Stock, Signalling and Service.`;
    const og_description =
        metatags.og_description || `Welcome to Stadler's website.`;
    const og_title = metatags.og_title || 'Stadler';
    const og_image = metatags.og_image || 'Default OG Image url';
    const twitter_image = metatags.twitter_image || 'Default Image url';
    const twitter_title = metatags.twitter_title || 'Stadler';
    const twitter_description =
        metatags.twitter_description ||
        `Welcome to Stadler's website. Discover our wide range of innovative solutions in the fields of Rolling Stock, Signalling and Service.`;

    const metadata = {
        title: title,
        description: description,
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: og_title,
            description: og_description,
            url: og_image,
        },
        twitter: {
            card: twitter_image,
            title: twitter_title,
            description: twitter_description,
        },
    };

    metadataCache[cacheKey] = metadata;

    return metadata;
}

export default async function Homepage({ params, searchParams }) {
    const slug = 'home';
    const lang = params.lang || 'en';
    const { story, config_footer, config_header } = await fetchData(
        slug,
        lang,
        searchParams
    );

    if (!story) {
        return redirect('/not-found');
    }

    return (
        <>
            <Layout config_footer={config_footer} config_header={config_header}>
                <StoryblokStory story={story} />
            </Layout>
        </>
    );
}
