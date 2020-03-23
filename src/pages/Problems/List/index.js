import React from 'react';
import Card from '~/components/Card';
import CrudTable from '~/components/DataTable';
import actionsCrud from '~/constants/actions';

export default function Problems() {
  return (
    <Card>
      <h2>Problemas na entrega</h2>
      <CrudTable
        entity="problems"
        actions={[actionsCrud.VIEW_PROBLEM, actionsCrud.CANCEL]}
      />
    </Card>
  );
}
