import { footer } from "../constants";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // Alias Link from react-scroll

const Footer = () => {

  const handleLinkClick = (event) => {

    // Smooth scroll to section
    const section = document.querySelector(event.target.getAttribute("href"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black py-8 px-[9%]">
      <div className="flex flex-wrap gap-[15px]">
        {footer.map((item) => (
          <div className="py-[10px] flex-1 basis-[250px]" key={item.header}>
            <h3 className="text-[25px] py-[7px] text-white">{item.header}</h3>
            {/* Render text for sections without lists */}
            {item.text && (
              <p className="font-[15px] py-[7px] text-[#eee]">{item.text}</p>
            )}
            {/* Render lists with links */}
            {item.list && (
              <ul className="font-[15px] text-[#eee]">
                {item.list.map((link) => (
                  <li key={link.href} className="py-[7px]">
                    
                    <ScrollLink
                      to={link.href} // Ensure this matches the section id
                      smooth={true}
                      duration={500}
                      onClick={handleLinkClick}
                      className=" hover:text-[#0080ff] cursor-pointer"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
