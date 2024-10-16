import { SectionTop } from '../components';
import { aboutSkills, pageinfo } from '../constants';
import { hexToRgb } from '../utils';

const About = () => {
  return (
    <div>
      <SectionTop info={pageinfo.about} />
      <section className='flex flex-col lg:grid lg:grid-cols-2 gap-4 px-6 pt-8 pb-10 border-b border-[#ffffff1a]'>
        <h2 className='max-w-60 text-lg lg:text-2xl font-medium text-white'>
          ✨ The Drive, Passion, and Vision Behind My Work
        </h2>
        <p className='max-w-lg text-white text-opacity-50 text-sm font-medium'>
          Im David Harrison, a creative developer passionate about turning ideas
          into engaging digital experiences. Starting in New Jersey, my love for
          tech and design grew from building simple sites to developing complex
          applications. <br /> <br /> I blend technical skill with design to
          create seamless, user-friendly solutions, always pushing boundaries to
          exceed expectations.
        </p>
      </section>
      <section className='flex flex-col lg:grid lg:grid-cols-2 gap-6 px-6 pt-8 pb-10 border-b border-[#ffffff1a]'>
        <h2 className='max-w-60 text-lg lg:text-2xl font-medium text-white'>
          🔆 Unleashing My Skillful Superpowers
        </h2>
        <div className='flex justify-start items-start gap-[6px] flex-wrap max-w-md'>
          {aboutSkills.map((item, index) => (
            <div
              key={index}
              style={{
                borderColor: `rgba(${hexToRgb('#ffc427')}, 0.2)`,
                backgroundColor: `rgba(${hexToRgb('#ffc427')}, 0.05)`,
              }}
              className={`py-2 px-[10px] rounded-[100px] flex items-center justify-center border`}
            >
              <div style={{ color: '#ffc427' }} className={`text-xs`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='flex flex-col lg:grid lg:grid-cols-2 gap-6 px-6 pt-8 pb-10'>
        <h2 className='max-w-60 text-lg lg:text-2xl font-medium text-white'>
          🏆 Showcasing My Awards and Honors
        </h2>
        <div className='flex flex-col gap-2'>
          {[1, 2, 3].map((item, index) => (
            <a
              key={index}
              href=''
              className='flex gap-3 px-5 py-3 rounded-xl relative justify-start items-center bg-[#ffc4270d] text-[#ffc427]'
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
