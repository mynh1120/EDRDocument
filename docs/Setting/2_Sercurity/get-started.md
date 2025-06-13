---
sidebar_position: 1
title: Get started
id: get-started
---
Mục này là phần hướng dẫn cho việc cấu hình plugin bảo mật OpenSearch. Gồm ba bước chính:
<p align="center">
   <img src="/img/Setting/Ser/gs.png" alt="Menu EDR" />
</p>
1. Add backend
    Add backends: Thêm các backend (xác thực - authc và ủy quyền - authz) vào tệp cấu hình config/opensearch-security/config.yml
2. Create roles
    Tạo các vai trò, là tập hợp các quyền có thể tái sử dụng
3. Map users
    Sau khi người dùng được xác thực, plugin sẽ lấy vai trò của họ. Có thể ánh xạ vai trò trực tiếp đến người dùng hoặc đến các backend






