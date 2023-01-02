import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userIcon from '../../../assets/images/manchester-united.jpeg';
import { Link } from 'react-router-dom';

const CommentCard = () => {
    return (
        <div className='col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-y-2 p-4 bg-purple-300 dark:bg-dark-800 rounded-lg'>
            {/* headcard start */}
            <section className='flex items-center justify-between pb-2 border-b border-purple-300 dark:border-purple-600'>
                <div className="flex items-center gap-x-2">
                    <img src={userIcon} alt='user-icon' className='w-10 h-10 rounded-full overflow-hidden' />
                    <div className='flex flex-col gap-y-2'>
                        <p>محمد رحمتی</p>
                        <p className='text-sm'>
                            <span className='text-purple-600 dark:text-cyan-400'>چاپ دیجیتال</span> . <span>2 روز پیش</span>
                        </p>
                    </div>
                </div>
                {/* more button */}
                <div className="relative group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-vertical w-4 h-4"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    <div className="absolute top-1/2 left-1/3 hidden opacity-0 group-hover:opacity-100 text-sm w-[9rem] bg-zinc-200 dark:bg-dark-600 group-hover:flex flex-col rounded-md divide-y divide-zinc-400 dark:divide-dark-800 p-2 mytransition">
                        <Link to='/dashboard/content/comment/show' className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                            <FontAwesomeIcon icon={['fas', 'eye']} />
                            <div>نمایش</div>
                        </Link>
                    </div>
                </div>
            </section>
            {/* headcard end */}
            {/* body */}
            <p>. لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم. لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم. </p>
            {/* footer start */}
            <div className='flex flex-col gap-y-2'>
                <div className='relative group flex justify-center items-center'>
                    <input type='text' name='search' className='pl-8 py-1 pr-3 outline-none focus:border focus:border-cyan-600 dark:bg-purple-800 dark:text-cyan-300 ring-0 rounded-lg w-full mytransition' />
                    <FontAwesomeIcon icon={['fas', 'location-arrow']} className='absolute left-4 text-zinc-600 dark:text-zinc-300 group-focus-within:text-purple-500 rotate-45' />
                </div>
            </div>
            {/* footer end */}
            {/* reply section start */}
            <p className='pt-2 border-t border-purple-600'>پاسخ به</p>
            <section className='flex items-center justify-between'>
                <Link className="flex items-center gap-x-2">
                    <img src={userIcon} alt='user-icon' className='w-10 h-10 rounded-full overflow-hidden' />
                    <p>محمد رحمتی</p>
                    <span className='text-sm text-purple-700 dark:text-cyan-500'>
                        2 روز پیش
                    </span>
                </Link>
            </section>
            {/* reply section end */}
        </div>
    );
};

export default CommentCard;