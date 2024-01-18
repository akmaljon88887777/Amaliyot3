import React, { useEffect } from 'react'
import Rasm from '../../../../Assets/newsletter.png'

import Aos from 'aos';
import 'aos/dist/aos.css';
function Forms() {
    useEffect(() => {
        Aos.init();
      }, [])
    return (
            <div className='flex justify-center gap-5 items-center '>
                <div data-aos="fade-up">
                    <img className='w-[425px] h-[349]' src={Rasm} alt="" />
                </div>
                <div className='text-start'>
                    <div className='grid'>
                        <h4 className='text-[#909090] font-normal' data-aos="fade-up">Email Newsletter</h4>
                        <h3 style={{ lineHeight: '1.8' }} data-aos="fade-up">Let’s stay up-to-date. We'll <br /> share you all good stuffs.</h3>
                        <input type="text" placeholder='Please enter your email' name="" id="" className='pl-5 rounded bg-[#F0F8FF] w-[445px] h-[54px]' data-aos="fade-up"/><br />
                        <small className='text-[#6C757D]' data-aos="fade-up">We'll NOT share your email address to anyone else.</small>
                        <p className='flex mt-[5%] items-center gap-2' data-aos="fade-up">
                            <input type="checkbox" className='-mt-4' name="" id="" data-aos="fade-up" />
                            <p data-aos="fade-up">Please send me a monthly newsletter.</p>
                        </p><br />
                        <button data-aos="fade-up" className='w-[445px] h-[55.6px] rounded-full text-white text-lg bg-[#f1c111] hover:text-black'>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        
    )
}

export default Forms