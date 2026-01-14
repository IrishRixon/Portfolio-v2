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
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`h-16 w-full flex justify-between px-8 sm:px-24 ${addClass} transition-[background-color]`}
      >
        <h1 className="hidden text-xl text-center md:flex items-center">
          Portfolio <span className="text-(--accent-primary)">&lt;/&gt;</span>
        </h1>

        <NavigationMenu className="hidden md:flex items-center font-[sora]">
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

        <button
          className="text-(--text-primary) md:hidden"
          onClick={() => setOpen(true)}
        >
          <span className="material-icons-outlined text-3xl!">menu</span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden">
          <div
            className="fixed top-0 left-0 h-full w-72 z-50 lg:hidden
            bg-(--card-bg) backdrop-blur-2xl border-l border-(--card-border)
            p-6 flex flex-col gap-6 animate-slide-in"
          >
            <button
              className="self-end text-(--text-primary)"
              onClick={() => setOpen(false)}
            >
              <span className="material-icons-outlined text-2xl">close</span>
            </button>

            <NavigationMenu className="flex items-center font-[sora]">
              <NavigationMenuList className="flex flex-col text-(--text-primary)">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()}`}
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
        </div>
      )}
    </>
  );
}

export default Navigation;
