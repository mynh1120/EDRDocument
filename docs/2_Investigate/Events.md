---
ID: Events
title: Events
sidebar_position: 3
---

# Màn hình Events

**Chức năng:** Màn hình quản lý Event cho nhìn tổng quát số lượng các sự kiện thông kê theo nguồn phát sinh và loại sự kiện
- Thành phần bao gồm: 
    + Biểu đồ thống kê số lượng sự kiện theo thời gian.
    + Bảng thông kê thông tin chi tiết của từng sự kiện.

## 1. Biểu đồ thống kê

- **Chức năng:** Hiển thị số lượng sự kiện (Event logs) được ghi nhận trong khoảng thời gian được chọn.

### 1.1. Tính năng lọc

![alt](/img/event-filter.png)

1. Field: trường dữ liệu để 
2. Operator: điều kiện so sánh
3. Value: giá trị tìm kiếm

### 1.2. Tính năng tìm kiếm

![alt](/img/events-opensearch.png)

- Cách sử dụng thanh tìm kiếm khi tắt hoặc mở opensearch

| Tình huống                             | OPENSEARCH OFF | OPENSEARCH ON                                          |
| -------------------------------------- | -------------- | -------------------------------------------------------|
| Tìm IP                                 | `192.168.1.5`  | `agent.ip: "192.168.1.5"`                              |
| Tìm user là admin                      | `admin`        | `agent.name: "admin"`                                  |

### 1.3. Nút "REFRESH" 

**Thao tác:** Ấn "Refresh".

![alt](/img/eventchartartrefresh.png)

<p> **Tình huống:** Trong một khoảng thời gian nhất định máy không được sử dụng màn hình chưa làm mới quản trị viên muốn làm mới theo dõi thông tin ngay ta thì ấn "Refresh".</p>

### 1.4. Chức năng hiển thị Alert theo thời gian
##### Cài đặt thời gian tự động làm mới Events.
**Thao tác:** Chọn biểu tượng quyển lịch --> nhập thời gian --> Chọn start.

![alt](/img/timerefreshevent.png)

<p> **Tình huống:** Quản trị viên muốn biểu đồ luôn được làm mới dù không thao tác tới máy tính.</p>

##### Chọn thời gian thống kê Events
**Thao tác:** Chọn khoảng thời gian --> Ấn "Update".

![alt](/img/selecttimeevents.png)

**Thao tác:** Chọn khoảng thời gian --> Ấn "Apply".
![alt](/img/QuichSelectTimeAlert.png)

* Chọn cách hiển thị số lượng Event trong biểu đồ theo thời gian: giờ - ngày - tháng - năm
- CountTimestamp per hour: Mỗi cột là thể hiện số lượng Alerts trong 60 phút

![alt](/img/eventstimestamp.png)

<p> **Tình huống:** Quản trị viên muốn biểu đồ trong các khoảng thời gian khác nhau.</p>

## 2. Danh sách sự kiện chi tiết

![alt](/img/eventdetial.png)

### 2.1 Các thành phần trong danh sách

| **Cột**        | **Ý nghĩa**                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| **EVENT ID**   | Mã định danh duy nhất của sự kiện (thường gồm timestamp + số nhận dạng).         |
| **TIME**       | Thời điểm sự kiện xảy ra (có thể khác thời gian log được thu thập).              |
| **AGENT ID**   | Mã số định danh của agent thu thập log.                                          |
| **AGENT NAME** | Tên của agent/máy tính gửi log (ví dụ: ahndz-desktop).                           |
| **TYPE**       | Loại dữ liệu log (ở đây là **log**, có thể là event, alert, audit, v.v.).        |
| **FULL LOG**   | Nội dung chi tiết của log, ví dụ: quá trình cài đặt gói, cấu hình phần mềm, v.v. |
| **ACTION**     | Xem chi tiết nội dung log đó.                                                    |

### 2.2 Các nút chức năng

- Làm mới danh sách events

![alt](/img/eventrefreshdetail.png)

- Số lượng events hiển thị trên mỗi trang

![alt](/img/eventseachpage.png)

- Tổng số lượng trang

![alt](/img/eventcountpage.png)

## 3. Tình huống sử dụng
- Điều tra sâu alert (Alert Investigation)
    + Khi một cảnh báo được phát hiện trong màn hình Alerts, SOC analyst chuyển sang tab Events để truy xuất các log chi tiết xảy ra cùng thời điểm và máy tính Ví dụ: Tại thời điểm Jun 09, 2025 @ 11:29:45, thấy log cập nhật từ các repo như microsoft.com, ubuntu.com, có thể là hành vi hợp lệ hoặc bị lợi dụng.

- Phân tích hành vi người dùng hoặc phần mềm
    + Log cho thấy: apt update, systemd[1]: Failed to start... sysmon_install.sh → Có thể là user thực hiện thao tác cài đặt phần mềm qua script shell thủ công hoặc bị phần mềm độc hại khởi chạy nền.

- Phân tích lỗi & sự cố kỹ thuật
    + Dòng log: Failed to start APT News, Operation not permitted, Failed with result 'resources' → xác định có lỗi trong hệ thống hoặc service bị ngắt. Gửi cho đội DevOps/IT để kiểm tra khắc phục nhanh.

- Theo dõi hoạt động tải gói hoặc kết nối internet
    + Log hiển thị các domain mà hệ thống endpoint kết nối tới: packages.microsoft.com archive.ubuntu.com → Xác minh có truy cập domain độc hại không, hỗ trợ hoạt động Threat Hunting.

- Phục vụ forensic / audit
    + Log đầy đủ giúp lưu trữ để truy xuất về sau, phục vụ quá trình audit hoặc phân tích post-incident.