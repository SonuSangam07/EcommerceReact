import { useParams } from "react-router-dom";

import { Fragment, useState } from "react";

import "./ProductDetail.css";

const ProductDetail = () => {
  const params = useParams();
  const id = params.productId;

  const detailarray = [
    [
      "https://th.bing.com/th/id/OIP.hM49oZ-nPBopjiu_A6HLhAHaFE?pid=ImgDet&rs=1",
      "https://www.buyvia.com/i/2018/11/evoo-11-6-ultra-thin-windows-10s-laptop-sale-71872.jpeg",
      "https://cdn-reichelt.de/bilder/web/xxl_ws/E910/HP_250_G7_SI_01.png",
      "https://i5.walmartimages.com/asr/53080ace-cada-4c28-8cb1-a0372569f6f2_2.421a28bfea286f52a6ec3f5a26e7f1df.jpeg",
    ],
    [
      "https://i5.walmartimages.com/asr/f76bb330-1c8e-40b7-8611-3cebe19fe32d_1.938f94f07970437792a9a05e9dcb21e2.jpeg",
      "https://i5.walmartimages.com/asr/0f9c5a43-21e2-4859-a065-aa723a7fa617_1.6695fc7cfb43cf7e3fba42d38ca0d58f.jpeg",
      "https://i5.walmartimages.com/asr/33bdc328-d4b4-4b6c-b827-56b4b3b802b8_1.0776471592cfc3060a6a58e03121cdcf.jpeg",
      "https://i5.walmartimages.com/asr/e3989326-7d04-4ac6-a799-150c67e3e163.80d64f0727855a74a82e6313b2a3a13d.jpeg",
    ],
    [
      "https://i5.walmartimages.com/asr/b404bdbc-eac4-48dd-a90d-cf3abc0c6f6e_1.9bb37c2246b4df29a1cd445ffbee655b.jpeg",
      "https://i5.walmartimages.com/asr/014461ec-bc55-447e-afd9-661b95ffb01d_2.18a8f296e2234495b51d502660a3f176.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
      "https://th.bing.com/th/id/R.c87dfa45e282fe89bcf09bf09981f021?rik=g820n18c78RQYw&riu=http%3a%2f%2fs3.amazonaws.com%2fdigitaltrends-uploads-prod%2f2017%2f08%2fAsus-VivoBook-W202-header.jpg&ehk=HmbSt7dxSFgzBOTUyUl%2f9FmBU5S7HoGYpPHN3kQWQN8%3d&risl=&pid=ImgRaw&r=0",
      "https://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/lEgAAOSwkW5dmzhS/$_86.JPG",
    ],
    [
      "https://www.onmsft.com/wp-content/uploads/2020/02/macbook-windows-10.jpg",
      "https://alexvking.com/static/2015/IMG_3074.jpg",
      "https://th.bing.com/th/id/OIP.zivMsMUVUWmZChcaVlmUlgAAAA?pid=ImgDet&rs=1",
      "https://alexvking.com/static/2015/IMG_3069.jpg",
    ],
  ];

  const reviewArray = [
    " This is an awesome laptop.",
    "It's review is superb",
    "Performance is at peak",
  ];

  const nameArray = [
    "Dell",
    "HP",
    "ASUS",
    "Macbook",
  ];


  const dynamicArray = detailarray.filter((array) => {
    return array;
  });
  const finalpics = dynamicArray[id - 1].map((image) => {
    return <img src={image} alt="A Bike" className="pics" />;
  });

  const [largeimage, setLarge] = useState(finalpics[0].props.src);
  const enlargedImage = (event) => {
    setLarge(event.target.src);
  };

  const reviews = reviewArray.map((review) => {
    return (
      <ul>
        <li>{review}</li>
      </ul>
    );
  });

  return (
    <Fragment>
      <div className="maindiv">
        <div className="detail-images" onClick={enlargedImage}>
          {finalpics}
        </div>
        <div className="enlarged">
          <h1 className="heading">{nameArray[id-1]}</h1>
          <img src={largeimage} alt="A Bike" className="enlarged-image" />
        </div>
      </div>
      <div className="reviews">{reviews}</div>
    </Fragment>
  );
};

export default ProductDetail;