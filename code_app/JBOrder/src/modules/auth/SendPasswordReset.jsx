import { Link, useNavigate } from "react-router-dom";

export const SendPasswordReset = () => {
  const navigate = useNavigate();
  const onSend = () => {
    const path = `../authR`;
    navigate(path);
  };

  return (
    <section className="vh-100">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-20">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card-body p-5 text-center">
              <h3 className="mb-3">Restablecer contraseña</h3>

              <div className="mb-3">
                <img
                  id="user_1"
                  src="/icons/user_2.png"
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
                  type="email"
                  id="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="email@"
                />
              </div>

              <button
                className="btn btn-primary btn-lg w-100 mb-2"
                type="submit"
                onClick={onSend}
              >
                Enviar
              </button>

              <Link to="../authL">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
