
import { examples } from "@/const/data";
import JobCard from "./JobCard";

const Jobs = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-5xl font-bold">Trabajos Realizados </h1>
      </div>
      <div className=" w-full h-full">
        <div className="grid grid-cols-1 items-center ">
          {examples.map((example) => (
            <JobCard imgSrc={example.imgAntes} label={example.label} subtext={example.subtext} key={example.label} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
