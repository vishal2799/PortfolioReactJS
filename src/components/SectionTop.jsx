/* eslint-disable react/prop-types */
import { hexToRgb } from '../utils';

const SectionTop = ({ info }) => {
  return (
    <section className='p-6 pb-8 flex flex-col xl:flex-row xl:justify-between xl:items-center justify-start items-start gap-10 bg-[#ffc42708] border-b border-[#ffffff1a]'>
      <div className='flex flex-col justify-start items-start gap-4'>
        <div
          style={{
            borderColor: `rgba(${hexToRgb(info.color)}, 0.2)`,
            backgroundColor: `rgba(${hexToRgb(info.color)}, 0.05)`,
          }}
          className={`py-2 px-[10px] rounded-[100px] flex items-center justify-center border`}
        >
          <div style={{ color: info.color }} className={`text-xs`}>
            {info.label}
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-2xl lg:text-[32px] max-w-72 lg:max-w-md font-medium text-white'>
            {info.title}
          </h1>
          <p className='max-w-md text-white text-opacity-50'>{info.desc}</p>
        </div>
      </div>
      <div className='flex items-center justify-start'>
        <div
          style={{
            backgroundColor: info.color,
            borderColor: `rgba(${hexToRgb(info.color)}, 0.1)`,
          }}
          className='relative rounded-full p-3 lg:p-4 border z-[3]'
        >
          <img src={info.icon1} alt='' className='w-14 h-14 lg:w-24 lg:h-24' />
        </div>
        <div
          style={{
            backgroundColor: `rgba(${hexToRgb(info.color)}, 0.35)`,
            borderColor: `rgba(${hexToRgb(info.color)}, 0.1)`,
          }}
          className='ml-[-18px] backdrop-blur-2xl relative rounded-full p-3 lg:p-4 border z-[2]'
        >
          <img src={info.icon2} alt='' className='w-14 h-14 lg:w-24 lg:h-24' />
        </div>
        <div
          style={{
            backgroundColor: `rgba(${hexToRgb(info.color)}, 0.1)`,
            borderColor: `rgba(${hexToRgb(info.color)}, 0.1)`,
          }}
          className='ml-[-18px] backdrop-blur-2xl relative rounded-full p-3 lg:p-4 border z-[1]'
        >
          <img src={info.icon3} alt='' className='w-14 h-14 lg:w-24 lg:h-24' />
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
