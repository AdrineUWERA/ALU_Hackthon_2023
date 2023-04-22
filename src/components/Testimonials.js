const Testimonials = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h3 classNameName="mt-2 text-xl text-center font-bold tracking-tight sm:text-4xl text-indigo-600">
          Testimonials
        </h3>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-normal leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “ This platform has transformed my
              learning experience and made it smoth. It centralized everything I need to learn. ”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-12 rounded-full"
              src="images/gabin.jpeg"
              alt=""
            ></img>
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Gabin ISHIMWE</div>
              <svg
                viewBox="0 0 2 2"
                width="3"
                height="3"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600">CS Student</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
