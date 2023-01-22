import React, { useContext, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { Message } from '../../../../../context/dashboard/MessageAlertProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AttributeValue } from '../../../../../context/dashboard/AttributeValueProvider';
import { Attributes } from '../../../../../context/dashboard/AttributeProvider';
import { nanoid } from 'nanoid'
import { getAttributeValues, setAttributeValue } from '../../../../../service/dashboard/services/AttributeValue';

const ServiceAttributeValueCreate = () => {
    const { setAttributeValues } = useContext(AttributeValue);
    const { attributes } = useContext(Attributes);
    const [data, setData] = useState({
        value: '',
        type: 0,
        select_type: 0,
        status: 1,
        attribute_id: 1,
    });
    const {setMessage} = useContext(Message);
    const [errors, setErrors] = useState([]);
    const navigate= useNavigate();

    const submit = async(e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("type", data.type);
        formData.append("value", data.value);
        formData.append("select_type", data.select_type);
        formData.append("status", data.status);
        formData.append("attribute_id", data.attribute_id);
        console.log(formData)
        const response= await setAttributeValue(formData);
        if(response.status==='success'){
            setAttributeValues(await getAttributeValues());
            setMessage(response.message);
            navigate("/dashboard/service/attributes/value/");
        }else{
            setErrors(response)
        }
    }

    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link to='/dashboard/service/attributes'>فرم خدمات</Link><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/service/attributes/value'>مقادیر فرم خدمات</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ایجاد مقادیر فرم خدمات</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ایجاد مقادیر فرم خدمات</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* value */}
                <div className="form-group">
                    <label htmlFor='value'>مقدار فرم خدمات</label>
                    <input id='value' name='value' value={data.value} onChange={e => setData({ ...data, value: e.target.value })} type='text' className='input-form' />
                    {errors.value && <span className='error-validation'>{errors.value}</span>}
                </div>
                {/* attribute */}
                <div className="form-group">
                    <label htmlFor='attribute_id'>فرم خدمت</label>
                    <select onChange={e => setData({ ...data, attribute_id: e.target.value})} value={data.attribute_id} id='attribute_id' name='attribute_id' className='select-input'>
                        {
                            attributes.map(attribute=> (
                                <option key={nanoid()} value={attribute.id}>{attribute.name}</option>

                            ))
                        }
                    </select>
                    {errors.attribute_id && <span className='error-validation'>{errors.attribute_id}</span>}
                </div>
                {/* status */}
                <div className="form-group">
                    <label htmlFor='status'>وضعیت</label>
                    <select onChange={e => setData({ ...data, status: e.target.value})} value={data.status} id='status' name='status' className='select-input'>
                        <option value='0'>غیر فعال</option>
                        <option value='1'>فعال</option>
                    </select>
                    {errors.status && <span className='error-validation'>{errors.status}</span>}
                </div>
                {/* type */}
                <div className="form-group">
                    <label htmlFor='type'>نوع</label>
                    <select onChange={e => setData({ ...data, type: e.target.value})} value={data.type} id='type' name='type' className='select-input'>
                        <option value='0'>ساده</option>
                        <option value='1'>چند مقداره</option>
                    </select>
                    {errors.type && <span className='error-validation'>{errors.type}</span>}
                </div>
                {/* select type */}
                <div className="form-group">
                    <label htmlFor='select_type'>نوع انتخاب</label>
                    <select onChange={e => setData({ ...data, select_type: e.target.value})} value={data.select_type} id='select_type' name='select_type' className='select-input'>
                        <option value='0'>انتخاب تکی</option>
                        <option value='1'>انتخاب چند تایی</option>
                    </select>
                    {errors.select_type && <span className='error-validation'>{errors.select_type}</span>}
                </div>
                <button onClick={e => submit(e)} type='button' className='submitbtn'>افزودن</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default ServiceAttributeValueCreate;