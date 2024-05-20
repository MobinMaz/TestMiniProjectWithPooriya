

import logo from '../asset/img/logo1000898www.tiktarh 1.png'
function Logo() {
  return (
    <div className='flex flex-col items-center'>
      <img src={logo} className='max-h-[102px] max-w-[95px] ' />
      <span className=' font-sans font-bold text-xl'>درمانگاه</span>
    </div>
  );
}

export default Logo;
