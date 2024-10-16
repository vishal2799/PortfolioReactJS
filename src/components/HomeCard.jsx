/* eslint-disable react/prop-types */
import { hexToRgb } from '../utils';
import { Link } from 'react-router-dom';

const HomeCard = ({ item }) => {
  return (
    <Link
      to={item.url}
      style={{
        backgroundColor: `rgba(${hexToRgb(item.color)}, 0.2)`,
        borderColor: `rgba(${hexToRgb(item.color)}, 0.1)`,
        color: item.color,
      }}
      className={`hover:shadow-custom-inset border flex flex-col gap-y-[14px] relative overflow-hidden flex-1 rounded-xl justify-start items-start pt-6 pb-8 px-5`}
    >
      <div
        style={{
          borderColor: `rgba(${hexToRgb(item.color)}, 0.2)`,
          backgroundColor: `rgba(${hexToRgb(item.color)}, 0.05)`,
        }}
        className={`py-2 px-[10px] rounded-[100px] flex items-center justify-center border`}
      >
        <div style={{ color: item.color }} className={`text-xs`}>
          {item.urlLabel}
        </div>
      </div>
      <h2 className='text-lg font-medium max-w-36'>{item.title}</h2>
      <div
        style={{
          borderColor: `rgba(${hexToRgb(item.color)}, 0.05)`,
          backgroundColor: `rgba(${hexToRgb(item.color)}, 0.05)`,
        }}
        className={`absolute flex items-center justify-center rounded-full right-[-8px] bottom-[-16px] border p-7`}
      >
        <img src={item.icon} className='w-10 h-10' />
      </div>
      <div
        style={{ backgroundColor: item.color }}
        className={`absolute h-1 inset-x-0 top-auto bottom-0`}
      ></div>
      <div className='flex flex-col justify-start items-center absolute inset-x-0 top-0 bottom-auto'></div>
    </Link>
  );
};

export default HomeCard;
