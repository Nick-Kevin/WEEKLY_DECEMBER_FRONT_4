import phone from '../../assets/Footer/phone.svg'
import map from '../../assets/Footer/map.svg'
import twitter from '../../assets/Footer/twitter.svg'
import linkedin from '../../assets/Footer/linkedin.svg'
import facebook from '../../assets/Footer/facebook.svg'

function Footer () {
    const categories = [ 'Fingertipe', 'Resources', 'About' ]
    const links = [ 'Home', 'Examples', 'Pricing', 'Updates' ]
    const socialNetworks = [ 
        { image: twitter, alt: 'twitter' },
        { image: facebook, alt: 'facebook' },
        { image: linkedin, alt: 'linkedin' }
     ]

    const linksList = () => {
        return (
            <>
                {
                    links.map((link, index) => (
                        <>
                            <div className={ index === 3 ? 'mb-12 lg:mb-0' : 'mb-1 lg:mb-4' }>
                                <a
                                    href="#"
                                    className='text-white f-medium text-xs lg:text-sm'
                                >
                                    {link}
                                </a>
                            </div>
                        </>
                    ))
                }
            </>
        )
    }

    return (
        <div className='grid lg:grid-cols-2 lg:gap-x-28 text-white pb-24 mt-12 mx-12 lg:mx-0 lg:pl-60'>
            <div className='grid lg:grid-cols-3'>
                {
                    categories.map((category) => (
                        <div className='flex flex-col justify-start text-start'>
                            <h6 className='mb-6 lg:mb-7 text-sm lg:text-lg f-medium'>{category}</h6>
                            {linksList()}
                        </div>
                    ))
                }
            </div>
            <div>
                <div className='flex items-center'>
                    <img src={map} className='w-7 lg:w-11' alt="map logo" />
                    <p className='ml-1 text-xs lg:text-sm f-medium'>7480 Mockingbird Hill undefined </p>
                </div>
                <div className='flex items-center mt-3'>
                    <img src={phone} className='w-6 lg:w-8' alt="phone logo" />
                    <p className='ml-1 text-xs lg:text-sm f-medium'>(239) 555-0108</p>
                </div>
                <div className='flex gap-x-4 lg:gap-x-5 mt-6'>
                    {
                        socialNetworks.map((item) =>(
                            <>
                                <a href="#">
                                    <img src={item.image} className='w-6 lg:w-10' alt={item.alt} />
                                </a>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer