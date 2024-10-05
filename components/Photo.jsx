"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const Photo = () => {
  // State to control the visibility of the photo
  const [showPhoto, setShowPhoto] = useState(false);

  // useEffect to set a timeout for the photo to appear
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPhoto(true);
    }, 1000); // 1000 milliseconds = 1 second

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative mx-auto flex">
      {showPhoto && (
        <>
          <Image
            src="/assets/p.png"
            alt="profile picture"
            width={556}
            height={556}
            className="rounded-full object-cover"
          />
          <div className="absolute inset-0 rounded-full hover:shadow-[0_0_30px_20px_rgba(0,255,255,0.8)] transition-shadow duration-300 ease-in-out"></div>
        </>
      )}
    </div>
  );
};

export default Photo;
