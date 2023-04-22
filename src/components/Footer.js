import Image from "next/image";

const Footer = () => {
  return (
    <div className="text-gray-900">
      <hr />
      <div className="max-w-7xl p-6 mx-auto px-4 sm:px-6 lg:px-8 flex-col justify-center items-center">
        <div className="flex gap-x-2 justify-center items-center">
          <img
            src="images/logo.png"
            alt="InterLearn"
            width={28}
          />
          <span className="text-sm px-2 font-semibold">InterLearn</span>
        </div>
        <div className="text-sm text-center justify-center items-center">
          &copy; {new Date().getFullYear()} InterLearn. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
