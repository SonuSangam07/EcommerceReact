import "./Products.css";

import ProductList from "./productList";

const Products = () => {
    const Products = [

        {
        id:1,
        title: 'DELL',
        
        price: 100,
        
        imgsrc: 'https://www.notebookcheck.net/fileadmin/Notebooks/Lenovo/ThinkPad_L590-20Q70019GE/L590_10.jpg',
        },
        
        {
            id:2,
        title: 'HP',
        
        price: 50,
        
        imgsrc: 'https://i5.walmartimages.com/asr/f76bb330-1c8e-40b7-8611-3cebe19fe32d_1.938f94f07970437792a9a05e9dcb21e2.jpeg',
        
        },
        
        {
            id:3,
        title: 'ASUS',
        
        price: 70,
        
        imgsrc: 'https://th.bing.com/th/id/R.cdbf3ae882171114e305771a1170dfea?rik=dLm535bX68wbYQ&riu=http%3a%2f%2fcdn.mos.cms.futurecdn.net%2fbW8Y5kqAWnKr5ua7mYw3y5-1200-80.jpg&ehk=yvFBbQYKDT1feGwsrPZKWO3NvIHUzWll9cHX7evDJCQ%3d&risl=&pid=ImgRaw&r=0',
        
        },
        
        {
            id:4,
        title: 'MACBOOK',
        
        price: 100,
        
       imgsrc: 'https://alexvking.com/static/2015/IMG_3069.jpg',
        
        }
        
        ];
    const products = Products.map((product) => {
      return <ProductList products={product} />;
    });

  return <div>{products}</div>
};

export default Products;