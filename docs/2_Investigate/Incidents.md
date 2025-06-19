---
ID: Incidents
title: Incidents
sidebar_position: 4
---

# Màn hình Incidents

**Chức năng:** Màn hình quản lý Incidents thể hiện chi tiết bảng danh sách Incidents được tạo. Đây là nơi quản trị viên có thể theo dõi, phân loại và xử lý các sự cố an ninh trên hệ thống

![alt](/img/Incident.png)

## 1. Các thành phần trong bảng

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

## 2. Các nút chức năng

- Làm mới danh sách incident

![alt](/img/incedentrefresh.png)

- Chức năng tìm kiếm: 
<p>Chọn khoảng thời gian tìm kiếm, tìm kiếm Incidnet (sự cố) theo các thông tin incident như: Số id, tên, mô tả, người tạo, người được phân công.</p>

![alt](/img/Incidentsearchbar.png)

- Filter và bộ lọc
<p>Các cột severity, category, sla, status có thể sử dụng bộ lọc các cột còn lại có thể tự động sắp xếp dữ liệu khi click vào tiêu đề cột</p>

![alt](/img/Incident-boloc.png)

- Số lượng Incident hiển thị trên mỗi trang

![alt](/img/incidenteachpage.png)

- Tổng số lượng trang

![alt](/img/incidentcountpage.png)

## 3. Xem thông tin chi tiết của Incident

- Khi ấn vào nút  ![alt](/img/detailincident.png) của một sự cố (Incident) sẽ chuyển qua giao diện thông tin chi tiết của sự cố được chọn:

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
| **Time Remaining** | Thời gian đếm ngược theo thời gian SLA |

- Đóng sự cố (Incident)

**Thao tác:** Phần "Status" chọn "Closed" khi xuất hiện popup xác nhận ấn "Yes"

![alt](/img/Closeincident.png)

- Mở lại sự cố (Incident)

**Thao tác:** Phần "Status" chọn "Open" khi xuất hiện popup xác nhận ấn "OK"

![alt](/img/reopenincident.png)

<p style = {{color: 'red'}}> <i>Lưu ý: Nếu trạng thái của sự cố (Incident) là "Closed" sự cố đã đóng sẽ không cho phép thao tác hay không sửa thông tin của sự cố, nếu muốn gán thêm task, agent hay sửa thông tin sự cố cần mở lại sự cố, chuyển trạng thái từ "Closed" thành "Open".</i> </p>

![alt](/img/openincident.png)

### 3.1. Giao diện và chức năng của tab "TASKS" 

- **Chức năng:** Hiển thị danh sách tác vụ được gán để xử lý sự cố 

![alt](/img/Incidenttask.png)

- Gán thêm tác vụ xử lý sự cố

**Thao tác:** Ấn "Assign to task" chọn task sau đó ấn "Save"

![alt](/img/assigntaskstoincident.png)

Popup thông báo gán tác vụ thành công.

<p align="center">![alt](/img/ganthanhcong.png)</p>

- Gỡ tác vụ được gán cho sự cố

**Thao tác:** Tích chọn tác vụ cần gỡ ấn "Delete" khi xuất hiện popup xác nhận ấn "Yes"

![alt](/img/deletetasktoincident.png)

Popup thông báo gỡ tác vụ thành công.

<p align="center">![alt](/img/gothanhcong.png)</p>

- Thực thi tác vụ (task)

- **Thao tác:** Xác định tác vụ muốn chạy ấn vào biểu tượng ![alt](/img/iconrun.png) sau đó Ấn "Yes" 

![alt](/img/thuthitask.png)

- Xem thông tin tác vụ (task)

**Thao tác:** Xác định tác vụ muốn xem thông tin ấn vào biểu tượng ![alt](/img/eyeicon.png)

![alt](/img/taskdetail.png)

Thông tin mô tả chi tiết xem ở phần Tasks

- Sửa tác vụ (task)

**Thao tác:** Xác định tác vụ muốn xem thông tin ấn vào biểu tượng [alt](/img/editicon.png)

![alt](/img/taskedit.png)

Thông tin mô tả chi tiết xem ở phần Tasks

### 3.2. Giao diện và chức năng của tab "ALERT"

- **Chức năng:** Hiển thị thông tin các cảnh báo từ agent dẫn đến sự cố

![alt](/img/Incidentalert.png)

- Thêm cảnh báo (alert) vào sự cố (incident)

**Thao tác:** Ấn "add alert" chọn cảnh báo (alert cần gán rồi ấn "ADD")

![alt](/img/addalerttoincident.png)

- Gỡ bỏ cảnh báo đã gán cho sự cố (incident)

**Thao tác:** Chọn cảnh báo muốn gỡ rồi ấn "Remove" hiện lên popup ấn "Yes"

![alt](/img/RemoveAlerttoincident.png)

Popup thông báo gỡ cảnh báo thành công

![alt](/img/gocanhbaothanhcong.png)

### 3.3. Giao diện và chức năng của tab "AGENT"

- **Chức năng:** Hiển thị thông tin (IP, hệ điều hành, trạng thái hiện tại) của máy phát sinh cảnh báo (alert) 

![alt](/img/incidentagent.png)

- Xem thông tin chi tiết của máy trạm (agent) 

**Thao tác:** Ở phần Action chọn biểu tượng ![alt](/img/eyeicon.png)

![alt](/img/eyeiconaction.png)

- Phần thông tin chi tiết của màn hình này đã được giải mô tả trong phần [Endpoint summary](/docs/3_Endpoint%20management/Endpoints%20summary.md#link1)

### 3.4. Giao diện và chức năng của tab "INFORMATION" 

- **Chức năng:** cho xem phép xem và sửa các thông tin của Incident đã tạo

![alt](/img/incidentdetial2.png)

| **Cột**             |       **Giải thích**                                |
| ------------------- | --------------------------------------------------  |
| **Severity**        | Chọn mức độ nguy hại Critical - High - Medium - Low |
| **Category**        | Chọn loại Incident ví dụ là Malware Detection       |
| **Description**     | Mô tả về sự cố                                      |
| **Assign User**     | Phân công người xử lý khác người hiện tại           |
| **SLA**             | Thời gian cam kết xử lý sự cố trong 4 giờ           |
| **Occurrence Time** | Thời gian xảy ra tấn công                           |
| **Detection Time**  | Thời gian phát hiện tấn công                        |
| **Attachment**      | Tải file đính kèm lên nếu có                        |

- Phần history Bảng history ghi lại các hoạt động của Incident: thời gian diễn ra, người thực hiện hành động, hành động được thực hiện trên incident, mô tả nội dung hành động. Được sắp xếp theo thứ tự thời gian từ gần nhất -> lâu nhất.

![alt](/img/incidentdetial3.png)

## 4. Tình huống sử dụng

- Phát hiện sự cố và phản ứng nhanh (Real-time Incident Response):
    + Nhân viên SOC vào trang này để xem sự cố mới nhất (Creation Time).
    + Ưu tiên xử lý các sự cố Severity: Critical hoặc High.
    + Xem mô tả sự cố (DESCRIPTION) để hiểu sơ bộ.
    + Giao cho người xử lý qua cột Assign User hoặc dùng chức năng Assign user ở góc phải.

- Phân tích sự cố chi tiết:
    + Click vào biểu tượng chỉnh sửa (edit) ở cột ACTION để mở chi tiết.
    + Đọc thông tin mô tả, danh mục (CATEGORY), SLA, và số lượng nhiệm vụ cần xử lý (TASK).
    + Có thể liên kết với log hệ thống hoặc các công cụ Threat Intelligence để truy vết.

- Giám sát thời gian phản hồi (SLA Monitoring):
    + Quan sát cột SLA để đảm bảo xử lý đúng cam kết.
    + Nếu sự cố đang quá hạn (4 hours) → cần đẩy nhanh hoặc thông báo cấp trên.

- Quản lý theo người xử lý:
    + Dùng chức năng lọc hoặc tìm kiếm theo Assign User hoặc Creator Name.
    + Xem hiệu suất xử lý của từng người, tránh trùng lặp.






