import styled from '@nptech/theme-provider'

export const StyledDiv = styled.div`
  padding: 1rem 0;
  font-size: 1.7rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.highlight};

  input {
    padding-left: 1.5rem;
    border: none;
    outline: none;
    background: none;
    color: ${({ theme }) => theme.colors.white};
    width: 76%;
    font-size: 1.3rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`
