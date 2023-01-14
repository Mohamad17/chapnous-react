import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WithContext as ReactTags } from 'react-tag-input';
const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const ServiceEdit = () => {
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
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش فروش</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/service'>خدمات</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ویرایش خدمات</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ویرایش خدمات</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* name */}
                <div className="form-group">
                    <label htmlFor='name'>نام خدمات</label>
                    <input id='name' name='name' type='text' className='input-form' />
                </div>
                {/* category */}
                <div className="form-group">
                    <label htmlFor='parent_id'>دسته بندی</label>
                    <select id='parent_id' name='parent_id' className='select-input'>
                        <option>انتخاب دسته بندی</option>
                        <option value='1'>چاپ دیجیتال</option>
                        <option value='2'>چاپ دیجیتال</option>
                        <option value='3'>چاپ دیجیتال</option>
                    </select>
                </div>
                {/* status */}
                <div className="form-group">
                    <label htmlFor='status'>وضعیت</label>
                    <select id='status' name='status' className='select-input'>
                        <option value='1'>غیر فعال</option>
                        <option value='2'>فعال</option>
                    </select>
                </div>
                {/* icon */}
                <div className="form-group">
                    <label htmlFor='icon'>آیکون</label>
                    <input id='icon' name='icon' type='file' className='input-form' />
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
                {/* introduction */}
                <div className="textEditor col-span-8 flex flex-col gap-y-2">
                    <label>معرفی محصول</label>
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
                    <label>خلاصه راهنما</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                    />
                </div>
                <button type='submit' className='submitbtn'>ویرایش</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default ServiceEdit;