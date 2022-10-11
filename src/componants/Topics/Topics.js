import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className=' border rounded-lg bg-slate-800'>
            <img className='p-3' src={logo} alt="" />
            <div className='flex justify-between px-4 my-3'>
                <h1 className='text-2xl text-white font-semibold'>{name}</h1>
                <h4 className='text-xl text-white font-medium'>Q- {total}</h4>
                <Link to={`/quizes/${id}`}><button className='btn bg-teal-600	rounded-lg text-white px-4 text-xl font-medium hover:bg-teal-800'>Practice </button></Link>
            </div>
        </div>
    );
};

export default Topics;