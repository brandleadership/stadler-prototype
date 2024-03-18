import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const convertBreadcrumb = (string) => {
    string
        .replace(/-/g, ' ')
        .replace(/oe/g, 'ö')
        .replace(/ae/g, 'ä')
        .replace(/ue/g, 'ü');

    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Breadcrumbs = () => {
    const router = useRouter();
    const path = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        if (router) {
            const linkPath = path?.split('/');
            linkPath.shift();
            linkPath.splice(-1);

            const pathArray = linkPath.map((path, i) => {
                return {
                    breadcrumb: path,
                    href: '/' + linkPath.slice(0, i + 1).join('/'),
                };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <nav>
            <ol className="mt-20 flex font-normal text-gray-600">
                {breadcrumbs.map((breadcrumb, i) => {
                    return (
                        <li key={i}>
                            {i !== breadcrumbs.length - 1 ? (
                                <>
                                    <a href={breadcrumb.href}>
                                        {convertBreadcrumb(
                                            breadcrumb.breadcrumb
                                        )}
                                    </a>
                                    <span className="px-3">|</span>
                                </>
                            ) : (
                                <a href={breadcrumb.href}>
                                    {convertBreadcrumb(breadcrumb.breadcrumb)}
                                </a>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
