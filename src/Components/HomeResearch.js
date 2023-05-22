import React from "react";
import Research from "../Images/Research.png";

const HomeResearch = () => {
    return (
        <div className=' bg-gray-700 flex-col items-center justify-center inline-flex px-5 py-10 border-t border-t-gray-600 w-full h-4/5'>
            <div className='flex-1 mb-5 px-3 flex flex-col items-center justify-center w-full h-full'>
                <a class='shadow-2xl flex flex-col items-center border rounded-lg shadow md:flex-row w-2/3 max-sm:w-72 border-gray-700  bg-gray-900 '>
                    <img
                        class='object-cover w-full rounded-t-lg h-96 md:max-h-full max-w-xl md:rounded-none md:rounded-l-lg'
                        src='https://media.istockphoto.com/id/1406039093/photo/close-up-of-the-elevator-call-buttons-up-and-down-with-braille-arrow-of-the-elevator-shows.jpg?b=1&s=170667a&w=0&k=20&c=AMulKRsLYsn8a4tyrgcWoaCT2Kq6qa6P22t8cYp0K1o='
                        alt='Research JPG'
                    />
                    <div class='flex flex-col justify-between p-4 leading-normal'>
                        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Research and Development</h5>
                        <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                            Laxnar is focused on accomplishing perfect results with its expertise and vast technical knowledge. Therefore, all Laxnar
                            products are developed by expert Indian engineers and produced in Laxnar facilities. Laxnar does not compromise on quality
                            during the production phase and prefers the finest quality starting right from the designing phase.
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default HomeResearch;
