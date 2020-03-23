import React from 'react';
import TextRender from './Text';
import StatusRender from './Status';
import DriverRender from './Driver';
import FulltextRender from './FullText';
import AvatarRender from './Avatar';

function render(data, column) {
  switch (column.type) {
    case 'driver':
      return <DriverRender data={data} column={column} />;
    case 'status':
      return <StatusRender data={data} column={column} />;
    case 'fulltext':
      return <FulltextRender data={data} column={column} />;
    case 'avatar':
      return <AvatarRender data={data} column={column} />;
    case 'text':
    default:
      return <TextRender data={data} column={column} />;
  }
}

export default {
  render,
};
