import React from 'react';
import { Carousel } from 'react-bootstrap';
import imgcarousel from '../assets/Restaurant_Carousel.jpg'
import imgcarousel1 from '../assets/Restaurant_Carousel1.jpg'
import imgcarousel2 from '../assets/Restaurant_Carousel2.jpg'

export const CarouselInicio = () => {

    return (
        <Carousel className='carousel' variant="dark" >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imgcarousel}
                    alt="sdgsdg"
                // height={"100%"}
                />
                <Carousel.Caption>
                    <h5 className='titulos'>RESTAURANT SIGLO XXI</h5>
                    <p className='parrafo'>
                        Somos una empresa dedicada a brindar momentos inolvidables y servicios gastronómicos de alta
                        calidad; ponemos todo nuestro “amor” y máximo empeño en beneficio de nuestros clientes.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imgcarousel1}
                    height={"100%"}
                />
                <Carousel.Caption>
                    <h5 className='titulos'>RESTAURANT SIGLO XXI</h5>
                    <p className='parrafo'>
                        Desarrollamos nuestro servicio a partir de los talentos y los valores de nuestros
                        colaboradores, somos una empresa que día a día lucha por desarrollar mejores condiciones
                        laborales y un mejor nivel de vida para nuestros colaboradores y sus familias.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imgcarousel2}
                    // alt="100"
                    height={"100%"}
                />
                <Carousel.Caption>
                    <h5 className='titulos'>RESTAURANT SIGLO XXI</h5>
                    <p className='parrafo'>
                        "El postre tiene que ser espectacular, porque llega cuando el gourmet ya no tiene hambre"
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

export default CarouselInicio;