import React from 'react';
import MainApp from './mainApp/MainApp';
import PussyApp from './pussyApp/PussyApp';
import PussyAppAdminArea from './pussyApp/AdminArea';
import PussyAppMemberArea from './pussyApp/MemberArea';
import {Route, Switch, Redirect} from 'react-router';
import Footer from './common/Footer';
import {css} from 'aphrodite';
import styles from './mainApp/MainAppStyles';
import TriangleApp from './triangleApp/TriangleApp';
import Modal from './common/Modal';


export default () => {
  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.content)}>
        <Route exact path='/' component={MainApp}/>
        <Route path='/pussy' component={PussyApp}/>
        <Route exact path="/pussy" render={() => <Redirect to="/pussy/member"/>}/>
        <Route path="/triangle" component={TriangleApp}/>

        <Switch>
          <Route exact path='/pussy/member' component={PussyAppMemberArea}/>
          <Route exact path='/pussy/admin' component={PussyAppAdminArea}/>
        </Switch>
      </div>
      <Footer>
        © {(new Date()).getFullYear()}
      </Footer>
      <Modal/>
    </div>
  );
};

