import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const FaqCard = () => {
    return (
        <div className='flex flex-col gap-y-2 p-4 bg-purple-300 dark:bg-dark-800 rounded-lg'>
            {/* headcard start */}
            <section className='flex items-center justify-between pb-2 border-b border-purple-300 dark:border-purple-600'>
                <p className='text-lg'>
                    چطور سفارش خود را ثبت کنم؟
                </p>
                {/* more button */}
                <div className="relative group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-vertical w-4 h-4"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    <div className="absolute top-1/2 left-1/3 hidden opacity-0 group-hover:opacity-100 text-sm w-[9rem] bg-zinc-200 dark:bg-dark-600 group-hover:flex flex-col rounded-md divide-y divide-zinc-400 dark:divide-dark-800 p-2 mytransition">
                        <Link to='/dashboard/content/faqs/edit' className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                            <FontAwesomeIcon icon={['fas', 'eye']} />
                            <div>ویرایش</div>
                        </Link>
                        <Link to='/dashboard/content/faqs/delete' className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                            <FontAwesomeIcon icon={['fas', 'trash']} />
                            <div>حذف</div>
                        </Link>
                    </div>
                </div>
            </section>
            {/* headcard end */}
            {/* body */}
            <p>. لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم. لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم. </p>
            {/* footer start */}
            <div className='flex items-center gap-x-4'>
                <div className='relative group flex items-center gap-x-2'>
                    <span className='bg-zinc-300 dark:bg-dark-600 dark:text-cyan-400 rounded-md py-1 px-3 text-xs'>تبت سفارش</span>
                    <span className='bg-zinc-300 dark:bg-dark-600 dark:text-cyan-400 rounded-md py-1 px-3 text-xs'>تبت سفارش</span>
                    <span className='bg-zinc-300 dark:bg-dark-600 dark:text-cyan-400 rounded-md py-1 px-3 text-xs'>تبت سفارش</span>
                    <span className='bg-zinc-300 dark:bg-dark-600 dark:text-cyan-400 rounded-md py-1 px-3 text-xs'>تبت سفارش</span>
                </div>
                <span className='bg-green-400 dark:bg-lime-500 text-green-800 dark:text-lime-800 rounded-md py-1 px-3'>فعال</span>
            </div>
            {/* footer end */}
            
        </div>
    );
};

export default FaqCard;