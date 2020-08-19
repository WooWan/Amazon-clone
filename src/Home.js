import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
      <div className="home">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          alt="home-img"
        />
        <div className="home__row">
          <Product
            id="1234"
            title="Chanel"
            price={1234}
            rating={5}
            image="https://img.wizwid.com/PImg/705366/bsc/705366724.jpg"
          />

          <Product
            id="1234"
            title="Hermes"
            price={1234}
            rating={5}
            image="http://image.gsshop.com/image/56/93/56934524_L1.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1234"
            title="Balenciaga"
            price={1234}
            rating={5}
            image="https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2017%2F09%2Fbalenciaga-triple-s-2017-1.jpg?q=75&w=800&cbr=1&fit=max"
          />

          <Product
            id="1234"
            title="Gucci"
            price={1234}
            rating={5}
            image="https://t1.daumcdn.net/cfile/tistory/991F3E465D76B8630A"
          />
          <Product
            id="1234"
            title="Nike"
            price={1234}
            rating={5}
            image="http://img.gqkorea.co.kr/gq/2018/12/style_5c04ebb0667bd.jpg"
          />
        </div>
      </div>
    );
}

export default Home
