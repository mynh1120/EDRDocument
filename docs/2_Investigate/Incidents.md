---
title: Incidents
sidebar_position: 4
---

# Màn hình Incidents

**Chức năng:** Màn hình quản lý Incidents thể hiện chi tiết bảng danh sách Incidents được tạo. Đây là nơi quản trị viên có thể theo dõi, phân loại và xử lý các sự cố an ninh trên hệ thống

![alt](/img/Incident.png)

### 1. Các thành phần trong bảng

| **Cột**           | **Ý nghĩa**                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| **ID**            | Mã định danh sự cố (VD: `INC719`) — duy nhất cho mỗi incident.                                           |
| **NAME**          | Tên sự cố — có thể do người dùng đặt khi ghi nhận.                                                       |
| **DESCRIPTION**   | Mô tả ngắn về sự cố, giúp hiểu rõ bản chất sự việc.                                                      |
| **SEVERITY**      | Mức độ nghiêm trọng: `High`, `Critical`, v.v. Màu sắc cảnh báo giúp ưu tiên.                             |
| **CATEGORY**      | Nhóm loại sự cố: Malware Detection, Unauthorized Access, Phishing, DoS...                                |
| **SLA**           | Thời gian cam kết xử lý (Service Level Agreement) — ở đây là `4 hours`.                                  |
| **TASK**          | Số lượng tác vụ cần xử lý trong sự cố đó.                                                                |
| **STATUS**        | Trạng thái sự cố: `Open` (chưa xử lý), có thể có các trạng thái khác như `In Progress`, `Resolved`.      |
| **CREATOR NAME**  | Người tạo sự cố này trong hệ thống (VD: `develop`).                                                      |
| **ASSIGN USER**   | Người phụ trách xử lý sự cố (VD: `admin`).                                                               |
| **CREATION TIME** | Thời gian sự cố được tạo trong hệ thống.                                                                 |
| **ACTION**        | Cho phép chỉnh sửa thông tin chi tiết của incident                                                       |

### 2. Các nút chức năng

- Làm mới danh sách incident

![alt](/img/incedentrefresh.png)

- Chức năng tìm kiếm: 
<p>Chọn khoảng thời gian tìm kiếm, tìm kiếm Incednet (sự cố) theo các thông tin incident như: Số id, tên, mô tả, người tạo, người được phân công.</p>

![alt](/img/Incidentsearchbar.png)

- Filter và bộ lọc
<p>Các cột severity, category, sla, status có thể sử dụng bộ lọc các cột con lại có thể tự động sắp xếp dữ liệu khi click vào tiêu đề cột</p>

![alt](/img/Incident-boloc.png)

- Số lượng Incedent hiển thị trến mỗi trang

![alt](/img/incidenteachpage.png)

- Tổng số lượng trang

![alt](/img/incidentcountpage.png)

### 3. Nút "ACTION" quản lý thông tin chi tiết của Incident được tạo

- Khi click vào nút "Action" của 1 Incident sẽ chuyển qua giao diện thông tin chi tiết của Incident được chọn:

![alt](/img/incidentdetial0.png)

- Các thông tin của Incident được màn hình thể hiện

![alt](/img/incidentdetial1.png)

| **Cột**            |             **Giải thích**             |
| ------------------ | -------------------------------------- |
| **Incident Name**  | Tên incident được tạo là Virus Attack  |
| **Incident ID**    | ID được sinh khi tạo incident          |
| **Status**         | Trạng thái hiện tại của incident       |
| **Severity**       | Mức độ nghiêm trọng                    |
| **SLA**            | Thời gian cam kết xử lý với từng sự cố đã được thỏa thuận với khách hàng từ trước|
| **Time Remaining** | Thời gian quá dự kiến (Đã quá hạn)     |

![alt](/img/incidentdetial4.png)

| **Cột**            |            **Giải thích**              |
| ------------------ | -------------------------------------- |
| **TASKS**          | Danh sách tác vụ xử lý sự cố           |
| **ALERT**          | Thông tin cảnh báo dẫn đến sự cố       |
| **AGENT**          | Thông tin máy phát sinh ALERT          |

- Tab Information cho xem phép xem và sửa các thông tin của Incident đã tạo

![alt](/img/incidentdetial2.png)

| **Cột**             |       **Giải thích**                                |
| ------------------- | --------------------------------------------------  |
| **Severity**        | Chọn mức độ nguy hại Critical - High - Medium - Low |
| **Category**        | Chọn loại Incident được tạo Malware Detection       |
| **Description**     | Mô tả về incident                                   |
| **Assign User**     | Phân công người xử lý khác người hiện tại           |
| **SLA**             | Thời gian dự kiến xử lý sự cố trong 4 giờ           |
| **Occurrence Time** | Thời gian xảy ra tấn công                           |
| **Detection Time**  | Thời gian phát hiện tấn công                        |
| **Attachment**      | Đính kèm tệp nếu có: file ảnh, file log,...         |

- Phần history ghi lại người thực hiện, thời gian thực hiện, chi tiết thực hiện

![alt](/img/incidentdetial3.png)

### 4. Tình huống sử dụng

- Phát hiện sự cố và phản ứng nhanh (Real-time Incident Response):
    + Nhân viên SOC vào trang này để xem sự cố mới nhất (Creation Time).
    + Ưu tiên xử lý các sự cố Severity: Critical hoặc High.
    + Xem mô tả sự cố (DESCRIPTION) để hiểu sơ bộ.
    + Giao cho người xử lý qua cột Assign User hoặc dùng chức năng Assign user ở góc phải.

- Phân tích sự cố chi tiết:
    + Click vào biểu tượng chỉnh sửa (edit) ở cột ACTION để mở chi tiết.
    + Đọc thông tin mô tả, danh mục (CATEGORY), SLA, và số lượng nhiệm vụ cần xử lý (TASK).
    + Có thể liên kết với log hệ thống hoặc các công cụ threat intelligence để tìm nguồn gốc.

- Giám sát thời gian phản hồi (SLA Monitoring):
    + Quan sát cột SLA để đảm bảo xử lý đúng cam kết.
    + Nếu sự cố đang quá hạn (4 hours) → cần đẩy nhanh hoặc thông báo cấp trên.

- Quản lý theo người xử lý:
    + Dùng chức năng lọc hoặc tìm kiếm theo Assign User hoặc Creator Name.
    + Xem hiệu suất xử lý của từng người, tránh trùng lặp.






