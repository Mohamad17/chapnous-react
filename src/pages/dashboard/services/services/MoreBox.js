import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const MoreBox = ({ showMoreBox, serviceId }) => {

    return (
        <div id={serviceId} className={showMoreBox === serviceId ? "absolute bottom-1/2 left-0 md:left-1/2 w-[13rem] bg-zinc-200 dark:bg-dark-600 flex flex-col rounded-md divide-y divide-zinc-400 dark:divide-dark-800 p-2 mytransition" : "hidden mytransition"}>
            <Link to={`/dashboard/service/create-attributes/${serviceId}`} className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400 more'>
                <FontAwesomeIcon className='attributes more' icon={['fas', 'chess-board']} />
                <div className='attributes more'>ویژگی های خدمات</div>
            </Link>
            <Link to={`/dashboard/service/gallery/${serviceId}`} className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400 more'>
                <FontAwesomeIcon className='more' icon={['fas', 'images']} />
                <div className='more'>گالری</div>
            </Link>
            <Link to={`/dashboard/service/help-files/${serviceId}`} className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400 more'>
                <FontAwesomeIcon className='more' icon={['fas', 'file-upload']} />
                <div className='more'>فایل های راهنما</div>
            </Link>
        </div>
    );
};

export default MoreBox;