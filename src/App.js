import React, { useState } from "react";
import CartProvider from "./components/store/CartProvider";
import FrontPage from "./components/FrontPage/FinalPage";
import Cart from "./components/Cart/Cart";

import Header from "./components/FrontPage/header";
import ContactUs from "../src/components/pages/ContactUs";
import Footer from "./components/FrontPage/footer";
import ProductDetail from "../src/components/pages/ProductDetail";
import About from "./components/pages/About";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../src/components/pages/login";

import AuthContext from "./components/store/AuthContext";
import { useContext } from "react";
import Home from "./components/pages/Home"
function App() {
  const Authctx = useContext(AuthContext)

  const isLoggedIn = Authctx.isLoggedIn
  const [CartisShown, setCartShow] = useState(false);

  const cartShowHandler = () => {
    setCartShow(true);
  };

  const cartRemoveHandler = () => {
    setCartShow(false);
  };
  const contactedUserDetails = (userdata) => {
    console.log(userdata)
  }
    
  return (
    <CartProvider>
         <Header cartFunc={cartShowHandler} />
         <Switch>
      {isLoggedIn && <Route path="/products" exact>
        <FrontPage />
      </Route>}
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/contact'>
        <ContactUs contactDetails={contactedUserDetails}/>
      </Route>
      <Route path="/products/:productId">
        <ProductDetail />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path='*'><Redirect to='/login'/></Route>
      </Switch>
    {CartisShown && <Cart cartFunc={cartRemoveHandler} />}
      <Footer />
      </CartProvider>
  );
}

export default App;
