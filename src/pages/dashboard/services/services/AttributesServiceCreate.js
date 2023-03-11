import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { editServiceAttributes, getService, getServiceAttributes } from '../../../../service/dashboard/services/Service';
import { Message } from '../../../../context/dashboard/MessageAlertProvider';
import { MultiSelect } from "react-multi-select-component";
import { getAttributesForOptions } from '../../../../service/dashboard/services/Attribute';

const AttributesServiceCreate = () => {
    const params = useParams();
    const [errors, setErrors] = useState([]);
    const [service, setService] = useState([]);
    const [serviceAttributes, setServiceAttributes] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const { setMessage } = useContext(Message);
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        let attributesId= [];
        serviceAttributes.map(attribute => {
            return attributesId.push(attribute.value);
        })
        const response = await editServiceAttributes({"attributes" : attributesId}, params.id);
        if (response.status === 'success') {
            setMessage(response.message);
            navigate("/dashboard/service/service/");
        } else {
            setErrors(response)
        }
    }
    useEffect(() => {
        const service = async () => {
            let response = await getService(params.id);
            setService(response);
        }
        const serviceAttributes = async () => {
            let serviceAttributes = await getServiceAttributes(params.id);
            setServiceAttributes(serviceAttributes);
        }
        const attributes = async () => {
            let attributes = await getAttributesForOptions();
            setAttributes(attributes);
        }
        service();
        serviceAttributes();
        attributes();
    }, [params])

    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/service/service/'>خدمات</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ایجاد ویژگی های خدمات</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'><span>ایجاد ویژگی های خدمات - </span><span className='font-bold text-cyan-700 dark:text-cyan-400'>{service.name}</span></p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* name */}
                <div className="form-group">
                    <label htmlFor='name'>ویژگی های خدمت</label>
                    <MultiSelect
                        options={attributes}
                        value={serviceAttributes}
                        onChange={setServiceAttributes}
                        className="dark"
                        labelledBy="Service Attributes"
                    />
                    {errors && <span className='error-validation'>{errors}</span>}
                </div>

                <button onClick={e => submit(e)} type='button' className='submitbtn'>افزودن</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default AttributesServiceCreate;