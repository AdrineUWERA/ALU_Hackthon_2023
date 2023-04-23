import Image from "next/image";

const Card = ({ imageUrl, title, description }) => {
  let shortDescription;
  if (description.split(" ").length > 100) {
    shortDescription = description.substring(0, 100) + " ...";
  } else {
    shortDescription = description;
  }
  return (
    <div className="w-56 bg-white rounded rounded-lg overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-sm mb-2">{title}</div>
        <p className="text-gray-700 text-xs">
          {shortDescription}
        </p>
      </div>
      <div className="px-6 pb-4">
        <a href="/learn/artificial-intelligence" className="text-indigo-600 font-medium text-xs mb-2">
          Open course <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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

    </div> */
}
