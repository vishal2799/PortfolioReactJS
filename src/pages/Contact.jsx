import { FiArrowUpRight } from 'react-icons/fi';
import { SectionTop } from '../components';
import { contactFollow, pageinfo } from '../constants';
import { hexToRgb } from '../utils';
import { Phone } from '../assets/images';

const Contact = () => {
  return (
    <div>
      <SectionTop info={pageinfo.contact} />
      <section className='px-6 pt-8 pb-10 flex flex-col gap-3 xl:grid xl:grid-cols-2'>
        <div className='px-5 pt-6 pb-8 flex flex-col relative rounded-xl gap-8 flex-1 bg-[#20d7ff0d] border border-[#20d7ff0d]'>
          <div className='flex flex-col max-w-sm gap-3'>
            <h2 className='text-lg lg:text-2xl font-medium text-white'>
              📤 Get In Touch
            </h2>
            <p className='text-white text-opacity-50 text-sm font-medium'>
              Have a question or want to start a project? Contact me, and let’s
              make your ideas come to life!
            </p>
          </div>
          <div>
            <form action='' className='flex flex-col gap-2'>
              <input
                type='text'
                className='py-[18px] px-5 h-[52px] rounded-[10px] w-full outline-none text-sm text-white bg-[#20d7ff0d] hover:bg-[#20d6ff2c] border border-[#20d7ff1a]'
                placeholder='Your name'
              />
              <input
                type='text'
                className='py-[18px] px-5 h-[52px] rounded-[10px] w-full outline-none text-sm text-white bg-[#20d7ff0d] hover:bg-[#20d6ff2c] border border-[#20d7ff1a]'
                placeholder='Your name'
              />
              <textarea
                rows={5}
                placeholder='How can I help you?'
                className='py-[18px] px-5 rounded-[10px] w-full text-sm outline-none text-white bg-[#20d7ff0d] hover:bg-[#20d6ff2c] border border-[#20d7ff1a]'
              ></textarea>
              <input
                type='submit'
                value='Send a Message'
                className='p-4 rounded-[10px] text-[#20d7ff] outline-none bg-[#20d7ff33] hover:bg-[#20d6ff41] border border-[#20d7ff1a] cursor-pointer'
              />
            </form>
          </div>
          <div className='flex flex-col justify-start items-center absolute inset-x-0 top-0 bottom-auto'>
            <div className='w-60 h-16 rounded-[100px] mt-[-32px] blur-2xl'></div>
          </div>
        </div>
        <div className='flex flex-col gap-3 flex-initial xl:justify-between'>
          <div className='flex relative flex-col gap-5 rounded-xl py-6 px-5 bg-[#20d7ff0d] border border-[#20d7ff0d]'>
            <h3 className='text-base md:text-xl font-medium text-white'>
              🔹 Follow Me
            </h3>
            <div className='grid grid-cols-2 gap-[6px]'>
              {contactFollow.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className='flex flex-col justify-center items-center py-6 px-5 rounded-[10px] bg-[#20d7ff0d] hover:bg-[#20d6ff1f] border border-[#ffffff0d]'
                >
                  <item.icon className='w-7 h-7 text-[#20d7ff]' />
                </a>
              ))}
            </div>
          </div>
          <div className='overflow-hidden flex flex-col justify-start items-start relative px-5 py-6 gap-6 rounded-xl bg-[#20d7ff1a] border border-[#20d7ff1a]'>
            <div className='flex flex-col gap-[10px] max-w-60 w-full'>
              <h3 className='text-base md:text-xl font-medium text-white'>
                🦋 Book a Call
              </h3>
              <p className='text-sm font-medium text-white text-opacity-50'>
                Have a question or want to start a project? Contact me, and
                let’s make your ideas come to life!
              </p>
            </div>
            <a
              href=''
              className='flex items-center justify-center gap-[6px] px-4 py-3 rounded-[10px] bg-white bg-opacity-10 hover:bg-opacity-25 text-sm font-medium text-white text-opacity-65 border border-white border-opacity-5'
            >
              Book a Call
              <FiArrowUpRight className='text-base' />
            </a>
            <div className='absolute inset-auto bottom-[-14px] right-[-14px]'>
              <div
                style={{
                  borderColor: `rgba(${hexToRgb('#20d7ff')}, 0.05)`,
                  backgroundColor: `rgba(${hexToRgb('#20d7ff')}, 0.05)`,
                }}
                className={`flex items-center justify-center rounded-full border p-7 lg:p-12`}
              >
                <img src={Phone} className='w-12 h-12 lg:w-14 lg:h-14' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
