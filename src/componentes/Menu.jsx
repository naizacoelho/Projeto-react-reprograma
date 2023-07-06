import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/components/menu.module.css'
import {List, GithubLogo,LinkedinLogo} from 'phosphor-react'
const Menu = () => {
    return (
        <nav className={styles.menuContainer}>

            <li>
                <Link className={styles.menuLink} to="/">Home</Link>
            </li>
            <li>
                <Link className={styles.menuLink} to="/sobre">Sobre</Link>
            </li>
            <li>
                <Link className={styles.menuLink} to="/portifolio">Portifólio</Link>
            </li>
            <li>
                <Link className={styles.menuLink} to="/contato">Contato</Link>
            </li>

            <div className={styles.dropdown}>
                <button className={styles.dropbtn}><List size={36} color='#DB7093'/></button>
                <div className={styles.dropdownContent}>
                    <a target="_blank" href="https://www.linkedin.com/in/naiza-coelho-5808a4211/"><LinkedinLogo size={32} /> LinkedIn</a>
                    <a target="_blank" href="https://github.com/naizacoelho"><GithubLogo size={32} /> GitHub</a>
                    

                </div>
            </div>
        </nav>

    )
}

export default Menu