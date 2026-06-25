import { NavLink } from "react-router";
function Nav({ data, onChangeMode }) {
  const list = data.map(d => (
    <li key={d.id} style={{ marginBottom: "8px" }}>
      <NavLink
        to={`/${d.id}`}
        className="nav-button"
        onClick={e => {
          onChangeMode(d.id);
        }}>
        {d.title}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul>{list}</ul>
    </nav>
  );
}

export default Nav;
