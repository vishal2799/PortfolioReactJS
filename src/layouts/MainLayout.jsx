import { Outlet, useLocation } from 'react-router-dom';
import { Avatar2, Menu } from '../assets/images';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();

  // Define a background gradient based on the current route
  let backgroundClass = '';

  switch (location.pathname) {
    case '/':
      backgroundClass = 'bg-gradient-to-r from-blue-500 to-purple-500';
      break;
    case '/about':
      backgroundClass = 'bg-gradient-to-r from-green-400 to-blue-500';
      break;
    case '/contact':
      backgroundClass = 'bg-gradient-to-r from-green-400 to-blue-500';
      break;
    // Add more routes and their respective backgrounds here
    default:
      backgroundClass = 'bg-gradient-to-r from-gray-500 to-gray-700'; // default background
  }

  return (
    <div
      className={`py-6 px-5 ${backgroundClass} flex items-center justify-center h-screen`}
    >
      <div className='w-full h-full max-w-screen-xl mx-auto bg-[#000000d9] rounded-lg overflow-hidden'>
        <div className='mockup-browser h-full flex'>
          {/* Left Sidebar */}
          <div className='hidden md:flex flex-col w-2/5 lg:w-1/4 max-w-xs border-r border-[#ffffff1a] bg-[#0003] overflow-auto'>
            {/* Sidebar Header */}
            <div className='p-8 pt-10 flex flex-col items-start gap-5 border-b border-[#ffffff1a]'>
              <Link
                to='/'
                className='p-[6px] flex justify-center items-center rounded-full border border-[#ffffff0d] bg-white bg-opacity-5'
              >
                <img src={Avatar2} alt='avatar' className='w-12 h-12' />
              </Link>
              <div>
                <div className='text-white text-sm font-medium'>
                  Vishal Sharma
                </div>
                <div className='text-white text-opacity-50 text-sm'>
                  Creative Developer
                </div>
              </div>
            </div>

            {/* Sidebar Links */}
            <div className='flex-grow overflow-auto p-5'>
              <Link
                to='/about'
                className='flex justify-start items-center py-[10px] px-[14px] gap-3 rounded-lg text-white text-sm font-medium'
              >
                About
              </Link>
              <Link
                to=''
                className='flex justify-start items-center py-[10px] px-[14px] gap-3 rounded-lg text-white text-sm font-medium'
              >
                Projects
              </Link>
              <Link
                to='/contact'
                className='flex justify-start items-center py-[10px] px-[14px] gap-3 rounded-lg text-white text-sm font-medium'
              >
                Contact
              </Link>
            </div>

            {/* Sidebar Footer */}
            <div className='p-8 border-t border-white border-opacity-10'>
              <a
                href=''
                className='flex items-center justify-center gap-[6px] px-4 py-3 rounded-[10px] bg-white bg-opacity-10 text-sm font-medium text-white text-opacity-65 border border-white border-opacity-5'
              >
                Book a Call
                <FiArrowUpRight className='text-base' />
              </a>
            </div>
          </div>

          {/* Right Content Area */}
          <div className='w-full md:w-3/5 lg:w-3/4 flex flex-col h-full overflow-auto'>
            {/* Mobile Menu Button */}
            <div className='fixed md:hidden top-[92px] right-11 z-[101] h-10 w-10 p-[10px] rounded-xl border border-[#ffffff0d] backdrop-blur-2xl'>
              <img src={Menu} alt='menu' className='w-5 h-5 opacity-65' />
            </div>

            {/* Main Content */}
            <div className='flex-grow'>
              <Outlet />
            </div>

            {/* Footer (scrollable along with content) */}
            <section className='px-6 py-6 flex justify-between items-center border-t border-[#ffffff1a]'>
              <div className='text-xs font-medium text-[#ffffff4d]'>
                © 2024, All Rights Reserved
              </div>
              <a href='' className='text-xs font-medium text-[#ffffff4d]'>
                Licenses
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
