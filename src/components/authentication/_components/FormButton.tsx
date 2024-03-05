import { Button } from "@radix-ui/themes";
import LoadingSpinnerForm from "./LoadingSpinnerForm";
interface Props {
  text: string;
  isLoading: boolean;
}

const FormButton = ({ text, isLoading }: Props) => {
  return (
    <Button
      type="submit"
      className="cursor-pointer self-center"
      disabled={isLoading}
      radius="large"
      size="3"
      variant="solid"
    >
      <div className="flex cursor-pointer items-center justify-center gap-1">
        <span>{text}</span>
        {isLoading ? <LoadingSpinnerForm /> : ""}
      </div>
    </Button>
  );
};

export default FormButton;
