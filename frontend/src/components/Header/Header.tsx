// components/header.tsx

"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Our Teachers", href: "/teachers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          JR Tutoring
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <NavigationMenu>
            <NavigationMenuList className={styles.navLinks}>
              {navLinks.map(({ name, href }) => (
                <NavigationMenuItem key={href}>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink className={styles.navLink}>
                      {name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaWrap}>
          <Button className={styles.ctaBtn}>Find A Tutor</Button>
        </div>

        {/* Mobile Menu */}
        <div className={styles.mobileMenu}>
          <Sheet>
            <SheetTrigger asChild>
              <button className={styles.menuIcon}>
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className={styles.mobileNavLinks}>
                {navLinks.map(({ name, href }) => (
                  <Link key={href} href={href} className={styles.mobileNavLink}>
                    {name}
                  </Link>
                ))}
                <Button className={styles.mobileCtaBtn}>Find A Tutor</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
