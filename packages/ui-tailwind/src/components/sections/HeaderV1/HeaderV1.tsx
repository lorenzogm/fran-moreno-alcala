import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';

import { Image } from '../../../types';
import { classNames } from '../../../utils/classNames';
import type { IconProps } from '../../elements/Icon/Icon';
import type { ListV1Props } from '../../modules/ListV1';
import { ListV1 } from '../../modules/ListV1';
import type { ListV2Props } from '../../modules/ListV2';
import { ListV2 } from '../../modules/ListV2';
import type { ListV3Props } from '../../modules/ListV3';
import { ListV3 } from '../../modules/ListV3';

export type HeaderV1Props = {
  title: string;
  logo: Image;
  navigation: Array<NavigationItem>;
  primaryButtonLink: string;
  primaryButtonTitle: string;
  secondaryButtonLink: string;
  secondaryButtonTitle: string;
};

type NavigationItem = {
  title: string;
  link: string;
  icon?: IconProps['name'];
  description?: string;
  items?: ListV2Props['items'];
  callsToAction?: ListV3Props;
  list?: ListV1Props;
};

export function HeaderV1({
  title,
  logo,
  navigation,
  primaryButtonLink,
  primaryButtonTitle,
  secondaryButtonLink,
  secondaryButtonTitle,
}: HeaderV1Props) {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">{title}</span>
              <img alt={logo.alt} className="h-8 w-auto sm:h-10" src={logo.src} />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon aria-hidden="true" className="h-6 w-6" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {navigation.map((navigationLevelOneItem) => {
              if (navigationLevelOneItem.items === undefined) {
                return (
                  <a
                    key={navigationLevelOneItem.title}
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                    href={navigationLevelOneItem.link}
                  >
                    {navigationLevelOneItem.title}
                  </a>
                );
              }

              return (
                <Popover key={navigationLevelOneItem.title} className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                        )}
                      >
                        <span>{navigationLevelOneItem.title}</span>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500',
                          )}
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            {navigationLevelOneItem?.items && (
                              <ListV2
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                items={navigationLevelOneItem.items}
                              />
                            )}

                            {navigationLevelOneItem?.callsToAction && (
                              <ListV3
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...navigationLevelOneItem.callsToAction}
                              />
                            )}

                            {navigationLevelOneItem?.list && (
                              <ListV1
                                // eslint-disable-next-line react/jsx-props-no-spreading
                                {...navigationLevelOneItem.list}
                              />
                            )}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              );
            })}
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              href={secondaryButtonLink}
            >
              {secondaryButtonTitle}
            </a>
            <a
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              href={primaryButtonLink}
            >
              {primaryButtonTitle}
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden" focus>
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img alt={logo.alt} className="h-8 w-auto" src={logo.src} />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon aria-hidden="true" className="h-6 w-6" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navigation[0]?.items && (
                    <ListV2
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      items={navigation[0].items}
                    />
                  )}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.title}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <div>
                <a
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  href={primaryButtonLink}
                >
                  {primaryButtonTitle}
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  <a className="text-indigo-600 hover:text-indigo-500" href={secondaryButtonLink}>
                    {secondaryButtonTitle}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
