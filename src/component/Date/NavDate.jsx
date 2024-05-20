import React from 'react'
import { DateObject } from "react-multi-date-picker";
import DesktopDate from './TestDate';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
export default function NavDate() {

  var date = new DateObject({
    date: new Date(),
    calendar: persian,
    locale: persian_fa,
  });

  const today = date.format("dddd ")
  console.log(today);
  const clock = date.format("hh:mm ")
  return (
    <div className='w-full h-12 mx-auto my-10  rounded-xl shadow-3xl flex items-center justify-between px-1'>
      
      <div className='flex items-center gap-1' >
        <span className='text-sky-500 font-bold'>امروز</span>
        <span className="text-xs font-bold text-gray-400">({today})</span>
      </div>
      <div className='flex flex-row-reverse items-center gap-1'>
        <DesktopDate />
        <span className='text-sky-500 font-semibold'>{clock}</span>
      </div>
    </div>
  )
}
