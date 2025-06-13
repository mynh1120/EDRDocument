---
sidebar_position: 10
title: Snapshots
id: snapshots
---
Mục dùng để tạo bản ghi nhanh trong Snapshot management
Giao diện chính của Snapshot:
<p align="center">
  <img src="/img/Setting/Index/snapshots.png" alt="Menu EDR" />
</p>
<p><b>1. Các nút chức năng</b></p>
- Refresh: Làm mới
- Delete: Xóa
- Restore: Khôi phục
    Giao diện chính khi click restore:
    <p align="center">
     <img src="/img/Setting/Index/restore.png" alt="Menu EDR" />
    </p>
    - Rename restored indices: Đổi tên chỉ mục được khôi phục

        🔘Do not rename (Không đổi tên): Giữ nguyên tên chỉ mục gốc

        🔘Add prefix to restored index names (Thêm tiền tố vào tên chỉ mục được khôi phục): Được chọn mặc định. Một trường nhập liệu bên dưới cho phép người dùng chỉ định tiền tố

        🔘Rename using regular expression (ADVANCED) (Đổi tên bằng biểu thức chính quy - Nâng cao): Tùy chọn này cho phép đổi tên phức tạp hơn bằng cách sử dụng biểu thức chính quy, nhưng không được chọn

    - Advanced options:

        🔘Restore aliases: Khôi phục bí danh

        🔘Restore cluster state from snapshots: Khôi phục trạng thái cụm từ bản chụp nhanh

        🔘Ignore unavailable indices: Bỏ qua các chỉ mục không khả dụng

    - Custom index settings:

        🔘Customize index settings: Tùy chỉnh cài đặt chỉ mục

        🔘Ignore index settings: Bỏ qua cài đặt chỉ mục
        <br />
- Take snapshot: Tạo bản ghi
    Giao diện tạo bản ghi mới:
    <p align="center">
     <img src="/img/Setting/Index/createsnap.png" alt="Menu EDR" />
    </p>
    - Snapshot name: Tên snapshot
    - Select or input source indices or index patterns: Chọn hoặc nhập chỉ mục nguồn hoặc mẫu chỉ mục
    - Select a repository for snapshots: Chọn kho lưu trữ cho bản chụp nhanh
    - Advanced options:

        🔘Include cluster state in snapshots: Bao gồm trạng thái cụm trong bản chụp nhanh

        🔘Ignore unavailable indices: Bỏ qua các chỉ mục không khả dụng

        🔘Allow partial snapshots: Cho phép bản chụp nhanh một phần

Chi tiết các thành phần trong bảng:
<table class="">
    <thead>
      <tr>
        <th>Thành phần</th>
        <th>Ý nghĩa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td>Tên snapshot</td>
      </tr>
      <tr>
        <td>Snapshot status</td>
        <td>Trạng thái snapshot</td>
      </tr>
      <tr>
        <td>Policy</td>
        <td>Chính sách</td>
        </tr>
      <tr>
        <td>Respository</td>
        <td>Kho lưu trữ</td>
        </tr>
        <tr>
        <td>Time last updated</td>
        <td>Lần cập nhật gần nhất</td>
        </tr>
  </tbody>
</table>
<br />






