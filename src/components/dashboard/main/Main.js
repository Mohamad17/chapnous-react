import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IsOpenSideBar } from '../../../context/dashboard/OpenSidebarProvider';
import Home from '../../../pages/dashboard/Home';
import CategoryCreate from '../../../pages/dashboard/shop/category/CategoryCreate';
import CategoryEdit from '../../../pages/dashboard/shop/category/CategoryEdit';
import CategoryIndex from '../../../pages/dashboard/shop/category/CategoryIndex';
import Header from './Header';

const Main = () => {
    const {isOpenSidebar} = useContext(IsOpenSideBar);

    return (
        <section className={isOpenSidebar?'flex flex-col gap-y-6 w-full md:w-4/5 lg:w-5/6 bg-zinc-200 dark:bg-dark-700 min-h-screen md:rounded-r-[50px] main-cotainer py-2 px-4 lg:p-6':'flex flex-col gap-y-6 bg-zinc-200 dark:bg-dark-700 min-h-screen md:rounded-r-[25px] myTransition py-2 px-4 lg:p-6 md:w-[95vw]'}>
            <Header />
            <Routes>
                <Route path='/dashboard/' element={<Home />} />
                {/* category routes start */}
                <Route path='/dashboard/category/' element={<CategoryIndex />} />
                <Route path='/dashboard/category/create' element={<CategoryCreate />} />
                <Route path='/dashboard/category/edit' element={<CategoryEdit />} />
                {/* category routes end */}

            </Routes>
        </section>
    );
};

export default Main;