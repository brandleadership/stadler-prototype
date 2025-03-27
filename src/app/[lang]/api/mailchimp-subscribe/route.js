import { NextResponse } from 'next/server';
import * as crypto from 'crypto';

export async function POST(request) {
    const formData = await request.formData();
    const email = formData.get('email');
    const firma = formData.get('firma');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');

    const accessToken = process.env.MAILCHIMP_API_KEY;
    let url = `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`;

    try {
        const subscriberHash = crypto
            .createHash('md5')
            .update(email)
            .digest('hex');
        url += `/${subscriberHash}`;

        const initialResponse = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify({
                email_address: email,
                status: 'pending',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                    COMPANY: firma,
                },
            }),
        });
        const response = await initialResponse.json();

        return NextResponse.json(response);
    } catch (err) {
        return NextResponse.json(err);
    }
}
