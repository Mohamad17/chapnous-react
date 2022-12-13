import React, { useContext } from 'react';
import { IsOpenSideBar } from '../../../context/dashboard/OpenSidebarProvider';

const Main = () => {
    const {isOpenSidebar} = useContext(IsOpenSideBar);
    return (
        <section className={isOpenSidebar?'w-4/5 lg:w-5/6 bg-zinc-200 rounded-r-[50px] main-cotainer':'bg-zinc-200 rounded-r-[25px] myTransition p-36 main-cotainer without-sidebar'}>
            dds
        </section>
    );
};

export default Main;