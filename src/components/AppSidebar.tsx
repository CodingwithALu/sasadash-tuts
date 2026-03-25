import { Logo } from "@/assets/Logo";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { APP_SIDEBAR } from "@/constants";

/**
 * 
 * Components
 */
export const AppSideBar = () => {
    const { isMobile } = useSidebar();
    return (
        <Sidebar
            variant="floating"
            collapsible="icon"
        >
            {/** Sidebar Header */}
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem className="px-0.5 max-lg:p-2">
                        <Logo variant={isMobile ? 'default' : 'icon'} />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            {/* Sidebar Content */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {APP_SIDEBAR.primaryNav.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton tooltip={item.title} asChild>
                                        <a href={item.url}>
                                            <item.Icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/** Second Side bar */}
                {isMobile && (
                    <SidebarGroup className="mt-auto">
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {APP_SIDEBAR.secondaryNav.map(item => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton tooltip={item.title} asChild>
                                            <a href={item.url}>
                                                <item.Icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                )}
            </SidebarContent>
        </Sidebar>
    );
}