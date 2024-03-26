'use client';
import { useRef } from 'react';

export default function NewsLetterSignUpForm() {
    const inputRef = useRef(null);

    const subscribeUser = async (e) => {
        e.preventDefault();

        // this is where your mailchimp request is made

        try {
            const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
            const API_KEY = process.env.MAILCHIMP_API_KEY;
            const DATACENTER = process.env.MAILCHIMP_API_SERVER;
            const data = {
                email_address: email,
                status: 'subscribed',
            };

            const response = await fetch(
                `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

                {
                    body: JSON.stringify(data),
                    headers: {
                        Authorization: `apikey ${API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                }
            );
            console.log("response")
            if (response.status >= 400) {
                return response.status(400).json({
                    error: `There was an error subscribing to the newsletter.
        Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
                });
            }

            return response.status(201).json({ error: '' });
        } catch (error) {
            return response.status(500).json({ error: error.message || error.toString() });
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