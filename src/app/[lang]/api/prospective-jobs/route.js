import { NextResponse } from 'next/server';

export async function GET(request) {
    // Call an external API endpoint to get posts
    const accessToken = process.env.PROSPECTIVE_API_TOKEN;
    let url = `${process.env.PROSPECTIVE_API_BASE_URL}/jobs/?offset=0&limit=500&lang=de`;
    if (request.nextUrl.searchParams.get('filter')) {
        url += `&f=${request.nextUrl.searchParams.get('filter')}`;
    }
    if (request.nextUrl.searchParams.get('search')) {
        url += `&q=${request.nextUrl.searchParams.get('search')}`;
    }

    try {
        const initialResponse = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const allJobs = await initialResponse.json();

        return NextResponse.json({ message: allJobs });
    } catch {
        return NextResponse.json({ message: [] });
    }
}
