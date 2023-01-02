import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import img3 from '../../../assets/images/3.jpg'

const SettingIndex = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-4 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[12px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>تنظیمات</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>تنظیمات</p>
            <Link to='/dashboard/setting/edit' className="dropdownBtn self-start">
                <p>ویرایش</p>
                <FontAwesomeIcon icon={['fas', 'edit']} />
            </Link>
            {/* head page end */}
            {/* responsive table start */}
            <section className="container dark:text-zinc-200 grid grid-cols-8 gap-6">
                {/* titles */}
                <div className="flex items-center gap-6 border border-purple-400 rounded-lg col-span-8 p-4 w-full">
                    <p>عنوان سایت</p>
                    <p className='bg-zinc-300 dark:bg-dark-600 p-2 justify-self-stretch'>چاپنوس</p>
                </div>
                <div className="flex flex-col items-center gap-4 border border-purple-400 rounded-lg col-span-8 p-4">
                    <p>توضیحات سایت</p>
                    <p className='bg-zinc-300 dark:bg-dark-600 p-2 w-4/5'>خدمات چاپ و نشر کتاب</p>
                </div>
                <div className="flex flex-col items-center gap-4 border border-purple-400 rounded-lg col-span-8 p-4">
                    <p>کلمات کلیدی سایت</p>
                    <p className='bg-zinc-300 dark:bg-dark-600 p-2 w-4/5'>چاپ دیجیتال ، چاپ بنر ، نشر کتاب ، پایان نامه ، مقاله دکترا</p>
                </div>
                <div className="flex flex-col items-center gap-4 border border-purple-400 rounded-lg col-span-8 p-4">
                    <p>لوگوی سایت</p>
                    <img src={img3} alt='logo' />
                </div>
                <div className="flex flex-col items-center gap-4 border border-purple-400 rounded-lg col-span-8 p-4">
                    <p>آیکون سایت</p>
                    <img src={img3} alt='icon' />
                </div>
            </section>
            {/* responsive table end */}
        </div>
    );
};

export default SettingIndex;