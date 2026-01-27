import { Route, Routes } from "react-router-dom";
import { HomePage } from "../home";
import { StoryGamesPage } from "../pages/story_games";
import { StoryMoviesPage } from "../pages/story_movies";
import { StoryBooksPage } from "../pages/story_books";
import { Layout } from "../Layout";

export function RoutesPage() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route index element={<HomePage />} />
                <Route path="/games" element={<StoryGamesPage />} />
                <Route path="/books" element={<StoryBooksPage />} />
                <Route path="/movies" element={<StoryMoviesPage />} />
            </Routes>
        </>
    )
}