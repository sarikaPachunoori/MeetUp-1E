import {Component} from 'react'

import {
  Cont,
  RegHeading,
  RegImg,
  Form,
  Label,
  Input,
  RightCont,
  Option,
  Select,
} from './styledCom'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {name: ''}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name} = this.state
    return (
      <Cont>
        <div>
          <RegImg
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
        </div>
        <RightCont>
          <RegHeading>Let us join</RegHeading>
          <Form>
            <Label htmlFor="name">NAME</Label>
            <Input
              type="text"
              placeholder="Your name"
              id="name"
              value={name}
              onChange={this.onChangeName}
            />
            <Label>TOPICS</Label>
            <Select>
              {topicsList.map(each => (
                <Option key={each.id}>{each.displayText} </Option>
              ))}
            </Select>
            <Register>Register Now</Register>
          </Form>
        </RightCont>
      </Cont>
    )
  }
}
export default Register
