import { FaInstagram } from 'react-icons/fa';
import { SectionTop, ServiceCard } from '../components';
import { pageinfo } from '../constants';

const Services = () => {
  return (
    <div>
      <SectionTop info={pageinfo.services} />
      <section className='flex flex-col gap-3 border border-[#ffffff1a] px-6 pt-8 pb-10'>
        <div className='flex flex-col gap-3'>
          <ServiceCard />
        </div>
      </section>
      <section className='flex flex-col gap-10 px-6 pt-8 pb-10'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-lg font-medium text-white max-w-60'>
            🧩 Tools & Technologies Powering My Creations
          </h2>
          <p className='text-white text-opacity-50 text-sm font-medium max-w-md'>
            Explore the cutting-edge tools and technologies I use to build
            innovative and effective digital solutions, from web and mobile apps
            to seamless integrations and optimizations.
          </p>
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <a
            href=''
            className='flex flex-col justify-center items-center py-12 px-5 rounded-xl text-[#2ef171] bg-[#2ef1710d] border border-[#2ef1710d]'
          >
            <div className='relative flex flex-col justify-start items-center gap-[10px]'>
              <FaInstagram className='w-12 h-12' />
              <div className='text-xs font-medium'>HTML 5</div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
