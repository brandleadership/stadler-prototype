import { storyblokEditable } from '@storyblok/react/rsc';

const AccordionTableItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black uppercase bg-primarySolid-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {blok?.table.thead.map((th, index) => (
                            <th
                                key={index}
                                scope="col"
                                className="px-6 py-3 w-1/5"
                            >
                                {th.value}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {blok?.table.tbody.map((tr, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="bg-white border-b dark:bg-black dark:border-gray-700"
                        >
                            {tr.body.map((td, colIndex) => (
                                <td key={colIndex} className="px-6 py-4">
                                    {td.value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AccordionTableItem;
