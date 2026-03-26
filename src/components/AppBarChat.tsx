
import { useIsMobile } from "@/hooks/use-mobile";
import { ChartContainer, type ChartConfig } from "./ui/chart";
import { VENDOR_BREAKDOWN } from "@/constants";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
    eu: { label: 'EU', color: 'var(--chart-1)' },
    us: { label: "US", color: 'var(--chart-2)' },
    asia: { label: "Asisa", color: 'var(--chart-3)' }
} satisfies ChartConfig;

export const AppBarChat = () => {
    const isMobile = useIsMobile();
    return (
        <ChartContainer
            config={chartConfig}
            className="h-70 lg:h-52 w-full">
            <BarChart accessibilityLayer
                data={VENDOR_BREAKDOWN}
                barSize={isMobile ? 12 : 30}>
                <CartesianGrid vertical={false} />
                <Bar
                    dataKey={"eu"}
                    stackId={"a"}
                    fill="var(--color-eu)" />
                <Bar
                    dataKey={"us"}
                    stackId={"a"}
                    fill="var(--color-us)" />
                <Bar
                    dataKey={"asia"}
                    stackId={"a"}
                    fill="var(--color-asia)"
                    radius={[8, 8, 0, 0]} />

                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    hide={isMobile ? true : false} />
                {/* {isMobile && <XAxis tickLine={false} axisLine={false} />} */}
            </BarChart>
        </ChartContainer>
    );

}