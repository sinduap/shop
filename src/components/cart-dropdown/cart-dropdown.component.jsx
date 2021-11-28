import React from "react";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <Button className="button">GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default CartDropdown;