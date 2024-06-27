import React from 'react'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <Banner />
      <Main />
      <Footer />
    </div>
  )
}
