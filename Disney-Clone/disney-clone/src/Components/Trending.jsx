import { Link } from 'react-router-dom';
import { Container, Content } from './Recommends'
import { Wrap } from './Viewers'
import { selectTrending } from './features/movie/movieSlice';
import { useSelector } from "react-redux";

function Trending() {
    const movies = useSelector(selectTrending);
    console.log(movies, ":🛢️");
    return (
        <Container>
            <h4>Trending</h4>
            <Content>
                {movies &&
                    movies.map((movie, key) => (
                        <Wrap key={key}>
                            {movie.id}
                            <Link to={`/detail/` + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))}
            </Content>
        </Container>
    );
}

export default Trending
