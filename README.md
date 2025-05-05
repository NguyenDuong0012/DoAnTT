# 1. MÔ TẢ
Đề tài tập trung vào việc thiết kế và phát triển một website bán hàng điện tử (e-commerce) hoàn chỉnh, cho phép người dùng có thể duyệt sản phẩm, thêm vào giỏ hàng, đăng ký/đăng nhập, và thực hiện thanh toán đơn hàng. Hệ thống được xây dựng với ReactJS cho giao diện người dùng (frontend), Node.js và Express cho xử lý logic phía máy chủ (backend), và có thể sử dụng cơ sở dữ liệu như MongoDB để lưu trữ thông tin.

# 2. CÔNG NGHỆ
- Frontend: ReactJS
- Backend: Node.js, Express
- Database: MongoDB

# 3. CHỨC NĂNG
* Đối với khách hàng 
    - Đăng ký / Đăng nhập/ Đăng xuất
    - Đổi mật khẩu
    - Quản lý profile
    - Xem chi tiết sản phẩm
    - Tìm kiếm sản phẩm theo từ khóa, bộ lọc theo giá cả
    - Xem danh sách sản phẩm, chi tiết sản phẩm
    - Đặt hàng thanh toán
    - Lịch sử mua hàng, xem trạng thái đơn hàng
    - Yêu thích sản phẩm, xem lại yêu thích
    - Bình luận đánh giá sản phẩm
* Đối với quản trị viên
    - Đăng nhập/ Đăng xuất
    - Thêm xóa sửa tìm kiếm
    - Quản lý danh mục sản phẩm
    - Quản lý sản phẩm
    - Duyệt đơn hàng
    - Tìm kiếm đơn hàng
    - Quản lý banner
    - Thống kê dạng số tổng lượng theo: khách hàng, đơn hàng, sản phẩm, danh mục
    - Xem danh sách đơn hàng trong ngày hôm nay

# 4. CẤU TRÚC THƯ MỤC
 back-end/
 │
 ├── config/       # Chứa các file cấu hình 
 ├── controller/   # Xử lý logic nghiệp vụ, trả về response cho client  
 ├── middleware/   # Các hàm xử lý trung gian 
 ├── models/       # Định nghĩa cấu trúc dữ liệu 
 ├── node_modules/ # Thư viện npm đã cài đặt 
 ├── routes/       # Định nghĩa các endpoint API 
 │
 ├── .gitignore    # Liệt kê các file/folder không theo dõi bằng git
 ├── app.js        # File chính - Khởi tạo server, kết nối mọi thành phần
 ├── package.json  # Khai báo thông tin dự án, dependencies, scripts
 └── package-lock.json # Lock version dependencies

 client/
 │
 ├── public/                  # Thư mục chứa tài nguyên tĩnh
 │   ├── img/                 # Hình ảnh, icons, assets
 │   ├── index.html           # File HTML chính
 │   └── style.css            # CSS toàn cục
 │
 ├── src/                     # Source code chính
 │   ├── components/          # Các component tái sử dụng
 │   │   ├── admin/           # Component dành cho admin
 │   │   │   ├── categories/  # Quản lý danh mục
 │   │   │   ├── dashboardAdmin/ # Dashboard admin
 │   │   │   ├── orders/      # Quản lý đơn hàng
 │   │   │   ├── products/    # Quản lý sản phẩm
 │   │   │   └── partials/    # Component phụ (header, sidebar...)
 │   │   │
 │   │   └── shop/            # Component dành cho người dùng
 │   │       ├── auth/        # Đăng nhập/đăng ký
 │   │       ├── blog/        # Trang blog
 │   │       ├── contact/     # Trang liên hệ
 │   │       ├── dashboardUser/ # Dashboard người dùng
 │   │       ├── home/        # Trang chủ
 │   │       ├── order/       # Đặt hàng/giỏ hàng
 │   │       ├── productDetails/ # Chi tiết sản phẩm
 │   │       ├── wishlist/    # Sản phẩm yêu thích
 │   │       └── partials/    # Component phụ
 │   │
 │   ├── App.js               # Component gốc 
 │   ├── index.js             # Entry point
 │   └── serviceWorker.js     # Cấu hình PWA (nếu có)
 │
 ├── .env                     # Biến môi trường front-end
 ├── .gitignore
 ├── package.json             # Quản lý dependencies
 └── package-lock.json

# 5. Cài đặt sử dụng
* Chuẩn bị môi trường
 - MongoDb Compass
 - Node.js
 - Visual studio code
* Chuẩn bị cơ sở dữ liệu
 - kết nối localhost:27017/ecommerce
 - trong folder dự án có folder mongoDB trong đó có chưa dữ liệu dang JSON của các bảng để có thể Export vào các bảng tương tự để lấy dữ liệu hoặc không cần cũng đượcđược
* Cài đặt dự án
 - Chạy file backend
    + Xóa file nodemodul
    + Mở terminal chạy lần lượt lệnh: npm i, npm start
 - Chạy file client
    + Xóa file nodemodul
    + Mở terminal chạy lần lượt lệnh: npm i, npm start
* Tài khoản người dùng trong hệ thống
 - Tài khoản admin: demotk@gmail.com mk 12345678
 - Tài khoản khách hàng: có thể đăng ký rồi đăng nhập
