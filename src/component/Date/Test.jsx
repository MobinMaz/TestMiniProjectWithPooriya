import { useEffect, useState } from "react"
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import axios from 'axios'



export default function Test() {
    const [dataOfDate, setDataOfDate] = useState([]);
    //fetch kardan data(roz haye tatile) ve push karddan on be data ghabli
    const fetchData = () => {
        axios.get('https://mocki.io/v1/a16410a3-3239-4ebc-839d-25d5e7610615')
            .then(function (response) {

                setDataOfDate(response.data);


                response.data.map((res) => {

                    setHolyDays(HolyDays => [...HolyDays, res.date])
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const [HolyDays, setHolyDays] = useState([])

    //useffect barya ziad render nashodan
    useEffect(() => {
        fetchData();

    }, []);
    const [newHollyday, setNewHollyday] = useState([])
    const addHollyday = () => {

        console.log(newHollyday)
    }
    
    useEffect(() => {
        console.log('arry uppdate :')
        HolyDays.map((res) => {
            const dayinfo = `${res.year}/${res.month}/${res.day}`

            if (dayinfo !== 'undefined/undefined/undefined') {
                setNewHollyday(newHollyday => [...newHollyday, dayinfo])
            }
            console.log(dayinfo)

        })

    }, [HolyDays])
  /**
    useEffect(() => {
        console.log('arry uppdate :')
        HolyDays.filter().map((res) => {
            const dayinfo = `${res.year}/${res.month}/${res.day}`

            if (dayinfo !== 'undefined/undefined/undefined') {
                setNewHollyday(newHollyday => [...newHollyday, dayinfo])
            }
            console.log(dayinfo)

        })

    }, [HolyDays])
       */
    console.log(newHollyday)

    return (
        <>

            <DatePicker
                multiple
                numberOfMonths={1}
                value={HolyDays}
                onChange={setHolyDays}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                className=" overflow-hidden"
                onFocusedDateChange={addHollyday()}

            />
        </>
    )
}

