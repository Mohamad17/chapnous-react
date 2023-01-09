import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DeliveryCreate = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link to='/dashboard/delivery'>روش ارسال</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ایجاد روش ارسال</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ایجاد روش ارسال</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* delivery_name */}
                <div className="form-group">
                    <label htmlFor='delivery_name'>نام روش ارسال</label>
                    <input id='delivery_name' name='delivery_name' type='text' className='input-form' />
                </div>
                {/* delivery_amount */}
                <div className="form-group">
                    <label htmlFor='delivery_amount'>هزینه ارسال</label>
                    <input id='delivery_amount' name='delivery_amount' type='text' className='input-form' />
            
                </div>
                {/* delivery_time */}
                <div className="form-group">
                    <label htmlFor='delivery_time'>زمان ارسال</label>
                    <input id='delivery_time' name='delivery_time' type='text' className='input-form' />
                </div>
                {/* status */}
                <div className="form-group">
                    <label htmlFor='status'>وضعیت</label>
                    <select id='status' name='status' className='select-input'>
                        <option value='1'>غیر فعال</option>
                        <option value='2'>فعال</option>
                    </select>
                </div>
                <button type='submit' className='submitbtn'>افزودن</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default DeliveryCreate;