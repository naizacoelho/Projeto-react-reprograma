import Header from '../componentes/Header'
import home from '../assets/home.svg'
import { SmileyWink, Code, AddressBook } from 'phosphor-react'
import styles from '../styles/pages/home.module.css'
import imagem from '../assets/bemvindo.gif'


const Home = () => {
  return (
    <>
      <Header title="Site de Naíza" image={imagem}></Header>

      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <SmileyWink size={150} color="#DB7093" weight='thin' />
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}>Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira, gostos e curiosidades.</p>
        </div>
        <div className={styles.cardContainer}>
          <Code size={150} color="#DB7093" weight='thin' />
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={150} color="#DB7093" weight='thin' />
          <h2 className={styles.cardTitle}>Contato</h2>
          <p className={styles.cardDescription}>Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
        </div>
      </div>


    </>
  )
}

export default Home