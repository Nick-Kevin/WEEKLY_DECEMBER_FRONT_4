import { Fade, Bounce } from "react-reveal"
import desktopLineChart from '../../assets/Sections/Fonts/desktop/line-chart.png'
import mobileLineChart from '../../assets/Sections/Fonts/mobile/line-chart.png'

function Fonts () {
    return (
        <div className="flex justify-center items-center py-20 lg:py-48">
            <Fade bottom>
                <div className="w-full md:w-10/12 lg:w-[77%] grid md:grid-cols-2 rounded-none pt-14 md:pt-0 md:rounded-2xl lg:rounded-3xl bg-fonts">
                    <div className="flex flex-col justify-center mx-12 lg:mx-0 lg:pl-12 xl:pl-20 md:items-start gap-y-7">
                        <h2 className="f-regular text-3xl lg:text-4xl xl:text-[2.6rem] lg:ml-2 text-center md:text-start lg:w-11/12 xl:w-auto leading-tight lg:leading-tight xl:leading-tight">
                            OpenType feature 
                            and Variable fonts
                        </h2>
                        <div className="flex lg:block justify-center md:justify-start w-full lg:w-auto">
                            <button className='btn-shadow bg-primary text-xs sm:text-base lg:text-sm px-10 lg:px-14 py-2 lg:py-3'>
                                Try For Rree
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end items-end">
                        <img src={desktopLineChart} className="hidden md:block rounded-br-3xl" alt="line chart" />
                        <Bounce left>
                            <img src={mobileLineChart} className="block md:hidden mt-20" alt="line chart" />
                        </Bounce>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Fonts