import React from "react";

import FrontPage from "./components/FrontPage/FinalPage";

function App() {
  const Products = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imgsrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imgsrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imgsrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
   imgsrc: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    
  return (
    <div>
      <FrontPage products={Products}/>
    </div>
  );
}

export default App;
