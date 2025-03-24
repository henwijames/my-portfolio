import Image from "next/image";

const Me = ({ containerStyles, imgSrc, sizes }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="Henwi" sizes={sizes} />
    </div>
  );
};

export default Me;
