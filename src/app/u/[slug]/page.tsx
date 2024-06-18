import Image from "next/image";

type IProps = {
  params: { slug: string };
};
const UserPage = (props: IProps) => {
  props.params.slug;
  const src = "";
  return (
    <div className="flex flex-col justify-center gap-6">
      <Image src={src} alt={"User"} />
      <h2>User Name</h2>
    </div>
  );
};

export default UserPage;
