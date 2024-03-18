import ContentWidth from '../layouts/ContentWidth';
import Text from '../typography/Text';

function NewsItem() {
    return (
        <ContentWidth>
            <div className="col-span-12 w-full">
                {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item, index) => (
            <a
              href={item.link}
              className="group mb-6 transition-all"
              key={index}
            >
              <div className="overflow-hidden h-52">
                <img
                  src={item.image}
                  className="object-cover w-full h-full group-hover:scale-110 transition-all"
                  alt="Image 1"
                />
              </div>
              <div className="mb-3 mt-4">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="mb-2 inline text-gray-700 px-2 py-1 mr-4 border border-gray-400 text-xs last-of-type:mr-0"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Text styles="text-sm mb-1 text-gray-500">{item.date}</Text>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 group-hover:text-primary transition-all">
                {item.title}
              </h2>
              <Text styles="texl-lg mb-3 text-gray-500">{item.lead}</Text>
            </a>
          ))}
        </div> */}
            </div>
        </ContentWidth>
    );
}

export default NewsItem;
