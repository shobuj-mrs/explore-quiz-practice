import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer }) => {

    const correctAns = () => {
        toast.success('Correct Answer !');
    }
    const wrongAns = () => {
        toast.warning('Wrong Answer!');
    }
    return (
        <div className='w-full grid grid-cols-1 gap-4 '>
            <button onClick={(e) => { (e.target.innerText === correctAnswer) ? correctAns() : wrongAns() }} className="bg-slate-700 text-xl text-white rounded-lg border-gray-800 p-4 m-2 hover:bg-teal-600 " >{option}</button>

        </div>
    );
};

export default Option;