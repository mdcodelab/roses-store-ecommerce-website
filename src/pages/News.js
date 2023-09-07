import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from "styled-components";
import "aos/dist/aos.css";
import AOS from "aos";

function News() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);


  return (
    <Wrapper>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Div className="news__content">
        <h2>Elegance of Rose Arrangements</h2>
        <div className="first container">
          <p data-aos="fade-left">
            Roses, often hailed as the 'Queens of the Garden', have captivated
            the human imagination for centuries. Their profound beauty and
            fragrance make them the centerpiece of any floral arrangement. But
            it isn't just their visual appeal that captures our hearts; the
            symbolism of roses, ranging from love and passion to new beginnings
            and remembrance, speaks to us on a profound emotional level.
          </p>
          <div data-aos="fade-right">
            <img src="/images/news/1.jpg"></img>
          </div>
        </div>

        <div className="second container">
          <div data-aos="fade-right">
            <img src="/images/news/2.jpg"></img>
          </div>
          <p data-aos="fade-left">
            The art of arranging roses in bouquets and decorations has evolved
            significantly over time. From single-color bunches to intricate
            patterns blending various rose hues, the designs now are as
            limitless as the imagination of the florist. Contemporary
            arrangements often incorporate other elements, like complementary
            flowers, herbs, and even fruits, to enhance the beauty of the
            bouquet and add depth to the arrangement.
          </p>
        </div>

        <div className="third container">
          <p data-aos="fade-left">
            For romantic occasions, red roses remain the top choice, symbolizing
            deep love and affection. White roses, representing purity and
            innocence, are a favorite for weddings. Yellow roses, signifying
            friendship and joy, brighten up rooms and spirits alike.
          </p>
          <div data-aos="fade-right">
            <img src="/images/news/3.jpg"></img>
          </div>
        </div>

        <div className="forth container">
          <div data-aos="fade-right">
            <img src="/images/news/4.jpg"></img>
          </div>
          <p data-aos="fade-left">
            Rose arrangements aren't just about aesthetics. They're a blend of
            art, emotion, and nature's beauty. Whether given as a gift or used
            to adorn one's living space, they remain a timeless testament to the
            enduring allure of nature's most iconic flower.
          </p>
        </div>
      </Div>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
width: 100%;
height: 100%;
`;

const Div = styled.div`
height: 100%;
border-top: 2px solid var(--heading-color);
padding: 2rem;

h2 {
  margin: 2rem 0;
  padding-bottom: 1.5rem;
  color: var(--heading-color);
  letter-spacing: 0.15rem;
}

div.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

div.container p {
  flex: 1;
  font-size: 2rem;
  text-align: justify;
  line-height: 3.5rem;
  padding: 3rem;
  color: #555;
}

div.container div {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadowSmall);
  border-radius: 2rem;
}

div.container div img {
  object-fit: cover;
  width: 45rem;
  height: 40rem;
  display: block;
  border-radius: 2rem;
}

@media only screen and (max-width: 842px) {
div.container {
  flex-direction: column;
}

div.container p {
  font-size: 1.8rem;
}

div.container div img {
  margin-bottom: 1.5rem;
}

div.third p {
padding-top: 0;
}
}

`;


export default News;
