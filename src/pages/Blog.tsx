import React from "react";
import { Outlet } from "react-router-dom";
import { BlogPosts } from "../data/BlogData";
import BlogCard from "../components/Blog/BlogCard";
import { Helmet } from "react-helmet-async";
import { BlogPageData as metaTags } from "../data/Metatags";



const Blog = () => {
  return (
    <div>

      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />,
        
        <meta property="og:title" content="E Star Engineers Private Limited Blogs - MLCP" />
        <meta property="og:site_name" content="E Star Engineers Private Limited -Blogs" />
        <meta property="og:url" content="https://www.estar.in/blog" />
        <meta property="og:description" content="Jump into the most recent insights and experiences on creative solutions, metropolitan versatility, and space improvement. Remain educated and motivated! " />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/banner/blog.webp " />
      </Helmet>
      
      <div className="w-full aspect-[16/9]">
        <img src="/banner/blog.webp" alt="Banner" className="w-full h-full" />
      </div>

      <h1 className="uppercase text-center font-[700] text-3xl mt-10 mb-5">
        Blog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:p-20 md:p-10 p-5">

        {Object.entries(BlogPosts).map(([slug, { title, imageSrc, event, date }]) => (
          <BlogCard
            key={slug}
            imageSrc={imageSrc}
            title={title}
            event={event}
            date={date}
            slug={slug}
           // Pass the link from JSON data to BlogCard component
          />
        ))}

      </div>

      <Outlet />
    </div>
  );
};

export default Blog;
