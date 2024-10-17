/* eslint-disable react/prop-types */
import { hexToRgb } from '../utils';

const Label = ({ item }) => {
  return (
    <div
      style={{
        borderColor: `rgba(${hexToRgb(item.color)}, 0.2)`,
        backgroundColor: `rgba(${hexToRgb(item.color)}, 0.05)`,
      }}
      className={`py-2 px-[10px] rounded-[100px] flex items-center justify-center border`}
    >
      <div style={{ color: item.color }} className={`text-xs`}>
        {item.label}
      </div>
    </div>
  );
};

export default Label;
