import React from "react";
import SidePanel from "./_components/SidePanel";
import { Row } from "@/components/shared/row";
import WithAuth from "@/components/authentication/WithAuth";

export interface Option {
  key: string;
  name: string;
}

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const options = [
    { name: "Account", key: "account" },
    { name: "Purchased Courses", key: "purchased" },
    { name: "Add/Edit Courses", key: "manage" },
  ];

  return (
    <WithAuth>
      <Row className="my-4">
        <div className="grid grid-cols-8">
          <SidePanel options={options} />
          <div style={{ gridColumn: "3/9" }}>{children}</div>
        </div>
      </Row>
    </WithAuth>
  );
};

export default SettingsLayout;
