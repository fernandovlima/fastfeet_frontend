import React, { memo } from 'react';
import Avatar from '~/components/Avatar';

const AvatarRender = ({ data }) => {
  const { name, avatar } = data;

  return <Avatar name={name} avatar={avatar} />;
};

export default memo(AvatarRender);
