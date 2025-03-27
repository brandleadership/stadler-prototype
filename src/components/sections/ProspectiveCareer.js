import { useSearchParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';
import H4 from '../typography/H4';
import H3 from '../typography/H3';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import { ArrowForward } from '../icons/ArrowForward';
import { Loader } from '../elements/Loader';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '/i18nConfig';

// 20 - Level
// 25 - Arbeitsort
// 10 - Berufsfelt

const filters = { 10: '', 20: '', 25: '' };

const ProspectiveCareer = ({ blok }) => {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('');
    const [attributes, setAttributes] = useState([]);
    const [dependentField, setDependentField] = useState(false);
    const [dependentFilter, setDependentFilter] = useState({});
    const [selectedOptions, setSelectedOptions] = useState(filters);
    const [isDataLoading, setIsDataLoading] = useState(true);
    const searchParams = useSearchParams();
    const currentLocale = useCurrentLocale(i18nConfig);

    const jobClick = useRef();

    useEffect(() => {
        let jobClickReference = jobClick.current;

        jobClickReference?.addEventListener('click', (e) => {
            if (e.target.closest('a')) {
                const careerLink = e.target.closest('a')?.getAttribute('href');
                const careerTitle = e.target
                    .closest('a')
                    ?.querySelector('h4')?.innerHTML;
                var _paq = (window._paq = window._paq || []);
                _paq.push([
                    'trackEvent',
                    '3. Klicks auf individuelle Jobprofile',
                    `${careerTitle} - ${careerLink}`,
                ]);
            }
        });
    }, []);

    // function to get all the jobs (with possible filters and search query) via server function in next
    const getJobs = async (filter = '', search = '') => {
        setIsDataLoading(true);

        const url = `/${currentLocale}/api/prospective-jobs?filter=${filter}&search=${search}`;

        const checkConnection = await fetch(url, filters);
        const data = await checkConnection.json();
        setIsDataLoading(false);

        setJobs(data?.message?.jobs || []);
    };

    // function to get all the attributes via server function in next
    const getAttributes = async () => {
        const url = `/${currentLocale}/api/prospective-attributes?language=${blok.default_language}`;

        const checkConnection = await fetch(url);
        const attributes = await checkConnection.json();

        const selectAttributes = {};
        // Because key values for attributes retrieved from api are numeric
        // They display in the object by number order
        // Which means we cannot have easy cutom order of locations/levels/etc
        // So the sorting for attribure values is done below
        attributes?.attributes?.map((item) => {
            // Sorting Locations
            if (item?.id == '25') {
                let locationValues = {};

                locationValues['denmark'] = {
                    name: item.values['1120079'] || '',
                    value: 1120079,
                };
                locationValues['germany'] = {
                    name: item.values['1098735'] || '',
                    value: 1098735,
                };
                locationValues['finland'] = {
                    name: item.values['1223225'] || '',
                    value: 1223225,
                };
                locationValues['great_britain'] = {
                    name: item.values['1112910'] || '',
                    value: 1112910,
                };
                locationValues['italy'] = {
                    name: item.values['1112912'] || '',
                    value: 1112912,
                };
                locationValues['kazakhstan'] = {
                    name: item.values['1616862'] || '',
                    value: 1616862,
                };
                locationValues['netherlands'] = {
                    name: item.values['1101813'] || '',
                    value: 1101813,
                };
                locationValues['norway'] = {
                    name: item.values['1120078'] || '',
                    value: 1120078,
                };
                locationValues['austria'] = {
                    name: item.values['1112911'] || '',
                    value: 1112911,
                };
                locationValues['poland'] = {
                    name: item.values['1101814'] || '',
                    value: 1101814,
                };
                locationValues['sweden'] = {
                    name: item.values['1112909'] || '',
                    value: 1112909,
                };
                locationValues['switzerland'] = {
                    name: item.values['1098730'] || '',
                    value: 1098730,
                };
                locationValues['spain'] = {
                    name: item.values['1101815'] || '',
                    value: 1101815,
                };
                locationValues['czech_republic'] = {
                    name: item.values['1101816'] || '',
                    value: 1101816,
                };
                locationValues['turkey'] = {
                    name: item.values['1221872'] || '',
                    value: 1221872,
                };
                locationValues['hungary'] = {
                    name: item.values['1101818'] || '',
                    value: 1101818,
                };
                locationValues['usa'] = {
                    name: item.values['1101821'] || '',
                    value: 1101821,
                };
                locationValues['other'] = {
                    name: item.values['1129870'] || '',
                    value: 1129870,
                };

                selectAttributes['25'] = locationValues;
            }
            // sorting levels
            if (item?.id == '20') {
                let levelValues = {};

                levelValues['apprentices'] = {
                    name: item.values['1246527'] || '',
                    value: 1246527,
                };
                levelValues['students'] = {
                    name: item.values['1129862'] || '',
                    value: 1129862,
                };
                levelValues['graduates'] = {
                    name: item.values['1186754'] || '',
                    value: 1186754,
                };
                levelValues['professionals'] = {
                    name: item.values['1129863'] || '',
                    value: 1129863,
                };
                levelValues['management'] = {
                    name: item.values['1129864'] || '',
                    value: 1129864,
                };
                levelValues['project_management_level'] = {
                    name: item.values['1129865'] || '',
                    value: 1129865,
                };

                selectAttributes['20'] = levelValues;
            }
            // sorting occupational fields
            if (item?.id == '10') {
                let berufsfeldValues = {};
                berufsfeldValues['project_management'] = {
                    name: item.values['1186757'] || '',
                    value: 1186757,
                };
                berufsfeldValues['purchasing'] = {
                    name: item.values['1077440'] || '',
                    value: 1077440,
                };
                berufsfeldValues['engineering'] = {
                    name: item.values['1077441'] || '',
                    value: 1077441,
                };
                berufsfeldValues['finance'] = {
                    name: item.values['1077442'] || '',
                    value: 1077442,
                };
                berufsfeldValues['human_resources'] = {
                    name: item.values['1077443'] || '',
                    value: 1077443,
                };
                berufsfeldValues['commissioning'] = {
                    name: item.values['1077444'] || '',
                    value: 1077444,
                };
                berufsfeldValues['it'] = {
                    name: item.values['1077445'] || '',
                    value: 1077445,
                };
                berufsfeldValues['commercial_professions'] = {
                    name: item.values['1077446'] || '',
                    value: 1077446,
                };
                berufsfeldValues['logistics'] = {
                    name: item.values['1077447'] || '',
                    value: 1077447,
                };
                berufsfeldValues['production'] = {
                    name: item.values['1077448'] || '',
                    value: 1077448,
                };
                berufsfeldValues['quality_management'] = {
                    name: item.values['1077450'] || '',
                    value: 1077450,
                };
                berufsfeldValues['sales_and_marketing'] = {
                    name: item.values['1077452'] || '',
                    value: 1077452,
                };

                selectAttributes['10'] = berufsfeldValues;
            }
            // sorting other locations
            if (item?.id == '25_1129870') {
                let weitereValues = {};

                weitereValues['azerbaijan'] = {
                    name: item.values['1616860'] || '',
                    value: 1616860,
                };
                weitereValues['belarus'] = {
                    name: item.values['1616861'] || '',
                    value: 1616861,
                };
                weitereValues['portugal'] = {
                    name: item.values['1616863'] || '',
                    value: 1616863,
                };
                weitereValues['saudi_arabia'] = {
                    name: item.values['1616864'] || '',
                    value: 1616864,
                };
                weitereValues['serbia'] = {
                    name: item.values['1182491'] || '',
                    value: 1182491,
                };

                selectAttributes['25_1129870'] = weitereValues;
            }
            // sorting locations in Switzerland
            if (item?.id == '25_1098730') {
                let switzerlandValues = {};

                switzerlandValues['plateau'] = {
                    name: item.values['1129867'] || '',
                    value: 1129867,
                };
                switzerlandValues['eastern_switzerland'] = {
                    name: item.values['1098731'] || '',
                    value: 1098731,
                };
                switzerlandValues['ticino'] = {
                    name: item.values['1129868'] || '',
                    value: 1129868,
                };
                switzerlandValues['western_switzerland'] = {
                    name: item.values['1098732'] || '',
                    value: 1098732,
                };
                switzerlandValues['central_switzerland'] = {
                    name: item.values['1129869'] || '',
                    value: 1129869,
                };
                switzerlandValues['zurich'] = {
                    name: item.values['1098734'] || '',
                    value: 1098734,
                };

                selectAttributes['25_1098730'] = switzerlandValues;
            }
        });

        setAttributes(selectAttributes);
    };

    // on component mounting we need to check if there are query parameters in URL
    // e.g. ?20=1129862
    // it means that some of the filters should be preselected
    // 10 - Berufsfelt
    // 20 - Level
    // 25 - Arbeitsort

    useEffect(() => {
        let filters = '';
        const newSelectedOptions = { ...selectedOptions };
        if (searchParams.get('10')) {
            filters += `10:${searchParams.get('10')},`;
            newSelectedOptions['10'] = searchParams.get('10');
        }
        if (searchParams.get('25')) {
            filters += `25:${searchParams.get('25')},`;
            newSelectedOptions['25'] = searchParams.get('25');
            if (searchParams.get('25') == '1129870') {
                const filterObject = {};
                filterObject[`25_${searchParams.get('25')}`] = '';
                setDependentFilter(filterObject);
                setDependentField(true);
            }
            if (searchParams.get('25') == '1098730') {
                const filterObject = {};
                filterObject[`25_${searchParams.get('25')}`] = '';
                setDependentFilter(filterObject);
                setDependentField(true);
            }
        }
        if (searchParams.get('20')) {
            filters += `20:${searchParams.get('20')},`;
            newSelectedOptions['20'] = searchParams.get('20');
        }
        // setting fiters for the background object to manipulate onSelect function
        setSelectedOptions(newSelectedOptions);

        // fetching jobs with filter values
        getJobs(filters);

        // getting attributes' values for selects
        if (blok.default_language !== 'unset') {
            getAttributes();
        } else {
            let selectAttributes = {};
            // If we are in one of 8 languages that are not present in Prospective
            // e.g. Poland, Hungary, Norway etc.
            // then we take the translations from the Storyblok component

            let berufsfeldValues = {};

            berufsfeldValues['project_management'] = {
                name: blok.project_management || '',
                value: 1186757,
            };
            berufsfeldValues['purchasing'] = {
                name: blok.purchasing || '',
                value: 1077440,
            };
            berufsfeldValues['engineering'] = {
                name: blok.engineering || '',
                value: 1077441,
            };
            berufsfeldValues['finance'] = {
                name: blok.finance || '',
                value: 1077442,
            };
            berufsfeldValues['human_resources'] = {
                name: blok.human_resources || '',
                value: 1077443,
            };
            berufsfeldValues['commissioning'] = {
                name: blok.commissioning || '',
                value: 1077444,
            };
            berufsfeldValues['it'] = { name: blok.it || '', value: 1077445 };
            berufsfeldValues['commercial_professions'] = {
                name: blok.commercial_professions || '',
                value: 1077446,
            };
            berufsfeldValues['logistics'] = {
                name: blok.logistics || '',
                value: 1077447,
            };
            berufsfeldValues['production'] = {
                name: blok.production || '',
                value: 1077448,
            };
            berufsfeldValues['quality_management'] = {
                name: blok.quality_management || '',
                value: 1077450,
            };
            berufsfeldValues['sales_and_marketing'] = {
                name: blok.sales_and_marketing || '',
                value: 1077452,
            };

            selectAttributes['10'] = berufsfeldValues;

            let locationValues = {};

            locationValues['denmark'] = {
                name: blok.denmark || '',
                value: 1120079,
            };
            locationValues['germany'] = {
                name: blok.germany || '',
                value: 1098735,
            };
            locationValues['finland'] = {
                name: blok.finland || '',
                value: 1223225,
            };
            locationValues['great_britain'] = {
                name: blok.great_britain || '',
                value: 1112910,
            };
            locationValues['italy'] = {
                name: blok.italy || '',
                value: 1112912,
            };
            locationValues['kazakhstan'] = {
                name: blok.kazakhstan || '',
                value: 1616862,
            };
            locationValues['netherlands'] = {
                name: blok.netherlands || '',
                value: 1101813,
            };
            locationValues['norway'] = {
                name: blok.norway || '',
                value: 1120078,
            };
            locationValues['austria'] = {
                name: blok.austria || '',
                value: 1112911,
            };
            locationValues['poland'] = {
                name: blok.poland || '',
                value: 1101814,
            };
            locationValues['sweden'] = {
                name: blok.sweden || '',
                value: 1112909,
            };
            locationValues['switzerland'] = {
                name: blok.switzerland || '',
                value: 1098730,
            };
            locationValues['spain'] = {
                name: blok.spain || '',
                value: 1101815,
            };
            locationValues['czech_republic'] = {
                name: blok.czech_republic || '',
                value: 1101816,
            };
            locationValues['turkey'] = {
                name: blok.turkey || '',
                value: 1221872,
            };
            locationValues['hungary'] = {
                name: blok.hungary || '',
                value: 1101818,
            };
            locationValues['usa'] = { name: blok.usa || '', value: 1101821 };
            locationValues['other'] = {
                name: blok.other || '',
                value: 1129870,
            };

            selectAttributes['25'] = locationValues;

            let levelValues = {};
            levelValues['apprentices'] = {
                name: blok.apprentices || '',
                value: 1246527,
            };
            levelValues['students'] = {
                name: blok.students || '',
                value: 1129862,
            };
            levelValues['graduates'] = {
                name: blok.graduates || '',
                value: 1186754,
            };
            levelValues['professionals'] = {
                name: blok.professionals || '',
                value: 1129863,
            };
            levelValues['management'] = {
                name: blok.management || '',
                value: 1129864,
            };
            levelValues['project_management_level'] = {
                name: blok.project_management_level || '',
                value: 1129865,
            };

            selectAttributes['20'] = levelValues;

            let weitereValues = {};
            weitereValues['azerbaijan'] = {
                name: blok.azerbaijan || '',
                value: 1616860,
            };
            weitereValues['belarus'] = {
                name: blok.belarus || '',
                value: 1616861,
            };
            weitereValues['portugal'] = {
                name: blok.portugal || '',
                value: 1616863,
            };
            weitereValues['saudi_arabia'] = {
                name: blok.saudi_arabia || '',
                value: 1616864,
            };
            weitereValues['serbia'] = {
                name: blok.serbia || '',
                value: 1182491,
            };
            selectAttributes['25_1129870'] = weitereValues;

            let switzerlandValues = {};
            switzerlandValues['plateau'] = {
                name: blok.plateau || '',
                value: 1129867,
            };
            switzerlandValues['eastern_switzerland'] = {
                name: blok.eastern_switzerland || '',
                value: 1098731,
            };
            switzerlandValues['ticino'] = {
                name: blok.ticino || '',
                value: 1129868,
            };
            switzerlandValues['western_switzerland'] = {
                name: blok.western_switzerland || '',
                value: 1098732,
            };
            switzerlandValues['central_switzerland'] = {
                name: blok.central_switzerland || '',
                value: 1129869,
            };
            switzerlandValues['zurich'] = {
                name: blok.zurich || '',
                value: 1098734,
            };

            selectAttributes['25_1098730'] = switzerlandValues;

            setAttributes(selectAttributes);
        }
    }, []);

    const onSearchChange = (e) => {
        setSearch(e.target.value);

        let filtersString = '';

        Object.keys(selectedOptions).map((key) => {
            if (selectedOptions[key]) {
                if (selectedOptions[key] != 'none') {
                    if (filtersString.length) {
                        filtersString += `,`;
                    }
                    filtersString += `${key}:${selectedOptions[key]}`;
                }
            }
        });

        if (e.target.value.length > 2) {
            getJobs(filtersString, e.target.value);
        } else {
            getJobs(filtersString);
        }
    };

    // Set dependent value on location filter, applicable only for Switzerland and Weitere
    const setLocation = (e) => {
        if (e.target.value == '1098730') {
            const filterObject = {};
            filterObject[`25_${e.target.value}`] = '';
            setDependentFilter(filterObject);
            setDependentField(true);
        } else if (e.target.value == '1129870') {
            const filterObject = {};
            filterObject[`25_${e.target.value}`] = '';
            setDependentFilter(filterObject);
            setDependentField(true);
        } else {
            setDependentFilter({});
            setDependentField(false);
        }
    };
    const changeDependentFilter = (e) => {
        const updatedValue = {};
        updatedValue[Object.keys(dependentFilter)[0]] = e.target.value;

        setDependentFilter(updatedValue);
        filterJobs(e, Object.keys(dependentFilter)[0], e.target.value);
    };

    const filterJobs = async (e, typeFilter, dependentField) => {
        let dependentStringFilter = false;
        const newSelectedOptions = { ...selectedOptions };

        if (dependentField && dependentField != 'none') {
            // If we pass the dependent field and it is not empty
            dependentStringFilter = `${typeFilter}:${dependentField}`;
        } else if (dependentField == 'none') {
            // If the dependent field is already present and it is set to "none"
        } else if (Object.values(dependentFilter)[0] == 'none') {
            // If we pass the dependent field and it is empty
        } else if (Object.keys(dependentFilter)[0]) {
            // If we don't pass the dependent field, but it might be present since one of the previous selects
            dependentStringFilter = `${Object.keys(dependentFilter)[0]}:${Object.values(dependentFilter)[0]}`;
        }

        let filtersString = '';
        // Add selected option to Berufsfelt, Entry Level or Location
        // as not a fourth select with dependent option was chosen
        if (!dependentField) {
            newSelectedOptions[typeFilter] = e.target.value;
            setSelectedOptions(newSelectedOptions);
        }
        // Add a dependent filter to the query if it is not empty
        if (dependentStringFilter) {
            filtersString += `${dependentStringFilter}`;
        }

        Object.keys(newSelectedOptions).map((key) => {
            if (newSelectedOptions[key]) {
                if (newSelectedOptions[key] != 'none') {
                    if (filtersString.length) {
                        filtersString += `,`;
                    }
                    filtersString += `${key}:${newSelectedOptions[key]}`;
                }
            }
        });

        if (search.length > 2) {
            getJobs(filtersString, search);
        } else {
            getJobs(filtersString);
        }
    };

    return (
        <section className="mt-12" {...storyblokEditable(blok)}>
            <SmallWidth>
                <div className="col-span-12 grid">
                    <div
                        className="grid grid-cols-4 justify-stretch gap-x-2 hover:cursor-pointer mt-20 lg:mt-0"
                        role="group"
                    >
                        <a
                            tabIndex="1"
                            href={blok.button_1.url}
                            type="button"
                            className="col-span-4 mb-4 flex items-center justify-between bg-primarySolid-50 px-4 py-2 text-sm font-medium text-primary hover:cursor-pointer hover:bg-greySolid-100 hover:text-primary md:col-span-1"
                        >
                            {blok.button_1_text}
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                        <a
                            tabIndex="1"
                            href={blok.button_2.url}
                            type="button"
                            className="col-span-4 mb-4 flex items-center justify-between bg-primarySolid-50 px-4 py-2 text-sm font-medium text-primary hover:cursor-pointer hover:bg-greySolid-100 hover:text-primary md:col-span-1"
                        >
                            {blok.button_2_text}
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                        <a
                            tabIndex="1"
                            href={blok.button_3.url}
                            type="button"
                            className="col-span-4 mb-4 flex items-center justify-between bg-primarySolid-50 px-4 py-2 text-sm font-medium text-primary hover:cursor-pointer hover:bg-greySolid-100 hover:text-primary md:col-span-1"
                        >
                            {blok.button_3_text}
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                        <a
                            tabIndex="1"
                            href={blok.button_4.url}
                            type="button"
                            className="col-span-4 mb-4 flex items-center justify-between bg-primarySolid-50 px-4 py-2 text-sm font-medium text-primary hover:cursor-pointer hover:bg-greySolid-100 hover:text-primary md:col-span-1"
                        >
                            {blok.button_4_text}
                            <ArrowForward styles="w-3 h-3 fill-primary" />
                        </a>
                    </div>
                </div>
                <div className="mt-8">
                    <H2>{blok.title}</H2>
                    <Text>{blok.description_text}</Text>
                </div>

                <div className="col-span-12 my-8 mb-12 grid grid-cols-12">
                    <div className="col-span-12 grid">
                        <label
                            htmlFor="search"
                            className="mb-2 block text-sm font-medium text-greySolid-800"
                        >
                            {blok.search_input_label}
                        </label>
                        <input
                            tabIndex="1"
                            type="text"
                            id="search"
                            className="block w-full border border-primary p-2.5 text-base text-sm hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                            placeholder=""
                            onChange={(e) => onSearchChange(e)}
                        />
                    </div>
                    <div className="col-span-12 mt-4 grid grid-cols-12 gap-6">
                        <div className="col-span-6 grid">
                            <label
                                htmlFor="countries"
                                className="mb-2 block text-sm font-medium text-greySolid-800"
                            >
                                {blok.select_1_label}
                            </label>

                            <select
                                className="block w-full border border-primary p-2.5 text-base text-sm hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                                onChange={(e) => filterJobs(e, '10')}
                                value={
                                    selectedOptions['10']
                                        ? selectedOptions['10']
                                        : searchParams.get('10')
                                }
                            >
                                <option value="none">
                                    {blok.select_1_placeholder}
                                </option>
                                {attributes['10'] &&
                                    Object.values(attributes['10']).map(
                                        (value) => {
                                            return (
                                                <option
                                                    key={value.value}
                                                    value={value.value}
                                                >
                                                    {value.name}
                                                </option>
                                            );
                                        }
                                    )}
                            </select>
                        </div>
                        <div className="col-span-6 grid">
                            <label
                                htmlFor="countries"
                                className="mb-2 block text-sm font-medium text-greySolid-800"
                            >
                                {blok.select_2_label}
                            </label>
                            <select
                                className="block w-full border border-primary p-2.5 text-base text-sm hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                                onChange={(e) => filterJobs(e, '20')}
                                value={
                                    selectedOptions['20']
                                        ? selectedOptions['20']
                                        : searchParams.get('20')
                                }
                            >
                                <option value="none">
                                    {blok.select_2_placeholder}
                                </option>
                                {attributes['20'] &&
                                    Object.values(attributes['20']).map(
                                        (value) => {
                                            return (
                                                <option
                                                    key={value.value}
                                                    value={value.value}
                                                >
                                                    {value.name}
                                                </option>
                                            );
                                        }
                                    )}
                            </select>
                        </div>
                    </div>
                    <div className="col-span-12 mt-4 grid grid-cols-12 gap-6">
                        <div className="col-span-6 grid">
                            <label
                                htmlFor="countries"
                                className="mb-2 block text-sm font-medium text-greySolid-800"
                            >
                                {blok.select_3_label}
                            </label>
                            <select
                                className="block w-full border border-primary p-2.5 text-base text-sm hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                                onChange={(e) => {
                                    filterJobs(e, '25', false);
                                    setLocation(e, '25');
                                }}
                                value={
                                    selectedOptions['25']
                                        ? selectedOptions['25']
                                        : searchParams.get('25')
                                }
                            >
                                <option value="none">
                                    {blok.select_3_placeholder}
                                </option>
                                {attributes['25'] &&
                                    Object.values(attributes['25']).map(
                                        (value) => {
                                            return (
                                                <option
                                                    key={value.value}
                                                    value={value.value}
                                                >
                                                    {value.name}
                                                </option>
                                            );
                                        }
                                    )}
                            </select>
                        </div>
                        <div className="col-span-6 grid">
                            <label
                                htmlFor="countries_disabled"
                                className="mb-2 block text-sm font-medium text-greySolid-800"
                            >
                                {blok.select_4_label}
                            </label>
                            <select
                                onChange={(e) => {
                                    changeDependentFilter(e);
                                }}
                                disabled={!dependentField}
                                id="countries_disabled"
                                className="block w-full border border-primary p-2.5 text-base text-sm hover:bg-greySolid-100 hover:text-greySolid-800 focus:ring-1 focus:ring-primary"
                            >
                                <option value="none">
                                    {blok.select_4_placeholder}
                                </option>
                                {dependentField &&
                                    attributes[
                                        Object.keys(dependentFilter)[0]
                                    ] &&
                                    Object.values(
                                        attributes[
                                            Object.keys(dependentFilter)[0]
                                        ]
                                    ).map((value) => {
                                        return (
                                            <option
                                                key={value.value}
                                                value={value.value}
                                            >
                                                {value.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 mb-24 grid">
                    <H3>{blok.subtitle}</H3>
                    <div className="divide-y" ref={jobClick}>
                        {isDataLoading ? (
                            <Loader />
                        ) : (
                            jobs?.map((item, key) => (
                                <a
                                    tabIndex="1"
                                    key={key}
                                    href={item.links.directlink}
                                    target="_blank"
                                    className="block py-4 hover:cursor-pointer hover:text-primary"
                                    rel="noreferrer"
                                >
                                    <H4>{item.title}</H4>
                                    <div className="flex">
                                        <div className="mr-4 flex items-center">
                                            <span>
                                                <img
                                                    className="mr-1 h-3 w-3"
                                                    src="/ohne-box/location.svg"
                                                    alt="Location image"
                                                />
                                            </span>
                                            <p>
                                                {item.szas['sza_location.city']}
                                                ,{' '}
                                                {
                                                    item.szas[
                                                        'sza_location.country'
                                                    ]
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))
                        )}
                    </div>
                </div>
            </SmallWidth>
        </section>
    );
};
export default ProspectiveCareer;
