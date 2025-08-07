import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import Books from './Books';

const MyBook = () => {
  const [myBooks, setMyBooks] = useState([]);
const { user } = useContext(AuthContext);
console.log(user.email)

useEffect(() => {
  if (user?.email) {
    fetch(`https://virtual-bookshelf-server-three.vercel.app/getuserbook?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log("Filtered Books:", data);
        setMyBooks(data);
      });
  }
}, [user]);


  return (
   <div className='h-screen'>
        {
            myBooks.map(Book=> <Books Book={Book} key={Book._id}></Books>)
        }
   </div> 
  )
};


export default MyBook;