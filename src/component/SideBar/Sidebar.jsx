import React from 'react';
import '../SideBar/Sidebar.css'
import { FaUser, FaMapPin, FaChartBar } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar-list">
      <nav>
        <ul className="sidebar-icons">
          <FaUser className="icon person-icon" title="Person" />
          <FaMapPin className="icon pin-icon" title="Pin" />
          <FaChartBar className="icon bargraph-icon" title="Bar Graph" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
