import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <div className='flex flex-col items-center gap-y-4 px-4'>
            {/* top cards start */}
            <section className="flex flex-col md:flex-row items-center gap-y-6 justify-around w-full bg-purple-300 dark:bg-dark-600 text-zinc-700 dark:text-zinc-200 p-10 rounded-2xl">
                <div className="flex md:flex-col justify-between w-full md:justify-start items-center gap-y-6">
                    <div className='bg-purple-400 dark:bg-dark-700 h-10 w-10 flex items-center justify-center rounded-full overflow-hidden'><FontAwesomeIcon icon={['fas', 'eye']} /></div>
                    <p className='text-lg md:text-2xl aviny'>بازدید</p>
                    <p className='text-2xl md:text-4xl dastevis'>3500</p>
                </div>
                <div className="flex md:flex-col justify-between w-full md:justify-start items-center gap-y-6">
                    <div className='bg-purple-400 dark:bg-dark-700 h-10 w-10 flex items-center justify-center rounded-full overflow-hidden'><FontAwesomeIcon icon={['fas', 'store']} /></div>
                    <p className='text-lg md:text-2xl aviny'>سفارشات</p>
                    <p className='text-2xl md:text-4xl dastevis'>3500</p>
                </div>
                <div className="flex md:flex-col justify-between w-full md:justify-start items-center gap-y-6">
                    <div className='bg-purple-400 dark:bg-dark-700 h-10 w-10 flex items-center justify-center rounded-full overflow-hidden'><FontAwesomeIcon icon={['fas', 'users']} /></div>
                    <p className='text-lg md:text-2xl aviny'>کاربران</p>
                    <p className='text-2xl md:text-4xl dastevis'>3500</p>
                </div>
            </section>
            {/* top cards end */}
            {/* middle cards start */}
            <section className="grid grid-cols-8 gap-6 w-full text-zinc-700 dark:text-zinc-200 p-10 rounded-2xl">
                <div className="col-span-8 md:col-span-4 bg-purple-300 dark:bg-dark-600 rounded-md flex justify-between p-4">
                    <div className='flex flex-col items-between'>
                        <p className='text-lg md:text-2xl aviny'>فروش</p>
                        <p className='text-sm n md:text-base text-cyan-600 dark:text-cyan-300'>کل فروش امروز</p>
                        <p className='text-2xl md:text-4xl dastevis'>3500000 تومان</p>
                    </div>
                    <div className='self-center bg-purple-400 dark:bg-cyan-800 h-10 w-10 border-2 border-zinc-500 flex items-center justify-center rounded-full overflow-hidden aviny'>50%</div>
                </div>
                <div className="col-span-8 md:col-span-4 bg-cyan-300 dark:bg-cyan-900 rounded-md flex justify-between p-4">
                    <div className='flex flex-col items-between'>
                        <p className='text-lg md:text-2xl pageY'>بازدید</p>
                        <p className='text-sm n md:text-base text-cyan-600 dark:text-cyan-300'>کل بازدید امروز</p>
                        <p className='text-2xl md:text-4xl dastevis'>452</p>
                    </div>
                    <div className='self-center bg-purple-400 dark:bg-dark-700 h-10 w-10 border-2 border-zinc-500 flex items-center justify-center rounded-full overflow-hidden aviny'>50%</div>
                </div>
                <div className="col-span-8 md:col-span-4 bg-purple-300 dark:bg-dark-600 rounded-md flex justify-between p-4">
                    <div className='flex flex-col items-between'>
                        <p className='text-lg md:text-2xl aviny'>سفارشات</p>
                        <p className='text-sm n md:text-base text-cyan-600 dark:text-cyan-300'>کل سفارشات امروز</p>
                        <p className='text-2xl md:text-4xl dastevis'>14</p>
                    </div>
                    <div className='self-center bg-purple-400 dark:bg-cyan-800 h-10 w-10 border-2 border-zinc-500 flex items-center justify-center rounded-full overflow-hidden aviny'>50%</div>
                </div>
                <div className="col-span-8 md:col-span-4 bg-cyan-300 dark:bg-cyan-900 rounded-md flex justify-between p-4">
                    <div className='flex flex-col items-between'>
                        <p className='text-lg md:text-2xl aviny'>نظرات</p>
                        <p className='text-sm n md:text-base text-cyan-600 dark:text-cyan-300'>کل نظرات امروز</p>
                        <p className='text-2xl md:text-4xl dastevis'>850</p>
                    </div>
                    <div className='self-center bg-purple-400 dark:bg-dark-700 h-10 w-10 border-2 border-zinc-500 flex items-center justify-center rounded-full overflow-hidden aviny'>50%</div>
                </div>
            </section>
            {/* middle cards end */}
        </div>
    );
};

export default Home;