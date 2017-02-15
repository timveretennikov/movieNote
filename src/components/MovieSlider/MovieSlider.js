import React from 'react'
import Slider from 'react-slick'

const MovieSlider = ({movies}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 3,
        slidesToScroll: 1
    }
    return (
        <Slider {...settings}>
            {
                movies.map((movies) => {
                    return (
                        <div>
                            <img src={} />
                        </div>
                    )
                })
            }
        </Slider>
    )
}

export default MovieSlider