import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { oompasSetActualId } from '../reducer/oompasDetailsListSlice';

export const OompaGeneralCard = (props) => {
    const { oompaInfo } = props;
    const dispatch = useDispatch();
    
    
    const handleClick = () => {
        dispatch(oompasSetActualId(oompaInfo.id));
    }

    return (
        <Link to={`detail/${oompaInfo.id}`} className='md:w-1/3 p-6 cursor-pointer' onClick={()=>handleClick()} >
            <img src={oompaInfo.image} alt='oompas-portrait' />
            <p className='pt-6 text-lg font-bold'>{oompaInfo.first_name}{' '}{oompaInfo.last_name} </p>
            <p className='text-slate-500 ' >{oompaInfo.gender === 'F' ? 'Woman' : 'Man'}</p>
            <p className='text-slate-500 italic'>{oompaInfo.profession}</p>
        </Link>
    )
}
