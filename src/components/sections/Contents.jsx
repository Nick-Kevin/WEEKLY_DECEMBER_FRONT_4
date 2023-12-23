import macbookPro from '../../assets/Sections/Contents/Macbook-Pro.png'
import boardsNotifications from '../../assets/Sections/Contents/Boards-Notifications.png'

import { Fade } from "react-reveal"

function Contents () {
    const contenues = [
        { title: 'Work', btnLabel: 'Sign Up', image: macbookPro },
        { title: 'Desgin with real data', btnLabel: 'Try For Free', image: boardsNotifications }
    ]

    return (
        <>
            <Fade bottom>
                <h2 className="mt-40 lg:mt-32 f-regular text-2xl lg:text-5xl">Contents</h2>
            </Fade>
            <div className="flex justify-center">
                <Fade bottom>
                    <p className="my-3 lg:mt-8 lg:mb-14 leading-relaxed lg:leading-normal f-regular text-xs lg:text-lg w-44 lg:w-[500px]">
                        We focus on ergonomics and meeting you where you work. 
                        It's only a keystroke away.
                    </p>
                </Fade>
            </div>
            <div className='grid grid-row lg:grid-cols-2 lg:mx-64 lg:mb-8 gap-y-5 lg:gap-y-0 lg:gap-x-7'>
                {
                    contenues.map((contenu, index) => (
                        <div className='flex flex-col lg:h-[540px] justify-between bg-white rounded-lg py-4 lg:py-8 px-2 lg:px-5'>
                            <h4 className='text-black f-medium text-sm lg:text-lg'>
                                {contenu.title}
                            </h4>
                            <div className='flex justify-center'>
                                <p className='text-second lg:w-[14.5rem] f-regular text-sm'>
                                    Ever wondered if you're too reliant 
                                    on a client for work? Slate helps 
                                    you identify .
                                </p>
                            </div>
                            <div>
                                <button className='px-5 btn-shadow bg-primary text-sm lg:px-10 py-2 lg:py-3'>
                                    { contenu.btnLabel }
                                </button>
                            </div>
                            <img
                                src={contenu.image}
                                className={ index === 1 ? 'mb-[-25px] mt-[-40px]' : '' }
                                alt="illustration"
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Contents