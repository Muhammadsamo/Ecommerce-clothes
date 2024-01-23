import { useEffect, useState } from "react";

type TProps = {
  images: string[];
  name: string;
};

const Left = ({images, name}: TProps ) => {
  const [mainImage, setMainImage] = useState("/images/image10.png");
  const handleSelectImage = (image: string) => {
    setMainImage(image);
  };
  useEffect(()=>{
    handleSelectImage(images[0]);
  }, [images])

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-3">
        {images.map((image) => {
          return (
            <div className="w-[9.5rem] h-[10.4375rem] rounded-[1.25rem] cursor-pointer border-opacity-0 border-black border hover:border-opacity-100">
              <img
                className="rounded-[1.25rem] h-full"
                src={image}
                alt={name}
                onClick={() => handleSelectImage(image)}
              />
            </div>
          );
        })}
        {/* <div className="w-[9.5rem] h-[10.4375rem] rounded-[1.25rem] cursor-pointer border-opacity-0 border-black border hover:border-opacity-100">
          <img
            className="rounded-[1.25rem] h-full"
            src="/images/image9.png"
            alt="image"
            onClick={() => handleSelectImage("/images/image9.png")}
          />
        </div>
        <div className="w-[9.5rem] h-[10.4375rem] rounded-[1.25rem] cursor-pointer border-opacity-0 border-black border hover:border-opacity-100">
          <img
            className="rounded-[1.25rem] h-full"
            src="/images/image8.png"
            alt="jeans"
            onClick={() => handleSelectImage("/images/image8.png")}
          />
        </div> */}
      </div>
      <div className="flex-auto rounded-[1.25rem] max-h-[530px] w-[32.5rem]">
        <img
          className="rounded-[1.25rem]  h-auto max-h-[32.8125rem] w-full max-w-[32.5rem] main-image"
          src={mainImage}
          alt={name}
        />
      </div>
    </div>
  );
};

export default Left;
