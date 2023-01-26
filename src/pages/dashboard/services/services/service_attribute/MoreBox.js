import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const MoreBox = ({ showMoreBox, attributeId , setShowMoreBox }) => {
    const more = useRef();
    
    const navigate= useNavigate();

    useEffect(() => {

        
        const checkIfClickedOutside = e => {
            if (e.target.classList.contains('link')) {
                let id = '';
                if(!e.target.id){
                    id = e.target.parentElement.id;
                }else{
                    id= e.target.id;
                }
                const redirect= `/dashboard/service/attributes/value/attribute-name/${id}`;
                setShowMoreBox(false);
                navigate(redirect);
            }
            if (more.current && showMoreBox && !more.current.contains(e.target)) {
                setShowMoreBox(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }

    }, [showMoreBox, setShowMoreBox, navigate])

    return (
        <div ref={more} className={showMoreBox === attributeId ? "absolute bottom-1/2 left-0 md:left-1/2 w-[13rem] bg-zinc-200 dark:bg-dark-600 flex flex-col rounded-md divide-y divide-zinc-400 dark:divide-dark-800 p-2 mytransition" : "hidden mytransition"}>
            {/* {console.log(attributeId)} */}
            <span id={attributeId} className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400 link'>
                <FontAwesomeIcon className='link' icon={['fas', 'chess-board']} />
                <div className='link'>مقادیر فرم خدمات</div>
            </span>
        </div>
    );
};

export default MoreBox;