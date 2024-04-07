import Image from "next/image";

const Me = ({ containerStyles, imgSrc }) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} fill priority alt="Henwi" sizes/>
        </div>
    );
};

export default Me;
