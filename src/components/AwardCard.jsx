import { hexToRgb } from '../utils';

const AwardCard = () => {
  return (
    <a
      href=''
      className='flex gap-3 px-5 py-3 rounded-xl relative justify-start items-center bg-[#ffc4270d] hover:bg-[#ffc5274d] text-[#ffc427]'
    >
      <div className='flex flex-1 justify-start items-center gap-3'>
        <div className='flex-1 text-sm font-medium'>
          🏆 Innovative Web Developer
        </div>
        <div className='w-10 text-right text-[#ffc42759]'>2024</div>
      </div>
      <div
        style={{
          borderColor: `rgba(${hexToRgb('#ffc427')}, 0.2)`,
          backgroundColor: `rgba(${hexToRgb('#ffc427')}, 0.05)`,
        }}
        className={`py-2 px-[10px] rounded-[100px] flex items-center justify-center border`}
      >
        <div style={{ color: '#ffc427' }} className={`text-xs`}>
          #1
        </div>
      </div>
    </a>
  );
};

export default AwardCard;
