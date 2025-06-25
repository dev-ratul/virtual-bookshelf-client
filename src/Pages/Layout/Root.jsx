import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Shared/Navber';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <div className='max-w-[90vw] m-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;