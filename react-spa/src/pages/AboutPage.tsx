import React from "react";

const AboutPage: React.FC = () => {
  return (
    <main>
      <div className="about-container">
        <div className="container">
          <h2 className="about-container__title section-heading">
            Enhance your interior through design
          </h2>
          <p className="about-container__desc section-desc">
            Our practice is Designing complete environments exceptional buildings, communities and places in spacial situations, where a unique historic or nature enviroment requests an especially thoughtful and innovative solution.
          </p>
        </div>
      </div>
      <img
        loading="lazy"
        src="/assets/img/about/bg.jpg"
        alt=""
        className="about-container__img"
      />
      <div className="container">
        <div className="about-future">
          <h2 className="about-future__title section-heading">
            Building the future cities.
          </h2>
          <div className="about-future__wrap">
            <article>
              <h3 className="about-future__sub">01 / Analysis</h3>
              <p className="about-future__sub-desc">
                Urban design draws together the many strands of place-making, environmental stewardship.
              </p>
            </article>
            <article>
              <h3 className="about-future__sub">02 / Schematic</h3>
              <p className="about-future__sub-desc">
                Through a unique combination of engineering, construction and design disciplines and expertise.
              </p>
            </article>
            <article>
              <h3 className="about-future__sub">03 / Concept</h3>
              <p className="about-future__sub-desc">
                Since the 1980s, as the complexity of buildings began to increase, the field of architecture became multi-disciplinary with specializations for each.
              </p>
            </article>
            <article>
              <h3 className="about-future__sub">04 / Offer</h3>
              <p className="about-future__sub-desc">
                Hub embraces holistic development and support for employees the aim of being a first-choice employer our sectors.
              </p>
            </article>
          </div>
        </div>
      </div>
      <div className="about-data">
        <div className="container">
          <div className="about-data__inner">
            <h2 className="about-data__heading">
              Milestones that we have achieved and are proud of.
            </h2>
            <div className="our-data">
              <article className="our-data__item">
                <h3 className="our-data__number">29+</h3>
                <p className="our-data__desc">Người đang sử dụng</p>
              </article>
              <article className="our-data__item">
                <h3 className="our-data__number">38+</h3>
                <p className="our-data__desc">Người đã khỏi bệnh</p>
              </article>
              <article className="our-data__item">
                <h3 className="our-data__number">31+</h3>
                <p className="our-data__desc">Bệnh viện hợp tác</p>
              </article>
              <article className="our-data__item">
                <h3 className="our-data__number">30+</h3>
                <p className="our-data__desc">Nhà thuốc hợp tác</p>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="container">
          <h2 className="about-container__title--team section-heading">
            Meet our amazing team
          </h2>
          <div className="about-container__team">
            <div className="row gy-3">
              {/* Team member 1 */}
              <article className="col-4 col-lg-6 col-md-12">
                <div className="about-team">
                  <div className="about-team__wrap">
                    <img loading="lazy" src="/assets/img/avt/avt1.png" alt="" className="about-team__img" />
                    <img loading="lazy" src="/assets/icons/circle-large.svg" alt="" className="about-team__icon" />
                  </div>
                  <h3 className="about-team__name">Hoàng Bảo Trung</h3>
                  <p className="about-team__position">Designer & Front-end developer</p>
                </div>
              </article>
              {/* Team member 2 */}
              <article className="col-4 col-lg-6 col-md-12">
                <div className="about-team">
                  <div className="about-team__wrap">
                    <img loading="lazy" src="/assets/img/avt/avt2.png" alt="" className="about-team__img" />
                    <img loading="lazy" src="/assets/icons/union.svg" alt="" className="about-team__icon" />
                  </div>
                  <h3 className="about-team__name">Nguyễn Văn Nhật</h3>
                  <p className="about-team__position">Back-end developer</p>
                </div>
              </article>
              {/* Team member 3 */}
              <article className="col-4 col-lg-6 col-md-12">
                <div className="about-team">
                  <div className="about-team__wrap">
                    <img loading="lazy" src="/assets/img/avt/avt3.png" alt="" className="about-team__img" />
                    <img loading="lazy" src="/assets/icons/rectangle.svg" alt="" className="about-team__icon" />
                  </div>
                  <h3 className="about-team__name">Ngô Đức Phong</h3>
                  <p className="about-team__position">Back-end developer</p>
                </div>
              </article>
              {/* Team member 4 */}
              <article className="col-4 col-lg-6 col-md-12">
                <div className="about-team">
                  <div className="about-team__wrap">
                    <img loading="lazy" src="/assets/img/avt/avt5.png" alt="" className="about-team__img" />
                    <img loading="lazy" src="/assets/icons/union.svg" alt="" className="about-team__icon" />
                  </div>
                  <h3 className="about-team__name">Nguyễn Kinh Thành</h3>
                  <p className="about-team__position">Back-end developer</p>
                </div>
              </article>
              {/* Team member 5 */}
              <article className="col-4 col-lg-6 col-md-12">
                <div className="about-team">
                  <div className="about-team__wrap">
                    <img loading="lazy" src="/assets/img/avt/avt6.png" alt="" className="about-team__img" />
                    <img loading="lazy" src="/assets/icons/union.svg" alt="" className="about-team__icon" />
                  </div>
                  <h3 className="about-team__name">Nguyễn Văn Nhật</h3>
                  <p className="about-team__position">Back-end developer</p>
                </div>
              </article>
              {/* Team member 6 */}
              <article className="col-4 col-lg-6 col-md-12">
                <div className="about-team">
                  <div className="about-team__wrap">
                    <img loading="lazy" src="/assets/img/avt/avt3.png" alt="" className="about-team__img" />
                    <img loading="lazy" src="/assets/icons/rectangle.svg" alt="" className="about-team__icon" />
                  </div>
                  <h3 className="about-team__name">Ngô Đức Phong</h3>
                  <p className="about-team__position">Back-end developer</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
