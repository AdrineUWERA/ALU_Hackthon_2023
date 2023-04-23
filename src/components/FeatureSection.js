// import { GrLanguage } from "react-icons/Gr";
import { MdOutlineContactSupport, MdLanguage } from "react-icons/Md";
import { GiSpellBook } from "react-icons/Gi";
import { FaTeamspeak } from "react-icons/Fa";

const Features = () => {
  const features = [
    {
      name: "Adaptive Learning",
      description:
        "The platform can adapt to the pace and level of each student.",
      icon: <GiSpellBook size={25} color="white" />,
    },
    {
      name: "Immediate Support",
      description:
        "Real-time support is provided to learner hence improving their understanding and retention of the material.",
      icon: <MdOutlineContactSupport size={25} color="white"/>,
    },
    {
      name: "Natural Language Processing",
      description:
        "Understands natural language and provide conversational responses, making the learning process more engaging and interactive.",
      icon: <FaTeamspeak size={25} color="white"/>,
    },
    {
      name: "Multi-Language Support",
      description:
        "Support for multiple languages, hence enabling students from different parts of the world to learn in their native language, leading to more inclusive education.",
      icon: <MdLanguage size={25} color="white"/>,
    },
  ];

  return (
    <div className="bg-white py-0 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Engaging learning experience
          </h2>
          <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why use Our platform to learn?
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    {feature.icon}
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
