import React from 'react';
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className='bg-slate-300 p-3 md:px-20'>
        <Link to='/' className='flex'>
            <img src='https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png' alt='logo oompa loompas' className='h-5 mr-5'/>
            <p className='font-bold'>Oompa Loompa's Crew</p>
        </Link>
        
    </div>
  );
};
