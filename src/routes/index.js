import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import { DeliveryForm, DeliveryList } from '~/pages/Deliveries';

import { DeliverymanForm, DeliverymanList } from '~/pages/Deliverymans';

import { RecipientForm, RecipientList } from '~/pages/Recipients';
import { ProblemsList } from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/packages" exact component={DeliveryList} />
      <Route path="/packages/new" exact component={DeliveryForm} isPrivate />
      <Route
        path="/packages/edit/:id"
        exact
        component={DeliveryForm}
        isPrivate
      />

      <Route path="/deliveryman" exact component={DeliverymanList} isPrivate />
      <Route
        path="/deliveryman/new"
        exact
        component={DeliverymanForm}
        isPrivate
      />
      <Route path="/deliveryman" exact component={DeliverymanList} isPrivate />
      <Route
        path="/deliveryman/edit/:id"
        exact
        component={DeliverymanForm}
        isPrivate
      />

      <Route path="/recipients" exact component={RecipientList} isPrivate />
      <Route path="/recipient/new" exact component={RecipientForm} isPrivate />
      <Route
        path="/recipients/edit/:id"
        exact
        component={RecipientForm}
        isPrivate
      />

      <Route path="/problems" exact component={ProblemsList} isPrivate />
    </Switch>
  );
}
