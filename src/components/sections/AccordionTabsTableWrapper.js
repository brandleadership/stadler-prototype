import { useState } from 'react'; // Import useState
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import AccordionYearWrapper from './AccordionYearWrapper';
import { motion, AnimatePresence } from "framer-motion";

const AccordionTabsTableWrapper = ({ blok }) => {
    const [activeTab, setActiveTab] = useState(0); // Initialize active tab state

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="max-w-full col-span-12" {...storyblokEditable(blok)}>
            <nav
                className="mx-auto grid grid-cols-2 gap-2 sm:grid-cols-6 sm:gap-4"
                aria-label="Tabs"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
            >
                
                {blok.year_wrapper.map((nestedBlok, index) => (
                    <button
                        key={nestedBlok._uid}
                        type="button"
                        id={`tab-${index}`}
                        onClick={() => handleTabClick(index)} 
                        className={`${
                            index === activeTab ? "bg-gray-100" : ""
                        } p-3 text-center md:p-5 md:text-left ${
                            index === activeTab ? "active" : ""
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
        </div>
    );
};

export default AccordionTabsTableWrapper;
