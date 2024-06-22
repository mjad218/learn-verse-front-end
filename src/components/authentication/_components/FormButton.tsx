import { Button } from "@/components/ui/button";

interface Props {
  text: string;
}

const FormButton = ({ text }: Props) => {
  return (
    <Button
      type="submit"
      className={`cursor-pointer self-center rounded-lg bg-accent px-4 font-roboto text-base/3 transition-transform delay-75 hover:scale-90 hover:bg-accent active:bg-accent`}
    >
      <div className="flex cursor-pointer items-center justify-center gap-1">
        <span>{text}</span>
      </div>
    </Button>
  );
};

export default FormButton;
