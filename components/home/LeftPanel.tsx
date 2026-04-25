import { exploreItems, categoryItems } from "@/components/home/paneltems"


const LeftPanel = () => {
  return (
    <aside className="hidden md:flex flex-col w-60 h-screen border-r border-border bg-background/50 px-4 py-6 space-y-6 overflow-y-auto">
      {/* Header */}
        {/* Explore Section */}
      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase mb-2 tracking-wide">Explore</h2>
        <ul className="space-y-1">
          {exploreItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-accent transition-colors"
            >
              <span className={item.color}><item.icon/></span>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories Section */}
      <div>
        <h2 className="text-xs font-semibold text-muted-foreground uppercase mb-2 tracking-wide">Categories</h2>
        <ul className="space-y-1">
          {categoryItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-accent transition-colors"
            >
              <span className={item.color}><item.icon/></span>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default LeftPanel;