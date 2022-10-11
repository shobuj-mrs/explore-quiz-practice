import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    // console.log(topics);
    return (
        <div className='w-11/12 bg-gradient-to-br mx-auto '>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4'>
                <img className='rounded-lg w-full my-4' src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <p className='text-xl font-medium bg-slate-700  lg:col-span-2  text-white p-3 my-4 rounded-lg'>Today in this post we will discuss about online quiz competition. You already know that Digital Bangladesh Quiz registration process has started. From here you can register for this quiz competition online. You will also find out how to participate in this competition.We are now going to discuss the upcoming quiz competition. So if you want to participate in any kind of quiz competition on education? However, you can find out about this from here.Many people want to participate in the online quiz competition. But I will say that you are in the right place. Here you can participate in this quiz competition.</p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 '>
                {
                    topics.map(topic => <Topics
                        key={topic.id}
                        topic={topic}
                    ></Topics>)
                }
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 my-6 ' >
                <div className='border p-3 bg-slate-700 rounded-lg'>
                    <h1 className='text-4xl text-orange-500 my-3 font-semibold'>React</h1>
                    <p className='text-white'>The React Online Enforcement Program is designed specifically to complement the global React anti-counterfeiting program. It is a high quality, low cost, adaptable service that can be used separately or combined with other React operational services, to address the rise of online counterfeit purchases, any other online infringements, and detect criminal networks..</p>
                </div>

                <div className='border p-3 bg-slate-700 rounded-lg'>
                    <h1 className='text-4xl  text-orange-500 my-3 font-semibold'>CSS</h1>
                    <p className='text-white'>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
                </div>
                <div className='border p-3 bg-slate-700 rounded-lg'>
                    <h1 className='text-4xl  text-orange-500 my-3 font-semibold'>JavaScript</h1>
                    <p className='text-white'>JavaScript frameworks are an essential part of modern front-end web development, providing developers with proven tools for building scalable, interactive web applications. This module gives you some fundamental background knowledge about how client-side frameworks work and how they fit into your toolset, before moving on to a series of tutorials covering some of today's most popular ones.</p>
                </div>
                <div className='border p-3 bg-slate-700 rounded-lg'>
                    <h1 className='text-4xl  text-orange-500 my-3 font-semibold'>Git</h1>
                    <p className='text-white'>Git is free and open source software for distributed version control: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;