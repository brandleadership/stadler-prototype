import Text from '../typography/Text';
import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonUrlRenderer from '../../helpers/ButtonUrlRenderer';
import { DownloadIcon } from '../icons/DownloadIcon';

export default function DownloadReferenceItems({ blok }) {
    const assetType = () => {
        const arr = blok?.link?.url.split('.') || [];
        return arr[arr.length - 1].toUpperCase();
    };
    return (
        <a
            aria-label="Link to download"
            rel="noreferrer noopener"
            target={blok?.link?.target ?? '_blank'}
            href={ButtonUrlRenderer(blok?.link)}
            className={`col-span-2 mb-2 flex items-center justify-between rounded-[4px] bg-white p-3 md:col-span-1`}
            {...storyblokEditable(blok)}
        >
            <div className="flex text-base">{blok?.download_link_title}</div>
            <div className="flex items-center">
                <span
                    className={`bg-secondary-salbei-800 mr-4 rounded-xl px-2 pb-1 leading-[20px]`}
                >
                    <Text>
                        {blok?.link?.linktype === 'asset' && blok?.link?.url
                            ? assetType()
                            : 'PDF'}
                    </Text>
                </span>
                <DownloadIcon styles="w-4 h-4 mr-4" color="#000000" />
            </div>
        </a>
    );
}
