import React from 'react';

import { Navbar } from '../layout/Navbar';
import { Carousel } from './Carousel';
import { Comments } from './Comments';
import { Footer } from './Footer';
import { Services } from './Services';
import { Subscription } from './Subscription';


export const HomeScreen = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <Services />
        <Comments />
        <Subscription />
        <Footer />
    </div>
  )
}
