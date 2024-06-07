import '../sass/styleProjeto.scss'
import Equipe from '../assets/equipe.jpg'

const Projeto = () => {

    return(
        <>
        <div class="container">
        <header>
            <h1>Projeto Onda Verde</h1>
        </header>
        <main>
            <div class="content">
                <img src={Equipe} alt="Imagem do Projeto Onda Verde"/>
                <section class="objective">
                    <h2>Nosso Objetivo</h2>
                    <p>
                        O objetivo do projeto está com problema com o desenvolvimento do site esperado que possa trazer uma
                        manutenção no projeto mas a integração da tecnologia capaz de trazer novas tecnologias e também que
                        ajude no trabalho de habitat fotografado e diversas fotos do habitat, sensores e outras tecnologias de
                        desenvolvimento contínuo na implantação deste ambiente propício.
                    </p>
                    <p>
                        Sensores de Temperatura, profundidade e salinidade, monitoramento e identificação de espécies. Uma
                        maneira robusta para monitoramento e medidas implementares, buscando trazer melhorias e tentar ajudar
                        no monitoramento das espécies e a identificação e o projeto para o desenvolvimento contínuo.
                    </p>
                    <p>
                        O impacto esperado neste trabalho é trazer a tecnologia para o desenvolvimento contínuo, trazendo
                        novas informações tanto de áreas de poluição, do lixo jogado e sensores para medida das especificações
                        e qualidade de água para poder continuar a implementação de tecnologias apropriadas para o ambiente
                        marinho.
                    </p>
                </section>
            </div>
        </main>
    </div>
        </>
    )
}

export default Projeto