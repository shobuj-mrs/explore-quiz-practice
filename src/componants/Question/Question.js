import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const Question = ({ ques }) => {
    const { question, options, correctAnswer } = ques;
    const [ans, setAns] = useState([]);
const  [ hidden,  handleToHidden] = useState(true);

    return (
        <div className='border-b-gray-700 lg:text-start lg:mx-60'>
            <div className='flex justify-between'>
                <h1 className='text-3xl w-4/5 py-4 font-semibold text-orange-400'>{question}</h1>
                <button onClick={()=> handleToHidden()}>  <EyeIcon className='w-6'></EyeIcon></button>
            </div>
            <div className='flex flex-col justify-start'>
                {
                    options.map(option => <button onClick={(e) => { setAns(e.target.innerText) }} className="bg-indigo-400 p-4 m-3 " >
                        {option}
                    </button>)
                }

            </div>
            <div>
                <h1 className={`${ hidden ? 'hidden' : 'flex'}`}>
                    Correct Answer : {correctAnswer}
                </h1>
            </div>
        </div>
    );
};

export default Question;