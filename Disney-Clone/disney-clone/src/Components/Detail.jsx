import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { Container, Player, Background, Description, SubTitle, GroupWatch, AddList, Trailer, Controls, ContentMeta, ImageTitle } from "./sharedStyle"
import playIconwhite from "../../src/Images/play-icon-white.png"
import playIconBlack from "../../src/Images/play-icon-black.png"
import groupWatch from "../../src/Images/group-icon.png"

const Detail = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setDetailData(doc.data());
                } else {
                    console.log("no such document in firebase 🔥");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    }, [id]);

    return (
        <Container>
            <Background>
                <img alt={detailData.title} src={detailData.backgroundImg} />
            </Background>

            <ImageTitle>
                <img alt={detailData.title} src={detailData.titleImg} />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={playIconBlack} alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src={playIconwhite} alt="" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src={groupWatch} alt="" />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>{detailData.subTitle}</SubTitle>
                <Description>{detailData.description}</Description>
            </ContentMeta>
        </Container>
    );
};


export default Detail;