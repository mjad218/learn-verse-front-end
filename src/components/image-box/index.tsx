import { ReactNode } from "react";
type IProps = {
  children?: ReactNode;
};
export const ImageBox = (props: IProps) => {
  return (
    <div className="mx-auto flex min-h-[500px] max-w-[800px] flex-col gap-7 overflow-hidden rounded-2xl border border-solid border-slate-700 lg:flex-row lg:border-l-0">
      <div className="h-full min-h-96 min-w-96 basis-1/2 bg-[url('/assets/AuthbackgroundTemp.jpg')] bg-cover lg:min-h-[500px] lg:rounded-l-lg lg:bg-center"></div>
      <div className="grow-0 basis-1/2">{props.children}</div>
    </div>
  );
};
