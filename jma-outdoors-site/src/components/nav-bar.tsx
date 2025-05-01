import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import ContactUsDialog from "@/components/contact-us-dialog";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/original_logo.png" // Replace with your logo path
          alt="Logo"
          width={80}
          height={80}
        />
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className={navigationMenuTriggerStyle()}
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/services"
              className={navigationMenuTriggerStyle()}
            >
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/faq"
              className={navigationMenuTriggerStyle()}
            >
              FAQ's
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/gallery"
              className={navigationMenuTriggerStyle()}
            >
              Gallery
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ContactUsDialog />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
