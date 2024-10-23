import { AwardCard, Label, SectionTop } from '../components';
import { aboutSkills, certifications, pageinfo } from '../constants';

const About = () => {
  return (
    <div>
      <SectionTop info={pageinfo.about} />
      <section className='flex flex-col lg:grid lg:grid-cols-2 gap-4 px-6 pt-8 pb-10 md:p-10 md:pb-12 border-b border-[#ffffff1a]'>
        <h2 className='max-w-[184px] md:max-w-[200px] lg:max-w-60 text-lg md:text-xl lg:text-2xl font-medium text-white'>
          ✨ The Drive, Passion, and Vision Behind My Work
        </h2>
        <p className='max-w-[464px] text-white text-opacity-50 text-sm font-medium leading-4'>
          I’m a passionate Frontend Developer with a strong background in
          creating responsive, user-friendly websites using HTML, CSS,
          JavaScript, React, and Bootstrap. Over the past year, I’ve also begun
          transitioning into the Power Platform, exploring the potential of
          low-code/no-code development through personal projects and
          professional certifications.<br></br> <br></br>With hands-on
          experience in web development and a growing proficiency in Power Apps,
          Power Automate, and Power BI, I’m committed to delivering solutions
          that not only look great but solve real business problems. Whether
          you&apos;re looking to revamp your website or streamline your business
          processes, I&apos;m here to help!
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
          {certifications.map((item, index) => (
            <AwardCard key={index} award={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
