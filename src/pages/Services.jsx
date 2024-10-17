import { SectionTop, ServiceCard } from '../components';
import { pageinfo, servicesSkills } from '../constants';

const Services = () => {
  return (
    <div>
      <SectionTop info={pageinfo.services} />
      <section className='flex flex-col gap-3 border border-[#ffffff1a] px-6 pt-8 pb-10'>
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-3'>
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </section>
      <section className='flex flex-col gap-10 px-6 pt-8 pb-10'>
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4'>
          <h2 className='text-lg lg:text-2xl font-medium text-white max-w-60 lg:max-w-80'>
            🧩 Tools & Technologies Powering My Creations
          </h2>
          <p className='text-white text-opacity-50 text-sm font-medium max-w-md'>
            Explore the cutting-edge tools and technologies I use to build
            innovative and effective digital solutions, from web and mobile apps
            to seamless integrations and optimizations.
          </p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
          {servicesSkills.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className='flex flex-col justify-center items-center py-12 px-5 rounded-xl text-[#2ef171] bg-[#2ef1710d] hover:bg-[#2ef1722d] border border-[#2ef1710d]'
            >
              <div className='relative flex flex-col justify-start items-center gap-[10px]'>
                <item.icon className='w-12 h-12' />
                <div className='text-xs font-medium'>{item.label}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
