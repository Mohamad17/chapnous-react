import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WithContext as ReactTags } from 'react-tag-input';
const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const PostCreate = () => {
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
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/post'>مقاله ها</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ایجاد مقاله</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ایجاد مقاله</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* name */}
                <div className="form-group">
                    <label htmlFor='name'>نام مقاله</label>
                    <input id='name' name='name' type='text' className='input-form' />
                </div>
                {/* parent post */}
                <div className="form-group">
                    <label htmlFor='parent_id'>دسته والد</label>
                    <select id='parent_id' name='parent_id' className='select-input'>
                        <option>انتخاب دسته والد</option>
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
                {/* image */}
                <div className="form-group">
                    <label htmlFor='image'>تصویر</label>
                    <input id='image' name='image' type='file' className='input-form' />
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
                <button type='submit' className='submitbtn'>افزودن</button>
            </form>
            {/* form end */}
        </div>
    );
};

export default PostCreate;