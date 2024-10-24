import { Outlet, useLocation } from 'react-router-dom';
import { Avatar2, Close, Menu } from '../assets/images';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { ScrollToTop } from '../components';
import { useState } from 'react';

const MainLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state

  // Define a background gradient based on the current route
  let backgroundClass = '';

  switch (location.pathname) {
    case '/':
      backgroundClass = 'bg-gradient-to-br from-[#ffce4c] to-[#ff6321]';
      break;
    case '/about':
      backgroundClass = 'bg-gradient-to-br from-[#ffe353] to-[#ffc121]';
      break;
    case '/contact':
      backgroundClass = 'bg-gradient-to-br from-[#20d7ff] to-[#00a5cd]';
      break;
    case '/services':
      backgroundClass = 'bg-gradient-to-br from-[#2ef171] to-[#10983f]';
      break;
    case '/portfolio':
      backgroundClass = 'bg-gradient-to-br from-[#c06fff] to-[#9226e6]';
      break;
    default:
      backgroundClass = 'bg-[#8cc71b]'; // default background
  }

  return (
    <main>
      <ScrollToTop />
      <div
        className={[
          `py-6 px-5 ${backgroundClass} flex items-center justify-center h-dvh`,
        ]}
      >
        <div className='w-full h-full flex flex-col bg-[#000000d9] max-w-screen-xl mx-auto rounded-lg overflow-hidden'>
          <div className='w-full flex justify-center items-center h-12 relative px-5 py-[18px] bg-[#0003] border-b border-[#ffffff1a] text-center text-[#ffffff4d]'>
            <div className='flex absolute gap-2 left-5 items-center justify-center'>
              <div className='w-3 h-3 rounded-full bg-[#ffffff26] hover:bg-[#ffffff57]'></div>
              <div className='w-3 h-3 rounded-full bg-[#ffffff26] hover:bg-[#ffffff57]'></div>
              <div className='w-3 h-3 rounded-full bg-[#ffffff26] hover:bg-[#ffffff57]'></div>
            </div>
            Vishal Sharma
          </div>
          <div className='mockup-browser flex flex-1 relative'>
            {/* Left Sidebar */}
            <div
              className={`${
                isSidebarOpen ? 'translate-x-0 flex' : '-translate-x-full'
              } md:translate-x-0 transition-transform absolute w-full md:static top-0 left-0 z-50 md:w-2/5 lg:w-1/4 md:max-w-xs h-full bg-[#00000073] backdrop-blur-[50px] border-r border-black md:bg-[#0003] md:border-[#ffffff1a] md:flex flex-col overflow-auto`}
            >
              {/* Sidebar Header */}
              <div className='p-8 pt-10 flex flex-col items-start gap-5 border-b border-[#ffffff1a]'>
                <Link
                  to='/'
                  onClick={() => setIsSidebarOpen(false)}
                  className='p-[6px] flex justify-center items-center rounded-full border border-[#ffffff0d] bg-white bg-opacity-5'
                >
                  <img src={Avatar2} alt='avatar' className='w-12 h-12' />
                </Link>
                <div>
                  <div className='text-white text-sm font-medium'>
                    Vishal Sharma
                  </div>
                  <div className='text-white text-opacity-50 text-sm'>
                    Software Developer
                  </div>
                </div>
              </div>

              {/* Sidebar Links */}
              <div className='flex-grow overflow-auto p-5'>
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
                    className='flex justify-start items-center py-[10px] px-[14px] gap-3 rounded-lg text-white hover:bg-white hover:bg-opacity-10 text-sm font-medium'
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Sidebar Footer */}
              <div className='p-8 border-t border-white border-opacity-10'>
                <a
                  href=''
                  className='flex items-center justify-center gap-[6px] px-4 py-3 rounded-[10px] bg-white bg-opacity-10 hover:bg-opacity-20 text-sm font-medium text-white text-opacity-65 border border-white border-opacity-5'
                >
                  Book a Call
                  <FiArrowUpRight className='text-base' />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className='fixed md:hidden top-[92px] right-11 z-[101] h-10 w-10 p-[10px] rounded-xl border border-[#ffffff0d] backdrop-blur-2xl'>
              <img
                src={isSidebarOpen ? Close : Menu} // Toggle between icons
                alt='menu'
                className='w-5 h-5 opacity-65'
                onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle sidebar visibility
              />
            </div>

            {/* Right Content Area */}
            <div className='w-full md:w-3/5 lg:w-3/4 flex flex-col h-full overflow-auto content-scroll'>
              {/* Main Content */}
              <div className='flex-grow'>
                <Outlet />
              </div>

              {/* Footer (scrollable along with content) */}
              <section className='px-6 py-6 flex justify-between items-center border-t border-[#ffffff1a]'>
                <div className='text-xs font-medium text-[#ffffff4d]'>
                  © 2024, All Rights Reserved
                </div>
                <a
                  href=''
                  className='text-xs font-medium text-[#ffffff4d] hover:text-white'
                >
                  Licenses
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
