import { useState } from "react";

const Fashion = () => {
  const [sort, setSort] = useState("default");

  const products = [
    {
      id: 1,
      name: "Premium Casual Shirt",
      price: 850,
      oldPrice: 1100,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
      category: "Men",
    },
    {
      id: 2,
      name: "Stylish Women's Dress",
      price: 1250,
      oldPrice: 1600,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
      category: "Women",
    },
    {
      id: 3,
      name: "Classic Denim Jacket",
      price: 1450,
      oldPrice: 1800,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
      category: "Men",
    },
    {
      id: 4,
      name: "Elegant Handbag",
      price: 990,
      oldPrice: 1250,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
      category: "Accessories",
    },
    {
      id: 5,
      name: "Men's Premium T-Shirt",
      price: 650,
      oldPrice: 850,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
      category: "Men",
    },
    {
      id: 6,
      name: "Women's Casual Top",
      price: 750,
      oldPrice: 950,
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600",
      category: "Women",
    },
    {
      id: 7,
      name: "Classic Sunglasses",
      price: 550,
      oldPrice: 700,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
      category: "Accessories",
    },
    {
      id: 8,
      name: "Premium Sneakers",
      price: 1850,
      oldPrice: 2300,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
      category: "Shoes",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#123F3C]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 md:flex-row md:px-10">

          <div className="text-center md:w-1/2 md:text-left">
            <p className="mb-3 font-semibold uppercase tracking-[3px] text-[#D99A22]">
              E-Bazar Fashion
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Upgrade Your
              <span className="block text-[#D99A22]">
                Fashion Style
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-gray-300">
              Discover the latest fashion trends, premium quality clothing,
              shoes and accessories at the best prices.
            </p>

            <button className="mt-7 rounded-md bg-[#D99A22] px-7 py-3 font-semibold text-white transition hover:bg-[#b87f17]">
              Shop Now
            </button>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000"
              alt="Fashion"
              className="h-[350px] w-full rounded-2xl object-cover shadow-2xl md:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Category */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Fashion Categories
          </h2>

          <p className="mt-2 text-gray-500">
            Explore our latest fashion collections
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {["Men", "Women", "Shoes", "Accessories"].map((category) => (
            <button
              key={category}
              className="rounded-xl border bg-white px-5 py-5 font-semibold text-gray-700 shadow-sm transition hover:-translate-y-1 hover:border-[#D99A22] hover:text-[#D99A22] hover:shadow-md"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">

        {/* Heading + Sort */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Fashion Products
            </h2>

            <p className="mt-1 text-gray-500">
              Showing {products.length} products
            </p>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#D99A22]"
          >
            <option value="default">Sort by</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Discount */}
                <span className="absolute left-3 top-3 rounded-full bg-[#D99A22] px-3 py-1 text-xs font-bold text-white">
                  SALE
                </span>

                {/* Wishlist */}
                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow transition hover:bg-[#123F3C] hover:text-white">
                  ♡
                </button>
              </div>

              {/* Details */}
              <div className="p-5">
                <p className="mb-2 text-sm text-gray-400">
                  {product.category}
                </p>

                <h3 className="mb-3 font-semibold text-gray-800">
                  {product.name}
                </h3>

                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-[#123F3C]">
                    ৳{product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ৳{product.oldPrice}
                  </span>
                </div>

                {/* Add to Cart */}
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

export default Fashion;
