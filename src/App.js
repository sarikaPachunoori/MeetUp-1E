import {Route, Switch} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
