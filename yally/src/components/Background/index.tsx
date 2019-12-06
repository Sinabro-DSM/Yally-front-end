import * as React from "react";

import * as S from "./style";
import { backgroundLeft, backgroundRight } from "./../../assets";

const Background: React.FC = () => (
  <div>
    <S.BackgroundLeftImg src={backgroundLeft} />
    <S.BackgroundRightImg src={backgroundRight} />
  </div>
);

export default Background;
