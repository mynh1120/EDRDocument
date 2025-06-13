---
title: Triggers
sidebar_position: 2
---

## 1. Màn hình Alerts

- Các thành phần trong bảng:

| **Cột**                  | **Ý nghĩa**                                                      |
| ------------------------ | -----------------------------------------------------------------|
| **Alerts**               | Số lượng cảnh báo tương ứng với trigger.                         |
| **Active**               | Số lượng cảnh báo đang còn hiệu lực.                             |
| **Acknowledged**         | Số cảnh báo đã được xác nhận/ghi nhận (acknowledge).             | 
| **Errors**               | Số lỗi gặp phải khi xử lý hoặc gửi cảnh báo.                     |
| **Trigger name**         | Tên trigger đã tạo ra cảnh báo.                                  |
| **Trigger start time**   | Thời gian trigger được khởi chạy.                                |
| **Trigger last updated** | Thời gian gần nhất trigger được cập nhật trạng thái.             |
| **Severity**             | Mức độ nghiêm trọng của cảnh báo.                                |
| **Monitor name**         | Tên cấu hình giám sát tương ứng với trigger. Click xem chi tiết. |

### 1.1. Bộ lọc & nút chức năng

+ All severity levels: Lọc theo mức độ nghiêm trọng.
+ All alerts: Lọc theo loại cảnh báo (chưa xử lý, đã xác nhận, có lỗi...).

![alt](/img/triggeralertboloc.png)

+ View alert details: Xem chi tiết cảnh báo (nút đang bị vô hiệu do chưa chọn dòng nào).
+ Acknowledge: Đánh dấu cảnh báo đã được ghi nhận.

![alt](/img/triggeralertbutton.png)

## 2. Màn hình Monitors

* Monitors: Trang quản lý các bộ giám sát (monitor) để theo dõi và tạo alert.
- Các thành phần trong bảng: 

| **Cột**                                  | **Mô tả**                                                      |
| ---------------------------------------- | -------------------------------------------------------------- |
| **Monitor name**                         | Tên của monitor. (Bấm vào tên để xem hoặc chỉnh sửa chi tiết). |
| **State**                                | Trạng thái của monitor (`Enabled` / `Disabled`).               |
| **Type**                                 | Loại monitor (`Per query`: giám sát theo truy vấn).            |
| **Latest alert**                         | Cảnh báo gần nhất do monitor tạo ra.                           |
| **Last notification time**               | Thời gian gửi cảnh báo gần nhất.                               |
| **Active**                               | Số lượng alert hiện tại đang hoạt động.                        |
| **Acknowledged**                         | Số alert đã được xác nhận.                                     |
| **Errors**                               | Số lỗi xảy ra khi monitor chạy.                                |
| **Ignored**                              | Số lượng alert đã bị bỏ qua.                                   |
| **Associations with composite monitors** | Số lượng liên kết với monitor tổ hợp.                          |
| **Actions (3 chấm)**                     | Thao tác riêng với từng monitor (enable, disable, delete).     |

### 2.1. Tạo 1 bộ giám sát (monitor)

**Bước 1:** Nhập thông tin Monitor details
- Monitor name: Nhập tên cho monitor mới.
- Monitor type: Chọn loại monitor muốn tạo:
    + Per Query Monitor: Chạy query định kỳ và tạo alert nếu khớp điều kiện.
    + Per Bucket Monitor: Dựa vào kết quả nhóm dữ liệu để phát hiện bất thường.
    + Per Cluster Metrics Monitor: Theo dõi các chỉ số hệ thống từ các API cluster.
    + Per Document Monitor: Theo dõi từng document phù hợp với điều kiện.
    + Composite Monitor: Kết hợp nhiều monitor con, xử lý logic tổng hợp.

![alt](/img/monitordetails.png)

**Bước 2:** Nhập thông tin Monitor defining method
- Chọn cách để tạo truy vấn:
    + ✅ Visual Editor: Tạo bằng giao diện đồ họa (được chọn mặc định).
    + ✅ Extraction Query Editor: Nhập truy vấn tìm kiếm thủ công.
    + ✅ Anomaly Detector: Dùng phát hiện bất thường bằng machine learning.

![alt](/img/monitordefiningmethod.png)

**Bước 3:** Nhập thông tin Schedule (lịch chạy)
+ Frequency: Chọn tần suất chạy monitor:
    + VD: By interval → 1 Minute(s) (chạy mỗi phút).

![alt](/img/Schedule.png)

**Bước 4:** Nhập thông tin Data Source
+ Index: Chọn chỉ mục dữ liệu từ Elasticsearch. (Bắt buộc chọn)
+ Time field: Chọn trường thời gian dùng làm trục thời gian. 

![alt](/img/Datasource.png)

**Bước 5:** Nhập Query (truy vấn)
+ Add metric: Cho phép bạn thêm 1 phép đo khác, ví dụ: average, sum, min, max trên một trường cụ thể.
+ Time range for the last: Định nghĩa khoảng thời gian dữ liệu sẽ được truy vấn.
+ Add filter: Dùng để thêm các điều kiện lọc dữ liệu.
+ Group by: Dùng để nhóm kết quả theo trường nhất định.

![alt](/img/query.png)

**Bước 6:** Tạo Trigger
- Nhập tên trigger.
- Nhập mức độ nghiêm trọng lv từ 1 --> 5 (cao --> thấp).
- Điều kiện kích hoạt trigger.
- Ấn "Create".

![alt](/img/trigger.png)

## 3. Màn hình Destinations

* Màn hình Destinations: để quản lý kênh nhận cảnh báo. VD: Tạo kênh nhận cảnh báo qua email, slack,.....

![alt](/img/Destinations.png)