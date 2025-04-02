'use client';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

/** 2. Import your components */
import Page from './sections/Page';
import Footer from './sections/Footer';
import HeroText from './sections/HeroText';
import HeroCareer from './sections/HeroCareer';
import Video from './sections/Video';
import HomePageHero from './sections/HomePageHero';
import TeaserImageLeft from './sections/TeaserImageLeft';
import TeaserImageRight from './sections/TeaserImageright';
import Header from './sections/Header';
import ImageFullWidth from './sections/ImageFullWidth';
import Career from './sections/Career';
import Features from './sections/Features';
import TextSection from './sections/TextSection';
import QualityFeatureGrid from './sections/QualityFeatureGrid';
import QualityFeatureItem from './sections/QualityFeatureItem';
import FactsAndFiguresGrid from './sections/FactsFiguresGrid';
import FactsAndFiguresItem from './sections/FactsFiguresItem';
import AccordionGrid from './sections/AccordionGrid';
import AccordionItem from './sections/AccordionItem';
import Description from './sections/Description';
import AdvantageItem from './sections/AdvantageItem';
import AdvantagesGrid from './sections/AdvantagesGrid';
import PortraitGrid from './sections/PortraitGrid';
import PortraitItem from './sections/PortraitItem';
import ServiceTeaserItem from './sections/ServiceTeaserItem';
import ServiceTeasersGrid from './sections/ServiceTeasersGrid';
import TableGrid from './sections/Table';
//import TableItem from "./sections/TableItem";
import Contact from './sections/Contact';
import SolutionsGrid from './sections/SolutionsGrid';
import SolutionsGridItem from './sections/SolutionsGridItem';
import DownloadItem from './sections/DownloadItem';
import ReportsGrid from './sections/ReportsGrid';
import ReportsItem from './sections/ReportsItem.js.js';
import ImageTrippleBanner from './sections/ImageTrippleBanner';
import SimpleText from './sections/SimpleText';
import QualityFeatureGridExtended from './sections/QualityFeatureGridExtended';
import DownloadSecondaryGrid from './sections/DownloadSecondaryGrid';
import DownloadSecondaryItem from './sections/DownloadSecondaryItem';
import CorporateGorvernanceGrid from './sections/CorporateCovernanceGrid';
import CorporateGorvernanceTeaser from './sections/CorporateGovernanceTeaser';
import SchienenfahrzeugeGrid from './sections/SchienenfahrzeugeGrid';
import SchienenfahrzeugeItem from './sections/SchienenfahrzeugeItem';
import SchienenfahrzeugeWrapper from './sections/SchienenfahrzeugeWrapper';
import NewsTeaser from './sections/NewsTeaser';
import AccordionWrapper from './sections/AccordionWrapper';
import Intro from './sections/Intro';
import SuccessStoryGrid from './sections/SuccessStoryGrid';
import SuccessStoryContent from './sections/SuccessStoryContent';
import GlobalReference from './sections/Global_Reference';
import AccordionTableItem from './sections/AccordionTableItem';
import AccordionWrapperBlueLine from './sections/AccordionWrapperBlueLine';
import AccordionTextDownloadItem from './sections/AccordionTextDownloadItem';
import NewsBody from './sections/NewsBody';
import MedienmitteilungenBody from './sections/MedienmitteilungenBody';
// import ProductCards from "./sections/ProductCards";
import SpecificationsGrid from './sections/SpecificationsGrid';
import SpecificationItem from './sections/SpecificationItem';
import ProductCardsGrid from './sections/ProductCardsGrid';
import ProductCard from './sections/ProductCard';
import Testimonials from './sections/Testimonials';
import Jobs from './sections/TeaserJobs';
import TeaserSuccessStories from './sections/TeaserSuccessStories';
import History from './sections/History';
import HistoryWrapper from './sections/HistoryWrapper';
import HistoryCard from './sections/HistoryCard';
import AccordionYearWrapper from './sections/AccordionYearWrapper';
import AccordionTextDateDownloadItem from './sections/AccordionTextDateDownloadItem';
import AccordionTabsTableWrapper from './sections/AccordionTabsTableWrapper';
import AllNews from './sections/AllNews';
import CareerStepGrid from './sections/CareerStepGrid';
import CareerStepItem from './sections/CareerStepItem';
import VideoFullWidth from './sections/VideoFullWidth';
import GlobalDownloadReference from './sections/GlobalDownloadReference';
import AdHocMedienmitteilungen from './sections/AdHocMedienmitteilungen';
import AlleMedienmitteilungen from './sections/AlleMedienmitteilungen';
import TrainCarousel from './sections/TrainCarousel';
import TestimonialsCarousel from './sections/ReferenzenCarousel';
import AddressGrid from './sections/AddressGrid';
import AddressWrapper from './sections/AddressWrapper';
import AddressCard from './sections/AddressCard';
import GraphicTextWrapper from './sections/GraphicTextWrapper';
import Quote from './sections/Quote';
import TextDownloadItem from './sections/TextDownloadItem';
import DownloadElementLanguage from './sections/DownloadElementLanguage';
import MedienMitteilungDownload from './sections/MedienMitteilungDownload';
import MedienmitteilungDownloadItem from './sections/MedienmitteilungDownloadItem';
import MedienmitteilungDownloadLink from './sections/MedienmitteilungDownloadLink';
import ReferenzContent from './sections/ReferenzContent';
import MedienMedienmitteilungenTeaser from './sections/MedienmitteilungenTeaser';
import AccordionContactItem from './sections/AccordionContactItem';
import HomeSolutionsSchienenfahrzeugeWrapper from './sections/HomeSolutionsSchienenfahrzeugeWrapper';
import HomeSolutionsSchienenfahrzeugeItemBig from './sections/HomeSolutionsSchienenfahrzeugeItemBig';
import HomeSolutionsDoublePageTeaser from './sections/HomeSolutionsDoublePageTeaser';
import Map from './sections/Map';
import EmployeeContent from './sections/EmployeeContent';
import ContactForm from './sections/ContactForm';
import AllStandorte from './sections/AllStandorte';
import AccordionLocations from './sections/AccordionLocations';
import MailchimpEmbed from './sections/MailchimpEmbed';
import ProspectiveCareer from './sections/ProspectiveCareer';
import SimpleContainerWrapper from './sections/SimpleContainerWrapper';
import ConfigFooter from './sections/Config_footer';
import ConfigHeader from './sections/Config_header';
import NotFoundError from './sections/NotFoundError';
import CertificateItem from './sections/CertificateItem';
import CookiebotDeclaration from './sections/CookiebotDeclaration';
import SocialWallComponent from './sections/SocialWallComponent';
import ComplienceGrid from './sections/ComplienceGrid';
import ComplienceItem from './sections/ComplienceItem';

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
    components: {
        page: Page,
        footer: Footer,
        header: Header,
        'facts-figures-grid': FactsAndFiguresGrid,
        'facts-figures-item': FactsAndFiguresItem,
        'feature-grid': QualityFeatureGrid,
        'feature-item': QualityFeatureItem,
        'text-block': TextSection,
        'double-page-teaser': Features,
        'simple-page-teaser': Career,
        'image-full-width': ImageFullWidth,
        'hero-subpage': HeroText,
        //add correct connection to the page-teaser-mini
        // "page-teaser-mini": SimpleText,
        'video-teaser': Video,
        'hero-home': HomePageHero,
        'teaser-image-left': TeaserImageLeft,
        'teaser-image-right': TeaserImageRight,
        'image-left': Description,
        'accordion-text-item': AccordionItem,
        'accordion-grid': AccordionGrid,
        'accordion-wrapper': AccordionWrapper,
        'according-table-item': AccordionTableItem,
        'accordion-download-wrapper-blueline': AccordionWrapperBlueLine,
        'accordion-text-download-item': AccordionTextDownloadItem,
        certificate_item: CertificateItem,
        'highlights-grid': AdvantagesGrid,
        'highlights-item': AdvantageItem,
        'portrait-grid': PortraitGrid,
        'portrait-item': PortraitItem,
        'services-grid': ServiceTeasersGrid,
        'services-item': ServiceTeaserItem,
        'table-section': TableGrid,
        // "table-item": TableItem,
        'solution-item': SolutionsGridItem,
        'solutions-grid': SolutionsGrid,
        'cta-small': DownloadItem,
        'reports-grid': ReportsGrid,
        'reports-item': ReportsItem,
        'image-tripple-banner': ImageTrippleBanner,
        textSection: SimpleText,
        'feature-grid_extended': QualityFeatureGridExtended,
        download_grid: DownloadSecondaryGrid,
        download_item: DownloadSecondaryItem,
        'corporate-governance-teaser': CorporateGorvernanceGrid,
        'page-teaser-mini': CorporateGorvernanceTeaser,
        schienenfahrzeuge_grid: SchienenfahrzeugeGrid,
        schienenfahrzeuge_item: SchienenfahrzeugeItem,
        schienenfahrzeuge_wrapper: SchienenfahrzeugeWrapper,
        news_teaser: NewsTeaser,
        'image-right': Intro,
        'success-story-grid': SuccessStoryGrid,
        successstory: SuccessStoryContent,
        'contact-field': Contact,
        news: NewsBody,
        medienmitteilungen: MedienmitteilungenBody,
        global_contact_reference: GlobalReference,
        global_reference: GlobalReference,
        // "product-card": ProductCards,
        'specifications-grid': SpecificationsGrid,
        'specifications-item': SpecificationItem,
        'product-card-grid': ProductCardsGrid,
        'product-card': ProductCard,
        'hero-careerpage': HeroCareer,
        tripple_quote: Testimonials,
        'career-open-positions-grid': Jobs,
        'employee-story-grid': TeaserSuccessStories,
        history: History,
        'history-card': HistoryCard,
        'history-section-wrapper': HistoryWrapper,
        'accordion-all-years-wrapper': AccordionTabsTableWrapper,
        'accordion-year-wrapper': AccordionYearWrapper,
        'accordion-text-date-download-item': AccordionTextDateDownloadItem,
        'all-news': AllNews,
        'all-locations': AllStandorte,
        'career-step-grid': CareerStepGrid,
        'career-step-item': CareerStepItem,
        adhoc_medienmitteilungen_teaser: AdHocMedienmitteilungen,
        'alle-medienmitteilungen': AlleMedienmitteilungen,
        'video-full-width': VideoFullWidth,
        global_download_reference: GlobalDownloadReference,
        'home-solutions-grid': TrainCarousel,
        'reference-grid': TestimonialsCarousel,
        'address-grid': AddressGrid,
        address_card: AddressCard,
        'address-wrapper': AddressWrapper,
        'graphic-text-wrapper': GraphicTextWrapper,
        quote: Quote,
        'download-element-language': DownloadElementLanguage,
        'text-download-item': TextDownloadItem,
        'Multi-language-download': MedienMitteilungDownload,
        'multi-language-download-item': MedienmitteilungDownloadItem,
        'multi-language-download-link': MedienmitteilungDownloadLink,
        'reference-page': ReferenzContent,
        medienmitteilungen_teaser: MedienMedienmitteilungenTeaser,
        'accordion-contact-item': AccordionContactItem,
        'home-solutions-schienenfahrzeuge-wrapper':
            HomeSolutionsSchienenfahrzeugeWrapper,
        'home-solutions-schienenfahrzeuge-item-big':
            HomeSolutionsSchienenfahrzeugeItemBig,
        'home-solutions-double-page-teaser': HomeSolutionsDoublePageTeaser,
        map: Map,
        employee_story: EmployeeContent,
        'form-wrapper': ContactForm,
        'single-location-wrapper': AccordionLocations,
        'signup-mailchimp': MailchimpEmbed,
        'career-prospective': ProspectiveCareer,
        simple_container_wrapper: SimpleContainerWrapper,
        config_footer: ConfigFooter,
        config_header: ConfigHeader,
        error_404: NotFoundError,
        cookiebot_declaration: CookiebotDeclaration,
        social_wall: SocialWallComponent,
        complience_grid: ComplienceGrid,
        complience_item: ComplienceItem,
    },
});

export default function StoryblokProvider({ children }) {
    return children;
}
