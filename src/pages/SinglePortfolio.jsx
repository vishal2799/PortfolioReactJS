import { FaAngleLeft } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { portfolioItems } from '../constants';
import { useEffect, useState } from 'react';

const SinglePortfolio = () => {
  const { id } = useParams();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = portfolioItems.filter((item) => item.id === Number(id));
    setFilteredItems(filtered);
    console.log(filtered);
  }, [id]);
  return (
    <div>
      <section className='flex flex-col justify-start items-start gap-8 p-6 pb-8 bg-[#ffc42708] border-b border-[#ffffff1a]'>
        <Link
          to='/portfolio'
          className='flex justify-center items-center gap-[6px] opacity-65 py-1 px-[2px] text-white'
        >
          <FaAngleLeft /> Back To Portfolio
        </Link>
        <div className='flex flex-col justify-start items-stretch gap-8 w-full lg:flex-row lg:justify-between lg:items-end'>
          <div className='flex flex-col justify-start items-stretch gap-4 w-full max-w-lg'>
            <div className='flex flex-wrap justify-start items-start gap-[6px]'>
              {filteredItems[0]?.tags.map((tag, index) => (
                <div
                  key={index}
                  className='flex py-2 px-[10px] justify-center items-center rounded-[100px] text-[#ffffffa6] bg-[#ffffff0d] border border-[#ffffff1a]'
                >
                  <div className='text-xs font-medium'>{tag}</div>
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-3'>
              <h1 className='text-2xl font-medium text-white'>
                {filteredItems[0]?.title}
              </h1>
              <p className='text-sm font-medium text-white text-opacity-50'>
                {filteredItems[0]?.longdesc}
              </p>
            </div>
          </div>
          <div>
            <a
              href={filteredItems[0]?.link}
              className='w-fit flex items-center max-w-full justify-center gap-[6px] px-4 py-3 rounded-[10px] bg-white bg-opacity-10 hover:bg-opacity-20 text-sm font-medium text-white text-opacity-65 border border-white border-opacity-5'
            >
              View Live
              <FiArrowUpRight className='text-base' />
            </a>
          </div>
        </div>
      </section>
      <section className='px-6 pt-8 pb-10 flex flex-col gap-3'>
        {filteredItems[0]?.images.map((image, index) => (
          <div
            className='w-full h-auto rounded-lg border border-[#ffffff1a]'
            key={index}
          >
            <img
              src={image}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default SinglePortfolio;
