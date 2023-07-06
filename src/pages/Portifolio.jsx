import Header from "../componentes/Header"
import portfolio from '../assets/portifolio.png'
import Axios from 'axios'
import { useEffect, useState } from "react"
import styles from '../styles/pages/portifolio.module.css'



const Portifolio = () => {

  const [repoData, setRepoData] = useState([])


  useEffect(() => {
    async function getRepositories() {
      try {
        const response = await Axios.get('https://api.github.com/users/naizacoelho/repos')
        setRepoData(response.data)
      }
      catch (erro) {
        console.error("Capturei um erro: " + erro)
      }
    }
    getRepositories()
  }, [])



  return (
    <>
      <Header title='Meus projetinhos do Github' image={portfolio} />
      <div className={styles.portifolioContainer}>

        {
          repoData.map((repo) => {

            return (
             
              <a href={repo.html_url} target="_blank">
                <div className={styles.cardContainer}>
                  <h3>{repo.full_name}</h3>
                  <p>{repo.description}</p>
                </div>
              </a>

            )
          })
        }

      </div>
    </>
  )
}



export default Portifolio