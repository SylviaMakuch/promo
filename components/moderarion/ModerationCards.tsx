import react from "react";
import styled from "styled-components";
import ModerationCard from "./ModerationCard";
import { ModerationData } from "./config";

const ModCardsContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        flex-wrap: wrap;
        flex-direction: column;
        padding: 50px 0px;
    }
    @media screen and (max-width: 600px) {
        padding: 20px 0px;
    }
`;

export default function ModerationCards() {
    return (
        <ModCardsContainer>
            {
                ModerationData.map(({ title, text, backgroundColor, image }, index) => {
                    return <ModerationCard title={title} text={text} backgroundColor={backgroundColor} key={index} />
                })
            }
        </ModCardsContainer>
    );
};