import Image from "next/image";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 w-48">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          alt={title}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
      <div className="p-4">
        <p className="text-indigo-600 font-medium mb-2">Open course <span aria-hidden="true">&rarr;</span></p>
      </div>
    </div>
  );
};

export default Card;
