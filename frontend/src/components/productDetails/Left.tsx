import { useState } from "react";

const Left = () => {
  const [selectedImage, setSelectedImage] = useState("/images/image10.png");

  const handleSelectImage = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-3">
        <div className="w-[9.5rem] h-[10.4375rem] rounded-[1.25rem] cursor-pointer border-opacity-0 border-black border hover:border-opacity-100">
          <img
            className="rounded-[1.25rem] h-full"
            src="/images/image10.png"
            alt="shirt"
            onClick={() => handleSelectImage("/images/image10.png")}
          />
        </div>
        <div className="w-[9.5rem] h-[10.4375rem] rounded-[1.25rem] cursor-pointer border-opacity-0 border-black border hover:border-opacity-100">
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
        </div>
      </div>
      <div className="flex-auto rounded-[1.25rem] max-h-[530px] w-[32.5rem]">
        <img
          className="rounded-[1.25rem]  h-auto max-h-[32.8125rem] w-full max-w-[32.5rem] main-image"
          src={selectedImage}
          alt="selected image"
        />
      </div>
    </div>
  );
};

export default Left;
