import React from 'react'

const MeetUpContext = React.createContext({
  name: 'Welcome to Meetup',
  topic: 'Please register for the topic',
  register: true,
  changeUserData: () => {},
})
export default MeetUpContext
