import { Link } from "react-router-dom";
import { DivMain, MainContainer } from "./styles";

export function MainPage() {
    return(
        <>
            <MainContainer>
                <DivMain>
                    <ul>
                        <li><Link to="/movies" className="a">A lore dos filmes</Link></li>
                        <li><Link to="/books" className="a">A lore dos livros</Link></li>
                        <li><Link to="/games" className="a">A lore dos jogos</Link></li>
                    </ul>
                </DivMain>
            </MainContainer>
        </>
    )
}