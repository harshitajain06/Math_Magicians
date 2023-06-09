import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="px-4 py-2">
    <nav className="text-center flex items-center justify-between">
      <h1 className="text-3xl">Math Magicians</h1>
      <div className="text-lg flex gap-10">
        <Link to="/">HOME</Link>
        <Link to="/calculator">CALCULATOR</Link>
        <Link to="/quote">QUOTE</Link>
      </div>
    </nav>
  </div>
);
export default Nav;
