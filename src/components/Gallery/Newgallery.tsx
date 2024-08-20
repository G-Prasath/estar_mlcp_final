import React from "react";

const Newgallery = ({ datas }) => {
  return (
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

            {
                item.img.map((imgs, index) => (

                    <div key={index} className="w-full aspect-square bg-light_white rounded-lg overflow-hidden">
                        <img src={imgs} alt={item.alt} title={`${item.alt} Estar`} className="w-full h-full" />
                    </div>
                ))
            }

        </div>
      ))}
    </>
  );
};

export default Newgallery;
