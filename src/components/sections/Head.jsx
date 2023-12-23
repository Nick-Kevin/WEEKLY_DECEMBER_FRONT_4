import dashboard from '../../assets/Sections/Head/screens.png'

function Head () {
    return (
        <div id="head" className="bg-dark pt-12 lg:pt-20 h-auto">
            <div className='flex flex-col items-center'>
                <h1 className='f-medium text-3xl lg:text-7xl w-7/12 lg:w-6/12'>Work at the speed of thought</h1>
            </div>
            <div className="w-full flex justify-center lg:pb-20 relative">
                <img src={dashboard} alt="dashboard" />
                <div id="shadow" className="absolute bottom-0 w-full h-16 lg:h-96"></div>
            </div>
        </div>
    )
}

export default Head