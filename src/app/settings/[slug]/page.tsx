import AccountPanel from "./_components/AccountPanel";
import CoursePanel from "./_components/CoursePanel";

interface Props {
  params: { slug: string };
}

const page = ({ params: { slug } }: Props) => {
  const accountPanel = slug === "account";
  const courseManagementPanel = slug === "manage";
  // const purchaedCoursesPanel = slug === "purchased";
  return (
    <div className="mx-auto w-[85%] rounded-2xl bg-gray-50/5 p-4 shadow shadow-accent/40">
      {accountPanel && <AccountPanel />}
      {courseManagementPanel && <CoursePanel />}
    </div>
  );
};

export default page;
