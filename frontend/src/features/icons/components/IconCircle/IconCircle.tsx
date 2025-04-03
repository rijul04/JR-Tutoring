import { cn } from "@/lib/utils"; // from shadcn/ui

type IconCircleProps = {
  icon: React.ReactNode;
  className?: string;
};

export function IconCircle({ icon, className }: IconCircleProps) {
  return (
    <div
      className={cn(
        "w-8 h-8 rounded-full border-2 border-pink-500 flex items-center justify-center text-pink-500",
        className
      )}
    >
      {icon}
    </div>
  );
}
