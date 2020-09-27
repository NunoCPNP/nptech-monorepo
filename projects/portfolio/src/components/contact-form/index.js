import { ButtonContainer, StyledDiv } from './styles'

import LinkButton from '../link-button'

const ContactForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault()
    alert(' SEND ')
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <StyledDiv>
        <label htmlFor="name">Name:</label>
        <input autoComplete="off" id="name" type="text" placeholder="Your Name" />
      </StyledDiv>
      <StyledDiv>
        <label htmlFor="email">Email:</label>
        <input autoComplete="off" id="email" type="text" placeholder="Your E-Mail" />
      </StyledDiv>
      <StyledDiv>
        <label htmlFor="phone">Phone:</label>
        <input autoComplete="off" id="phone" type="text" placeholder="Your Phone Number" />
      </StyledDiv>
      <StyledDiv>
        <label htmlFor="message">Message:</label>
        <input autoComplete="off" id="message" type="text" placeholder="Your Message" />
      </StyledDiv>
      <ButtonContainer>
        <LinkButton type="submit" aria-label="submit" label="Send Message" icon="email" />
      </ButtonContainer>
    </form>
  )
}

export default ContactForm
