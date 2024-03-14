"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "../components/sections/Page";
import Footer from "./sections/Footer";
import HeroText from "./sections/HeroText";
import FactsAndFigures from "./sections/FactsAndFigures";
import Video from "./sections/Video";
import HomePageHero from "./sections/HomePageHero";
import TeaserImageLeft from "./sections/TeaserImageLeft";
import TeaserImageRight from "./sections/TeaserImageright";
import Header from "./sections/Header";
import ImageFullWidth from "./sections/ImageFullWidth";
import Career from "./sections/Career";
import Features from "./sections/Features";
import Map from "./sections/Map";
import TextSection from "./sections/TextSection";
import QualityFeatureGrid from "./sections/QualityFeatureGrid";
import QualityFeatureItem from "./sections/QualityFeatureItem";
import FactsAndFiguresGrid from "./sections/FactsFiguresGrid";
import FactsAndFiguresItem from "./sections/FactsFiguresItem";
import AccordionGrid from "./sections/AccordionGrid";
import AccordionItem from "./sections/AccordionItem";
import Description from "./sections/Description";
import AdvantageItem from "./sections/AdvantageItem";
import AdvantagesGrid from "./sections/AdvantagesGrid";
import PortraitGrid from "./sections/PortraitGrid";
import PortraitItem from "./sections/PortraitItem";
import ServiceTeaserItem from "./sections/ServiceTeaserItem";
import ServiceTeasersGrid from "./sections/ServiceTeasersGrid";
import TableGrid from "./sections/Table";
//import TableItem from "./sections/TableItem";
import Contact from "./sections/Contact";
import SolutionsGrid from "./sections/SolutionsGrid";
import SolutionsGridItem from "./sections/SolutionsGridItem";
import DownloadItem from "./sections/DownloadItem";
import ButtonPrimary from "./elements/ButtonPrimary";
import ReportsGrid from "./sections/ReportsGrid";
import ReportsItem from "./sections/ReportsItem.js";
import ImageTrippleBanner from "./sections/ImageTrippleBanner";
import SimpleText from "./sections/SimpleText";
import QualityFeatureGridExtended from "./sections/QualityFeatureGridExtended";
import DownloadSecondaryGrid from "./sections/DownloadSecondaryGrid";
import DownloadSecondaryItem from "./sections/DownloadSecondaryItem";
import CorporateGorvernanceGrid from "./sections/CorporateCovernanceGrid";
import CorporateGorvernanceTeaser from "./sections/CorporateGovernanceTeaser";
import SchienenfahrzeugeGrid from "./sections/SchienenfahrzeugeGrid";
import SchienenfahrzeugeItem from "./sections/SchienenfahrzeugeItem";
import SchienenfahrzeugeWrapper from "./sections/SchienenfahrzeugeWrapper";
import NewsTeaser from "./sections/NewsSection";
import AccordionWrapper from "./sections/AccordionWrapper";
import Intro from "./sections/Intro";
import SuccessStoryGrid from "./sections/SuccessStoryGrid";
import SuccessStoryContent from "./sections/SuccessStoryContent";
import GlobalReference from "./sections/Global_Reference";
import AccordionTableItem from "./sections/AccordionTableItem";
import AccordionWrapperBlueLine from "./sections/AccordionWrapperBlueLine";
import AccordionTextDownloadItem from "./sections/AccordionTextDownloadItem";
import NewsBody from "./sections/NewsBody";
import MedienmitteilungenBody from "./sections/MedienmitteilungenBody";
// import ProductCards from "./sections/ProductCards";
import SpecificationsGrid from "./sections/SpecificationsGrid";
import SpecificationItem from "./sections/SpecificationItem";
import ProductCardsGrid from "./sections/ProductCardsGrid";
import ProductCard from "./sections/ProductCard";
import History from "./sections/History";
import HistoryWrapper from "./sections/HistoryWrapper";
import HistoryCard from "./sections/HistoryCard";

import AllNews from "./sections/AllNews";


//import SubHero from "./sections/SubHero";
//import HomePageCaroucel from "./sections/HomePageCaroucel";


storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    footer: Footer,
    header: Header,
    "facts-figures-grid": FactsAndFiguresGrid,
    "facts-figures-item": FactsAndFiguresItem,
    "feature-grid": QualityFeatureGrid,
    "feature-item": QualityFeatureItem,
    "text-block": TextSection,
    "double-page-teaser": Features,
    "simple-page-teaser": Career,
    "image-full-width": ImageFullWidth,
    "hero-subpage": HeroText,
    //add correct connection to the page-teaser-mini
    // "page-teaser-mini": SimpleText,
    "video-teaser": Video,
    "hero-home": HomePageHero,
    "teaser-image-left": TeaserImageLeft,
    "teaser-image-right": TeaserImageRight,
    "image-left": Description,
    "accordion-item": AccordionItem,
    "accordion-grid": AccordionGrid,
    "accordion-wrapper": AccordionWrapper,
    "according-table-item": AccordionTableItem,
    "accordion-download-wrapper-blueline": AccordionWrapperBlueLine,
    "accordion-text-download-item": AccordionTextDownloadItem,
    "highlights-grid": AdvantagesGrid,
    "highlights-item": AdvantageItem,
    "portrait-grid": PortraitGrid,
    "portrait-item": PortraitItem,
    "services-grid": ServiceTeasersGrid,
    "services-item": ServiceTeaserItem,
    "table-section": TableGrid,
    // "table-item": TableItem,
    "solution-item": SolutionsGridItem,
    "solutions-grid": SolutionsGrid,
    "cta-small": DownloadItem,
    "reports-grid": ReportsGrid,
    "reports-item": ReportsItem,
    "image-tripple-banner": ImageTrippleBanner,
    "textSection": SimpleText,
    "feature-grid_extended": QualityFeatureGridExtended,
    "download_grid": DownloadSecondaryGrid,
    "download_item": DownloadSecondaryItem,
    "corporate-governance-teaser": CorporateGorvernanceGrid,
    "page-teaser-mini": CorporateGorvernanceTeaser,
    "schienenfahrzeuge_grid": SchienenfahrzeugeGrid,
    "schienenfahrzeuge_item": SchienenfahrzeugeItem,
    "schienenfahrzeuge_wrapper": SchienenfahrzeugeWrapper,
    "news-teaser": NewsTeaser,
    "image-right": Intro,
    "success-story-grid": SuccessStoryGrid,
    "successstory": SuccessStoryContent,
    "contact-field": Contact,
    "news": NewsBody,
    "medienmitteilungen": MedienmitteilungenBody,
    "global_contact_reference": GlobalReference,
    "global_reference": GlobalReference,
    // "product-card": ProductCards,
    "specifications-grid": SpecificationsGrid,
    "specifications-item": SpecificationItem,
    "product-card-grid": ProductCardsGrid,
    "product-card": ProductCard,
    "history": History,
    "history-card": HistoryCard,
    "history-section-wrapper": HistoryWrapper,
    "all-news": AllNews
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}


