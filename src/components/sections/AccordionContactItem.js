import { PhoneIcon } from '../icons/PhoneIcon';
import { MailIcon } from '../icons/MailIcon';
import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

const AccordionContactItem = ({ blok }) => {
    return (
        <ul {...storyblokEditable(blok)} className="mb-8">
            <li className="mb-2">
                <p className="text-base font-medium text-black lg:text-xl">
                    {blok?.contact_name}
                </p>
            </li>
            <li className="mb-2">
                <div className="group-hover:text-primary">
                    <Link
                        tabIndex="1"
                        href={`tel:${blok?.contact_phone}`}
                        className="flex cursor-pointer items-center text-black transition-all hover:text-primary"
                    >
                        <span className="mr-2">
                            <PhoneIcon
                                color="#000"
                                className="h-4 w-4 fill-black"
                            />
                        </span>
                        {blok?.contact_phone}
                    </Link>
                </div>
            </li>
            <li className="mb-2">
                <div className="group-hover:text-primary">
                    <Link
                        tabIndex="1"
                        href={`mailto:${blok?.contact_email}`}
                        className="flex cursor-pointer items-center text-black transition-all hover:text-primary"
                    >
                        <span className="mr-2">
                            <MailIcon
                                color="#000"
                                className="h-4 w-4 fill-black"
                            />
                        </span>
                        {blok?.contact_email}
                    </Link>
                </div>
            </li>
        </ul>
    );
};

export default AccordionContactItem;
