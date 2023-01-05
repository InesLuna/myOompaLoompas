import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { OompaGeneralCard } from '../components/OompaGeneralCard';
import { SearchInput } from '../components/SearchInput';


export const GeneralView = (props) => {

    const oompasList = useSelector((state) => state.oompasList.value);
    const [ oompasListFiltered, setOompasListFiltered ] = useState([]);

    useEffect(()=> {
        console.log(oompasList)
        setOompasListFiltered(oompasList);
    }, [oompasList]);

    const handleChange = (e) => {
        console.log(e.target.value)
    }
  

    return (
        <div className='md:mx-11'>
            <SearchInput handleChange={handleChange} />
            <h1 className='text-5xl text-center mt-20'>Find your Oompa Loompa</h1>
            <h3 className='text-4xl text-center text-slate-500 mb-20 mt-3'>There are more than 100k</h3>
            {
                oompasListFiltered.length > 0 ? (
                    <div className='flex flex-wrap p-3'>
                        {
                            oompasListFiltered.map((o, i) => {
                                return(
                                    <OompaGeneralCard oompaInfo={o} key={`${o.id}-${i}`} />
                                )
                            })
                        }
                    </div>
                ) : (
                    <p>loading...</p>
                )
            }
        </div>
    );
};
