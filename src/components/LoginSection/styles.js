import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginCard = styled.div`
    padding: 20px;
    width: 479px;
    height: 325px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    gap: 16px;
    border-radius: 16px;
    border: 2px solid #F2F2F2;
`

export const Icon = styled.img`
    width: 48px;
    height: 48px;
`

export const Title = styled.h3`
    font-size: 24px;
`

export const Subtitle = styled.h4`
    font-size: 16px;
`

export const FormControl = styled.div`
    gap: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const TextInput = styled.input`
    width: 320px;
    height: 50px;
    padding: 0 20px;
    margin-right: 6px;
    border-radius: 5px;
    background: #F2F2F2;
`

export const DarkButton = styled.button`
    border: none;
    color: #FFFFFF;
    width: 320px;
    height: 50px;
    background: #1A1A1A;
    border-radius: 5px;
    cursor: pointer;
`