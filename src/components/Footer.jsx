import { footerCopy } from "../constants/data";

const Footer = () => (
  <footer className="site-footer">
    <p>{footerCopy.line}</p>
    <span>{footerCopy.location}</span>
  </footer>
);

export default Footer;
