import { Fade } from "react-reveal"
import claireAvatar from '../../assets/Sections/Testimonials/Claire-Bell.png'
import franciscoAvatar from '../../assets/Sections/Testimonials/Francisco-Lane.png'
import ralphAvatar from '../../assets/Sections/Testimonials/Ralph-Fisher.png'
import jorgeAvatar from '../../assets/Sections/Testimonials/Jorge-Murphy.png'

function Testimonials () {
    const firstTestimonials = [
        { avatar: claireAvatar, testimonialName: 'Claire Bell' },        
        { avatar: ralphAvatar, testimonialName: 'Ralph Fisher' }            
    ]

    const secondTestimonials = [
        { avatar: franciscoAvatar, testimonialName: 'Francisco Lane' },
        { avatar: jorgeAvatar, testimonialName: 'Jorge Murphy' }
    ]

    return (
        <div>
            <Fade bottom>
                <h2 className="mt-28 lg:mt-40 f-regular text-2xl lg:text-5xl">Testimonials</h2>
            </Fade>
            <div className="grid grid-cols-2 gap-x-5 mt-14 mx-72">
                <div className="grid gap-y-5">
                    {
                        firstTestimonials.map((testimonial, index) => (
                            <>
                                <div className="testimonials-border p-8 rounded-lg text-start">
                                    <div className="flex items-center f-medium text-sm gap-x-5 mb-5">
                                        <img src={testimonial.avatar} alt="avatar" />
                                        <div>
                                            <h6 className="leading-normal"> {testimonial.testimonialName} </h6>
                                            <h6 className="leading-normal">Designer</h6>
                                        </div>
                                    </div>
                                    <p className="f-regular text-sm leading-relaxed mr-8">
                                        Slate helps you see how many more days 
                                        you need to work to reach your financial 
                                        goal for the month and year. Slate helps 
                                        you see how many more days <br />
                                        you need to work to reach your financial 
                                        goal for the month and year.
                                        {
                                            index === 0 ?
                                                'your financial goal for the month and year.'
                                            :
                                                ''
                                        }
                                    </p>
                                </div>
                            </>
                        ))
                    }
                </div>
                <div className="grid gap-y-5">
                    {
                        secondTestimonials.map((testimonial) => (
                            <>
                                <div className="testimonials-border p-8 rounded-lg text-start">
                                    <div className="flex items-center f-medium text-sm gap-x-5 mb-5">
                                        <img src={testimonial.avatar} alt="avatar" />
                                        <div>
                                            <h6 className="leading-normal"> {testimonial.testimonialName} </h6>
                                            <h6 className="leading-normal">Designer</h6>
                                        </div>
                                    </div>
                                    <p className="f-regular text-sm leading-relaxed mr-8">
                                        Slate helps you see how many more days 
                                        you need to work to reach your financial 
                                        goal for the month and year. Slate helps 
                                        you see how many more days <br />
                                        you need to work to reach your financial 
                                        goal for the month and year.
                                    </p>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
} 

export default Testimonials