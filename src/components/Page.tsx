import type React from "react";
import { ThemeToggle } from "./themetoggle";
import { Button } from "./ui/button";
import { DownloadIcon, SearchIcon, Settings2Icon } from "lucide-react";

export const Page = ({ children }: React.PropsWithChildren) => {
    return <div className="px-4 py-8 md:p-8">
        {children}
    </div>
}
export const PageHeader = () => {
    return (
        <div className="flex gap-4 lg: justify-between">
            <h1 className="text-xl font-semibold lg:text-2xl">Welcome back, Sadee</h1>
            <div className="flex gap-3">
                <div className="flex max-lg:hidden">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon"
                        aria-label="Search">
                        <SearchIcon />
                    </Button>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline">
                        <Settings2Icon />
                        <span>Customize</span>
                    </Button>
                    <Button variant={"outline"}>
                        <DownloadIcon />
                        <span>Export</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}