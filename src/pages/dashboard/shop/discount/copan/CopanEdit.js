import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker } from "jalali-react-datepicker";

const CopanEdit = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link to='/dashboard/discounts/copan'>کوپن تخفیف</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ویرایش کوپن تخفیف</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ویرایش کوپن تخفیف</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* copan code */}
                <div className="form-group">
                    <label htmlFor='code'>کد کوپن</label>
                    <input id='code' name='code' type='text' className='input-form' />
                </div>
                {/* type */}
                <div className="form-group">
                    <label htmlFor='type'>نوع کوپن</label>
                    <select id='type' name='type' className='select-input'>
                        <option value='2'>عمومی</option>
                        <option value='1'>اختصاصی</option>
                    </select>
                </div>
                {/* user */}
                <div className="form-group">
                    <label htmlFor='user_id'>کاربران</label>
                    <select id='user_id' name='user_id' className='select-input' disabled>
                        <option value='1'>محمد رحمتی</option>
                        <option value='2'>علی دانایی</option>
                        <option value='3'>فرهاد رجبی</option>
                    </select>
                </div>
                {/* discount type */}
                <div className="form-group">
                    <label htmlFor='discount_type'>نوع تخفیف</label>
                    <select id='discount_type' name='discount_type' className='select-input'>
                        <option value='1'>درصدی</option>
                        <option value='2'>عددی</option>
                    </select>
                </div>
                {/* amount */}
                <div className="form-group">
                    <label htmlFor='amount'>میزان تخفیف</label>
                    <input id='amount' name='amount' type='text' className='input-form' />
                </div>
                {/* top */}
                <div className="form-group">
                    <label htmlFor='top'>سقف تخفیف</label>
                    <input id='top' name='top' type='text' className='input-form' />
                </div>
                {/* start date */}
                <div className='form-group datepicker'>
                    <label htmlFor='jalaliDatePicker'>تاریخ شروع</label>
                    <DatePicker onClickSubmitButton={(e) => console.log(e.value)} />
                </div>
                {/* end date */}
                <div className='form-group datepicker'>
                    <label htmlFor='jalaliDatePicker'>تاریخ پایان</label>
                    <DatePicker onClickSubmitButton={(e) => console.log(e.value)} />
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

export default CopanEdit;