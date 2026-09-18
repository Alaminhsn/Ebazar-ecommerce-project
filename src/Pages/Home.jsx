import React, { useState } from "react";
import Slide from "../Components/Slide";
import Search from "../Components/Search";
import SubSlide from "../Components/SubSlide";
import ProductSlider from "../Components/ProductSlider";
import Footer from "../Components/Footer";

import { LiaShippingFastSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-yellow-100 min-h-screen">

      {/* Search */}
      <Search />

      {/* Main Slider */}
      <Slide />

      {/* Sub Slider */}
      <SubSlide />

      {/* Main Content */}
      <section className="bg-white mt-4 container mx-auto">

        {/* Free Shipping Section */}
        <div className="flex items-center justify-center container mx-auto px-4">
          <div className="border-2 w-full p-4 border-[#ff5252] flex flex-col md:flex-row items-center justify-around rounded-lg gap-4">

            <div className="flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />

              <span className="text-[20px] font-semibold">
                Free Shipping
              </span>
            </div>

            <p className="flex items-center">
              Free delivery on first order
            </p>

            <p className="text-3xl font-bold">
              Only $200
            </p>

          </div>
        </div>

        {/* Popular Products */}
        <section className="mt-6 px-4">

          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Heading */}
            <div>
              <h2 className="font-semibold text-[25px]">
                Popular Products
              </h2>

              <p className="text-gray-600">
                Do not miss the current offer
              </p>
            </div>

            {/* Tabs */}
            <Box
              sx={{
                maxWidth: {
                  xs: 320,
                  sm: 480,
                },
                bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="product categories"
              >
                <Tab label="Fashion" />
                <Tab label="Men" />
                <Tab label="Women" />
                <Tab label="Kids" />
                <Tab label="Shoes" />
                <Tab label="Bags" />
                <Tab label="Accessories" />
              </Tabs>
            </Box>

          </div>

          {/* Products */}
          <ProductSlider items={5} />

        </section>

        {/* Promotional Images */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 container mt-4 mx-auto px-4">

          <div>
            <Link to="#">
              <img
                src="/image20.png"
                alt="Fashion Offer"
                className="rounded-xl w-full"
              />
            </Link>
          </div>

          <div>
            <Link to="#">
              <img
                src="/image21.png"
                alt="Men Offer"
                className="rounded-xl w-full"
              />
            </Link>
          </div>

          <div>
            <Link to="#">
              <img
                src="/image22.png"
                alt="Women Offer"
                className="rounded-xl w-full"
              />
            </Link>
          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;
