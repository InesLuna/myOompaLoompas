import React from 'react';

export const OompaGeneralCard = (props) => {
    const { oompaInfo } = props;
    return (
        <div className='md:w-1/3 p-6'>
            <img src={oompaInfo.image} alt='oompas-portrait' />
            <p className='pt-6 text-lg font-bold'>{oompaInfo.first_name}{' '}{oompaInfo.last_name} </p>
            <p className='text-slate-500 ' >{oompaInfo.gender === 'F' ? 'Woman' : 'Man'}</p>
            <p className='text-slate-500 italic'>{oompaInfo.profession}</p>
        </div>
    )
}
