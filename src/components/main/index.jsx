import { ButtonBack } from "../buttonBack";
import { DivMain, MainContainer } from "./styles";

export function MainPage() {
    return(
        <>
            <MainContainer>
                <DivMain>
                    <ul>
                        <li><a href="/movies" className="a">A lore dos filmes</a></li>
                        <li><a href="/books" className="a">A lore dos livros</a></li>
                        <li><a href="/games" className="a">A lore dos jogos</a></li>
                    </ul>
                </DivMain>
            </MainContainer>
        </>
    )
}