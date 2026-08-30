import { useState } from "react";
import "./Tabs.css"


function Tabs({option}) {
  const [activeTab, setActiveTab] = useState(option[0].id);

  const currentTab = option.find((tab) => tab.id === activeTab);

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {option.map((tab) => (
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