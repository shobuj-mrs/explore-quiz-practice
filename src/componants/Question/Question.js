import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Option from '../Option/Option';

const Question = ({ ques, id }) => {
    const { question, options, correctAnswer } = ques;
    const [hidden, handleToHidden] = useState(true);

    return (
        <div className='border-b-gray-700 lg:text-start lg:mx-60 rounded-lg shadow-2xl p-6 my-4	'>
            <div className='flex justify-between'>
                <h1 className='text-3xl w-4/5 py-4 font-semibold'>{question}</h1>
                <button onClick={() => handleToHidden()}>  <EyeIcon className='w-6'></EyeIcon></button>
            </div>
            <div className='flex flex-col justify-start w-full'>
                {
                    options.map(option => <Option
                        key={id}
                        option={option}
                        correctAnswer={correctAnswer}
                    >
                    </Option>)
                }

            </div>
            <div>
                <h1 className={`${hidden ? 'hidden' : 'flex'}`}>
                    Correct Answer : {correctAnswer}
                </h1>
            </div>
        </div>
    );
};

export default Question;