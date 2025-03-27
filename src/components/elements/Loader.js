import React from 'react';

export const Loader = () => {
    return (
        <div className="mx-8 my-16 flex flex-wrap justify-center align-middle">
            <div className="loader"></div>
            <div className="mt-8 w-full text-center">Loading</div>
        </div>
    );
};
