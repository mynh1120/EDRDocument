---
title: Decoders
sidebar_position: 2
---

## Màn hình Decoders

### 1. 🔧 Decoder là gì, mục đích?

- Decoder là thành phần phân tích log thô đầu vào để trích xuất các trường thông tin có cấu trúc.
- Sau khi decoder xử lý, log sẽ có dạng tiêu chuẩn, dễ áp dụng các rules để phân tích hoặc phát hiện mối đe dọa.

![alt](/img/configurationdecoder.png)

- Thành phần trong bảng:

| Cột              | Ý nghĩa                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------- |
| **NAME**         | Tên decoder (ví dụ: `wazuh`, `agent-upgrade`, `json`)                                        |
| **PROGRAM NAME** | Tên chương trình hoặc loại log mà decoder này áp dụng (ví dụ: `agent.id`, `error`, `module`) |
| **ORDER**        | Trình tự hoặc thứ tự phân tích các trường log                                                |
| **FILE**         | Tên file `.xml` chứa định nghĩa decoder (ví dụ: `0005-wazuh_decoders.xml`)                   |
| **PATH**         | Đường dẫn tới file decoder, thường là `ruleset/decoders`                                     |

![alt](/img/configurationdecoder.png)

* Ví dụ cụ thể:
- Decoder agent-upgrade có nhiều mục vì xử lý nhiều kiểu log liên quan đến nâng cấp agent, mỗi mục xử lý theo field khác nhau như:
    + agent.id, agent.name, status
    + error
    + agent.cur_version
    + agent.new_version

### 1.2. 📁 Manage Decoder files: Quản lý file quy tắc.

- Thêm các file Decoder dạng xml bằng cách viết thủ công hoặc import file có sẵn.

![alt text](/img/managedecodersfile.png)

- Xem chi tiết nội dung file Decoder

![alt text](/img/detaildecoders.png)

### 1.3. ➕ Add new Decoder file: Thêm file quy tắc mới.

- Thêm các file Decoder dạng xml bằng cách viết thủ công

![alt text](/img/addnewdecoders.png)

### 1.4. 🔄 Refresh: Làm mới danh sách.

- Cập nhật lại danh sách Decoder

![alt text](/img/refreshdecoders.png)

### 1.5. 📤 Export formatted: Xuất dữ liệu đã định dạng.

- Xuất danh sách file Decoder dưới dạng excel

![alt text](/img/exportdecoder.png)