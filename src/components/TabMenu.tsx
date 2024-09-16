import { useState, useEffect, useRef } from "react";
import ActiveTab from "./ActiveTab";

interface Tab {
  name: string;
  icon: string;
}

interface SliderStyle {
  width: string;
  left: string;
}

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [sliderStyle, setSliderStyle] = useState<SliderStyle>({
    width: "0px",
    left: "0px",
  });
  const tabRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  const tabs: Tab[] = [
    { name: "Overview", icon: "overview" },
    { name: "Amenities", icon: "amenities" },
    { name: "Policies", icon: "policies" },
    { name: "Location", icon: "location" },
    { name: "Host", icon: "host" },
  ];

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      setSliderStyle({
        width: `${activeTabElement.offsetWidth}px`,
        left: `${activeTabElement.offsetLeft}px`,
      });
    }
  }, [activeTab]);

  const handleTabClick = (tab: string): void => {
    setActiveTab(tab);
  };

  const renderIcon = (tabName: string): JSX.Element | null => {
    switch (tabName) {
      case "Overview":
        return (
          <svg
            className="w-4 h-4 me-2 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
          </svg>
        );
      case "Amenities":
        return (
          <svg
            className="w-4 h-4 me-2 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        );
      case "Policies":
        return (
          <svg
            className="w-4 h-4 me-2 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
          </svg>
        );
      case "Location":
        return (
          <svg
            className="w-4 h-4 me-2 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C7.589 0 4 3.589 4 8c0 5.25 7.25 13.25 7.448 13.468.291.314.76.314 1.052 0C12.75 21.25 20 13.25 20 8c0-4.411-3.589-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
        );
      case "Host":
        return (
          <svg
            className="w-4 h-4 me-2 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700 relative bg-white rounded-t-lg">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className="me-2 cursor-pointer"
              ref={(el) => (tabRefs.current[tab.name] = el)}
            >
              <p
                onClick={() => handleTabClick(tab.name)}
                className={`inline-flex items-center justify-center p-4 rounded-t-lg transition-colors duration-300 ease-in-out ${
                  activeTab === tab.name
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                {renderIcon(tab.name)}
                {tab.name}
              </p>
            </li>
          ))}
        </ul>
        <div
          className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out"
          style={sliderStyle}
        />
      </div>
      <ActiveTab activeTab={activeTab} />
    </div>
  );
};

export default TabMenu;
