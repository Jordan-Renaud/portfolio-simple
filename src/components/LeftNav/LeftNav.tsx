"use client";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/SideBar";
import { Logo } from "./Logo";
import { LogoIcon } from "./LogoIcon";

export function LeftNav() {
  const IconStyling =
    "text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0";
  const links = [
    {
      label: "Landing Page",
      href: "/landingPage",
      icon: <IconBrandTabler className={IconStyling} />,
    },
    {
      label: "Profile",
      href: "#",
      icon: <IconUserBolt className={IconStyling} />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <IconSettings className={IconStyling} />,
    },
    {
      label: "Logout",
      href: "#",
      icon: <IconArrowLeft className={IconStyling} />,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto">
          {isOpen ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{ label: "Jordan Renaud", href: "#", icon: <></> }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
