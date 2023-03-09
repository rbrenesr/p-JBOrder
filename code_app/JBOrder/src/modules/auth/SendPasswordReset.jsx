export const SendPasswordReset = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#144272" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-3">Restablecer contraseña</h3>

                <div className="mb-3">
                  <img id="user_1" src="/icons/user_2.png" style={{width: 80, height:80}}/>
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
                >
                  Enviar
                </button>

                <a href="#">Login</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
