import { Fade } from "react-reveal"
import appleStore from '../../assets/Sections/Partners/apple-app-store.svg'
import apiary from '../../assets/Sections/Partners/apiary.svg'
import android from '../../assets/Sections/Partners/android-icon.svg'
import basecamp from '../../assets/Sections/Partners/basecamp.svg'
import airbnb from '../../assets/Sections/Partners/airbnb.svg'
import ibm from '../../assets/Sections/Partners/ibm.svg'

function Partners () {
    const partners = [
        appleStore, apiary, android, basecamp, airbnb, ibm
    ]
    return (
        <div>
            <Fade bottom>
                <h2 className="mt-24 lg:mt-32 f-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Partners</h2>
            </Fade>
            <div className="flex justify-center">
                <Fade bottom>
                    <p className="my-3 lg:mt-8 lg:mb-14 leading-relaxed lg:leading-normal f-regular text-xs sm:text-base lg:text-lg w-4/6 sm:w-11/12 lg:w-[500px]">
                        We focus on ergonomics and meeting you where you work. <br /> 
                        It's only a keystroke away.
                    </p>
                </Fade>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-7 lg:mt-0 gap-y-8 lg:gap-y-0 mb-10 mx-14 gap-x-7 lg:gap-x-16">
                {
                    partners.map((partner, index) => (
                        <>
                            <Fade left>
                                <a href="#">
                                    <img src={partner} className={`sm:h-12 md:h-14 ${index === 5 ? 'h-4' : 'h-8'}`} alt={'partner logo ' + index} />
                                </a>
                            </Fade>
                        </>
                    ))
                }
            </div>
            <Fade bottom>
                <button className='bg-transparent f-medium px-7 lg:px-8 h-10 sm:h-11 lg:h-12 gallery-shadow text-xs sm:text-base lg:text-lg hover:bg-white active:underline hover:text-black border-white border-1 my-0 lg:my-4'>
                    All partners
                </button>
            </Fade>
        </div>
    )
}

export default Partners