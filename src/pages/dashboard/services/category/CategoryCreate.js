import React, { useContext, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WithContext as ReactTags } from 'react-tag-input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { nanoid } from 'nanoid'
import { ServiceCategories } from '../../../../context/dashboard/ServiceCategoriesProvider';
import { setCategoryService , getServiceCategories } from '../../../../service/dashboard/services/getCategoryServices';
import { Message } from '../../../../context/dashboard/MessageAlertProvider';
const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const CategoryCreate = () => {
    const [tags, setTags] = useState([]);
    const { categories , setCategories } = useContext(ServiceCategories);
    const [data, setData] = useState({
        name: '',
        parent_id: '',
        description: '',
        status: 1,
        image: '',
    });
    const {setMessage} = useContext(Message);
    const [errors, setErrors] = useState([]);
    const navigate= useNavigate();

    const handleDelete = i => {
        const newTags = tags.filter((tag, index) => index !== i);
        setTags(newTags);
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    };

    const selectFile = (event) => {
        setData({ ...data, image: event.target.files[0] })
    };

    const submit = async(e) => {
        e.preventDefault();
        let selectedTags=[];
        tags.map(tag=> selectedTags.push(tag.text));
        let saveTags= selectedTags.toString();
        let formData = new FormData();
        formData.append("image", data.image);
        formData.append("name", data.name);
        formData.append("parent_id", data.parent_id);
        formData.append("description", data.description);
        formData.append("status", data.status);
        formData.append("tags", saveTags);
        const response= await setCategoryService(formData);
        if(response.status==='success'){
            setCategories(await getServiceCategories());
            setMessage(response.message);
            navigate("/dashboard/service/category/");
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
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/service/category'>دسته بندی ها</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ایجاد دسته بندی</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ایجاد دسته بندی</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post" encType="multipart/form-data">
                {/* name */}
                <div className="form-group">
                    <label htmlFor='name'>نام دسته بندی</label>
                    <input id='name' name='name' type='text' value={data.name} onChange={e => setData({ ...data, name: e.target.value })} className='input-form' />
                    {errors.name && <span className='error-validation'>{errors.name}</span>}
                </div>
                {/* parent category */}
                <div className="form-group">
                    <label htmlFor='parent_id'>دسته والد</label>
                    <select onChange={e => setData({ ...data, parent_id: e.target.value})} value={data.parent_id} id='parent_id' name='parent_id' className='select-input'>
                        <option value=''>انتخاب دسته والد</option>
                        {
                            categories.map(category => (
                                <option key={nanoid()} value={category.id}>{category.name}</option>
                            ))
                        }
                    </select>
                    {errors.parent_id && <span className='error-validation'>{errors.parent_id}</span>}
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
                {/* image */}
                <div className="form-group">
                    <label htmlFor='image'>تصویر</label>
                    <input onChange={e => selectFile(e)} id='image' name='image' type='file' className='input-form' />
                    {errors.image && <span className='error-validation'>{errors.image}</span>}
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
                {/* description */}
                <div className="textEditor col-span-8 flex flex-col gap-y-2">
                    <label>معرفی محصول</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onChange={(event,editor) => {
                            const text = editor.getData();
                            setData({ ...data, description: text })
                        }}
                    />
                    {errors.description && <span className='error-validation'>{errors.description}</span>}
                </div>
                <button onClick={e => submit(e)} type='button' className='submitbtn'>افزودن</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default CategoryCreate;