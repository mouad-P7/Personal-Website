import Link from "next/link";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function SocialMediaLink({
  url,
  tooltip,
  children,
  ...props
}: {
  url: string;
  tooltip: string;
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={url} target="_blank" {...props}>
            <Button
              variant="outline"
              className="rounded-full w-[60px] h-[60px]"
            >
              {children}
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default function HomePage() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center gap-10">
      <h1 className="text-center text-4xl text-primary font-bold">
        UNDER CONSTRUCTION
      </h1>
      <div className="flex items-center justify-center gap-4">
        <SocialMediaLink
          url="https://www.linkedin.com/in/mouad-ananouch-51b088229/"
          tooltip="LinkedIn"
        >
          <LinkedInLogoIcon className="h-[25px] w-[25px]" />
        </SocialMediaLink>
        <SocialMediaLink url="https://www.github.com/mouad-P7" tooltip="Github">
          <GitHubLogoIcon className="h-[25px] w-[25px]" />
        </SocialMediaLink>
      </div>
    </div>
  );
}
