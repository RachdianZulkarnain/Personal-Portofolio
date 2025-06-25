import React from "react";

interface TabButtonProps {
  selectTab: () => void;
  active: boolean;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  selectTab,
  active,
  children,
}) => {
  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold ${
        active ? "text-white border-b-2 border-purple-500" : "text-[#ADB7BE]"
      } hover:text-white`}
    >
      {children}
    </button>
  );
};

export default TabButton;
