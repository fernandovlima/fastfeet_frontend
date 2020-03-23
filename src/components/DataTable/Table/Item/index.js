/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'styled-icons/material';
import { confirmAlert } from 'react-confirm-alert';

import renders from '../renders';
import DropdownMenu from '~/components/DropMenu';
import DeleteConfirm from '~/components/ConfirmDelete';
import actionsCrud from '~/constants/actions';

export default function Item({
  columns,
  item,
  actions,
  onEdit,
  onDelete,
  onView,
  onCancel,
  onViewProblem,
}) {
  const [open, setOpen] = useState(false);

  function handleDelete(id) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return <DeleteConfirm id={id} onClose={onClose} onDelete={onDelete} />;
      },
    });
  }

  return (
    <tr>
      {columns.map(column => (
        <td key={column.field}>{renders.render(item, column)}</td>
      ))}
      <td>
        <span>
          <MdMoreHoriz
            onClick={() => setOpen(value => !value)}
            size={30}
            color="#C6C6C6"
          />

          <DropdownMenu open={open} setOpen={setOpen} marginLeft="-145%">
            {actions.includes(actionsCrud.VIEW) && (
              <span
                onClick={() => {
                  onView(item);
                  setOpen(false);
                }}
              >
                <MdVisibility size={23} color="#8E5BE8" />
                Visualizar
              </span>
            )}

            {actions.includes(actionsCrud.UPDATE) && (
              <span onClick={() => onEdit(item.id)}>
                <MdModeEdit size={23} color="#4D85EE" />
                Editar
              </span>
            )}

            {actions.includes(actionsCrud.DELETE) && (
              <span onClick={() => handleDelete(item.id)}>
                <MdDeleteForever size={23} color="#DE3B3B" />
                Excluir
              </span>
            )}

            {actions.includes(actionsCrud.VIEW_PROBLEM) && (
              <span
                onClick={() => {
                  onViewProblem(item);
                  setOpen(false);
                }}
              >
                <MdModeEdit size={23} color="#4D85EE" />
                Visualizar
              </span>
            )}

            {actions.includes(actionsCrud.CANCEL) && (
              <span onClick={() => onCancel(item.id)}>
                <MdDeleteForever size={23} color="#DE3B3B" />
                Cancelar
              </span>
            )}
          </DropdownMenu>
        </span>
      </td>
    </tr>
  );
}

Item.propTypes = {
  columns: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
};
