import Styles from './Empresa.module.css'


function Empresa() {
    return (
        <div className={Styles.grid}>
            <h1>Gnomio Games</h1>
            <h2>Sobre a Gnomio games</h2>
            <p>
                Somo uma pequena empresa de jogos, desenvolvemos jogos para o roblox para todas as idades, jogos divertidos e atrativos 
            </p>
        </div>
    );
}

export default Empresa;