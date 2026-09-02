import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Main Footer */}
      <div className="bg-[#123F3C] px-6 py-12 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Contact Us */}
          <div>
            <h2 className="mb-5 text-2xl font-bold">Contact Us</h2>

            <p className="mb-2 text-gray-200">
              E-Bazar Mega Super Shop
            </p>

            <p className="mb-4 text-gray-300">
              405 - Union Trade Center
            </p>

            <a
              href="mailto:example@gmail.com"
              className="mb-2 block text-gray-200 transition hover:text-[#D99A22]"
            >
              example@gmail.com
            </a>

            <p className="mb-4 text-gray-200">
              +88018xxxxxxxx
            </p>

            <Link
              to="#"
              className="font-semibold transition hover:text-[#D99A22]"
            >
              Online Chat →
            </Link>
          </div>

          {/* Our Products */}
          <div>
            <h2 className="mb-5 text-2xl font-bold">Our Products</h2>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="#" className="transition hover:text-[#D99A22]">
                  Fashion Items
                </Link>
              </li>

              <li>
                <Link to="#" className="transition hover:text-[#D99A22]">
                  Electronic Items
                </Link>
              </li>

              <li>
                <Link to="#" className="transition hover:text-[#D99A22]">
                  Cosmetic Items
                </Link>
              </li>

              <li>
                <Link to="#" className="transition hover:text-[#D99A22]">
                  Grocery Items
                </Link>
              </li>

              <li>
                <Link to="#" className="transition hover:text-[#D99A22]">
                  Home & Kitchen
                </Link>
              </li>

              <li>
                <Link to="#" className="transition hover:text-[#D99A22]">
                  Sports Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h2 className="mb-5 text-2xl font-bold">Our Company</h2>

            <p className="mb-3 text-gray-200">
              E-Bazar
            </p>

            <p className="mb-2 text-gray-300">
              507 - Union Trade Center
            </p>

            <p className="text-gray-300">
              Mirpur, Dhaka, Bangladesh
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="mb-5 text-2xl font-bold">
              Subscribe to Newsletter
            </h2>

            <p className="mb-5 text-gray-300">
              Subscribe to get the latest updates, offers and products.
            </p>

            <form className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-500 bg-white px-4 py-3 text-black outline-none focus:border-[#D99A22]"
              />

              <button
                type="submit"
                className="rounded-md bg-[#D99A22] px-5 py-3 font-semibold text-white transition hover:bg-[#b87f17]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center justify-center gap-2 bg-[#D99A22] px-4 py-4 text-center text-sm font-medium text-white sm:flex-row">
        <p>© 2026 E-Bazar.</p>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
