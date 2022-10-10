import React from 'react';

const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className=' border rounded-lg bg-slate-800'>
            <img className='p-3' src={logo} alt="" />
            <div className='flex justify-between px-4 my-3'>
                <h1 className='text-2xl text-white font-semibold'>{name}</h1>
                <h4 className='text-xl text-white font-medium'>Q-{total}</h4>
                <button className='btn bg-teal-700	rounded-lg text-white px-4 text-xl font-medium'>Practice</button>
            </div>
        </div>
    );
};

export default Quiz;