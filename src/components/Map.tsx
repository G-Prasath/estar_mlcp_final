import React, { useState } from "react";

const Map = () => {
  const [hoverData, setHoverData] = useState("");

  const mouseEnter = (data: string) => {
    setHoverData(data);
  };

  const mouseLeave = () => {
    setHoverData("");
  };

  return (
    <div className="w-full h-auto relative">
      <img src="/maps.avif" alt="Map" className="w-full h-full" />

      <p className="absolute top-[3%] left-[45%] font-bold text-3xl max-sm:text-sm text-[#889395] cursor-default">
        Our Foot Prints
      </p>

      {/* India  */}
      <div className="group absolute top-[56%] left-[67%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "india" ? "" : "hidden"
          }`}
        >
          India
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("india")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Singapore  */}
      <div className="group absolute top-[64%] left-[73%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "singapore" ? "" : "hidden"
          }`}
        >
          Singapore
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("singapore")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Malaysia  */}
      <div className="group absolute top-[61%] left-[72%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "malaysia" ? "" : "hidden"
          }`}
        >
          Malaysia
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("malaysia")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* UAE  */}
      <div className="group absolute top-[57%] left-[60%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "uae" ? "" : "hidden"
          }`}
        >
          UAE
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("uae")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Kenya  */}
      <div className="group absolute top-[65%] left-[56%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "kenya" ? "" : "hidden"
          }`}
        >
          Kenya
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("kenya")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Philippines  */}
      <div className="group absolute top-[60%] left-[78%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "philippines" ? "" : "hidden"
          }`}
        >
          Philippines
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("philippines")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Australia  */}
      <div className="group absolute top-[75%] left-[81%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "australia" ? "" : "hidden"
          }`}
        >
          Australia
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("australia")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Mauritius  */}
      <div className="group absolute top-[72%] left-[59%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "mauritius" ? "" : "hidden"
          }`}
        >
          Mauritius
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("mauritius")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Bangladesh  */}
      <div className="group absolute top-[54%] left-[70%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "bangladesh" ? "" : "hidden"
          }`}
        >
          Bangladesh
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("bangladesh")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Cyprus  */}
      <div className="group absolute top-[51%] left-[55%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "cyprus" ? "" : "hidden"
          }`}
        >
          Cyprus
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("cyprus")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Ecuador  */}
      <div className="group absolute top-[67%] left-[28%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "ecuador" ? "" : "hidden"
          }`}
        >
          Ecuador
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("ecuador")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Poland  */}
      <div className="group absolute top-[44%] left-[52%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "poland" ? "" : "hidden"
          }`}
        >
          Poland
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("poland")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* UK  */}
      <div className="group absolute top-[43%] left-[47%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "uk" ? "" : "hidden"
          }`}
        >
          UK
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("uk")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* USA  */}
      <div className="group absolute top-[47%] left-[22%] max-w-content">
        <div
          className={`absolute top-[-50px] left-[-30px] bg-white shadow-lg py-2 px-5 text-center rounded-md z-[99] ${
            hoverData === "usa" ? "" : "hidden"
          }`}
        >
          USA
        </div>

        {/* Marker */}
        <div
          className="w-5 h-5 max-sm:w-3 max-sm:h-3 bg-white rounded-full border-[3px] border-primary flex items-center justify-center cursor-pointer"
          onMouseEnter={() => mouseEnter("usa")}
          onMouseLeave={mouseLeave}
        >
          <div className="w-3 h-3 max-sm:w-1 max-sm:h-1 rounded-full bg-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default Map;