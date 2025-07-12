import React from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Pending Items</li>
          <li>Users</li>
          <li>Reports</li>
        </ul>
      </aside>

      <main className="admin-main">
        <h1>Pending Listings</h1>
        <div className="item-grid">
          <div className="item-card">
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQx1kyABd75cIkivbLvvwCe5twvE9vroQnZtxIVXGOlO4eKo3j6xeMyNn2yIFsbyLW1O_qjJbj5eziW3BHqrwmgHeALfw6VmlHpG9X0eKTO7oUmhNKDS2Gy"  alt="Item" />
            <div className="item-details">
              <h3>Blue Jacket</h3>
              <p><strong>User:</strong> Alex123</p>
              <p><strong>Tags:</strong> Jacket, Winter</p>
              <div className="btn-group">
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
              </div>
            </div>
          </div>

          {/* Duplicate for more items */}
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
