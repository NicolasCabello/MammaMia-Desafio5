import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="not-found">
      <p className="not-found-code">404</p>
      <h1>Esta pizza se perdió en el horno</h1>
      <p className="not-found-text">
        La página que buscas no está en el menú. Vuelve al inicio y elige otra.
      </p>
      <Link to="/" className="btn btn-dark">
        Volver al inicio
      </Link>
    </main>
  );
};

export default NotFound;
