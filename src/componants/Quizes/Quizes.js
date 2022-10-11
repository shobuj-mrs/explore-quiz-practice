import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const quizesData = useLoaderData();
    const {name, questions, id} = quizesData.data;
    
    
    return (
        <div className='text-centr '>
            <h1 className=' text-4xl font-semibold py-10'>Quiz Type : {name}</h1>
            {
                
            }
        </div>
    );
};

export default Quizes;