import Slide from '../Components/Slide';
import Search from '../Components/Search';
import SubSlide from '../Components/SubSlide';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductSlider from '../Components/ProductSlider';
import Footer from '../Components/Footer';

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-yellow-100">
      <Search />
      <Slide />
      <SubSlide />
      <section className='bg-white  mt-4 container m-auto'>
        
        <div className='flex items-center justify-center container m-auto '>
          <div className="border-2 w-full p-4 border-[#ff5252] flex items-center justify-around rounded-lg">
            <div className=' col1 flex items-center justify-between gap-4'>
              <LiaShippingFastSolid className='text-[50px]' />
              <span className='text-[20px] font-[600]' >Free Shipping</span>
            </div>
            <div className='col2 '></div>
            <p className='items-center flex '>Free delivery on first Order</p>
            <p className='text-3xl font-bold'>Only $200</p>
          </div>
          
        </div>
        <section className='mt-6 '>
          <div className="container m-auto flex  items-center">
            <div>
              <h2 className='font-semibold text-[25px]'>Popular Products</h2>
              <p>Do not miss the current offer</p>
            </div>
            <div>
             <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Fashion" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
    
            </div>
          </div>
<ProductSlider items={5} />

        </section>

        <div className='flex items-center justify-center gap-5 container mt-4 m-auto'>
          <div>
            <Link href="#"><img src='image20.png' className='rounded-xl'/></Link>
            
          </div>
          <div><Link href="#"><img src='image21.png' className='rounded-xl'/></Link></div>
          <div><Link href="#"><img src='image22.png' className='rounded-xl'/></Link></div>
        </div>
        <div className='mt-2'>
          
        </div>
      </section>     
    </div>
  )
}

export default Home
