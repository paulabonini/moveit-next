import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
    height: 80%;

    background: ${props => props.theme.colors.backgroundLight};
    border-radius: 50%;
    box-shadow: ${props => props.theme.colors.boxShadow};
    padding: 1.5rem 2rem;
    margin-top: 4.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`;

export const ChallengeNotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
        color: ${props => props.theme.colors.text}
        max-width: 60%;
    }

    p {
        display: flex;
        flex-direction: row;
        align-items: center;
        line-height: 1.4;
        max-width: 60%;
        margin-top: 3rem;
        color: ${props => props.theme.colors.text}
    }

    img {
        margin-bottom: 1rem;
    }
`;

export const ChallengeActive = styled.div`
height: 100%;
display: flex;
flex-direction: column;
max-width: 70%;

header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 1rem 0.5rem;
    color: ${props => props.theme.colors.blue};
    border-bottom: 1px solid ${props => props.theme.colors.grayLine};

    margin: 1rem;
}

main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.text}
}
strong {
    font-weight: 600;
    font-size: 2rem;
    color: var(--title);
    margin: 1.5rem 0 1rem;
    color: ${props => props.theme.colors.title};
}

    p {
        line-height: 1.5;

    }

    footer {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        margin: 1rem;

        button {
            height: 2rem;
            width: 2rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 0;
            border-radius: 5px;

            color: var(--gray-dark);

            font-size: 1rem;
            font-weight: 900;
            
            transition: filter 0.2s;
        }
    }
`;

export const ChallengeFailedButton = styled.button`
    background: var(--red);
    
    &:hover {
       filter: brightness(0.7);
    }
`;

export const ChallengeSucceededButton = styled.button`{
    background: var(--green);

    &:hover {
        filter: brightness(0.8);
     }

    img {
        width: 80%;
    } 
`;
