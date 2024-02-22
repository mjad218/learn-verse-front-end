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
      className="self-center cursor-pointer"
      disabled={isLoading}
      radius='large'
      size='3'
      variant="solid"
    >
      <div className="flex justify-center items-center gap-1 cursor-pointer">
        <span>{text}</span>
        {isLoading ? <LoadingSpinnerForm /> : ''}
      </div>
    </Button>
  )
}

export default FormButton;