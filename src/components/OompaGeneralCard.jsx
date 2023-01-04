import React from 'react';

export const OompaGeneralCard = (props) => {
    const { oompaInfo } = props;
    return (
        <div className=''>
            <img url={oompaInfo.image} alt='oompas-portrait' />
            <p>{oompaInfo.first_name}{' '}{oompaInfo.last_name} </p>
            <p>{oompaInfo.gender === 'F' ? 'Woman' : 'Man'}</p>
            <p>{oompaInfo.profession}</p>
        </div>
    )
}
