---
title: Configuration
sidebar_position: 1
--- 

# Màn hình Configuration

## 1. Phần Dashboard

- **Chức năng:** Hiển thị và đánh giá cấu hình bảo mật của từng agent (máy tính/thiết bị đầu cuối) trong hệ thống.

![alt](/img/configurationdashboard.png)

**Thao tác:** Ấn "Explore agent" hoặc "Select Agent" --> chọn agent cần kiểm tra.

![alt](/img/SelectAgent.png)

| Cột                  | Mô tả                                    | Ví dụ                                      |
| -------------------- | ---------------------------------------- | ------------------------------------------ |
| **ID**               | Mã định danh duy nhất của agent          | `089`, `096`, `109`                        |
| **Name**             | Tên thiết bị hoặc máy tính được giám sát | `rust-virtual-machine`, `5PRO`, `admin001` |
| **Group**            | Các nhóm mà agent thuộc về               | `default`, `Groupnew`, `ransom`            |
| **Version**          | Phiên bản phần mềm agent đang chạy       | `v4.9.0`, `v4.9.2`                         |
| **Operating System** | Hệ điều hành mà thiết bị đang sử dụng    | `Ubuntu 22.04.5 LTS`, `Windows 11 Pro`     |
| **Status**           | Trạng thái kết nối của agent             | `disconnected`, `never connected`          |

#### Tổng quan kiểm tra bảo mật (Trung tâm màn hình) 

![alt](/img/configurationdashboardagent.png)

| Mục                | Giá trị                 | Ý nghĩa                                                     |
| ------------------ | ----------------------- | ----------------------------------------------------------- |
| **Passed**         | 63                      | Số lượng kiểm tra cấu hình **đúng chuẩn bảo mật**.          |
| **Failed**         | 98                      | Số lượng kiểm tra **không đạt yêu cầu bảo mật**.            |
| **Not applicable** | 21                      | Không áp dụng được (ví dụ hệ thống không dùng cấu hình đó). |
| **Score**          | **39%** (Màu đỏ)        | Mức độ tuân thủ bảo mật — **thấp**, cần cải thiện.          |
| **End scan**       | May 14, 2025 @ 17:35:11 | Thời điểm quá trình quét kết thúc.                          |

![alt](/img/configurationdashboardexample.png)

* Ví dụ:  28500 - Ensure /tmp is a separate partition: Thất bại — hệ thống không tách riêng /tmp, gây rủi ro bảo mật.

<p> **Tình huống:** Khi quản trị viên muốn đánh giá cấu hình bảo mật của các endpoint (agent) trong hệ thống. Phát hiện cấu hình yếu hoặc sai lệch để cải thiện bảo mật hệ thống</p>

## 2. Phần Inventory

- **Chức năng:** Hiển thị các thông tin liên quan đến bài kiểm tra bảo mật áp dụng trên agent.

![alt](/img/configurationinventory.png)

- Chính sách (Policy): CIS Ubuntu Linux 22.04 LTS Benchmark v1.0.0
- Mô tả (Description): Tài liệu đưa ra hướng dẫn cụ thể để thiết lập một môi trường an toàn.
- Thời gian kết thúc quét (End scan): May 14, 2025 @ 17:35:11.000
Kết quả quét:
- ✅ Passed: 63
- ❌ Failed: 98
- 🚫 Not applicable: 21
- 📊 Score: 39%

## 3. Phần Events 

- **Chức năng:** Hiển thị dữ liệu nhật ký sự kiện (Event Logs) được ghi lại theo từng mốc thời gian của từng agent.

### 3.1. Biểu đồ thống kê sự kiện
- Hiển thị số lượng sự kiện kiểm tra theo thời gian (trên biểu đồ thanh dọc).
- Hữu ích để xác định thời điểm hoạt động kiểm tra diễn ra nhiều nhất.

![alt](/img/configurationeventchart.png)

### 3.2. Danh sách chi tiết sự kiện

![alt](/img/configurationeventds.png)

- Các thành phần trong bảng: 

| **Cột**                 | **Ý nghĩa / Chức năng**                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `timestamp`             | Dấu thời gian ghi nhận kết quả kiểm tra. Giúp xác định thời điểm chạy bài kiểm tra bảo mật.                        |
| `data.sca.check.title`  | Tên của bài kiểm tra bảo mật (check title), mô tả mục tiêu của kiểm tra theo tiêu chuẩn CIS Benchmark.             |
| `data.sca.check.file`   | Tệp cấu hình cụ thể được kiểm tra trên hệ thống (ví dụ: `/etc/passwd`, `/etc/shadow`).                             |
| `data.sca.check.result` | Kết quả của bài kiểm tra: `passed` (đạt yêu cầu), hoặc có thể là `failed` nếu không đạt (trong trường hợp có lỗi). |
| `data.sca.policy`       | Bộ chính sách bảo mật được áp dụng để kiểm tra, ở đây là: **CIS Ubuntu Linux 22.04 LTS Benchmark v1.0.0**.         |

- Nút "Export formated": cho phép xuất ra file định dạng CSV để phục vụ phân tích bên ngoài.

![alt](/img/configurationeventexport.png)

### 3.3.Tình huống sử dụng
- Đảm bảo tuân thủ bảo mật nội bộ hoặc yêu cầu kiểm toán
- Theo dõi thay đổi cấu hình có nguy cơ bảo mật
- Phân tích sự cố sau tấn công
- Tự động hóa kiểm tra an ninh định kỳ
