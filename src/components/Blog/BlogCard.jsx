import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({slug, imageSrc, title, event, date }) => {
  return (
    <Link
    to={`/blog/${slug}`} 
      data-aos="zoom-in-down"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="700"
      className="relative bg-card rounded-lg overflow-hidden"
    >
      <img src={imageSrc} alt={title} className="aspect-video" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white">
        <div className="p-4 max-md:p-1 max-lg:p-1 bg-dark_gray bg-opacity-55 mb-5 max-md:mb-2">
          <h2 className="text-lg font-bold max-md:text-xs max-lg:text-xs uppercase">
            {title}
          </h2>
          <p className="text-sm max-md:text-xs max-lg:text-xs uppercase">{event}</p>
          <p className="text-xs">{date}</p>
        </div>
        <p
         
          className="bg-primary bg-opacity-85 mt-3 hover:text-white font-semibold py-2 px-10 max-md:px-2 max-md:py-1 max-lg:px-2 max-lg:py-1 w-full rounded-tr-lg shadow"
        >
          Explore Further
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
