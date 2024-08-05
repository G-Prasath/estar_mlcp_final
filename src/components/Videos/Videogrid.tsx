import React from "react";

const Videogrid = () => {
  const iframeData = [
    {
      src: "https://player.vimeo.com/video/994908636?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "Sri Kumaran Thanga Maligai - Tirupur",
    },
    {
      src: "https://player.vimeo.com/video/994908798?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "JRT",
    },
    {
      src: "https://player.vimeo.com/video/994908761?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "The Chennai Silks - Chomepet",
    },
    {
      src: "https://player.vimeo.com/video/994908705?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      title: "The Chennai Silks",
    },
  ];

  return (
    <>
      <h1 className="uppercase text-center font-[700] text-3xl mt-10 mb-3">
        Videos
      </h1>
      <h2 className="text-center text-xl">
        Discover our cutting-edge parking solutions in action
      </h2>
      <div className="mt-8 w-full grid grid-cols-2 gap-10 max-md:gap-5 max-lg:grid-cols-1 sec-padding overflow-hidden">
        {iframeData.map((item, index) => (
          <div className="w-full aspect-video relative" key={index}>
            <iframe
              src={item.src}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title={item.title} className="rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
};

export default Videogrid;