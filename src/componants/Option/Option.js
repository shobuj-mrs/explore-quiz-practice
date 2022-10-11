import React, { useState } from 'react';

const Option = ({ option, correctAnswer }) => {
    const [ans, setAns] = useState();

    const correctAns = () => {
        alert('Awesome');
    }
    const wrongAns = () => {
        alert('Try Again');
    }
    return (
        <div className='w-full grid grid-cols-1 gap-4 '>
            <button onClick={(e) => { (e.target.innerText === correctAnswer) ? correctAns() : wrongAns() }} className="bg-slate-700 text-xl text-white rounded-lg border-gray-800 p-4 m-2 " >
                {option}
            </button>
        </div>
    );
};

export default Option;