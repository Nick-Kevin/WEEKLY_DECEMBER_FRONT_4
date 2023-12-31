import macbookPro from '../../assets/Sections/Contents/Macbook-Pro.png'
import boardsNotifications from '../../assets/Sections/Contents/Boards-Notifications.png'

import { Fade, Bounce } from "react-reveal"

function Contents () {
    const contenues = [
        { title: 'Work', btnLabel: 'Sign Up', image: macbookPro },
        { title: 'Desgin with real data', btnLabel: 'Try For Free', image: boardsNotifications }
    ]

    return (
        <div className='lg:mb-48'>
            <Fade bottom>
                <h2 className="mt-40 lg:mt-32 f-regular text-2xl md:text-4xl lg:text-5xl">Contents</h2>
            </Fade>
            <div className="flex justify-center">
                <Fade bottom>
                    <p className="my-3 lg:mt-8 lg:mb-14 leading-relaxed lg:leading-normal f-regular text-xs sm:text-base lg:text-lg w-44 sm:w-96 lg:w-[500px]">
                        We focus on ergonomics and meeting you where you work. 
                        It's only a keystroke away.
                    </p>
                </Fade>
            </div>
            <div className='grid grid-row md:grid-cols-2 md:mx-16 lg:mx-32 xl:mx-64 lg:mb-16 gap-y-5 lg:gap-y-0 md:gap-x-5 lg:gap-x-7 mt-4 lg:mt-0'>
                {
                    contenues.map((contenu, index) => (
                        <>
                            <Bounce left>
                                <div className='flex flex-col mx-14 xs:mx-80 sm:mx-40 md:mx-0 h-80 sm:h-[450px] lg:h-[540px] justify-between bg-white rounded-lg py-6 lg:py-8 px-2 lg:px-5'>
                                    <h4 className='text-black f-medium text-xs lg:text-lg'>
                                        {contenu.title}
                                    </h4>
                                    <div className='flex justify-center'>
                                        <p className='text-second w-36 lg:w-[14.5rem] f-regular text-[8px] lg:text-sm'>
                                            Ever wondered if you're too reliant 
                                            on a client for work? Slate helps 
                                            you identify .
                                        </p>
                                    </div>
                                    <div>
                                        <button className='btn-shadow bg-primary text-xs lg:text-sm px-8 lg:px-10 py-2 lg:py-3'>
                                            { contenu.btnLabel }
                                        </button>
                                    </div>
                                    <img
                                        src={contenu.image}
                                        className={ index === 1 ? 'mb-[-15px] lg:mb-[-25px] mt-[-18px] md:mt-[-10px] lg:mt-[-30px] xl:mt-[-40px]' : '' }
                                        alt="illustration"
                                    />
                                </div>
                            </Bounce>
                        </>                        
                    ))
                }
            </div>
        </div>
    )
}

export default Contents