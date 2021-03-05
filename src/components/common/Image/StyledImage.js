import styled from "styled-components";

const Image = styled.img.attrs({
  src: process.env.PUBLIC_URL + "/assets/time.png",
})`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;

  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;
export default Image;
