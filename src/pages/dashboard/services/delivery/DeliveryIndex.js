import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
const DeliveryIndex = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-y-4 px-4 relative'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-4 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[12px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <p>روش ارسال</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>روش ارسال</p>
            <div className="flex flex-wrap justify-evenly md:justify-between items-center gap-y-4 w-full">
                <Link to='/dashboard/delivery/create' className='squareIcon relative group'>
                    <FontAwesomeIcon icon={['fas', 'plus']} />
                    <span className='tooltip w-44 hidden group-hover:flex'>روش ارسال جدید</span>
                </Link>
                <p className='dark:text-zinc-300 text-sm'>نمایش 1 تا 10 آیتم از 150 آیتم موجود</p>
            </div>
            {/* head page end */}
            {/* responsive table start */}
            <section className="container dark:text-zinc-200">
                {/* titles */}
                <div className="hidden grid-cols-12 gap-4 p-4 text-sm md:grid title_color">
                    <div className="col-span-3 text-center">روش ارسال</div>
                    <div className="col-span-3 text-center">هزینه ارسال</div>
                    <div className="col-span-3 text-center">زمان ارسال</div>
                    <div className="col-span-2 text-center">وضعیت</div>
                    <div className="col-span-1 text-center">اقدامات</div>
                </div>
                {/* table */}
                <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-1 gap-4 px-4 pt-4 pb-6 bg-white border rounded-lg dark:bg-dark-700 border-style md:grid-cols-12">
                        <div className="flex items-center justify-between md:justify-center md:col-span-3">
                            <h3 className="md:hidden"> روش ارسال </h3>
                            <h3>پست</h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-3">
                            <h3 className="md:hidden"> هزینه ارسال </h3>
                            <h3 > 35000 تومان </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-3">
                            <h3 className="md:hidden">زمان ارسال</h3>
                            <h3> 3 روز کاری </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-2">
                            <h3 className="md:hidden"> وضعیت </h3>
                            <h3 className="px-2 py-1 text-green-500 bg-green-200 dark:text-green-800 dark:bg-green-400 rounded-full"> فعال </h3>
                        </div>
                        {/* actions */}
                        <div className="flex justify-center md:px-0 items-center gap-x-4 md:gap-x-2 md:gap-4 md:col-span-1">
                            <div className="text-2xl md:text-sm text-purple-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-purple-400 cursor-pointer relative group">
                                <Link to='/dashboard/delivery/edit'>
                                    <FontAwesomeIcon className='group-hover:text-3xl group-hover:md:text-lg mytransition' icon={['fas', 'edit']} />
                                </Link>
                                <span className='absolute top-2/3 left-2/3 z-[250] bg-zinc-600 text-zinc-200 text-[12px] justify-center items-center py-1 px-3 rounded-md w-20 hidden group-hover:flex'>ویرایش</span>
                            </div>
                            <div className="text-2xl md:text-sm text-rose-700 dark:text-rose-400 hover:text-orange-700 dark:hover:text-purple-400 cursor-pointer relative group">
                                <FontAwesomeIcon className='group-hover:text-3xl group-hover:md:text-lg mytransition' icon={['fas', 'trash']} />
                                <span className='absolute top-2/3 left-2/3 z-[250] bg-zinc-600 text-zinc-200 text-[12px] justify-center items-center py-1 px-3 rounded-md w-20 hidden group-hover:flex'>حذف</span>
                            </div>
                        </div>
                    </div>
                 </div>
            </section>
            {/* responsive table end */}
        </div>
    );
};

export default DeliveryIndex;