import { Link, useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const onAplicated = () => {
    const path = `../mainM`;
    navigate(path);
  };

  return (
    <section className="vh-100">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-20">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card-body p-5 text-center">
              <h3 className="mb-3">Crear contraseña</h3>

              <div className="mb-3">
                <img
                  id="user_1"
                  src="/icons/user_3.png"
                  style={{ width: 80, height: 80 }}
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  className="form-control form-control-lg"
                  placeholder="Usuario"
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="pin"
                  name="pin"
                  className="form-control form-control-lg"
                  placeholder="PIN"
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Contraseña"
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  className="form-control form-control-lg"
                  placeholder="Confirmar contraseña"
                />
              </div>

              <button
                className="btn btn-primary btn-lg w-100 mb-2"
                type="submit"
                onClick={onAplicated}
              >
                Aplicar
              </button>

              <Link to="../authL">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
