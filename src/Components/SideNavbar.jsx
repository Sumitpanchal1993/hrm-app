import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SideNavbar.css'
import menuList from '../Static Data/SideNav_Menu'

export default function SideNavbar() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  // Detect mobile view
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches;

  return (
    <>
      {/* Backdrop overlay for mobile, only when sidebar is open. Rendered before sidebar for correct stacking. */}
      {isMobile && !collapsed && (
        <div
          className="sidebar-backdrop"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.3)',
            zIndex: 99,
          }}
          onClick={() => setCollapsed(true)}
        />
      )}
      {/* Sidebar rendered after backdrop for higher z-index */}
      <nav className={`left-nav ${collapsed ? 'collapsed' : ''}`} style={{ zIndex: 102 }}>
        <div id='logo' className={collapsed ? 'collapsed-logo' : ''}>
          {!collapsed && <Link to='/'>HRM APP</Link>}
        </div>
        <hr className={collapsed ? 'collapsed-hr' : ''} />
        <div className='open_close' onClick={handleToggle} id='arrow' style={{ top: '1.5rem', right: '-18px', position: 'absolute', zIndex: 103 }}>
          <span className="material-symbols-outlined">
            {collapsed ? 'arrow_back_ios' : 'arrow_forward_ios'}
          </span>
        </div>
        <div>
          {menuList.map((item, index) => (
            <div className='menuopt' key={index} >
              <NavLink to={item.link}>
                <span className="material-symbols-outlined">{item.icon}</span>
                {!collapsed && <p>{item.title}</p>}
              </NavLink>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}