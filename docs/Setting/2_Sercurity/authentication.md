---
sidebar_position: 2
title: Authentication
id: authentication
---
Phần này hiển thị cấu hình Authentication and Authorization cho plugin bảo mật OpenSearch
<p align="center">
   <img src="/img/Setting/Ser/aaa.png" alt="Menu EDR" />
</p>
<p><b>1. Authentication sequences</b></p>
 Xác định các mô-đun xác thực và thứ tự thực thi để kiểm tra thông tin đăng nhập người dùng từ các backend khác nhau. Plugin sẽ thử xác thực tuần tự qua các domain cho đến khi thành công
 Bảng liệt kê các domain xác thực với các cột: Domain name, HTTP, TRANSPORT, HTTP type, HTTP challenge, HTTP configuration, Backend type, Backend configuration
<p><b>2. Authorization</b></p>
 Sau khi xác thực, plugin có thể thu thập vai trò từ các backend như LDAP groups
 Bảng liệt kê các domain ủy quyền với các cột: Domain name, HTTP, TRANSPORT, Backend type, Backend configuration









