import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-slate-300 py-6'>
            <div>
                <h1 className='text-4xl font-semibold text-center my-4 text-indigo-400'> What is the purpose of React Router?</h1>
                <p className='text-2xl w-11/12 mx-auto text-gray-600 mb-10'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                    Using React Router: To use React Router, let us first create few components in the react application. In your project directory, create a folder named component inside the src folder and now add 3 files named home.js, about.js and contact.js to the component folder.</p>
            </div>
            <div>
                <h1 className='text-4xl font-semibold text-center my-4 text-indigo-400'>How does Context API works?</h1>
                <p className='text-2xl w-11/12 mx-auto text-gray-600 mb-10'>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.It might feel redundant to pass down the user and avatarSize props through many levels if in the end only the Avatar component really needs it. It's also annoying that whenever the Avatar component needs more props from the top, you have to add them at all the intermediate levels too.</p>
            </div>

            <div>
                <h1 className='text-4xl font-semibold text-center my-4 text-indigo-400'>What is the useRef hook in reactjs?</h1>
                <p className='text-2xl w-11/12 mx-auto text-gray-600 mb-10'>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
            </div>

        </div>
    );
};

export default Blogs;