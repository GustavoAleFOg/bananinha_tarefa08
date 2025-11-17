import Styles from './Home.module.css'

function Home() {
    return (
        <div className={Styles.tela}>
            <h1>Home</h1>
            <p>Seja bem-vindo á nossa página inicial!</p>

            <p> Quer jogar joguinhos divertidos olhe Aquiiii!!!</p>

            <h2>jogue <a href="https://www.roblox.com/pt">Roblox</a></h2>

        </div>
    );
}

export default Home;