import * as React from "react";
import { isString } from "../helpers/utilities";

export const Buttons = ({
  className = "",
  buttons,
}) => {
  const classes = (button) => {
    const textColor = {
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
    const backgroundColor = {
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
    const borderColor = {
      primary: 'border-primary',
      accent1: 'border-accent1',
      accent2: 'border-accent2',
      accent3: 'border-accent3',
      white: 'border-white',
      grayLight: 'border-gray-100',
      gray: 'border-gray-400',
      grayDark: 'border-gray-800',
      black: 'border-black',
    }
    const styles = {
      solid: `px-4 h-10 leading-10 font-bold text-sm ${backgroundColor[button.backgroundColor]} ${textColor[button.textColor]}`,
      outline: `px-4 h-10 leading-9 font-bold text-sm border bg-transparent ${borderColor[button.backgroundColor]} ${textColor[button.textColor]}`,
      link: `px-4 h-10 leading-10 font-bold text-sm ${textColor[button.textColor]}`,
    };
    return button.type ? styles[button.type] : styles.solid
  }

  const linkTarget = (link) => {
    const isExternalLink = isString(link) && link.charAt(0) !== '#'
    return isExternalLink ? '_blank' : ''
  }

  return (
    <div className={`inline-flex flex-wrap gap-4 ${className}`}>
      {buttons &&
        buttons.map(function (button, index) {
          const element = (
              <a className={classes(button)} href={button.link} target={linkTarget(button.link)} key={index}>{ button.label }</a>
            );
          return element;
        })}
    </div>
  );
};
