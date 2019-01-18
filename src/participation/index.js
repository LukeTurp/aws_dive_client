import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FormParticipation from '../formParticipation';
import LoginParticipation from '../loginParticipation';

export default () =>
    <Switch>
        <Route component={FormParticipation} />
        <Route component={LoginParticipation} />
    </Switch>