import styled from "styled-components";

const Image = styled.img.attrs({
  src: "assets/time.jpg",
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
