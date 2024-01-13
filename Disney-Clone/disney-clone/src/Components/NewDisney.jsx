import { Link } from 'react-router-dom';
import { Container, Content } from './Recommends'
import { Wrap } from './Viewers'
import { selectNewDisney } from './features/movie/movieSlice';
import { useSelector } from "react-redux";

function NewDisney() {
    const movies = useSelector(selectNewDisney);
    // console.log(movies, ":🛢️");
    return (
        <Container>
            <h4> New Disney</h4>
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

export default NewDisney
