---
sidebar_position: 7
title: Audit log
id: auditlog
---
Phần này hiển thị cấu hình Audit logging trong plugin bảo mật OpenSearch
<p align="center">
   <img src="/img/Setting/Ser/al.png" alt="Menu EDR" />
</p>
<p><b>1. Storage location</b></p>
Mô tả vị trí lưu trữ và loại lưu trữ trong opensearch.yml. Mặc định là internal_opensearch, lưu log vào một index trong cụm

Enable audit logging: Click để cho phép kích hoạt tính năng ghi log kiểm toán

<p><b>2. General settings</b></p>
- Layer settings

    REST layer: Trạng thái lớp rest

    REST disabled categories: Các mục rest đã vô hiệu hóa

    Transport layer: Trạng thái lớp vận chuyển

    Transport disabled categories: Các phương tiện vận chuyển bị vô hiệu

- Attribute settings
    Bulk requests: Trạng thái yêu cầu hàng loạt

    Request body: Trạng thái yêu cầu phần giữa

    Resolve indices: Giải quyết các chỉ số

    Sensitive headers: Các tiêu đề nhạy cảm

Click configure để chỉnh sửa cài đặt chung

<p align="center">
   <img src="/img/Setting/Ser/gs1.png" alt="Menu EDR" />
</p>
<br />
<p><b>3. Compliance settings</b></p>
- Compliance mode
    Compliance logging: Ghi nhật kí tuân thủ
- Config
    Internal config logging: Ghi nhật kí cấu hình toàn bộ
    External config logging: Ghi nhật kí cấu hình bên ngoài
- Read
    Read metadata: Đọc siêu dữ liệu
    Ignored users: Cảnh báo người dùng
    Watched fields: Các fields đã theo dõi
- Write
    Write metadata: Viết siêu dữ liệu
    Log diffs: Sự khác biệt của nhật kí
    Ignored users: Cảnh báo người dùng
    Watch indices: Xem chỉ số
Click configure để chỉnh sửa cài đặt chung
<p align="center">
   <img src="/img/Setting/Ser/gs2.png" alt="Menu EDR" />
</p>
<br />









