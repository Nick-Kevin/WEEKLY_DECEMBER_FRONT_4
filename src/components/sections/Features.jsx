import { Fade } from "react-reveal"
import chat from '../../assets/Sections/Features/Chat-Bot.png'
import lineChart from '../../assets/Sections/Features/Line-Chart.png'
import source from '../../assets/Sections/Features/Source.svg'
import Interface from '../../assets/Sections/Features/Interface.svg'
import rules from '../../assets/Sections/Features/Rules.svg'

function Features () {
    const features = [
        { img: source, subtitle: 'A single source of truth' },
        { img: Interface, subtitle: 'Intuitive interface' },
        { img: rules, subtitle: 'Or with rules' }
    ]

    return (
        <>
            <Fade bottom>
                <h2 className="mt-20 lg:mt-32 f-regular text-2xl sm:text-4xl lg:text-5xl">FEATURES</h2>
            </Fade>
            <div className="flex justify-center">
                <Fade bottom>
                    <p className="my-4 lg:mt-8 lg:mb-16 leading-relaxed lg:leading-normal f-regular text-xs sm:text-base lg:text-lg w-60 sm:w-8/12 lg:w-5/12">
                        Most calendars are designed for teams. 
                        Slate is designed for freelancers who want 
                        a simple way to plan their schedule.
                    </p>
                </Fade>
            </div>
            <div className='flex flex-col items-center lg:flex-row lg:ml-48 xl:ml-52 lg:mb-56'>
                <div className="flex justify-center relative">
                    <img src={chat} className="h-44 sm:h-96 md:h-[500px] lg:h-[460px] xl:h-[580px]" alt="chat bot" />
                    <img
                        src={lineChart}
                        className="absolute h-24 sm:h-40 md:h-56 lg:h-48 xl:h-64 md:left-60 lg:left-56 xl:left-[265px] top-28 sm:top-64 md:top-80 lg:top-[303px] xl:top-[380px]"
                        alt="line chart"
                    />
                </div>
                <div className='lg:w-auto lg:pl-5 pt-20 lg:pt-16 gap-y-10 lg:gap-y-14 md:mx-20 lg:mx-0 flex flex-col md:flex-row lg:flex-col md:gap-x-16 lg:gap-x-0 items-center justify-center'>
                    {
                        features.map((feature, index) => (
                            <>
                                <Fade bottom>
                                    <div className="text-start w-56 sm:w-auto md:w-5/12 lg:w-auto ml-16 sm:ml-0 lg:ml-16 xl:ml-5">
                                        <div className="flex items-start mb-3 lg:mb-5 w-7/12 md:w-full lg:w-8/12">
                                            <img
                                                src={feature.img}
                                                className={ index === 2 ? 'w-6 lg:w-9 mt-1' : 'mt-1 w-4 lg:w-6'}
                                                alt="logo"
                                            />
                                            <h5 className="ml-1 sm:ml-2 f-medium text-sm lg:text-lg md:mr-5 lg:mr-0 xl:mr-20">
                                                {feature.subtitle}
                                            </h5>
                                        </div>
                                        <p className="f-regular lg:ml-2 leading-normal text-xs lg:text-sm lg:w-4/6">
                                            When you add work to your <br />
                                            Slate calendar we automatically 
                                            calculate useful insights
                                        </p>
                                    </div>
                                </Fade>
                            </>                            
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Features