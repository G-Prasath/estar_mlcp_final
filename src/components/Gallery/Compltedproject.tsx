import React from "react";
import Newgallery from "./Newgallery";

// Data to be passed to Newgallery
const data = [
  {
    logo: "/clients/chennai_silks.png",
    title: "The Chennai Silks - Chromepet",
    content: "Shuttle Stacker - 126 Cars",
    img: ["/gallery/1.webp", "/gallery/2.webp", "/gallery/3.webp"],
  },
  {
    logo: "/clients/Shree_kumaran.webp",
    title: "Shree Kumaran Thanga Maligai - Thiruppur",
    content: "Tower Parking - 136 Cars",
    img: ["/gallery/7.webp", "/gallery/8.webp", "/gallery/9.webp"],
  },
  {
    logo: "/clients/anandham_silks.avif",
    title: "Anandham Silks - Rajapalayam",
    content: "Tower Parking - 49 Cars",
    img: ["/gallery/4.webp", "/gallery/5.webp", "/gallery/6.webp"],

  },
  // {
  //   logo: "/clients/VGN.png",
  //   title: "VGN Notting Hill - Nungambakkam",
  //   content: "Shuttle Stacker - 280 Cars",
  //   img: ["/gallery/7.webp", "/gallery/8.webp", "/gallery/9.webp"],
  // },
  // {
  //   logo: "/clients/Novel.png",
  //   title: "Novel IT Park - Bengaluru",
  //   content: "Shuttle Stacker - 120 Cars",
  //   img: [
  //     "https://via.placeholder.com/150",
  //     "https://via.placeholder.com/150",
  //     "https://via.placeholder.com/150",
  //   ],
  // },
];

const Compltedproject = () => {
  return (
    <div className="sec-padding w-full">
      <Newgallery datas={data} />
    </div>
  );
};

export default Compltedproject;
