import { storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import Text from '../typography/Text';
import H2 from '../typography/H2';
import H3 from '../typography/H3';
import { useState } from 'react';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '/i18nConfig';
import RichTextRenderer from '../helpers/RichTextRenderer';
import { render } from 'storyblok-rich-text-react-renderer';

export default function MailchimpEmbed({ blok }) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [validationError, setValidationError] = useState(false);
    const [validationSubscribedError, setValidationSubscribedError] =
        useState(false);
    const [validationSuccess, setValidationSuccess] = useState(false);
    const [errors, setErrors] = useState({
        email: false,
        firstName: false,
        lastName: false,
        company: false,
        isSelected: false,
    });

    const currentLocale = useCurrentLocale(i18nConfig);
    const subscribeUser = async () => {
        const formData = new FormData();

        formData.append('email', email);
        formData.append('firma', company);
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);

        try {
            const checkConnection = await fetch(
                `/${currentLocale}/api/mailchimp-subscribe`,
                {
                    method: 'post',
                    body: formData,
                }
            );
            const attributes = await checkConnection.json();

            if (
                attributes.status == 'subscribed' ||
                attributes.status == 'pending'
            ) {
                setValidationSuccess(true);
                setValidationError(false);
                setValidationSubscribedError(false);
                return false;
            } else if (attributes.status == 400) {
                setValidationSuccess(false);
                setValidationError(true);
                setValidationSubscribedError(true);
                return false;
            } else if (attributes.status) {
                setValidationSuccess(false);
                setValidationError(true);
                setValidationSubscribedError(false);
                return false;
            } else {
                setValidationSuccess(false);
                setValidationError(true);
                setValidationSubscribedError(false);
            }
        } catch (err) {
            console.error('Submission failed:', err);
            setValidationSuccess(false);
            setValidationError(true);
            setValidationSubscribedError(false);
        }
    };

    const validateFirstName = () => {
        if (!firstName) {
            setErrors({ ...errors, firstName: true });
        } else {
            setErrors({ ...errors, firstName: false });
        }
    };
    const validateLastName = () => {
        if (!lastName) {
            setErrors({ ...errors, lastName: true });
        } else {
            setErrors({ ...errors, lastName: false });
        }
    };
    const validateEmail = () => {
        if (!email) {
            setErrors({ ...errors, email: true });
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors({ ...errors, email: true });
        } else {
            setErrors({ ...errors, email: false });
        }
    };
    const validateCompany = () => {
        if (!company) {
            setErrors({ ...errors, company: true });
        } else {
            setErrors({ ...errors, company: false });
        }
    };
    const validateCheckbox = (value) => {
        if (value) {
            setErrors({ ...errors, isSelected: true });
        } else {
            setErrors({ ...errors, isSelected: false });
        }
    };

    const validateForm = () => {
        let errors = {
            email: false,
            firstName: false,
            lastName: false,
            company: false,
            isSelected: false,
        };
        if (!firstName) {
            errors = { ...errors, firstName: true };
        }
        if (!lastName) {
            errors = { ...errors, lastName: true };
        }
        if (!email) {
            errors = { ...errors, email: true };
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors = { ...errors, email: true };
        }
        if (!company) {
            errors = { ...errors, company: true };
        }
        if (!isSelected) {
            errors = { ...errors, isSelected: true };
        }
        setErrors({ ...errors });
        if (Object.values(errors).includes(true)) {
            return false;
        } else {
            subscribeUser();
        }
    };
    // Submit
    const handleSubmit = () => {
        validateForm();
    };

    return (
        <section {...storyblokEditable(blok)} className="my-20 bg-white">
            <ContentWidth>
                <div className="col-span-12">
                    <div className="mb-4">
                        <H2>{blok.title}</H2>
                    </div>
                    <div className="font-light sm:text-xl">
                        <Text>{blok.description}</Text>
                    </div>

                    <div className="relative mt-6 w-full lg:mt-0">
                        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-4">
                            <div className="relative mb-2 w-full items-start">
                                <label className="mb-2 text-sm font-medium">
                                    {blok.fname_label} <span>*</span>
                                </label>
                                <input
                                    tabIndex="1"
                                    className="block w-full border border-greySolid-300 p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    onBlur={validateFirstName}
                                    type="text"
                                />
                                <div
                                    className={`${errors.firstName ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                                >
                                    {blok.fname_error}
                                </div>
                            </div>
                            <div className="relative mb-2 w-full items-start">
                                <label className="mb-2 text-sm font-medium">
                                    {blok.lname_label} <span>*</span>
                                </label>
                                <input
                                    tabIndex="1"
                                    className="block w-full border border-greySolid-300 p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    onBlur={validateLastName}
                                    type="text"
                                />
                                <div
                                    className={`${errors.lastName ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                                >
                                    {blok.lname_error}
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-2 w-full">
                            <label className="mb-2 text-sm font-medium">
                                {blok.company_label} <span>*</span>
                            </label>
                            <input
                                tabIndex="1"
                                className="block w-full border border-greySolid-300 p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary"
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                onBlur={validateCompany}
                            />
                            <div
                                className={`${errors.company ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                            >
                                {blok.company_error}
                            </div>
                        </div>
                        <div className="relative mb-2 w-full">
                            <label className="mb-2 text-sm font-medium">
                                {blok.email_label} <span>*</span>
                            </label>
                            <input
                                tabIndex="1"
                                className="block w-full border border-greySolid-300 p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={validateEmail}
                            />
                            <div
                                className={`${errors.email ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                            >
                                {blok.email_error}
                            </div>
                        </div>
                        <div>
                            <div className="mb-6 mt-4 flex items-start">
                                <input
                                    tabIndex="1"
                                    name="checkbox-1"
                                    className="relative mt-0.5 h-4 w-4 shrink-0 border-2 border-primary checked:border-primary checked:bg-primary hover:border-primary hover:checked:bg-primary focus:border-primary focus:ring-2 focus:ring-primary focus:checked:bg-primary"
                                    defaultChecked={isSelected}
                                    onClick={(e) => {
                                        setSelection(e.target.checked);
                                        validateCheckbox(!e.target.checked);
                                    }}
                                    type="checkbox"
                                />
                                <label
                                    htmlFor="checkbox-1"
                                    className="ms-2 text-sm text-greySolid-800"
                                >
                                    {render(blok?.checkbox_label)}
                                </label>
                            </div>
                            <div
                                className={`${errors.isSelected ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                            >
                                {blok.checkbox_error}
                            </div>
                        </div>
                        <div className="clear flex justify-center">
                            <input
                                tabIndex="1"
                                type="submit"
                                name="subscribe"
                                className="flex items-center gap-2 rounded bg-stadlergradient px-5 py-2.5 text-sm font-medium leading-6 text-white"
                                onClick={handleSubmit}
                                value={blok.button_text}
                            />
                        </div>
                        <div
                            className={`${validationError ? 'block' : 'hidden'} mb-2 mt-4 text-sm font-medium text-red-700`}
                        >
                            {validationSubscribedError
                                ? blok.error_email_exists
                                : blok.global_validation_error}
                        </div>
                        {validationSuccess && (
                            <div className="align-center text-md absolute left-0 top-0 flex h-full w-full flex-wrap content-center items-center justify-center bg-white">
                                <div className="w-full text-center">
                                    <H3>{blok.global_validation_success}</H3>
                                </div>
                                <div className="w-2/3 text-center">
                                    <RichTextRenderer
                                        text={
                                            blok?.global_validation_success_description
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}
