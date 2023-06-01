import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Message } from '../../../../../context/dashboard/MessageAlertProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { createServicePrice, fetchServicePrice } from '../../../../../redux/service-price/servicePriceActions';
import Loading from '../../../../../shared/Loading';

const ServicePriceCreate = () => {
    const servicePriceState = useSelector(state => state.servicePriceState);
    const params = useParams();
    const dispatch = useDispatch();
    const { setMessage } = useContext(Message);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [attributeIds, setAttributeIds]= useState([]);
    const [attributeValues,setAttributeValues]= useState({});
    const [data, setData] = useState({
        "service_id": servicePriceState.servicePrice.id,
        "category_id": servicePriceState.servicePrice.category_id,
        "price": 0,
        "status": 0,
    });

    const submit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("service_id", data.service_id);
        formData.append("category_id", data.category_id);
        formData.append("price", data.price);
        formData.append("status", data.status);
        formData.append("attribute_values", attributeValues);
        dispatch(createServicePrice(formData));
        // if(response.status==='success'){
        //     setServices(await getServices());
        //     setMessage(response.message);
        //     navigate("/dashboard/service/service/");
        // }else{
        //     setErrors(response)
        // }
    }

    const onChangeAttributeValues = e => {
        setAttributeIds([...attributeIds, e.target.id]);
        setAttributeValues({...attributeValues, [e.target.id]: e.target.value});
        console.log(attributeValues)
    }

    useEffect(() => {
        if(!servicePriceState.servicePrice.length) dispatch(fetchServicePrice(params.id));
    }, [dispatch, params])

    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            {/* {console.log(data)} */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش خدمات</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to={`/dashboard/service/prices/${params.id}`}>قیمت خدمات</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ایجاد قیمت خدمات</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ایجاد قیمت خدمات - <span className='font-bold text-cyan-800 dark:text-cyan-400'>{servicePriceState.servicePrice.name}</span></p>
            {/* head page end */}
            {/* form start */}
            {
                servicePriceState.servicePrice.length<=0 ? <Loading /> :
                    <form action="#" className='form' method="post">
                        {/* attributes values */}
                        {
                            servicePriceState.servicePrice.attributes.map(attribute => {
                                let attrId= attribute.id
                                return (
                                    <div key={nanoid()} className="form-group">
                                        <label htmlFor='attribute_values'>{attribute.name}</label>
                                        <select id={attribute.id} onChange={e => onChangeAttributeValues(e)} value={attributeValues[attrId]} name='attribute_values[]' className='select-input'>
                                            {
                                                attribute.attributeValues.map(attributeValue => (
                                                    <option key={nanoid()} value={attributeValue.id}>{attributeValue.value}</option>
                                                ))
                                            }
                                        </select>
                                        {errors.attribute_values && <span className='error-validation'>{errors.attribute_values}</span>}
                                    </div>
                                )
                            })
                        }
                        {/* price */}
                        <div className="form-group">
                            <label htmlFor='price'>قیمت</label>
                            <input type='text' name='price' value={data.price} onChange={e => setData({ ...data, price: e.target.value })} className='input-form' />
                            {errors.price && <span className='error-validation'>{errors.price}</span>}
                        </div>
                        {/* status */}
                        <div className="form-group">
                            <label htmlFor='status'>وضعیت</label>
                            <select onChange={e => setData({ ...data, status: e.target.value })} value={data.status} id='status' name='status' className='select-input'>
                                <option value='0'>غیر فعال</option>
                                <option value='1'>فعال</option>
                            </select>
                            {errors.status && <span className='error-validation'>{errors.status}</span>}
                        </div>

                        <button onClick={e => submit(e)} type='button' className='submitbtn'>افزودن</button>
                    </form>
            }
            {/* form end */}
        </div>
    );
};

export default ServicePriceCreate;