function Nav() {
  return (
    <nav style={{ width: "100%", padding: "1px", marginTop: "10px" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "end",
          width: "90%",
        }}>
        <li> <a href="" className="navItem"> Inicio</a></li>
        <li> <a href="" className="navItem">Sobre Mi </a></li>
        <li> <a href="" className="navItem">Habilidades</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
