import React from 'react'
import InfoBarChild from './InfoBarChild'
import Pattient from '../asset/img/Patient.png'
import Heart from '../asset/img/Heart.png'
import Shift from '../asset/img/Shift.png'
import Shift1 from '../asset/img/Shift1.png'
export default function InfoBar() {
    return (
        <div className='grid  w-full h-auto grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4  mx-auto'>
            <InfoBarChild color='bg-blue-200' imgInfo={Pattient} infoTittle='ویزیت شده '  infoDetail='85'  wrapOrnot='text-nowrap' animat='animate-fade animate-once animate-delay-300'/>
            <InfoBarChild color='bg-fuchsia-200' imgInfo={Heart} infoTittle='نام بخش' infoDetail='بخش قلب' wrapOrnot='text-nowrap' animat='animate-fade animate-once animate-delay-500'/>
            <InfoBarChild color='bg-teal-200' imgInfo={Shift} infoTittle='شیفت  حضور' infoDetail='صبح' wrapOrnot='text-nowrap' animat='animate-fade animate-once animate-delay-500'/>
            <InfoBarChild color='bg-purple-200' imgInfo={Shift1} infoTittle='روز های حضور' infoDetail='شنبه ، دوشنبه ' wrapOrnot='text-nowrap' animat='animate-fade animate-once animate-delay-700'/>
        </div>
        
    )
}
