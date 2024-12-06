"use client"

import * as React from "react"

import {
  IconBrandApple,
  IconBuilding,
  IconChevronLgDown,
  IconCircleQuestionmark,
  IconCommandRegular,
  IconCreditCard,
  IconCube,
  IconCurrencyDollar,
  IconDashboard,
  IconEnvelope,
  IconGraph,
  IconHeadphones,
  IconLogout,
  IconMegaphone,
  IconNotes,
  IconPackage,
  IconPeople,
  IconPercentBadge,
  IconSettings,
  IconShield,
  IconShoppingBag,
  IconSupport,
  IconTicket,
  IconTruck
} from "justd-icons"
import {
  Avatar,
  Link,
  Menu,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarRail,
  SidebarSection
} from "ui"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          className="flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2"
          href="/docs/components/layouts/sidebar"
        >
          <IconBrandApple className="size-5" />
          <strong className="font-medium group-data-[collapsible=dock]:hidden">Apple</strong>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSection>
          <SidebarItem isCurrent href="#">
            <IconDashboard />
            <SidebarLabel>Overview</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconShoppingBag />
            <SidebarLabel>Orders</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconCube />
            <SidebarLabel>Products</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#" badge="4 Pending">
            <IconCreditCard />
            <SidebarLabel>Payments</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#" badge="12 New">
            <IconGraph />
            <SidebarLabel>Analytics</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconPeople />
            <SidebarLabel>Customers</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconSettings />
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSection collapsible title="Marketing">
          <SidebarItem href="#">
            <IconMegaphone />
            <SidebarLabel>Campaigns</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#discount">
            <IconPercentBadge />
            <SidebarLabel>Discounts</SidebarLabel>
          </SidebarItem>

          <SidebarItem href="#">
            <IconCurrencyDollar />
            <SidebarLabel>Affiliates</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconEnvelope />
            <SidebarLabel>Email Marketing</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSection collapsible title="Support">
          <SidebarItem href="#">
            <IconTicket />
            <SidebarLabel>Tickets</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconSupport />
            <SidebarLabel>Chat Support</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconCircleQuestionmark />
            <SidebarLabel>FAQ</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconNotes />
            <SidebarLabel>Documentation</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
        <SidebarSection title="Inventory">
          <SidebarItem href="#">
            <IconPackage />
            <SidebarLabel>Stock Levels</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconBuilding />
            <SidebarLabel>Warehouse</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <IconTruck />
            <SidebarLabel>Shipping</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarContent>

      <SidebarFooter>
        <Menu>
          <SidebarItem aria-label="Profile" data-slot="menu-trigger">
            <Avatar shape="square" src="/images/avatar/cobain.jpg" />
            <div className="group-data-[collapsible=dock]:hidden text-sm">
              <SidebarLabel>Kurt Cobain</SidebarLabel>
              <span className="block -mt-0.5 text-muted-fg">kurt@cobain.com</span>
            </div>
            <IconChevronLgDown className="right-3 size-4 absolute group-pressed:rotate-180 transition-transform" />
          </SidebarItem>
          <Menu.Content placement="bottom right" className="sm:min-w-(--trigger-width)">
            <Menu.Section>
              <Menu.Header separator>
                <span className="block">Kurt Cobain</span>
                <span className="font-normal text-muted-fg">@cobain</span>
              </Menu.Header>
            </Menu.Section>

            <Menu.Item href="#dashboard">
              <IconDashboard />
              Dashboard
            </Menu.Item>
            <Menu.Item href="#settings">
              <IconSettings />
              Settings
            </Menu.Item>
            <Menu.Item href="#security">
              <IconShield />
              Security
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item>
              <IconCommandRegular />
              Command Menu
            </Menu.Item>

            <Menu.Item href="#contact">
              <IconHeadphones />
              Customer Support
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item href="#logout">
              <IconLogout />
              Log out
            </Menu.Item>
          </Menu.Content>
        </Menu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
