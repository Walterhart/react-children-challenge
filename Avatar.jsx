import classNames from "classnames"
import React, { Children } from "react"
import { IoPersonSharp } from "react-icons/io5"

/**
 * Challenge: Create a flexible Avatar component!
 * 
 * Check the slides for notes on how the component 
 * should be used.
 * 
 * Each of the 3 different avatars should have a 
 * wrapper div with the classes below:
 * 
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 * 
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 * 
 * Check the hints.md file if you are really stuck.
 * 
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */

export default function Avatar({ children, src, alt }) {
    const hasImage = src && alt;
    const hasInitials = !src && children;
    const hasAnonymous = !src && !children;
  
    const avatarClasses = classNames("avatar", {
      "avatar-letters": hasInitials,
      "avatar-icon": hasAnonymous,
    });
  
    return (
      <div className={avatarClasses}>
        {hasImage && <img src={src} alt={alt} />}
        {hasInitials && <h2>{children}</h2>}
        {hasAnonymous && <IoPersonSharp />}
      </div>
    );
  }