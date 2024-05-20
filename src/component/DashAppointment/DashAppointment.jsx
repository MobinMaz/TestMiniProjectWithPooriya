import React from 'react'

export default function DashAppointment() {
  return (
    <div className='w-full'>
      <div className='w-full flex items-center justify-between '>
        <div className='flex gap-2'>
          <span>تعداد نوبت های امروز</span>
          <span class="inline-flex items-center rounded-[50%] bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">8</span>
        </div>
        <span className='text-sky-500 cursor-pointer'>مشاهده همه</span>
      </div>

    </div>
  )
}
