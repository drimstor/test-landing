import styles from "./styles/page.module.scss";
import Header from "./components/Header/Header";
import Title from "./components/MainPage/Title/Title";
import SubTitle from "./components/MainPage/SubTitle/SubTitle";
import ChooseUs from "./components/MainPage/ChooseUs/ChooseUs";
import IndividualDesing from "./components/MainPage/IndividualDesing/IndividualDesing";
import Constructor from "./components/MainPage/Constructor/Constructor";
import Reviews from "./components/MainPage/Reviews/Reviews";
import WhatIs from "./components/MainPage/WhatIs/WhatIs";
import ContactUs from "./components/MainPage/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Title />
      <SubTitle />
      <ChooseUs />
      <IndividualDesing />
      <Constructor />
      <Reviews />
      <WhatIs />
      <ContactUs />
      <Footer />
    </div>
  );
}
