import dashboard from '../../assets/Sections/Head/screens.png'

function Head () {
    return (
        <div id="head" className="bg-dark h-auto">
            <h1 className='text-white'>coucou</h1>
            <div className="w-full flex justify-center lg:pb-20 relative">
                <img src={dashboard} alt="dashboard" />
                <div id="shadow" className="absolute bottom-0 w-full h-16 lg:h-96"></div>
            </div>
        </div>
    )
}

export default Head