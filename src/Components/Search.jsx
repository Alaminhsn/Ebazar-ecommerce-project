import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { IoCartOutline } from "react-icons/io5";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IoMenu,IoClose} from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";

const maxVisibleNotifications = 1;
const unreadNotificationsCount = 100;

function getUnreadNotificationsLabel(count = 0) {
  if (count === 0) {
    return "show no unread notifications";
  }

  if (count > maxVisibleNotifications) {
    return `show more than ${maxVisibleNotifications} unread notifications`;
  }

  return `show ${count} unread notification${count === 1 ? "" : "s"}`;
}

const Search = () => {
  const label = getUnreadNotificationsLabel(unreadNotificationsCount);
   const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="text-black">
      <List>
          <div  className="flex justify-between m-4 ">
          <h2 className="font-semibold">Catagory</h2>
          <button className="overflow-hidden text-black !important">
         <IoClose className="text-xl pointe" onClick={toggleDrawer(false)} /></button>
        </div>
            

        {['Shirt', 'T-shirt', 'Shoes', 'Beauty Product'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
               
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
    <div className="flex items-center justify-around gap-4 bg-white h-12 px-4 mt-1">
      <div className="flex items-center gap-2 text-black ">
       
        <Button onClick={toggleDrawer(true)} sx={{color:"black"}} className="catagoryTxt"> <IoMenu className="text-xl" />C<span className="lowercase ">atagory</span></Button>
      <Drawer open={open} >
        {DrawerList}
      </Drawer>
      </div>
      <div>
         {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 bg-gray-100 rounded px-3 py-2 w-96 focus:outline-none"
      />
      </div>
      <div className="flex items-center gap-2 bg-white px-4  rounded">
         {/* Notification Icon */}
      <h2 onClick={()=>Navigate("/addcart")} className="cursor-pointer active:bg-gray-300 p-2 rounded">Add to Cart</h2>
      <IconButton aria-label={label}>
        <Badge
          badgeContent={unreadNotificationsCount}
          color="secondary"
          max={maxVisibleNotifications}
        >
         <IoCartOutline />
        </Badge>
        
      </IconButton>
      </div>
    </div>
    </>
  );
};

export default Search;