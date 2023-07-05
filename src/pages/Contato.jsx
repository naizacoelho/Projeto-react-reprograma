import Header from "../componentes/Header"
import contato from "../assets/contato.svg"
import styles from "../styles/pages/contato.module.css"
import { useState } from "react"
import database from '../services/firebase'
import { ref, push, set } from 'firebase/database'

const Contato = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    function handleInputNome(e) {
        setNome(e.target.value)
    }
    function handleInputEmail(e) {
        setEmail(e.target.value)
    }
    function handleInputMensagem(e) {
        setMensagem(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()

        const MessageListRef = ref(database, 'mensagens')
        const newMessageRef = push(MessageListRef)
        set(newMessageRef, {
            nome: nome,
            email: email,
            texto: mensagem,
        })

        setNome('')
        setEmail('')
        setMensagem('')



    }
    return (
        <>
            <Header title="Entre em contato com Naíza" image={contato}></Header>
            <main >
                <form className={styles.form} onSubmit={handleSubmit} >
                    <input className={styles.formInput} placeholder="Digite o seu nome" onChange={handleInputNome} value={nome} type="text" />
                    <input className={styles.formInput} placeholder="Digite o seu e-mail" onChange={handleInputEmail} value={email} type="email" />
                    <textarea className={styles.formInput} placeholder="Digite a sua mensagem" onChange={handleInputMensagem} value={mensagem} />
                    <button className={styles.formButton} type="submit">Enviar mensagem</button>

                </form>


            </main>

        </>

    )
}

export default Contato