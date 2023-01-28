import "./Products.css";

import ProductList from "./productList";

const Products = () => {
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
        
        ];
    const products = Products.map((product) => {
      return <ProductList products={product} />;
    });

  return <div>{products}</div>
};

export default Products;