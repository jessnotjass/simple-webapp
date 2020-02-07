import React from 'react'
import styled from 'styled-components'
import SignupForm from '../components/SignupForm'
import BackgroundImage from '../assets/images/background.png'

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const Landing = () => {
  return (
    <Background>
      <SignupForm />
    </Background>
  )
}

export default Landing
