import { Resend } from 'resend';
import { EmailTemplate } from '/src/components/email-template/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const formData = await request.formData();
    const name = formData.get('first_name');
    const lastName = formData.get('last_name');
    const subject = formData.get('subject');
    const street = formData.get('street');
    const number = formData.get('number');
    const zip = formData.get('zip');
    const city = formData.get('city');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const language = request.nextUrl.pathname.substr(1, 2);
    const gender = formData.get('gender');
    const dataProtection = formData.get('data_protection');

    try {
        const data = await resend.emails.send({
            from: 'info@stadlerrail.com <info@stadlerrail.com>',
            to: ['stadler.rail@stadlerrail.com'],
            subject: '[EXTERNAL] New Message from Contact Page',
            react: EmailTemplate({
                language: language,
                first_name: name,
                last_name: lastName,
                subject: subject,
                gender: gender,
                street: street,
                number: number,
                zip: zip,
                city: city,
                email: email,
                phone: phone,
                message: message,
                data_protection: dataProtection,
            }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
