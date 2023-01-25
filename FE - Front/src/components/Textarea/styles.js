import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  background-color: ${({theme}) => theme.COLORS.BLACK_900};
  color: ${({theme}) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: .8rem;
  border-radius: .8rem;
  padding: 16px;

  &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_800};
  }
`;