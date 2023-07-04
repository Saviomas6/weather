import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const MainContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const InputFieldContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 40px;
  }
`;

export const InputField = styled.input`
  height: 100%;
  width: 500px;
  border-radius: 40px;
  outline: none;
  border: none;
  background-color: #fafafa;
  color: #000;
  font-size: 18px;
  padding: 0 26px;
  box-sizing: border-box;
  ::placeholder {
    color: #808080;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const TemperatureValue = styled.h1`
  font-size: 80px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

export const DateText = styled.h4`
  font-size: 20px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const LabelMainWrapper = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px;
  gap: 20px;
`;

export const LabelWrapper = styled.div`
  text-align: center;
`;

export const Label = styled.div`
  font-size: 20px;
  color: #fff;
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 30px;
  color: #fff;
`;
