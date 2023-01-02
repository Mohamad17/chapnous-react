import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../../../assets/images/manchester-united.jpeg'

const CommnetShow = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-4 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[12px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش محتوی</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/comment'>نظرات</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>مشاهده نظر</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>مشاهده نظر</p>
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>
                <span className='text-base md:text-2xl dark:text-cyan-400'>روش چاپ طلاکوب</span>
                <span className='text-xs md:text-base text-purple-700 dark:text-zinc-400'> - چاپ اختصاصی</span>
            </p>
            {/* head page end */}
            <section className='flex flex-col gap-y-4 w-full bg-purple-300 dark:text-zinc-300 dark:bg-dark-800 p-4 rounded-lg'>
                <div className='comment'>
                    {/* head comment card start */}
                    <section className='flex items-center justify-between'>
                        <div className="flex items-center gap-x-2">
                            <img src={userIcon} alt='user-icon' className='w-10 h-10 rounded-full overflow-hidden' />
                            <div className='flex flex-col'>
                                <p>محمد رحمتی</p>
                                <span className='text-sm text-purple-600 dark:text-cyan-400'>مشتری</span>
                            </div>
                        </div>
                        <p className='text-[10px] text-zinc-500 dark:text-zinc-300'>3 ساعت پیش</p>
                    </section>
                    {/* head comment card end */}
                    <p className='py-1'>
                        بسیار مطالب مفیدی بود. ممنون از فعالیت خوب شما
                    </p>
                </div>
                <div className='reply-comment'>
                    {/* head comment card start */}
                    <section className='flex items-center justify-between'>
                        <div className="flex items-center gap-x-2">
                            <img src={userIcon} alt='user-icon' className='w-10 h-10 rounded-full overflow-hidden' />
                            <div className='flex flex-col'>
                                <p>محمد رحمتی</p>
                                <span className='text-sm text-purple-600 dark:text-cyan-400'>مشتری</span>
                            </div>
                        </div>
                        <p className='text-[10px] text-zinc-500 dark:text-zinc-300'>3 ساعت پیش</p>
                    </section>
                    {/* head comment card end */}
                    <p className='py-1'>
                        سپاس از لطف شما
                    </p>
                </div>
                <div className='relative group flex justify-center items-center'>
                    <input type='text' name='search' className='pl-8 py-1 pr-3 outline-none focus:border focus:border-cyan-600 dark:bg-purple-800 dark:text-cyan-300 ring-0 rounded-lg w-full mytransition' />
                    <FontAwesomeIcon icon={['fas', 'location-arrow']} className='absolute left-4 text-zinc-600 dark:text-zinc-300 group-focus-within:text-purple-500 rotate-45' />
                </div>
            </section>
        </div>
    );
};

export default CommnetShow;