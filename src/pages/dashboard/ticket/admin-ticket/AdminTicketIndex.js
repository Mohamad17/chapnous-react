import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img3 from '../../../../assets/images/3.jpg'

const AdminTicketIndex = () => {
    const [search, setSearch] = useState('');

    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-4 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[12px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش تیکت ها</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <p>ادمین تیکت</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ادمین تیکت</p>
            <div className="flex flex-wrap justify-evenly md:justify-between items-center gap-y-4 w-full">
                <span className='squareIcon opacity-50'>
                    <FontAwesomeIcon icon={['fas', 'plus']} />
                </span>
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
                    <div className="col-span-1"> تصویر </div>
                    <div className="col-span-4 text-center">ایمیل</div>
                    <div className="col-span-3 text-center"> نام </div>
                    <div className="col-span-3 text-center"> نام خانوادگی </div>
                    <div className="col-span-1 text-left"> اقدامات </div>
                </div>
                {/* table */}
                <div className="flex flex-col gap-2">
                    <div className="relative grid grid-cols-1 gap-4 px-4 pt-4 pb-6 bg-white border rounded-lg dark:bg-dark-700 border-style md:grid-cols-12">
                        <div className="flex flex-col items-center gap-4 md:flex-row md:col-span-1">
                            {/* image */}
                            <div className="relative">
                                <img src={img3} alt="avatar" className="w-40 md:w-12 md:h-12 rounded-none md:rounded-full" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-center md:col-span-4">
                            <h3 className="text-sm md:hidden">ایمیل</h3>
                            <h3 className="text-sm">oldapadana@gmail.com</h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center md:col-span-3">
                            <h3 className="text-sm md:hidden"> نام </h3>
                            <h3 className="text-sm">محمد</h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center md:col-span-3">
                            <h3 className="text-sm md:hidden"> نام خانوادگی </h3>
                            <h3 className="text-sm">رحمتی</h3>
                        </div>
                        <div className="flex justify-center md:px-0 items-center gap-x-4 md:gap-x-2 md:gap-4 md:col-span-1">
                            <div className="text-purple-700 dark:text-cyan-400 border border-cyan-700 rounded-md h-6 w-6 flex justify-center items-center cursor-pointer">
                                <FontAwesomeIcon className='text-xs' icon={['fas', 'check']} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* responsive table end */}
        </div>
    );
};

export default AdminTicketIndex;