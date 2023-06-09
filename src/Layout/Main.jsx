import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Sheard/NavBar';
import Footer from '../Sheard/Footer';


const Main = () => {
    return (
        <div className='lg:mx-12'>
          <NavBar></NavBar>
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;