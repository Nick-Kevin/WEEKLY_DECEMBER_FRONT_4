import { Fade, Bounce } from "react-reveal"
import desktopCard1 from '../../assets/Sections/Gallery/desktop/Card.png'
import desktopCard2 from '../../assets/Sections/Gallery/desktop/Card-1.png'
import desktopCard3 from '../../assets/Sections/Gallery/desktop/Card-2.png'
import desktopCard4 from '../../assets/Sections/Gallery/desktop/Card-3.png'
import desktopCard5 from '../../assets/Sections/Gallery/desktop/Card-4.png'
import desktopCard6 from '../../assets/Sections/Gallery/desktop/Card-5.png'
import desktopCard7 from '../../assets/Sections/Gallery/desktop/Card-6.png'
import mobileCar1 from '../../assets/Sections/Gallery/mobile/Card-1.png'
import mobileCar2 from '../../assets/Sections/Gallery/mobile/Card-2.png'
import mobileCar3 from '../../assets/Sections/Gallery/mobile/Card-3.png'
import mobileCar4 from '../../assets/Sections/Gallery/mobile/Card-4.png'

function Gallery () {
    const firstDivOnDesktop = [ desktopCard1, desktopCard2, desktopCard3, desktopCard4 ]
    const mobileCards = [ mobileCar1, mobileCar2, mobileCar3, mobileCar4 ]
    const secondDivOnDesktop = [ desktopCard5, desktopCard6, desktopCard7 ]

    return (
        <div>
            <Fade bottom>
                <h2 className="mt-32 f-regular text-2xl lg:text-5xl">Gallery</h2>
            </Fade>
            <div className="flex justify-center">
                <Fade bottom>
                    <p className="my-3 lg:mt-8 lg:mb-14 leading-relaxed lg:leading-normal f-regular text-xs lg:text-lg w-44 lg:w-[500px]">
                        We focus on ergonomics and meeting you where you work. 
                        It's only a keystroke away.
                    </p>
                </Fade>
            </div>
            <div className="hidden lg:flex justify-center gap-x-8">
                {
                    firstDivOnDesktop.map((image, index) => (
                        <>
                            <Bounce left>
                            <img
                                src={image}
                                className="rounded-xl h-60 gallery-shadow"
                                alt={'card ' + index}
                            />
                            </Bounce>                            
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery