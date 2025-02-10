import React from 'react'
import TaskInput from './components/TaskInput/TaskInput'
import TaskList from './components/TaskList/TaskList'
import { Container, Title } from './App.styles'

const App = () => (
  <Container>
    <Title>Sophisticated Todo List</Title>
    <TaskInput />
    <TaskList />
  </Container>
)

export default App