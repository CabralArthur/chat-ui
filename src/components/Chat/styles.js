import styled from 'styled-components';

export const ChatCard = styled.div`
    padding: 16px;
    gap: 16px;

    position: relative;
    width: 479px;
    height: 417px;

    background: #FFFFFF;
    border-radius: 20px;
    border: 2px solid #F2F2F2;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const H3 = styled.h3`
    color: #1A1A1A;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const HR = styled.hr`
    border: 1px solid #F2F2F2;
`

export const FormControl = styled.div`
    gap: 8px;
    display: flex;
    align-items: center;
`

export const ChatHeader = styled.div`
    display: flex;
    flex-direction: column;
`

export const DarkButton = styled.button`
    border: none;
    color: #FFFFFF;
    width: 80px;
    height: 50px;
    background: #1A1A1A;
    border-radius: 5px;
    cursor: pointer;
`

export const ChatBody = styled.div`
    width: 90%;
    height: 70%;
    padding: 8px 16px;
`

export const TextInput = styled.input`
    width: 320px;
    height: 50px;
    padding: 0 20px;
    margin-right: 6px;
    border-radius: 5px;
    background: #F2F2F2;
`

export const ChatMessage = styled.div`
    width: 80px;
    height: 40px;
`