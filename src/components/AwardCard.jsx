/* eslint-disable react/prop-types */
import { hexToRgb } from '../utils';

const AwardCard = ({ award }) => {
  return (
    <a
      href={award.url}
      target='_blank'
      className='flex gap-3 px-5 py-3 rounded-xl relative justify-start items-center bg-[#ffc4270d] hover:bg-[#ffc5274d] text-[#ffc427]'
    >
      <div className='flex flex-1 justify-start items-center gap-3'>
        <div className='flex-1 text-sm font-medium'>{award.title}</div>
        <div className='w-10 text-right text-[#ffc42759]'>{award.year}</div>
      </div>
      <div
        style={{
          borderColor: `rgba(${hexToRgb('#ffc427')}, 0.2)`,
          backgroundColor: `rgba(${hexToRgb('#ffc427')}, 0.05)`,
        }}
        className={`py-2 px-[10px] rounded-[100px] flex items-center justify-center border`}
      >
        <div style={{ color: '#ffc427' }} className={`text-xs`}>
          #{award.id}
        </div>
      </div>
    </a>
  );
};

export default AwardCard;
