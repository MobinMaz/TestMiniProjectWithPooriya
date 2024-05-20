import React from 'react'

export default function InfoBarChild(props) {
    return (
        <div className={`xl:w-[280px] lg:w-48 clg:w-56 md:w-64 sm:w-64 w-40 ${props.color} ${props.animat} rounded-[24px] px-4 pr-3 gap-x-3 lg:gap-7 sm:py-5 lg:py-4 lg:px-6 justify-center items-center grid grid-cols-1 md:grid-cols-2 `}>
            <img src={props.imgInfo} className='w-16 sm:w-20 md:w-28 lg:w-28 mx-auto' />
            <div className='flex items-center justify-center flex-col '>
                <p className={`font-sans font-bold text-xs sm:text-sm lg:text-base xl:text-xl ml-2 ${props.wrapOrnot}`}>{props.infoTittle}</p>
                
                <span className={`font-bold text-xl sm:text-base text-blue-400 ml-2 mt-1 ${props.wrapOrnot}`}>{props.infoDetail} </span>
            </div>
        </div>
    )
}
