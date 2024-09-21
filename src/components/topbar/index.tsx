import Link from "next/link";

const Topbar = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-10">
        <div className="relative flex justify-between py-4">
          <Link className="font-bold text-black-100" href="/">
            Mateus Lopes
          </Link>
          <div className="max-w-xs w-full flex flex-wrap gap-2 justify-between">
            <Link
              href="/#experience"
              className="hover:text-black-100 text-black-100/60"
            >
              Experience
            </Link>
            <Link
              href="/#works"
              className="hover:text-black-100 text-black-100/60"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="hover:text-black-100 text-black-100/60"
            >
              Contact
            </Link>
            <Link
              href=""
              className="hover:text-black-100 text-black-100/60"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
