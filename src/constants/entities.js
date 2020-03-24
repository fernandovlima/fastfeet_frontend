const entities = {
  packages: {
    urls: {
      get: '/packages',
      show: '/packackes/:id',
    },
    columns: [
      { field: 'id', label: 'ID', type: 'text' },
      { field: 'product', label: 'Produto', type: 'text' },
      { field: 'recipient.name', label: 'Destinatário', type: 'text' },
      { field: 'deliveryman', label: 'Entregador', type: 'driver' },
      { field: 'recipient.city', label: 'Cidade', type: 'text' },
      { field: 'recipient.state', label: 'Estado', type: 'text' },
      { field: 'status', label: 'Status', type: 'status' },
    ],
    labels: {
      find: 'Busca por destinatários',
      textCreate: 'Cadastro de encomendas',
      textEdit: 'Edição de encomendas',
    },
  },
  deliveryman: {
    urls: {
      get: '/deliveryman',
      show: '/deliveryman/:id',
    },
    columns: [
      { field: 'id', label: 'ID', type: 'text' },
      { field: 'avatar.url', label: 'Foto', type: 'avatar' },
      { field: 'name', label: 'Nome', type: 'text' },
      { field: 'email', label: 'Email', type: 'fulltext' },
    ],
    labels: {
      find: 'Busca por entregadores',
      textCreate: 'Cadastro de entregador',
      textEdit: 'Edição de entregador',
    },
  },
  recipients: {
    urls: {
      get: '/recipients',
      show: '/recipients/:id',
    },
    columns: [
      { field: 'id', label: 'ID', type: 'text' },
      { field: 'name', label: 'Nome', type: 'text' },
      { field: 'address', label: 'Endereço', type: 'fulltext' },
    ],
    labels: {
      find: 'Busca por destinatários',
      textCreate: 'Cadastro de destinatário',
      textEdit: 'Edição de destinatário',
    },
  },
  problems: {
    columns: [
      { field: 'id', label: 'ID', type: 'text' },
      { field: 'description', label: 'Descrição', type: 'fulltext' },
    ],
  },
};

export default entities;
