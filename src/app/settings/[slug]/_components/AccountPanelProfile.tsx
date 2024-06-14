import { Button } from "@/components/ui/button";

const AccountPanelProfile = () => {
  return (
    <div className="flex flex-col gap-1 self-start">
      <Button className="w-max bg-accent hover:bg-accent">
        Choose File
      </Button>
      <div className="flex flex-col text-sm text-gray-700/60">
        <span>No file selected</span>
        <span>Maximum image size is 1MB</span>
      </div>
    </div>
  );
};

export default AccountPanelProfile;
