import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { TiShoppingCart } from "react-icons/ti";

const NavCart = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>
          <TiShoppingCart size={32} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col justify-center">
          <Button className="bg">Checkout</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NavCart;
