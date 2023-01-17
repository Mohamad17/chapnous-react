import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WithContext as ReactTags } from 'react-tag-input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { nanoid } from 'nanoid';
import { ServiceCategories } from '../../../../context/dashboard/ServiceCategoriesProvider';
import { Services } from '../../../../context/dashboard/ServicesProvider';
import { getServices, updateService, getService } from '../../../../service/dashboard/services/Service';
import { Message } from '../../../../context/dashboard/MessageAlertProvider';
const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const ServiceEdit = () => {
    const [tags, setTags] = useState([]);
    const [service, setService] = useState([]);
    const { categories } = useContext(ServiceCategories);

    const [introduction, setIntroduction] = useState('');
    const [summary, setSummary] = useState('');
    const [icon, setIcon] = useState('');
    const [errors, setErrors] = useState([]);

    const { setServices } = useContext(Services);
    const params = useParams();
    const { setMessage } = useContext(Message);
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
        console.log(tags)
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    };

    const selectFile = (event) => {
        setIcon(event.target.files[0]);
    };

    const submit = async (e) => {
        e.preventDefault();
        let selectedTags = [];
        tags.map(tag => selectedTags.push(tag.text));
        let saveTags = selectedTags.toString();
        let formData = new FormData();
        formData.append("_method", "put");
        if (icon) {
            formData.append("icon", icon);
        }
        formData.append("name", data.name);
        formData.append("category_id", data.category_id);
        formData.append("introduction", introduction);
        formData.append("summary", summary);
        formData.append("status", data.status);
        formData.append("tags", saveTags);
        const response = await updateService(formData, params.id);
        if (response.status === 'success') {
            setServices(await getServices());
            setMessage(response.message);
            navigate("/dashboard/service/service/");
        } else {
            setErrors(response)
        }
    }

    useEffect(() => {
        const fetch = async () => {
            let objArr = [];
            let response = await getService(params.id);
            setService(response);
            setData(response);
            let arrTags = response.tags.split('،');
            arrTags.map(tag => (
                objArr.push({ id: tag, text: tag })
            ))
            setTags(objArr);
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
                <p>ویرایش خدمات</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ویرایش {service.name}</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post" encType="multipart/form-data">
                {/* name */}
                <div className="form-group">
                    <label htmlFor='name'>نام خدمت</label>
                    <input id='name' name='name' type='text' value={data.name} onChange={e => setData({ ...data, name: e.target.value })} className='input-form' />
                    {errors.name && <span className='error-validation'>{errors.name}</span>}
                </div>
                {/* category */}
                <div className="form-group">
                    <label htmlFor='category_id'>دسته بندی</label>
                    <select onChange={e => setData({ ...data, category_id: e.target.value })} value={data.category_id} id='category_id' name='category_id' className='select-input'>
                        {
                            categories.map(category => (
                                <option key={nanoid()} value={category.id}>{category.name}</option>
                            ))
                        }
                    </select>
                    {errors.category_id && <span className='error-validation'>{errors.category_id}</span>}
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
                {/* icon */}
                <div className="form-group">
                    <label htmlFor='icon'>تصویر</label>
                    <input onChange={e => selectFile(e)} id='icon' name='icon' type='file' className='input-form' />
                    {errors.icon && <span className='error-validation'>{errors.icon}</span>}
                </div>
                {/* tags */}
                <div className="col-span-8 flex flex-col gap-y-2">
                    <label>تگ ها</label>
                    <ReactTags
                        tags={tags}
                        delimiters={delimiters}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        placeholder="افزودن تگ ها"
                        inputFieldPosition="bottom"
                        autocomplete
                    />
                    {errors.tags && <span className='error-validation'>{errors.tags}</span>}
                </div>
                {/* introduction */}
                <div className="textEditor col-span-8 flex flex-col gap-y-2">
                    <label>معرفی محصول</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={service.introduction}
                        onChange={(event, editor) => {
                            const text = editor.getData();
                            setIntroduction(text)
                        }}
                    />
                    {errors.introduction && <span className='error-validation'>{errors.introduction}</span>}
                </div>
                {/* summary */}
                <div className="textEditor col-span-8 flex flex-col gap-y-2">
                    <label>خلاصه راهنما</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={service.summary}
                        onChange={(event, editor) => {
                            const text = editor.getData();
                            setSummary(text)
                        }}
                    />
                    {errors.summary && <span className='error-validation'>{errors.summary}</span>}
                </div>
                <button onClick={e => submit(e)} type='button' className='submitbtn'>ویرایش</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default ServiceEdit;