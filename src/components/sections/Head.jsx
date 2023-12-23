import dashboard from '../../assets/Sections/Head/screens.png'
import Fade from 'react-reveal/Fade'

function Head () {
    return (
        <div id="head" className="bg-dark pt-9 lg:pt-20 h-auto">
            <div className='flex flex-col items-center'>
                <Fade bottom>
                    <h1 className='f-medium lg:!leading-[1.07] text-3xl lg:text-7xl w-7/12 lg:w-6/12'>
                        Work at the speed of thought
                    </h1>
                </Fade>
                <Fade top>
                    <p className='f-regular text-xs leading-normal lg:text-lg w-56 lg:w-5/12 mt-5 lg:mt-8'>
                        Most calendars are designed for teams. Slate is designed for 
                        freelancers who want a simple way to plan their schedule.
                    </p>
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