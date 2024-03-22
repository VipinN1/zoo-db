import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomerNavbar.css";

export default function EmployeeNavbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Zoo
      </Link>
      <ul>
        <CustomLink
          to="/animals"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Animals
          {isHovered && (
            <div className="sub-menu">
              <CustomLink to="/veterinarian-records">Veterinarian Records</CustomLink>
              <CustomLink to="/diets">Diets</CustomLink>
            </div>
          )}
        </CustomLink>
        <CustomLink to="/clock-in">Clock In</CustomLink>
        <CustomLink to="/enclosure-entry">Enclosure Entry</CustomLink>
        <CustomLink to="/about-us">About us</CustomLink>
        <CustomLink to="/sign-in">Sign out</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, onMouseEnter, onMouseLeave, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
