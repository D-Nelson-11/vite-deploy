import Nav from "./components/Nav";
const App = () => {
  return (
    <>
      <Nav />
      <div className="contenedor">
        <section>
          <p className="colorTexto">Hola, Mi nombre es</p>
          <h1 style={{ color: "#fff" }} className="neon-text">
            David Nelson.
          </h1>
          <h2 style={{ color: "#a4a4a4" }}>
            Licenciado en Informática Administrativa
          </h2>
          <p style={{ color: "#bdbdbd" }}>
            ¡Hola! soy David, desarrollador web con
            especialización en la creación de soluciones digitales innovadoras y
            funcionales. Mi amor por la programación y la tecnología me ha
            guiado a lo largo de mi carrera, permitiéndome transformar ideas en
            realidad a través de la web. <br/><br/>Tengo una licenciatura en Informática
            Administrativa, lo que me proporciona una sólida base tanto en el
            desarrollo de software como en la gestión y optimización de procesos
            administrativos. Esta combinación de habilidades me permite abordar
            proyectos desde una perspectiva técnica y estratégica, asegurando
            que cada solución que desarrollo no solo sea técnicamente robusta,
            sino también alineada con los objetivos de negocio de mis clientes.
            Mi experiencia abarca una amplia gama de tecnologías y plataformas,
            y siempre estoy buscando aprender y adoptar nuevas herramientas y
            metodologías que puedan mejorar mi trabajo. Desde el diseño y
            desarrollo de sitios web responsivos hasta la implementación de
            sistemas complejos de gestión de contenidos y aplicaciones web
            interactivas, estoy comprometido con la entrega de productos de alta
            calidad que superen las expectativas de los usuarios.
          </p>
        </section>
      </div>
    </>
  );
};

export default App;
