import Card from "./UI/Card";
const CourseMenu = () => {
  const courses = [
    {
      image: "/images/ai.jpeg",
      title: "Artificial intelligence",
      description:
        "AI is the simulation of human intelligence in machines that can perform tasks that normally require human-level intelligence such as decision-making and make predictions.",
    },
    {
      image: "/images/networks.jpeg",
      title: "Networks",
      description:
        "Networks refer to the interconnected communication systems that allow devices to exchange information and resources, including the internet and other computer networks.",
    },
    {
      image: "/images/cloud.jpg",
      title: "Cloud computing",
      description:
        "Cloud computing is a model for delivering on-demand access to a shared pool of computing resources such as servers, storage, applications, and services, over the internet.",
    },
    {
      image: "/images/mobiledev.jpeg",
      title: "Mobile development",
      description:
        "Mobile development refers to the creation of software applications that run on mobile devices and specific to mobile operating systems like Android and iOS.",
    },
  ];
  // const image =
  //   "https://th.bing.com/th/id/R.130d7c62ccc7d52a21a4dfeb45171bff?rik=4HxzAkwkw9MeVg&riu=http%3a%2f%2funblast.com%2fwp-content%2fuploads%2f2020%2f10%2fOnline-Learning-Vector-Illustration.jpg&ehk=yEprb3st8RA7Q4yaFyq8QqBHPsP1AMV2LqD4ly39qVI%3d&risl=&pid=ImgRaw&r=0";

  return (
    <div className="mt-8 mb-32 mx-[50px] max-w-full sm:mt-20 lg:mt-32 ">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <h3 className="mt-6 text-xl text-center font-bold tracking-tight sm:text-4xl text-indigo-600">
        Courses
      </h3>
      <p className="mt-4 mb-12 text-xl font-normal tracking-tight text-center text-gray-900 sm:text-2xl">
        Choose a course you want to learn.
      </p>
      <dl className="grid max-w-xl grid-cols-4 gap-x-6 gap-y-10 lg:max-w-none ">
        {courses.map((course) => (
          <Card
            key={course.title}
            imageUrl={course.image}
            title={course.title}
            description={course.description}
          />
        ))}
      </dl>
    </div>
  );
};

export default CourseMenu;
