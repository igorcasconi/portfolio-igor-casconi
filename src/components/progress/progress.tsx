import { PropsWithChildren } from "react";

type ProgressProps = PropsWithChildren & {
  percentage: string;
  name: string;
};

const Progress = ({ children, percentage, name }: ProgressProps) => {
  return (
    <div className="box">
      <div className="flex flex-row items-center">
        {children}
        <p className="text-white font-afacad font-regular">{name}</p>
      </div>
      <div className="w-[200px] sm:w-full h-[8px] bg-[#374151] relative rounded-full">
        <div
          className={`h-[8px] absolute top-0 left-0 bg-primary rounded-full ${percentage}`}
        />
      </div>
    </div>
  );
};

export default Progress;
