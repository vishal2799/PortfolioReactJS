import { Label, ProjectCard } from '../components';
import { portfolioItems } from '../constants';

const Portfolio = () => {
  const portfolioLabel = {
    label: 'Portfolio',
    color: '#c06fff',
  };
  return (
    <div>
      <section className='flex flex-col justify-start items-start gap-4 p-6 pb-8 bg-[#c06fff08] border-b border-[#ffffff1a]'>
        <Label item={portfolioLabel} />
        <div className='flex flex-col gap-3 justify-start items-start'>
          <h1 className='text-2xl text-white max-w-72'>
            Collection of My Exceptional Solutions
          </h1>
          <p className='text-sm font-medium text-white text-opacity-50 max-w-[400px]'>
            Explore a selection of my top digital projects, where creativity
            meets innovation. Each piece reflects my commitment to delivering
            impactful solutions.
          </p>
        </div>
      </section>
      <div className='px-6 pt-8 pb-10'>
        <div className='flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-3'>
          {portfolioItems.map((item, index) => (
            <ProjectCard project={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
