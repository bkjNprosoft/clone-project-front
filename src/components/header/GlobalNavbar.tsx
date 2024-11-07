import { NavLink } from 'react-router-dom';

type Props = {
  activeTo: string;
  menuClassName?: string;
};

const GlobalNavbar = (props: Props) => {
  const hoverClassName = `hover:border-solid hover:border-b-[1px] hover:border-b-white hover:cursor-pointer`;
  const activeHomeClassName = `border-solid border-b-[1px] border-b-white hover:cursor-pointer`;
  const linkCommonClassName = `block h-[100%]`;
  return (
    <header className="fixed top-0 right-0 left-auto w-[100%]  bg-transparent flex justify-between pt-7 px-6 z-10">
      <Logo />
      <section id="nav-menu" className="-mr-6">
        <ul
          className={`flex gap-12 w-[100%] mt-2 mr-6 pr-3 font-semibold h-14 ${props.menuClassName}`}
        >
          <li
            className={`${props.activeTo == '/' ? activeHomeClassName : hoverClassName}`}
          >
            <NavLink to="/" className={`${linkCommonClassName}`}>
              主页
            </NavLink>
          </li>
          <li className={`${hoverClassName}`}>
            <NavLink to="/game" className={`${linkCommonClassName}`}>
              游戏
            </NavLink>
          </li>
          <li className={`${hoverClassName}`}>
            <NavLink to="/news" className={`${linkCommonClassName}`}>
              新闻动态
            </NavLink>
          </li>
          <li className={`${hoverClassName}`}>
            <NavLink to="/about" className={`${linkCommonClassName}`}>
              关于瓦力
            </NavLink>
          </li>
          <li className={`${hoverClassName}`}>
            <NavLink to="/contact" className={`${linkCommonClassName}`}>
              商务合作
            </NavLink>
          </li>
        </ul>
      </section>
    </header>
  );
};

export const Logo = () => {
  return (
    <section id="nav-logo">
      <div className="w-20">
        <NavLink to="/">
          <img src="./images/wali@2x.png" alt="Logo" className="w-max h-auto" />
        </NavLink>
      </div>
    </section>
  );
};

export default GlobalNavbar;
