---
sidebar_position: 1
title: Endpoints summary
---
# Endpoints summary

## 1. Giao diện chính trang Endpoints summary

**Chức năng:** Hiển thị thông tin tổng quan về trạng thái các tác nhân (agents) trong hệ thống.

<p align="center">
<img src="/img/Endpoints_summary/page.png" alt="Menu EDR" />
</p>

Giao diện gồm 2 thành chính: 

- Phần biểu đồ
- Phần bảng chi tiết

## 2. Phần biểu đồ

### 2.1. Agent status

Là biểu đồ tròn chia ra trạng thái các agent

<p align="center">
<img src="/img/Endpoints_summary/as.png" alt="Menu EDR" />
</p>

Các trạng thái gồm:

- Nerver connected: Chưa kết nối
- Pending: Đang chờ
- Disconnected: Ngắt kết nối 
- Active: Đang hoạt động

Click vào trạng thái để xem các agent đó dưới bảng chi tiết

<p align="center">
<img src="/img/Endpoints_summary/vdas.png" alt="Menu EDR" />
</p>

### 2.2. Top 5 OS

Mục này thể hiện số lượng của 5 hệ điều hành tham gia server

<p align="center">
<img src="/img/Endpoints_summary/t5o.png" alt="Menu EDR" />
</p>

Chi tiết gồm:

- N/A: Lần đầu thiết bị kết nối tới hệ thống EDR Agent status ở trạng thái "Never Connected" chưa xác định được hệ điều hành
- Ubuntu: Hệ điều hành Ubuntu
- Windows: Hệ điều hành window

### 2.3. Top 5 groups

Biểu đồ thể hiện top 5 nhóm mà các agent tham gia

<p align="center">
<img src="/img/Endpoints_summary/t5g.png" alt="Menu EDR" />
</p>
<br />

## 3. Phần bảng chi tiết

### 3.1. Phần đầu bảng

<p align="center">
<img src="/img/Endpoints_summary/head.png" alt="Menu EDR" />
</p>

<table class="">
  <thead> 
    <tr>
      <th>Thành phần</th>
      <th>Chức năng</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Agent</td>
      <td>Tên và số agent trong bảng</td>
    </tr>
    <tr>
      <td>Show only outdated</td>
      <td>Chỉ hiện thị các agent outdate</td>
    </tr>
    <tr>
      <td>Nút refresh 🔃</td>
      <td>Làm mới lại bảng</td>
      </tr>
      <tr>
      <td>Export formatted</td>
      <td>In bảng hiện tại</td>
      </tr>
      <tr>
      <td>More</td>
      <td>Các chức năng khác</td>
      </tr>
      <tr>
      <td>Setting</td>
      <td>Lựa chọn các tiêu đề để hiển thị trong bảng</td>
      </tr>

  </tbody>
</table>
<br />

<p>Chi tiết 1 số chức năng</p>

- More

Phần này chỉ mở khi chọn 1 hoặc nhiều agent bên dưới 

<p align="center">
<img src="/img/Endpoints_summary/more.png" alt="Menu EDR" />
</p>

Các chức năng trong phần More:

<p>- Add groups to agents:</p>

Giao diện pop-up hiện ra khi chọn Add groups to agents

<p align="center">
<img src="/img/Endpoints_summary/agta.png" alt="Menu EDR" />
</p>

Các thành phần chi tiết:

Selected agents: Số agent được chọn

Selected group to add: Chọn nhóm để thêm agent vào. Click để box trỏ xuống chọn nhóm

<p align="center">
<img src="/img/Endpoints_summary/selectgr.png" alt="Menu EDR" />
</p>

Sau khi chọn được nhóm ấn Save để lưu cài đặt hoặc Cancel để hủy
<br />

<p>- Remove groups from agents</p>

Tùy chọn xóa nhóm khỏi các agent được chọn

<p align="center">
<img src="/img/Endpoints_summary/rgfa.png" alt="Menu EDR" />
</p>

Các thành phần chi tiết:

Selected agents: Số agent được chọn

Selected group to remove: Chọn nhóm để xóa agent, tương tự phần thêm nhóm
<br />

<p>- Upgrade agents</p>

Lựa chọn để upgrade agent bằng quyền admin
<p align="center">
<img src="/img/Endpoints_summary/upgrade.png" alt="Menu EDR" />
</p>
<br />

- Setting

Phần Setting dùng để hiện thị các tiêu đề trong bảng

<p align="center">
<img src="/img/Endpoints_summary/setting.png" alt="Menu EDR" />
</p>

Các ô tích là các phần đang hiển thị, ngược lại là chưa. Click để chọn hoặc bỏ chọn hiển thị

<table class="">
  <thead> 
    <tr>
      <th>Thành phần</th>
      <th>Ý nghĩa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Id</td>
      <td>id của agent</td>
    </tr>
    <tr>
      <td>Risk score</td>
      <td>Điểm số rủi ro của agent</td>
    </tr>
    <tr>
      <td>Agent name</td>
      <td>Tên của agent</td>
      </tr>
      <tr>
      <td>IP addrress</td>
      <td>Địa chỉ ip agent</td>
      </tr>
      <tr>
      <td>Groups</td>
      <td>Các nhóm agent tham gia</td>
      </tr>
      <tr>
      <td>Operating setting</td>
      <td>Hệ điều hành</td>
      </tr>
      <tr>
      <td>Cluster node</td>
      <td>Node của agent</td>
      </tr>
      <tr>
      <td>Version</td>
      <td>Phiên bản CyberAI EDR hiện tại</td>
      </tr>
      <tr>
      <td>Status</td>
      <td>Trạng thái agent</td>
      </tr>
      <tr>
      <td>Synced</td>
      <td>Trạng thái đồng bộ</td>
      </tr>
      <tr>
      <td>Isolate</td>
      <td>Trạng thái cách ly</td>
      </tr>
      <tr>
      <td>Sercurity features</td>
      <td>Tính năng bảo mật</td>
      </tr>
      <tr>
      <td>Actions</td>
      <td>Các hành động cụ thể</td>
      </tr>

  </tbody>
</table>
<br />

### 3.2. Phần thanh search

Thanh search dùng để tạo các bộ lọc tìm kiếm ở bảng

<p align="center">
<img src="/img/Endpoints_summary/search.png" alt="Menu EDR" />
</p>

Các thành phần:

<table class="">
  <thead> 
    <tr>
      <th>Thành phần</th>
      <th>Ý nghĩa bộ lọc</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>dateApp</td>
      <td>Tìm theo ngày đăng ký</td>
    </tr>
    <tr>
      <td>ID</td>
      <td>Lọc theo id</td>
    </tr>
    <tr>
      <td>IP</td>
      <td>Lọc theo ip</td>
      </tr>
      <tr>
      <td>Group</td>
      <td>Lọc theo nhóm</td>
      </tr>
      <tr>
      <td>Group_configs_status</td>
      <td>Lọc theo trạng thái cấu hình nhóm</td>
      </tr>
      <tr>
      <td>Last keep alive</td>
      <td>Lọc theo lần hoạt động cuối</td>
      </tr>
      <tr>
      <td>Manager</td>
      <td>Lọc theo người quản lý</td>
      </tr>
      <tr>
      <td>Name</td>
      <td>Lọc theo tên</td>
      </tr>
      <tr>
      <td>Node_name</td>
      <td>Lọc theo tên cụm cluster</td>
      </tr>
      <tr>
      <td>os.name</td>
      <td>Lọc theo tên hệ điều hành</td>
      </tr>
      <tr>
      <td>os.platform</td>
      <td>Lọc theo nền tảng hệ điều hành</td>
      </tr>
      <tr>
      <td>os.version</td>
      <td>Lọc theo phiên bản hệ điều hành</td>
      </tr>
      <tr>
      <td>Status</td>
      <td>Lọc theo trạng thái</td>
      </tr>
      <tr>
      <td>Version</td>
      <td>Lọc theo phiên bản</td>
      </tr>

  </tbody>
</table>
<br />

Khi chọn xong trường lọc 1, kế đến là trường lọc 2

<p align="center">
<img src="/img/Endpoints_summary/truongloc2.png" alt="Menu EDR" />
</p>

Chi tiết các trường lọc:

<table class="">
  <thead> 
    <tr>
      <th>Thành phần</th>
      <th>Ý nghĩa bộ lọc</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>=</td>
      <td>Giá trị trùng khớp</td>
    </tr>
    <tr>
      <td>!=</td>
      <td>Giá trị khác</td>
    </tr>
    <tr>
      <td>></td>
      <td>Giá trị lớn hơn</td>
      </tr>
      <tr>
      <td>&lt;</td>
      <td>Giá trị nhỏ hơn</td>
      </tr>
      <tr>
      <td>~</td>
      <td>Giá trị tương đương</td>
      </tr>
  </tbody>
</table>
<br />

Cuối cùng viết giá trị vào để lọc. Ví dụ cần lọc theo tên máy: name=5PRO

<p align="center">
<img src="/img/Endpoints_summary/vdf.png" alt="Menu EDR" />
</p>

### 3.3. Các tương tác phần Actions

#### 3.3.1. View agent details

Click vào biểu tượng con mắt 👁️ trong phần actions của 1 agent để xem thông tin chi tiết về agent đó

<p align="center">
<img src="/img/Endpoints_summary/vad.png" alt="Menu EDR" />
</p>

Giao diện chính của trang View agent details

<p align="center">
<img src="/img/Endpoints_summary/vadpage.png" alt="Menu EDR" />
</p>

Các mục trong trang:

#### a) <b>Risk score</b>

Riskscore thể hiển điểm số rủi ro, mức độ rủi ro (Risk score level) và biểu đồ thống kê biến động điểm số rủi ro theo thời gian

<p align="center">
<img src="/img/Endpoints_summary/rs.png" alt="Menu EDR" />
</p>
<br />

#### b)<b>Basic information</b>

Mục Basic information hiển thị tất cả thông tin cơ bản của agent

<p align="center">
<img src="/img/Endpoints_summary/bi.png" alt="Menu EDR" />
</p>

Các hạng mục thông tin gồm: 

<table class="">
  <thead> 
    <tr>
      <th>Thành phần</th>
      <th>Ý nghĩa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID</td>
      <td>Id của agent</td>
    </tr>
    <tr>
      <td>Agent name</td>
      <td>Tên agent</td>
    </tr>
    <tr>
      <td>IP</td>
      <td>Địa chỉ ip</td>
      </tr>
    <tr>
      <td>Status</td>
      <td>Trạng thái kết nối</td>
    </tr>
    <tr>
      <td>Version</td>
      <td>Phiên bản CyberAI EDR đang dùng</td>
    </tr>
    <tr>
      <td>Operating system</td>
      <td>Hệ điều hành</td>
    </tr>
    <tr>
      <td>Last keep alive</td>
      <td>Lần truy cập cuối</td>
    </tr>
    <tr>
      <td>Registration date</td>
      <td>Ngày đăng ký</td>
    </tr>
    <tr>
      <td>Synced</td>
      <td>Trạng thái đồng bộ</td>
    </tr>
    <tr>
      <td>Self-protection</td>
      <td>Tính năng tự bảo vệ</td>
    </tr>
    <tr>
      <td>Isolation</td>
      <td>Trạng thái cách ly</td>
    </tr>
    <tr>
      <td>Liveguard</td>
      <td>Tính năng bảo vệ trực tiếp</td>
    </tr>
    <tr>
      <td>Firewall</td>
      <td>Tường lửa</td>
    </tr>
    <tr>
      <td>Ransomguard</td>
      <td>Tính năng bảo vệ mã độc tống tiến</td>
    </tr>
    <tr>
      <td>Group(s)</td>
      <td>Các nhóm đã tham gia</td>
    </tr>

  </tbody>
</table>
<br />

- <b>Status</b>

Phần này hiển thị giao diện trạng thái và thông tin hệ thống của máy

<p align="center">
<img src="/img/Endpoints_summary/stt.png" alt="Menu EDR" />
</p>

Chi tiết các thông tin:

<table class="">
  <thead> 
    <tr>
      <th>Thành phần</th>
      <th>Ý nghĩa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CPU</td>
      <td>Cpu của agent</td>
    </tr>
    <tr>
      <td>RAM</td>
      <td>Lượng ram trống, tổng ram, số tiến trình sử dụng</td>
    </tr>
    <tr>
      <td>Board serial</td>
      <td>Số serial của bo mạch</td>
      </tr>
    <tr>
      <td>OS</td>
      <td>Hệ điều hành</td>
    </tr>
    <tr>
      <td>Build</td>
      <td>Tên mã phiên bản xây dựng</td>
    </tr>
    <tr>
      <td>Display version</td>
      <td>Phiên bản hiển thị của hệ điều hành</td>
    </tr>
    <tr>
      <td>Major</td>
      <td>Số phiên bản chính</td>
    </tr>
    <tr>
      <td>Minor</td>
      <td>Số phiên bản phụ</td>
    </tr>
    <tr>
      <td>Version</td>
      <td>Phiên bản đầy đủ</td>
    </tr>
    <tr>
      <td>Arch</td>
      <td>Kiến trúc hệ điều hành</td>
    </tr>
    <tr>
      <td>Hostname</td>
      <td>Tên máy</td>
    </tr>
    <tr>
      <td>Last scan</td>
      <td>Lần quét cuối</td>
    </tr>

  </tbody>
</table>
<br />

 #### a)<b>Processes</b>

  Mục này hiển thị giao diện chi tiết về các quy trình (Processes) đang chạy

  <p align="center">
  <img src="/img/Endpoints_summary/process.png" alt="Menu EDR" />
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
        <td>Tên tiến trình</td>
      </tr>
      <tr>
        <td>PID</td>
        <td>Id của tiến trình</td>
      </tr>
      <tr>
        <td>Parent PID</td>
        <td>Id của tiến trình cha</td>
        </tr>
      <tr>
        <td>VM size</td>
        <td>Kích thước bộ nhớ ảo</td>
      </tr>
      <tr>
        <td>Priority</td>
        <td>Số thể hiện mức độ ưu tiên của quy trình</td>
      </tr>
      <tr>
        <td>NLWP</td>
        <td>Số lượng luồng</td>
      </tr>
      <tr>
        <td>Command</td>
        <td>Lệnh, đường dẫn thực thi quy trình</td>
      </tr>

    </tbody>
  </table>
<br />

#### b)<b>Network interfaces</b>

Hiển thị danh sách các giao diện mạng (Network Interfaces) của máy

<p align="center">
<img src="/img/Endpoints_summary/ni.png" alt="Menu EDR" />
</p>

Chi tiết các thành phần:

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
      <td>Tên mạng</td>
    </tr>
    <tr>
      <td>MAC</td>
      <td>Địa chỉ Mac</td>
    </tr>
    <tr>
      <td>State</td>
      <td>Trạng thái giao diện</td>
      </tr>
    <tr>
      <td>MTU</td>
      <td>Kích thước tối đa của gói dữ liệu</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>Loại giao diện mạng</td>
    </tr>

  </tbody>
</table>
<br />

#### c)<b>Network ports</b>

Phần này hiển thị giao diện danh sách các cổng mạng (Network Ports) đang hoạt động trên máy

<p align="center">
<img src="/img/Endpoints_summary/np.png" alt="Menu EDR" />
</p>

Chi tiết các thành phần

<table class="">
  <thead> 
    <tr>
      <th>Thành phần</th>
      <th>Ý nghĩa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Local port</td>
      <td>Số cổng cục bộ</td>
    </tr>
    <tr>
      <td>Local ip address</td>
      <td>Địa chỉ ip cục bộ</td>
    </tr>
    <tr>
      <td>Process</td>
      <td>Tiến trình đang sử dụng cổng</td>
      </tr>
    <tr>
      <td>State</td>
      <td>Trạng thái của cổng</td>
    </tr>
    <tr>
      <td>Protocol</td>
      <td>Giao thức mạng</td>
    </tr>

  </tbody>
</table>
<br />

#### d)<b>Network setting</b>

Phần này hiển thị giao diện danh sách các cài đặt mạng (Network Settings) của máy

<p align="center">
<img src="/img/Endpoints_summary/ns.png" alt="Menu EDR" />
</p>

Các thành phần chi tiết:

<table class="">
  <thead> 
    <tr>
      <th>Thành phần</th>
      <th>Ý nghĩa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Interface</td>
      <td>Tên mạng</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>Địa chỉ ip</td>
    </tr>
    <tr>
      <td>Netmask</td>
      <td>Mặt na mạng</td>
      </tr>
    <tr>
      <td>Protocol</td>
      <td>Giao thức mạng</td>
    </tr>
    <tr>
      <td>Broadcast</td>
      <td>Địa chỉ broadcast cho IPv4</td>
    </tr>

  </tbody>
</table>
<br />

 #### e)<b>Packages</b>

  Phần hiển thị giao diện danh sách các gói phần mềm (Packages) được cài đặt trên máy

  <p align="center">
  <img src="/img/Endpoints_summary/package.png" alt="Menu EDR" />
  </p>

Chi tiết các thành phần:

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
      <td>Tên gói phần mềm</td>
    </tr>
    <tr>
      <td>Architecture</td>
      <td>Kiến trúc của gói</td>
    </tr>
    <tr>
      <td>Version</td>
      <td>Phiên bản của gói</td>
      </tr>
    <tr>
      <td>Vendor</td>
      <td>Nhà cung cấp hoặc nguồn gốc của gói</td>
    </tr>

  </tbody>
</table>
<br />

- <b>Live command</b>

Mục đích: Cho phép quản trị viên thực thi các lệnh trực tiếp trên các máy tính (agent) được giám sát một cách tức thời từ giao diện quản lý trung tâm
<p align="center"><img src="/img/Endpoints_summary/livecmd.png" alt="Menu EDR" /></p>

Tính năng Live Command gồm 2 phần chính:
1. Command


-Start Session: Nhấn để bắt đầu kết nối với agent.
<p align="center">
  <img src="/img/live-command2.jpg" alt="Live Command UI" width="1200"/>
</p>
-Khu vực hiển thị lệnh: 
  - Người dùng nhập lệnh tại đây.
  - Nhấn **Enter** để thực thi.
  - Kết quả sẽ hiển thị ngay bên dưới dòng lệnh, tương tự Command Prompt trên Windows.
- **Copy**: Nhấn để sao chép lệnh đã nhập (thường dùng để lấy dữ liệu phản hồi từ agent).
- **Stop Session**: Ngắt kết nối với agent và kết thúc phiên làm việc Live Command.

2. History

-Chức năng: Hiển thị bảng lịch sử các phiên sử dụng Live Command, bao gồm:
  - Thời gian bắt đầu/kết thúc
  - Các lệnh đã thực thi
  - Người thực hiện

<p align="center">
  <img src="/img/live-command3.png" alt="Live Command UI" width="1200"/>
</p>

- **Thông tin hiển thị**:
  - **Search detail history**: Cho phép tìm kiếm theo nội dung chi tiết trong trường `Detail`.
  - **Time**: Hiển thị thời điểm các hành động diễn ra, sắp xếp theo thứ tự từ mới đến cũ.
  - **Executed by**: Tên người dùng đã thực hiện hành động.
  - **Action**: Loại hành động thực hiện trên tab Live Command (Start, Execute, Stop...).
  - **Detail**: Câu lệnh hoặc nội dung cụ thể đã được thực hiện.

---

Các bước thực hiện

Bước 1:

Từ màn hình `Endpoint Management`, chọn **Endpoint summary** và nhấp vào tên agent cần thao tác để mở màn hình chi tiết.

Bước 2:

<p align="center">
<img src="/img/live-command4.png" alt="Live Command UI" width="1200"/>
</p>
Chọn tab **Live Command**, sau đó nhấn **Start Session**.

- Hệ thống sẽ tiến hành kết nối tới agent.
- Khi kết nối thành công, khu vực nhập lệnh sẽ xuất hiện để người dùng thao tác.

⚠️ **Lưu ý**: Nút **Start Session** chỉ khả dụng khi agent đang ở trạng thái **Active**.

<br />


<p>- All options</p>

Click vào dấu 3 chấm cạnh phần View agent details để mở all options

<p align="center">
<img src="/img/Endpoints_summary/ao.png" alt="Menu EDR" />
</p>

Các chức năng của mục all options:

- View agent details: Xem chi tiết thông tin agent

- Agent configuration: Cấu hình agent

- Edit groups: Cài đặt nhóm cho agent 

- Upgrade: Upgrade agent
