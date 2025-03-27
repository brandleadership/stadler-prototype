'use client';
import { useState } from 'react';
import AccordionYearWrapper from './AccordionYearWrapper';

const AccordionTabsTableWrapper = ({ blok }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <section>
            <nav
                className="mx-auto grid grid-cols-2 gap-2 sm:grid-cols-6 sm:gap-4"
                aria-label="Tabs"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
            >
                {blok.year_wrapper.map((nestedBlok, index) => (
                    <button
                        tabIndex="1"
                        key={nestedBlok._uid}
                        type="button"
                        id={`tab-${index}`}
                        onClick={() => handleTabClick(index)}
                        className={`${
                            index === activeTab ? 'bg-greySolid-100' : ''
                        } p-3 text-center md:p-6 ${
                            index === activeTab ? 'active' : ''
                        }`}
                    >
                        {nestedBlok.year}
                    </button>
                ))}
            </nav>
            <div className="tab-content">
                {blok.year_wrapper.map((nestedBlok, index) => (
                    <AccordionYearWrapper
                        key={nestedBlok._uid}
                        blok={nestedBlok}
                        isActive={index === activeTab}
                    />
                ))}
            </div>
        </section>
    );
};

export default AccordionTabsTableWrapper;
