import reactLogo from "./assets/react.svg";
import searchSvg from "./assets/search.svg";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-search-wrapper">
          <img src={reactLogo} alt="React Logo" />
          <h3 className="navbar-search-wrapper">
            <span>React</span>
            <span>
              <a href="https://react.dev/versions">v19.2</a>
            </span>
          </h3>
        </div>
        <div className="navbar-search-wrapper">
          <div className="navbar-search ">
            <label htmlFor="">
              <img src={searchSvg} alt="Search" />
            </label>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="search "
            />
          </div>
          <ul className="nav-list ">
            <li>Learn</li>
            <li>Reference</li>
            <li>Community</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
