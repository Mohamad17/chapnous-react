import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import postImg from '../../../../assets/images/post.jpg'
import userIcon from '../../../../assets/images/manchester-united.jpeg'

const PostShow = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-4 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[12px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش محتوی</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/post'>مقاله ها</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>مشاهده پست</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>مشاهده پست</p>
            {/* head page end */}
            <section className="container dark:text-zinc-200 grid grid-cols-12 gap-4">
                <section className="col-span-12 lg:col-span-8 flex flex-col gap-y-4 bg-purple-300 dark:bg-dark-800 p-4 rounded-lg">
                    <div className="rounded-lg overflow-hidden">
                        <img src={postImg} alt='post' />
                    </div>
                    <p className='viny text-lg text-purple-800 dark:text-cyan-500'>لورم ایپسوم</p>
                    {/* body */}
                    <p className=''>
                        . لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم.
                        لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم
                        . لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم.
                        لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم
                        . لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم.
                        لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم
                        . لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم.
                        لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم
                        . لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم.
                        لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم
                        . لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم.
                        لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم
                        . لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم.
                        لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم
                        . لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم.
                        لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم
                        . لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم.
                        لورم ایپسوم متن ساختگی در صنعت چاپ هر روز با پیشرفت اگر در کره مریخ ما بتوانیم بدون ابزار گرانشی قدم بزنیم
                    </p>
                    <section className='col-span-12 flex items-center justify-between pt-2 border-t border-purple-300 dark:border-purple-600'>
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
                            <div className="absolute bottom-1/2 left-1/3 hidden opacity-0 group-hover:opacity-100 text-sm w-[9rem] bg-zinc-200 dark:bg-dark-600 group-hover:flex flex-col rounded-md divide-y divide-zinc-400 dark:divide-dark-800 p-2 mytransition">
                                <Link to='/dashboard/content/post/edit' className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                                    <FontAwesomeIcon icon={['fas', 'edit']} />
                                    <div>ویرایش</div>
                                </Link>
                                <span className='flex items-center gap-x-4 py-1 cursor-pointer hover:text-purple-600 dark:hover:text-amber-400'>
                                    <FontAwesomeIcon icon={['fas', 'trash']} />
                                    <div>حذف</div>
                                </span>
                            </div>
                        </div>
                    </section>
                </section>
                <section className='col-span-12 place-self-start w-full lg:col-span-4 flex flex-col gap-y-4 bg-purple-300 dark:bg-dark-800 p-4 rounded-lg'>
                    <p>نظرات</p>
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
                        {/* footer comment card start */}
                        <div className='flex items-center gap-x-4 pt-1 border-t border-purple-300 dark:border-purple-600'>
                            <span className="flex items-center gap-x-1 cursor-pointer">
                                <span>پاسخ</span>
                                <FontAwesomeIcon icon={['fas', 'reply']} />
                            </span>
                            <span className='flex items-center justify-center text-[10px] bg-zinc-500 text-purple-200 rounded-md h-8 w-8 lg:h-6 lg:w-6'>36</span>
                        </div>
                        {/* footer comment card end */}
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
                        {/* footer comment card start */}
                        <div className='flex items-center gap-x-4 pt-1 border-t border-purple-300 dark:border-purple-600'>
                            <span className="flex items-center gap-x-1 cursor-pointer">
                                <span>پاسخ</span>
                                <FontAwesomeIcon icon={['fas', 'reply']} />
                            </span>
                            <span className='flex items-center justify-center text-[10px] bg-zinc-500 text-purple-200 rounded-md h-8 w-8 lg:h-6 lg:w-6'>36</span>
                        </div>
                        {/* footer comment card end */}
                    </div>
                </section>
            </section>
        </div>
    );
};

export default PostShow;