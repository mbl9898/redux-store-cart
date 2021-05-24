import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://react-http-15a8a-default-rtdb.firebaseio.com/cart.json"
      );

      if (!res.ok) {
        throw new Error("Could Not Fetch Cart Data");
      }
      const data = await res.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          ...cartData,
          cartItems: cartData.cartItems || []
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failed!...",
          message: "Fetching cart data failed..."
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data..."
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-15a8a-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart)
        }
      );
      if (!res.ok) {
        throw new Error("sending data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!...",
          message: "Sent cart data Successfully..."
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failed!...",
          message: "Sending cart data failed..."
        })
      );
    }
  };
};
