import React from 'react';
import { Navbar } from 'react-daisyui';

export type NavigationV1Props = {
  navigation: Array<Link>;
  title: string;
};

type Link = {
  title: string;
  href: string;
};

export function NavigationV1({ title, navigation }: NavigationV1Props) {
  return (
    <Navbar className="navbar bg-neutral text-neutral-content shadow-lg">
      <Navbar.Start className="navbar-start mx-2 px-2">
        <span className="text-lg font-bold">{title}</span>
      </Navbar.Start>

      <Navbar.Center className="navbar-center mx-2 px-2">
        <nav className="flex items-stretch">
          {navigation.map((link) => (
            <a key={link.title} className="btn btn-ghost btn-sm rounded-btn" href={link.href}>
              {link.title}
            </a>
          ))}
        </nav>
      </Navbar.Center>

      <Navbar.End className="navbar-end mx-2 px-2">
        {/* <Button color="ghost" shape="square">
          <svg
            className="inline-block h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Button>
        <Button color="ghost" shape="square">
          <svg
            className="inline-block h-6 w-6 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Button> */}
      </Navbar.End>
    </Navbar>
  );
}
