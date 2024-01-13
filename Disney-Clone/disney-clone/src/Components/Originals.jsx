import { Link } from 'react-router-dom';
import { Container, Content } from './Recommends'
import { Wrap } from './Viewers'
import { useSelector } from "react-redux";
import { selectOriginal } from './features/movie/movieSlice';

function Originals() {
    const movies = useSelector(selectOriginal);
    // console.log(movies, ":🛢️");
    return (
        <Container>
            <h4>Original</h4>
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

export default Originals
