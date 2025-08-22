"use client";

import { useState, useEffect } from 'react';

interface sidebarProps {
  sidebarClosed: boolean;
  onClose: () => void; 
};

function Sidebar({ sidebarClosed, onClose }: sidebarProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sidebarSections = ["About Me", "Projects", "Skills", "Certificates", "Resume", "Transcript", "Contact", "Blog", "Personal Interests"];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className={`${sidebarClosed ? "collapsed" : ""}`} >
      <div id="sidebar-header">
        <a href="/" id="name-text" className="link-body-emphasis">
          Joe Rogers
        </a>
        <div onClick={onClose}>
          <svg id="collapse-sidebar" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082"/>
          </svg>
        </div>
      </div>

      <ul id="sidebar" className="nav nav-pills">
        {sidebarSections.map((section) => {
          const id = section.toLowerCase().replace(/\s+/g, '-');
          return (
            <li key={id} className="nav-item">
              <a href={`#${id}`} className={activeSection === `${id}` ? "observed nav-link link-body-emphasis" : "nav-link link-body-emphasis"} aria-current="page">{section}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;