import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className='error1'>
                <h1>oops,Error 404</h1>
                <h2> Page Not Found</h2>
            </div>
            <NavLink className="error" to="/Home">click here</NavLink>
        </>

    )
};

export default Error;
