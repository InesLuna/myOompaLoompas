import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../reducer/counterSlice';
import { getOompas } from '../bff/getOompas';
import { useState, useEffect } from 'react';
import { OompaGeneralCard } from '../components/OompaGeneralCard';
import { SearchInput } from '../components/SearchInput';


export const GeneralView = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    const [ oompasList, setOompasList ] = useState([]);

    const dataOompas = async (num) => {
        const data = await getOompas(num);
        if(data) {
            const aux = [...oompasList, ...data.results]
            setOompasList(aux);
        }
    };

    useEffect(()=> {
        dataOompas(count);
    }, []);
    useEffect(()=> {
        console.log(oompasList, 'wthf')
    }, [oompasList]);

    return (
        <div className='md:mx-11'>
            <SearchInput/>
            <h1 className='text-5xl text-center mt-20'>Find your Oompa Loompa</h1>
            <h3 className='text-4xl text-center text-slate-500 mb-20 mt-3'>There are more than 100k</h3>
            {
                oompasList.length > 0 ? (
                    <div className='flex flex-wrap p-3'>
                        {
                            oompasList.map((o, i) => {
                                return(
                                    <OompaGeneralCard oompaInfo={o} key={o.id} />
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
