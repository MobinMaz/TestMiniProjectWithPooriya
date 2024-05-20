import React, { useState } from 'react'
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/layouts/mobile.css"
export default function MobileDate() {
    const [value, setValue] = useState();
    console.log(value)
    return (
        <div>
            <DatePicker
                className="rmdp-mobile"
                value={value}
                onChange={(e)=>{setValue(e)
                    
                }}
                mobileButtons={[
                    {
                        className: "rmdp-button rmdp-action-button",
                        onClick: () => {setValue({})
                    },
                    },
                ]}
            />
        </div>
    )
}
