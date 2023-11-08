import Link from "@/components/typography/Link";

export default function News() {
  return (
    <aside aria-label="Related articles" className="py-8 lg:py-24 bg-white">
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Related articles
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <article className="max-w-xs">
            <a href="#">
              <img
                src="/news-1.jpg"
                className="mb-5 rounded-lg"
                alt="Image 1"
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">Our first office</a>
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <Link>Read in 2 minutes</Link>
          </article>
          <article className="max-w-xs">
            <a href="#">
              <img
                src="/news-2.jpg"
                className="mb-5 rounded-lg"
                alt="Image 2"
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">Enterprise design tips</a>
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <Link>Read in 12 minutes</Link>
          </article>
          <article className="max-w-xs">
            <a href="#">
              <img
                src="/news-4.jpg"
                className="mb-5 rounded-lg"
                alt="Image 3"
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">We partnered with Google</a>
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>
            <Link>Read in 8 minutes</Link>
          </article>
          <article className="max-w-xs">
            <a href="#">
              <img
                src="/news-5.jpg"
                className="mb-5 rounded-lg"
                alt="Image 4"
              />
            </a>
            <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
              <a href="#">Our first project with React</a>
            </h2>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </p>

            <Link>Read in 4 minutes</Link>
          </article>
        </div>
      </div>
    </aside>
  );
}
