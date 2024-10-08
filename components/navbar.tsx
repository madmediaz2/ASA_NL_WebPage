import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Logo from '@images/Logo.svg';

export function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link href="/" className="mr-6 flex items-center bg-white bg-opacity-5 rounded-[30%] shadow-lg backdrop-blur-[80%]" prefetch={false}>
        <MountainIcon className="" />
        <span className="sr-only">ASANL.EU</span>
      </Link>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  href="/app/server-info"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  Server-Info
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  href="/app/shop"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  prefetch={false}
                >
                  Shop
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="navbar" size="icon" className="ml-auto lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link href="/app/server-info" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              Server-Info
            </Link>
            <Link href="/app/shop" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
              Shop
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MountainIcon(props: any) {
  return (
    <Logo
      {...props}
      width={50}
      height={50}
    />
  )
}
