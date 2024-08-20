import React from "react";
import Newgallery from "./Newgallery";

// Data to be passed to Newgallery
const data = [
  {
    logo: "/clients/chennai_silks.png",
    title: "The Chennai Silks - Chromepet",
    alt : "Shuttle Stacker",
    content: "Shuttle Stacker - 126 Cars",
    img: ["/gallery/shuttle-stacker-system-1.webp", "/gallery/shuttle-stacker-system-2.webp", "/gallery/shuttle-stacker-system-3.webp"],
  },
  {
    logo: "/clients/Shree_kumaran.webp",
    title: "Shree Kumaran Thanga Maligai - Thiruppur",
    alt : "Tower Parking",
    content: "Tower Parking - 136 Cars",
    img: ["/gallery/tower-parking-system-7.webp", "/gallery/tower-parking-system-8.webp", "/gallery/tower-parking-system-9.webp"],
  },
  {
    logo: "/clients/anandham_silks.avif",
    title: "Anandham Silks - Rajapalayam",
    alt : "Tower Parking System",
    content: "Tower Parking - 49 Cars",
    img: ["/gallery/tower-parking-system-4.webp", "/gallery/tower-parking-system-5.webp", "/gallery/tower-parking-system-6.webp"],

  },
];

const Compltedproject = () => {
  return (
    <div className="sec-padding w-full">
      <Newgallery datas={data} />
    </div>
  );
};

export default Compltedproject;
