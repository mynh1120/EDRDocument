---
sidebar_position: 5
title: Templates
id: templates
---
Phần mẫu chỉ mục cho phép khởi tạo các chỉ mục hoặc luồng dữ liệu mới với các ánh xạ và cài đặt được định nghĩa sẵn
Giao diện chính
<p align="center">
  <img src="/img/Setting/Index/temp.jpg" alt="Menu EDR" />
</p>
<p><b>1. Các nút chức năng:</b></p>
- Actions: Hành động
  - Edit: Lựa chọn dùng để chỉnh sửa mẫu
    <p align="center">
      <img src="/img/Setting/Index/edittemp.png" alt="Menu EDR" />
    </p>
    Bảng chỉnh sửa mẫu gồm 2 phần: Summary và Configuration
      Summary cho xem trước các chỉ mục như alias, setting, mapping
      <p align="center">
      <img src="/img/Setting/Index/sum.png" alt="Menu EDR" />
      </p>
      Configuration tùy chọn các cấu hình chuyên sâu cho mẫu
      <p align="center">
      <img src="/img/Setting/Index/config.png" alt="Menu EDR" />
      </p>
   - Delete: Lựa chọn để xóa mẫu
      <p align="center">
      <img src="/img/Setting/Index/deltemp.png" alt="Menu EDR" />
      </p>
- Create template: Tạo mẫu
  Click để tạo mẫu mới. Để tạo mẫu mới gồm 2 cài đặt: Template settings và Template definition
  Template settings
    <p align="center">
      <img src="/img/Setting/Index/tn.png" alt="Menu EDR" />
    </p>
  <p>- Template name: Tạo tên mẫu</p>
  <p>- Template type: Chọn loại mẫu(chỉ mục hoặc luồng dữ liệu)</p>
  <p>- Index patterns: Chọn mẫu chỉ mục</p>
  <p>- Priority: Cài đặt mức độ liên quan</p>
  <p>- Choose a method to define your templates: Chọn một phương pháp để xác định mẫu của bạn gồm 2 phương pháp là mẫu đơn giản và mẫu thành phần</p>
  Template definition
    <p align="center">
      <img src="/img/Setting/Index/td.png" alt="Menu EDR" />
    </p>
    Phần này giúp định nghĩa mẫu qua các chỉ mục
    <p>- Index alias: Chọn bí danh hiện có hoặc chỉ định bí danh mới</p>
    <p>- Index settings: Cài đặt chỉ mục với các mục Number of primary shards, Number of replicas, Refresh interval</p>
    <p>- Index mapping: Xác định cách lưu trữ và lập chỉ mục các tài liệu và trường của chúng. Có thể xác nhận bằng Visual edit hoặc JSON edit</p>
Các thành phần trong bảng:
<table class="tb">
    <thead>
      <tr>
        <th>Thành phần</th>
        <th>Ý nghĩa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Template name</td>
        <td>Tên mẫu</td>
      </tr>
      <tr>
        <td>Template type</td>
        <td>Loại mẫu</td>
      </tr>
      <tr>
        <td>Index patterns</td>
        <td>Mẫu chỉ mục</td>
        </tr>
      <tr>
        <td>Priority</td>
        <td>Mức độ ưu tiên</td>
        </tr>
        <tr>
        <td>Associated component templates</td>
        <td>Mẫu thành phần liên quan</td>
        </tr>
        <tr>
        <td>Actions</td>
        <td>Hành động</td>
        </tr>
  </tbody>
</table>
<br />






