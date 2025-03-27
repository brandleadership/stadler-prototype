'use client';
import ContentWidth from '../layouts/ContentWidth';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

import { useState } from 'react';
import { SearchIcon } from '../icons/SearchIcon';
const filters = { country: '', category: '', searchTerm: '' };

function AllStandorte({ blok }) {
    const [selectedOptions, setSelectedOptions] = useState({
        filters,
    });

    const countryDropdown = (
        <select
            className="block w-full border-primary px-4 py-2 text-base hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
            onChange={(e) => handleFilterChange(e, 'country')}
            value={selectedOptions.country}
        >
            <option value="">{blok.filter_country_title}</option>
            {blok.filter_country.map((country, index) => (
                <option key={index} value={country.uuid}>
                    {country.content.category}
                </option>
            ))}
        </select>
    );

    const categoryDropdown = (
        <select
            className="block w-full border-primary px-4 py-2 text-base hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
            onChange={(e) => handleFilterChange(e, 'category')}
            value={selectedOptions.category}
        >
            <option value="">{blok.filter_businessarea_title}</option>
            {blok.filter_business_area.map((category, index) => (
                <option key={index} value={category.uuid}>
                    {category.content.category}
                </option>
            ))}
        </select>
    );

    const handleFilterChange = (e, filterType) => {
        const locationSelectedOptions = { ...selectedOptions };
        locationSelectedOptions[filterType] = e.target.value;
        setSelectedOptions(locationSelectedOptions);
    };

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSelectedOptions((prevState) => ({ ...prevState, searchTerm }));
    };

    const filteredLocations = blok.locations_wrapper.filter((location) => {
        const countryMatch =
            !selectedOptions.country ||
            location.tag_country.some(
                (tag) => tag.uuid === selectedOptions.country
            );
        const categoryMatch =
            !selectedOptions.category ||
            location.tag_business_area.some(
                (tag) => tag.uuid === selectedOptions.category
            );
        const textMatch =
            !selectedOptions.searchTerm ||
            (location.title &&
                typeof location.title === 'string' &&
                location.title
                    .toLowerCase()
                    .includes(selectedOptions.searchTerm)) ||
            (location.text &&
                typeof location.text === 'string' &&
                location.text
                    .toLowerCase()
                    .includes(selectedOptions.searchTerm)) ||
            location.tag_country.some(
                (tag) =>
                    typeof tag.name === 'string' &&
                    tag.name.toLowerCase().includes(selectedOptions.searchTerm)
            ) ||
            location.tag_business_area.some(
                (tag) =>
                    tag.content.category &&
                    typeof tag.content.category === 'string' &&
                    tag.content.category
                        .toLowerCase()
                        .includes(selectedOptions.searchTerm)
            ) ||
            location.tag_division.some(
                (tag) =>
                    typeof tag.name === 'string' &&
                    tag.name.toLowerCase().includes(selectedOptions.searchTerm)
            );

        return countryMatch && categoryMatch && textMatch;
    });

    return (
        <ContentWidth {...storyblokEditable(blok)}>
            <div className="col-span-12 mt-12">
                <ul className="flex flex-col gap-0 text-center text-sm font-normal text-black md:flex md:flex-row lg:gap-8">
                    <li className="mb-4 w-full md:w-1/3">{countryDropdown}</li>
                    <li className="mb-4 w-full md:w-1/3">{categoryDropdown}</li>
                    <li className="mb-4 w-full md:w-1/3">
                        <div className="relative w-full">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                <SearchIcon
                                    className="h-3 w-3 fill-greySolid-600"
                                    color="#00000080"
                                />
                            </div>
                            <input
                                tabIndex="1"
                                className="inline-block w-full border-primary px-4 py-2 text-base text-black placeholder-black hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                                placeholder={blok.text_search}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-span-12 pb-24">
                {filteredLocations.map((nestedBlok) => (
                    <StoryblokComponent
                        blok={nestedBlok}
                        key={nestedBlok._uid}
                    />
                ))}
            </div>
        </ContentWidth>
    );
}
export default AllStandorte;
