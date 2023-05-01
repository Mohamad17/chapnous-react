import React from 'react';
import loading from '../assets/images/Loading_icon.gif';

const Loading = () => {
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <img src={loading} alt='loading-icon' />
        </div>
    );
};

export default Loading;