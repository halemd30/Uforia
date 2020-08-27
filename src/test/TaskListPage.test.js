import React from 'react';
import ReactDOM from 'react-dom';
import TaskListPage from '../routes/TaskListPage/TaskListPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskListPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
