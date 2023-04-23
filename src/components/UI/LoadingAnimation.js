import Image from "next/image";

const LoadingAnimation = () => {
  return (
    <div className="w-full h-[65vh] flex items-center justify-center">
      <div className="w-[200px] height=[160px] mt-6">
        <Image
          src="https://res.cloudinary.com/dpuyeblqg/image/upload/v1670063669/Market%20media/Spinner-0.9s-200px_1_amugdk.svg"
          layout="responsive"
          alt="loading..."
          width={5}
          height={5}
          opacity={100}
        />
        <p className="text-center text-case font-semi-bold py-4">Loading</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
