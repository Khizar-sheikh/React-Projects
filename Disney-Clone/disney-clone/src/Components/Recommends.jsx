import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Wrap } from "./Viewers";
import { selectRecommend } from "./features/movie/movieSlice";

const Recommends = () => {
    const movies = useSelector(selectRecommend)

    return (
        <Container>
            <h4>Recommends for You</h4>
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
};
const Container = styled.div`
padding: 0 0 25px;
`

const Content = styled.div`
 margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2 , minmax(0, 1fr));
  }
`
export default Recommends
export { Content, Container }