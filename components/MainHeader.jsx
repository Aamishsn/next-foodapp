"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
const MainHeader = () => {
  const pathname = usePathname();
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="Logo" priority />
        Nextlevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              href="/meals"
              className={
                pathname.startsWith("/meals") ? classes.active : undefined
              }
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className={
                pathname.startsWith("/community") ? classes.active : undefined
              }
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
