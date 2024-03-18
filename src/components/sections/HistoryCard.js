import { storyblokEditable } from '@storyblok/react/rsc';

export default function HistoryCard({ blok }) {
    return (
        <div
            {...storyblokEditable(blok)}
            className="max-w-sm
      bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
        >
            <img
                alt="Meaningful alt text for an image that is not purely decorative"
                src={blok?.image.filename}
            />
            <div className="p-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blok?.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {blok?.text}
                </p>
            </div>
        </div>
    );
}
