import {Component} from 'react'

import {Heading, Container, Logo, Para, Register} from './styledCom'

class Home extends Component {
  onClickRegister = () => {
    const {history} = this.props
    history.replace('/register')
  }

  render() {
    return (
      <div>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
        <Container>
          <Heading>Welcome to Meetup</Heading>
          <Para>Please register for the topic</Para>
          <Register type="button" onClick={this.onClickRegister}>
            Register
          </Register>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </Container>
      </div>
    )
  }
}

export default Home
