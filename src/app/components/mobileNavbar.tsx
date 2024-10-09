"use client";

import BlockCodeSolidIcon from "@/presentation/icons/blockCodeSolid";
import BlockCodeIcon from "@/presentation/icons/blockCode";
import HomeIcon from "@/presentation/icons/home";
import HomeSolidIcon from "@/presentation/icons/homeSolid";
import LightningIcon from "@/presentation/icons/lightning";
import LightningSolidIcon from "@/presentation/icons/lightningSolid";
import UserIcon from "@/presentation/icons/user";
import UserSolidIcon from "@/presentation/icons/userSolid";
import Link from "next/link";
import { useRef, useState } from "react";
import clsx from "clsx";
import React from "react";
import Square2x2Icon from "@/presentation/icons/square2x2";
import Square2x2SolidIcon from "@/presentation/icons/square2x2Solid";
import ChatIcon from "@/presentation/icons/chat";
import MoonIcon from "@/presentation/icons/moon";
import Toggle from "./toggle";

/**
 * MobileNavbar is a component that represents the mobile navbar.
 *
 * @returns {JSX.Element} The mobile navbar.
 */
export default function MobileNavbar(): JSX.Element {
  /**
   * navUItems is an array of NavbarItemProps that represents the navbar items.
   *
   * @see {@link NavbarItemProps}
   */
  const navItems: NavbarItemProps[] = [
    {
      label: "Home",
      unselectedIcon: HomeIcon,
      selectedIcon: HomeSolidIcon,
      href: "#",
    },
    {
      label: "About",
      unselectedIcon: UserIcon,
      selectedIcon: UserSolidIcon,
      href: "#about",
    },
    {
      label: "Skills",
      unselectedIcon: LightningIcon,
      selectedIcon: LightningSolidIcon,
      href: "#skills",
    },
    {
      label: "Projects",
      unselectedIcon: BlockCodeIcon,
      selectedIcon: BlockCodeSolidIcon,
      href: "#projects",
    },
  ];

  // Create a reference for the extra menu.
  const extraMenuRef = useRef<HTMLDivElement>(null);

  /**
   * @state {boolean} scrolled - A state that represents if the user has scrolled the page.
   *
   * @setState {boolean} setScrolled - A function that sets the state of the user scrolling the page.
   */
  const [scrolled, setScrolled] = useState<boolean>(true);

  /**
   * @state {number} selectedMenu - A state that represents the selected menu.
   *
   * @setState {number} setSelectedMenu - A function that sets the selected menu.
   */
  const [selectedMenu, setSelectedMenu] = useState<number>(0);

  /**
   * @state {boolean} extraMenuOpenned - A state that represents if the extra menu is openned.
   *
   * @setState {boolean} setExtraMenuOpenned - A function that sets the state of the extra menu.
   */
  const [extraMenuOpenned, setExtraMenuOpenned] = useState<boolean>(false);

  /**
   * toggleExtraMenuHeight is a function that toggles the height of the extra menu.
   *
   * @param {boolean} expandMenu - A boolean that represents if the menu should be expanded.
   *
   * @returns {void}
   */
  const toggleExtraMenuHeight = (expandMenu: boolean): void => {
    // Check if the extra menu ref is not null.
    if (!extraMenuRef.current) {
      return;
    }

    // Set the height of the extra menu.
    extraMenuRef.current.style.height = expandMenu
      ? `${extraMenuRef.current.scrollHeight + 16}px`
      : "0px";
  };

  /**
   * toggleExtraMenu is a function that toggles the extra menu.
   *
   * @returns {void}
   */
  const toggleExtraMenu = (): void => {
    setExtraMenuOpenned((prev) => {
      toggleExtraMenuHeight(!prev);

      return !prev;
    });
  };

  /**
   * NavItem is a component that renders a navbar item.
   *
   * @param {NavbarItemProps} props - The props of the component.
   *
   * @returns {JSX.Element} The navbar item.
   */
  const NavItem = ({
    currentIndex,
    props,
  }: {
    currentIndex: number;
    props: NavbarItemProps;
  }): JSX.Element => {
    const isSelected: boolean = currentIndex === selectedMenu;

    return (
      <li>
        <span className="sr-only">{props.label}</span>
        <Link
          href={props.href}
          className={clsx(isSelected ? "text-primary" : "text-highlight")}
        >
          {isSelected ? (
            <props.selectedIcon className="size-6" />
          ) : (
            <props.unselectedIcon className="size-6" />
          )}
        </Link>
      </li>
    );
  };

  return (
    <header className="fixed bottom-4 z-50 w-full px-4">
      <div className="relative">
        {/* Extra menu modal */}
        <div
          ref={extraMenuRef}
          className="absolute bottom-full grid h-0 w-full -translate-y-2 overflow-y-hidden rounded-md bg-text-secondary transition-all duration-300"
        >
          <nav aria-label="Global" className="w-full place-self-center">
            <ul>
              <li className="bg-text-secondary px-6 py-3">
                <span className="sr-only">Tell Project Idea</span>
                <Link href={"/tell-project-idea"} className="flex gap-4">
                  <ChatIcon className="size-6 text-primary" strokeWidth={1.5} />
                  <span>Tell project idea</span>
                </Link>
              </li>
              <li>
                <hr />
              </li>
              <li className="flex items-center justify-between bg-text-secondary px-6 py-3">
                <span className="sr-only">Dark Mode</span>
                <div className="flex gap-4">
                  <MoonIcon className="size-6 text-primary" strokeWidth={1.5} />
                  <span>Dark Mode</span>
                </div>

                <Toggle />
              </li>
            </ul>
          </nav>
        </div>

        <div
          className={clsx(
            "py-5",
            scrolled && "rounded-b-3xl rounded-t-md bg-text-secondary shadow",
          )}
        >
          <nav aria-label="Global">
            <ul className="flex items-center justify-between px-6">
              {navItems.map((props, index) => (
                <NavItem key={index} currentIndex={index} props={props} />
              ))}
              <li onClick={() => toggleExtraMenu()}>
                <span className="sr-only">Extra Menu</span>
                {extraMenuOpenned ? (
                  <Square2x2SolidIcon className="size-6 text-primary" />
                ) : (
                  <Square2x2Icon className="size-6 text-highlight" />
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}