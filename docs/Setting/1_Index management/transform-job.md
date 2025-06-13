---
sidebar_position: 7
title: Transform jobs
id: transform jobs
---
Phần này hiển thị danh sách Transform jobs trong OpenSearch. Các công việc chuyển đổi giúp tạo ra một view đã được vật hóa (materialized view) dựa trên dữ liệu hiện có
<p align="center">
  <img src="/img/Setting/Index/tranjob.png" alt="Menu EDR" />
</p>
Các nút chức năng:
- Refresh: Làm mới
- Disable: Vô hiệu hóa
- Enable: Kích hoạt
- Actions: Hành động
- Create transform job: Tạo transform job

  Quy trình tạo chuyển giao công việc gồm 4 bước sau:

    1. Set up indices (Thiết lập chỉ mục)
    2. Define transforms (Định nghĩa chuyển đổi)
    3. Specify schedule (Xác định lịch trình)
    4. Review and create (Xem lại và tạo)

  <p align="center">
  <img src="/img/Setting/Index/pagecrt.png" alt="Menu EDR" />
  </p>

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
        <td>Công việc cuộn</td>
      </tr>
      <tr>
        <td>Source index</td>
        <td>Chỉ mục nguồn được cuộn</td>
      </tr>
      <tr>
        <td>Target index</td>
        <td>Chỉ mục đích khi cuộn</td>
        </tr>
      <tr>
        <td>Job state</td>
        <td>Trạng thái công việc</td>
        </tr>
        <tr>
        <td>Continuous</td>
        <td>Mức độ liên tục của công việc</td>
        </tr>
        <tr>
        <td>Last updated time</td>
        <td>Lần cập nhật cuối</td>
        </tr>
        <tr>
        <td>Transform job status</td>
        <td>Trạng thái chuyển đổi công việc</td>
        </tr>
  </tbody>
</table>
<br />






