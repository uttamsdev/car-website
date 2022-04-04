import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css'
const Header = () => {
  return (
    <nav>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/reviews">Reviews</CustomLink>
      <CustomLink to="/dashboard">Dashboard</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </nav>
  );
};
export default Header;
