import react from "react";
import styled from "styled-components";

const ModCard = styled.div<{ backgroundColor: string }>`
    height: 550px;
    max-width: 50%;
    background-color: ${props => props.backgroundColor};
    padding: 30px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
    margin: 30px;

    @media screen and (max-width: 600px) {
        margin: 20px 5px;
    }
`;

const Title = styled.h2`
    color: white;
    text-align: center;
    margin-bottom: 40px;
    font-size: 30px;
    font-family: Rock Salt, Open Sans;
`;
const Text = styled.div`
    color: white;
    font-size: 20px;
`;
export default function ModerationCard({ title, text, backgroundColor }) {
    return (
        <ModCard backgroundColor={backgroundColor}>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </ModCard>
    );
};