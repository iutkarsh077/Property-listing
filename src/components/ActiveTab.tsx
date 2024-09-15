import Overview from "./Tabs/Overview";
import Amenities from "./Tabs/Amenities";
import Policies from "./Tabs/Policies";
import Location from "./Tabs/Location";
import Host from "./Tabs/Host";

const ActiveTab = ({ activeTab }: { activeTab: string }) => {
    
  switch (activeTab) {
    case "Overview":
      return <Overview />;
    case "Amenities":
      return <Amenities />;
    case "Policies":
      return <Policies />;
    case "Location":
      return <Location />;
    case "Host":
      return <Host />;
  }
};

export default ActiveTab;
