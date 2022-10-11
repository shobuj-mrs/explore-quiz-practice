import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';


const Quizes = () => {
    const quizesData = useLoaderData();
    const { name, questions, id } = quizesData.data;
    // console.log(questions);


    return (
        <div className='text-center '>
            <h1 className=' text-4xl font-semibold py-10'>Quiz Type : {name}</h1>
            {
                questions.map(ques => <Question
                    key={id}
                    ques={ques}
                ></Question>)
            }
        </div>
    );
};

export default Quizes;