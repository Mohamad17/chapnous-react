import React, { useEffect , useState , useContext } from 'react';
import { useParams , Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateService, getService } from '../../../../service/dashboard/services/Service';
import { Message } from '../../../../context/dashboard/MessageAlertProvider';


const AttributesServiceCreate = () => {
    const params= useParams();
    const [errors, setErrors] = useState([]);
    const [service, setService] = useState([]);
    const [data, setData] = useState([]);
    const { setMessage } = useContext(Message);
    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("name", data.name);
        const response = await updateService(formData, params.id);
        if (response.status === 'success') {
            setMessage(response.message);
            navigate("/dashboard/service/service/");
        } else {
            setErrors(response)
        }
    }
    useEffect(() => {
        const fetch = async () => {
            let response = await getService(params.id);
            setService(response);
        }
        fetch();
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
            <form action="#" className='form' method="post" encType="multipart/form-data">
                {/* name */}
                <div className="form-group">
                    <label htmlFor='name'>نام خدمت</label>
                    <input id='name' name='name' type='text' value={data.name} onChange={e => setData({ ...data, name: e.target.value })} className='input-form' />
                    {errors.name && <span className='error-validation'>{errors.name}</span>}
                </div>
                
                <button onClick={e => submit(e)} type='button' className='submitbtn'>افزودن</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default AttributesServiceCreate;