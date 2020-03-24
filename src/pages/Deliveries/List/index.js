import React from 'react';
import Card from '~/components/Card';
import DataTable from '~/components/DataTable';
import actionsCrud from '~/constants/actions';

export default function DeliveryList() {
  return (
    <Card>
      <h2>Gerenciando encomendas</h2>
      <DataTable
        entity="packages"
        actions={[
          actionsCrud.VIEW,
          actionsCrud.CREATE,
          actionsCrud.DELETE,
          actionsCrud.UPDATE,
        ]}
        searchBar=""
      />
    </Card>
  );
}
