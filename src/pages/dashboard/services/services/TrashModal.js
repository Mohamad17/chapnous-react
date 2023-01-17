import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Message } from '../../../../context/dashboard/MessageAlertProvider';
import { Services } from '../../../../context/dashboard/ServicesProvider';
import { removeService , getServices } from '../../../../service/dashboard/services/Service';

const TrashModal = ({setRemoveItem , id}) => {
    const {setMessage} = useContext(Message);
    const {setServices} = useContext(Services);

    const removeItem= async() => {
        setRemoveItem({isShowModal: false, id: false});
        const response= await removeService(id);
        if(response.status==='success'){
            setServices(await getServices())
            setMessage(response.message);
        }else{
            setMessage('عدم برقراری ارتباط با سرور');
        }
    }

    return (
        <div className='border border-purple-400 rounded-lg shadow-2xl p-6 bg-purple-200 dark:bg-dark-600 flex flex-col gap-y-4'>
            <p className='text-sm dark:text-purple-300'>آیا از حذف آیتم مورد نظر مطمئن هستید ؟</p>
            <div className='flex justify-center items-center gap-x-4'>
                <button onClick={removeItem} type='button' className='flex justify-center items-center gap-x-4 bg-rose-600 text-white rounded-md py-2 px-4'>
                    <FontAwesomeIcon icon={['fas', 'trash']} />
                    <span>حذف شود</span>
                </button>
                <button onClick={() => setRemoveItem({isShowModal: false, id: false})} type='button' className='flex justify-center items-center gap-x-4 bg-lime-600 text-white rounded-md py-2 px-4'>
                    <FontAwesomeIcon icon={['fas', 'times']} />
                    <span>لغو</span>
                </button>
            </div>
        </div>
    );
};

export default TrashModal;