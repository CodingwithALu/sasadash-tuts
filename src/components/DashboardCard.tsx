import type React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { EllipsisVerticalIcon } from "lucide-react";
import { DASHBOARD_CARD_MENU } from "@/constants";
import { Button } from "./ui/button";

type Props = {
    title: string,
    description: string,
    text?: string,
    buttonText: string,
}

export const DashboardCard = ({
    title,
    description,
    buttonText,
    children
}: React.PropsWithChildren<Props>) => {
    return (
        <Card className="bg-background">
            <CardHeader className="border-b flex justify-between">
                <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <EllipsisVerticalIcon size={20} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {DASHBOARD_CARD_MENU.map((item) => (
                            <DropdownMenuItem key={item.label}>
                                <item.Icon />
                                {item.label}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent className="grid grid-cols-1 grow">
                {children}
            </CardContent>
            <CardFooter className="border-t">
                <Button variant={"outline"}
                    className="ml-auto">
                    {buttonText}
                </Button>
            </CardFooter>
        </Card>
    );
}