import React from 'react';
import Login from '../Login/Login';
import Slid from './Slid';
import { useLoaderData } from 'react-router';
import PopulerBook from './PopulerBook';


const Home = () => {
    const populerBook= useLoaderData()
    return (
        <div>
            <Slid></Slid>
            <PopulerBook populerBook={populerBook}></PopulerBook>
        </div>
    );
};

export default Home;