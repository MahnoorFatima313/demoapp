import React from "react";
import { Link } from "react-router-dom";
import "./CoreServiceLinks.css";
import "../styles/service-page-polish.css";

const services = [
  { path: "/website-development-services", label: "Web Development" },
  { path: "/mobile-app-development", label: "Mobile App Development" },
  {
    path: "/custom-software-development-services",
    label: "Custom Software Development",
  },
  { path: "/api-development-services", label: "API Development" },
  { path: "/digital-marketing-services", label: "Digital Marketing" },
];

function CoreServiceLinks({ currentPath }) {
  const relatedServices = services.filter(
    (service) => service.path !== currentPath
  );

  return (
    <nav className="core-service-links" aria-label="Related QllmSoft services">
      <h3>Explore our other services</h3>
      <ul>
        {relatedServices.map((service) => (
          <li key={service.path}>
            <Link to={service.path}>{service.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CoreServiceLinks;
