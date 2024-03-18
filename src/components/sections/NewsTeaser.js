 
import ContentWidth from "../layouts/ContentWidth";
import { getStoryblokApi, storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

import { useState, useEffect } from "react";
import H2 from "../typography/H2";
import Text from "../typography/Text";
import ButtonPrimary from "../../components/elements/ButtonPrimary";


function NewsTeaser({ blok }) {
  const [articlesCategory, setArticlesCategory] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const categories = blok.categories.join(",")
      
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        version: "published",
        starts_with: 'medien/news/',
        is_startpage: false,
        resolve_relations: "news.categories",
        "filter_query[categories][exists]": categories,
        "sort_by": "content.date:desc"
      });
 
      setArticlesCategory((prev) => data.stories.map((article) => {
        article.content.slug = article.slug;
        return article;
      }));
    };
    getArticles();
  }, []);


  const formatDate = (textToFormat) => {
    const date = new Date(textToFormat)
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedDay = dd + '.' + mm + '.' + yyyy;

    return formattedDay;
  }
  
  return (
    <section {...storyblokEditable(blok)} className="py-5 lg:py-24">
    <ContentWidth>
      <div className="col-span-12 w-full">
        <H2>{blok.title}</H2>
      </div>  
      <div className="col-span-12 w-full">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        { articlesCategory[0] && articlesCategory.map((article) => (
            <a
            href={`news/${article.slug}`}
            className="group mb-6 transition-all"
            key={article.uuid}
          >
            <div className="overflow-hidden h-52">
              <img
                src={article.content.image.filename}
                className="object-cover w-full h-full group-hover:scale-110 transition-all"
                alt="Image 1"
              />
            </div>
            <div className="mb-3 mt-4">
              {article.content.categories.map((category, index) => (
                <span
                  key={index}
                  className="mb-2 inline text-gray-700 px-2 py-1 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
                >
                  {category.content.category}
                </span>
              ))}
            </div>
              <Text styles="text-sm mb-1 text-gray-500">{formatDate(article.content.date)}</Text>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 group-hover:text-primary transition-all">
                {article.name}
              </h2>
              <Text styles="texl-lg mb-3 text-gray-500">{article.content.lead}</Text>
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-12 w-full">
      <ButtonPrimary buttonText={blok.ctag_all_news} href={blok.CTA_Show_All.url}></ButtonPrimary>
      </div>  
    </ContentWidth>
    </section>
  );
}

export default NewsTeaser;