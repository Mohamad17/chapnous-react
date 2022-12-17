import React , { useState , useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IsOpenSideBar } from '../../../context/dashboard/OpenSidebarProvider';
import logo from '../../../assets/images/logo.png';
import userIcon from '../../../assets/images/manchester-united.jpeg';
import { IsDarkMode } from '../../../context/dashboard/ThemePanelProvider';

const Header = () => {
    const {isOpenSidebar} = useContext(IsOpenSideBar);
    const [search , setSearch] = useState('');
    const {darkMode, setIsDarkMode}= useContext(IsDarkMode);

    const changeTheme = e=>{
        if(darkMode){
            setIsDarkMode(false);
            localStorage.setItem('darkmode', 'light');
            document.documentElement.classList.remove('dark');
        }else if(!darkMode){
            setIsDarkMode(true);
            localStorage.setItem('darkmode', 'dark');
            document.documentElement.classList.add('dark');
        }
    }
    return (
        <div id="header" className='grid grid-cols-9 gap-y-3 items-center justify-between'>
        {/* logo */}
        <img src={logo} alt='logo' className={!isOpenSidebar? 'col-span-3 order-1 md:col-span-2 w-2/3 flex': 'hidden'} />
        {/* search box */}
        <div id='searchBox' className='md:col-span-3 md:col-start-4 justify-self-center col-span-9 order-3 md:order-2 relative group flex justify-center items-center'>
            <input type='text' name='search' value={search} onChange={(e) => setSearch(e.target.val)} className='pl-8 py-1 pr-3 outline-none focus:border focus:border-purple-500 dark:bg-dark-600 dark:text-zinc-300 ring-0 rounded-full w-full mytransition' />
            <FontAwesomeIcon icon={['fas', 'search']} className='absolute left-4 text-zinc-600 dark:text-zinc-300 group-focus-within:text-purple-500 mytransition' />
        </div>
        {/* buttons and user icon */}
        <div id='avatar' className='col-span-3 col-start-7 md:col-span-2 md:col-start-8 order-2 md:order-3 justify-self-end flex items-center gap-3'>
            <section onClick={(e) => changeTheme(e)} className='squareIcon'>
                {
                    darkMode?<FontAwesomeIcon icon={['fas', 'sun']} id='sun' />:<FontAwesomeIcon icon={['fas', 'moon']} id='moon' />
                }
            </section>
            <section className='squareIcon'>
                <FontAwesomeIcon icon={['fas', 'bell']} />
            </section>
            <section className='squareIcon'>
                <FontAwesomeIcon icon={['fas', 'sign-out-alt']} flip='horizontal' />
            </section>
            <section className='flex items-center relative group justify-center rounded-full border-1 md:border-2 border-purple-500 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10'>
                <img src={userIcon} alt='user icon' className='rounded-full overflow-hidden' />
                <span className='absolute top-1/2 left-1/2 hidden group-hover:flex flex-col gap-y-3 divide-y divide-purple-300 bg-white dark:bg-dark-600 p-2 w-48 rounded-md'>
                    <div className='flex items-center gap-x-2 text-sm dark:text-zinc-200 cursor-pointer hover:text-purple-600 hover:dark:text-amber-300'>
                        <FontAwesomeIcon icon={['fas', 'edit']} />
                        <p>ویرایش حساب کاربری</p>
                    </div>
                </span>
            </section>
        </div>
    </div>
    );
};

export default Header;