import React from 'react'
import DatePicker, { DateObject } from "react-multi-date-picker";
import opacity from "react-element-popper/animations/opacity"
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import './DateStyle.css'

export default function DesktopDate() {

    const weekDays = [
        ["شنبه", "ش"], //[["نام","نام کوتاه"], ... ]
        ["یکشنبه", "ی"],
        ["دوشنبه", "د"],
        ["سه شنبه", "س"],
        ["چهارشنبه", "چ"],
        ["پنجشنبه", "پ"],
        ["جمعه", "ج"]
      ]
    return (
        <div>

            <DatePicker
            weekDays={weekDays}
                animations={[
                    opacity({ from: 0.1, to: 1, duration: 500 })
                ]}
                inputClass='custom-input' calendar={persian} locale={persian_fa}
                className='custom-calender '
                />


        </div>
    )
}
