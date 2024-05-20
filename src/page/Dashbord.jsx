import React from 'react'
import InfoBar from '..//component/InfoBar'
import NavDate from '../component/Date/NavDate'
import DashAppointment from '../component/DashAppointment/DashAppointment'
import CloseAppointment from '../component/Appointment/CloseAppointment'

export default function Dashbord() {
    return (
        <div className='flex mx-auto items-center  flex-col  w-full '>
            <div  className=' w-[90%] animate-fade mx-auto'>
                <NavDate/>
                <InfoBar />
            </div>
            <div className='max-w-[1000px] min-w-[340px] w-[90%] my-10 mx-auto '>
            <DashAppointment/>
            <CloseAppointment/>
            </div>
            
        </div>

    )
}
