import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const ProductItem = () => {
  return (
    <div className="product-item bg-white shadow-lg rounded-lg">
      <div className="fashion "> 
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/c/4/p/xl-shcl-clyver-original-imahzzcymzh5gnhz.jpeg?q=70" />
      </div>
      <di className="flex flex-col items-start ml-2">
        <h1>METRONAUT</h1>
        <p>Mens reqular fit</p>
        <p>Price 900TK</p>
        <Box sx={{ '& > legend': { mt: 2 } }}>
     
      <Rating
        name="simple-uncontrolled"
        onChange={(event, newValue) => {
          console.log(newValue);
        }}
        defaultValue={4}
      />
    </Box>

      </di>
    </div>
  )
}

export default ProductItem
