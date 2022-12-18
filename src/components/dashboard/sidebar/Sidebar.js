import React, { useContext , useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IsOpenSideBar } from '../../../context/dashboard/OpenSidebarProvider';


const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const { isOpenSidebar, setIsOpenSidebar } = useContext(IsOpenSideBar);
    const [isOpenMobileSidebar, setIsOpenMobileSidebar] = useState(false);
    const mobileSidebar= useRef();
    const submenuHandle = (e) => {
        // console.log(e.currentTarget)
        // let ele= document.getElementById(e.target.id);
        // let submenu= ele.parentElement.parentElement.nextSibling;
        setActiveMenu(activeMenu === parseInt(e.currentTarget.id) ? false : parseInt(e.currentTarget.id))
    }

    const mobileSidbarBtnHandler = () => {
        setIsOpenSidebar(false);
        setIsOpenMobileSidebar(!isOpenMobileSidebar);
        setActiveMenu(false);
    }
    //    const wheelMinimalSidebar = e => {
    //         let trueHeightSidebar= e.currentTarget.children.item(0).clientHeight + e.currentTarget.children.item(1).clientHeight + e.currentTarget.children.item(2).clientHeight;
    //         // console.log(trueHeightSidebar)
    //         let windowHeight = window.innerHeight;
    //         let defHeigt= trueHeightSidebar - windowHeight;
    //         if(trueHeightSidebar > windowHeight) {
    //             e.currentTarget.style.transform = `translateY(-${defHeigt}px)`;
    //         }
    //    }
    const showSubmenu = e => {
        let top = e.pageY;
        let id = e.currentTarget.id;
        let menuBox = document.getElementById(`${id}2`);
        // let windowHeight = window.innerHeight;
        top = e.pageY - 25;
        menuBox.style.top = `${top}px`;
        return setShowSubMenu(e.currentTarget.id);
    }

    const sidbarBtnHandler = () => {
        setIsOpenSidebar(!isOpenSidebar);
        setIsOpenMobileSidebar(false);
        setActiveMenu(false);
    }

    const closeMobileSidebar = e => {
        if(mobileSidebar.current && isOpenMobileSidebar && !mobileSidebar.current.contains(e.target)){
            setIsOpenMobileSidebar(false);
        }
    }

    document.addEventListener('mousedown', closeMobileSidebar);

    return (
        <>
            {/* desktop menu sidebar start */}
            <section className={isOpenSidebar ? 'md:w-1/5 lg:w-1/6 h-[100vh] hidden md:flex justify-end items-center relative' : 'md:w-[5vw] h-[100vh] hidden md:flex justify-end items-center relative'}>
                {/* sidbar open start */}
                <div className={isOpenSidebar ?
                    'overflow-auto sidebar text-sm lg:text-base bg-purple-600 dark:bg-dark-600 text-white hidden md:flex flex-col gap-y-2 h-[100vh] p-6 mytransition' :
                    'overflow-auto sidebar text-sm lg:text-base bg-purple-600 dark:bg-dark-600 text-white hidden md:flex flex-col gap-y-2 h-[100vh] p-6 mytransition translate-x-56'}>
                    <img src={logo} alt='logo' className='w-2/3 mx-auto' />
                    <Link to='/dashboard/' className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={['fas', 'home']} />
                        <span>صفحه اصلی</span>
                    </Link>
                    {/* shopping links start */}
                    <section className='text-amber-300'>بخش فروش</section>
                    <section className='dropdown-group'>
                        <section id='1' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'chart-bar']} flip='horizontal' />
                                <span>ویترین</span>
                            </div>
                            <FontAwesomeIcon className={activeMenu === 1 ? '-rotate-90 mytransition' : ''} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 1 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link to='/dashboard/category/' className='hover:text-amber-400'>دسته بندی</Link>
                            <Link className='hover:text-amber-400'>فرم خدمات</Link>
                            {/* <Link className='hover:text-amber-400'>برندها</Link> */}
                            <Link to='/dashboard/service/' className='hover:text-amber-400'>خدمات</Link>
                            {/* <Link className='hover:text-amber-400'>کالاها</Link> */}
                            {/* <Link className='hover:text-amber-400'>انبار</Link> */}
                            <Link className='hover:text-amber-400'>نظرات</Link>
                        </section>
                    </section>
                    <section className='dropdown-group'>
                        <section id='2' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'bars']} />
                                <span>سفارشات</span>
                            </div>
                            <FontAwesomeIcon className={activeMenu === 2 ? '-rotate-90 mytransition' : ''} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 2 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link className='hover:text-amber-400'> جدید</Link>
                            <Link className='hover:text-amber-400'>در حال ارسال</Link>
                            <Link className='hover:text-amber-400'>پرداخت نشده</Link>
                            <Link className='hover:text-amber-400'>باطل شده</Link>
                            <Link className='hover:text-amber-400'>مرجوعی</Link>
                            <Link className='hover:text-amber-400'>تمام سفارشات</Link>
                        </section>
                    </section>
                    <section className='dropdown-group'>
                        <section id='3' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['far', 'credit-card']} />
                                <span>پرداخت ها</span>
                            </div>
                            <FontAwesomeIcon className={activeMenu === 3 ? '-rotate-90 mytransition' : ''} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 3 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link className='hover:text-amber-400'>تمام پرداخت ها</Link>
                            <Link className='hover:text-amber-400'>پرداخت های آنلاین</Link>
                            <Link className='hover:text-amber-400'>پرداخت های آفلاین</Link>
                            <Link className='hover:text-amber-400'>پرداخت در محل</Link>
                        </section>
                    </section>
                    <section className='dropdown-group'>
                        <section id='4' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'percent']} />
                                <span>تخفیف ها</span>
                            </div>
                            <FontAwesomeIcon className={activeMenu === 4 ? '-rotate-90 mytransition' : ''} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 4 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link className='hover:text-amber-400'>کپن تخفیف</Link>
                            <Link className='hover:text-amber-400'>تخفیف عمومی</Link>
                            <Link className='hover:text-amber-400'>فروش شگفت انگیز</Link>
                        </section>
                    </section>
                    <Link className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={['fas', 'shipping-fast']} flip='horizontal' />
                        <span>روش های ارسال</span>
                    </Link>
                    {/* shopping links end */}
                    {/* content links start */}
                    <section className='dropdown-group'>
                        <section id='5' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <section className='text-amber-300'>بخش محتوی</section>
                            <FontAwesomeIcon className={activeMenu === 5 ? '-rotate-90 text-amber-300 mytransition' : 'text-amber-300'} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 5 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'border-all']} />
                                <span>دسته بندی</span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'sticky-note']} />
                                <span>پست ها</span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'comment']} />
                                <span>نظرات</span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'grip-vertical']} />
                                <span>منو</span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'question']} />
                                <span>سوالات متداول</span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'pager']} />
                                <span>پیج ساز</span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'digital-tachograph']} />
                                <span>بنر ها</span>
                            </Link>
                        </section>
                    </section>
                    {/* content links end */}
                    {/* users links start */}
                    <section className='dropdown-group'>
                        <section id='6' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <section className='text-amber-300'>بخش کاربران</section>
                            <FontAwesomeIcon className={activeMenu === 6 ? '-rotate-90 text-amber-300 mytransition' : 'text-amber-300'} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 6 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'user-tie']} />
                                <span>کاربران ادمین</span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'user']} />
                                <span>مشتریان</span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'user-secret']} />
                                <span>سطوح دسترسی</span>
                            </Link>
                        </section>
                    </section>
                    {/* users links end */}
                    {/* tickets links start */}
                    <section className='dropdown-group'>
                        <section id='7' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <section className='text-amber-300'>تیکت ها</section>
                            <FontAwesomeIcon className={activeMenu === 7 ? '-rotate-90 text-amber-300 mytransition' : 'text-amber-300'} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 7 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'border-all']} />
                                <span> دسته بندی تیکت ها </span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['far', 'list-alt']} />
                                <span> اولویت تیکت ها </span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'user-check']} />
                                <span> ادمین تیکت ها </span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fab', 'medapps']} />
                                <span>تیکت های جدید</span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fab', 'readme']} />
                                <span>تیکت های باز</span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fab', 'stack-exchange']} />
                                <span>تیکت های بسته</span>
                            </Link>
                            <Link className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'ticket-alt']} />
                                <span>همه ی تیکت ها</span>
                            </Link>
                        </section>
                    </section>
                    {/* tickets links end */}
                    {/* notifications links start */}
                    <section className='text-amber-300'>بخش اطلاع رسانی</section>
                    <Link className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                        <span>اعلامیه ایمیلی</span>
                    </Link>
                    <Link className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={['far', 'comments']} />
                        <span>اعلامیه پیامکی</span>
                    </Link>
                    {/* notifications links end */}
                    {/* settings links end */}
                    <section className='text-amber-300'>بخش تنظیمات</section>
                    <Link className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={['fas', 'cog']} />
                        <span>تنظیمات</span>
                    </Link>
                    {/* settings links end */}
                </div>
                {/* sidbar open end */}

                {/* sidbar close start */}
                <div className={isOpenSidebar ?
                    'hidden' :
                    'bg-purple-600 dark:bg-dark-600 fixed z-[15000] overflow-auto sidebar text-white hidden md:flex flex-col justify-between items-center gap-y-4 h-[100vh] md:py-6 md:px-2 lg:p-6 mytransition'}>
                    <div className='flex flex-col gap-y-4'>
                        <Link to='/dashboard/' className='mt-6 text-sm'>
                            <FontAwesomeIcon icon={['fas', 'home']} />
                        </Link>
                        {/* shopping links start */}
                        <section onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={e => showSubmenu(e)} id='vitreen'>
                            <FontAwesomeIcon icon={['fas', 'chart-bar']} flip='horizontal' />
                        </section>
                        <section onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={e => showSubmenu(e)} id='orders'>
                            <FontAwesomeIcon icon={['fas', 'bars']} />
                        </section>
                        <section onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={e => showSubmenu(e)} id='payments'>
                            <FontAwesomeIcon icon={['far', 'credit-card']} />
                        </section>
                        <section onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={e => showSubmenu(e)} id='discounts'>
                            <FontAwesomeIcon icon={['fas', 'percent']} />
                        </section>
                        <Link onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={e => showSubmenu(e)} id='delivery'>
                            <FontAwesomeIcon icon={['fas', 'shipping-fast']} flip='horizontal' />
                        </Link>
                        {/* shopping links end */}
                        {/* content links start */}
                        <section onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={e => showSubmenu(e)} id='content'>
                            <FontAwesomeIcon icon={['fas', 'border-all']} />
                        </section>
                        {/* content links end */}
                        {/* users links start */}
                        <section onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={e => showSubmenu(e)} id='users'>
                            <FontAwesomeIcon icon={['fas', 'users']} />
                        </section>
                        {/* users links end */}
                        {/* tickets links start */}
                        <section onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={e => showSubmenu(e)} id='tickets'>
                            <FontAwesomeIcon icon={['fas', 'ticket-alt']} />
                        </section>
                        {/* tickets links end */}
                        {/* notifications links start */}
                        <Link onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={e => showSubmenu(e)} id='email'>
                            <FontAwesomeIcon icon={['fas', 'envelope']} />
                        </Link>
                        <Link onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={e => showSubmenu(e)} id='message'>
                            <FontAwesomeIcon icon={['far', 'comments']} />
                        </Link>
                        {/* notifications links end */}
                    </div>
                    {/* settings links end */}
                    <Link onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={e => showSubmenu(e)} id='setting'>
                        <FontAwesomeIcon icon={['fas', 'cog']} />
                    </Link>
                    {/* settings links end */}
                </div>
                {/* sidbar close end */}

                {/* sidbar button start */}
                <div onClick={sidbarBtnHandler} className={isOpenSidebar ? "sidebarBtnOpen dark:bg-purple-500 group" : "sidebarBtnClose dark:bg-purple-500 group"}>
                    <FontAwesomeIcon className={isOpenSidebar ? 'text-[8px] group-hover:text-base text-amber-200 dark:text-zinc-100 mytransition' : 'rotate-180 text-[8px] group-hover:text-base text-amber-200 dark:text-zinc-100 mytransition'} icon={['fas', 'angle-right']} />
                </div>
                {/* sidbar button end */}
                {/* vitreen modal menu start */}
                <section id='vitreen2' onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={() => setShowSubMenu('vitreen')} className={showSubMenu === 'vitreen' ? 'absolute right-1/2 text-sm w-32 bg-purple-700 dark:bg-dark-800 rounded-md shadow-md z-[15500] flex flex-col gap-y-1 mt-3 p-2' : 'hidden'}>
                    <div className='text-amber-400 pb-1 border-b border-purple-400'>ویترین</div>
                    <Link to='/dashboard/category/' className='text-white hover:text-amber-400'>دسته بندی</Link>
                    <Link className='text-white hover:text-amber-400'>فرم خدمات</Link>
                    {/* <Link className='text-white hover:text-amber-400'>برندها</Link> */}
                    {/* <Link className='text-white hover:text-amber-400'>کالاها</Link> */}
                    <Link to='/dashboard/service/' className='text-white hover:text-amber-400'>خدمات</Link>
                    {/* <Link className='text-white hover:text-amber-400'>انبار</Link> */}
                    <Link className='text-white hover:text-amber-400'>نظرات</Link>
                </section>
                {/* vitreen modal menu end */}
                {/* orders modal menu start */}
                <section id='orders2' onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={() => setShowSubMenu('orders')} className={showSubMenu === 'orders' ? 'absolute right-1/2 text-sm w-32 bg-purple-700 dark:bg-dark-800 rounded-md shadow-md z-[15500] flex flex-col gap-y-1 mt-3 p-2' : 'hidden'}>
                    <div className='text-amber-400 pb-1 border-b border-purple-400'>سفارشات</div>
                    <Link className='text-white hover:text-amber-400'> جدید</Link>
                    <Link className='text-white hover:text-amber-400'>در حال ارسال</Link>
                    <Link className='text-white hover:text-amber-400'>پرداخت نشده</Link>
                    <Link className='text-white hover:text-amber-400'>باطل شده</Link>
                    <Link className='text-white hover:text-amber-400'>مرجوعی</Link>
                    <Link className='text-white hover:text-amber-400'>تمام سفارشات</Link>
                </section>
                {/* orders modal menu end */}
                {/* payments modal menu start */}
                <section id='payments2' onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={() => setShowSubMenu('payments')} className={showSubMenu === 'payments' ? 'absolute right-1/2 text-sm w-32 bg-purple-700 dark:bg-dark-800 rounded-md shadow-md z-[15500] flex flex-col gap-y-1 mt-3 p-2' : 'hidden'}>
                    <div className='text-amber-400 pb-1 border-b border-purple-400'>پرداخت ها</div>
                    <Link className='text-white hover:text-amber-400'>تمام پرداخت ها</Link>
                    <Link className='text-white hover:text-amber-400'>پرداخت های آنلاین</Link>
                    <Link className='text-white hover:text-amber-400'>پرداخت های آفلاین</Link>
                    <Link className='text-white hover:text-amber-400'>پرداخت در محل</Link>
                </section>
                {/* payments modal menu end */}
                {/* discounts modal menu start */}
                <section id='discounts2' onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={() => setShowSubMenu('discounts')} className={showSubMenu === 'discounts' ? 'absolute right-1/2 text-sm w-32 bg-purple-700 dark:bg-dark-800 rounded-md shadow-md z-[15500] flex flex-col gap-y-1 mt-3 p-2' : 'hidden'}>
                    <div className='text-amber-400 pb-1 border-b border-purple-400'>تخفیف ها</div>
                    <Link className='text-white hover:text-amber-400'>کپن تخفیف</Link>
                    <Link className='text-white hover:text-amber-400'>تخفیف عمومی</Link>
                    <Link className='text-white hover:text-amber-400'>فروش شگفت انگیز</Link>
                </section>
                {/* discounts modal menu end */}
                {/* delivery modal menu start */}
                <span id='delivery2' className={showSubMenu === 'delivery' ? 'absolute z-[15500] right-2/3 flex justify-center items-center text-sm text-white pb-1 w-32 bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-600 rounded-md' : 'hidden'}>روش های ارسال</span>
                {/* delivery modal menu end */}
                {/* content modal menu start */}
                <section id='content2' onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={() => setShowSubMenu('content')} className={showSubMenu === 'content' ? 'absolute right-1/2 text-sm w-32 bg-purple-700 dark:bg-dark-800 rounded-md shadow-md z-[15500] flex flex-col gap-y-1 mt-3 p-2' : 'hidden'}>
                    <div className='text-amber-400 pb-1 border-b border-purple-400'>بخش محتوی</div>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'border-all']} />
                        <span>دسته بندی</span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'sticky-note']} />
                        <span>پست ها</span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'comment']} />
                        <span>نظرات</span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'grip-vertical']} />
                        <span>منو</span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'question']} />
                        <span>سوالات متداول</span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'pager']} />
                        <span>پیج ساز</span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'digital-tachograph']} />
                        <span>بنر ها</span>
                    </Link>
                </section>
                {/* content modal menu end */}
                {/* users modal menu start */}
                <section id='users2' onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={() => setShowSubMenu('users')} className={showSubMenu === 'users' ? 'absolute right-1/2 text-sm w-32 bg-purple-700 dark:bg-dark-800 rounded-md shadow-md z-[15500] flex flex-col gap-y-1 mt-3 p-2' : 'hidden'}>
                    <div className='text-amber-400 pb-1 border-b border-purple-400'>کاربران</div>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'user-tie']} />
                        <span>کاربران ادمین</span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'user']} />
                        <span>مشتریان</span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'user-secret']} />
                        <span>سطوح دسترسی</span>
                    </Link>
                </section>
                {/* users modal menu end */}
                {/* tickets modal menu start */}
                <section id='tickets2' onMouseLeave={() => setShowSubMenu(false)} onMouseEnter={() => setShowSubMenu('tickets')} className={showSubMenu === 'tickets' ? 'absolute right-1/2 text-sm w-40 bg-purple-700 dark:bg-dark-800 rounded-md shadow-md z-[15500] flex flex-col gap-y-1 mt-3 p-2' : 'hidden'}>
                    <div className='text-amber-400 pb-1 border-b border-purple-400'>تیکت ها</div>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'border-all']} />
                        <span> دسته بندی تیکت ها </span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['far', 'list-alt']} />
                        <span> اولویت تیکت ها </span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'user-check']} />
                        <span> ادمین تیکت ها </span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fab', 'medapps']} />
                        <span>تیکت های جدید</span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fab', 'readme']} />
                        <span>تیکت های باز</span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fab', 'stack-exchange']} />
                        <span>تیکت های بسته</span>
                    </Link>
                    <Link className="flex items-center gap-x-2 text-white hover:text-amber-400">
                        <FontAwesomeIcon icon={['fas', 'ticket-alt']} />
                        <span>همه ی تیکت ها</span>
                    </Link>
                </section>
                {/* tickets modal menu end */}
                {/* email modal menu start */}
                <span id='email2' className={showSubMenu === 'email' ? 'absolute z-[15500] right-2/3 flex justify-center items-center text-sm text-white pb-1 w-32 bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-600 rounded-md' : 'hidden'}>اعلامیه ایمیلی</span>
                {/* email modal menu end */}
                {/* message modal menu start */}
                <span id='message2' className={showSubMenu === 'message' ? 'absolute z-[15500] right-2/3 flex justify-center items-center text-sm text-white pb-1 w-32 bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-600 rounded-md' : 'hidden'}>اعلامیه پیامکی</span>
                {/* message modal menu end */}
                {/* setting modal menu start */}
                <span id='setting2' className={showSubMenu === 'setting' ? 'absolute z-[15500] right-2/3 flex justify-center items-center text-sm text-white pb-1 w-32 bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-600 rounded-md' : 'hidden'}>تنظیمات</span>
                {/* setting modal menu end */}
            </section>
            {/* desktop menu sidebar end */}

            {/* mobile menu sidebar start */}
            <section ref={mobileSidebar} className={isOpenMobileSidebar?'fixed h-[100vh] w-1/2 mytransition z-[25000] top-0 right-0 flex justify-end items-center md:hidden':'fixed h-[100vh] w-0 mytransition z-[25000] top-0 right-0 flex justify-end items-center md:hidden'}>
                {/* mobile sidbar open start */}
                <div className={isOpenMobileSidebar ?
                    'absolute top-0 right-0 h-[100vh] overflow-auto sidebar text-sm lg:text-base bg-purple-600 dark:bg-dark-600 myShadow text-white flex flex-col gap-y-2 w-full p-6 mytransition' :
                    'absolute top-0 right-0 h-[100vh] overflow-auto sidebar text-sm lg:text-base bg-purple-600 dark:bg-dark-600 myShadow text-white flex flex-col gap-y-2 w-full p-6 mytransition translate-x-[450px]'}>
                    <img src={logo} alt='logo' className='w-1/2 mx-auto' />
                    <Link onClick={() => setIsOpenMobileSidebar(false)} to='/dashboard/' className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={['fas', 'home']} />
                        <span>صفحه اصلی</span>
                    </Link>
                    {/* shopping links start */}
                    <section className='text-amber-300'>بخش فروش</section>
                    <section className='dropdown-group'>
                        <section id='1' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'chart-bar']} flip='horizontal' />
                                <span>ویترین</span>
                            </div>
                            <FontAwesomeIcon className={activeMenu === 1 ? '-rotate-90 mytransition' : ''} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 1 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} to='/dashboard/category/' className='hover:text-amber-400'>دسته بندی</Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>فرم خدمات</Link>
                            {/* <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>برندها</Link> */}
                            <Link to='/dashboard/service/' onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>خدمات</Link>
                            {/* <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>کالاها</Link> */}
                            {/* <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>انبار</Link> */}
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>نظرات</Link>
                        </section>
                    </section>
                    <section className='dropdown-group'>
                        <section id='2' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'bars']} />
                                <span>سفارشات</span>
                            </div>
                            <FontAwesomeIcon className={activeMenu === 2 ? '-rotate-90 mytransition' : ''} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 2 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'> جدید</Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>در حال ارسال</Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>پرداخت نشده</Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>باطل شده</Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>مرجوعی</Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>تمام سفارشات</Link>
                        </section>
                    </section>
                    <section className='dropdown-group'>
                        <section id='3' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['far', 'credit-card']} />
                                <span>پرداخت ها</span>
                            </div>
                            <FontAwesomeIcon className={activeMenu === 3 ? '-rotate-90 mytransition' : ''} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 3 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>تمام پرداخت ها</Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>پرداخت های آنلاین</Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>پرداخت های آفلاین</Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>پرداخت در محل</Link>
                        </section>
                    </section>
                    <section className='dropdown-group'>
                        <section id='4' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <div className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'percent']} />
                                <span>تخفیف ها</span>
                            </div>
                            <FontAwesomeIcon className={activeMenu === 4 ? '-rotate-90 mytransition' : ''} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 4 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>کپن تخفیف</Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>تخفیف عمومی</Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className='hover:text-amber-400'>فروش شگفت انگیز</Link>
                        </section>
                    </section>
                    <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={['fas', 'shipping-fast']} flip='horizontal' />
                        <span>روش های ارسال</span>
                    </Link>
                    {/* shopping links end */}
                    {/* content links start */}
                    <section className='dropdown-group'>
                        <section id='5' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <section className='text-amber-300'>بخش محتوی</section>
                            <FontAwesomeIcon className={activeMenu === 5 ? '-rotate-90 text-amber-300 mytransition' : 'text-amber-300'} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 5 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'border-all']} />
                                <span>دسته بندی</span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'sticky-note']} />
                                <span>پست ها</span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'comment']} />
                                <span>نظرات</span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'grip-vertical']} />
                                <span>منو</span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'question']} />
                                <span>سوالات متداول</span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'pager']} />
                                <span>پیج ساز</span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'digital-tachograph']} />
                                <span>بنر ها</span>
                            </Link>
                        </section>
                    </section>
                    {/* content links end */}
                    {/* users links start */}
                    <section className='dropdown-group'>
                        <section id='6' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <section className='text-amber-300'>بخش کاربران</section>
                            <FontAwesomeIcon className={activeMenu === 6 ? '-rotate-90 text-amber-300 mytransition' : 'text-amber-300'} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 6 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'user-tie']} />
                                <span>کاربران ادمین</span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'user']} />
                                <span>مشتریان</span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'user-secret']} />
                                <span>سطوح دسترسی</span>
                            </Link>
                        </section>
                    </section>
                    {/* users links end */}
                    {/* tickets links start */}
                    <section className='dropdown-group'>
                        <section id='7' onClick={(e) => submenuHandle(e)} className='flex items-center justify-between w-full cursor-pointer'>
                            <section className='text-amber-300'>تیکت ها</section>
                            <FontAwesomeIcon className={activeMenu === 7 ? '-rotate-90 text-amber-300 mytransition' : 'text-amber-300'} icon={['fas', 'angle-left']} />
                        </section>
                        <section className={activeMenu === 7 ? 'flex flex-col gap-y-3 mt-3 pr-2 submenu active' : 'submenu'}>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'border-all']} />
                                <span> دسته بندی تیکت ها </span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['far', 'list-alt']} />
                                <span> اولویت تیکت ها </span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'user-check']} />
                                <span> ادمین تیکت ها </span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fab', 'medapps']} />
                                <span>تیکت های جدید</span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fab', 'readme']} />
                                <span>تیکت های باز</span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fab', 'stack-exchange']} />
                                <span>تیکت های بسته</span>
                            </Link>
                            <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                                <FontAwesomeIcon icon={['fas', 'ticket-alt']} />
                                <span>همه ی تیکت ها</span>
                            </Link>
                        </section>
                    </section>
                    {/* tickets links end */}
                    {/* notifications links start */}
                    <section className='text-amber-300'>بخش اطلاع رسانی</section>
                    <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                        <span>اعلامیه ایمیلی</span>
                    </Link>
                    <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={['far', 'comments']} />
                        <span>اعلامیه پیامکی</span>
                    </Link>
                    {/* notifications links end */}
                    {/* settings links end */}
                    <section className='text-amber-300'>بخش تنظیمات</section>
                    <Link onClick={() => setIsOpenMobileSidebar(false)} className="flex items-center gap-x-2">
                        <FontAwesomeIcon icon={['fas', 'cog']} />
                        <span>تنظیمات</span>
                    </Link>
                    {/* settings links end */}
                </div>
                {/* mobile sidbar open end */}
                {/* sidbar button start */}
                <div onClick={mobileSidbarBtnHandler} className={isOpenMobileSidebar ? "sidebarBtnOpen dark:bg-purple-500 group" : "sidebarBtnClose dark:bg-purple-500 group"}>
                    <FontAwesomeIcon className={isOpenMobileSidebar ? 'text-[8px] group-hover:text-base text-amber-200 dark:text-zinc-100 mytransition' : 'rotate-180 text-[8px] group-hover:text-base text-amber-200 dark:text-zinc-100 mytransition'} icon={['fas', 'angle-right']} />
                </div>
                {/* sidbar button end */}
            </section>
            {/* mobile menu sidebar end */}
        </>
    );
};

export default Sidebar;