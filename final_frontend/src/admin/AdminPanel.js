import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminPanel = () => {
  return (
    <div className="d-flex bg-light">
      <Sidebar />
      <div className="flex-grow-1"  style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
