import { FaAngleLeft } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import { Project1, Project2, Project3 } from '../assets/images';
import { Link } from 'react-router-dom';

const SinglePortfolio = () => {
  return (
    <div>
      <section className='flex flex-col justify-start items-start gap-8 p-6 pb-8 bg-[#ffc42708] border-b border-[#ffffff1a]'>
        <Link
          to='/portfolio'
          className='flex justify-center items-center gap-[6px] opacity-65 py-1 px-[2px] text-white'
        >
          <FaAngleLeft /> Back To Portfolio
        </Link>
        <div className='flex flex-col justify-start items-stretch gap-8 w-full'>
          <div className='flex flex-col justify-start items-stretch gap-4 w-full max-w-lg'>
            <div className='flex flex-wrap justify-start items-start gap-[6px]'>
              <div className='flex py-2 px-[10px] justify-center items-center rounded-[100px] text-[#ffffffa6] bg-[#ffffff0d] border border-[#ffffff1a]'>
                <div className='text-xs font-medium'>2024</div>
              </div>
              <div className='flex py-2 px-[10px] justify-center items-center rounded-[100px] text-[#ffffffa6] bg-[#ffffff0d] border border-[#ffffff1a]'>
                <div className='text-xs font-medium'>Website</div>
              </div>
              <div className='flex py-2 px-[10px] justify-center items-center rounded-[100px] text-[#ffffffa6] bg-[#ffffff0d] border border-[#ffffff1a]'>
                <div className='text-xs font-medium'>Portfolio</div>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl font-medium text-white'>Rick Brown</h1>
              <p className='text-sm font-medium text-white text-opacity-50'>
                Developing the Rick Brown portfolio site was a challenge to
                blend striking visuals with user-friendly functionality. The
                goal was to showcase Ricks diverse photography while ensuring a
                seamless, intuitive experience.
              </p>
            </div>
          </div>
          <div>
            <a
              href=''
              className='flex items-center max-w-full justify-center gap-[6px] px-4 py-3 rounded-[10px] bg-white bg-opacity-10 hover:bg-opacity-20 text-sm font-medium text-white text-opacity-65 border border-white border-opacity-5'
            >
              View Live
              <FiArrowUpRight className='text-base' />
            </a>
          </div>
        </div>
      </section>
      <section className='px-6 pt-8 pb-10 flex flex-col gap-3'>
        <img
          src={Project1}
          className='w-full h-auto rounded-lg border border-[#ffffff1a]'
        />
        <img
          src={Project2}
          className='w-full h-auto rounded-lg border border-[#ffffff1a]'
        />
        <img
          src={Project3}
          className='w-full h-auto rounded-lg border border-[#ffffff1a]'
        />
      </section>
    </div>
  );
};

export default SinglePortfolio;
