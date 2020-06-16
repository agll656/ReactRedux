
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom' ;
import RouteMapper from './Routes/Routes';
import ChildComponent from './ChildComponent';

function Main(){
        return (
      <Router>
        <Route exact path= {RouteMapper.CHILD.path} component={ChildComponent}/>
      
     
      
      </Router>
      );
    }

export default Main;