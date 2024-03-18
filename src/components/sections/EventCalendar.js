import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';

const eventData = [
    {
        event: 'Event',
        date: 'tt. mm. yyyy',
        link: '#',
    },
    {
        event: 'Event',
        date: 'tt. mm. yyyy',
        link: '#',
    },
    {
        event: 'Event',
        date: 'tt. mm. yyyy',
        link: '#',
    },
    {
        event: 'Event',
        date: 'tt. mm. yyyy',
        link: '#',
    },
    {
        event: 'Event',
        date: 'tt. mm. yyyy',
        link: '#',
    },
];
const EventCalendar = ({ mainTitle, eventsData, withoutEventLink }) => {
    return (
        <>
            <section className="bg-white pb-24">
                <ContentWidth>
                    <div className="max-w-full col-span-12">
                        <div className="text-start">
                            <H2>{mainTitle}</H2>
                        </div>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 w-1/3">
                                        Event
                                    </th>
                                    <th scope="col" className="px-6 py-3 w-1/3">
                                        Date
                                    </th>
                                    {!withoutEventLink && (
                                        <th
                                            scope="col"
                                            className="px-6 py-3 w-1/3"
                                        >
                                            Event ansehen
                                        </th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {eventsData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b dark:bg-black dark:border-gray-700"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                                        >
                                            {item.event}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.date}
                                        </td>
                                        {!withoutEventLink && (
                                            <td className="px-6 py-4 text-primary">
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                >
                                                    Event ansehen
                                                </a>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </ContentWidth>
            </section>
        </>
    );
};
export default EventCalendar;
