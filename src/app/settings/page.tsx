import AccountPanel from "@/components/account-panel";
import { fetchUserDetails } from "@/services/users";
import { UserDetailsType } from "@/types/user.type";
import { cookies } from "next/headers";

const SettingsPage = async () => {
  let token: string | null = "";
  try {
    const nextCookies = cookies();
    token = nextCookies.get("token")?.value ?? null;
    if (!token) throw "not logged in";
  } catch (error) {}

  const userDetails: UserDetailsType = await fetchUserDetails(token);
  return (
    <div>
      <AccountPanel userDetails={userDetails} />
    </div>
  );
};

export default SettingsPage;
