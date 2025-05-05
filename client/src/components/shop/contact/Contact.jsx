import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="container mt-5 content">
      <h1 className="mb-4 text-center">Liên hệ với chúng tôi</h1>
      <div className="row">
        {/* Thông tin liên hệ */}
        <div className="col-md-6 mb-4">
          <h5>Thông tin liên hệ</h5>
          <p>
            <strong>Địa chỉ:</strong> 123 Đường ABC, Quận Liên Chiểu, TP. Đà Nẵng
          </p>
          <p>
            <strong>Điện thoại:</strong> (0123) 456-789
          </p>
          <p>
            <strong>Email:</strong> ecommerce@gmail.com
          </p>
          <h5 className="mt-4">Vị trí của chúng tôi</h5>
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22006.21418081774!2d108.1540608!3d16.0595968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421924682e8689%3A0x48eb0bdbeec05215!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBTxrAgUGjhuqFtIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e1!3m2!1svi!2s!4v1746257379401!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Nội dung bổ sung */}
        <div className="col-md-6">
  <h5>Sản phẩm công nghệ</h5>
  <p>
    Các sản phẩm công nghệ là một phần không thể thiếu trong cuộc sống hiện đại. Từ điện thoại thông minh, máy tính xách tay, tai nghe không dây, cho đến các thiết bị thông minh trong nhà, chúng tôi mang đến cho bạn sự lựa chọn đa dạng và chất lượng cao.
  </p>
  <ul>
    <li>
      <strong>Chất lượng hàng đầu:</strong> Tất cả sản phẩm đều được nhập khẩu chính hãng và kiểm tra nghiêm ngặt trước khi đến tay khách hàng.
    </li>
    <li>
      <strong>Giá cả cạnh tranh:</strong> Chúng tôi cam kết mang lại giá tốt nhất trên thị trường, phù hợp với mọi nhu cầu.
    </li>
    <li>
      <strong>Dịch vụ hỗ trợ tận tâm:</strong> Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn 24/7 để chọn được sản phẩm phù hợp nhất.
    </li>
  </ul>
  <p>
    Khám phá những thiết bị công nghệ mới nhất với tính năng tiên tiến nhất tại cửa hàng của chúng tôi. Hãy tận dụng các chương trình khuyến mãi đặc biệt để sở hữu sản phẩm yêu thích với giá ưu đãi.
  </p>
  <a
    href="/san-pham"
    className="btn btn-primary mt-3"
  >
    Khám phá sản phẩm
  </a>
</div>

      </div>
    </div>
  );
};

export default Contact;
