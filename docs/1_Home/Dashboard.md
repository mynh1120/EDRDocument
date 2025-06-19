---
title: Dashboard
sidebar_position: 1
---

<div class="content">

# Giao diện trang chính
<h3>1. Giao diện đăng nhập của CyberAI EDR</h3>
<p align="center">
<img src="/img/dashboard/login.png" alt="Menu EDR" />
</p>

<br />
Giao diện trang đăng nhập gồm: 

Username: Tài khoản 

Password: Mật khẩu

Nút Login: Đăng nhập

<br></br>

<h3>2. Giao diện trang Dashboard</h3>

Giao diện chính trang Dashboard gồm các biểu đồ thể hiện các thống kê cơ bản được tổng hợp 
<p align="center">
<img src="/img/dashboard/page.png" alt="Menu EDR" />
</p>


<p><b>2.1. Agent summary</b></p>

- Biểu đồ tròn thể hiện trạng thái và số lượng agent (active, disconnected) đã kết nối đến server

<p align="center">
<img src="/img/dashboard/as.png" alt="Menu EDR" />
</p>

<p><b>2.2. Last 24 hours alerts</b></p>

- Hiển thị tổng số cảnh báo trên tất cả các agent trong hệ thống trong 24h 
<p align="center">
<img src="/img/dashboard/l24h.png" alt="Menu EDR" />
</p>

 Các mức độ cảnh báo gồm:
- <b class="red" style={{color:"red"}}>Critical severity</b>: Cảnh báo nghiêm trọng
- <b class="orange" style={{color:"orange"}}>High severity </b>: Cảnh báo mức độ cao
- <b class="yellow" style={{color:"rgb(167, 167, 30)"}}>Medium severity</b>: Cảnh báo mức độ trung bình
- <b class="green" style={{color:"rgb(24, 139, 139)"}}>Low severity</b>: Cảnh báo mức độ thấp

Click vào số ở các phần cảnh báo để xem chi tiết cảnh báo. Ví dụ khi click vào Critical sercurity
<p align="center">
<img src="/img/dashboard/vdalert.png" alt="Menu EDR" />
</p>

<p><b>2.3. Attack phase</b></p> 

- Hiển thị số lượng tấn công theo từng giai đoạn

<p align="center">
<img src="/img/dashboard/ap.png" alt="Menu EDR" />
</p>

 Chi tiết từng mục:
- Initial Attempts <br />
Đây là giai đoạn kẻ tấn công thử xâm nhập hệ thống, thường bằng cách sử dụng các kỹ thuật như quét cổng, lừa đảo (phishing), hoặc khai thác lỗ hổng.
- Persistent Foothold <br />
Giai đoạn "Persistent Foothold". Sau khi xâm nhập thành công, kẻ tấn công cố gắng duy trì quyền truy cập vào hệ thống (ví dụ: cài đặt backdoor, tạo tài khoản giả).
- Propagation<br />
Giai đoạn "Propagation". Kẻ tấn công mở rộng phạm vi tấn công trong hệ thống, di chuyển sang các máy hoặc mạng khác (lateral movement), thường để tìm thêm mục tiêu hoặc dữ liệu.
- Exploration <br />
Giai đoạn "Khám phá". Kẻ tấn công thu thập thông tin về hệ thống, như cấu hình, dữ liệu nhạy cảm, hoặc các điểm yếu khác để khai thác thêm.
- Exfiltration & Impact <br />
Giai đoạn "Đánh cắp dữ liệu và Tác động". Kẻ tấn công trích xuất dữ liệu (exfiltration) hoặc gây ảnh hưởng đến hệ thống, như mã hóa dữ liệu (ransomware), phá hoại, hoặc làm gián đoạn hoạt động.

Click vào mục bên góc phải để lọc thời gian (theo phút, ngày, giờ)
<p align="center">
<img src="/img/dashboard/filtime.png" alt="Menu EDR" />
</p>

<br />

<p><b>2.4. Top agent under attack</b></p>

- Danh sách agent bị tất công được sắp xếp từ tuần xuất cao xuống thấp. Các agent có số lượng nhiều alert Critical severity là mục tiêu tấn công hàng đầu.

<p align="center">
<img src="/img/dashboard/taua.png" alt="Menu EDR" />
</p>
 
<br />
<p><b>2.5. Alerts by agent</b></p>

- Biểu đồ tần suất bị tấn công của một số agent

<p align="center">
<img src="/img/dashboard/aba.png" alt="Menu EDR" />
</p>

- Click 1 cột cụ thể để xem chi tiết agent đó:

<p align="center">
<img src="/img/dashboard/dtaba.png" alt="Menu EDR" />
</p>

<br />

<p><b>2.6. Incidents by time</b></p>

- Gồm một biểu đồ đoạn thẳng thể hiện lượng incident theo thời gian

<p align="center">
<img src="/img/dashboard/ibt.png" alt="Menu EDR" />
</p>

<br />

<p><b>2.7. Incidents by assignee</b></p>

- Biểu đồ thể hiện số lượng các incidents được phân công cho những người xử lí

<p align="center">
<img src="/img/dashboard/iba.png" alt="Menu EDR" />
</p>

- Click vào biểu đồ cột để xem summary của assignee

<br />

<p><b>2.8. Responese task status</b></p>

- Tổng số lượng task được giao xử lý sự cố. Thống kê số lượng và phần trăm dựa trên trạng thái hoạt động của task.

<p align="center">
<img src="/img/dashboard/rts.png" alt="Menu EDR" />
</p>

 Biểu đồ dạng thanh ngang cho thấy sự phân bố của các trạng thái, được chia thành 6 loại:
- Completed: Các task đã hoàn thành
- Created: Các task được tạo mới
- Failed: Các tác vụ thất bại
- Running: Các task đang chạy
- Stopped: Các tác vụ đã dừng
- Starting: Các task đang chạy

<br />

<p><b>2.9 Top malware detections by agent</b></p>

Biểu đồ tròn thể hiện các hành vi độc hại, virus được phát hiện trong các agent

<p align="center">
<img src="/img/dashboard/topmal.png" alt="Menu EDR" />
</p>

Biểu đồ phân loại các mã độc với tỉ lệ phần trăm gồm các loại như sau:
- Trojan: Loại mã độc giả dạng phần mềm hợp pháp để đánh cắp dữ liệu hoặc gây hại
- Rootkit: Loại mã độc ẩn mình trong hệ thống để duy trì tiền truy cập
- Ransomware: Mã độc tống tiền, loại mã độc mã hóa dữ liệu để đòi tiền chuộc
- Worm: Sâu máy tính, loại mã độc tự nhân bản và lây lan qua mạng
- Virus: Loại mã độc lây nhiễm và phá hoại file hệ thống
- Other: Các mã độc khác. Các loại mã độc khác, không thuộc các loại trên 
<br />

<p><b>2.10. Ransomware detection events</b></p>

- Hình ảnh hiển thị biểu đồ phân bố các sự kiện phát hiện ransomware, với trục ngang là thời gian và trục dọc là số lượng sự kiện
<p align="center">
<img src="/img/dashboard/rde.png" alt="Menu EDR" />
</p>

<br />

<p><b>2.11. Agents compliance status</b></p>
- Biểu đồ thể hiện số lượng trạng thái tuân thủ của các agent

<p align="center">
<img src="/img/dashboard/acs.png" alt="Menu EDR" />
</p>
Biểu đồ hình cột với 2 cột, 1 cột thể hiện số lượng các trạng thái agent tuân thủ và cột còn lại thể hiện tổng các trạng thái không tuân thủ 
<br />

<p><b>2.12. Active responses triggered</b></p>

- Biểu đồ hiển thị số lượng "Active Responses Triggered" - Phản ứng chủ động được kích hoạt
<p align="center">
<img src="/img/dashboard/art.png" alt="Menu EDR" />
</p>

<br />

<p><b>2.13. Alerts by rule</b></p>

- Biểu đồ dạng cột ngang thể hiện số lượng các alert về các rule được tạo
<p align="center">
<img src="/img/dashboard/abr.png" alt="Menu EDR" />
</p>

Click vào cột ngang để xem chi tiết 
<p align="center">
<img src="/img/dashboard/dtrule.png" alt="Menu EDR" />
</p>

<br />

<p><b>2.14. Top 5 vulnerabilites</b></p>

- Thống kê top 5 lỗ hổng hàng đầu với biểu đồ tròn, phân loại các lỗ hổng dựa trên số lượng sự kiện, với các CVE (Common Vulnerabilities and Exposures). 
<p align="center">
<img src="/img/dashboard/top5.png" alt="Menu EDR" />
</p>

Common Vulnerabilities and Exposures (CVE) là một danh sách tiêu chuẩn hóa các lỗ hổng và điểm yếu bảo mật trong phần mềm và phần cứng. Được duy trì bởi MITRE Corporation và tài trợ bởi CISA (Cybersecurity and Infrastructure Security Agency), CVE cung cấp một mã định danh duy nhất (ví dụ: CVE-2025-2866) cho mỗi lỗ hổng, giúp các tổ chức, nhà phát triển và nhà nghiên cứu theo dõi, chia sẻ và khắc phục chúng một cách nhất quán. Mỗi mục nhập bao gồm mô tả ngắn gọn, ngày công bố và thường liên kết đến các chi tiết kỹ thuật hoặc bản vá lỗi.

</div>



