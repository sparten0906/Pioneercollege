import { useState, type ReactNode } from 'react'
import '../../styles/components/tabs.css'

interface Tab {
  id: string
  label: string
  icon?: ReactNode
  content: ReactNode
}

interface ContentPanelTabsProps {
  tabs: Tab[]
  defaultTab?: string
}

const ContentPanelTabs = ({ tabs, defaultTab }: ContentPanelTabsProps) => {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id)
  const activeTab = tabs.find((t) => t.id === active)

  return (
    <div>
      <div className="content-tabs__nav" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`content-tabs__tab${active === tab.id ? ' is-active' : ''}`}
            onClick={() => setActive(tab.id)}
            role="tab"
            aria-selected={active === tab.id}
          >
            {tab.icon && <span className="content-tabs__tab-icon">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="content-tabs__panel" role="tabpanel">
        {activeTab?.content}
      </div>
    </div>
  )
}

export default ContentPanelTabs
