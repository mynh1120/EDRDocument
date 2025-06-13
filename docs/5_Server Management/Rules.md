---
title: Rules
sidebar_position: 4
---

## 1. Màn hình RULES

![alt](/img/configurationrule.png)

- Các thành phần trong rule table

![alt text](/img/ruletable.png)

| Cột                       | Ý nghĩa                                                  |
| ------------------------- | -------------------------------------------------------- |
| **ID**                    | Mã số duy nhất của mỗi rule                              |
| **Description**           | Mô tả mục đích hoặc loại rule                            |
| **Groups**                | Nhóm liên quan đến rule (ví dụ: syslog, windows, edr...) |
| **Regulatory Compliance** | Liên kết với các tiêu chuẩn bảo mật (như PCI\_DSS, GDPR) |
| **Level**                 | Mức độ ưu tiên hoặc mức cảnh báo của rule (0 là thấp)    |
| **File**                  | Tên file chứa quy tắc (VD: `0010-rules_config.xml`)      |
| **Path**                  | Đường dẫn tới file chứa quy tắc (VD: `ruleset/rules`)    |

### 1.1. Mục đích của EDR Rule:
- 🛡️ Phát hiện hành vi đáng ngờ hoặc tấn công
- Các rule giúp xác định những hành vi bất thường trên điểm cuối (endpoint), như:
    - Tạo tiến trình lạ
    - Ghi đè file hệ thống
    - Kết nối bất thường ra ngoài (C2 - command and control)
    - Chạy mã PowerShell đáng ngờ

- 📊 Theo dõi tuân thủ bảo mật (compliance)
- Kiểm tra hệ thống có tuân thủ các chuẩn như:
    - CIS Benchmark
    - NIST
    - ISO 27001
    - PCI-DSS, HIPAA…

- ⚠️ Cảnh báo sớm sự cố an ninh
- Khi một rule được kích hoạt (trigger), EDR có thể:
    - Gửi cảnh báo (alert)
    - Ghi nhật ký (log)
    - Thực hiện hành động (ngăn chặn, cách ly…)

- 🔧 Tự động phản ứng (Automated Response)
- Ví dụ: Nếu rule phát hiện ransomware, EDR có thể tự động:
    - Cô lập máy bị nhiễm khỏi mạng
    - Dừng tiến trình
    - Gửi báo cáo về trung tâm quản trị

### 1.2. 📁 Manage rules files: Quản lý file quy tắc.

- Thêm các file Rule dạng xml bằng cách viết thủ công hoặc import file có sẵn.

![alt text](/img/configurationrule.png)

- Xem chi tiết nội dung file rule

![alt text](/img/watchrulefile.png)

### 1.3. ➕ Add new rules file: Thêm file quy tắc mới.

- Thêm các file Rule dạng xml bằng cách viết thủ công

![alt text](/img/configurationruleaddfile.png)

### 1.4. 🔄 Refresh: Làm mới danh sách.

- Cập nhật lại danh sách rule

![alt text](/img/Refreshrule.png)

### 1.5. 📤 Export formatted: Xuất dữ liệu đã định dạng.

- Xuất danh sách file rule dưới dạng excel

![alt text](/img/exportrulelist.png)