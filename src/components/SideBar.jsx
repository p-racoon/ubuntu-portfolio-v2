import React from 'react';
import './SideBar.css';
import SideBarAppIcons from './SideBarAppIcons';
import aboutSidebarIcon from './../images/icons/app/about.svg';
import contactMeSidebarIcon from './../images/icons/app/mail-app.png';
import technicalSkills from './../images/icons/app/tools.png';
import helpSidebarIcon from './../images/icons/app/help.png';
import projectMenuSidebarIcon from './../images/icons/app/view-app-grid-symbolic.svg';
import certificatesIcon from './../images/icons/app/org.gnome.Evince.svg';
import projectsIcon from './../images/icons/app/org.remmina.Remmina.png';

export default function SideBar(props) {
  const appIcons = [
    {
      name: 'About',
      altText: 'About',
      src: aboutSidebarIcon,
    },
    // {
    //   name: "WebExperience",
    //   altText: "My Web Experience",
    //   src: "/images/icons/app/google-chrome.svg"
    // },
    {
      name: 'ContactMe',
      altText: 'Contacts & Social Links',
      src: contactMeSidebarIcon,
    },
    {
      name: 'Projects',
      altText: 'Projects',
      src: projectsIcon,
    },
    {
      name: 'Experience',
      altText: 'Professional Experience',
      src: technicalSkills,
    },
    {
      name: 'CertificatesSkills',
      altText: 'Certificates and Skills',
      src: certificatesIcon,
    },
    {
      name: 'Help',
      altText: 'Help',
      src: helpSidebarIcon,
    },
  ];
  return (
    <div className="sideBar">
      {appIcons.map(iconDetail => (
        <SideBarAppIcons key={iconDetail.name} iconDetail={iconDetail} />
      ))}
      <div className="lastAppIcon">
        <SideBarAppIcons
          iconDetail={{
            name: 'Help',
            altText: 'MyProjects',
            src: projectMenuSidebarIcon,
          }}
        />
      </div>
    </div>
  );
}
