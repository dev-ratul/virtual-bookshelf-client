import React from 'react';
import Login from '../Login/Login';
import Slid from './Slid';
import { useLoaderData } from 'react-router';
import PopulerBook from './PopulerBook';
import ReaderStats from './ReaderStats';
import TopReviewer from './TopReviewer';


const Home = () => {
    const populerBook= useLoaderData()
    return (
        <div>
            <Slid></Slid>
            <PopulerBook populerBook={populerBook}></PopulerBook>
            <ReaderStats></ReaderStats>
            <TopReviewer></TopReviewer>
        </div>
    );
};

export default Home;