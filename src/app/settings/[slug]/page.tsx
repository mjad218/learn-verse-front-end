import { Box } from "@radix-ui/themes";
import AccountPanel from "./_components/AccountPanel";

interface Props {
  params: { slug: string };
}

const page = ({ params: { slug } }: Props) => {
  const accountPanel = slug === "account";
  const purchaedCoursesPanel = slug === "purchased";
  const manageCoursesPanel = slug === "manage";

  return <Box>{accountPanel ? <AccountPanel /> : null}</Box>;
};

export default page;
