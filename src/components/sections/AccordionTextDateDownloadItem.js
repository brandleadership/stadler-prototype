import { storyblokEditable } from '@storyblok/react/rsc';

const AccordionTextDateDownloadItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <ul>
                <div>
                    <li className=" text-xs flex justify-between items-center bg-white border-b dark:bg-black dark:border-gray-700px-6 py-4 font-medium text-black dark:text-white">
                        <p className=" px-6 py-3 w-3/12 font-bold">
                            {blok?.title}
                        </p>
                        <p className="px-6 py-3 w-5/12  ">{blok?.text_date}</p>

                        <a
                            className="text-primary px-6 py-3 w-2/12 text-center"
                            href={blok?.download_bericht.url}
                        >
                            {blok?.CTA_download_bericht}
                        </a>
                        <a
                            className="text-primary px-6 py-3 w-2/12 text-center"
                            href={blok?.download_presentation.url}
                        >
                            {blok?.CTA_download_presentation}
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default AccordionTextDateDownloadItem;
