import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const OrderIndex = () => {
    const [search, setSearch] = useState('');

    const params= useParams();
    const statusOrder= params.status;

    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-4 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[12px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <p>{statusOrder}</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>{statusOrder}</p>
            <div className="flex flex-wrap justify-evenly md:justify-between items-center gap-y-4 w-full">
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
                    <div className="col-span-1"> کد سفارش </div>
                    <div className="col-span-1 text-center">مجموع مبلغ سفارش (بدون تخفیف)</div>
                    <div className="col-span-1 text-center">مجموع تمامی مبلغ تخفیفات</div>
                    <div className="col-span-1 text-center">مبلغ تخفیف همه محصولات</div>
                    <div className="col-span-1 text-center">مبلغ نهایی</div>
                    <div className="col-span-1 text-center">وضعیت پرداخت</div>
                    <div className="col-span-1 text-center">شیوه پرداخت</div>
                    <div className="col-span-1 text-center">بانک</div>
                    <div className="col-span-1 text-center">وضعیت ارسال</div>
                    <div className="col-span-1 text-center">شیوه ارسال</div>
                    <div className="col-span-1 text-center">وضعیت سفارش</div>
                    <div className="col-span-1 text-center">اقدامات</div>
                </div>
                {/* table */}
                <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-1 gap-4 px-4 pt-4 pb-6 bg-white border rounded-lg dark:bg-dark-700 border-style md:grid-cols-12">
                        <div className="flex items-center justify-between md:justify-center md:col-span-1">
                            <h3 className="text-sm md:hidden"> کد سفارش </h3>
                            <h3 className="text-sm">18526368</h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center md:col-span-1">
                            <h3 className="text-sm md:hidden">مجموع مبلغ سفارش (بدون تخفیف)</h3>
                            <h3 className="text-sm"> 8500000 </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                            <h3 className="text-sm md:hidden"> مجموع تمامی مبلغ تخفیفات </h3>
                            <h3 className="text-sm md:text-base"> 500000 </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                            <h3 className="text-sm md:hidden"> مبلغ تخفیف همه محصولات </h3>
                            <h3 className="text-sm md:text-base"> 750000 </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                            <h3 className="text-sm md:hidden"> مبلغ نهایی </h3>
                            <h3 className="text-base md:text-sm"> 7750000 </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                            <h3 className="text-sm md:hidden"> وضعیت پرداخت </h3>
                            <h3 className="px-2 py-1 text-base md:text-[10px] text-green-500 bg-green-200 dark:text-green-800 dark:bg-green-400 rounded-full"> پرداخت شده </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                            <h3 className="text-sm md:hidden"> شیوه پرداخت </h3>
                            <h3 className="text-base md:text-sm"> آنلاین </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                            <h3 className="text-sm md:hidden"> بانک </h3>
                            <h3 className="text-base md:text-sm"> ملت </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                            <h3 className="text-sm md:hidden"> وضعیت ارسال </h3>
                            <h3 className="px-2 py-1 text-base md:text-[10px] text-rose-500 bg-rose-200 dark:text-rose-800 dark:bg-rose-400 rounded-full"> ارسال نشده </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                            <h3 className="text-sm md:hidden"> شیوه ارسال </h3>
                            <h3 className="text-base md:text-sm"> پست </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                            <h3 className="text-sm md:hidden"> وضعیت سفارش </h3>
                            <h3 className="px-2 py-1 text-base md:text-[10px] text-yellow-500 bg-yellow-200 dark:text-yellow-800 dark:bg-yellow-400 rounded-full"> تکمیل نشده </h3>
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
                                        <div>مشاهده فاکتور</div>
                                    </span>
                                    <span className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                                        <FontAwesomeIcon icon={['fas', 'chess-board']} />
                                        <div>تغییر وضعیت ارسال</div>
                                    </span>
                                    <span className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                                        <FontAwesomeIcon icon={['fas', 'chess-board']} />
                                        <div>تغییر وضعیت سفارش</div>
                                    </span>
                                    <span className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                                        <FontAwesomeIcon icon={['fas', 'chess-board']} />
                                        <div>باطل کردن سفارش</div>
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

export default OrderIndex;