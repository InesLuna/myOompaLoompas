
import { GeneralView } from './pages/GeneralView';
import { NavBar } from './components/NavBar';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './reducer/counterSlice';
import { oompasAdd } from './reducer/oompasSlice';
import { getOompas } from './bff/getOompas';
import { useState, useEffect } from 'react';

const App = () => {

    const dispatch = useDispatch();
    const oompasList = useSelector((state) => state.oompasList.value);
    const count = useSelector((state) => state.counter.value);

    const dataOompas = async (num) => {
        const data = await getOompas(num);
        if(data) {
            const aux = [...oompasList,...data.results];
            dispatch(oompasAdd(aux));
        }
    };

    useEffect(()=> {
        dataOompas(count);
    }, []);

    return (
        <div>
            <NavBar />
            <GeneralView />
        </div>
    );
}

export default App;
