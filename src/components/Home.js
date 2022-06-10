import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Brands from './Brands';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Testimonials from './Testimonials';
import BackTopBtn from './BackTopBtn';
import Blogs from './Blogs';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Brands /> */}
      <About />
      <Skills />
      <Portfolio />
      <Blogs></Blogs>
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default Home;