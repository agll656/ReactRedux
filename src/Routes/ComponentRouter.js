import RouteMapper from '../Routes/Routes';
import {Route} from 'react-router-dom';
import ChildComponent from '../components/ChildComponent';

function ComponentRouter() {

    return (

        <div>
            <Route exact path= "/child" component={ChildComponent} />
        </div>

    )

}