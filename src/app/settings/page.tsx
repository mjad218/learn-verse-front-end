import { redirect } from "next/navigation";
const page = async () => {
  redirect("/settings/account");
};

export default page;
