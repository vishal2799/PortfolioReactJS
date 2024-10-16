import Avatar from './assets/images/avatar.avif';
import Smiley from './assets/images/smiley.svg';

const App = () => {
  return (
    <div className='py-6 px-5 bg-gradient-to-br from-[#ffce4c] to-[#ff6321] flex flex-col items-center justify-center h-screen'>
      <div className='w-full h-full bg-[#000000d9] rounded-lg overflow-hidden'>
        <div className='mockup-browser h-full'>
          <div className='mockup-browser-toolbar bg-[#0003] h-12 px-5 py-[18px] !my-0'>
            <div className='w-full text-center text-sm font-normal text-[#ffffff4d]'>
              Vishal Sharma
            </div>
          </div>
          <div className='relative h-full'>
            {/* The scrollable container */}
            <div className='overflow-y-auto h-full'>
              <div className='h-full'>
                <div className='flex flex-col'>
                  <section className='px-6 pt-6 pb-8 flex flex-col gap-y-6 border-b border-[#ffffff1a] bg-[#c06fff08]'>
                    <div className='w-fit p-3 rounded-full flex justify-center items-center bg-[#ffffff0d] border-[#ffffff0d]'>
                      <img src={Avatar} className='w-14 h-14' />
                    </div>
                    <div className='flex flex-col gap-y-3'>
                      <h1 className='text-2xl font-medium text-white max-w-72'>
                        👋 Hello, I&apos;m David – Crafting Creative Code!
                      </h1>
                      <p className='max-w-96 text-sm font-medium text-[#ffffff80]'>
                        As a creative developer, I blend code and design to
                        build unique, user-centric experiences. Let&apos;s turn
                        your ideas into a dynamic and engaging digital reality!
                      </p>
                    </div>
                  </section>
                  <section className='px-6 py-8 flex flex-col gap-y-3'>
                    {[1, 2].map((items) => (
                      <div key={items} className='flex flex-col gap-y-3'>
                        {[1, 2].map((item, index) => (
                          <a
                            key={index}
                            href=''
                            className='bg-[#ffc427] bg-opacity-10 hover:shadow-custom-inset border border-[#ffc4271a] text-[#ffc427] flex flex-col gap-y-[14px] relative overflow-hidden flex-1 rounded-xl justify-start items-start pt-6 pb-8 px-5'
                          >
                            <div className='py-2 px-[10px] rounded-[100px] flex items-center justify-center border border-[#ffc42733] bg-[#ffc4270d]'>
                              <div className='text-[#ffc427] text-xs'>
                                About
                              </div>
                            </div>
                            <h2 className='text-lg font-medium max-w-36'>
                              A Peek into My Creative Journey
                            </h2>
                            <div className='absolute flex items-center justify-center rounded-full right-[-8px] bottom-[-16px] border border-[#ffc4270d] bg-[#ffc4270d] p-7'>
                              <img src={Smiley} className='w-10 h-10' />
                            </div>
                            <div className='bg-[#ffc427] absolute h-1 inset-x-0 top-auto bottom-0'></div>
                            <div className='flex flex-col justify-start items-center absolute inset-x-0 top-0 bottom-auto'></div>
                          </a>
                        ))}
                      </div>
                    ))}
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
    </div>
  );
};

export default App;
