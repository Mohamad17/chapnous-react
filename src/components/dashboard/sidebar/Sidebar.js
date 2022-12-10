import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';


const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const submenuHandle = (e) => {
        // console.log(e.currentTarget)
        // let ele= document.getElementById(e.target.id);
        // let submenu= ele.parentElement.parentElement.nextSibling;
        setActiveMenu(activeMenu === parseInt(e.currentTarget.id) ? false : parseInt(e.currentTarget.id))
    }
    return (
        <div className='overflow-auto text-sm lg:text-base col-span-3 lg:col-span-2 bg-purple-600 text-white flex flex-col gap-y-2 h-[100vh] p-6'>
            <img src={logo} alt='logo' className='w-2/3 mx-auto' />
            <Link className="flex items-center gap-x-2">
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
                    <Link className='hover:text-amber-400'>دسته بندی</Link>
                    <Link className='hover:text-amber-400'>فرم کالا</Link>
                    <Link className='hover:text-amber-400'>برندها</Link>
                    <Link className='hover:text-amber-400'>کالاها</Link>
                    <Link className='hover:text-amber-400'>انبار</Link>
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
                <FontAwesomeIcon icon={['fas', 'envelope']} flip='horizontal' />
                <span>اعلامیه ایمیلی</span>
            </Link>
            <Link className="flex items-center gap-x-2">
                <FontAwesomeIcon icon={['far', 'comments']} flip='horizontal' />
                <span>اعلامیه پیامکی</span>
            </Link>
            {/* notifications links end */}
            {/* settings links end */}
            <section className='text-amber-300'>بخش تنظیمات</section>
            <Link className="flex items-center gap-x-2">
                <FontAwesomeIcon icon={['fas', 'cog']} flip='horizontal' />
                <span>تنظیمات</span>
            </Link>
            {/* settings links end */}
        </div>
    );
};

export default Sidebar;