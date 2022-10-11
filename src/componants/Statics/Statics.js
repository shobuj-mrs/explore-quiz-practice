import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statics = () => {
    const topicsData = useLoaderData();
    const { data } = topicsData;
    console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
            <div className='mt-24 w-1/2 text-green-700 pb-72 '>
                <h2 className='text-xl text-center my-6 '>BarChart of the quiz data</h2>
                <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar type="monotone" dataKey="total" stroke="#8884d8" />
                </BarChart>

                <h1 className='text-xl font-semibold'>Number of Quizes rechart</h1>

            </div>
            <div className='mt-14 w-1/2 text-green-700 pb-60'>
                <h2 className='text-xl text-center my-6 '>PieChar  of the quiz data</h2>
                <PieChart width={400} height={400} data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }} >
                    <Pie
                        dataKey="total"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                    <Pie dataKey="total" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                </PieChart>

                <h1 className='text-xl font-semibold'>Number of Quizes rechart</h1>

            </div>
        </div>
    );
};

export default Statics;