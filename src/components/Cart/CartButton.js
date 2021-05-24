import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const qty = useSelector((state) => state.cart.totalQuantity);
  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(uiActions.toggleCart());
      }}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{qty}</span>
    </button>
  );
};

export default CartButton;
