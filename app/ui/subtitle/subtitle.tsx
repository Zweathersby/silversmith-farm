import { bitter } from "@/app/ui/fonts";

interface SubtitleProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Subtitle({
  children,
  className,
  ...rest
}: SubtitleProps) {
  return (
    <h2 {...rest} className={`${bitter.className} ${className} font-medium`}>
      {children}
    </h2>
  );
}
