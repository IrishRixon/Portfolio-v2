import {
  Link,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { useEffect, useState } from "react";

interface Props {
  addClass: string;
  onHome: () => void;
  onAbout: () => void;
  onSkills: () => void;
  onProjects: () => void;
  onContact: () => void;
}

function Navigation({
  addClass,
  onHome,
  onAbout,
  onContact,
  onProjects,
  onSkills,
}: Props) {
  return (
    <div
      className={`h-16 w-full flex justify-between px-24 ${addClass} transition-[background-color]`}
    >
      <h1 className="text-xl text-center flex items-center">
        Portfolio <span className="text-(--accent-primary)">&lt;/&gt;</span>
      </h1>

      <NavigationMenu className="flex items-center font-[sora]">
        <NavigationMenuList className="flex text-(--text-primary)">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <button onClick={onHome}>Home</button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <button onClick={onAbout}>About</button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <button onClick={onSkills}>Skills</button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <button onClick={onProjects}>Projects</button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <button onClick={onContact}>Contact</button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navigation;
