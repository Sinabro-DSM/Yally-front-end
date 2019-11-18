import styled from "styled-components";

interface Props {
  underBarWidth: string;
  buttonWidth: string;
  isActivated: boolean;
}

export const TextDefaultColor = "#707070";

export const TextHighlightColor = "#6665E7";

export const TextErrorColor = "#dd1160";

export const TextRecColor = "#d13f3f";

export const AccountDisabledColor = "#d1d1d1";

export const MainBackgroundColor = "#FDFDFD";

export const MainButtonDefaultColor = "#6665e7";

export const MainButtonHoverColor = "#333393";

export const AccountButton = styled.button<Props>`
  width: 360px;
  height: 60px;
  opacity: 0.69;
  background-image: ${props =>
    props.isActivated && "linear-gradient(to right, #4776e6, #8e54e9 99%)"};
  background-color: ${props => !props.isActivated && AccountDisabledColor};
`;

export const AccountInput = styled.input`
  width: 392px;
  padding: 12px 4px;
  font-size: 24px;
  font-weight: 300;
  color: ${TextDefaultColor};
`;

export const BackgroundImg = styled.img`
  position: absolute;
  bottom: 0;
`;

export const ExplainText = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: ${TextDefaultColor};
`;

export const MainButton = styled.button<Props>`
  width: ${props => props.buttonWidth};
  background-color: ${MainButtonDefaultColor};
  opacity: ${props => props.isActivated && 0.3};
  height: 48px;
  border-radius: 23px;
  color: white;
  & hover {
    background-color: ${MainButtonHoverColor};
  }
`;

export const TitleUnderbar = styled.div<Props>`
  width: ${props => props.underBarWidth};
  height: 8px;
  opacity: 0.8;
  background-image: linear-gradient(to right, #4776e6, #8e54e9 99%);
`;

export const TitleText = styled.p<Props>`
  font-family: "Mont-DEMO";
  font-size: 60px;
  font-weight: 900;
  color: ${TextDefaultColor};
`;

export const WrongMessage = styled.p<Props>`
  visibility: ${props => props.isActivated && "hidden"};
  font-size: 15px;
  font-weight: 300;
  text-align: right;
  color: ${TextErrorColor};
`;
