import SearchPage from "../../components/search/_results/SearchPage";

type Props = {
  searchParams: {
    q: string;
    rating: string;
    price: string;
    level: string;
    lang: string;
    p: string;
  };
};
const page = ({ searchParams }: Props) => {
  return <SearchPage query={searchParams} />;
};

export default page;
