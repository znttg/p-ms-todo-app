'use client'

import { 
    DashboardSidebar, 
    DashboardSidebarFooter, 
    DashboardSidebarHeader, 
    DashboardSidebarMain, 
    DashboardSidebarNav, 
    DashboardSidebarNavMain, 
    DashboardSidebarNavLink, 
    DashboardSidebarNavHeader, 
    DashboardSidebarNavHeaderTitle 
} from "@/components/dashboard/sidebar";
import { usePathname } from "next/navigation";
import { HomeIcon, MixerVerticalIcon } from '@radix-ui/react-icons'
import { UserDropdown } from "./user-dropdown";
import { Logo } from "@/components/logo";
import { Session } from "next-auth";

type MainSidebarProps = {
     user: Session['user']
}

export function MainSidebar({user}: MainSidebarProps){
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path
    }

    return (
        <DashboardSidebar>
            <DashboardSidebarHeader>
                <Logo />
            </DashboardSidebarHeader>
            <DashboardSidebarMain className="flex flex-col flex-grow">
                <DashboardSidebarNav>
                    <DashboardSidebarNavMain>
                        <DashboardSidebarNavLink href="/app" active={isActive('/app')}>
                            <HomeIcon className="w-3 h-3 mr-3">
                            </HomeIcon>
                            Tarefas
                        </DashboardSidebarNavLink>
                        <DashboardSidebarNavLink 
                            href="/app/settings" 
                            active={isActive('/app/settings')}
                        >
                            <MixerVerticalIcon className="w-3 h-3 mr-3">
                            </MixerVerticalIcon>
                            Configurações
                        </DashboardSidebarNavLink>
                    </DashboardSidebarNavMain>
                </DashboardSidebarNav>

                <DashboardSidebarNav className="mt-auto">
                    <DashboardSidebarNavHeader>
                        <DashboardSidebarNavHeaderTitle>
                            Links extras
                        </DashboardSidebarNavHeaderTitle>
                    </DashboardSidebarNavHeader>
                    <DashboardSidebarNavMain>
                        <DashboardSidebarNavLink href="/">Precisa de ajuda?</DashboardSidebarNavLink>
                        <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
                    </DashboardSidebarNavMain>
                </DashboardSidebarNav>
            </DashboardSidebarMain>
            <DashboardSidebarFooter>
                <UserDropdown user={user}/>
            </DashboardSidebarFooter>
        </DashboardSidebar>
    )
}