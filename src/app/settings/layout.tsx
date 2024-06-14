import React from "react";
import SidePanel from "./_components/SidePanel";

export interface Option {
  key: string;
  name: string;
}

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const options = [
    { name: "Account", key: "account" },
    { name: "Purchased Courses", key: "purchased" },
  ];

  return (
    <div className="m-4">
      <div className="grid grid-cols-8">
        <SidePanel options={options} />
        <div style={{ gridColumn: "3/9" }}>{children}</div>
      </div>
    </div>
  );
};

export default SettingsLayout;
