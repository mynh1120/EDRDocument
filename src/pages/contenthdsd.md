import ScriptController from '@site/src/components/ScriptController';
import '@site/src/css/cthdsd.css';

<ScriptController />
<div class="con">
<div className="sb">
  <h2>Menu Điều Hướng</h2>
  <ul>
    <li>
      <a href="#" className="menu-toggle">CyberAI EDR</a>
      <ul className="sub-menu">
        <li><a href="#" data-content="about-us">Tổng quan về CyberAI EDR</a></li>
        <li><a href="#" data-content="tinhnang">Tính năng của CyberAI EDR</a></li>
        <li><a href="#" data-content="cachhd">CyberAI hoạt động thế nào</a></li>
      </ul>
    </li>
    <li>
      <a href="#" className="menu-toggle">Cấu hình ban đầu</a>
      <ul className="sub-menu">
        <li><a href="#" data-content="dangnhap">Đăng nhập</a></li>
        <li><a href="#" data-content="xemphanquyen">Xem phân quyền tài khoản</a></li>
        <li><a href="#" data-content="doimk">Đổi mật khẩu</a></li>
        <li><a href="#" data-content="tpq">Tạo mới, phân quyền tài khoản</a></li>
      </ul>
    </li>
    <li>
      <a href="#" className="menu-toggle">Các trường hợp sử dụng</a>
      <ul className="sub-menu">
        <li><a href="#" data-content="punhanh">Phản ứng nhanh với cảnh báo nguy hại</a></li>
        <li><a href="#" data-content="clsalert">Đóng các alert đã xử lý hoặc xác nhận không gây nguy hại</a></li>
        <li><a href="#" data-content="phantich">Phân tích, lấy mẫu mã độc</a></li>
        <li><a href="#" data-content="createincident">Tạo tác vụ (Task) để xử lý sự cố (Incident)</a></li>
        <li><a href="#" data-content="chuyenincident">Chuyển người xử lý sự cố (Incident)</a></li>
        <li><a href="#" data-content="xulytaskfailed">Xử lý khi các task bị trạng thái failed, chậm tiến độ</a></li>
      </ul>
    </li>

  <li>
      <a href="#" className="menu-toggle">Truy vết mã độc</a>
      <ul className="sub-menu">
        <li><a href="#" data-content="punhanh">Phản ứng nhanh với cảnh báo nguy hại</a></li>
        <li><a href="#" data-content="clsalert">Đóng các alert đã xử lý hoặc xác nhận không gây nguy hại</a></li>
        <li><a href="#" data-content="phantich">Phân tích, lấy mẫu mã độc</a></li>
      </ul>
  </li>
  </ul>
</div>


<!-- Tổng quan EDR -->
<div className="ct"> 
  <div id="about-us" className="ct-section">
    <h1>Tổng quan về EDR</h1>

EDR là viết tắt của Endpoint Detection & Response.

**Endpoint:** Thiết bị đầu cuối có thể máy trạm, server,….

**Detection:** Phát hiện.

**Response:** Phản ứng.

Endpoint Detection & Response là hệ thống phát hiện và phản hồi các mối nguy hại tại điểm cuối. Đây là 1 công cụ bảo mật dành cho không gian mạng.
Ứng dụng EDR dùng để phát hiện và loại bỏ các phần mềm độc hại hoặc bất kỳ hoạt động khả nghi nào khác trên mạng. Ngoài ra nó còn liên tục theo dõi thu thập ghi lại cũng như lưu trữ và phân tích chuyên sâu để sớm phát hiện ra các hành vi đáng nghi trong hệ thống.

Các phần mềm EDR phổ biến: Window defender, McAfee, BKAV endpoint,
  + EDR Server: Nhận log từ các agent và phân tích.
  + EDR Indexer (OpenSearch): Lưu trữ dữ liệu log.
  + EDR Dashboard: Giao diện web để giám sát và phân tích.
  + EDR Agent: Cài trên máy trạm người dùng (thiết bị đầu cuối) để thu thập log.
</div>

  <!-- Cách hoạt động -->
  <div id="cachhd" className="ct-section">
    <h1> CycberAI EDR hoạt động ra sao</h1>
<p align="center"><img src="img/edrworkflow.png" width="800" height="550" alt="Menu EDR" /></p>

<p>Giải thích nguyên lý hoạt động theo sơ đồ</p>
<p><b>1. Endpoints (Thiết bị đầu cuối):</b> Các thiết bị như máy tính, laptop, điện thoại… được giám sát bởi EDR.</p>
<p><b>2. Threat Actor (Kẻ tấn công):</b> Kẻ tấn công thực hiện hành vi độc hại trên endpoint (ví dụ: tải mã độc, chạy script). </p>
<p><b>3. Behavioral Data (Dữ liệu hành vi):</b> EDR thu thập dữ liệu hành vi từ endpoint — bao gồm tiến trình chạy, hành vi truy cập file, kết nối mạng, v.v. </p>
<p><b>4. Database, Big Data, Store & Machine Learning nhận Behavioral Data endpoint gửi về:</b> </p>
      <p>+ Lưu trữ dữ liệu lớn.</p>
      <p>+ Phân tích bằng trí tuệ nhân tạo / machine learning. </p>
      <p>+ So sánh với các IOC, rule, mẫu tấn công đã biết.</p>
      <p>+ IT Admin & Analysts (quản trị viên) Quản trị viên phân tích rồi đưa ra quyết định xử lý (update rule, cảnh báo nội bộ, điều tra sâu hơn). </p>
<p><b>6. Realtime View of Endpoint Behavior:</b> Quản trị viên có thể xem trực tiếp hành vi endpoint đang xảy ra để đưa ra quyết định nhanh chóng</p>
  </div>

  <!-- Các tính năng -->
  <div id="tinhnang" className="ct-section">
    <h1>Các tính năng</h1>

1. Phát hiện và phân tích mối đe dọa
- Phát hiện hành vi đáng ngờ: Phát hiện hành vi bất thường của tiến trình, tập tin, hệ thống và mạng.
-	Giám sát hoạt động của tập tin: Theo dõi các thay đổi trong hệ thống tập tin, bao gồm xóa, mã hóa và chỉnh sửa.
-	Phân tích hành vi tiến trình: Ghi nhận và kiểm tra các tiến trình chạy trên hệ thống để phát hiện ransomware hoặc mã độc.
-	Giám sát registry: Theo dõi các thay đổi trong registry Windows.
-	Cập nhật rule, agent theo thời gian thực.

2. Phản hồi và khắc phục sự cố tự động & thủ công
-	Cách ly thiết bị: Ngăn chặn thiết bị bị nhiễm khỏi mạng để tránh lây lan.
-	Tự động xóa hoặc cách ly tập tin độc hại: Hệ thống có khả năng nhận diện và xóa tập tin đáng ngờ mà không cần can thiệp thủ công.
-	Khóa tiến trình nguy hiểm: Ngăn chặn hoặc chấm dứt các tiến trình đang thực hiện hành vi độc hại.
-	Tạo quy tắc phản hồi tự động: Cho phép thiết lập các hành động tự động dựa trên chính sách bảo mật.
-	Hỗ trợ phản hồi kiểm soát toàn bộ hệ thống: 
- Cách ly và khôi phục kết nối mạng
-	Cách ly/Khôi phục thiết bị kết nối mạng.
-	Chặn/Bỏ chặn địa chỉ.
-	Chặn/Bỏ chặn tệp tin, tiến trình thực thi truy cập qua mạng.
-	Quản lý tường lửa.
- Kiểm soát và xử lý tiến trình
-	Liệt kê danh sách tiến trình.
-	Chấm dứt tiến trình.
-	Tạm dừng/tiếp tục tiến trình.
-	Dump tiến trình để phân tích..
- Kiểm soát tệp tin và hệ thống tập tin
-	Quét tập tin để phát hiện mã độc.
-	Xóa tập tin.
-	Tải xuống tập tin từ máy nạn nhân.
-	Tải lên tập tin.
-	Cách ly tập tin độc hại.
-	Khôi phục tập tin đã cách ly.
-	Liệt kê/lấy danh sách tập tin trong hệ thống.
- Quản lý dịch vụ hệ thống
-	Dừng dịch vụ.
-	Khởi động lại dịch vụ.
-	Liệt kê danh sách dịch vụ.
- Quản lý thiết bị đầu cuối (Endpoint)
-	Tắt máy tính.
-	Khởi động lại máy tính.
-	Đưa thiết bị vào chế độ ngủ.
- Quản lý tài khoản người dùng
-	Liệt kê danh sách người dùng.
-	Kích hoạt tài khoản.
-	Vô hiệu hóa tài khoản.
-	Khóa tài khoản.
-	Đăng xuất người dùng.
- Quản lý registry
-	Xóa giá trị trong registry.
-	Tạo hoặc sửa đổi registry.

3. Giám sát và quản lý tập trung
Bảng điều khiển tập trung (Centralized Dashboard): Cung cấp giao diện quản lý toàn bộ thiết bị đầu cuối trong hệ thống, hỗ trợ bật tắt các tính năng của endpoint.
- Giám sát thời gian thực:
  + Hiển thị cảnh báo theo thời gian thực trên dashboard.
  + Cung cấp khả năng tìm kiếm, tra cứu, phản hồi nhanh qua giao diện web.
  + Hỗ trợ nhiều nền tảng (Windows, Linux): Giám sát và bảo vệ nhiều loại thiết bị khác nhau.
  + Tích hợp Threat Intelligence: Kết nối với hệ thống tình báo mối đe dọa để cập nhật thông tin về các loại mã độc mới.
  + Tích hợp SIEM/SOAR: Cho phép xuất dữ liệu và tích hợp với các hệ thống quản lý sự kiện bảo mật thông qua API mở.
  + Tạo báo cáo và log sự kiện: Ghi lại tất cả các sự kiện liên quan đến bảo mật để phục vụ phân tích và săn lùng.
- Tùy biến rule và chính sách bảo mật:
  + Hỗ trợ tạo và chỉnh sửa rule giám sát theo yêu cầu của tổ chức.
  + Cấu hình chính sách bảo mật theo nhóm hoặc thiết bị cụ thể.
- Phân quyền và kiểm soát truy cập:
  + Quản lý quyền truy cập vào hệ thống theo vai trò (Role-Based Access Control - RBAC).
  + Kiểm soát xác minh, hạn chế lệnh quan trọng (USB Token-Based Authorization)

4. Phân tích pháp y và điều tra sự cố
- Truy vết tấn công (Attack Timeline): Cung cấp dòng thời gian, log chi tiết về cuộc tấn công, phân loại theo từng pha tấn công dựa trên MITRE ATT&CK để phân tích.
- Live Response & Remote Shell: Cho phép quản trị viên thực hiện phản ứng từ xa đối với sự cố.
- Ghi lại hoạt động hệ thống: Ghi lại mọi hoạt động trên thiết bị đầu cuối để phục vụ điều tra.
- Phân tích bộ nhớ (Memory Forensics): Quét và phân tích bộ nhớ để phát hiện mã độc chạy ẩn.

5. Cảnh báo & ngăn chặn rủi ro
- Rà quét và cảnh báo lỗ hổng (Vulnerability detection): Cảnh báo các lỗ hổng phần mềm, hệ điều hành.
- Đánh giá mức độ rủi ro (Risk level): Đánh giá độ rủi ro của từng điểm cuối và toàn bộ hệ thống.
- Phát hiện và ngăn chặn tấn công ransomware: Phát hiện các hành vi mã hóa dữ liệu và ngăn chặn hành vi.
- Giám sát kết nối mạng: Phát hiện kết nối bất thường đến các máy chủ điều khiển (C2 Server).
- Học máy (Machine Learning) trong phát hiện mối đe dọa: Sử dụng AI để phân tích sự kiện, mẫu hành vi nguy hiểm.

</div>

<!-- Đăng nhập -->
  <div id="dangnhap" className="ct-section">
<h1>Đăng nhập</h1>

Tại giao diện trang đăng nhập EDR, nhập Username, Password để đăng nhập

<p align="center"><img src="/img/HDSD/login.png" alt="Menu EDR" /></p>
<br />
  </div>

  <!--xem phân quyền-->
  <div id="xemphanquyen" className="ct-section">
<h1>Xem phân quyền tài khoản</h1>
<p><b>Bước 1:</b> Trên giao diện phần mềm click vào icon "người dùng" bên góc phải ấn "View roles and identities"</p>
<p align="center"><img src="/img/HDSD/viewrole.png" alt="Menu EDR" /></p>

<p><b>Bước 2:</b>  Hiển thị ra bảng thông tin về role </p>
<p align="center"><img src="/img/HDSD/role.png" alt="Menu EDR" /></p>

Bảng gồm 2 thông tin là roles và backend roles
- Roles: là vai trò được được phân cho tài khoản
- Backend roles: là vai trò được quản trị viên 
</div>

<!-- Đổi mật khẩu -->
<div id="doimk" className="ct-section">
<h1>Đổi mật khẩu</h1>
<p><b>Bước 1:</b> Trên giao diện phần mềm click vào icon người dùng bên góc phải chọn "Reset password"</p>
<p align="center"><img src="/img/HDSD/rspass.png" alt="Menu EDR" /></p>

<p><b>Bước 2:</b> Nhập thông tin bắt buộc rồi ấn "Reset"</p>
    - Thông tin cần điền: 
      + Current password: Nhập mật khẩu hiện tại
      + New password: Nhập mật khẩu mới
      + Re-enter new password: Xác nhận lại mật khẩu mới

Lưu ý: Mật khẩu phải dài ít nhất 8 ký tự và chứa ít nhất một chữ cái viết hoa, một chữ cái viết thường, một chữ số và một ký tự đặc biệt.
<p align="center"><img src="/img/HDSD/rspopup.png" alt="Menu EDR" /></p>
  </div>

<!-- Tạo mới, phân quyền -->
<div id="tpq" className="ct-section">
<h1>Tạo mới, phân quyền tài khoản</h1>
**Mục đích:** Tạo tài khoản mới cho người dùng và quản lý quyền hoạt động của tài khoản trong hệ thống.

Cách thực hiện: 

<p>**Bước 1:** Ở màn hình "Security" Ấn "Create user"</p>

![alt text](/img/createuser1.png)

<p>**Bước 1:** Nhập thông tin user --> Ấn "APPLY"</p>
  - Thông tin cần điền:
      + Username: tên đăng nhập 
      + Password: một chuỗi 8 - 64 kí tự có ít nhật 1 chữ hoa và 1 kí tự đặc biệt
      + Confirm Password: phải trùng với password
      + Role: Vai trò của người dùng trong hệ thống

![alt text](/img/userinfor.png)
- Thông báo tạo tài khoản thành công và hiển thị tài khoản vừa tạo trong danh sách tài khoản

![alt text](/img/popuptaotkthanhcong.png)
  </div>

<!-- Phản ứng nhanh -->
  <div id="punhanh" className="ct-section">
<h1>Phản ứng nhanh với các mối đe dọa</h1>
<p><b>Mục đích:</b> Tiến hành cách ly các agent có cảnh báo nguy cơ gây hại để bảo vệ hệ thống</p>

<p><b>Các bước thực hiện:</b></p>

<p><b>Bước 1:</b> Xác nhận các cảnh báo nguy hại</p>

Tại bảng Alerts xác nhận các cảnh báo nguy hại (phát hiện hoặc được báo cáo)
<p align="center"><img src="/img/HDSD/critial.png" alt="Menu EDR" /></p>

<p><b>Bước 2:</b> Tiến hành cách ly nhanh</p>

Sau khi xác nhận alert, click vào chọn cảnh báo chọn More, click Isolate để tiến hành cách ly agent. Agent sẽ được cách ly khỏi mạng, hệ thống để tránh mã hóa, lây lan sang các thành phần trong máy hoặc các máy khác nhưng vẫn chịu sự giám sát của server. Lựa chọn thêm shutdown hoặc logout user tùy các trường hợp
<p align="center"><img src="/img/HDSD/isolate.png" alt="Menu EDR" /></p>
</div>

<!-- Đóng các alert (cảnh báo) đã xử lý hoặc xác nhận không gây nguy hại -->

<div id="clsalert" className="ct-section">
  <h1>Đóng các alert (cảnh báo) đã xử lý hoặc xác nhận không gây nguy hại</h1>
  <p><b>Mục đích:</b> Đóng các cảnh báo đã xử lý hoặc cảnh báo nhiều</p>

<b>Cách thực hiện:</b>

Ví dụ các cảnh báo nhiều như Rule level low , Rule description như PAM: Login session closed (Phiên đăng nhập đã đóng) mà xác nhận không gây ảnh hưởng nhiều

Tick vào ô cạnh Alert ID để chọn những cảnh báo cần đóng, chọn Close, click Yes để đóng
<p align="center"><img src="/img/HDSD/clsalert.gif" alt="Menu EDR" /></p>
  </div>

<!-- Phân tích, liệt kê mã độc -->
<div id="phantich" className="ct-section">
<h1>Phân tích, liệt kê và lấy mẫu mã độc</h1>
<p><b>Mục đích: Phân tích các mã độc đang chiếm tỉ lệ cao, liệt kê các file liên quan</b> </p>

<p><b>Các bước thực hiện:</b></p>

<p><b>- Bước 1:</b> Kiểm tra loại mã độc, thời gian phát hiện sự kiện</p>

Tại trang Dashboard kiểm tra phần Top malware detections by agent để loại trừ các loại mã độc, phần Ransomware detection events để lọc thời gian phát hiện sự kiện mã độc ( ví dụ phát hiện 1 mã độc vào 10-6-2025 )
<p align="center"><img src="/img/HDSD/ransom.png" alt="Menu EDR" /></p>

<p><b>- Bước 2:</b> Lọc alerts, truy tìm cảnh báo khả năng mã độc</p>

Chuyển trang Alerts, lọc theo thời gian phát hiện sự kiện phát hiện mã độc, lọc rule level theo thứ tự giảm dần, chọn các alerts Critical và High khả năng cao cảnh báo mã độc
<p align="center"><img src="/img/HDSD/filrans.png" alt="Menu EDR" /></p>
Tiến hành phản ứng nhanh: Cách ly, tắt máy, log out user

<p><b>- Bước 3:</b> Truy tìm các file, folder nghi ngờ liên quan mã độc</p>
Truy xét phần Rule description, trong đó có thể mô tả hành vi, tác động của ransomware lên agent (ví dụ phần ảnh phát hiện "Ransomware behavior detected! - PID: 7360, C:\users\user\desktop\supicious.exe - Rename File" phát hiện đổi tên file) 
<p align="center"><img src="/img/HDSD/truyvet.png" alt="Menu EDR" /></p>

Ấn vào icon mắt để điều tra chi tiết
<p align="center"><img src="/img/HDSD/detailtv.png" alt="Menu EDR" /></p>
  </div>

<!-- Tạo incident -->
<div id="createincident" className="ct-section">
  <h1>Tạo tác vụ (Task) để xử lý sự cố (Incident)</h1>
**Mục đích:** Tạo tác vụ để xử lý sự cố

Tình huống ví dụ: Khi phát sinh sự cố các tác vụ hiện tại không xử lý được hoặc xử lý không triệt để quản trị viên cần tại tác vụ mới để sử lý sự cố đó.

- Cách thực hiện: 

<p>**Bước 1:** Tại màn hình "Tasks" chọn "Create new task" </p>

![alt](/img/newtask.png)
<br />
<p>**Bước 2:** Nhập các thông tin tác vụ (Task) --> Ấn "SAVE"</p>
- Thông tin: 
    + Task Name: tên người tạo đặt cho tác vụ (bắt buộc nhập)
    + Description: mô tả về tác vụ (không bắt buộc nhập)
    + Upload file: đính kèm tệp liên quan đến task (không bắt buộc nhập)
    + Task Detail: file json gồm các hành động của tác vụ (bắt buộc nhập)

![alt](/img/taskinfor.png)

<p>**Bước 3:** Chọn tác vụ vừa tạo --> Ấn biểu tượng ![alt](/img/iconassign.png)</p>

![alt](/img/Assigntask.png)

<p>**Bước 4:** Chọn sự cố cần xử lý --> Ấn "ASSIGN"</p>

![alt](/img/Assigntask1.png)

- Popup thông báo đã gán thành công cho incident:

![alt](/img/success.png)
    
  </div>

<!--Chuyen incident  -->

<div id="chuyenincident" className="ct-section">
Chuyển người xử lý sự cố (Incident)

- **Mục đích:** Chuyển người phụ trách xử lý sự cố

- Thành phần liên quan: incident, user xử lý

- Luồng xử lý (Workflow hoặc Flowchart):

- Vai trò người dùng thực hiện: administrator.

- **Tình huống ví dụ:** Người xử lý sự cố hiện tại có việc bận hoặc đang được phân xử lý nhiều sự cố cần phân cho người khác xử lý để đảm bảo tiến độ.

Cách thực hiện: 

**Bước 1:** Ở màn hình "Incidents" chọn sự cố (Incident) cần chuyển người xử lý --> Ấn "Assign User

![alt](/img/AssignIncident3.png)

**Bước 2:** Chọn tài khoản của người xử lý --> Ấn "ASSIGN"

![alt](/img/AssignIncident4.png)

**Kết quả:** Chuyển từ admin sang nganlt là người xử lý sự cố.

![alt](/img/AssignIncident5.png)

Lưu ý: Có thể chọn một hoặc nhiều sự cố trong mỗi lần phân công người xử lý. 
</div>

<!-- Xử lý task failed -->
  <div id="xulytaskfailed" className="ct-section">
    <h1>Xử lý khi các task bị trạng thái failed, chậm tiến độ</h1>
    
    <p><b>Mục đích:</b> Quản lý các task để đảm bảo tiến độ được phân chia</p>

  <p><b>Các bước thực hiện:</b></p>

  <p><b>- Bước 1:</b> Kiểm tra tiến độ các task</p>

  Kiểm tra mục Incidents để xem phần SLA xem tiến độ của task, nếu tiến độ chậm cần có biện pháp xử lý 
  <p align="center"><img src="/img/HDSD/sla.png" alt="Menu EDR" /></p>

  <p><b>- Bước 2:</b> Điều tra nguyên nhân</p>

  Click phần view để điều tra nguyên nhân gây chậm tiến độ
  <p align="center"><img src="/img/HDSD/act.png" alt="Menu EDR" /></p>

  Kiểm tra các phần như Time remaining (thời gian còn lại), status để xem task failed ảnh hưởng đến tiến độ
  <p align="center"><img src="/img/HDSD/sttincident.png" alt="Menu EDR" /></p>

  - Nếu Status là failed click view để điều tra thêm xem lệnh cấu hình các task viết có đúng không
  <p align="center"><img src="/img/HDSD/islagent.png" alt="Menu EDR" /></p>

  - Kiểm tra agent có đang hoạt động, ghi nhận tên, id agent để điều tra thêm nếu status là disconnected
  <p align="center"><img src="/img/HDSD/agentstt.png" alt="Menu EDR" /></p>

  <p><b>- Bước 3:</b> Đưa ra phương án xử lý</p>

  Các phương án xử lý:

  - Chạy lại task 
  <p align="center"><img src="/img/HDSD/runtask.png" alt="Menu EDR" /></p>

  - Nếu khi chạy lại vẫn lỗi, kiểm tra lệnh cấu hình và sửa lại 
  <p align="center"><img src="/img/HDSD/taskfix.png" alt="Menu EDR" /></p>

  - Trường hợp agent disconnected, cần các biện pháp thiết lập lại kết nối và chạy lại task

  </div>

  <!--  -->

</div>
</div>
