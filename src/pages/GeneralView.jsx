import React from 'react';
import { useState, useEffect } from 'react';
import { OompaGeneralCard } from '../components/OompaGeneralCard';
import { SearchInput } from '../components/SearchInput';
import { NavBar } from '../components/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../reducer/counterSlice';
import { oompasAdd } from '../reducer/oompasSlice';
import { getOompas } from '../bff/getOompas';
import { GoTopButton } from '../components/GoTopButton';


export const GeneralView = (props) => {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const oompasList = useSelector((state) => state.oompasList.value);
    const [ oompasListFiltered, setOompasListFiltered ] = useState([]);
    const [ inputValue, setInputValue ] = useState('');
    const [ showButton, setShowButton ] = useState('hidden');

    const dataOompas = async (num) => {
       await getOompas(num).then((data) => {
            dispatch(oompasAdd([...data.results]));
       });
    };

    useEffect(()=> {
        dataOompas(count);
    }, [count]);

    const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        
        if (scrollTop + clientHeight >= scrollHeight) {
            dispatch(increment(count));
        }

        if (scrollTop > 1000) {
            setShowButton('block');
        } else {
            setShowButton('hidden');
        }
    };
        
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    useEffect(()=> {
        setOompasListFiltered(filterList(inputValue));
    }, [oompasList, inputValue]);

    const filterList = (text) => {
        let l = oompasList;
        if (text !== '') {
            l = oompasList.filter((o) => {
                return o.first_name.includes(text) || o.last_name.includes(text) || o.profession.includes(text);
            });
        }
        return l;
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    useEffect(()=>{
        console.log(oompasListFiltered);
    },[oompasListFiltered]);
  

    return (
        <div>
            <NavBar />
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
            <GoTopButton showButton={showButton}/>
        </div>
    );
};
