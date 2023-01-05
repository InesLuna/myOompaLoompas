import React from 'react';
import { NavBar } from '../components/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { oompasIdsAdd, oompasDetailsAdd } from '../reducer/oompasDetailsListSlice';
import { getOompasDetails } from '../bff/getOompasDetails';
import { useState, useEffect } from 'react';

export const DetailView = () => {

    const dispatch = useDispatch();
    const actualOompasId = useSelector((state) => state.oompasDetailsList.actualId);
    const oompasIdsList = useSelector((state) => state.oompasDetailsList.oompasIds);
    const oompasDetailsList = useSelector((state) => state.oompasDetailsList.oompasDetailsList);
    const [ oompasInfo, setOompasInfo ] = useState(null);

    const dataDetailsOompa = async (num) => {
        const data = await getOompasDetails(num);
        if(data && !oompasIdsList.find((o)=> o.id === num)) {
            const aux = {num:`${num}`, info:{...data}};
            dispatch(oompasDetailsAdd(aux));
            dispatch(oompasIdsAdd(actualOompasId));
        }
    };

    useEffect(()=>{
        dataDetailsOompa(actualOompasId);  
    }, [actualOompasId]);

    useEffect(()=>{
        if(oompasDetailsList.length > 0) {
            const aux = oompasDetailsList.filter((o) => o.num === `${actualOompasId}`);
            setOompasInfo(aux[0].info);
            console.log(aux);
        } 
    }, [oompasDetailsList]);

    return (
        <div className=''>
            <NavBar />
            {
                oompasInfo ? (
                    <div className='px-20 flex pt-20'>
                        <img src={oompasInfo.image} alt={oompasInfo.first_name} className='pr-10 flex-wrap md:flex-nowrap'/>
                        <div>
                            <p className='pt-6 text-lg font-bold'>{oompasInfo.first_name}{' '}{oompasInfo.last_name} </p>
                            <p className='text-slate-500 ' >{oompasInfo.gender === 'F' ? 'Woman' : 'Man'}</p>
                            <p className='text-slate-500 italic'>{oompasInfo.profession}</p>
                            <p className='pt-10'>{oompasInfo.description}</p>
                        </div>  
                    </div>
                ) : (
                    <p>loading</p>
                )
            }
        </div>
    )
}
