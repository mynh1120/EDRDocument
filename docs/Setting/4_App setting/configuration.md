---
sidebar_position: 1
title: Configuration
id: configuration
---

Phần này có tác dụng cấu hình các cài đặt chung của EDR

<p align="center">
  <img src="/img/Setting/Appset/page.png" alt="Menu EDR" />
</p>

<p><b>1. App current settings</b></p>

Là phần cài đặt tệp cấu hình của EDR cơ bản được chia làm 6 phần: General, Health check, Task: Monitoring, Task: Staticstics, Vulnerabilities và Custom branding

Có thể lọc các phần bằng cách click vào Categories để lọc các thành phần

<p align="center">
  <img src="/img/Setting/Appset/filsearch.png" alt="Menu EDR" />
</p>

<p><b>2. General</b></p>

Mục này là phần "General" trong giao diện cài đặt ứng dụng, chứa các cài đặt cơ bản liên quan đến mẫu chỉ mục (index pattern), ẩn cảnh báo quản lý trong bảng điều khiển (dashboards), mức log, và các tùy chọn khác. 

<p align="center">
  <img src="/img/Setting/Appset/general.png" alt="Menu EDR" />
</p>

Các cài đặt cụ thể bao gồm:

- Sample alerts prefix: Định nghĩa tiền tố cho mẫu cảnh báo, phải khớp với mẫu chỉ mục được sử dụng

- Cron prefix: Định nghĩa tiền tố cho các công việc được định nghĩa trước

- Enrollments DNS: Xác định máy chủ đăng ký DNS của Wazuh, dùng cho đăng ký tác nhân

- Hide manager alerts: Ẩn cảnh báo của quản lý trong mọi bảng điều khiển

- Index pattern ignore: Tắt các tên mẫu chỉ mục nhất định khỏi danh sách có sẵn trong bộ chọn mẫu chỉ mục

- IP selector: Cho phép người dùng thay đổi mẫu chỉ mục được chọn trực tiếp từ menu trên cùng

- Index pattern: Định nghĩa mẫu chỉ mục mặc định để sử dụng trên ứng dụng. Nếu không có mẫu hợp lệ, ứng dụng sẽ tự động tạo một mẫu với tên được chỉ định

- Request timeout: Thời gian tối đa (tính bằng mili giây) mà ứng dụng sẽ chờ phản hồi từ API. Giá trị phải lớn hơn 1500 mili giây


<p><b>3. Health check</b></p>


Phần "Health check" trong giao diện cài đặt ứng dụng, nơi các kiểm tra sức khỏe được thực hiện bởi ứng dụng Healthcheck

<p align="center">
  <img src="/img/Setting/Appset/hc.png" alt="Menu EDR" />
</p>

Các tùy chọn cụ thể bao gồm:

- API connection: Bật hoặc tắt kiểm tra sức khỏe API khi mở ứng dụng

- Known fields: Bật hoặc tắt kiểm tra trường đã biết khi mở ứng dụng

- Set max buckets to 200000: Thay đổi giá trị mặc định của cấu hình số lượng tối đa bucket trong plugin platform

- Remove meta fields: Thay đổi giá trị mặc định của cấu hình loại bỏ meta fields trong plugin platform

- Index pattern: Bật hoặc tắt kiểm tra sức khỏe mẫu chỉ mục khi mở ứng dụng

- API version: Bật hoặc tắt kiểm tra sức khỏe phiên bản API khi mở ứng dụng

- Index template: Bật hoặc tắt kiểm tra sức khỏe mẫu chỉ mục khi mở ứng dụng

- Set time filter to 24h: Thay đổi giá trị mặc định của cấu hình timeFilter trong plugin platform thành 24 giờ


<p><b>4. Task:Monitoring</b></p>

Phần "Task:Monitoring" liên quan đến các tùy chọn giám sát trạng thái tác nhân và cách lưu trữ dữ liệu trong các chỉ mục

<p align="center">
  <img src="/img/Setting/Appset/tm.png" alt="Menu EDR" />
</p>

Các tùy chọn cụ thể gồm:

- Index creation: Định nghĩa tần suất tạo chỉ mục "wazuh-monitoring"

- Status: Bật hoặc tắt việc tạo và/hoặc trực quan hóa chỉ mục "wazuh-monitoring"

- Frequency: Tần suất (tính bằng giây) của các yêu cầu API để lấy trạng thái tác nhân và tạo tài liệu mới trong chỉ mục "wazuh-monitoring". Giá trị tối thiểu là 60

- Index pattern: Mẫu chỉ mục mặc định để sử dụng cho giám sát Wazuh

- Index replicas: Số lượng bản sao (replicas) để sử dụng cho chỉ mục "wazuh-monitoring-*"

- Index shards: Số lượng phân đoạn (shards) để sử dụng cho chỉ mục "wazuh-monitoring-*"

<p><b>5. Task:Statistics</b></p>

Phần "Task:Statistics" liên quan đến các tùy chọn giám sát công việc quản lý daemon và cách lưu trữ dữ liệu trong các chỉ mục

<p align="center">
  <img src="/img/Setting/Appset/ts.png" alt="Menu EDR" />
</p>

Các tùy chọn cụ thể gồm:

- Includes APIs: Nhập ID của các host muốn lưu dữ liệu, để trống để chạy tác vụ trên mọi host

- Index creation: Định nghĩa tần suất tạo chỉ mục mới

- Index name: Định nghĩa tên chỉ mục để lưu các tài liệu

- Index replicas: Số lượng bản sao (replicas) để sử dụng cho chỉ mục statistics. Giá trị tối thiểu là 0

- Index shards: Số lượng phân đoạn (shards) để sử dụng cho chỉ mục statistics. Giá trị tối thiểu là 1

- Interval: Định nghĩa tần suất thực thi tác vụ sử dụng biểu thức cron

<p><b>6. Vulnerabilities</b></p>

Mục này là phần "Vulnerabilities" trong giao diện cài đặt ứng dụng, liên quan đến các tùy chọn giám sát lỗ hổng bảo mật của tác nhân và cách lưu trữ dữ liệu trong các chỉ mục

<p align="center">
  <img src="/img/Setting/Appset/vul.png" alt="Menu EDR" />
</p>

- Index pattern: Mẫu chỉ mục mặc định để sử dụng cho lỗ hổng bảo mật

<p><b>7. Custom branding</b></p>

Phần "Custom branding" cho phép tùy chỉnh các yếu tố thương hiệu như logo và nội dung báo cáo

<p align="center">
  <img src="/img/Setting/Appset/cb.png" alt="Menu EDR" />
</p>

Các cài đặt cụ thể:

- Status: Bật hoặc tắt tùy chỉnh

- App main logo: Logo chính được sử dụng làm chỉ báo tải khi người dùng đăng nhập vào Wazuh API. Hỗ trợ các định dạng: jpg, jpeg, png, svg. Kích thước khuyến nghị: 300x70px, kích thước tệp tối đa: 1MB

- Healthcheck logo: Logo được hiển thị trong quá trình kiểm tra sức khỏe (Healthcheck) của ứng dụng. Hỗ trợ các định dạng: jpg, jpeg, png, svg. Kích thước khuyến nghị: 300x70px, kích thước tệp tối đa: 1MB

- PDF reports logo: Logo được sử dụng trong báo cáo PDF, đặt ở góc trên cùng bên trái của mỗi trang. Hỗ trợ các định dạng: jpg, jpeg, png. Kích thước khuyến nghị: 190x40px, kích thước tệp tối đa: 1MB

- Reports footer: Thiết lập nội dung chân trang cho báo cáo. Tối đa 2 dòng, mỗi dòng tối đa 50 ký tự

- Reports header: Thiết lập nội dung đầu trang cho báo cáo. Tối đa 3 dòng, mỗi dòng tối đa 40 ký tự