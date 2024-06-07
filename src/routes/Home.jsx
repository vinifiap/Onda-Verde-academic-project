import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Prototipo from '../assets/prototipo.png'
import Foto from "../assets/fotografo.jpg"
import '../sass/styleHome.scss'
import Logo from '../assets/ondaverde.svg'

const Home = () => {
    return(
        <>
            <section className='leftsidecontainer' id='left'>
                <div id='leftside'>
                    <h1 className='fontleft'>Projeto</h1>
                    <img src={Logo} alt="" className='imagemprincipal'/>
                </div>
            </section>
        <section className="rightcontainer" id='right'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Prototipo}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 fotoprojeto"
                    src={Foto}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5 className='titulocarosel'>Catalogando Animais Marinhos</h5>
                    <p className='subcarosel'>Foto de Leões-marinhos do Sul do Brasil.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Prototipo}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </section>
            <section className='containerprincipal'>
        </section>
        </>
    )
}

export default Home