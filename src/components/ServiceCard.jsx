import { FiSidebar } from 'react-icons/fi';
import { servicesLabel } from '../constants';
import Label from './Label';

const ServiceCard = () => {
  return (
    <div className='px-5 pt-6 pb-8 flex flex-col flex-1 justify-start rounded-xl gap-16 relative overflow-hidden text-[#2ef171] bg-[#2ef1710d] border border-[#2ef1710d]'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <div className='p-4 flex justify-center items-center rounded-xl bg-[#2ef1710d] border border-[#2ef1710d]'>
          <FiSidebar className='text-2xl' />
        </div>
        <div className='flex flex-col gap-2 max-w-80 w-full'>
          <h2 className='text-lg font-medium'>Web Development</h2>
          <p className='text-sm font-medium text-white text-opacity-50'>
            Custom, high-performance websites that combine modern design with
            functionality, tailored to meet your specific needs.
          </p>
        </div>
      </div>
      <div className='flex justify-start items-start gap-[6px] flex-wrap max-w-80'>
        {servicesLabel.map((item, index) => (
          <Label item={item} key={index} />
        ))}
      </div>
      <div className='absolute h-1 bg-[#2ef171] inset-0 top-auto'></div>
      <div className='flex flex-col justify-start items-center absolute inset-0 bottom-auto'>
        <div className='mt-[-32px] h-16 w-60 rounded-[100px] blur-2xl bg-[#2ef17133]'></div>
      </div>
    </div>
  );
};

export default ServiceCard;
