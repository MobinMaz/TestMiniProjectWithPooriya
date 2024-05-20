import Dashbord from './page/Dashbord'
import EditeProf from './page/EditeProf'
import Appointment from './page/Appointment'
import Ticket from './page/Ticket'
let routes = [
    {path:'/',element:<Dashbord/>},
    {path:'/EditeProf',element:<EditeProf/>},
    {path:'/Appointment',element:<Appointment/>},
    {path:'/Ticket',element:<Ticket/>},
]
export default routes