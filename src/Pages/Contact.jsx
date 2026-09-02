
const Contact = () => {
  return (
    <section className="text-black  body-font relative">
      <div className="container px-5 py-24 mx-auto ">
        {/* Heading */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto text-base">
            We'd love to hear from you. Send us your questions or feedback
            using the form below.
          </p>
        </div>

        {/* Form */}
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form className="flex flex-wrap -m-2">
            {/* Name */}
            <div className="p-2 w-full sm:w-1/2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-2 outline-none focus:border-indigo-500 focus:bg-white"
              />
            </div>

            {/* Email */}
            <div className="p-2 w-full sm:w-1/2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-2 outline-none focus:border-indigo-500 focus:bg-white"
              />
            </div>

            {/* Message */}
            <div className="p-2 w-full">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-2 outline-none resize-none focus:border-indigo-500 focus:bg-white"
              ></textarea>
            </div>

            {/* Button */}
            <div className="p-2 w-full">
              <button
                type="submit"
                className="mx-auto flex rounded bg-indigo-600 px-8 py-2 text-lg text-white hover:bg-indigo-700"
              >
                Send Message
              </button>
            </div>

            {/* Contact Info */}
            <div className="w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a
                href="mailto:alamin@example.com"
                className="text-indigo-600 hover:underline"
              >
                alamin@example.com
              </a>

              <p className=" leading-relaxed">
                Dhaka, Bangladesh
                <br />
                Mirpur-10
              </p>
              <p >
                Phone: +880 1700-000000
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;