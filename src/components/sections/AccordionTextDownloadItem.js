import { storyblokEditable } from '@storyblok/react/rsc';

const AccordionTextDownloadItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <ul>
                <div>
                    <li className=" my-4 text-xl flex justify-between items-center">
                        <p className="w-1/2">{blok?.text_location}</p>
                        <p className="w-1/2">{blok?.text_certifications}</p>

                        <a
                            className="text-primary mr-4"
                            href={blok?.download_en.url}
                        >
                            {blok?.download_CTA_EN}
                        </a>
                        <a
                            className="text-primary"
                            href={blok?.download_de.url}
                        >
                            {blok?.download_CTA_DE}
                        </a>
                    </li>
                    {/* <div className="border-b mb-6"></div> */}
                </div>
            </ul>
        </div>
    );
};

export default AccordionTextDownloadItem;
