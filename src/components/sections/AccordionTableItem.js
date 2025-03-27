'use client';
import { storyblokEditable } from '@storyblok/react/rsc';

const AccordionTableItem = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <table className="w-full text-left text-sm text-greySolid-600 rtl:text-right">
                <thead className="bg-primarySolid-50 text-xs uppercase text-black">
                    <tr>
                        {blok?.table.thead.map((th, index) => (
                            <th
                                key={index}
                                scope="col"
                                className="w-1/5 px-6 py-3"
                            >
                                {th.value}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {blok?.table.tbody.map((tr, rowIndex) => (
                        <tr key={rowIndex} className="border-b bg-white">
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
