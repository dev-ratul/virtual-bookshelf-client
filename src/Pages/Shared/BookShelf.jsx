import React from 'react';
import { useLoaderData } from 'react-router';
import SingleBook from './SingleBook';

const BookShelf = () => {
    const data= useLoaderData()
    console.log(data)
    return (
        <div className='grid grid-cols-4 gap-10 py-10'>
            {
                data.map(singleBook => <SingleBook singleBook={singleBook} key={singleBook._id}></SingleBook>)
            }
        </div>
    );
};

export default BookShelf;