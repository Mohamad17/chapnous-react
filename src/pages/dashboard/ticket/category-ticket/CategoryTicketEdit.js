import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryTicketEdit = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش محتوی</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/tickets/category'>دسته بندی تیکت</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ویرایش دسته بندی تیکت</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ویرایش دسته بندی تیکت</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* category name */}
                <div className="form-group">
                    <label htmlFor='name'>نام دسته بندی تیکت </label>
                    <input id='name' name='name' type='text' className='input-form' />
                </div>
                {/* status */}
                <div className="form-group">
                    <label htmlFor='status'>وضعیت</label>
                    <select id='status' name='status' className='select-input'>
                        <option value='1'>غیر فعال</option>
                        <option value='2'>فعال</option>
                    </select>
                </div>
                <button type='submit' className='submitbtn'>ویرایش</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default CategoryTicketEdit;