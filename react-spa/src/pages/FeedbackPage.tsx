import React from "react";
const FeedbackPage: React.FC = () => (
  <main className="profile">
    <div className="container">
      <div className="profile-container">
        <div className="row gy-md-3">
          <div className="profile-info col-3 col-xl-4 col-lg-5 col-md-12">
            <aside className="profile__sidebar">
              <div className="profile-user">
                <img src="/assets/img/avt/avt2.png" alt="" className="profile-user__avatar" />
                <h1 className="profile-user__name">Nguyễn Văn Nhật</h1>
                <p className="profile-user__desc">Ngày tham gia: 17/05/2024</p>
              </div>
              <div className="profile-menu">
                <h3 className="profile-menu__title">Quản lý tài khoản</h3>
                <ul className="profile-menu__list">
                  <li>
                    <a href="/edit-personal" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src="/assets/icons/user.svg" alt="" className="icon" />
                      </span>
                      Thông tin cá nhân
                    </a>
                  </li>
                  <li>
                    <a href="/edit-address" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src="/assets/icons/location.svg" alt="" className="icon" />
                      </span>
                      Địa chỉ
                    </a>
                  </li>
                  <li>
                    <a href="/patient" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src="/assets/icons/mail.svg" alt="" className="icon" />
                      </span>
                      Bệnh án
                    </a>
                  </li>
                  <li>
                    <a href="/feedback" className="profile-menu__link">
                      <span className="profile-menu__icon" style={{ width: 20 }}>
                        <img src="/assets/icons/feedback.svg" alt="" className="icon" />
                      </span>
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
              <div className="profile-menu">
                <h3 className="profile-menu__title">Đăng ký dịch vụ</h3>
                <ul className="profile-menu__list">
                  <li>
                    <a href="/pay" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src="/assets/icons/protection.svg" alt="" className="icon" />
                      </span>
                      Đăng ký gói
                    </a>
                  </li>
                  <li>
                    <a href="/paycard" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src="/assets/icons/wallet.svg" alt="" className="icon" style={{ width: 20 }} />
                      </span>
                      Thanh toán
                    </a>
                  </li>
                </ul>
              </div>
              <div className="profile-menu">
                <h3 className="profile-menu__title">Dịch vụ khách hàng</h3>
                <ul className="profile-menu__list">
                  <li>
                    <a href="#" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src="/assets/icons/help.svg" alt="" className="icon" />
                      </span>
                      Trợ giúp
                    </a>
                  </li>
                  <li>
                    <a href="#" className="profile-menu__link">
                      <span className="profile-menu__icon">
                        <img src="/assets/icons/term.svg" alt="" className="icon" />
                      </span>
                      Điều khoản sử dụng
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="profile-info col-9 col-xl-8 col-lg-7 col-md-12">
            <div className="profile-info">
              <div className="row gy-3">
                <div className="col-12">
                  <h2 className="profile-info__heading--lv2">
                    <a href="/profile">
                      <img src="/assets/icons/arrow-left.svg" alt="" className="profile-info__icon" />
                    </a>
                    Feedback của tôi
                  </h2>
                </div>
                <div className="col-12">
                  <div className="feedback__list">
                    <div className="row">
                      <article className="col-6">
                        <div className="feedback-item">
                          <p className="feedback-item__date">28/05/2024</p>
                          <h2 className="feedback-item__message">
                            Tôi bị nổi nhiều mụn ở mặt bạn có thể xem chuẩn đoán giúp tôi không?
                          </h2>
                          <p className="feedback-item__rate">Đánh giá câu trả lời: Tốt</p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);
export default FeedbackPage;
