'use client';

import SmallWidth from '../layouts/SmallWidth';
import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import { useState } from 'react';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '/i18nConfig';
import RichTextRenderer from '../helpers/RichTextRenderer';
import H3 from '../typography/H3';
import debounce from '../helpers/Debounce';

export default function ContactForm({ blok }) {
    const [first_name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [zip, setZIP] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [data_protection, setDataProtection] = useState(false);
    const [gender, setGender] = useState('');
    const [loading, setLoading] = useState(false);
    const [validationError, setValidationError] = useState(false);
    const [validationSubscribedError, setValidationSubscribedError] =
        useState(false);
    const [validationSuccess, setValidationSuccess] = useState(false);
    const [errors, setErrors] = useState({
        first_name: false,
        last_name: false,
        subject: false,
        street: false,
        number: false,
        zip: false,
        city: false,
        email: false,
        phone: false,
        message: false,
        data_protection: false,
    });

    const currentLocale = useCurrentLocale(i18nConfig);

    const sendForm = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('street', street);
        formData.append('number', number);
        formData.append('zip', zip);
        formData.append('city', city);
        formData.append('phone', phone);
        formData.append('message', message);
        formData.append('data_protection', data_protection);
        formData.append('gender', gender);

        try {
            const response = await fetch(`/${currentLocale}/api/send`, {
                method: 'post',
                body: formData,
            });

            const responseData = await response.json();

            if (responseData.data.id) {
                setValidationSuccess(true);
                setValidationError(false);
                setValidationSubscribedError(false);
                console.log('Message successfully sent');
                return false;
            } else {
                setValidationSuccess(false);
                setValidationError(true);
                setValidationSubscribedError(response.status === 400);
                console.log('An error occurred, please try again later.');
                return false;
            }
        } catch (err) {
            console.error('Submission failed:', err);
            setValidationSuccess(false);
            setValidationError(true);
            setValidationSubscribedError(false);
            console.log('An error occurred, please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Debounced validation functions
    const debouncedValidateFirstName = debounce((value) => {
        const hasError = blok?.required_first_name && !value.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            first_name: hasError,
        }));
    }, 300);

    const debouncedValidateSubject = debounce((value) => {
        const hasError = blok?.required_subject && !value.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            subject: hasError,
        }));
    }, 300);

    const debouncedValidateLastName = debounce((value) => {
        const hasError = blok?.required_last_name && !value.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            last_name: hasError,
        }));
    }, 300);

    const debouncedValidateEmail = debounce((value) => {
        const valid = /\S+@\S+\.\S+/.test(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            email: blok?.required_email && !valid,
        }));
    }, 300);

    const debouncedValidateStreet = debounce((value) => {
        const hasError = blok?.required_street && !value.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            street: hasError,
        }));
    }, 300);

    const debouncedValidateNumber = debounce((value) => {
        const hasError = blok?.required_number && value === '';
        setErrors((prevErrors) => ({
            ...prevErrors,
            number: hasError,
        }));
        setNumber(value);
    }, 300);

    const debouncedValidateZip = debounce((value) => {
        const hasError = blok?.required_zip && !value.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            zip: hasError,
        }));
    }, 300);

    const debouncedValidateCity = debounce((value) => {
        const hasError = blok?.required_city && !value.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            city: hasError,
        }));
    }, 300);

    const debouncedValidatePhone = debounce((value) => {
        const phonePattern = /^\+?(\d[-.\s]?){7,14}\d$/;
        const valid = phonePattern.test(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            phone: blok?.required_phone && !valid,
        }));
    }, 300);

    const debouncedValidateMessage = debounce((value) => {
        const hasError = blok?.required_message && !value.trim();
        setErrors((prevErrors) => ({
            ...prevErrors,
            message: hasError,
        }));
    }, 300);

    const validateCheckbox = (isChecked) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            data_protection: blok?.dataprotection_required ? !isChecked : false,
        }));
    };

    const validateForm = async () => {
        const newErrors = {
            first_name: blok?.required_first_name ? !first_name.trim() : false,
            last_name: blok?.required_last_name ? !last_name.trim() : false,
            email: blok?.required_email ? !/\S+@\S+\.\S+/.test(email) : false,
            phone: blok?.required_phone
                ? !/^\+?(\d[-.\s]?){7,14}\d$/.test(phone)
                : false,
            subject: blok?.required_subject ? !subject.trim() : false,
            street: blok?.required_street ? !street.trim() : false,
            number: blok?.required_number ? !number.trim() : false,
            zip: blok?.required_zip ? !zip.trim() : false,
            city: blok?.required_city ? !city.trim() : false,
            message: blok?.required_message ? !message.trim() : false,
            data_protection: blok?.dataprotection_required
                ? !data_protection
                : false,
        };

        setErrors(newErrors);

        const isFormValid = !Object.values(newErrors).some(
            (isError) => isError
        );

        if (isFormValid) {
            console.log('Form is valid, sending form...');
            await sendForm();
        } else {
            console.log('Form is not valid, errors need to be corrected.');
        }

        return isFormValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateForm();
    };

    return (
        <section
            className="bg-white pb-5 lg:pb-24"
            {...storyblokEditable(blok)}
        >
            <SmallWidth>
                <div className="col-span-12">
                    <form
                        noValidate
                        className="relative"
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <H2>{blok?.title}</H2>
                        <div className="group relative z-0 mb-5 w-full">
                            <label
                                htmlFor="subject"
                                className="mb-2 block text-sm font-medium text-greySolid-800"
                            >
                                {blok?.label_subject}{' '}
                                {blok?.required_subject ? '*' : ''}
                            </label>
                            <input
                                tabIndex="1"
                                className="block w-full border border-greySolid-400 bg-white p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary"
                                name="subject"
                                id="subject"
                                autoComplete="subject"
                                value={subject}
                                type="text"
                                placeholder=""
                                required={blok?.required_subject ? true : false}
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                    debouncedValidateSubject(e.target.value);
                                }}
                                onBlur={(e) =>
                                    debouncedValidateSubject(e.target.value)
                                }
                            />
                            <div
                                className={`${errors.subject ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                            >
                                {blok.subject_error}
                            </div>
                        </div>
                        <div className="mb-5 flex flex-wrap">
                            <div className="me-4 flex items-center">
                                <input
                                    tabIndex="1"
                                    id="male"
                                    type="radio"
                                    value="male"
                                    name="gender"
                                    className="h-4 w-4 border-greySolid-400 bg-greySolid-100 text-primary focus:ring-2 focus:ring-primary"
                                    onChange={(e) => setGender(e.target.value)}
                                    onBlur={(e) => setGender(e.target.value)}
                                />
                                <label
                                    htmlFor="male"
                                    className="ms-2 text-sm font-medium text-greySolid-800"
                                >
                                    {blok?.gender_male}
                                </label>
                            </div>
                            <div className="me-4 flex items-center">
                                <input
                                    tabIndex="1"
                                    id="female"
                                    type="radio"
                                    value="female"
                                    name="gender"
                                    className="h-4 w-4 border-greySolid-400 bg-greySolid-100 text-primary focus:ring-2 focus:ring-primary"
                                    onChange={(e) => setGender(e.target.value)}
                                    onBlur={(e) => setGender(e.target.value)}
                                />
                                <label
                                    htmlFor="female"
                                    className="ms-2 text-sm font-medium text-greySolid-800"
                                >
                                    {blok?.gender_female}
                                </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="group relative z-0 mb-5 w-full">
                                <label
                                    htmlFor="first_name"
                                    className="mb-2 block text-sm font-medium text-greySolid-800"
                                >
                                    {blok?.label_first_name}{' '}
                                    {blok?.required_first_name ? '*' : ''}
                                </label>
                                <input
                                    tabIndex="1"
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    autoComplete="first_name"
                                    value={first_name}
                                    className="block w-full border border-greySolid-400 bg-white p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary "
                                    placeholder=""
                                    required={
                                        blok?.required_first_name ? true : false
                                    }
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        debouncedValidateFirstName(
                                            e.target.value
                                        );
                                    }}
                                    onBlur={(e) =>
                                        debouncedValidateFirstName(
                                            e.target.value
                                        )
                                    }
                                />
                                <div
                                    className={`${errors.first_name ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                                >
                                    {blok.first_name_error}
                                </div>
                            </div>
                            <div className="group relative z-0 mb-5 w-full">
                                <label
                                    htmlFor="last_name"
                                    className="mb-2 block text-sm font-medium text-greySolid-800 "
                                >
                                    {blok?.label_last_name}{' '}
                                    {blok?.required_last_name ? '*' : ''}
                                </label>
                                <input
                                    tabIndex="1"
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    value={last_name}
                                    className="block w-full border border-greySolid-400 bg-white p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary "
                                    placeholder=""
                                    required={
                                        blok?.required_last_name ? true : false
                                    }
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                        debouncedValidateLastName(
                                            e.target.value
                                        );
                                    }}
                                    onBlur={(e) =>
                                        debouncedValidateLastName(
                                            e.target.value
                                        )
                                    }
                                />
                                <div
                                    className={`${errors.last_name ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                                >
                                    {blok.last_name_error}
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="group relative z-0 mb-5 w-full">
                                <label
                                    htmlFor="street"
                                    className="mb-2 block text-sm font-medium text-greySolid-800 "
                                >
                                    {blok?.label_street}{' '}
                                    {blok?.required_street ? '*' : ''}
                                </label>
                                <input
                                    tabIndex="1"
                                    name="street"
                                    id="street"
                                    autoComplete="street"
                                    value={street}
                                    type="text"
                                    placeholder=""
                                    required={
                                        blok?.required_street ? true : false
                                    }
                                    onChange={(e) => {
                                        setStreet(e.target.value);
                                        debouncedValidateStreet(e.target.value);
                                    }}
                                    onBlur={(e) =>
                                        debouncedValidateStreet(e.target.value)
                                    }
                                    className="block w-full border border-greySolid-400 bg-white p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary"
                                />
                                <div
                                    className={`${errors.street && blok?.required_street ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                                >
                                    {blok.street_error}
                                </div>
                            </div>
                            <div className="group relative z-0 mb-5 w-full">
                                <label
                                    htmlFor="number"
                                    className="mb-2 block text-sm font-medium text-greySolid-800 "
                                >
                                    {blok?.label_nr}{' '}
                                    {blok?.required_number ? '*' : ''}
                                </label>
                                <input
                                    tabIndex="1"
                                    name="number"
                                    id="number"
                                    autoComplete="number"
                                    value={number}
                                    type="number"
                                    placeholder=""
                                    required={
                                        blok?.required_number ? true : false
                                    }
                                    onChange={(e) => {
                                        setNumber(e.target.value);
                                        debouncedValidateNumber(e.target.value);
                                    }}
                                    onBlur={(e) =>
                                        debouncedValidateNumber(e.target.value)
                                    }
                                    className="block w-full border border-greySolid-400 bg-white p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary "
                                />
                                <div
                                    className={`${errors.number && blok?.required_number ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                                >
                                    {blok.number_error}
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="group relative z-0 mb-5 w-full">
                                <label
                                    htmlFor="zip"
                                    className="mb-2 block text-sm font-medium text-greySolid-800 "
                                >
                                    {blok?.label_zip}{' '}
                                    {blok?.required_zip ? '*' : ''}
                                </label>
                                <input
                                    tabIndex="1"
                                    name="zip"
                                    id="zip"
                                    autoComplete="zip"
                                    value={zip}
                                    type="text"
                                    placeholder=""
                                    required={blok?.required_zip ? true : false}
                                    onChange={(e) => {
                                        setZIP(e.target.value);
                                        debouncedValidateZip(e.target.value);
                                    }}
                                    onBlur={(e) =>
                                        debouncedValidateZip(e.target.value)
                                    }
                                    className="block w-full border border-greySolid-400 bg-white p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary "
                                />
                                <div
                                    className={`${errors.zip && blok?.required_zip ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                                >
                                    {blok.zip_error}
                                </div>
                            </div>
                            <div className="group relative z-0 mb-5 w-full">
                                <label
                                    htmlFor="city"
                                    className="mb-2 block text-sm font-medium text-greySolid-800 "
                                >
                                    {blok?.label_city}{' '}
                                    {blok?.required_city ? '*' : ''}
                                </label>
                                <input
                                    tabIndex="1"
                                    name="city"
                                    id="city"
                                    autoComplete="city"
                                    value={city}
                                    type="text"
                                    placeholder=""
                                    required={
                                        blok?.required_city ? true : false
                                    }
                                    onChange={(e) => {
                                        setCity(e.target.value);
                                        debouncedValidateCity(e.target.value);
                                    }}
                                    onBlur={(e) =>
                                        debouncedValidateCity(e.target.value)
                                    }
                                    className="block w-full border border-greySolid-400 bg-white p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary "
                                />
                                <div
                                    className={`${errors.city && blok?.required_city ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                                >
                                    {blok.city_error}
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="group relative z-0 mb-5 w-full">
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-greySolid-800 "
                                >
                                    {blok?.label_email}{' '}
                                    {blok?.required_email ? '*' : ''}
                                </label>
                                <input
                                    tabIndex="1"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    value={email}
                                    type="email"
                                    placeholder=""
                                    required={
                                        blok?.required_email ? true : false
                                    }
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    onBlur={(e) =>
                                        debouncedValidateEmail(e.target.value)
                                    }
                                    className="block w-full border border-greySolid-400 bg-white p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary"
                                />
                                <div
                                    className={`${errors.email && blok?.required_email ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                                >
                                    {blok.email_error}
                                </div>
                            </div>
                            <div className="group relative z-0 mb-5 w-full">
                                <label
                                    htmlFor="phone"
                                    className="mb-2 block text-sm font-medium text-greySolid-800 "
                                >
                                    {blok?.label_phone}{' '}
                                    {blok?.required_phone ? '*' : ''}
                                </label>
                                <input
                                    tabIndex="1"
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    autoComplete="phone"
                                    value={phone}
                                    placeholder=""
                                    required={
                                        blok?.required_phone ? true : false
                                    }
                                    onChange={(e) => {
                                        setPhone(e.target.value);
                                    }}
                                    onBlur={(e) =>
                                        debouncedValidatePhone(e.target.value)
                                    }
                                    className="block w-full border border-greySolid-400 bg-white p-3 text-sm text-greySolid-800 focus:border-primary focus:ring-primary "
                                />
                                <div
                                    className={`${errors.phone && blok?.required_phone ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                                >
                                    {blok.phone_error}
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-greySolid-800 "
                            >
                                {blok?.label_message}{' '}
                                {blok?.required_message ? '*' : ''}
                            </label>
                            <textarea
                                rows={6}
                                name="message"
                                id="message"
                                value={message}
                                type="text"
                                placeholder=""
                                required={blok?.required_message ? true : false}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    debouncedValidateMessage(e.target.value);
                                }}
                                onBlur={(e) =>
                                    debouncedValidateMessage(e.target.value)
                                }
                                className="block w-full border border-greySolid-400 bg-white p-2.5 text-sm text-greySolid-800 focus:border-primary focus:ring-primary "
                            ></textarea>
                            <div
                                className={`${errors.message && blok?.required_message ? 'block' : 'hidden'} mb-2 mt-2 text-sm font-medium text-red-700`}
                            >
                                {blok.message_error}
                            </div>
                        </div>
                        <div className="mb-8 flex flex-col">
                            <div className="flex items-center">
                                <input
                                    tabIndex="1"
                                    className="border-1 relative h-6 w-6 shrink-0 border-greySolid-400 checked:border-primary checked:bg-primary hover:border-primary hover:checked:bg-primary focus:border-primary focus:ring-2 focus:ring-primary focus:checked:bg-primary"
                                    type="checkbox"
                                    name="data_protection"
                                    id="data_protection"
                                    defaultChecked={data_protection}
                                    onChange={(e) => {
                                        setDataProtection(e.target.checked);
                                        validateCheckbox(e.target.checked);
                                    }}
                                />
                                <label
                                    htmlFor="data_protection"
                                    className="ml-2 text-sm font-medium text-black "
                                >
                                    <RichTextRenderer
                                        text={blok.disclaimer_text}
                                        customStyles="!text-sm !my-0"
                                    />
                                </label>
                            </div>
                            <div
                                className={`${errors.data_protection ? 'block' : 'hidden'} mt-2 text-sm font-medium text-red-700`}
                            >
                                {blok.checkbox_error}
                            </div>
                        </div>

                        <button
                            tabIndex="1"
                            type="submit"
                            className="flex cursor-pointer items-center gap-2 rounded bg-stadlergradient px-5 py-2.5 text-sm font-medium leading-6 text-white"
                        >
                            {loading ? (
                                <div
                                    style={{
                                        borderTopColor: 'transparent',
                                    }}
                                    className="h-6 w-6 animate-spin rounded-full border-4 border-solid border-white"
                                ></div>
                            ) : (
                                blok?.submit_button_text
                            )}
                        </button>
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
                    </form>
                </div>
            </SmallWidth>
        </section>
    );
}
