import React, { useState } from "react";
import type { Pages } from "../.tina/__generated__/types";
import { isString, lowerDash } from "../helpers/utilities";
import { Burger } from "./burger"

const navList = (blocks) => {
  const anchorLinks: [] = blocks?.filter(block => block.navigationLabel).map(block => block.navigationLabel);
  return anchorLinks;
}

const linkTarget = (link) => {
  const isExternalLink = isString(link) && link.charAt(0) !== '#'
  return isExternalLink ? '_blank' : ''
}

export const Header = (props: Pages) => {
  const [navOpen, setNavOpen] = useState(false);

  const textColors = {
    primary: 'text-primary',
    accent1: 'text-accent1',
    accent2: 'text-accent2',
    accent3: 'text-accent3',
    white: 'text-white',
    grayLight: 'text-gray-100',
    gray: 'text-gray-400',
    grayDark: 'text-gray-800',
    black: 'text-black',
  };
  const backgroundColors = {
    primary: 'bg-primary',
    accent1: 'bg-accent1',
    accent2: 'bg-accent2',
    accent3: 'bg-accent3',
    white: 'bg-white',
    grayLight: 'bg-gray-100',
    gray: 'bg-gray-400',
    grayDark: 'bg-gray-800',
    black: 'bg-black',
  }

  const sectionClasses = navOpen ? "h-screen md:h-auto" : "overflow-hidden";
  const navClasses = navOpen ? "opacity-100 m-0" : "opacity-0 mt-4";
  const backgroundClasses = navOpen ? "opacity-100" : "opacity-0";
  
  const navStyles = { 
    transition: "opacity .4s, margin .3s",
  }
  const backgroundStyles = { 
    transition: "opacity .4s ease-out",
  }
  const linkStyles = navOpen ? { 
    lineHeight: "4rem",
    transition: "line-height .4s"
  } : {
    lineHeight: "6rem",
    transition: "line-height .4s"
  }

  return (
    <section className={`${sectionClasses} absolute z-40 top-0 left-0 right-0`}>
      <div style={backgroundStyles} className={`${backgroundClasses} ${backgroundColors[props.nav?.navBackgroundColor]} transition duration-400 absolute inset-0 -z-1 md:hidden`}></div>
      <div className="max-w-screen-lg p-12 md:py-0 mx-auto">
          <div className="absolute top-0 p-4 right-0 md:hidden" onClick={() => setNavOpen(!navOpen)}>
            <Burger color="white" isOpen={navOpen}  />
          </div>
          <ul style={navStyles} className={`${navClasses} ${textColors[props.nav?.navTextColor]} block list-none mt-6 md:mt-2 md:text-right md:opacity-100`}>
            {navList(props.blocks)?.map(function (item, index) {
              return (
                <li className="md:inline-block md:ml-10" key={index}>
                  <div className={`${backgroundColors[props.nav?.navTextColor]} h-px opacity-25 md:hidden`} />
                  <a style={linkStyles} className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={() => setNavOpen(!navOpen)}>{item}</a>
                </li>
              )
            })}
            {props?.nav?.navItems && props.nav.navItems.map(function (item, index) {
              return (
                <li className="md:inline-block md:ml-10" key={index}>
                  <div className={`${backgroundColors[props.nav?.navTextColor]} h-px opacity-25 md:hidden`} />
                  <a style={linkStyles} className={"block no-underline"} href={item.link} target={linkTarget(item.link)} onClick={() => setNavOpen(!navOpen)}>{item.label}</a>
                </li>
              )
            })}
          </ul>
      </div>
    </section>
  );
};
