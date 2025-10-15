import {
  FaLinkedinIn,
  FaGithub,
  FaVuejs,
  FaReact,
  FaHtml5,
  FaSass,
  FaFigma,
} from "react-icons/fa";
import { BsPhoneFill, BsBootstrap } from "react-icons/bs";
import { SiMinutemailer, SiGhost, SiJira, SiThreedotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptLine } from "react-icons/ri";
import { MdEmail } from 'react-icons/md';

export const AboutInfo = () => (
  <div className="in">
    <h3>Hello!</h3>
    <p>
      My passion is FrontEnd, and I worked on a product company team for 3
      years.
    </p>
    <p>
      I am successful in creating visually appealing and user-friendly websites
      with animations with with high loading speed. Always open to learning new
      technologies. Interested in the possibility of growth and professional
      development in the environment of high-class specialists.
    </p>
  </div>
);

export const ExperienceInfo = () => (
  <div className="in expirience">
    <h3>Frontend developer at Nethunt CRM</h3>
    <p>
      - Developed and maintained the company's multilingual website from
      scratch.
      <br></br>- Collaborated with a marketing team and designers to create a
      modern responsive website and improve it promptly.<br></br>- Implemented
      our specially designed theme in the blog based on CMS Ghost.<br></br>-
      Added interesting animation for more interactivity.<br></br>- Optimized
      website performance.<br></br>- Taking part in creating the front-end web
      application using Vue.js and also created the page by myself.
    </p>
  </div>
);

export const ProjectsInfo = () => (
  <div className="in projects">
    <h3>My works</h3>
    <p>
      <a
        target="_blank"
        href="https://nethunt.com/"
        className="link"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.92764 7.57876C4.84414 7.57876 3.14906 5.87816 3.14906 3.78322C3.14906 1.7006 4.84414 0 6.92764 0C9.01117 0 10.7062 1.7006 10.7062 3.78322C10.7062 5.87816 9.01117 7.57876 6.92764 7.57876Z"
            fill="#000"
          ></path>
          <path
            d="M18.7671 12.7977C18.72 9.12067 18.2259 5.5041 16.7786 2.11733C16.4845 1.43998 15.4137 1.50046 15.1078 2.11733C12.2957 7.69337 6.96557 11.0318 0.98836 11.8059H0.976595C0.43535 11.8059 0 12.2534 0 12.8098C0 13.3662 0.43535 13.8138 0.976595 13.8138C6.96561 14.5879 12.3074 17.9383 15.1078 23.5144C15.4137 24.1313 16.4845 24.1918 16.7786 23.5144C18.2259 20.1276 18.72 16.511 18.7671 12.834V12.8219V12.7977Z"
            fill="#000"
          ></path>
        </svg>
        NetHunt CRM website &#10230;
      </a>
      <span>JavaScript, HTML, CSS, Express.js</span>
    </p>
    <p>
      <a target="_blank" href="https://nethunt.com/blog/" className="link">
        <SiGhost />
        Ghost blog &#10230;
      </a>
      <span>Ghost CMS with custom theme</span>
    </p>
    <p>
      <a target="_blank" href="https://nethunt.ua/templates" className="link">
        <FaVuejs />
        Templates &#10230;
      </a>
      <span>Vue.js page with filters</span>
    </p>
    <p>
      <a
        target="_blank"
        href="https://svitlanatsupryk-jul18.github.io/vue-cat-facts/"
        className="link"
      >
        <FaVuejs />
        Cat facts &#10230;
      </a>
      <span>Vue.js with filter, search, and login</span>
    </p>
    <p>
      <a
        target="_blank"
        href="https://svitlanatsupryk-jul18.github.io/React-router-films/"
        className="link"
      >
        <FaReact />
        Films list &#10230;
      </a>
      <span>React, pagination and authentication</span>
    </p>
    <p>
      <a
        target="_blank"
        href="https://svitlanatsupryk-jul18.github.io/react-contact-form/contact"
        className="link"
      >
        <FaReact />
        Contact form &#10230;
      </a>
      <span>React, React Router with validation</span>
    </p>
    <p>
      <a
        target="_blank"
        href="https://svitlanatsupryk-jul18.github.io/Three-particles-cursor-animation/"
        className="link"
      >
        <SiThreedotjs />
        Kitten animation &#10230;
      </a>
      <span>Three.js particles cursor animation</span>
    </p>
  </div>
);

export const ContactsInfo = () => (
  <div className="in contact">
    <h3>Let`s talk</h3>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/svitlana-tsupryk-b65623a8/"
      className="link"
    >
      <FaLinkedinIn style={{ fill: "white" }} />
      Add me
    </a>
    <a target="_blank" href="mailto:stsupryk@gmail.com" className="link">
      <MdEmail style={{ fill: "white" }} />
      Write to me
    </a>
    <a target="_blank" href="tel:+380683542570" className="link">
      <BsPhoneFill style={{ fill: "white" }} />
      Call me
    </a>
    <a target="_blank" href="https://t.me/svitlana_88888" className="link">
      <SiMinutemailer style={{ fill: "white" }} />
      Send a message
    </a>
    <a
      target="_blank"
      href="https://github.com/SvitlanaTsupryk-jul18"
      className="link"
    >
      <FaGithub style={{ fill: "white" }} />
      Look on
    </a>
  </div>
);

export const SkillsInfo = () => (
  <div className="in skills">
    <h3>Skills</h3>
    <p>
      <RiJavascriptLine />
      JavaScript, ES6
    </p>
    <p>
      <FaHtml5 />
      HTML, HTML5, EJS
    </p>
    <p>
      <FaSass />
      CSS, SCSS, BEM
    </p>
    <p>
      <FaVuejs />
      Vue.js, Vuex, Vue Router
    </p>
    <p>
      <FaReact /> React, Readux, React Router
    </p>
    <p>
      <BiLogoTypescript /> Typescript
    </p>
    <p>
      <BsBootstrap /> Bootstrap, Styled-components
    </p>
    <p>
      <FaFigma /> Figma, Photoshop, Zeplin
    </p>
    <p>
      <FaGithub /> Git
    </p>
    <p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        fill="none"
        viewBox="0 0 82 30"
      >
        <path
          fill="#FFF"
          d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"
        />
        <path
          fill="#FFF"
          d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"
        />
        <path
          fill="#FFF"
          d="m59.096 29.012.037-27.932a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.252-.507.42L36.707 28.842v.005l-.005.006c-.14.343.126.71.497.71h6.108c.33 0 .548-.1.656-.308l1.213-2.915c.149-.388.177-.424.601-.424h5.836c.406 0 .415.008.408.405l-.131 2.71a.525.525 0 0 0 .529.532h6.17a.522.522 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326c-.057 0-.102-.001-.138-.005a.146.146 0 0 1-.13-.183c.012-.041.029-.095.053-.163l4.377-10.827c.038-.107.086-.212.136-.314.071-.145.157-.155.184-.047.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.041h-.008l.003-.002Z"
        />
        <path
          fill="#FFF"
          d="M71.545.547h-4.639c-.245 0-.52.13-.585.422l-6.455 28.029a.423.423 0 0 0 .088.364.572.572 0 0 0 .437.202h5.798c.311 0 .525-.153.583-.418 0 0 .703-3.168.704-3.178.05-.247-.036-.439-.258-.555-.105-.054-.209-.108-.312-.163l-1.005-.522-1-.522-.387-.201a.186.186 0 0 1-.102-.17.199.199 0 0 1 .198-.194l3.178.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.107-6.12-3.309-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.278 0-.328-.03-.337-.04-.004-.007 1.833-8.073 1.834-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.188.188 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.237-.061 3.492-1.721 7.09-4.766 7.214Z"
        />
      </svg>
      GSAP, CSS, SVG animation
    </p>
    <p>
      <SiThreedotjs /> THREE.js, R3F, Drei
    </p>
    <p>
      <SiJira /> Jira
    </p>
  </div>
);
