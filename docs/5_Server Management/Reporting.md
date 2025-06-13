---
title: Reporting
sidebar_position: 3
---

# 1. Màn hình Reporting

## 1.1. Mục đích của màn hình “Reporting”
Đây là nơi quản lý và truy cập các báo cáo (reports) đã được hệ thống sinh ra. Những báo cáo này thường chứa thông tin cấu hình, trạng thái agent, kết quả phân tích bảo mật hoặc đánh giá tuân thủ (compliance).

## 1.2. Chức năng chính của giao diện

![alt text](/img/configurationreport.png)

- Các thành phần trong bảng:

| Thành phần                 | Mô tả                                                            |
| -------------------------- | ---------------------------------------------------------------- |
| 🔹 **File**                | Tên file báo cáo (ví dụ: `wazuh-agent-configuration-121-...pdf`) |
| 🔹 **Size**                | Kích thước file báo cáo                                          |
| 🔹 **Created**             | Thời gian tạo báo cáo (ví dụ: `Jun 2, 2025 @ 10:04:33`)          |
| 🔹 **Actions**             | Có thể tải về (🔽) hoặc xóa (🗑️) báo cáo                         |

- Tải xuống báo cáo && xoá báo cáo

![alt text](/img/deletereport.png)

## 1.3. Tính năng & lợi ích thực tế
- Tính năng
    + Sinh báo cáo tự động
    + Tải file PDF về tiện lợi cho lưu trữ, chia sẻ nội bộ hoặc phục vụ kiểm toán
    + Xóa báo cáo cũ giảm tải lưu trữ, dọn dẹp dữ liệu không còn cần thiết
    + Nhanh chóng truy xuất thông tin theo từng mốc thời gian cụ thể

## 1.4. Tình huống sử dụng phổ biến (use cases)
- Quản trị viên cần:
    + Quản trị viên kiểm tra cấu hình agent EDR
    + Chuẩn bị audit nội bộ
    + So sánh cấu hình trước/sau nâng cấp
    + Tự động hóa giám sát