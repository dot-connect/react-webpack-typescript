// import 'bootswatch/paper/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';


import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render((
    <div>hello</div>
), document.getElementById("content"));