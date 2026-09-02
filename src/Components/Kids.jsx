

const Kids = () => {
  const products = [
    {
      id: 1,
      name: "Kids Casual T-Shirt",
      price: 450,
      oldPrice: 600,
      image:
        "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600",
    },
    {
      id: 2,
      name: "Kids Stylish Dress",
      price: 850,
      oldPrice: 1100,
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600",
    },
    {
      id: 3,
      name: "Kids Denim Jacket",
      price: 950,
      oldPrice: 1200,
      image:
        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600",
    },
    {
      id: 4,
      name: "Kids Sneakers",
      price: 1100,
      oldPrice: 1400,
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600",
    },
  ];

  const categories = [
    {
      name: "Boys",
      icon: "👦",
    },
    {
      name: "Girls",
      icon: "👧",
    },
    {
      name: "Kids Shoes",
      icon: "👟",
    },
    {
      name: "Toys",
      icon: "🧸",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-[#123F3C]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10">

          {/* Hero Content */}
          <div className="text-center md:text-left">
            <p className="mb-3 font-semibold uppercase tracking-[3px] text-[#D99A22]">
              E-Bazar Kids Collection
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Little Styles,
              <span className="block text-[#D99A22]">
                Big Smiles
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-gray-300">
              Discover cute, comfortable and stylish clothing, shoes and
              accessories for your little ones.
            </p>

            <button className="mt-7 rounded-md bg-[#D99A22] px-8 py-3 font-semibold text-white transition hover:bg-[#b87f17]">
              Shop Kids Collection
            </button>
          </div>

          {/* Hero Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900"
              alt="Kids Fashion"
              className="h-[400px] w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Kids Categories
          </h2>

          <p className="mt-2 text-gray-500">
            Everything your little ones need
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category.name}
              className="cursor-pointer rounded-xl bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#123F3C] text-2xl">
                {category.icon}
              </div>

              <h3 className="font-semibold text-gray-800">
                {category.name}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">

        {/* Heading */}
        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="font-medium text-[#D99A22]">
              POPULAR PICKS
            </p>

            <h2 className="text-3xl font-bold text-gray-800">
              Kids Products
            </h2>
          </div>

          <button className="hidden font-semibold text-[#123F3C] transition hover:text-[#D99A22] sm:block">
            View All →
          </button>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Sale Badge */}
                <span className="absolute left-3 top-3 rounded-full bg-[#D99A22] px-3 py-1 text-xs font-bold text-white">
                  SALE
                </span>

                {/* Wishlist */}
                <button
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl shadow transition hover:bg-[#123F3C] hover:text-white"
                  aria-label="Add to wishlist"
                >
                  ♡
                </button>

              </div>

              {/* Product Details */}
              <div className="p-5">

                <h3 className="font-semibold text-gray-800">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-3">

                  <span className="text-xl font-bold text-[#123F3C]">
                    ৳{product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ৳{product.oldPrice}
                  </span>

                </div>

                {/* Add To Cart */}
                <button className="mt-4 w-full rounded-md bg-[#123F3C] py-3 font-semibold text-white transition hover:bg-[#D99A22]">
                  Add to Cart
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-[#D99A22]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-10 text-center md:flex-row md:px-10 md:text-left">

          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Special Offers for Kids
            </h2>

            <p className="mt-2 text-white/90">
              Get amazing deals on selected kids products.
            </p>
          </div>

          <button className="rounded-md bg-[#123F3C] px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#123F3C]">
            Shop Now
          </button>

        </div>
      </section>

    </div>
  );
};

export default Kids;
