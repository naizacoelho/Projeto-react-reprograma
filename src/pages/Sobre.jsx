import Header from "../componentes/Header"
import sobre from '../assets/avatar.jpg'
import styles from '..//styles/pages/sobre.module.css'
import imagem from '../assets/fotogithub.jpeg'

const Sobre = () => {
    return (
        <>
            <Header title='Descubra mais sobre Naíza' image={sobre}/>
            <div className={styles.sobreContainer}>
                <img className={styles.sobreImage} src={imagem}></img>
                <div className={styles.sobreText}>
                    <h2> Um pouquinho sobre mim</h2>
                    <p>Eu sou a Nai, tenho 23 anos e estou em transição de carreira. Sou pernambucana, taurina e apaixonada por gatinhos. 
                        A Reprograma foi um achado para mim, eu tinha acabado de me formar na UFPE num curso que eu não me encontrava profissionalmente
                        e agora a Reprograma me mostrou outros caminhos que posso seguir sendo Dev Front-End. 
                    </p>
                </div>
            </div>
        </>

    )
}

export default Sobre