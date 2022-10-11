import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-slate-700 py-4 flex w-full justify-between'>
            <div className='w-full  lg:mx-24 text-white flex  flex-col lg:flex-row lg:justify-between'>
                <h1 className='pl-5 lg:w-full text-3xl font-bold mb-2 hover:text-orange-500'> Daily Quiz Challenge</h1>

                <div className={`bg-slate-700  lg:bg-slate-700 w-full lg:flex text-center justify-end  `}>
                    <h3 ><Link className='mr-6 hover:bg-orange-400  rounded px-3' to="/">Home</Link>  </h3>
                    <h3 ><Link className='mr-6 hover:bg-orange-400  rounded px-3' to="/statics">Statics</Link>  </h3>
                    <h3 ><Link className='mr-6 hover:bg-orange-400  rounded px-3' to="/blogs">Blogs</Link>  </h3>
                </div>
            </div>
            <div onClick={() => setOpen(!open)} className="h-3 w-3 md:hidden ">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
        </nav>
    );
};

export default Header;