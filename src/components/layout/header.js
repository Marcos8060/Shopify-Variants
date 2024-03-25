import { Container } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const CustomizedHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <section className="sticky top-0 flex items-center bg-primary shadow-xl h-[10vh] z-40">
        <Container maxWidth="xl">
          <section className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white text-sm">Marcos</span>
              <BsChevronDown
                onClick={handleClick}
                className="text-white cursor-pointer"
              />
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </section>
        </Container>
      </section>
    </>
  );
};

export default CustomizedHeader;
