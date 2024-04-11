import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
  className?: string | undefined;
};
export const Row = (props: IProps) => {
  return (
    <div
      className={cn(
        "mx-auto md:w-full md:px-3 lg:w-[950px] xl:w-[1200px] 2xl:w-[1300px]",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
