import React from 'react';
import MainApp from './MainApp';
import PussyApp from './pussyApp';
import PussyAppAdminArea from './pussyApp/AdminArea';
import PussyAppMemberArea from './pussyApp/MemberArea';
import {Route, Switch, Redirect} from 'react-router';


export default () => {
  return (
    <div>
      <Route exact path='/' component={MainApp}/>
      <Route path='/pussy' component={PussyApp}/>
      <Route exact path="/pussy" render={() => <Redirect to="/pussy/member"/>}/>

      <Switch>
        <Route exact path='/pussy/member' component={PussyAppMemberArea}/>
        <Route exact path='/pussy/admin' component={PussyAppAdminArea}/>
      </Switch>
    </div>
  );
};

