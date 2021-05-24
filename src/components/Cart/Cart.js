import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(({ id, title, quantity, totalPrice, price }, index) => (
          <CartItem
            key={index}
            item={{
              id,
              title,
              quantity,
              price: +price,
              total: +totalPrice
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
