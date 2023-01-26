import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid'
import { Message } from '../../../../context/dashboard/MessageAlertProvider';
import ToastAlert from '../../../../components/dashboard/main/ToastAlert';
import TrashModal from './TrashModal';
import { Services } from '../../../../context/dashboard/ServicesProvider';
import ServiceAttributeModal from './ServiceAttributeModal';
import MoreBox from './MoreBox';

const ServiceIndex = () => {
    const [search, setSearch] = useState('');
    const { services } = useContext(Services);
    const { message, setMessage } = useContext(Message);
    const [removeItem, setRemoveItem] = useState({
        isShowModal: false,
        id: false
    });
    const [serviceAttributes, setServiceAttributes] = useState({
        isShowModal: false,
        name: '',
        id: false
    });

    const modalTrash = useRef();
    const [showMoreBox, setShowMoreBox]= useState(false);

    

    const closeModal = (e) => {
        if (modalTrash.current && removeItem.isShowModal && !modalTrash.current.contains(e.target)) {
            setRemoveItem({ isShowModal: false, id: false })
        }
    }
    // const closeMore = (e) =>{
    //     if(showMoreBox){
    //         // console.log(e.target.classList.contains('more'))
    //         console.log(showMoreBox)
    //         setShowMoreBox(false)
    //     }
    // }

    document.addEventListener('mousedown', closeModal);
    // document.addEventListener('mousedown', closeMore);

    useEffect(() => {
        if (message) toast(message);
        return () => { setMessage('') }
    }, [message, setMessage, services])

    return (
        <div className='flex flex-col items-center justify-center gap-y-4 px-4 relative'>
            {/* {console.log(serviceAttributes)} */}
            {/* toast alert start */}
            <ToastAlert />
            {/* toast alert end */}
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-4 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[12px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <p>خدمات</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>خدمات</p>
            <div className="flex flex-wrap justify-evenly md:justify-between items-center gap-y-4 w-full">
                <Link to='/dashboard/service/create' className='squareIcon relative group'>
                    <FontAwesomeIcon icon={['fas', 'plus']} />
                    <span className='tooltip w-28 hidden group-hover:flex'>خدمات جدید</span>
                </Link>
                <p className='dark:text-zinc-300 text-sm'>نمایش 1 تا 10 آیتم از 150 آیتم موجود</p>
                <div className='justify-self-center md:ustify-self-between relative group flex justify-center items-center'>
                    <input type='text' name='search' value={search} onChange={(e) => setSearch(e.target.val)} className='pl-8 py-1 pr-3 outline-none focus:border focus:border-cyan-600 dark:bg-purple-800 dark:text-cyan-300 ring-0 rounded-lg w-full mytransition' />
                    <FontAwesomeIcon icon={['fas', 'search']} className='absolute left-4 text-zinc-600 dark:text-zinc-300 group-focus-within:text-purple-500 mytransition' />
                </div>
            </div>
            {/* head page end */}
            {/* responsive table start */}
            <section className="container dark:text-zinc-200">
                {/* titles */}
                <div className="hidden grid-cols-12 gap-4 p-4 text-sm md:grid title_color">
                    <div className="col-span-1"> آیکون </div>
                    <div className="col-span-4 text-center"> نام خدمات </div>
                    <div className="col-span-3 text-center"> دسته بندی </div>
                    <div className="col-span-1 text-center"> وضعیت </div>
                    <div className="col-span-1 text-center text-[10px]"> تعداد انجام شده </div>
                    <div className="col-span-2 text-center"> اقدامات </div>
                </div>
                {/* table */}
                <div className="flex flex-col gap-2">
                    {
                        services.map(service => (
                            <div key={nanoid()} className="relative grid grid-cols-1 gap-4 px-4 pt-4 pb-6 bg-white border rounded-lg dark:bg-dark-700 border-style md:grid-cols-12">
                                <div className="flex flex-col items-center gap-4 md:flex-row md:col-span-1">
                                    {/* image */}
                                    <div className="relative">
                                        <img src={service.icon} alt="avatar" className="w-12 h-12 rounded-full" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between md:justify-center md:col-span-4">
                                    <h3 className="text-sm md:hidden"> نام خدمت </h3>
                                    <h3 className="text-sm">{service.name}</h3>
                                </div>
                                <div className="flex items-center justify-between md:justify-center md:col-span-3">
                                    <h3 className="text-sm md:hidden"> دسته بندی </h3>
                                    <h3 className="text-sm">{service.category_name}</h3>
                                </div>
                                <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                                    <h3 className="md:hidden"> وضعیت </h3>
                                    <h3 className={service.status === 1 ? "status-green" : "status-red"}>{service.status === 1 ? 'فعال' : 'غیر فعال'}</h3>
                                </div>
                                <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                                    <h3 className="text-sm md:hidden">تعداد انجام شده</h3>
                                    <h3> {service.done_number} </h3>
                                </div>
                                <div className="flex justify-center md:px-0 items-center gap-x-4 md:gap-x-2 md:gap-4 md:col-span-2">
                                    <div className="text-2xl md:text-sm text-purple-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-purple-400 cursor-pointer relative group">
                                        <Link to={`/dashboard/service/edit/${service.id}`}>
                                            <FontAwesomeIcon className='group-hover:text-3xl group-hover:md:text-lg mytransition' icon={['fas', 'edit']} />
                                        </Link>
                                        <span className='absolute top-2/3 left-2/3 z-[250] bg-zinc-600 text-zinc-200 text-[12px] justify-center items-center py-1 px-3 rounded-md w-20 hidden group-hover:flex'>ویرایش</span>
                                    </div>
                                    <div onClick={() => setRemoveItem({ isShowModal: true, id: service.id })} className="text-2xl md:text-sm text-rose-700 dark:text-rose-400 hover:text-orange-700 dark:hover:text-purple-400 cursor-pointer relative group">
                                        <FontAwesomeIcon className='group-hover:text-3xl group-hover:md:text-lg mytransition' icon={['fas', 'trash']} />
                                        <span className='absolute top-2/3 left-2/3 z-[250] bg-zinc-600 text-zinc-200 text-[12px] justify-center items-center py-1 px-3 rounded-md w-20 hidden group-hover:flex'>حذف</span>
                                    </div>
                                    <div className='relative'>
                                        <span onClick={() => setShowMoreBox(service.id)} className='flex items-center justify-center gap-x-2 py-1 px-2 cursor-pointer text-base md:text-sm bg-cyan-700 dark:bg-cyan-800 text-zinc-200 rounded-md more'>
                                            <div className='more'>بیشتر</div>
                                            <FontAwesomeIcon icon={['fas', 'angle-left']} className={showMoreBox === service.id ? '-rotate-90 mytransition more': 'mytransition more'} />
                                        </span>
                                        {/* more box */}
                                        <MoreBox service={service} showMoreBox={showMoreBox} setShowMoreBox={setShowMoreBox} setServiceAttributes={setServiceAttributes} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            {/* responsive table end */}
            {/* service attribute modal start */}
            {serviceAttributes.isShowModal &&
                <span className='absolute z-[1555] flex justify-center items-center w-full h-full'>
                    <ServiceAttributeModal serviceAttribute={serviceAttributes} setServiceAttributes={setServiceAttributes} />
                </span>}
            {/* trash modal start */}
            {removeItem.isShowModal && <span className='absolute' ref={modalTrash}><TrashModal setRemoveItem={setRemoveItem} id={removeItem.id} /></span>}
        </div>
    );
};

export default ServiceIndex;