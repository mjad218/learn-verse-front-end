import Link from "next/link";

type IProps = {
  courseId?: number | undefined| string};
export const MaterialsList = (props: IProps) => {
  props.courseId;
  return (
    <div>
      <ul className="m-0 list-none p-0 flex flex-col gap-2">
        <li className="bg-[#ddd] border border-solid border-[#eee] py-3 px-3 rounded-xl">
          <Link href="#">M1</Link>
        </li>
        <li>
          <Link href="#">M2</Link>
        </li>
        <li>
          <Link href="#">M3</Link>
        </li>
        <li>
          <Link href="#">M4</Link>
        </li>
      </ul>
    </div>
  );
};
