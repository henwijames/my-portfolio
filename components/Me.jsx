import Image from "next/image";

const Me = ({ containerStyles, imgSrc, sizes }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        className="rounded-full object-cover"
        src={imgSrc}
        fill
        priority
        alt="Henry James Ribano"
        sizes={sizes}
      />
    </div>
  );
};

export default Me;
