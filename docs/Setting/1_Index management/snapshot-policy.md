---
sidebar_position: 9
title: Snapshot policies
id: snapshot policies
---
Phần này hiển thị Snapshot policies trong OpenSearch, cho phép người dùng định nghĩa lịch trình snapshot tự động và thời gian lưu trữ thông qua các chính sách snapshot
  <img src="/img/Setting/Index/snpp.png" alt="Menu EDR" />
<p><b>1. Chức năng chính</b></p>
- Nút Refresh để làm mới danh sách.

- Nút Disable và Enable để bật/tắt trạng thái chính sách

- Menu Actions (hiện ẩn) cho các hành động bổ sung

- Nút Create policy để tạo chính sách mới

  Giao diện của Create policy:

  <img src="/img/Setting/Index/crtsnap.png" alt="Menu EDR" />

  <b>Policy settings</b>

    Policy name: Tên chính sách, ví dụ "e.g. daily-snapshot", hiện tại để trống

    Description (tùy chọn): Mô tả chính sách, hiện tại để trống

  <b>Source and destination</b>

  Select or input source indexes or index patterns: Chọn hoặc nhập chỉ mục nguồn

  Select or input index for snapshots: Chọn hoặc nhập chỉ mục cho ảnh chụp nhanh

  <b>Snapshot schedule</b>

  Snapshot frequency: Tần suất chụp ảnh

  Start time: Thời gian bắt đầu

  <b>Retention period</b>

  Tùy chọn giữ tất cả ảnh chụp hoặc chỉ định điều kiện giữ. Gồm 2 tùy chọn

  🔘Retain all snapshots (Giữ lại tất cả các ảnh chụp nhanh)

  🔘Specify retention conditions (Chỉ định điều kiện lưu giữ)

  <b>Notifications</b>

  Notify on snapshot activities

  🔘Khi một ảnh chụp được tạo

  🔘Khi một ảnh chụp bị xóa

  🔘Khi một ảnh chụp thất bại
  <br />

<p><b>2. Các thành phần trong bảng:</b></p>
<table class="">
    <thead>
      <tr>
        <th>Thành phần</th>
        <th>Ý nghĩa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Policy name</td>
        <td>Tên chính sách</td>
      </tr>
      <tr>
        <td>Status</td>
        <td>Trạng thái</td>
      </tr>
      <tr>
        <td>Indices</td>
        <td>Chỉ số</td>
        </tr>
      <tr>
        <td>Snapshot schedule</td>
        <td>Lịch trình chụp nhanh</td>
        </tr>
        <tr>
        <td>Time last updated</td>
        <td>Thời gian cập nhật cuối</td>
        </tr>
        <tr>
        <td>Description</td>
        <td>Mô tả</td>
        </tr>
  </tbody>
</table>
<br />









