'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { render } from 'storyblok-rich-text-react-renderer';
import ButtonPrimary from '../../components/elements/ButtonPrimary';
import SmallWidth from '../../components/layouts/SmallWidth';
import H1 from '../../components/typography/H1';
import Lead from '../../components/typography/Lead';
import Breadcrumbs from './Breadcrumbs';

const HeroText = ({ breadcrumbs = [], withCTA, buttonText, blok }) => {
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-white dark:bg-gray-900 py-24"
        >
            <SmallWidth>
                <Breadcrumbs />
                {/* {breadcrumbs.length > 0 && (
          <div className="flex font-normal text-gray-600 pb-3">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={index}>
                {index !== breadcrumbs.length - 1 ? (
                  <>
                    <a href={breadcrumb?.link}>{breadcrumb?.text}</a>
                    <span className="px-3">|</span>
                  </>
                ) : (
                  <a href={breadcrumb?.link}>{breadcrumb?.text}</a>
                )}
              </div>
            ))}
          </div>
        )} */}
                <H1>{blok?.title}</H1>
                <Lead className="richtext">{render(blok?.lead)}</Lead>
                {blok?.showbutton ? (
                    <ButtonPrimary
                        position="left"
                        buttonText={blok?.buttontext}
                        href={blok?.buttonlink.url}
                    />
                ) : (
                    ''
                )}
            </SmallWidth>
        </section>
    );
};

export default HeroText;
