import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, Tabs } from 'antd'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
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
const FormCard = styled(Card)`
  @media only screen and (max-width: 600px) {
    width: 70%;
  }
  @media only screen and (min-width: 600px) {
    width: 60%;
  }
  @media only screen and (min-width: 768px) {
    width: 50%
  }
  @media only screen and (min-width: 992px) {
    width: 40%
  }
  @media only screen and (min-width: 1200px) {
    width: 30%
  }
  min-height: 40%;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  margin: 0 auto;
`
const HelpText = styled.div`
  text-align: center;
`
const Landing = () => {
  const { TabPane } = Tabs
  const [currentTab, setCurrentTab] = useState('2')
  return (
    <Background>
      <FormCard>
        <Tabs
          defaultActiveKey='2'
          activeKey={currentTab}
          onChange={activeKey => setCurrentTab(activeKey)}>
          <TabPane tab='Sign Up' key='1'>
            <SignupForm />
            <HelpText>
              <a onClick={() => setCurrentTab('2')}>Already have an account?</a>
            </HelpText>
          </TabPane>
          <TabPane tab='Log In' key='2'>
            <LoginForm />
            <HelpText>
              <a onClick={() => setCurrentTab('1')}>Need an account?</a>
            </HelpText>
          </TabPane>
        </Tabs>
      </FormCard>
    </Background>
  )
}

export default Landing
