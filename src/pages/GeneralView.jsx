import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { increment } from '../reducer/counterSlice';
import { getOompas } from '../bff/getOompas';
import { useState, useEffect } from 'react';
import { OompaGeneralCard } from '../components/OompaGeneralCard';

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
    <div>
        <h1>Find your Oompa Loompa</h1>
        <h3>There are more than 100k</h3>
        {
            oompasList.length > 0 ? (
                <>
                    {
                        oompasList.map((o, i) => {
                            return(
                                <OompaGeneralCard oompaInfo={o} key={o.id} />
                            )
                        })
                    }
                </>
            ) : (
                <p>loading...</p>
            )
        }
    </div>
  );
};
