import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    const path = `../authL`;
    navigate(path);
  };

  const onCatalogo = () => {
    const path = `../productView`;
    navigate(path);
  };

  return (
    <section className="vh-100">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-200">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card-body p-5 text-center">
              <h3 className="mb-3">JBOrder</h3>

              <button
                className="btn btn-primary btn-lg w-100 mb-5 mt-5"
                type="button"
              >
                Clientes
              </button>

              <button
                className="btn btn-primary btn-lg w-100 mb-5"
                type="button"
                onClick={onCatalogo}
              >
                Catálogo
              </button>

              <button
                className="btn btn-primary btn-lg w-100 mb-5"
                type="button"
              >
                Ver Orden
              </button>

              <button
                className="btn btn-outline-danger btn-lg w-30 mb-5 float-end"
                onClick={onLogout}
              >
                <img
                  id="logout"
                  src="/icons/logout.png"
                  style={{ width: 30, height: 30 }}
                />

                <span className="p-2">Salir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
