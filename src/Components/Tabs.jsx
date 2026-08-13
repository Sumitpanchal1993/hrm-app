import { useState } from "react";
import "./Tabs.css"
const tabs = [
  {
    id: "home",
    label: "Home",
    content: <h2>Welcome Home</h2>,
  },
  {
    id: "profile",
    label: "Profile",
    content: <h2>Your Profile</h2>,
  },
  {
    id: "settings",
    label: "Settings",
    content: <h2>Settings</h2>,
  },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {currentTab.content}
      </div>
    </div>
  );
}

export default Tabs;