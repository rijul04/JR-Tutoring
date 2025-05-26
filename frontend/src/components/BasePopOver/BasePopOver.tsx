import { JSX, ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

type Props = {
  trigger: string | JSX.Element;
  children: ReactNode;
};

export default function BasePopOver({ trigger, children }: Readonly<Props>) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"outline"}>{trigger}</Button>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
}
