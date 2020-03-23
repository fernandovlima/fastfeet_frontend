import React from 'react';
import Card from '~/components/Card';
import CrudTable from '~/components/DataTable';
import actionsCrud from '~/constants/actions';

export default function Deliveryman() {
  return (
    <Card>
      <h2>Gerenciando entregadores</h2>
      <CrudTable
        entity="deliveryman"
        actions={[actionsCrud.CREATE, actionsCrud.DELETE, actionsCrud.UPDATE]}
        searchBar=""
      />
    </Card>
  );
}
