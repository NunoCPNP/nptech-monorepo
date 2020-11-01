import styled from '@nptech/theme-provider'

export const Wrapper = styled.div`
  z-index: 50;
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 70px;
  height: 30px;
  margin: 0 auto;
  border-radius: 20px;

  input[type='checkbox'] {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: 0px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  span {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 1;
    background-color: #fff;
    box-shadow: 0px 2px 10px 0px rgba(250, 250, 250, 0.1);
    border-radius: 30px;
    transition: 0.2s ease background-color, 0.2s ease opacity;
  }

  span:before,
  span:after {
    content: '';
    position: absolute;
    top: 4px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    transition: 0.5s ease transform, 0.2s ease background-color;
  }

  span:before {
    background-color: #fff;
    transform: translate(-50px, 0px);
    z-index: 1;
  }

  span:after {
    background-color: #505050;
    transform: translate(4px, 0px);
    z-index: 0;
  }

  input[type='checkbox']:checked + span {
    background-color: #505050;
  }

  input[type='checkbox']:active + span {
    opacity: 0.5;
  }

  input[type='checkbox']:checked + span:before {
    background-color: #505050;
    transform: translate(51px, -4px);
  }

  input[type='checkbox']:checked + span:after {
    background-color: #fff;
    transform: translate(42px, 0px);
  }
`
