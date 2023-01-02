import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-build-classic';

const SettingEdit = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-2 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[10px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/setting'>بخش تنظیمات</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>ویرایش تنظیمات سایت</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>ویرایش تنظیمات سایت</p>
            {/* head page end */}
            {/* form start */}
            <form action="#" className='form' method="post">
                {/* title */}
                <div className="form-group">
                    <label htmlFor='title'>عنوان سایت</label>
                    <input id='title' name='title' type='text' className='input-form' />
                </div>
                {/* logo */}
                <div className="form-group">
                    <label htmlFor='logo'>لوگو</label>
                    <input id='logo' name='logo' type='file' className='input-form' />
                </div>
                {/* icon */}
                <div className="form-group">
                    <label htmlFor='icon'>آیکون</label>
                    <input id='icon' name='icon' type='file' className='input-form' />
                </div>
                {/* key words */}
                <div className="form-group">
                    <label htmlFor='key_words'>کلمات کلیدی</label>
                    <input id='key_words' name='key_words' type='text' className='input-form' />
                </div>
                {/* description */}
                <div className="textEditor col-span-8 flex flex-col gap-y-2">
                    <label>توضیحات</label>
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
    )
};

export default SettingEdit;