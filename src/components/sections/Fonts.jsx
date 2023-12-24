import { Fade } from "react-reveal"
import desktopLineChart from '../../assets/Sections/Fonts/desktop/line-chart.png'
import mobileLineChart from '../../assets/Sections/Fonts/mobile/line-chart.png'

function Fonts () {
    return (
        <div className="flex justify-center items-center py-48">
            <Fade>
                <div className="w-[77%] grid lg:grid-cols-2 rounded-lg md:rounded-2xl lg:rounded-3xl bg-fonts">
                    <div className="flex flex-col justify-center lg:pl-20 items-start gap-y-7">
                        <h2 className="f-regular text-[2.6rem] lg:ml-2 text-start leading-tight">
                            OpenType feature 
                            and Variable fonts
                        </h2>
                        <div>
                            <button className='btn-shadow bg-primary text-xs lg:text-sm px-8 lg:px-14 py-2 lg:py-3'>
                                Try For Rree
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end items-end">
                        <img src={desktopLineChart} className="hidden lg:block rounded-br-3xl" alt="line chart" />
                        <img src={mobileLineChart} className="block lg:hidden" alt="line chart" />
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Fonts