import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './SideNavbar.css'
import menuList from '../Static Data/SideNav_Menu'
import { useAppContext } from '../Context Store/store'

export default function SideNavbar() {
  const { isHRAdmin, isManager } = useAppContext()
  const [activeItem, setActiveItem] = useState("")

  const employeeDashboard = [
    { title: 'Tasks', link: '/tasks' },
    { title: 'Personal Info', link: '/personal-info' },
    { title: 'Team', link: '/team' },
    { title: 'Financial', link: '/financial' },
    { title: 'Leaves Detail', link: '/leaves-detail' },
    { title: 'Attendence', link: '/attendence' },
  ]
  const managerDashboard = [
    { title: 'Approvals', link: '/approval' },
    { title: 'Requests', link: '/request' },
  ]

  const hrDashboard = [
    { title: 'Recruitments', link: '/recruitments' },
    { title: 'Add Employee', link: '/add-employee' },
    { title: 'Edit Employee', link: '/edit-employee' },
    { title: 'PayRoll', link: '/payroll' },
    { title: 'Create Team', link: '/create-team' },
    { title: 'Attendence Log', link: '/attendence-log' },
    { title: 'Recruitments', link: '/recruitments' },
  ]


  return (
    <>
      <div className='side-menu-base'>
        <div>
          <div className='side-menu-heading'>
            {isHRAdmin ? <h3>HR Admin Dashboard</h3> : <h3>Employee Dashboard</h3>}
          </div>
          <div className='side-menu-subheading'>
            <p>Menu</p>
          </div>
          <hr />
          {!isHRAdmin && <div className='side-menu-option' >
            {employeeDashboard.map((item, index) => (
              <Link to={item.link} key={index} className={activeItem === item.title ? "active-option" : ""} onClick={() => { setActiveItem(item.title) }}>
                <p>{item.title}</p>
              </Link>
            ))}
          </div>}
          {isManager && <div className='side-menu-option' >
            {managerDashboard.map((item, index) => (
              <Link to={item.link} key={index} className={activeItem === item.title ? "active-option" : ""} onClick={() => { setActiveItem(item.title) }}>
                <p>{item.title}</p>
              </Link>
            ))}
          </div>}
          {isHRAdmin && <div className='side-menu-option' >
            {hrDashboard.map((item, index) => (
              <Link to={item.link} key={index} className={activeItem === item.title ? "active-option" : ""} onClick={() => { setActiveItem(item.title) }}>
                <p>{item.title}</p>
              </Link>
            ))}
          </div>}

        </div>

        <div>

          <div className='side-menu-subheading'>
            <p>General</p>
          </div>
          <hr />
          <div className='side-menu-option'>
            <Link to="/setting" >
              <p>Setting</p>
            </Link>
            <Link to="/faq" >
              <p>Help & FAQ</p>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}




// export default function SideNavbar() {
//   const [collapsed, setCollapsed] = useState(false);

//   const handleToggle = () => {
//     setCollapsed((prev) => !prev);
//   };

//   // Detect mobile view
//   const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches;

//   return (
//     <>
//       {/* Backdrop overlay for mobile, only when sidebar is open. Rendered before sidebar for correct stacking. */}
//       {isMobile && !collapsed && (
//         <div
//           className="sidebar-backdrop"
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             background: 'rgba(0,0,0,0.3)',
//             zIndex: 99,
//           }}
//           onClick={() => setCollapsed(true)}
//         />
//       )}
//       {/* Sidebar rendered after backdrop for higher z-index */}
//       <nav className={`left-nav ${collapsed ? 'collapsed' : ''}`} style={{ zIndex: 102 }}>
//         <div id='logo' className={collapsed ? 'collapsed-logo' : ''}>
//           {!collapsed && <Link to='/'>HRM APP</Link>}
//         </div>
//         <hr className={collapsed ? 'collapsed-hr' : ''} />
//         <div className='open_close' onClick={handleToggle} id='arrow' style={{ top: '1.5rem', right: '-18px', position: 'absolute', zIndex: 103 }}>
//           <span className="material-symbols-outlined">
//             {collapsed ? 'arrow_back_ios' : 'arrow_forward_ios'}
//           </span>
//         </div>
//         <div>
//           {menuList.map((item, index) => (
//             <div className='menuopt' key={index} >
//               <NavLink to={item.link}>
//                 <span className="material-symbols-outlined">{item.icon}</span>
//                 {!collapsed && <p>{item.title}</p>}
//               </NavLink>
//             </div>
//           ))}
//         </div>
//       </nav>
//     </>
//   );
// }