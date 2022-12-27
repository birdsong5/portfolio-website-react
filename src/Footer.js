import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div class="email-link">
        <a href="mailto:inna.work9@gmail.com">inna.work9@gmail.com</a>
      </div>
      <div class="social-links">
        <a
          href="https://www.linkedin.com/in/inna-troian-772168239/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:inna.work9@gmail.com"
          target="_blank"
          rel="noreferrer"
          title="Email"
        >
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://github.com/birdsong5"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <p>
        This website was built by
        <a
          href="https://www.linkedin.com/in/inna-troian-772168239/"
          target="_blank"
          rel="noreferrer"
        >
          Inna Troian
        </a>
        , and it is
        <a
          href="https://github.com/birdsong5/real-portfolio-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
        .
      </p>
    </footer>
  );
}
