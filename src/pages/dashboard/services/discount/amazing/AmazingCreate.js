import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker } from "jalali-react-datepicker";

const AmazingCreate = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link to='/dashboard/discounts/amazing-sales'>تخفیف شگفت انگیز</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ایجاد تخفیف شگفت انگیز</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ایجاد تخفیف شگفت انگیز</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* service */}
                <div className="form-group">
                    <label htmlFor='service_id'>انتخاب خدمات</label>
                    <select id='service_id' name='service_id' className='select-input'>
                        <option value='1'>چاپ دیجیتال</option>
                        <option value='2'>چاپ دیجیتال</option>
                        <option value='3'>چاپ دیجیتال</option>
                    </select>
                </div>
                {/* percentage */}
                <div className="form-group">
                    <label htmlFor='percentage'>درصد تخفیف</label>
                    <input id='percentage' name='percentage' type='text' className='input-form' />
                </div>
                {/* start date */}
                <div className='form-group datepicker'>
                    <label htmlFor='jalaliDatePicker'>تاریخ شروع</label>
                    <DatePicker onClickSubmitButton={(e)=>console.log(e.value)} />
                </div>
                {/* end date */}
                <div className='form-group datepicker'>
                    <label htmlFor='jalaliDatePicker'>تاریخ پایان</label>
                    <DatePicker onClickSubmitButton={(e)=>console.log(e.value)} />
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

export default AmazingCreate;