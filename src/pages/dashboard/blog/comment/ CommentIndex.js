import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import CommentCard from '../../../../components/dashboard/main/CommentCard';

const  CommentIndex = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* breadcrumb start */}
            <section className='flex items-center gap-x-4 self-start pb-2 border-b-2 border-purple-700 dark:border-cyan-300 dark:text-zinc-300 text-[12px] md:text-sm'>
                <Link className='hover:text-purple-600 hover:dark:text-cyan-300' to='/dashboard/content/'>صفحه اصلی</Link><FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                <p>بخش محتوی</p><FontAwesomeIcon className='text-[10px]' icon={['fas', 'angle-double-left']} />
                <p>نظرات</p>
            </section>
            {/* breadcrumb end */}
            {/* head page start */}
            <p className='dark:text-zinc-300 text-xl md:text-2xl self-start'>نظرات</p>
            {/* head page end */}
             {/* grid posts start */}
            <section className="container dark:text-zinc-200 grid grid-cols-12 gap-4">
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </section>
            {/* grid posts end */}
        </div>
    );
};

export default  CommentIndex;