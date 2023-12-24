import { Bounce } from "react-reveal"
import claireAvatar from '../../assets/Sections/Testimonials/desktop/Claire-Bell.png'
import franciscoAvatar from '../../assets/Sections/Testimonials/desktop/Francisco-Lane.png'
import ralphAvatar from '../../assets/Sections/Testimonials/desktop/Ralph-Fisher.png'
import jorgeAvatar from '../../assets/Sections/Testimonials/desktop/Jorge-Murphy.png'
import wade from '../../assets/Sections/Testimonials/mobile/Wade-Steward.png'
import philip from '../../assets/Sections/Testimonials/mobile/Philip-Watson.png'
import arthur from '../../assets/Sections/Testimonials/mobile/Arthur-Wilson.png'
import regine from '../../assets/Sections/Testimonials/mobile/Regine-Black.png'

function Testimonials () {
    const firstTestimonials = [
        { avatar: claireAvatar, testimonialName: 'Claire Bell' },        
        { avatar: ralphAvatar, testimonialName: 'Ralph Fisher' }            
    ]

    const secondTestimonials = [
        { avatar: franciscoAvatar, testimonialName: 'Francisco Lane' },
        { avatar: jorgeAvatar, testimonialName: 'Jorge Murphy' }
    ]

    const mobileTestimonials = [
        { avatar: wade, testimonialName: 'Wade Steward' },  
        { avatar: philip, testimonialName: 'Philip Watson' },  
        { avatar: arthur, testimonialName: 'Arthur Wilson' },  
        { avatar: regine, testimonialName: 'Regine Black' },  
    ]

    return (
        <div>
            <Bounce bottom>
                <h2 className="mt-28 lg:mt-40 f-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Testimonials</h2>
            </Bounce>
            <div className="grid md:grid-cols-2 md:gap-x-5 mt-10 md:mt-14 mx-12 sm:mx-32 md:mx-12 lg:mx-48 xl:mx-72">
                <div className="gap-y-5 hidden md:grid">
                    {
                        firstTestimonials.map((testimonial, index) => (
                            <>
                                <Bounce left>
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
                                </Bounce>
                            </>
                        ))
                    }
                </div>
                <div className="hidden md:grid gap-y-5">
                    {
                        secondTestimonials.map((testimonial) => (
                            <>
                                <Bounce right>
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
                                </Bounce>
                            </>
                        ))
                    }
                </div>
                <div className="grid md:hidden gap-y-5">
                    {
                        mobileTestimonials.map((testimonial) => (
                            <>
                                <Bounce left>
                                    <div className="mobile-testimonials-border p-6 rounded-lg text-start">
                                        <div className="flex items-center f-medium text-xs gap-x-3 mb-5">
                                            <img src={testimonial.avatar} className="w-8" alt="avatar" />
                                            <div>
                                                <h6 className="leading-normal"> {testimonial.testimonialName} </h6>
                                                <h6 className="leading-normal">Designer</h6>
                                            </div>
                                        </div>
                                        <p className="f-regular text-xs leading-relaxed">
                                            Slate helps you see how many more days 
                                            you need to work to reach your financial 
                                            goal for the month and year. Slate helps 
                                            you see how many more days <br />
                                            you need to work to reach your financial 
                                            goal for the month and year.
                                        </p>
                                    </div>
                                </Bounce>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
} 

export default Testimonials