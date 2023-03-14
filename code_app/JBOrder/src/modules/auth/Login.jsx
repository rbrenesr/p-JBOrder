import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    const path = `../mainM`;
    navigate(path);
  };

  return (
    <section className="vh-100">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card-body p-5 text-center">
              <h3 className="mb-3">Login</h3>

              <div className="mb-3">
                <img
                  id="user_1"
                  src="/icons/user_1.png"
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
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Contraseña"
                />
              </div>

              <button
                className="btn btn-primary btn-lg w-100 mb-2"
                type="submit"
                onClick={onLogin}
              >
                Autenticar
              </button>

              <Link to="../authS">Olvidó contraseña</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
