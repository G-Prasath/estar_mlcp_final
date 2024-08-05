import React from "react";
import { Link, useParams } from "react-router-dom";
import { BlogPosts } from "../../data/BlogData";

const BlogFullPage = () => {
  const { slug } = useParams();
  const post = BlogPosts[slug];

  if (!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }

  const { imageSrc, alt, author, date, title, content, tags, sidePosts } = post;
  return (
    <div>
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Recent blog posts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col md:flex-row items-start">
            <div>
              <img
                src={imageSrc}
                alt={alt}
                className="w-full rounded-lg mb-4 md:mb-0 md:mr-4"
              />
              <p className="text-sm text-muted-foreground mt-5">
                {author} • {date}
              </p>
              <h3 className="text-xl font-semibold mt-2">{title}</h3>
              <p
                className="mt-2 text-muted-foreground text-justify mb-7"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <div className="mt-4 flex space-x-2">
                {tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={tag.url}
                    className="bg-primary text-white max-sm:text-sm max-sm:text-[9px] px-2 py-1 rounded"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {sidePosts.map((sidePost, index) =>
              sidePost.slug !== slug ? (
                <Link to={`/blog/${sidePost.slug}`} key={index} className="flex items-start space-x-4">
                  <img
                    src={sidePost.image}
                    alt={sidePost.alt}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {sidePost.author} • {sidePost.date}
                    </p>
                    <h4 className="text-lg font-semibold mt-1">{sidePost.title}</h4>
                    <div className="mt-2 flex space-x-2">
                      {sidePost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFullPage;
