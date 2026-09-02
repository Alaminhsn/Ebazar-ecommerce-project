
const Man = () => {
  const products = [
    {
      id: 1,
      name: "Premium Casual Shirt",
      price: 850,
      oldPrice: 1100,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 1450,
      oldPrice: 1800,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
    },
    {
      id: 3,
      name: "Premium T-Shirt",
      price: 650,
      oldPrice: 850,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    },
    {
      id: 4,
      name: "Men's Sneakers",
      price: 1850,
      oldPrice: 2300,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-[#123F3C]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10">

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="mb-3 font-semibold uppercase tracking-[3px] text-[#D99A22]">
              E-Bazar Men's Collection
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Style That
              <span className="block text-[#D99A22]">
                Defines You
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-gray-300">
              Discover premium men's fashion, stylish shirts, t-shirts,
              jackets, shoes and more at affordable prices.
            </p>

            <button className="mt-7 rounded-md bg-[#D99A22] px-8 py-3 font-semibold text-white transition hover:bg-[#b87f17]">
              Shop Collection
            </button>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900"
              alt="Men Fashion"
              className="h-[400px] w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Shop Men's Fashion
          </h2>

          <p className="mt-2 text-gray-500">
            Find everything you need for your style
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "T-Shirts",
            "Shirts",
            "Pants",
            "Shoes",
          ].map((category) => (
            <div
              key={category}
              className="cursor-pointer rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#123F3C] text-xl text-white">
                👕
              </div>

              <h3 className="font-semibold text-gray-800">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-medium text-[#D99A22]">
              TRENDING NOW
            </p>

            <h2 className="text-3xl font-bold text-gray-800">
              Men's Products
            </h2>
          </div>

          <button className="hidden font-semibold text-[#123F3C] hover:text-[#D99A22] sm:block">
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

                <span className="absolute left-3 top-3 rounded-full bg-[#D99A22] px-3 py-1 text-xs font-bold text-white">
                  SALE
                </span>

                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl shadow">
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

                <button className="mt-4 w-full rounded-md bg-[#123F3C] py-3 font-semibold text-white transition hover:bg-[#D99A22]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Man;
