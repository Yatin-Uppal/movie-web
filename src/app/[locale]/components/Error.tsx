
import Image from "next/image";
import React from "react";
import errorCross from "@/../public/images/cross.svg";
import { useRouter } from "next/navigation";
// Custom error
const Error: React.FC<{ message: string }> = ({ message }: any) => {
  const router = useRouter();
  const handleReturnClick = () => {
    router.push("/movies-list");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F3EF]">
      <div className="text-center max-w-md w-full px-4">
        <div className="mb-6">
          <Image src={errorCross} alt="success" className="mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-[#E60054] mb-4">
          Error Occurred
        </h2>
        <p className="text-[#1E1E1E] mb-3">{message}</p>
        <button
          type="button"
          onClick={handleReturnClick}
          className="mt-4 text-base w-full h-[58px] p-2 flex justify-center items-center bg-[#E60054] rounded-2xl font-medium text-white hover:bg-[#C20038]"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
