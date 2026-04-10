import React from "react";
const ChatPage: React.FC = () => (
  <main>
    <div className="chat">
      <div className="row">
        {/* Sidebar chat info (ẩn trên mobile) */}
        <article className="col-3 d-md-none">
          <div className="chat__container">
            <article className="chat-info">
              <img
                src="/assets/img/avt/avt2.png"
                alt=""
                className="chat-info__avatar"
              />
              <h2 className="chat-info__name">Nguyễn Văn Nhật</h2>
              <p className="chat-info__mail">nhatnvpd07532@fpt.edu.vn</p>
            </article>
            <article id="chat-block" className="chat-block">
              {/* Chat Item 1 */}
              <a href="#!" className="chat-block__item">
                <h3 className="chat-block__title">Tư vấn: AI văn bản</h3>
                <p className="chat-block__diagnostic">Chuẩn đoán: Bị đau bụng</p>
                <p className="chat-block__status">Tình trạng: Nhẹ</p>
                <p className="chat-block__date">
                  Ngày: 15/05/2024
                  <span className="chat-block__time">18:06:32</span>
                </p>
              </a>
            </article>
            {/* clear */}
            <article className="chat-block__add">
              <button id="clear">
                <img
                  src="/assets/icons/plus.svg"
                  alt=""
                  className="chat-block__icon"
                />
              </button>
            </article>
            {/* Chat container sections */}
            <article id="chat-container" className="chat-container">
              <div className="chat-container__wrap" id="chuanDoan">
                <h3 className="chat-container__title">Chẩn đoán bệnh</h3>
              </div>
              <div className="chat-container__wrap" id="trieuChung">
                <h3 className="chat-container__title">Triệu chứng</h3>
              </div>
              <div className="chat-container__wrap" id="cheDoAn">
                <h3 className="chat-container__title">Chế độ ăn uống và dinh dưỡng</h3>
              </div>
              <div className="chat-container__wrap" id="cheDoTap">
                <h3 className="chat-container__title">Chế độ tập luyện</h3>
              </div>
              <div className="chat-container__wrap" id="luuY">
                <h3 className="chat-container__title">Lưu ý</h3>
              </div>
              <div className="chat-container__wrap" id="datLich">
                <h3 className="chat-container__title">Đặt lịch phòng khám</h3>
              </div>
            </article>
          </div>
        </article>
        {/* Main chat box */}
        <article className="col-9 col-md-12">
          <div id="chat-box" className="chat-box">
            <div id="chat-box__message" className="chat-box__message">
              <div id="chat" className="chat-message">
                {/* Tin nhắn chào mừng */}
                <div className="chat-message__text chat-message__text--AI">
                  <p>
                    Xin chào! Tôi là trợ lý ảo của Phòng khám FreshX. Tôi có thể giúp gì cho bạn hôm nay?
                  </p>
                  <div id="feedback" className="chat-message__icons">
                    <span data-type="no" className="chat-message__icon active">😠</span>
                    <span data-type="ok" className="chat-message__icon">😄</span>
                    <span data-type="good" className="chat-message__icon">😍</span>
                  </div>
                </div>
              </div>
              <div id="chat" className="chat-message"></div>
              <form action="" className="chat-box__form">
                <input
                  className="chat-box__input"
                  type="text"
                  id="inputMessage"
                  placeholder="Type a message..."
                  autoFocus
                />
                <div className="chat-box__icons">
                  <img
                    id="pushImage"
                    src="/assets/icons/image.svg"
                    alt=""
                    className="chat-box__icon d-md-none"
                  />
                  <a href="/callVideo">
                    <img
                      src="/assets/icons/video.svg"
                      alt=""
                      className="chat-box__icon d-md-none"
                    />
                  </a>
                  <img
                    id="mic"
                    src="/assets/icons/mic.svg"
                    alt=""
                    className="chat-box__icon d-md-none"
                  />
                  <button type="button" className="d-none d-md-block">
                    <img
                      src="/assets/icons/list.svg"
                      alt=""
                      className="chat-box__icon"
                    />
                  </button>
                  <button type="button" id="sendButton">
                    <img
                      id="send"
                      src="/assets/icons/send.svg"
                      alt=""
                      className="chat-box__icon"
                    />
                  </button>
                </div>
              </form>
            </div>
            <div>
              <button id="out-chat" className="chat-box__out">
                <img
                  className="chat-box__icon-out"
                  src="/assets/icons/logout.svg"
                  alt=""
                />
              </button>
              <div id="diagnostic" className="chat-box__container"></div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
);

export default ChatPage;
