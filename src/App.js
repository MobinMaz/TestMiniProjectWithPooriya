import Dashbord from './page/Dashbord';
import { useRoutes } from 'react-router-dom'
import MenuDesktop from './component/Menu/MenuDesktop'
import MenuMobile from './component/Menu/MenuMobile'
import routes from './routes'
function App() {
  let router = useRoutes(routes)
  return (
    <div dir='rtl' className='h-[800vh]  flex '>
      <MenuDesktop />
      <MenuMobile />
      {router}
    </div>
  );
}

export default App;
