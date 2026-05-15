import '../../styles/components/tabs.css'

interface PillTab {
  value: string
  label: string
  count?: number
  icon?: React.ReactNode
}

interface PillFilterTabsProps {
  tabs: PillTab[]
  activeTab: string
  onChange: (value: string) => void
}

const PillFilterTabs = ({ tabs, activeTab, onChange }: PillFilterTabsProps) => (
  <div className="pill-tabs" role="tablist">
    {tabs.map((tab) => (
      <button
        key={tab.value}
        className={`pill-tabs__item${activeTab === tab.value ? ' is-active' : ''}`}
        onClick={() => onChange(tab.value)}
        role="tab"
        aria-selected={activeTab === tab.value}
      >
        {tab.icon && <span className="pill-tabs__icon">{tab.icon}</span>}
        {tab.label}
        {tab.count !== undefined && (
          <span className="pill-tabs__count">{tab.count}</span>
        )}
      </button>
    ))}
  </div>
)

export default PillFilterTabs