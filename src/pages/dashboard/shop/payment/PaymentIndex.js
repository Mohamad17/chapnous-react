import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PaymentIndex = () => {
    const [search, setSearch] = useState('');
    const params= useParams();
    const type= params.type;

    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-4 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[12px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <p>{type}</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>{type}</p>
            <div className="flex flex-wrap justify-evenly md:justify-between items-center gap-y-4 w-full">
                <p className='dark:text-zinc-300 text-sm'>نمایش 1 تا 10 آیتم از 150 آیتم موجود</p>
                <div className='justify-self-center md:ustify-self-between relative group flex justify-center items-center'>
                    <input type='text' name='search' value={search} onChange={(e) => setSearch(e.target.val)} className='pl-8 py-1 pr-3 outline-none focus:border focus:border-cyan-600 dark:bg-purple-800 dark:text-cyan-300 ring-0 rounded-lg w-full mytransition' />
                    <FontAwesomeIcon icon={['fas', 'search']} className='absolute left-4 text-zinc-600 dark:text-zinc-300 group-focus-within:text-purple-500 mytransition' />
                </div>
            </div>
            {/* head page end */}
            {/* responsive table start */}
            <section className="container mb-10 dark:text-zinc-200">
                {/* titles */}
                <div className="hidden grid-cols-12 gap-4 p-4 text-sm md:grid title_color">
                    <div className="col-span-2"> کد تراکنش </div>
                    <div className="col-span-2 text-center">بانک</div>
                    <div className="col-span-3 text-center">پرداخت کننده</div>
                    <div className="col-span-2 text-center">وضعیت پرداخت</div>
                    <div className="col-span-2 text-center">نوع پرداخت</div>
                    <div className="col-span-1 text-center">اقدامات</div>
                </div>
                {/* table */}
                <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-1 gap-4 px-4 pt-4 pb-6 bg-white border rounded-lg dark:bg-dark-700 border-style md:grid-cols-12">
                        <div className="flex items-center justify-between md:justify-center md:col-span-2">
                            <h3 className="text-sm md:hidden"> کد تراکنش </h3>
                            <h3 className="text-sm">18526368</h3>
                        </div>
                       
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-2">
                            <h3 className="text-sm md:hidden"> بانک </h3>
                            <h3 className="text-base md:text-sm"> ملت </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-3">
                            <h3 className="text-sm md:hidden"> پرداخت کننده </h3>
                            <h3 className="text-base md:text-[10px]"> محمد رحمتی </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-2">
                            <h3 className="text-sm md:hidden"> وضعیت پرداخت </h3>
                            <h3 className="px-2 py-1 text-base md:text-[10px] text-yellow-500 bg-yellow-200 dark:text-yellow-800 dark:bg-yellow-400 rounded-full"> پرداخت نشده </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-2">
                            <h3 className="text-sm md:hidden"> نوع پرداخت </h3>
                            <h3 className="text-base md:text-[10px]"> آنلاین </h3>
                        </div>
                        {/* actions */}
                        <div className="flex justify-center md:px-0 items-center gap-x-4 md:gap-x-2 md:gap-4 md:col-span-1">
                            <div className='relative group'>
                                <span className='flex items-center justify-center gap-x-2 py-1 px-2 cursor-pointer text-base md:text-sm bg-cyan-700 dark:bg-cyan-800 text-zinc-200 rounded-md'>
                                    <div>بیشتر</div>
                                    <FontAwesomeIcon icon={['fas', 'angle-left']} className='group-hover:-rotate-90 mytransition' />
                                </span>
                                <div className="absolute bottom-1/2 left-1/2 hidden opacity-0 group-hover:opacity-100 w-[13rem] bg-zinc-200 dark:bg-dark-600 group-hover:flex flex-col rounded-md divide-y divide-zinc-400 dark:divide-dark-800 p-2 mytransition">
                                    <span className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                                        <FontAwesomeIcon icon={['fas', 'chess-board']} />
                                        <div>مشاهده</div>
                                    </span>
                                    <span className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                                        <FontAwesomeIcon icon={['fas', 'chess-board']} />
                                        <div>باطل کردن</div>
                                    </span>
                                    <span className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                                        <FontAwesomeIcon icon={['fas', 'chess-board']} />
                                        <div>برگرداندن</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* responsive table end */}
        </div>
    );
};

export default PaymentIndex;