---
title: Alerts
sidebar_position: 2
---

# Màn hình Alerts

**Chức năng:** Màn hình quản lý Alerts cho cái nhìn tổng quát số lượng cảnh báo theo các mức độ nguy hại đối với hệ thống.  
- Thành phần của Màn hình Alerts bao gồm: 
    + Biểu đồ thống kê số lượng cảnh báo theo thời gian.
    + Bảng thống kê thông tin chi tiết của từng cảnh báo.

![alt](/img/events.png)

## 1. Biểu đồ thống kê

- Chức năng: thể hiện tổng số Alert (cảnh báo) “open” (chưa xử lý/đang mở) được ghi nhận trong khoảng thời gian. Mỗi cột thể hiện số lượng cảnh báo theo 1 khoảng thời gian nhất định. VD: theo ảnh mỗi cột thẻ hiện số lượng Alert trong 12 tiếng. 

![alt](/img/12h1column.png)

### 1.1. Tính năng lọc

![alt](/img/alerts-filter.png)

1. Field: trường dữ liệu để 
2. Operator: điều kiện so sánh
3. Value: giá trị tìm kiếm

### 1.2. Tính năng tìm kiếm

![alt](/img/alerts-opensearch.png)

- Cách sử dụng thanh tìm kiếm khi tắt hoặc mở opensearch

| Tình huống                             | OPENSEARCH OFF | OPENSEARCH ON                                          |
| -------------------------------------- | -------------- | -------------------------------------------------------|
| Tìm IP                                 | `192.168.1.5`  | `agent.ip: "192.168.1.5"`                              |
| Tìm user là admin                      | `admin`        | `agent.name: "admin"`                                  |

### 1.3. Chức năng làm mới biểu đồ

**Thao tác:** Ấn "Refresh".

![alt](/img/ButtonRefreshAlert.png)

<p> **Tình huống:** Trong một khoảng thời gian nhất định máy không được sử dụng màn hình chưa làm mới quản trị viên muốn làm mới theo dõi thông tin ngay ta thì ấn "Refresh".</p>

### 1.4. Chức năng hiển thị Alert theo thời gian

**Thao tác:** Chọn khoảng thời gian --> Ấn "Update".
![alt](/img/pickuptimeAlert.png)

**Thao tác:** Chọn khoảng thời gian --> Ấn "Apply".
![alt](/img/QuichSelectTimeAlert.png)

<p> **Tình huống:** Quản trị viên cần theo dõi số lượng Alert của những ngày trước đó tới thời điểm hiện tại</p>

### 1.5. Tính năng tuỳ chỉnh hiển thị cột trong biểu đồ. (bị ảnh hưởng bởi khoảng thời gian được chọn)
- CountTimestamp per 30 minutes: Mặc định mỗi cột là thể hiện số lượng Alerts trong 30 phút. CountTimestamp per thay đổi khi điều kiện thay đổi.
![alt](/img/alerts-bieudothoigian.png)

<p> **Tình huống:** Khi muốn các cột biểu đồ thể hiện số Alert trong 1h - 3h - 12h thì cần chọn điều kiện hiển thị và thời gian thống kê tương ứng.</p>

### 1.6. Chia nhỏ biểu đồ hiển thị
- **Thao tác:** Click vào cột biểu đồ cần xem chi tiết".

![alt](/img/chitietbieudocot.png)

<p> **Tình huống:** Khi đang theo dõi biểu đồ tổng quát có xuất hiện một cột biểu đồ cao mất thường (xuất hiện nhiều alert) quản trị viên muốn theo dõi kỹ hơn sẽ click vào cột biểu đồ đó.</p>

## 2. Bảng danh sách chi tiết các cảnh báo

- **Chức năng:** Hiển thị danh sách các cảnh báo được sắp xếp theo thời gian phát sinh cảnh báo, các cảnh báo mới được xếp trên đầu.
![alt](/img/dsalert.png)

### 2.1. Các thành phần trong bảng:

| Thành phần          |                       Ý nghĩa                                            |
| ------------------- | ------------------------------------------------------------------------ |
| ALERT ID            | Mã định danh của cảnh báo. Dùng để theo dõi và tra cứu chi tiết.         |
| TIME                | Thời gian hệ thống phát hiện hành vi nghi vấn.                           |                                         
| AGENT ID            | Mã định danh của agent (thiết bị đầu cuối được giám sát).                |
| AGENT NAME          | Tên thiết bị hoặc hostname được gán cho agent đó (ví dụ: "PC_01").       |
| RULE ID             | Mã số của quy tắc (rule) đã được kích hoạt để tạo ra cảnh báo.           |
| RULE DESCRIPTION    | Mô tả quy tắc đã được kích hoạt.                                         |
| RULE LEVEL          | Mức độ cảnh báo (ví dụ: Low, Medium, High, Critical).                    |
| ALERT STATUS        | Trạng thái xử lý cảnh báo.                                               |
| MITRE ID            | ID theo MITRE ATT&CK framework – nhằm phân loại hành vi tấn công         |
| MITRE TACTIC        | Cho biết mục tiêu của hành vi bị phát hiện                               |
| ACTION              | Hành động có thể thực hiện – xem chi tiết.                               |

### 2.2. Nút "Create new incident"

- **Mục đích:** Tạo Incident cho Alert tương ứng 

- Các bước tạo incident

<p>**Bước 1:** Chọn Alert cần tạo incident sau đó ấn "Create new incident"</p>

![alt](/img/CreateIncidentforalert.png)

<p>**Bước 2** Nhập thông tin incident (các trường có dấu "*" màu đỏ bên cạnh bắt buộc phải nhập)</p>

![alt](/img/CreateIncidentforalert1.png)

<p>**Bước 3:** Ấn "Add Alerts" --> Chọn alert muốn gán thêm cho incident --> Ấn "ADD"</p>

![alt](/img/CreateIncidentforalert2.png)

<p>**Bước 4:** Gán thêm hoặc gỡ bỏ task cho incident </p>

- Gán thêm task cho incident:

Ấn "Assign to task" --> chọn task muốn gán cho incident --> Ấn "ASSIGN"

![alt](/img/CreateIncidentforalert3.png)

- Gỡ task đã gán cho incident

Chọn task cần gỡ bỏ --> Ấn "Unassign"

![alt](/img/CreateIncidentforalert4.png)

<p>**Bước 5:** Gán thêm hoặc gỡ bỏ agent cho incident</p>

- Gán thêm agent cho incident

Ấn "Assign to agent" --> chọn agent muốn gán cho incident --> Ấn "ASSIGN"

![alt](/img/CreateIncidentforalert5.png)

- Gỡ agent đã gán cho incident

Chọn agent đang được gán --> Ấn "Unassign"

![alt](/img/CreateIncidentforalert6.png)

<p>**Bước 6:** Kiểm tra lại thông tin incident vừa nhập --> Ấn "Save" </p>

![alt](/img/CreateIncidentforalert7.png)

<p>**Tình huống:** Khi có Alert người quản trị sẽ đánh giá tạo Incident để tự xử lý hoặc phân công người xử lý sự cố.</p>

### 2.3. Nút "Assign Incident"
- **Mục đích:** Gán Alert cho sự cố tướng ứng

- Các bước gán alert cho incident

<p>**Bước 1:** Chọn alert muốn gán cho incident --> Ấn "Assign Incident" </p>

![alt](/img/AssignIncident.png)

<p>**Bước 2:** Chọn incident tương ứng --> Ấn "ASSIGN" </p>

![alt](/img/AssignIncident1.png)

<p>**Tình huống:** Trước đó, có Alert thiết bị nhiễm virus ransomware và được tạo một Incedent (sự cố) có tên "Virus ransomware" sau đó có thêm Alert thiết bị khác cũng nhiễm virus ransomware người quản trị có thể gán các Alert mới cho sự cố có tên "Virus ransomware" được tạo từ trước.</p>

### 2.4. Nút "Close"
- **Mục đích:** Đóng alert đã hoàn thành hoặc alert được xác nhận là sai. 

- **Thao tác:** Chọn alert cần đóng --> Ấn "Close" 

![alt](/img/CloseAlert.png)

<p>**Tình huống:** Khi Alert đã được xử lý hoặc quản trị viên xác nhận alert là giả tình huống không có gì nguy hại có thể đóng và báo bên đội kỹ thuật sau lần sau bỏ qua nhưng trường hợp đó.</p>

### 2.4. Nút "Refresh"

- **Mục đích:** tải lại thông tin danh sách các alert.

![alt](/img/RefreshAlertList.png)

<p>**Tình huống:** Trong một khoảng thời gian nhất định máy không được sử dụng màn hình chưa làm mới quản trị viên muốn làm mới theo dõi thông tin ngay ta thì ấn "Refresh".</p>

### 2.5. Nút "More"
- **Mục đích:** Đưa ra phản ứng nhanh với máy xuất hiện Alert
<p> Khi có xuất hiện Alert phần mềm cho phép quản trị viên thao tác nhanh thao tác nhanh ép buộc tắt máy hoặc cách lý máy có Alert nhằm đảm bảo an toàn cho hệ thống.</p>

![alt](/img/buttonmore.png)

|       Nút         |      Chức năng                  |
| ----------------- | ------------------------------- |
| Isolate           | Cánh ly máy khỏi hệ thống       |
| Shutdown          | Tắt máy                         |
| Log out user      | Thoát tài khoản                 |
| ReOpen            | Mở lại máy đã đóng              |

- Mở lại cảnh báo đã đóng
![alt](/img/buttonreopen.png)

<p>**Tình huống:** trong trường hợp có cảnh báo máy đó có gây ra cảnh báo có thể ảnh hưởng tới hệ thống quan trị viên sẽ thể đưa ra quyết định tắt máy hay cách ly máy đó khỏi hệ thống khi đã kiểm tra và các nhận an toàn có thể mở lại Alerts đã đóng.</p>

### 2.6. Biểu tượng "Con mắt"
- **Mục đích:** Xem chi tiết của Alert dưới dạng table hoặc file .json

![alt](/img/AlertDetail.png)

<p>**Tình huống:** Quản trị viên muốn xem chi tiết về thông tin máy báo alert, cảnh báo vi phạm rule nào, chi tiết log vi phạm.</p>

### 2.7. Số trang và số lượng alert hiển thị trên trang

- Số lượng Alert hiển thị trên mỗi trang

![alt](/img/Soluongalerttrentrang.png)

- Tổng số lượng trang

![alt](/img/Tongsotrang.png)

## 3. Tình huống sử dụng cụ thể
- Giám sát hành vi bất thường theo thời gian thực
    + Màn hình hiển thị biểu đồ số lượng alert theo thời gian → cho biết khoảng thời gian nào có hoạt động bất thường tăng cao. Ví dụ: spike lúc 09:00 sáng → nghi ngờ có tấn công hoặc hoạt động không hợp lệ.

- Phân tích chi tiết cảnh báo
    + Kiểm tra từng alert theo các thông tin như: Rule Description: mô tả hành vi đáng ngờ, Rule Level: mức độ nguy hiểm, MITRE Tactic: chiến thuật tấn công tương ứng

- Điều tra đa chiều
    + Kết hợp các yếu tố như: AGENT NAME: máy nào phát hiện, TIME: thời điểm xảy ra, MITRE ID: tra cứu tactic trên attack.mitre.org
→ từ đó xác định xem đây là hành vi hợp lệ hay tấn công.

- Tạo sự cố từ cảnh báo (Alert to Incident)
    + Từ alert có nghi ngờ thật sự, nhấn Create new incident để mở ticket điều tra chính thức, gán cho thành viên trong nhóm xử lý theo workflow chuẩn.

- Giám sát cài đặt phần mềm trái phép
    + Một số alert như: New dpkg (Debian Package) installed half configured → Có thể là dấu hiệu người dùng tự ý cài app hoặc phần mềm độc hại cài âm thầm.

- Phân công và đóng cảnh báo
    + Chọn nhiều alert → Assign Incident hoặc Close nếu đã xác minh an toàn. Tránh quá tải hệ thống với cảnh báo không cần thiết.





