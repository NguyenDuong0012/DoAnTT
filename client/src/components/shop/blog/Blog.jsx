import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog = () => {
  const blogPosts = [
    {
      title: "Chiếc iPhone 17 rất được chờ đợi bắt đầu sản xuất thử nghiệm",
      content: "Theo báo cáo mới đến từ DigiTimes, Foxconn đã bắt đầu giai đoạn New Product Introduction (NPI) đối với chiếc iPhone 17 Air sắp tới.",
      author: "Nguyễn Văn A",
      date: "01/10/2025",
      image: "/img/list/abc.jpg",
      href: "https://www.24h.com.vn/thoi-trang-hi-tech/chiec-iphone-17-rat-duoc-cho-doi-bat-dau-san-xuat-thu-nghiem-c407a1626332.html" // Thêm liên kết vào đây
    },
    
    {
      title: "Người Việt tìm 'Gemini' nhiều hơn 'ChatGPT'",
      content: "Trong danh sách công cụ AI được tìm kiếm nhiều nhất trên Google năm 2024, Gemini vượt các đối thủ như ChatGPT hay Copilot.",
      author: "Trần Thị B",
      date: "02/10/2025",
      image: "/img/list/a3.jpg",
      href: "https://www.24h.com.vn/cong-nghe-thong-tin/nguoi-viet-tim-gemini-nhieu-hon-chatgpt-c55a1626376.html" // Thêm liên kết vào đây

    },

    {
      title: "Điện thoại Trung Quốc 'gặm nhấm' thị phần Apple, Samsung",
      content: "Thị phần smartphone của Apple, Samsung cùng giảm năm 2024, trong khi Xiaomi và một số hãng Trung Quốc tăng dần đều qua các năm.",
      author: "Trần Thị C",
      date: "04/05/2025",
      image: "/img/list/a4.jpg",
      href: "https://vnexpress.net/dien-thoai-trung-quoc-gam-nham-thi-phan-apple-samsung-4838803.html" // Thêm liên kết vào đây

    },

    {
      title: "Apple: Thiết bị bán tại Mỹ chủ yếu từ Việt Nam, Ấn Độ",
      content: "Apple cho biết iPhone, iPad và các thiết bị khác của hãng tại Mỹ trong quý tài chính hiện tại sẽ chủ yếu sản xuất tại Ấn Độ và Việt Nam.",
      author: "Phạm Văn D",
      date: "02/05/2025",
      image: "/img/list/a1.jpg",
      href: "https://vnexpress.net/apple-thiet-bi-ban-tai-my-chu-yeu-tu-viet-nam-an-do-4880897.html" // Thêm liên kết vào đây

    },
  ];

  return (
    <div className="container mt-5 content">
  <h1 className="mb-4 text-center">Bài viết</h1>
  <div className="row">
    {blogPosts.map((post, index) => (
      <div key={index} className="col-md-6 mb-4">
        <a href={post.href} className="text-decoration-none">
          <div className="card h-100 shadow-sm">
            <img src={post.image} className="card-img-top" alt={post.title} />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {post.author} - {post.date}
              </h6>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        </a>
      </div>
    ))}
  </div>
</div>

  );
};

export default Blog;
