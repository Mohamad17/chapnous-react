import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams , useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WithContext as ReactTags } from 'react-tag-input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { nanoid } from 'nanoid';
import { ServiceCategories } from '../../../../context/dashboard/ServiceCategoriesProvider';
import { getServiceCategories, getServiceCategory, updateCategoryService } from '../../../../service/dashboard/services/getCategoryServices';
import { Message } from '../../../../context/dashboard/MessageAlertProvider';

const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const CategoryEdit = () => {
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState([]);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [parentId, setParentId] = useState(null);
    const [errors, setErrors] = useState([]);

    const { categories, setCategories } = useContext(ServiceCategories);
    const params = useParams();
    const {setMessage} = useContext(Message);
    const navigate= useNavigate();

    const [data, setData] = useState([]);
    // const [data, setData] = useState({
    //     name: category.name,
    //     parent_id: category.parent? category.parent.id:'',
    //     description: category.description,
    //     status: category.status,
    //     image: '',
    // });
    // const [data, setData] = useState({
    //     name: '',
    //     parent_id: '',
    //     status: 1,
    // });
    // console.log(data)

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
        setImage(event.target.files[0])
    };

    const submit = async (e) => {
        e.preventDefault();
        let selectedTags = [];
        tags.map(tag => selectedTags.push(tag.text));
        let saveTags = selectedTags.toString();
        let formData = new FormData();
        formData.append("_method", "put");
        if(image){
            formData.append("image", image);
        }
        if(parentId){
            formData.append("parent_id", parentId);
        }else{
            formData.append("parent_id", '');
        }
        formData.append("name", data.name);
        formData.append("description", description);
        formData.append("status", data.status);
        formData.append("tags", saveTags);
        console.log(formData)
        const response = await updateCategoryService(formData, category.id);
        if(response.status==='success'){
            setCategories(await getServiceCategories());
            setMessage(response.message);
            navigate("/dashboard/service/category/");
        }else{
           setErrors(response)
        }
    }

    useEffect(() => {
        const fetch = async () => {
            let objArr = [];
            // let objTemplate= {id:'', text:''};
            let response = await getServiceCategory(params.id);
            setCategory(response.data);
            setData(response.data);
            setParentId(response.parent_id)
            // setData({
            //     name: response.name,
            //     parent_id: response.parnet? response.parant.id: '',
            //     status: response.status,
            // });
            let arrTags = response.data.tags.split('،');
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
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/service/category'>دسته بندی ها</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ویرایش دسته بندی</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ویرایش {category.name}</p>
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
                    <select onChange={e => setParentId(e.target.value)} value={parentId} id='parent_id' name='parent_id' className='select-input'>
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
                    {
                        category.image !== null ? <img src={category.image} alt={category.name} className="w-1/2" /> : ""
                    }
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
                {/* discription */}
                <div className="textEditor col-span-8 flex flex-col gap-y-2">
                    <label>معرفی محصول</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={category.description}
                        onChange={(event, editor) => {
                            const text = editor.getData();
                            setDescription(text)
                        }}
                    />
                    {errors.description && <span className='error-validation'>{errors.description}</span>}
                </div>
                <button onClick={e => submit(e)} type='button' className='submitbtn'>ویرایش</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default CategoryEdit;