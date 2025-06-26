import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Shared/Navber';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <div >
            <Navber></Navber>
            <div className='max-w-[90vw] m-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;