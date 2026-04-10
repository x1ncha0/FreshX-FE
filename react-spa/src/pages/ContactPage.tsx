import React from "react";
const ContactPage: React.FC = () => (
  <main>
    <div className="contact">
      <div className="container">
        <div className="contact__header">
          <section className="contact-content">
            <h2 className="contact-content__heading">Hãy liên lạc với chúng tôi</h2>
            <div className="contact-content__containers">
              <article className="contact-content__container">
                <img loading="lazy" src="/assets/icons/location.svg" alt="" />
                <div>
                  <h3 className="contact-content__title">Trụ sở chính</h3>
                  <p className="contact-content__desc">
                    116 Nguyễn Huy Tưởng - Thành phố Đà Nẵng - Việt Nam
                  </p>
                </div>
              </article>
              <article className="contact-content__container">
                <img loading="lazy" src="/assets/icons/phone.svg" alt="" className="contact-content__icon" />
                <div className="contact-content__wrap">
                  <h3 className="contact-content__title">Số hotline</h3>
                  <p className="contact-content__desc"><a href="#!">(0000) 000-0000</a></p>
                  <p className="contact-content__desc"><a href="tel:0823240040">+84 823 240 040</a></p>
                </div>
              </article>
              <article className="contact-content__container">
                <img loading="lazy" src="/assets/icons/mail.svg" alt="" className="contact-content__icon" />
                <div className="contact-content__wrap">
                  <h3 className="contact-content__title">Địa chỉ email</h3>
                  <p className="contact-content__desc">
                    <a href="mailto:trunghoang.240500@gmail.com">trunghoang.240500@gmail.com</a>
                  </p>
                </div>
              </article>
            </div>
          </section>
          <div className="contact-info">
            <img loading="lazy" src="/assets/icons/wow.svg" alt="" className="contact-info__icon contact-info__icon--wow" />
            <img loading="lazy" src="/assets/icons/star-location.svg" alt="" className="contact-info__icon contact-info__icon--star" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d479.28218894278825!2d108.16904819887739!3d16.052125594425593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142196d9a203685%3A0x4e8027fe58d65525!2zQ2FvIMSR4bqzbmcgRlBUIEPGoSBT4bufIDI!5e0!3m2!1svi!2sus!4v1720950520889!5m2!1svi!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
        <div className="contact-form">
          <section>
            <h2 className="contact-form__title">Chúng tôi rất mong nhận được hồi âm từ bạn.</h2>
            <p className="section-desc contact-form__desc">Địa chỉ email của bạn sẽ không được công bố.</p>
            <form action="" className="form">
              <div className="form__wrap form__wrap--double">
                <div className="form-group form-group--double">
                  <label htmlFor="firstName" className="form-group__label">Tên</label>
                  <input placeholder="Tên của bạn" className="form-group__input form-group__input--small" name="firstName" type="text" />
                </div>
                <div className="form-group form-group--double">
                  <label htmlFor="lastName" className="form-group__label">Họ và tên đệm</label>
                  <input placeholder="Họ và tên đệm" className="form-group__input form-group__input--small" name="lastName" type="text" />
                </div>
              </div>
              <div className="form__wrap">
                <div className="form-group">
                  <label htmlFor="email" className="form-group__label">Email</label>
                  <input placeholder="Email của bạn" className="form-group__input" name="email" type="text" />
                </div>
              </div>
              <div className="form__wrap">
                <div className="form-group">
                  <label htmlFor="phone" className="form-group__label">Số điện thoại</label>
                  <input placeholder="Số điện thoại: +84 000000000" className="form-group__input" name="phone" type="text" maxLength={11} />
                </div>
              </div>
              <div className="form__wrap">
                <div className="form-group">
                  <label htmlFor="mess" className="form-group__label">Nhắn tin</label>
                  <textarea className="form-group__text" name="mess" cols={30} rows={10} maxLength={500} placeholder="Tin nhắn của bạn"></textarea>
                </div>
              </div>
              <div className="form__wrap">
                <button className="form__btn btn">Gửi tin nhắn</button>
              </div>
            </form>
          </section>
          <img loading="lazy" src="/assets/img/contact/bg.avif" alt="" className="contact-form__img d-lg-none" />
        </div>
      </div>
    </div>
  </main>
);

export default ContactPage;
