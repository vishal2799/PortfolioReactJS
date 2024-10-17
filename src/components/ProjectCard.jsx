/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className='relative group'>
      <Link
        to={`/portfolio/${project.id}`}
        className='flex flex-col gap-4 p-4 h-auto border border-transparent rounded-lg transform transition-all duration-300 ease-in-out group-hover:scale-95 group-hover:border-white group-hover:border-opacity-30 group-hover:p-6'
      >
        <div className='overflow-hidden h-auto rounded-lg'>
          <img
            src={project.image}
            className='w-full  h-auto aspect-[5/6] object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110'
            alt='Portfolio'
          />
        </div>
        <div className='flex flex-col justify-start items-start px-2 gap-1'>
          <div className='text-sm font-medium text-white'>{project.title}</div>
          <div className='text-xs font-medium text-white text-opacity-50'>
            {project.desc}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
