import React from "react";

// Data to be passed to Newgallery
const datas = [
  {
    logo: "/clients/chennai_silks.png",
    title: "The Chennai Silks - Chromepet",
    alt: "Shuttle Stacker",
    content: "Shuttle Stacker - 126 Cars",
    img: [
      "/imgGallery/shuttle-stacker-system-1.webp",
      "/imgGallery/shuttle-stacker-system-2.webp",
      "/imgGallery/shuttle-stacker-system-3.webp",
    ],
  },
  {
    logo: "/clients/Shree_kumaran.webp",
    title: "Shree Kumaran Thanga Maligai - Thiruppur",
    alt: "Tower Parking",
    content: "Tower Parking - 136 Cars",
    img: [
      "/imgGallery/tower-parking-system-7.webp",
      "/imgGallery/tower-parking-system-8.webp",
      "/imgGallery/tower-parking-system-9.webp",
    ],
  },
  {
    logo: "/clients/anandham_silks.avif",
    title: "Anandham Silks - Rajapalayam",
    alt: "Tower Parking System",
    content: "Tower Parking - 49 Cars",
    img: [
      "/imgGallery/tower-parking-system-4.webp",
      "/imgGallery/tower-parking-system-5.webp",
      "/imgGallery/tower-parking-system-6.webp",
    ],
  },
];

const Compltedproject = () => {
  return (
    <div className="sec-padding w-full">
      <>
        {datas.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center gap-5 max-md:grid-cols-3 max-sm:grid-cols-1 max-md:gap-3 bg-light_white p-5 rounded-lg my-5"
          >
            <div className="w-full h-auto bg-light_white p-5 rounded-lg overflow-hidden">
              <img src={item.logo} alt="Site images" />
              <h5 className="text-xl max-md:text-sm">{item.title}</h5>
              <p className="text-lg max-md:text-sm">{item.content}</p>
            </div>

            {item.img.map((imgs, index) => (
              <div
                key={index}
                className="w-full aspect-square bg-light_white rounded-lg overflow-hidden"
              >
                <img
                  src={imgs}
                  alt={item.alt}
                  title={`${item.alt} Estar`}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        ))}
      </>
    </div>
  );
};

export default Compltedproject;
