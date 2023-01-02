import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BannerEdit = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش محتوی</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/banners'>بنر ها</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ایجاد بنر</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ایجاد بنر</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* title */}
                <div className="form-group">
                    <label htmlFor='title'>عنوان بنر</label>
                    <input id='title' name='title' type='text' className='input-form' />
                </div>
                {/* url */}
                <div className="form-group">
                    <label htmlFor='url'>آدرس</label>
                    <input id='url' name='url' type='text' className='input-form' />
                </div>
                {/* position */}
                <div className="form-group">
                    <label htmlFor='position'>جایگاه</label>
                    <select id='position' name='position' className='select-input'>
                        <option value='1'>بنر اصلی</option>
                        <option value='2'>کنار بنر اصلی</option>
                        <option value='3'>میان صفحه اصلی</option>
                        <option value='4'>بنر بزرگ پایین</option>
                    </select>
                </div>
                {/* status */}
                <div className="form-group">
                    <label htmlFor='status'>وضعیت</label>
                    <select id='status' name='status' className='select-input'>
                        <option value='1'>غیر فعال</option>
                        <option value='2'>فعال</option>
                    </select>
                </div>
                {/* image */}
                <div className="form-group">
                    <label htmlFor='image'>تصویر</label>
                    <input id='image' name='image' type='file' className='input-form' />
                </div>
                <button type='submit' className='submitbtn'>افزودن</button>
            </form>
            {/* form end */}
        </div>
    )
};

export default BannerEdit;