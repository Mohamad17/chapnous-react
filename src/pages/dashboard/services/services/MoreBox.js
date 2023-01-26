import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MoreBox = ({ setShowMoreBox, showMoreBox, service, setServiceAttributes }) => {
    const more = useRef();

    useEffect(() => {

        const checkIfClickedOutside = e => {
            if(e.target.classList.contains('attributes')){
                setServiceAttributes({ isShowModal: true, name: service.name, id: service.id });
                setShowMoreBox(false)
            }
            if (more.current && showMoreBox && !more.current.contains(e.target)) {
                setShowMoreBox(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }

    }, [showMoreBox, setShowMoreBox, setServiceAttributes, service])

    return (
        <div ref={more} id={service.id} className={showMoreBox === service.id ? "absolute bottom-1/2 left-0 md:left-1/2 w-[13rem] bg-zinc-200 dark:bg-dark-600 flex flex-col rounded-md divide-y divide-zinc-400 dark:divide-dark-800 p-2 mytransition" : "hidden mytransition"}>
            <span className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400 attributes'>
                <FontAwesomeIcon className='attributes' icon={['fas', 'chess-board']} />
                <div className='attributes'>ویژگی های خدمات</div>
            </span>
            <span className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                <FontAwesomeIcon icon={['fas', 'images']} />
                <div>گالری</div>
            </span>
            <span className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                <FontAwesomeIcon icon={['fas', 'file-upload']} />
                <div>فایل های راهنما</div>
            </span>
        </div>
    );
};

export default MoreBox;