import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const role = localStorage.get("role")
  const [listRouter, setListRouter] = useState([
    {
      name: "Phòng",
      path: "/home",
      src: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    },
    {
      name: "Khung cảnh",
      path: "/test",
      src: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    },
    {
      name: "Nhà nhỏ",
      path: "/nha",
      src: "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
    },
    {
      name: "Lều mục đồng",
      path: "/nha",
      src: "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg",
    },
    {
      name: "hồ bơi",
      path: "/nha",
      src: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    },
  ]);

  return (
    <div className="px-2">
      {listRouter.map((item) => (
        role ? <button
          className={
            location.pathname === item.path
              ? "border-b-2 border-black m-2"
              : "m-2"
          }
        >
          <Link to={item.path} className="no-underline">
            <div className="text-center text-black">
              <div className=" flex justify-center">
                <img
                  class="i181yxiv dir dir-ltr"
                  src={item.src}
                  alt=""
                  width="24"
                  height="24"
                />
              </div>
              <div>{item.name}</div>
            </div>
          </Link>
        </button> : <button>Admin</button>
      ))}
    </div>
  );
};

export default Header;
