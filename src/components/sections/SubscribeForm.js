'use client';
import { useRef } from 'react';

export default function NewsLetterSignUpForm() {
    const inputRef = useRef(null);
    console.log("process.env.MAILCHIMP_AUDIENCE_ID", process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID, process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY)

    const subscribeUser = async (e) => {
        e.preventDefault();

        // this is where your mailchimp request is made

        try {
            const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;
            const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
            const DATACENTER = process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER;
            const data = {
                email_address: "email@com.com",
                status: 'subscribed',
                "merge_fields": { "FNAME": "TEST", "LNAME": "TEST", "COMPANY": "TEST" }
            };

            const response = await fetch(
                `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

                {
                    body: JSON.stringify(data),
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        "Access-Control-Allow-Methods": "POST",
                        'Access-Control-Allow-Credentials': 'true'
                    },
                    method: 'POST',
                }
            );
            console.log("response", response)
            if (response.status >= 400) {
                return response.status(400).json({
                    error: `There was an error subscribing to the newsletter.
        Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
                });
            }

            return response.status(201).json({ error: '' });
        }
        catch (error) {
            return console.log(error)
        }
    };

    return (
        <form onSubmit={subscribeUser}>
            <label htmlFor="email-input" className="form__label">
                Your Best Email
            </label>

            <input
                type="email"
                id="email-input"
                name="email"
                placeholder="your best email"
                ref={inputRef}
                required
                autoCapitalize="off"
                autoCorrect="off"
            />

            <button type="submit" value="" name="subscribe">
                Subscribe
            </button>
        </form>
    );
}