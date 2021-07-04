import React from 'react'
import SignUp from './SignUp'
import Login from './Login';
import DashBoard from './DashBoard';
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }} >
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path ='/' component ={DashBoard}/>
              <Route path='/signup' component={SignUp}/>
              <Route path = '/login' component = {Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;
