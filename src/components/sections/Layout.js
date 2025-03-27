'use client';
import ConfigFooter from './Config_footer';
import ConfigHeader from './Config_header';

const Layout = ({
    children,
    config_header,
    config_footer,
    translatedSlugs,
}) => {
    return (
        <div className='flex flex-col h-screen justify-between'>
            <ConfigHeader
                translatedSlugs={translatedSlugs}
                blok={config_header.content}
            />
            {children}
            <ConfigFooter blok={config_footer.content} />
        </div>
    );
};
export default Layout;
