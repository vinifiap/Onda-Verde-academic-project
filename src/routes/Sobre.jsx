import '../sass/styleSobre.scss'
import Onda from '../assets/projetoonda.png'

const Sobre = () => {
    return (
        <>
         <main>
            <div class="content">
                <section class="sobre">
                    <h2>Sobre</h2>
                    <p>
                        O Projeto Onda Verde é uma iniciativa tecnológica voltada para a preservação da biodiversidade marinha.
                        Utilizando sensores avançados, o projeto monitora espécies de peixes, suas localizações, profundidade,
                        temperatura da água e salinidade em tempo real. Os dados coletados são processados e analisados para
                        fornecer informações valiosas e ações ambientais.
                    </p>
                    <p>
                        A missão do Onda Verde é promover a sustentabilidade dos oceanos e a proteção da vida marinha. Através de
                        soluções inovadoras, buscamos melhorar a qualidade da água e monitorar áreas poluídas, contribuindo para
                        um ambiente mais saudável e protegido.
                    </p>
                    <p>
                        Entre em contato conosco para mais informações sobre como você pode se envolver e apoiar nossas iniciativas.
                    </p>
                </section>
                <img src={Onda} alt="" />
            </div>
        </main>
        </>
    )
}

export default Sobre