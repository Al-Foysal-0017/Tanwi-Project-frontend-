import React from "react";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Doctor from "./Doctor/Doctor";
import Feature from "./Feature/Feature";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Feature></Feature>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Doctor></Doctor>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
