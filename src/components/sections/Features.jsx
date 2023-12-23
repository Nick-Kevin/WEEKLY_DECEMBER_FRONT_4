import { Fade } from "react-reveal"

function Features () {
    return (
        <>
            <Fade bottom>
                <h2 className="mt-20 lg:mt-32 f-regular text-2xl lg:text-5xl">FEATURES</h2>
            </Fade>
            <div className="flex justify-center">
                <Fade bottom>
                    <p className="mt-4 lg:mt-8 leading-relaxed lg:leading-normal f-regular text-xs lg:text-lg w-60 lg:w-5/12">
                        Most calendars are designed for teams. 
                        Slate is designed for freelancers who want 
                        a simple way to plan their schedule.
                    </p>
                </Fade>
            </div>
        </>
    )
}

export default Features