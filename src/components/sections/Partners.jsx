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
                <h2 className="mt-24 lg:mt-32 f-regular text-2xl lg:text-5xl">Partners</h2>
            </Fade>
            <div className="flex justify-center">
                <Fade bottom>
                    <p className="my-3 lg:mt-8 lg:mb-14 leading-relaxed lg:leading-normal f-regular text-xs lg:text-lg w-4/6 lg:w-[500px]">
                        We focus on ergonomics and meeting you where you work. <br /> 
                        It's only a keystroke away.
                    </p>
                </Fade>
            </div>
            <div className="flex justify-center mb-10 gap-x-16">
                {
                    partners.map((partner, index) => (
                        <>
                            <Fade left>
                                <a href="#">
                                    <img src={partner} className="h-14" alt={'partner logo ' + index} />
                                </a>
                            </Fade>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Partners