import React from "react";

import StripeCheckout from "react-stripe-checkout";
import Button from "../button/button.component";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I8LpfJAElSxvrQ8El2Yj7KqQHpi3epkbZA2q1Xy02Z7Jk4QIsiKYvvYqok0wNjyTrYzq55xHL8a31Sw3SAJDE8000cofmUeUL";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <Button>Pay Now</Button>
    </StripeCheckout>
  );
}

export default StripeCheckoutButton;
