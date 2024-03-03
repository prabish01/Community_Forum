import { FC } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  return (
    <div className={cn("flex", className)}>
      <Button>Google</Button>
    </div>
  );
};

export default UserAuthForm;
