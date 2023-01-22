import React, { useContext, useState , useEffect } from 'react';
import { Link , useNavigate , useParams } from 'react-router-dom';
import { Message } from '../../../../../context/dashboard/MessageAlertProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Attributes } from '../../../../../context/dashboard/AttributeProvider';
import { getAttribute, getAttributes, updateAttribute } from '../../../../../service/dashboard/services/Attribute';

const ServiceAttributeEdit = () => {
    const { setAttributes } = useContext(Attributes);
    const [data, setData] = useState([]);
    const [currentAttribute, setCurrentAttribute] = useState([]);
    const {setMessage} = useContext(Message);
    const [errors, setErrors] = useState([]);
    const navigate= useNavigate();
    const params = useParams();

    const submit = async(e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("type", data.type);
        formData.append("name", data.name);
        formData.append("_method", "put");
        if(data.unit!=='null'){
            formData.append("unit", data.unit);
        }
        const response= await updateAttribute(formData, params.id);
        if(response.status==='success'){
            setAttributes(await getAttributes());
            setMessage(response.message);
            navigate("/dashboard/service/attributes/");
        }else{
            setErrors(response)
        }
    }

    useEffect(() => {
        const fetch = async () => {
            let response = await getAttribute(params.id);
            setCurrentAttribute(response);
            setData(response);
        }
        fetch();
    }, [params])

    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/service/attributes'>فرم خدمات</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ویرایش فرم خدمات</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ویرایش {currentAttribute.name} </p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* name */}
                <div className="form-group">
                    <label htmlFor='name'>نام فرم خدمات</label>
                    <input id='name' name='name'value={data.name} onChange={e => setData({ ...data, name: e.target.value })} type='text' className='input-form' />
                    {errors.name && <span className='error-validation'>{errors.name}</span>}
                </div>
                {/* unit */}
                <div className="form-group">
                    <label htmlFor='unit'>واحد اندازه گیری فرم خدمات</label>
                    <input id='unit' name='unit' value={data.unit==='null'?'':data.unit} onChange={e => setData({ ...data, unit: e.target.value })} type='text' className='input-form' />
                    {errors.unit && <span className='error-validation'>{errors.unit}</span>}
                </div>
                {/* type */}
                <div className="form-group">
                    <label htmlFor='type'>نوع فرم خدمات</label>
                    <select  onChange={e => setData({ ...data, type: e.target.value})} value={data.type} id='type' name='type' className='select-input'>
                        <option value='0'>تکی</option>
                        <option value='1'>ترکیبی</option>
                    </select>
                    {errors.type && <span className='error-validation'>{errors.type}</span>}
                </div>
                <button onClick={e => submit(e)} type='button' className='submitbtn'>ویرایش</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default ServiceAttributeEdit;