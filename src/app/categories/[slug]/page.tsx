import { CategoryServerPage } from "@/components/category";

type IProps = {
  params: { slug: string };
};
const CategoryPage = (props: IProps) => {
  return (
    <div>
      <CategoryServerPage slug={props?.params?.slug} />
    </div>
  );
};

export default CategoryPage;
