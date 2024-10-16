import Avatar from './assets/images/avatar.avif';
import HomeCard from './components/HomeCard';
import { homeCards } from './constants';

const App = () => {
  return (
    <div className='py-6 px-5 bg-gradient-to-br from-[#ffce4c] to-[#ff6321] flex flex-col items-center justify-center h-screen'>
      <div className='w-full h-full bg-[#000000d9] rounded-lg overflow-hidden'>
        <div className='mockup-browser h-full flex flex-col'>
          <div className='mockup-browser-toolbar bg-[#0003] h-12 px-5 py-[18px] !my-0'>
            <div className='w-full text-center text-sm font-normal text-[#ffffff4d]'>
              Vishal Sharma
            </div>
          </div>
          <div className='relative h-full overflow-y-auto'>
            {/* The scrollable container */}
            <div className='flex flex-col h-full justify-between'>
              <div>
                <section className='px-6 pt-6 pb-8 flex flex-col gap-y-6 border-b border-[#ffffff1a] bg-[#c06fff08]'>
                  <div className='w-fit p-3 rounded-full flex justify-center items-center bg-[#ffffff0d] border-[#ffffff0d]'>
                    <img src={Avatar} className='w-14 h-14' />
                  </div>
                  <div className='flex flex-col gap-y-3'>
                    <h1 className='text-2xl font-medium text-white max-w-72'>
                      👋 Hello, I&apos;m Vishal – Crafting Creative Code!
                    </h1>
                    <p className='max-w-96 text-sm font-medium text-[#ffffff80]'>
                      As a creative developer, I blend code and design to build
                      unique, user-centric experiences. Let&apos;s turn your
                      ideas into a dynamic and engaging digital reality!
                    </p>
                  </div>
                </section>
                <section className='px-6 py-8 flex flex-col gap-y-3'>
                  <div className='flex flex-col gap-y-3'>
                    {homeCards.map((item, index) => (
                      <HomeCard key={index} item={item} />
                    ))}
                  </div>
                </section>
              </div>
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
    </div>
  );
};

export default App;
