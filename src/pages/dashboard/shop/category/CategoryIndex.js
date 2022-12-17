import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img3 from '../../../../assets/images/3.jpg'

const CategoryIndex = () => {
    const [search, setSearch] = useState('');

    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-4 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <p>دسته بندی ها</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>دسته بندی ها</p>
            <div className="flex flex-wrap justify-evenly md:justify-between items-center gap-y-4 w-full">
                <Link to='/dashboard/category/create' className='squareIcon relative group'>
                    <FontAwesomeIcon icon={['fas', 'plus']} />
                    <span className='tooltip w-28 hidden group-hover:flex'>دسته بندی جدید</span>
                </Link>
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
                    <div className="col-span-1"> تصویر </div>
                    <div className="col-span-3 text-center"> نام دسته بندی </div>
                    <div className="col-span-3 text-center"> دسته والد </div>
                    <div className="col-span-3 text-center"> اسلاگ </div>
                    <div className="col-span-1 text-center"> وضعیت </div>
                    <div className="col-span-1 text-left"> اقدامات </div>
                </div>
                {/* table */}
                <div className="flex flex-col gap-2">
                    <div className="relative grid grid-cols-1 gap-4 px-4 pt-4 pb-6 bg-white border rounded-lg dark:bg-dark-700 border-style md:grid-cols-12">
                        <div className="flex flex-col items-center gap-4 md:flex-row md:col-span-1">
                            {/* image */}
                            <div className="relative">
                                <img src={img3} alt="avatar" className="w-12 h-12 rounded-full" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-center md:col-span-3">
                            <h3 className="text-sm md:hidden"> نام دسته بندی </h3>
                            <h3 className="text-sm"> چاپ دیجیتال </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center md:col-span-3">
                            <h3 className="text-sm md:hidden"> دسته والد </h3>
                            <h3 className="text-sm"> - </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center md:col-span-3">
                            <h3 className="text-sm md:hidden"> اسلاگ </h3>
                            <h3 className="text-sm"> دیجیتال-چاپ </h3>
                        </div>
                        <div className="flex items-center justify-between md:justify-center title_color md:col-span-1">
                            <h3 className="text-sm md:hidden"> وضعیت </h3>
                            <h3 className="px-4 py-1 text-sm md:text-base text-green-500 bg-green-200 dark:text-green-800 dark:bg-green-400 rounded-full dark:text-sm"> فعال </h3>
                        </div>
                        <div className="flex px-4 justify-center md:px-0 items-center gap-x-4 md:gap-x-2 md:gap-4 md:col-span-1">
                            <div className="text-2xl md:text-sm text-purple-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-purple-400 cursor-pointer relative group">
                                <Link to='/dashboard/category/edit'>
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

export default CategoryIndex;