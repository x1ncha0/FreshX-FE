import React from "react";
const LoginPage: React.FC = () => (
  <main>
    <main className="auth">
      {/* Auth intro */}
      <div className="auth__intro d-md-none">
        <img
          src="/assets/img/auth/intro.png"
          alt=""
          className="auth__intro-img"
        />
      </div>
      {/* Auth content */}
      <div className="auth__content">
        <div className="auth__content-inner">
          {/* Logo */}
          <a href="/" className="logo logo--footer">
            <img src="/assets/img/logo.png" alt="" className="logo__img" />
            <h1 className="logo__text logo__text--footer">Fresh X</h1>
          </a>
          <h2 className="auth__heading">Chào mừng bạn trở lại!</h2>
          <p className="auth__desc">
            Chào mừng bạn quay lại đăng nhập. Là khách hàng cũ,
            bạn có quyền truy cập vào tất cả đã lưu trước đó của
            bạn thông tin.
          </p>
          <form id="loginForm" className="form auth__form">
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="form__input"
                  autoFocus
                  required
                />
                <img
                  src="/assets/icons/message.svg"
                  alt=""
                  className="form__input-icon"
                />
                <img
                  src="/assets/icons/form-error.svg"
                  alt=""
                  className="form__input-icon-error"
                />
              </div>
              <p className="form__error">Vui lòng nhập đúng định dạng email</p>
            </div>
            <div className="form__group">
              <div className="form__text-input">
                <input
                  type="password"
                  id="password"
                  placeholder="Mật khẩu"
                  className="form__input"
                  required
                  minLength={6}
                />
                <img
                  src="/assets/icons/pass.svg"
                  alt=""
                  className="form__input-icon"
                />
                <img
                  src="/assets/icons/form-error.svg"
                  alt=""
                  className="form__input-icon-error"
                />
              </div>
              <p className="form__error">Mật khẩu phải có ít nhất 6 ký tự</p>
            </div>
            <div className="form__group form__group--inline">
              <label className="form__checkbox">
                <input
                  type="checkbox"
                  className="form__checkbox-input d-none"
                />
                <span className="form__checkbox-label">Lưu nhớ mật khẩu</span>
              </label>
              <a href="/reset-password" className="auth__link form__pull-right">
                Quên mật khẩu?
              </a>
            </div>
            <div className="form__group auth__btn-group">
              <button
                type="button"
                className="btn btn--primary auth__btn form__submit-btn"
              >
                Đăng nhập
              </button>
              <button className="btn btn--outline auth__btn bnt--no-margin">
                Đăng nhập bằng Gmail
              </button>
            </div>
          </form>
          <p className="auth__text">
            Bạn chưa có tài khoản?
            <a href="/sign-up" className="auth__link auth__text-link">
              Đăng ký
            </a>
          </p>
        </div>
      </div>
    </main>
  </main>
);

export default LoginPage;
