---
sidebar_position: 3
title: Indexes
id: indexes
---
Phần này có tác dụng quản lí tất cả chỉ mục
Giao diện chính
<p align="center">
  <img src="/img/Setting/Index/indexes.jpg" alt="Menu EDR" />
</p>
Các nút chức năng:
- Refesh: Làm mới
- Actions: Hành động

  Giao diện chính của Actions:
  <p align="center">
  <img src="/img/Setting/Index/act.png" alt="Menu EDR" />
  </p>
  Các tùy chọn của Actions:
    - Apply policy: Áp dụng chính sách cho 1 hoặc nhiều index
      <p align="center">
      <img src="/img/Setting/Index/ap.png" alt="Menu EDR" />
      </p>
      Policy id: Dùng để tìm id của Police

      Cancel: Hủy

      Apply: Áp dụng

    - Close: Đóng chỉ mục
      <p align="center">
      <img src="/img/Setting/Index/cls.png" alt="Menu EDR" />
      </p>
      Gõ "close" và ấn close để xác nhận hành động đóng chỉ mục
    - Reindex: Sử dụng để thực hiện những thay đổi lớn cho chỉ mục. Reindex sẽ sao chép dữ liệu của chỉ mục nguồn vào một chỉ mục khác
      <p align="center">
      <img src="/img/Setting/Index/reinp1.png" alt="Menu EDR" />
      </p>
      - Configure source index:

        Specify source indexes or data streams: Chỉ định một hoặc nhiều chỉ mục hoặc luồng dữ liệu mà bạn muốn lập chỉ mục lại

        Specify a reindex option: Chỉ định tùy chọn lập chỉ mục lại với 2 tùy chọn:

        🔘:Reindex all documents: Lập chỉ mục lại tất cả các tài liệu

        🔘:Reindex a subset of documents: Lập lại chỉ mục một tập hợp con các tài liệu

      - Configure destination index

        Specify a destination index or data stream: Chỉ định chỉ mục đích hoặc luồng dữ liệu

      - Advanced settings

      <p align="center">
      <img src="/img/Setting/Index/adset.png" alt="Menu EDR" />
      </p>
        Reindex only unique documents: Cho phép chỉ lập chỉ mục lại các tài liệu duy nhất, thay vì sao chép toàn bộ tài liệu từ chỉ mục nguồn sang chỉ mục đích. Tùy chọn này có thể được bật

        Version conflicts: Cho phép bỏ qua các xung đột phiên bản trong quá trình lập chỉ mục lại

        Slice reindexing operation: Cho phép chia nhỏ hoạt động lập chỉ mục lại thành các tác vụ con để chạy song song

        Transform with ingest pipeline – optional: Cho phép chọn một pipeline xử lý để biến đổi tài liệu trước khi ghi vào chỉ mục đích

        Nofications: Có thể gửi thông báo bổ sung khi hoạt động thất bại/timeout hoặc hoàn tất, với các tùy chọn

        🔘Has failed / timed out

        🔘Has completed

    - Shrink index: Có tác dụng thu nhỏ một chỉ mục hiện có thành một chỉ mục mới với ít phân đoạn chính hơn
      <p align="center">
      <img src="/img/Setting/Index/shrink.png" alt="Menu EDR" />
      </p>
      - Các thành phần mục Shrink index detail:
    <table class="">
    <thead>
      <tr>
      <th>Thành phần</th>
      <th>Ý nghĩa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       <td>Index name</td>
       <td>Tên chỉ mục</td>
      </tr>
      <tr>
       <td>Primary shards</td>
        <td>Phân đoạn chính</td>
      </tr>
      <tr>
        <td>Replica shards</td>
        <td>Phân đoạn bản sao</td>
      </tr>
      <tr>
        <td>Total index size</td>
        <td>Tổng kích thước index</td>
      </tr>
      </tbody>
    </table>
    <br />
    - Split index: Split index đọc chỉ mục hiện có thành một chỉ mục mới có nhiều phân đoạn chính hơn
      <p align="center">
      <img src="/img/Setting/Index/split.png" alt="Menu EDR" />
      </p>
      - Các thành phần chính của Source index details:
    <table class="">
    <thead>
      <tr>
      <th>Thành phần</th>
      <th>Ý nghĩa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       <td>Index name</td>
       <td>Tên chỉ mục</td>
      </tr>
      <tr>
       <td>Primary shards</td>
        <td>Phân đoạn chính</td>
      </tr>
      <tr>
        <td>Replica shards</td>
        <td>Phân đoạn bản sao</td>
      </tr>
      <tr>
        <td>Total index size</td>
        <td>Tổng kích thước index</td>
      </tr>
      </tbody>
    </table>
    <br />
    - Force merge: Hợp nhất thủ công các phân đoạn chỉ mục hoặc chỉ mục sao lưu của luồng dữ liệu

      - Configure source index
        Select source indexes or data streams: Chọn một hoặc nhiều chỉ mục hoặc luồng dữ liệu muốn buộc hợp nhất
        <p align="center">
        <img src="/img/Setting/Index/selectsourc.png" alt="Menu EDR" />
        </p>
    - Clear cache: Xóa bộ nhớ đệm của index
        <p align="center">
        <img src="/img/Setting/Index/clearcache.png" alt="Menu EDR" />
        </p>
    - Flush indexes: Xóa index
        <p align="center">
        <img src="/img/Setting/Index/flush.png" alt="Menu EDR" />
        </p>
    - Refresh: Làm mới index
    - Delete: Xóa hoàn toàn index và không thể khôi phục
      <p align="center">
        <img src="/img/Setting/Index/del.png" alt="Menu EDR" />
      </p>
      Để xóa nhận xóa, nhập delete vào textbox và click delete
      <br />
- Create index: Tạo chỉ mục mới
Phần bảng chi tiết gồm các thành phần:
<table class="">
    <thead>
      <tr>
        <th>Thành phần</th>
        <th>Ý nghĩa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Index</td>
        <td>Chỉ mục</td>
      </tr>
      <tr>
        <td>Health</td>
        <td>Trạng thái "sức khỏe"</td>
      </tr>
      <tr>
        <td>Managed by policy</td>
        <td>Trạng thái quản lý bởi chính sách</td>
        </tr>
      <tr>
        <td>Status</td>
        <td>Trạng thái</td>
      </tr>
      <tr>
        <td>Total size</td>
        <td>Tổng dung lượng</td>
      </tr>
      <tr>
        <td>Size of primaries</td>
        <td>Kích thước của các phân vùng chính</td>
      </tr>
      <tr>
        <td>Total documents</td>
        <td>Tổng tài liệu</td>
      </tr>
      <tr>
        <td>Deleted documents</td>
        <td>Số tài liệu đã xóa</td>
      </tr>
      <tr>
        <td>Primaries</td>
        <td>Số lượng phân vùng chính</td>
      </tr>
      <tr>
        <td>Replicas</td>
        <td>Số lượng bản sao</td>
      </tr>
  </tbody>
</table>
<br />






