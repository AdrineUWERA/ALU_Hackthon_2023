import Link from "next/link";

const NavBar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="images\logo.png" alt=""></img>
          </a>
          <span className="text-xl ml-4 text-center font-bold tracking-tight sm:text-2xl text-indigo-600">InterLearn</span>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Our Team
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Courses
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/learn/courseMaterial"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Start Learning
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
