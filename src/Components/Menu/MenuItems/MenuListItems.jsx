import { useState, useRef } from "react";
import { menuItems } from "../../../Constant/MenuItems/MenuItems";
import { useLocation } from "react-router-dom";

const MenuListItems = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");

  const filteredMenuItems = categoryParam
    ? menuItems.filter(
        (item) => item.category.toLowerCase() === categoryParam.toLowerCase()
      )
    : menuItems;

  const [openIndex, setOpenIndex] = useState(null);
  const sectionRefs = useRef([]);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (index) => {
    setOpenIndex(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="menuRight">
      <div className="menuRightOuter borderRadius12">
        <div className="menuRightInner mt20">
          <div className="menuData dFlex">
            <ul className="menuListItem font12 primaryColor dFlex uppercase pointer borderRadius8 gap8 aiCenter jCenter">
              {filteredMenuItems.map((items, index) => (
                <li
                  key={items.id}
                  className="menuItems transition borderRadius8"
                  onClick={() => scrollToSection(index)}
                >
                  <a>{items.heading}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="cuisine">
            {filteredMenuItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className="cuisineListItems borderRadius8 textCenter"
                  ref={(el) => (sectionRefs.current[index] = el)}
                >
                  <div
                    className="menuItemHead dFlex jBetween  cursorPointer aiCenter"
                    onClick={() => toggleDropdown(index)}
                  >
                    <div className="cuisineHead uppercase h5 primaryColor">
                      <h3>{item.heading}</h3>
                    </div>
                    <div className="line dotedLine primaryColor"></div>
                    <div className="dropdownIcon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 -960 960 960"
                        width="30px"
                        fill="#EFE7D2"
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <path d="M480-360 280-560h400L480-360Z" />
                      </svg>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="cuisineData borderRadius4">
                      {item.dishes.map((data) => (
                        <div className="cuisineList mt10 mb10" key={data.name}>
                          <div className="">
                            <div className="dFlex aiBase">
                              <div className="cuisineName dFlex mAuto">
                                <div className="h6 primaryColor uppercase">
                                  <h5>{data.name}</h5>
                                </div>
                              </div>
                              <div className="line dotedLine primaryColor"></div>
                              <div className="price primaryColor h6">
                                <span>₹ {data.price}</span>
                              </div>
                            </div>
                            <div className="font14 secondaryColor mb10 textJustify">
                              <p>{data.aboutDish}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuListItems;
