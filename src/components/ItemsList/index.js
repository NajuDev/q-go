import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeItem, toggleComplete, filter } from '../../logic/actions';
import './styles.css';

export const ItemsList = ({ items, showComplete, onDelete, toggleStatus, filterComplete }) => {
  return (
    <div>
        <input
            type="checkbox"
            value={showComplete}
            onChange={() => {
                filterComplete();
            }}
        />Show Completed
      <ul className={'itemsList-ul ' + (showComplete ? '' : 'filtered')}>
        {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {items.map(item => {
            return <li key={item.id} className={item.status ? 'complete' : ''  }>
                <input
                    type="checkbox"
                    value={item.status}
                    onChange={() => {
                        toggleStatus(item.id);
                    }}
                />
                {
                    (() => item.status ? <s>{item.content}</s> : item.content)()
                }
                <input
                    type="button"
                    value="Delete"
                    onClick={() => {
                        onDelete(item.id);
                    }}
                />
            </li>;
        })}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return { items: state.todos.items, showComplete: state.todos.showComplete };
};

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(removeItem(id)),
    toggleStatus: id => dispatch(toggleComplete(id)),
    filterComplete: () => dispatch(filter()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
