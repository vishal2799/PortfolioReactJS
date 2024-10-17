import { AwardCard, Label, SectionTop } from '../components';
import { aboutSkills, pageinfo } from '../constants';

const About = () => {
  return (
    <div>
      <SectionTop info={pageinfo.about} />
      <section className='flex flex-col lg:grid lg:grid-cols-2 gap-4 px-6 pt-8 pb-10 md:p-10 md:pb-12 border-b border-[#ffffff1a]'>
        <h2 className='max-w-[184px] md:max-w-[200px] lg:max-w-60 text-lg md:text-xl lg:text-2xl font-medium text-white'>
          ✨ The Drive, Passion, and Vision Behind My Work
        </h2>
        <p className='max-w-[464px] text-white text-opacity-50 text-sm font-medium leading-4'>
          Im David Harrison, a creative developer passionate about turning ideas
          into engaging digital experiences. Starting in New Jersey, my love for
          tech and design grew from building simple sites to developing complex
          applications. <br /> <br /> I blend technical skill with design to
          create seamless, user-friendly solutions, always pushing boundaries to
          exceed expectations.
        </p>
      </section>
      <section className='flex flex-col lg:grid lg:grid-cols-2 gap-6 px-6 pt-8 pb-10 md:p-10 md:pb-12 border-b border-[#ffffff1a]'>
        <h2 className='max-w-[184px] md:max-w-[200px] lg:max-w-60 text-lg md:text-xl lg:text-2xl font-medium text-white'>
          🔆 Unleashing My Skillful Superpowers
        </h2>
        <div className='flex justify-start items-start gap-[6px] flex-wrap max-w-md'>
          {aboutSkills.map((item, index) => (
            <Label item={item} key={index} />
          ))}
        </div>
      </section>
      <section className='flex flex-col lg:grid lg:grid-cols-2 gap-6 px-6 pt-8 pb-10 md:p-10 md:pb-12'>
        <h2 className='max-w-[184px] md:max-w-[200px] lg:max-w-60 text-lg md:text-xl lg:text-2xl font-medium text-white'>
          🏆 Showcasing My Awards and Honors
        </h2>
        <div className='flex flex-col gap-2'>
          {[1, 2, 3].map((item, index) => (
            <AwardCard key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
