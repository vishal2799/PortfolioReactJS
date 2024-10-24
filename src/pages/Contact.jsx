/* eslint-disable no-undef */
import { useRef, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { SectionTop } from '../components';
import { contactFollow, pageinfo } from '../constants';
import { hexToRgb } from '../utils';
import { Phone } from '../assets/images';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state
  const [isSuccess, setIsSuccess] = useState(false); // Track success state
  const [errorMessage, setErrorMessage] = useState(''); // Track error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button on submit

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSuccess(true); // Show success state
          setFormData({ from_name: '', from_email: '', message: '' }); // Clear form fields
        },
        (error) => {
          setIsSubmitting(false); // Re-enable button on error
          setErrorMessage('Failed to send message. Please try again later.'); // Set error message
          console.error('Email send error:', error.text);
        }
      );
  };

  return (
    <div>
      <SectionTop info={pageinfo.contact} />
      <section className='px-6 pt-8 pb-10 flex flex-col gap-3 xl:grid xl:grid-cols-2'>
        <div className='px-5 pt-6 pb-8 flex flex-col relative rounded-xl gap-8 flex-1 bg-[#20d7ff0d] border border-[#20d7ff0d]'>
          <div className='flex flex-col max-w-sm gap-3'>
            <h2 className='text-lg lg:text-2xl font-medium text-white'>
              📤 Get In Touch
            </h2>
            <p className='text-white text-opacity-50 text-sm font-medium'>
              Have a question or want to start a project? Contact me, and let’s
              make your ideas come to life!
            </p>
          </div>
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex flex-col gap-2'
            >
              <input
                type='text'
                name='from_name'
                value={formData.from_name}
                onChange={handleChange}
                disabled={isSubmitting}
                className='py-[18px] px-5 h-[52px] rounded-[10px] w-full outline-none text-sm text-white bg-[#20d7ff0d] hover:bg-[#20d6ff2c] border border-[#20d7ff1a]'
                placeholder='Your name'
              />
              <input
                type='email'
                name='from_email'
                value={formData.from_email}
                onChange={handleChange}
                disabled={isSubmitting}
                className='py-[18px] px-5 h-[52px] rounded-[10px] w-full outline-none text-sm text-white bg-[#20d7ff0d] hover:bg-[#20d6ff2c] border border-[#20d7ff1a]'
                placeholder='Your Email'
              />
              <textarea
                rows={5}
                name='message'
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder='How can I help you?'
                className='py-[18px] px-5 rounded-[10px] w-full text-sm outline-none text-white bg-[#20d7ff0d] hover:bg-[#20d6ff2c] border border-[#20d7ff1a]'
              ></textarea>
              <input
                type='submit'
                value='Send a Message'
                disabled={isSubmitting}
                className='p-4 rounded-[10px] text-[#20d7ff] outline-none bg-[#20d7ff33] hover:bg-[#20d6ff41] border border-[#20d7ff1a] cursor-pointer'
              />
            </form>
          </div>
          <div>
            {isSuccess && (
              <p className='text-success'>Message sent successfully! 🎉</p>
            )}
            {errorMessage && <p className='text-error'>{errorMessage}</p>}
          </div>
          <div className='flex flex-col justify-start items-center absolute inset-x-0 top-0 bottom-auto'>
            <div className='w-60 h-16 rounded-[100px] mt-[-32px] blur-2xl'></div>
          </div>
        </div>
        <div className='flex flex-col gap-3 flex-initial xl:justify-between'>
          <div className='flex relative flex-col gap-5 rounded-xl py-6 px-5 bg-[#20d7ff0d] border border-[#20d7ff0d]'>
            <h3 className='text-base md:text-xl font-medium text-white'>
              🔹 Follow Me
            </h3>
            <div className='grid grid-cols-2 gap-[6px]'>
              {contactFollow.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className='flex flex-col justify-center items-center py-6 px-5 rounded-[10px] bg-[#20d7ff0d] hover:bg-[#20d6ff1f] border border-[#ffffff0d]'
                >
                  <item.icon className='w-7 h-7 text-[#20d7ff]' />
                </a>
              ))}
            </div>
          </div>
          <div className='overflow-hidden flex flex-col justify-start items-start relative px-5 py-6 gap-6 rounded-xl bg-[#20d7ff1a] border border-[#20d7ff1a]'>
            <div className='flex flex-col gap-[10px] max-w-60 w-full'>
              <h3 className='text-base md:text-xl font-medium text-white'>
                🦋 Book a Call
              </h3>
              <p className='text-sm font-medium text-white text-opacity-50'>
                Have a question or want to start a project? Contact me, and
                let’s make your ideas come to life!
              </p>
            </div>
            <a
              href=''
              className='flex items-center justify-center gap-[6px] px-4 py-3 rounded-[10px] bg-white bg-opacity-10 hover:bg-opacity-25 text-sm font-medium text-white text-opacity-65 border border-white border-opacity-5'
            >
              Book a Call
              <FiArrowUpRight className='text-base' />
            </a>
            <div className='absolute inset-auto bottom-[-14px] right-[-14px]'>
              <div
                style={{
                  borderColor: `rgba(${hexToRgb('#20d7ff')}, 0.05)`,
                  backgroundColor: `rgba(${hexToRgb('#20d7ff')}, 0.05)`,
                }}
                className={`flex items-center justify-center rounded-full border p-7 lg:p-12`}
              >
                <img src={Phone} className='w-12 h-12 lg:w-14 lg:h-14' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
