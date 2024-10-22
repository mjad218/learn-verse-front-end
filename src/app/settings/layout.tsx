import React from "react";
import SidePanel from "../../components/side-panel";
import { Row } from "@/components/shared/row";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const options = [
    { name: "Account", key: "account", slug: "/settings" },
    { name: "My Learning", key: "learning", slug: "/settings/learning" },
    { name: "Add Course", key: "manage", slug: "/settings/add-course" },
  ];

  return (
    <Row className="my-4">
      <div className="flex flex-col gap-10 py-10 md:flex-row">
        <div className="basis-3/12">
          <SidePanel options={options} />
        </div>
        <div className="basis-9/12">{children}</div>
      </div>
    </Row>
  );
};

export default SettingsLayout;
