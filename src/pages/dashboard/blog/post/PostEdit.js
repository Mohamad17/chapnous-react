import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DatePicker } from "jalali-react-datepicker";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-build-classic';
import { WithContext as ReactTags } from 'react-tag-input';
const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const PostEdit = () => {
    const [tags, setTags] = useState([]);

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

    const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
    };

    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش محتوی</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/post'>پست ها</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ایجاد پست</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ایجاد پست</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* title */}
                <div className="form-group">
                    <label htmlFor='title'>عنوان پست</label>
                    <input id='title' name='title' type='text' className='input-form' />
                </div>
                {/* category */}
                <div className="form-group">
                    <label htmlFor='category_id'>دسته بندی</label>
                    <select id='category_id' name='category_id' className='select-input'>
                        <option>انتخاب دسته بندی</option>
                        <option value='1'>چاپ دیجیتال</option>
                        <option value='2'>چاپ دیجیتال</option>
                        <option value='3'>چاپ دیجیتال</option>
                    </select>
                </div>
                {/* image */}
                <div className="form-group">
                    <label htmlFor='image'>تصویر</label>
                    <input id='image' name='image' type='file' className='input-form' />
                </div>
                {/* status */}
                <div className="form-group">
                    <label htmlFor='status'>وضعیت</label>
                    <select id='status' name='status' className='select-input'>
                        <option value='1'>غیر فعال</option>
                        <option value='2'>فعال</option>
                    </select>
                </div>
                {/* commentable */}
                <div className="form-group">
                    <label htmlFor='commentable'>امکان درج نظر</label>
                    <select id='commentable' name='commentable' className='select-input'>
                        <option value='1'>قابل درج نظر</option>
                        <option value='2'>غیر قابل درج نظر</option>
                    </select>
                </div>
                {/* publish date */}
                <div className='form-group datepicker'>
                    <label htmlFor='publish_date'>تاریخ انتشار</label>
                    <DatePicker onClickSubmitButton={(e) => console.log(e.value)} />
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
                        handleTagClick={handleTagClick}
                        inputFieldPosition="bottom"
                        autocomplete
                    />
                </div>
                {/* body */}
                <div className="textEditor col-span-8 flex flex-col gap-y-2">
                    <label>متن</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                    />
                </div>
                {/* summery */}
                <div className="textEditor col-span-8 flex flex-col gap-y-2">
                    <label>خلاصه متن</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                    />
                </div>
                <button type='submit' className='submitbtn'>افزودن</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default PostEdit;