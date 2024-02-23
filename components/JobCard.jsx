import Image from "next/image";

const JobCard = ({label, imgSrc, subtext}) => {
  return (
    <div className="flex items-center flex-col text-center">
      <h2 className="text-xl font-semibold p-2">{label}</h2>
      <p className="font-light text-lg ">{subtext}</p>
      <Image src={imgSrc} height={500} width={500} />
    </div>
  );
};

export default JobCard;
