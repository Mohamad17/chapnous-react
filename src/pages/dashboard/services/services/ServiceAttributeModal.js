import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

const ServiceAttributeModal = ({ setServiceAttributes, serviceAttribute }) => {
    const box= useRef();

    const closeModal = (e) => {
        if(box.current && serviceAttribute.isShowModal && !box.current.contains(e.target)){
            setServiceAttributes({isShowModal:false, name:'', id:false})
        }
    }

    document.addEventListener('mousedown', closeModal);
    
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div ref={box} className='border border-purple-400 rounded-lg shadow-2xl p-6 bg-purple-200 dark:bg-dark-600 flex flex-col items-center gap-y-4'>
                <p className='dark:text-zinc-300'>انتخاب فرم خدمات <span>{serviceAttribute.name}</span></p>
                <div className='flex justify-center items-center gap-x-4'>
                    <button type='button' className='flex justify-center items-center gap-x-4 bg-rose-600 text-white rounded-md py-2 px-4'>
                        <FontAwesomeIcon icon={['fas', 'trash']} />
                        <span>حذف شود</span>
                    </button>
                    <button type='button' className='flex justify-center items-center gap-x-4 bg-lime-600 text-white rounded-md py-2 px-4'>
                        <FontAwesomeIcon icon={['fas', 'times']} />
                        <span>لغو</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceAttributeModal;