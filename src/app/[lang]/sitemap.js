 import { getStoryblokApi } from '@storyblok/react/rsc';

// export async function getSitemap(lang) {
//   const storyblokApi = getStoryblokApi();
//   const perPage = 100;
//   let currentPage = 1;
//   let links = [];
//   let total = 0;

//   do {
//     const response = await storyblokApi.get('cdn/links', {
//       version: 'published',
//       page: currentPage,
//       per_page: perPage,
//       paginated: 1,
//       starts_with: lang ? `${lang}/` : '',
//     });
//     console.log(response, 'response sitemap');
//     links = [...links, ...Object.values(response.data.links)];
//     console.log(links, "links sitemap");
//     total = response.headers.total;
//     console.log(total, 'total sitemap');
//     currentPage++;
//   } while (currentPage * perPage < total);

//   const prefixUrl = 'https://stadler-prototyping-git-next-no-typescript-stadler-rail.vercel.app/';


//   let sitemapEntries = links
//     .filter((link) => !link.is_folder)
//     .map((link) => {
//       const alternates = link.alternates || [];
//       const alternatesXml = alternates
//         .map((alt) => `
//           <xhtml:link rel="alternate" hreflang="en" href="${prefixUrl}/en/${alt.translated_slug}" />
//           <xhtml:link rel="alternate" hreflang="de" href="${prefixUrl}/de/${alt.translated_slug}" />
//         `).join('');

//       return `
//         <url>
//           <loc>${prefixUrl}${link.real_path}</loc>
//           <lastmod>${new Date().toISOString()}</lastmod>
//           <changefreq>weekly</changefreq>
//           <priority>0.5</priority>
//           ${alternatesXml}
//         </url>`;
//     }).join('');


//   let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
//       ${sitemapEntries}
//     </urlset>`;

//   console.log(sitemap);
//   return sitemap;
// }

// export async function generateSitemaps() {
//  const storyblokApi = getStoryblokApi();

//  const { data } = await storyblokApi.get('cdn/links/', {
//      version: 'published',
//  });
//  console.log(data, 'data sitemap');
// }
// generateSitemaps()
export default async function sitemap() {
    //const BaseUrl = 'http://localhost:3000';
    const storyblokApi = getStoryblokApi();


  const { data } = await storyblokApi.get('cdn/stories/', {
      version: 'published',
  });
    console.log(data, "data sitemap")
        // const paths = [];
        // Object.keys(data.links).map((linkKey) => ({
        //      url: `${BaseUrl}/en/${linkKey}`,
        // }));

 
     
 


    // return [
    //     {
    //         url: `${BaseUrl}/en/`,
    //         lastModified: new Date(),
    //     },
    //     ...paths
    // ];
}
