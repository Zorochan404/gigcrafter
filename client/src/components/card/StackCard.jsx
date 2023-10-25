import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaWordpressSimple,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

import "./stackcard.scss";

const StackCard = () => {
  return (
    <div className="StackCard">
      <div className="card">
        <div className="head">ReactJS</div>
        <div className="icon">
          <FaReact color="#5FD4F4" />
        </div>
        <div className="content">
          React is a popular JavaScript library for building user interfaces. It
          allows developers to create interactive and dynamic web applications
          efficiently, using reusable components for a seamless user experience.
        </div>
      </div>
      <div className="card">
        <div className="head">NodeJS</div>
        <div className="icon">
          <FaNodeJs color="#7FC82C" />
        </div>
        <div className="content">
          Node.js is a server-side JavaScript runtime environment. It enables
          developers to build scalable and high-performance applications, using
          non-blocking, event-driven I/O for efficient handling of concurrent
          requests.
        </div>
      </div>
      {/* <div className="card">
        <div className="head">ExpressJs</div>
        <div className="icon">
          <FaReact />
        </div>
        <div className="content">
          Express.js is a minimalist and flexible Node.js web application
          framework. It provides a robust set of features for building web and
          mobile applications, simplifying server-side development.
        </div>
      </div> */}
      <div className="card">
        <div className="head">MongoDB</div>
        <div className="icon">
          <SiMongodb color="#52B040" />
        </div>
        <div className="content">
          MongoDB is a popular NoSQL database management system. It stores data
          in flexible, JSON-like documents, enabling easy scalability and
          dynamic schema modifications, ideal for large-scale, high-performance
          applications.
        </div>
      </div>
      <div className="card">
        <div className="head">HTML</div>
        <div className="icon">
          <FaHtml5 color="#F5480C" />
        </div>
        <div className="content">
          HTML (HyperText Markup Language) is the standard language for creating
          web pages and web applications. It structures content using elements,
          defining their layout and appearance in browsers.
        </div>
      </div>
      <div className="card">
        <div className="head">CSS</div>
        <div className="icon">
          <FaCss3Alt color="#0171B9" />
        </div>
        <div className="content">
          CSS (Cascading Style Sheets) is a stylesheet language used to control
          the presentation and layout of HTML documents. It defines how elements
          are displayed, enhancing the visual design of websites.
        </div>
      </div>
      <div className="card">
        <div className="head">JavaScript</div>
        <div className="icon">
          <RiJavascriptFill color="#F0D91E" />
        </div>
        <div className="content">
          JavaScript is a versatile programming language for web development. It
          enables interactive and dynamic content on websites, handling user
          interactions, data manipulation, and enhancing overall user
          experience.
        </div>
      </div>
      {/* <div className="card">
        <div className="head">HTML,CSS,JS</div>
        <div className="icon" style={{flexDirection:"column"}}>
          <FaHtml5 color="#F5480C"/> <FaCss3Alt color="#0171B9"/> <RiJavascriptFill color="#F0D91E"/>
        </div>
        <div className="content">
          HTML (HyperText Markup Language) structures web content. CSS
          (Cascading Style Sheets) styles the content, enhancing visual
          presentation. JS (JavaScript) adds interactivity, enabling dynamic and
          responsive web applications.
        </div>
      </div> */}
      <div className="card">
        <div className="head">Wordpress</div>
        <div className="icon">
          <FaWordpressSimple color="#217297" />
        </div>
        <div className="content">
          WordPress is a popular open-source content management system (CMS)
          that simplifies website creation and management. It offers
          customizable themes, plugins, and an intuitive interface for building
          various web solutions.
        </div>
      </div>
      <div className="card">
        <div className="head">React_Native</div>
        <div className="icon">
          <TbBrandReactNative color="#5FD4F4" />
        </div>
        <div className="content">
          React Native is a framework for building mobile applications using
          JavaScript and React. It allows developers to create cross-platform
          apps for iOS and Android, sharing most of the codebase.
        </div>
      </div>
      <div className="card">
        <div className="head">Figma</div>
        <div className="icon">
          <FaFigma />
        </div>
        <div className="content">
          Figma is a cloud-based design tool enabling collaboration and
          prototyping. It allows real-time editing, simplifying UI/UX design.
          Teams can create, iterate, and share designs seamlessly, enhancing
          productivity and creativity.
        </div>
      </div>
    </div>
  );
};

export default StackCard;
