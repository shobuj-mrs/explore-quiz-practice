import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    // console.log(topics);
    return (
        <div className='w-11/12 bg-gradient-to-br mx-auto'>
            <h1 className='text-4xl text-orange-500 my-3 font-semibold'>React</h1>
            <p>The React Online Enforcement Program is designed specifically to complement the global React anti-counterfeiting program. It is a high quality, low cost, adaptable service that can be used separately or combined with other React operational services, to address the rise of online counterfeit purchases, any other online infringements, and detect criminal networks..</p>

            <h1 className='text-4xl text-orange-500 my-3 font-semibold'>CSS</h1>
            <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6 '>
                {
                    topics.map(topic => <Topics
                        key={topic.id}
                        topic={topic}
                    ></Topics>)
                }
            </div>
        </div>
    );
};

export default Home;