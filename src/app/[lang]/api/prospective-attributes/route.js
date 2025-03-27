import { NextResponse } from 'next/server';

export async function GET(req) {
    const accessToken = process.env.PROSPECTIVE_API_TOKEN;
    let url = `${process.env.PROSPECTIVE_API_BASE_URL}/attributes/`;

    // console.log(req.nextUrl.searchParams.get('language'))
    if (req.nextUrl.searchParams.get('language')) {
        url += `?lang=${req.nextUrl.searchParams.get('language')}`;
    } else {
        url += `?lang=de`;
    }

    try {
        const initialResponse = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const attributes = await initialResponse.json();

        return NextResponse.json(attributes);
    } catch {
        return NextResponse.json({});
    }
}
