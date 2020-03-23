import React from 'react';
import Card from '~/components/Card';
import DataTable from '~/components/DataTable';
import actionsCrud from '~/constants/actions';

export default function RecipientList() {
  return (
    <Card>
      <h2>Gerenciando destinatários</h2>
      <DataTable
        entity="recipient"
        actions={[actionsCrud.CREATE, actionsCrud.DELETE, actionsCrud.UPDATE]}
        searchBar=""
      />
    </Card>
  );
}
