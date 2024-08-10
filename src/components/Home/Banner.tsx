import React, { useEffect, useState } from "react";
import workerScript from '../../hooks/imageWorker?worker'; 

const Banner = () => {
    const bannerCnt = [
        {
            img: "/banner/Shuttle-Parking.avif",
            text: "Streamlined Shuttle Parking",
        },
        {
            img: "/banner/Tower-Parking.avif",
            text: "Innovative Tower Parking Solutions",
        },
        {
            img: "/banner/amrisar-project.avif",
            text: "Inhouse Engineered Patented Products",
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [optimizedImages, setOptimizedImages] = useState<string[]>([]);

    useEffect(() => {
        const worker = new workerScript();

        worker.onmessage = function (e) {
            if (e.data) {
                setOptimizedImages((prevImages) => [...prevImages, e.data]);
            }
        };

        bannerCnt.forEach((cnt) => {
            worker.postMessage({
                imageUrl: cnt.img,
                quality: 0.8,
            });
        });

        return () => worker.terminate();
    }, [bannerCnt]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerCnt.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [bannerCnt.length]);

    return (
        <div className="relative overflow-hidden w-full aspect-video">
            {bannerCnt.map((cnt, index) => (
                <div key={index}>
                    <div className="absolute inset-0">
                        <picture>
                            <img
                                src={optimizedImages[index] || cnt.img} // Use the optimized image if available
                                alt={`Background ${index}`}
                                loading="lazy"
                                className={`absolute inset-0 object-cover object-center w-full h-full transition-opacity duration-1000 ease-in-out ${
                                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        </picture>
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                    </div>

                    <div className="relative text-primary z-10 flex flex-col justify-center items-center h-full text-center">
                        <p className={`absolute card-glass text-center mt-[50%] text-5xl font-bold leading-tight mb-4 max-sm:text-lg max-sm:mb-1 transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                          }`}>
                            {cnt.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
