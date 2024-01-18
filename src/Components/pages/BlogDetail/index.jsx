import React from 'react'
import Rasm from '../../../Assets/male-avatar.png'
import Rasm2 from '../../../Assets/blog-header-image.jpg'
function BlogDetail() {
    const lineheight = {
        "lineHeight": '1.5',
    }
    return (

        <div className='grid justify-items-center'>
            <div className='my-32 text-center justify-items-center'>
                <h4 className='text-[#17a2b8] text-lg font-normal'>Creative Network</h4>
                <h1 style={lineheight} className='font-medium'>9 useful things to learn and practice for <br /> your digital marketing</h1>
                <div className='flex gap-3 justify-center items-center'>
                    <img className='w-[100px] h-[91px]' src={Rasm} alt="" />
                    <p className='text-lg text-[#666262]'>Sweet Candy</p>
                </div>
                <div className='my-[4%]'>
                    <img src={Rasm2} alt="" />
                </div>
                <div className='grid justify-center text-start'>
                    <h2>Etiam quis metus elementum, tempor risus vel, <br /> condimentum orci.</h2><br />
                    <p className='text-lg text-[#6E6A6A]'>Mauris in convallis nunc, non facilisis arcu. Nunc sapien nulla, interdum at diam non, aliquam <br /> vestibulum leo. Fusce laoreet malesuada ante, consectetur consequat ante tempor et. Quisque ac <br /> risus ligula.</p>
                    <p className='text-lg text-[#6E6A6A]'>Suspendisse bibendum tortor at est placerat auctor. Phasellus tortor est, bibendum eu ex eu, <br /> tincidunt efficitur nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur <br /> ridiculus mus.</p>
                </div><br />
                <div className='grid ml-20'>
                    <p>Quisque at condimentum est. Duis sollicitudin urna id elit pulvinar placerat. Ut ac dui in ex vulputate dictum.</p>
                    <p>Quisque at condimentum est. Duis sollicitudin urna id elit pulvinar placerat. Ut ac dui in ex vulputate dictum.</p>
                    <p>Quisque at condimentum est. Duis sollicitudin urna id elit pulvinar placerat. Ut ac dui in ex vulputate dictum.</p>
                </div><br />
                <div className='text-start flex justify-center '>
                    <p className='text-lg text-[#6E6A6A]'>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor <br /> risus vel, condimentum orci.</p>
                </div><br /><br />
                <div className='grid justify-center text-start'>
                    <h2>Curabitur tempus vel libero lobortis feugiat</h2><br />
                </div><br />
                <div className='grid text-start justify-center'>
                    <p className='text-lg text-[#6E6A6A]'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris in <br /> convallis nunc, non facilisis arcu. Nunc sapien nulla, interdum at diam non, aliquam vestibulum leo.</p>
                </div>
                <div className='grid justify-center text-start mt-5 ml-[10%]'>
                    <p className='text-lg text-[#6E6A6A]'>Phasellus dapibus ex sed dolor blandit, efficitur iaculis ipsum scelerisque. Cras elementum nibh id felis <br /> sagittis, sit amet pellentesque ligula porttitor. Fusce laoreet malesuada ante, <br /> consectetur consequat ante tempor et. Quisque ac risus ligula.</p>
                </div>

            </div>
            <div className='justify-center flex gap-4'>
                <input type="text" placeholder='Name' className='w-[340px] h-[54.4px] bg-[#F0F8FF] pl-3 rounded' name="" id="" />
                <input type="text" placeholder='Email' className='w-[340px] h-[54.4px] bg-[#F0F8FF] pl-3 rounded' name="" id="" />
            </div>
            <div className='my-[2%] grid gap-4 justify-items-center'>
                <textarea name="" id="" cols="30" rows="10" className='w-[710px] h-[198.4px] bg-[#F0F8FF] pl-3 rounded'></textarea>
                <button className='w-[278.33px] h-[54px] rounded-full text-white flex justify-center items-center bg-[#05798C]'>Submit Comment</button>
            </div><br /><br /><br />
        </div>
    )
}

export default BlogDetail