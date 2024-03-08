import React, { useEffect, useState } from "react";

export function ImageCarousel({ imageUrls }: { imageUrls?: string[] }) {
  const [active, setActive] = useState<string | undefined>(
    imageUrls ? imageUrls[0] : undefined
  );

  useEffect(() => {
    if (imageUrls && imageUrls.length > 0) {
      setActive(imageUrls[0]);
    }
  }, [imageUrls]);

  if (!imageUrls) {
    // You might want to add a loading state or handle this case appropriately
    return <div className="min-h-[10rem] md:min-h-[480px] flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="grid gap-4 w-full  justify-center items-center py-8">
      <div>
        <img
          className="h-auto min-w-[90vw] max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4 w-fit justify-center items-center justify-self-center ">
        {imageUrls.length &&
          imageUrls.map((imgelink, index) => (
            <div key={index}>
              <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 min-h-20 min-w-full max-w-full cursor-pointer rounded-lg object-cover object-center"
                alt="gallery-image"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
