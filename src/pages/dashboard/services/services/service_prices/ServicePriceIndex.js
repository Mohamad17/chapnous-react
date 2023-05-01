import React , { useEffect , useContext , useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Message } from '../../../../../context/dashboard/MessageAlertProvider';
import ToastAlert from '../../../../../components/dashboard/main/ToastAlert';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServicePrices } from '../../../../../redux/service-prices/servicePricesActions';
import Loading from '../../../../../shared/Loading';

const ServicePriceIndex = () => {
    const servicePricesState= useSelector(state=>state.servicePricesState);
    const dispatch= useDispatch();
    const params= useParams();
    const { message, setMessage } = useContext(Message);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (!servicePricesState.servicePrices.length) dispatch(fetchServicePrices(params.id));
        if (message) toast(message);
        return () => { setMessage('') }
    }, [message, setMessage, params, dispatch])

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
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/service/service/'>خدمات</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>قیمت خدمات</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'><span>قیمت خدمات</span> - <span className='font-bold text-cyan-800 dark:text-cyan-400'>{servicePricesState.service}</span></p>
            <div className="flex flex-wrap justify-evenly md:justify-between items-center gap-y-4 w-full">
                <Link to='/dashboard/service/create' className='squareIcon relative group'>
                    <FontAwesomeIcon icon={['fas', 'plus']} />
                    <span className='tooltip w-28 hidden group-hover:flex'>قیمت خدمات جدید</span>
                </Link>
                <p className='dark:text-zinc-300 text-sm'>نمایش 1 تا 10 آیتم از 150 آیتم موجود</p>
                <div className='justify-self-center md:justify-self-between relative group flex justify-center items-center'>
                    <input type='text' name='search' value={search} onChange={(e) => setSearch(e.target.val)} className='pl-8 py-1 pr-3 outline-none focus:border focus:border-cyan-600 dark:bg-purple-800 dark:text-cyan-300 ring-0 rounded-lg w-full mytransition' />
                    <FontAwesomeIcon icon={['fas', 'search']} className='absolute left-4 text-zinc-600 dark:text-zinc-300 group-focus-within:text-purple-500 mytransition' />
                </div>
            </div>
            {/* head page end */}
            {/* responsive table start */}
            <section className="container dark:text-zinc-200">
                {/* titles */}
                <div className="hidden grid-cols-12 gap-4 p-4 text-sm md:grid title_color">
                    <div className="col-span-6 text-center"> ویژگی ها </div>
                    <div className="col-span-3 text-center">قیمت</div>
                    <div className="col-span-1 text-center"> وضعیت </div>
                    <div className="col-span-2 text-center"> اقدامات </div>
                </div>
                {/* table */}
                <div className="flex flex-col gap-2">
                    {
                        servicePricesState.loading ? <Loading /> :
                        servicePricesState.servicePrices.map(servicePrice => (
                            <div key={nanoid()} className="relative grid grid-cols-1 gap-4 px-4 pt-4 pb-6 bg-white border rounded-lg dark:bg-dark-700 border-style md:grid-cols-12">
                                <div className="flex flex-col items-center gap-4 md:col-span-6">
                                    {/* attribute values */}
                                    <h3 className="text-sm md:hidden"> ویژگی ها </h3>
                                    {servicePrice.attribute_values.map(arrtibuteValue => (
                                        <div>
                                            <span><FontAwesomeIcon icon={['fas', 'chevron-circle-left']} /> {arrtibuteValue.attribute}</span> : <span>{arrtibuteValue.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between md:justify-center md:col-span-3">
                                    <h3 className="text-sm md:hidden"> قیمت </h3>
                                    <h3 className="text-sm">{servicePrice.price}</h3>
                                </div>
                               
                                <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                                    <h3 className="md:hidden"> وضعیت </h3>
                                    <h3 className={servicePrice.status === 1 ? "status-green" : "status-red"}>{servicePrice.status === 1 ? 'فعال' : 'غیر فعال'}</h3>
                                </div>
                                <div className="flex justify-center md:px-0 items-center gap-x-4 md:gap-x-2 md:gap-4 md:col-span-2">
                                    <div className="text-2xl md:text-sm text-purple-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-purple-400 cursor-pointer relative group">
                                        <Link to={`/dashboard/service/edit/${servicePrice.id}`}>
                                            <FontAwesomeIcon className='group-hover:text-3xl group-hover:md:text-lg mytransition' icon={['fas', 'edit']} />
                                        </Link>
                                        <span className='absolute top-2/3 left-2/3 z-[250] bg-zinc-600 text-zinc-200 text-[12px] justify-center items-center py-1 px-3 rounded-md w-20 hidden group-hover:flex'>ویرایش</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            {/* responsive table end */}
        </div>
    );
};

export default ServicePriceIndex;