import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const DynamicButtonTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      const selectedTab = tabs.find((t) => t.name === tab);
      if (selectedTab && selectedTab.onClick) {
        selectedTab.onClick();
      }
    }
  };

  return (
    <div>
      <ButtonGroup>
        {tabs.map((tab) => (
          <Button
            key={tab.name}
            color={activeTab === tab.name ? 'primary' : 'secondary'}
            onClick={() => toggleTab(tab.name)}
          >
            {tab.label}
          </Button>
        ))}
      </ButtonGroup>
      <div className="mt-3">
        {tabs.map((tab) => (
          <div key={tab.name} style={{ display: activeTab === tab.name ? 'block' : 'none' }}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicButtonTab;
