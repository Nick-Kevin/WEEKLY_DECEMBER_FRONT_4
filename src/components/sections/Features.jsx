import { Fade } from "react-reveal"
import chat from '../../assets/Sections/Features/Chat-Bot.png'
import lineChart from '../../assets/Sections/Features/Line-Chart.png'

function Features () {
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
            <div className='flex flex-col lg:flex-row lg:mx-40'>
                <div className="flex justify-center relative">
                    <img src={chat} className="w-7/12 lg:w-11/12" alt="chat bot" />
                    <img src={lineChart} className="absolute h-24 lg:h-64 lg:left-80 top-28 lg:top-[395px]" alt="line chart" />
                </div>
                <div className='lg:w-4/12 bg-blue-600'></div>
            </div>
        </>
    )
}

export default Features