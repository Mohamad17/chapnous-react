import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WithContext as ReactTags } from 'react-tag-input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-build-classic';
import { nanoid } from 'nanoid'
import { ServiceCategories } from '../../../../context/dashboard/ServiceCategoriesProvider';
import { setCategoryService } from '../../../../service/dashboard/services/getCategoryServices';
const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const CategoryCreate = () => {
    const [tags, setTags] = useState([]);
    const { categories } = useContext(ServiceCategories);
    // const [currentFile, setCurrentFile] = useState(null);
    // const [progress, setProgress] = useState(0);
    const [data, setData] = useState({
        name: '',
        parent_id: '',
        description: '',
        status: 1,
        image: '',
        tags: []
    });


    const handleDelete = i => {
        const newTags = tags.filter((tag, index) => index !== i);
        setTags(newTags);
        setData({ ...data, tags: newTags })
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
        setData({ ...data, tags: [...data.tags, tag] })
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
        setData({ ...data, tags: newTags })
    };

    const selectFile = (event) => {
        setData({ ...data, image: event.target.files[0] })
    };

    const submit = async(e) => {
        e.preventDefault();
        let selectedTags=[];
        console.log(data.parent_id)

        data.tags.map(tag=> selectedTags.push(tag.text));
        let saveTags= selectedTags.toString();
        let formData = new FormData();
        formData.append("image", data.image);
        formData.append("name", data.name);
        formData.append("parent_id", data.parent_id);
        formData.append("description", data.description);
        formData.append("status", data.status);
        formData.append("tags", saveTags);
        const response= await setCategoryService(formData);
        console.log(response)
    }

    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>???????? ????????</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>?????? ????????</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/service/category'>???????? ???????? ????</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>?????????? ???????? ????????</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>?????????? ???????? ????????</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post" type="multipart/form-data">
                {/* name */}
                <div className="form-group">
                    <label htmlFor='name'>?????? ???????? ????????</label>
                    <input id='name' name='name' type='text' value={data.name} onChange={e => setData({ ...data, name: e.target.value })} className='input-form' />
                </div>
                {/* parent category */}
                <div className="form-group">
                    <label htmlFor='parent_id'>???????? ????????</label>
                    <select onChange={e => setData({ ...data, parent_id: e.target.value})} value={data.parent_id} id='parent_id' name='parent_id' className='select-input'>
                        <option value=''>???????????? ???????? ????????</option>
                        {
                            categories.map(category => (
                                <option key={nanoid()} value={category.id}>{category.name}</option>
                            ))
                        }
                    </select>
                </div>
                {/* status */}
                <div className="form-group">
                    <label htmlFor='status'>??????????</label>
                    <select onChange={e => setData({ ...data, status: e.target.value })} value={data.status} id='status' name='status' className='select-input'>
                        <option value='0'>?????? ????????</option>
                        <option value='1'>????????</option>
                    </select>
                </div>
                {/* image */}
                <div className="form-group">
                    <label htmlFor='image'>??????????</label>
                    <input onChange={e => selectFile(e)} id='image' name='image' type='file' className='input-form' />
                </div>
                {/* tags */}
                <div className="col-span-8 flex flex-col gap-y-2">
                    <label>???? ????</label>
                    <ReactTags
                        tags={tags}
                        delimiters={delimiters}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        placeholder="???????????? ???? ????"
                        inputFieldPosition="bottom"
                        autocomplete
                    />
                </div>
                {/* discription */}
                <div className="textEditor col-span-8 flex flex-col gap-y-2">
                    <label>?????????? ??????????</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onChange={(event,editor) => {
                            const text = editor.getData();
                            setData({ ...data, description: text })
                        }}
                    />
                </div>
                <button onClick={e => submit(e)} type='button' className='submitbtn'>????????????</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default CategoryCreate;