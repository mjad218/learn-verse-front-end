import { Button } from "@/components/ui/button";
import LoadingSpinnerForm from "./LoadingSpinnerForm";
interface Props {
  text: string;
  isLoading: boolean;
}

const FormButton = ({ text, isLoading }: Props) => {
  return (
    <Button
      type="submit"
      className="cursor-pointer self-center rounded-lg bg-accent px-8 font-dmSerif text-base/3"
      disabled={isLoading}
    >
      <div className="flex cursor-pointer items-center justify-center gap-1">
        <span>{text}</span>
        {isLoading ? <LoadingSpinnerForm /> : ""}
      </div>
    </Button>
  );
};

export default FormButton;
