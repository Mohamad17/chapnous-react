import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminCreate = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش کاربران</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/users/admin'>کاربران ادمین</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ایجاد کاربر ادمین</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ایجاد کاربر ادمین</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* first name */}
                <div className="form-group">
                    <label htmlFor='first_name'>نام</label>
                    <input id='first_name' name='first_name' type='text' className='input-form' />
                </div>
                {/* last name */}
                <div className="form-group">
                    <label htmlFor='last_name'>نام خانوادگی</label>
                    <input id='last_name' name='last_name' type='text' className='input-form' />
                </div>
                {/* email */}
                <div className="form-group">
                    <label htmlFor='email'>ایمیل</label>
                    <input id='email' name='email' type='text' className='input-form' />
                </div>
                {/* phone */}
                <div className="form-group">
                    <label htmlFor='phone'>همراه</label>
                    <input id='phone' name='phone' type='text' className='input-form' />
                </div>
                {/* password */}
                <div className="form-group">
                    <label htmlFor='password'>کلمه عبور</label>
                    <input id='password' name='password' type='text' className='input-form' />
                </div>
                {/* confirm password */}
                <div className="form-group">
                    <label htmlFor='confirm_password'>تکرار کلمه عبور</label>
                    <input id='confirm_password' name='confirm_password' type='text' className='input-form' />
                </div>
                {/* status */}
                <div className="form-group">
                    <label htmlFor='status'>فعال / غیر فعال</label>
                    <select id='status' name='status' className='select-input'>
                        <option value='1'>غیر فعال</option>
                        <option value='2'>فعال</option>
                    </select>
                </div>
                {/* active */}
                <div className="form-group">
                    <label htmlFor='active'>وضعیت</label>
                    <select id='active' name='active' className='select-input'>
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
    );
};

export default AdminCreate;