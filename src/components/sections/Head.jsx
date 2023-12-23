import dashboard from '../../assets/Sections/Head/screens.png'
import Fade from 'react-reveal/Fade'

function Head () {
    return (
        <div id="head" className="pt-9 lg:pt-20 h-auto">
            <div className='flex flex-col items-center'>
                <Fade bottom>
                    <h1 className='f-medium lg:!leading-[1.07] text-3xl lg:text-7xl w-7/12 lg:w-6/12'>
                        Work at the speed of thought
                    </h1>
                </Fade>
                <Fade bottom>
                    <p className='f-regular text-xs leading-relaxed lg:leading-normal lg:text-lg w-56 lg:w-5/12 mt-5 lg:mt-8'>
                        Most calendars are designed for teams. Slate is designed for 
                        freelancers who want a simple way to plan their schedule.
                    </p>
                </Fade>
                <Fade bottom>
                <div className='flex flex-col lg:flex-row items-center mt-12 lg:mt-20 mb-8 gap-y-4 lg:gap-y-0 lg:gap-x-8'>
                    <button className='bg-primary f-medium w-28 lg:w-40 h-10 lg:h-14 text-xs lg:text-md hover:border-white hover:border-1 active:underline text-sm'>Try For Free</button>
                    <button className='bg-transparent f-medium w-28 lg:w-40 h-10 lg:h-14 text-xs lg:text-md hover:bg-white active:underline hover:text-black border-white border-1'>Learn More</button>
                </div>
                </Fade>                   
            </div>
            <div className="w-full flex justify-center lg:pb-20 relative">
                <img src={dashboard} alt="dashboard" />
                <div id="shadow" className="absolute bottom-0 w-full h-16 lg:h-96"></div>
            </div>            
        </div>
    )
}

export default Head