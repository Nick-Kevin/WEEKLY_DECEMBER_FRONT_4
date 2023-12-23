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
                <h2 className="mt-20 lg:mt-32 f-regular text-2xl lg:text-5xl">FEATURES</h2>
            </Fade>
            <div className="flex justify-center">
                <Fade bottom>
                    <p className="my-4 lg:mt-8 lg:mb-16 leading-relaxed lg:leading-normal f-regular text-xs lg:text-lg w-60 lg:w-5/12">
                        Most calendars are designed for teams. 
                        Slate is designed for freelancers who want 
                        a simple way to plan their schedule.
                    </p>
                </Fade>
            </div>
            <div className='flex flex-col lg:flex-row lg:mx-48 lg:mb-56'>
                <div className="flex justify-center relative">
                    <img src={chat} className="w-7/12 lg:w-11/12" alt="chat bot" />
                    <img src={lineChart} className="absolute h-24 lg:h-64 lg:left-72 top-28 lg:top-[375px]" alt="line chart" />
                </div>
                <div className='lg:w-4/12 lg:pl-5 pt-20 lg:pt-16 gap-y-10 lg:gap-y-14 flex flex-col items-center justify-center'>
                    {
                        features.map((feature, index) => (
                            <>
                                <Fade bottom>
                                    <div className="text-start w-32 lg:w-auto">
                                        <div className="flex items-start mb-3 lg:mb-5 w-10/12 lg:w-8/12">
                                            <img
                                                src={feature.img}
                                                className={ index === 2 ? 'w-6 lg:w-9 mt-1' : 'mt-1 w-4 lg:w-6'}
                                                alt="logo"
                                            />
                                            <h5 className="ml-1 lg:ml-2 f-medium text-xs lg:text-lg">{feature.subtitle}</h5>
                                        </div>
                                        <p className="f-regular lg:ml-2 leading-normal text-[7px] lg:text-sm lg:w-11/12">
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