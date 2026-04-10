import React from "react";

const SignUpPage: React.FC = () => (
  <main className="auth">
    {/* Auth intro */}
    <div className="auth__intro d-md-none">
      <img src="/assets/img/auth/intro.png" alt="" className="auth__intro-img" />
    </div>
    {/* Auth content */}
    <div className="auth__content">
      <div className="auth__content-inner">
        {/* Logo */}
        <a href="/" className="logo logo--footer">
          <img src="/assets/img/logo.png" alt="" className="logo__img" />
          <h1 className="logo__text logo__text--footer">Fresh X</h1>
        </a>
        <h2 className="auth__heading">Đăng Ký</h2>
        <p className="auth__desc">
          Hãy tạo tài khoản của bạn và Mua sắm như một người chuyên nghiệp và tiết kiệm tiền.
        </p>
        <form className="form auth__form">
          <div className="form__group">
            <div className="form__text-input">
              <input type="email" placeholder="Email" className="form__input" autoFocus required />
              <img src="/assets/icons/message.svg" alt="" className="form__input-icon" />
              <img src="/assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
            </div>
            <p className="form__error">Vui lòng nhập đúng định dạng email</p>
          </div>
          <div className="form__group">
            <div className="form__text-input">
              <input type="password" placeholder="Mật khẩu" className="form__input" required minLength={6} />
              <img src="/assets/icons/pass.svg" alt="" className="form__input-icon" />
              <img src="/assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
            </div>
            <p className="form__error">Mật khẩu phải có ít nhất 6 ký tự</p>
          </div>
          <div className="form__group">
            <div className="form__text-input">
              <input type="password" placeholder="Nhập lại mật khẩu" className="form__input" required minLength={6} />
              <img src="/assets/icons/pass.svg" alt="" className="form__input-icon" />
              <img src="/assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
            </div>
            <p className="form__error">Mật khẩu phải đúng với ở trên</p>
          </div>
          <div className="form__group form__group--inline">
            <label className="form__checkbox">
              <input type="checkbox" className="form__checkbox-input d-none" />
              <span className="form__checkbox-label">Mật khẩu phải có ít nhất 6 nhân vật</span>
            </label>
          </div>
          <div className="form__group auth__btn-group">
            <button className="btn btn--primary auth__btn form__submit-btn">Đăng Ký</button>
            <button className="btn btn--outline auth__btn bnt--no-margin">Đăng ký bằng Gmail</button>
          </div>
        </form>
        <p className="auth__text">
          Bạn đã có tài khoản chưa?
          <a href="/sign-in" className="auth__link auth__text-link">Đăng Nhập</a>
        </p>
      </div>
    </div>
  </main>
);

export default SignUpPage;
