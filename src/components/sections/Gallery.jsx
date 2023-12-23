import { Fade } from "react-reveal"

function Gallery () {
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
        </div>
    )
}

export default Gallery