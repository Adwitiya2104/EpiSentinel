import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export const Navbar = ()=>{
  return(
    <div className="p-6 flex navbar">
      <Logo/>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4 p-2 rounded-lg">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="trigger">Socials</NavigationMenuTrigger>
            <NavigationMenuContent className="menu-content">
              <ul className="flex flex-col">
                <li>
                  <NavigationMenuLink href="/youtube">YouTube</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="/twitter">Twitter</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="/reddit">Reddit</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="/trends">GTrends</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/risk">Risk</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/xai">XAI</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const Logo = ()=>{
  return(
    <h1 className="text-4xl"><a href="/">EpiSentinel</a></h1>
  );
}