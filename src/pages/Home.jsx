import { HomeCard } from '../components';
import { homeCards } from '../constants';
import { Avatar } from '../assets/images';

const Home = () => {
  return (
    <div>
      <section className='px-6 pt-6 pb-8 flex flex-col gap-y-6 border-b border-[#ffffff1a] bg-[#c06fff08]'>
        <div className='w-fit p-3 rounded-full flex justify-center items-center bg-[#ffffff0d] border-[#ffffff0d]'>
          <img src={Avatar} className='w-14 h-14' />
        </div>
        <div className='flex flex-col gap-y-3'>
          <h1 className='text-2xl font-medium text-white max-w-72'>
            👋 Hello, I&apos;m Vishal – Crafting Creative Code!
          </h1>
          <p className='max-w-96 text-sm font-medium text-[#ffffff80]'>
            As a creative developer, I blend code and design to build unique,
            user-centric experiences. Let&apos;s turn your ideas into a dynamic
            and engaging digital reality!
          </p>
        </div>
      </section>
      <section className='px-6 py-8 flex flex-col gap-y-3'>
        <div className='flex flex-col gap-y-3'>
          {homeCards.map((item, index) => (
            <HomeCard key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
