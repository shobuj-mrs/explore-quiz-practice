import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statics = () => {
    const topicsData = useLoaderData();
    const { data } = topicsData;
    console.log(data);
    return (

        <div className='mt-24 w-[300px] text-green-700 pb-72 '>
            <h2 className='text-xl text-center my-6 '>BarChart of the quiz data</h2>
            <BarChart width={400} height={300} data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar type="monotone" dataKey="total" stroke="#8884d8" />
            </BarChart>

            <h1 className='text-xl font-semibold'>Number of Quizes rechart</h1>

        </div>

    );
};

export default Statics;