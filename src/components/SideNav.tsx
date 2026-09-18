import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavIcon } from "./NavIcon";

export function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const page = document.querySelector<HTMLElement>("main.page");

    document.body.style.overflow = "hidden";
    page?.setAttribute("inert", "");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      page?.removeAttribute("inert");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    toggleButtonRef.current?.focus();
  };

  const closeAfterNavigation = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        ref={toggleButtonRef}
        type="button"
        className="sideNavToggle"
        aria-label="Open navigation"
        aria-controls="site-navigation"
        aria-expanded={isOpen}
        tabIndex={isOpen ? -1 : 0}
        onClick={() => setIsOpen(true)}
      >
        <span className="sideNavToggleIcon" aria-hidden="true">
          <span />
          <span />
        </span>
        <span>Menu</span>
      </button>

      <div
        className={`sideNavBackdrop ${isOpen ? "isOpen" : ""}`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <aside
        id="site-navigation"
        className={`sideNav ${isOpen ? "isOpen" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="sideNavHeader">
          <div>
            <p className="eyebrow">Navigation</p>
            <p className="sideNavName">Carlo Barone</p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="sideNavClose"
            aria-label="Close navigation"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeMenu}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav className="sideNavLinks" aria-label="Primary navigation">
          <NavLink
            to="/"
            end
            tabIndex={isOpen ? 0 : -1}
            onClick={closeAfterNavigation}
          >
            <NavIcon name="home" />
            Home
          </NavLink>
          <NavLink
            to="/resume"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeAfterNavigation}
          >
            <NavIcon name="resume" />
            Resumé
          </NavLink>
          <NavLink
            to="/projects"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeAfterNavigation}
          >
            <NavIcon name="projects" />
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeAfterNavigation}
          >
            <NavIcon name="contact" />
            Contact
          </NavLink>
        </nav>

        <div className="sideNavFooter">
          <p>Design · Engineering · Product</p>
          <p>Stockholm, Sweden</p>
        </div>
      </aside>
    </>
  );
}
