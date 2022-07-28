import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <ul>
          {/* יצירה של כפתור ניווט */}
        <li>  <Link  to="/about"> About </Link></li>
        <li>  <Link to="/products"> Products </Link> </li>
        <li>  <Link to="/cart"> Cart </Link></li>
      </ul>
    </nav>
  );
};
