import React,{useState} from "react";
import CartProvider from "./components/store/CartProvider";
import FrontPage from "./components/FrontPage/FinalPage";
import Cart from "./components/Cart/Cart";
function App() {
  const [CartisShown, setCartShow] = useState(false);

  const cartShowHandler = () => {
    setCartShow(true);
  };

  const cartRemoveHandler = () => {
    setCartShow(false);
  };
    
    
  return (
    <CartProvider>
     <FrontPage cartFunc={cartShowHandler}/>
      {CartisShown && <Cart cartFunc={cartRemoveHandler}/>}
      </CartProvider>
  );
}

export default App;
