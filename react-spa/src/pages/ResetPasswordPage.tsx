import React from "react";

const ResetPasswordPage: React.FC = () => (
  <main className="auth">
    {/* Auth intro */}
    <div className="auth__intro auth__intro--reset d-md-none">
      <img src="/assets/img/auth/forgot-password.webp" alt="" className="auth__intro-img" />
      <p className="auth__intro-text auth__intro-text--gray">
        Bạn quên mật khẩu của bạn? Hãy lấy lại nó.
      </p>
    </div>
    {/* Auth content */}
    <div className="auth__content">
      <div className="auth__content-inner">
        {/* Logo */}
        <a href="/" className="logo logo--footer">
          <img src="/assets/img/logo.png" alt="" className="logo__img" />
          <h1 className="logo__text logo__text--footer">GenAI</h1>
        </a>
        <h1 className="auth__heading">Đặt lại mật khẩu của bạn</h1>
        <p className="auth__desc">
          Nhập email của bạn và chúng tôi sẽ gửi cho bạn một liên kết để thiết lập lại mật khẩu.
        </p>
        <form className="form auth__form auth__form-forgot">
          <div className="form__group">
            <div className="form__text-input">
              <input type="email" placeholder="Email" className="form__input" autoFocus required />
              <img src="/assets/img/auth/message.svg" alt="" className="form__input-icon" />
              <img src="/assets/icons/form-error.svg" alt="" className="form__input-icon-error" />
            </div>
            <p className="form__error">Vui lòng nhập đúng định dạng email</p>
          </div>
          <div className="form__group auth__btn-group">
            <button className="btn btn--primary auth__btn form__submit-btn">Đặt lại mật khẩu</button>
          </div>
        </form>
        <p className="auth__text">
          <a href="/sign-in" className="auth__link auth__text-link">Quay lại để đăng nhập</a>
        </p>
      </div>
    </div>
  </main>
);

export default ResetPasswordPage;
