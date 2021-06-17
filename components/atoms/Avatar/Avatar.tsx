import { FunctionComponent } from "react";
import * as styled from "./Avatar.styles";
import { AvatarProps } from "./types";
import AvatarPicture from "../../../public/avatar.jpg";

const Avatar: FunctionComponent = () => (
  <styled.wrapper>
    <styled.Example
      src={AvatarPicture}
      height={400}
      width={300}
      placeholder="blur"
      alt="avatar"
    />
  </styled.wrapper>
);

export default Avatar;
