import { CategoryServerPage } from "@/components/category";
import { Row } from "@/components/shared/row";

type IProps = {
  params: { slug: string };
};
const CategoryPage = (props: IProps) => {
  return (
    <Row>
      <CategoryServerPage slug={props?.params?.slug} />
    </Row>
  );
};

export default CategoryPage;
