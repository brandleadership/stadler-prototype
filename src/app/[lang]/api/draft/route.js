import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import StoryblokClient from 'storyblok-js-client';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const slug = searchParams.get('slug');

    // Security check: Ensure the secret matches
    if (secret !== process.env.SECRET || !slug) {
        return new Response('Invalid token or slug', { status: 401 });
    }

    // Initialize Storyblok client
    const storyblok = new StoryblokClient({
        accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    });

    try {
        const { data } = await storyblok.get(`cdn/stories/${slug}`, {
            version: 'draft',
            excluding_fields: 'header,body,seo',
        });

        if (!data?.story) {
            return new Response('Slug not found', { status: 404 });
        }

        // Enable draft mode
        draftMode().enable();

        // Safely redirect to the verified slug path
        redirect(`/${data.story.full_slug}`);
    } catch (error) {
        console.error('Storyblok fetch error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
