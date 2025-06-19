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

### 1.1. Mục đích của CyberAI EDR Rule:
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
- Khi một rule được kích hoạt (trigger), CyberAI EDR có thể:
    - Gửi cảnh báo (alert)
    - Ghi nhật ký (log)
    - Thực hiện hành động (ngăn chặn, cách ly…)

- 🔧 Tự động phản ứng (Automated Response)
- Ví dụ: Nếu rule phát hiện ransomware, CyberAI EDR có thể:
    - Cô lập máy bị nhiễm khỏi mạng
    - Dừng tiến trình
    - Gửi báo cáo về trung tâm quản trị

### 1.2. Manage rules files: Quản lý file quy tắc.

- Thêm các file Rule dạng xml bằng cách viết thủ công hoặc import file có sẵn.

![alt text](/img/configurationrule.png)

- Xem chi tiết nội dung file rule

![alt text](/img/watchrulefile.png)

### 1.3. Add new rules file: Thêm file quy tắc mới.

- Thêm các file Rule dạng xml bằng cách viết thủ công

![alt text](/img/configurationruleaddfile.png)

- Ví dụ về cấu trúc 1 rule có sẵn:
![alt text](/img/structurerule.png)

<p id="eg">- Cấu trúc cơ bản khi viết rule bao gồm: </p>

```xml
<group name="GROUP_NAME,">
  <rule id="RULE_ID" level="LEVEL">
    <if_sid>PREVIOUS_RULE_ID</if_sid>
    <field name="FIELD_NAME">VALUE</field>
    <match>regex_match</match>
    <description>Description</description>
    <group>tag1,tag2,</group>
    <options>no_full_log</options>
    <mitre>
      <id>TXXXX</id>
    </mitre>
  </rule>
</group>
```

Trong đó các thành phần có nghĩa:

<table class="">
  <thead> 
    <tr>
      <th>Thành phần</th>
      <th>Ý nghĩa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Thẻ Rule</td>
      <td>Thẻ mở/đóng 1 rule, phải có id và level</td>
    </tr>
    <tr>
      <td>ID</td>
      <td>Mã định danh duy nhất cho rule</td>
    </tr>
    <tr>
      <td>Level</td>
      <td>Mức cảnh báo tăng dần từ 0 đến 15</td>
      </tr>
      <tr>
      <td>Thẻ if_sid</td>
      <td>Rule này kế thừa vào rule cha có id=...</td>
      </tr>
      <tr>
      <td>Thẻ field name</td>
      <td>Kiểm tra giá trị một field cụ thể từ log JSON</td>
      </tr>
      <tr>
      <td>Thẻ match</td>
      <td>So sánh chuỗi bằng regex</td>
      </tr>
      <tr>
      <td>Thẻ description</td>
      <td>Mô tả ngắn để hiển thị trên Dashboard</td>
      </tr>
      <tr>
      <td>Thẻ group</td>
      <td>Gắn nhãn nhóm rule </td>
      </tr>
      <tr>
      <td>Thẻ options</td>
      <td>Có các tùy chọn: no_full_log, alert_by_email, ignore</td>
      </tr>
      <tr>
      <td>Thẻ mitre</td>
      <td>Liên kết rule với MITRE ATT&CK tactic/technique</td>
      </tr>
      <tr>
      <td>Thẻ decoded_as</td>
      <td>Chỉ định dạng log</td>
      </tr>
      <tr>
      <td>Thẻ same_source_ip</td>
      <td> Kết hợp log có cùng IP để correlation</td>
      </tr>

  </tbody>
</table>
<br />

### 1.4. Refresh: Làm mới danh sách.

- Cập nhật lại danh sách rule

![alt text](/img/Refreshrule.png)

### 1.5. Export formatted: Xuất dữ liệu đã định dạng.

- Xuất danh sách file rule dưới dạng excel

![alt text](/img/exportrulelist.png)