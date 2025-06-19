---
id: guide
title: Hướng dẫn sử dụng
---

<h2 class="tieude">Hướng dẫn sử dụng<img src="/img/HDSD/edr.png"  /></h2>
<div class="custom-hr"></div>

<details>
<summary><strong>1️. Đăng nhập/ đổi mật khẩu/ xem quyền được phân cho tài khoản đang sử dụng</strong></summary>
<div class="main-wrap">

- **Mục đích:** Hỗ trợ việc quản lý tài khoản của người sử dụng, yêu cầu điều chỉnh quyền hoạt động phục vụ công việc quản lý hằng ngày.

**Cách thực hiện:** 

<h3>**Đăng nhập**</h3>

Tại giao diện trang đăng nhập EDR, nhập Username, Password để đăng nhập

<p align="center"><img src="/img/HDSD/login.png" alt="Menu EDR" /></p>
<br />

<h3>**Đổi mật khẩu**</h3>

<p><b>Bước 1:</b> Sau khi đăng nhập sẽ hiện ra giao diện Dashboard, ở đây click vào icon người dùng bên góc phải chọn "Reset password"</p>
<p align="center"><img src="/img/HDSD/rspass.png" alt="Menu EDR" /></p>

<p><b>Bước 2:</b> Sau đó popup reset mật khẩu sẽ hiện ra</p>
- Current password: Nhập mật khẩu hiện tại
- New password: Nhập mật khẩu mới
- Re-enter new password: Xác nhận lại mật khẩu mới

Lưu ý: Mật khẩu phải dài từ nhất 8 - 64 ký tự và chứa ít nhất một chữ cái viết hoa, một chữ cái viết thường, một chữ số và một ký tự đặc biệt.
<p align="center"><img src="/img/HDSD/rspopup.png" alt="Menu EDR" /></p>
<br />

<h3>**Xem phân quyền tài khoản đang sử dụng**</h3>

<p><b>Bước 1:</b> Tại giao diện trang đăng nhập, click vào icon người dùng bên góc phải chọn View roles and identities</p>
<p align="center"><img src="/img/HDSD/viewrole.png" alt="Menu EDR" /></p>

<p><b>Bước 2:</b> Cách xem popup View roles and identities</p>

Bảng gồm 2 phần là roles và backend roles
- Roles: Vai trò mà quản trị viên phân quyền
- Backend roles: Vai trò phụ trợ được quản trị viên phân quyền
<p align="center"><img src="/img/viewroleuser.png" alt="Menu EDR" /></p>

</div>
</details>

<details>
<summary><strong>2. Tạo báo cáo sự cố (Incident) khi có cảnh báo nguy hại (Alert)</strong></summary>

- **Mục đích:** Báo cáo sự cố để sớm phân công người xử lý và cách xử lý đối máy có cảnh báo nguy hại, tránh làm ảnh hưởng tới hệ thống.

**Cách thực hiện:** 

<p>**Bước 1:** Ở màn hình "Alerts" chọn cảnh báo sau đó ấn "Create new incident"</p>
<p>Lưu ý: Có thể chọn một hoặc nhiều cảnh báo khi tạo sự cố. </p>
![alt](/img/CreateIncidentforalert.png)

<p>**Bước 2** Nhập thông tin incident </p>
- Thông tin: (các trường có dấu "*" màu đỏ bên cạnh bắt buộc phải nhập)
    + Incident name: tên của sự cố
    + Severity: mức độ ưu tiên
    + Category: loại sự cố
    + Assign user: tài khoản xử lý
    + SLA: thời gian cam kết hoàn thành
    + Occurrence time: thời điểm xảy ra
    + Detection time: thời gian phát hiển
    + Description: mô tả về sự cố

![alt](/img/CreateIncidentforalert1.png)

<p>**Bước 3:** Ấn "Add Alerts" chọn alert muốn gán thêm cho incident tiếp đó ấn "ADD"</p>

![alt](/img/CreateIncidentforalert2.png)

<p>**Bước 4:** Gán thêm hoặc gỡ bỏ task cho incident </p>

- Gán thêm task cho incident: Ấn "Assign to task" chọn task muốn gán cho incident tiếp đó ấn Ấn "ASSIGN"

![alt](/img/CreateIncidentforalert3.png)

- Gỡ task đã gán cho incident: Chọn task cần gỡ bỏ tiếp đó ấn "Unassign"

![alt](/img/CreateIncidentforalert4.png)

<p>**Bước 5:** Gán thêm hoặc gỡ bỏ agent cho incident</p>

- Gán thêm agent cho incident: Ấn "Assign to agent" chọn agent muốn gán cho incident tiếp đó ấn "ASSIGN"

![alt](/img/CreateIncidentforalert5.png)

- Gỡ agent đã gán cho incident: Chọn agent đang được gán tiếp đó ấn "Unassign"

![alt](/img/CreateIncidentforalert6.png)

<p>**Bước 6:** Kiểm tra lại thông tin incident vừa nhập tiếp đó ấn "SAVE" </p>

![alt](/img/CreateIncidentforalert7.png)

</details>

<details>

<summary><strong>3. Đóng các cảnh báo (Alert)  </strong></summary>
<div class="main-wrap">

<p><b>Mục đích:</b> Đóng các cảnh báo đã xử lý hoặc xác nhận không gây nguy hại</p>

<b>Cách thực hiện:</b>

Ví dụ các cảnh báo nhiều như Rule level low , Rule description như PAM: Login session closed (Phiên đăng nhập đã đóng) mà xác nhận không gây ảnh hưởng nhiều

Tick vào ô cạnh Alert ID để chọn những cảnh báo cần đóng, chọn Close, click Yes để đóng
<p align="center"><img src="/img/HDSD/clsalert.gif" alt="Menu EDR" /></p>

</div>
</details>

<details>
<summary><strong>4. Phản ứng nhanh với những cảnh báo có mức độ nguy hại cao</strong></summary>
<div class="main-wrap">

<p><b>Mục đích:</b> Tiến hành cách ly các agent có cảnh báo nguy cơ gây hại để bảo vệ hệ thống</p>

<p><b>Cách thực hiện:</b></p>

<p><b>- Bước 1:</b> Xác nhận các cảnh báo nguy hại</p>

Tại bảng Alerts xác nhận các cảnh báo nguy hại (phát hiện hoặc được báo cáo)
<p align="center"><img src="/img/HDSD/critial.png" alt="Menu EDR" /></p>

<p><b>- Bước 2:</b> Tiến hành cách ly nhanh</p>

Sau khi xác nhận alert, click vào chọn cảnh báo chọn More, click Isolate để tiến hành cách ly agent. Agent sẽ được cách ly khỏi mạng, hệ thống để tránh mã hóa, lây lan sang các thành phần trong máy hoặc các máy khác nhưng vẫn chịu sự giám sát của server. Lựa chọn thêm shutdown hoặc logout user tùy các trường hợp
<p align="center"><img src="/img/HDSD/isolate.png" alt="Menu EDR" /></p>

</div>
</details>

<details>
<summary><strong>5. Tạo tác vụ (Task) để xử lý sự cố (Incident) </strong></summary>

- **Mục đích:** Ngoài danh sách tác vụ được tạo trước đó để xử lý sự cố, có thể tạo tác vụ mới hiệu quả hơn trong việc xử lý các sự cố mới với các lệnh hành động kill, block những tiền trình, virus gây sự cố. 

**Cách thực hiện:** 

<p>**Bước 1:** Tại màn hình "Tasks" chọn "Create new task" </p>

![alt](/img/newtask.png)

<p>**Bước 2:** Nhập các thông tin tác vụ (Task) tiếp đó ấn Ấn "SAVE"</p>
- Thông tin: 
    + Task Name: tên người tạo đặt cho tác vụ (bắt buộc nhập)
    + Description: mô tả về tác vụ (không bắt buộc nhập)
    + Upload file: đính kèm tệp liên quan đến task (không bắt buộc nhập)
    + Task Detail: file json gồm các hành động của tác vụ (bắt buộc nhập)
Thao khảo giới thiệu (gán link task detail) để viết task detail cho tác vụ

![alt](/img/taskinfor.png)

<p>**Bước 3:** Chọn tác vụ vừa tạo tiếp đó ấn biểu tượng ![alt](/img/iconassign.png)</p>

![alt](/img/Assigntask.png)

<p>**Bước 4:** Chọn sự cố cần xử lý tiếp đó ấn "ASSIGN"</p>

![alt](/img/Assigntask1.png)

- Popup thông báo đã gán thành công cho incident:

![alt](/img/success.png)

</details>

<details>
<summary><strong>6. Chuyển người xử lý sự cố (Incident) </strong></summary>

- **Mục đích:** Cần thêm người hỗ trợ xử lý để kịp thời gian xử lý sự cố hoặc người phụ trách hiện tại có việc bận sẽ phân cho người khác xử lý.

**Cách thực hiện:** 

<p>**Bước 1:** Ở màn hình "Incidents" chọn sự cố (Incident) cần chuyển người xử lý tiếp đó ấn "Assign User</p>
<p>Lưu ý: Có thể chọn một hoặc nhiều sự cố trong mỗi lần phân công người xử lý. </p>

![alt](/img/AssignIncident3.png)

<p>**Bước 2:** Chọn tài khoản của người xử lý tiếp đó ấn "ASSIGN" </p>

![alt](/img/AssignIncident4.png)

- **Kết quả:** Chuyển từ admin sang nganlt là người xử lý sự cố.

![alt](/img/AssignIncident5.png)

</details>

<details>
<summary><strong>7. Xử lý khi các task bị trạng thái failed, chậm tiến độ</strong></summary>
<div class="main-wrap">

<p><b>Mục đích:</b> Quản lý các task để đảm bảo tiến độ được phân chia</p>

<p><b>Cách thực hiện:</b></p>

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
</details>

<details>
<summary><strong>8. Phân tích, liệt kê lấy mẫu các mã độc</strong></summary>
<div class="main-wrap">

<p><b>Mục đích: Phân tích các mã độc đang chiếm tỉ lệ cao, liệt kê các file liên quan</b> </p>

<p><b>Cách thực hiện:</b></p>

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
</details>

<details>
<summary><strong>9. Tạo và phân quyền tài khoản </strong></summary>

- **Mục đích:** Tạo tài khoản mới cho người dùng và giới hạn quyền hoạt động của tài khoản trong hệ thống.

**Cách thực hiện:** 

<p>**Bước 1:** Ở màn hình "Security" ấn "Create user"</p>

![alt text](/img/createuser1.png)

<p>**Bước 1:** Nhập thông tin user tiếp đó ấn "APPLY"</p>
- Thông tin: các trường nhập thông tin đều bắt buộc
    + Username: tên đăng nhập 
    + Password: một chuỗi 8 - 64 kí tự có ít nhật 1 chữ hoa và 1 kí tự đặc biệt
    + Confirm Password: phải trùng với password
    + Role: Vai trò của người dùng trong hệ thống ()

![alt text](/img/userinfor.png)

- Thông báo tạo tài khoản thành công và hiển thị tài khoản vừa tạo trong danh sách tài khoản

![alt text](/img/popuptaotkthanhcong.png)

</details>

<details>
<summary><strong>10. Tạo role, gán role cho một tài khoản hoặc một nhóm tài khoản </strong></summary>

- **Mục đích:** Tạo những vai trò với quyền hoạt động trong hệ thống hỗ trợ việc quản lý và vận hành.

**Cách thực hiện:** 

**Tạo vai trò trong hệ thống (Role):**

<p>**Bước 1:** Ở màn hình "Security" chọn "Roles" tiếp đó ấn "Create role"</p>

![alt text](/img/createrole1.png)

<p>**Bước 2:** Nhập thông tin role cần tạo tiếp đó ấn "Create role"</p>
- Thông tin:
    + Role name: tên đặt cho role đang tạo
    + Policies: quyền của role được hoạt động trong hệ thống

![alt text](/img/roleinfor.png)

**Gán vai trò cho user:**

<p>**Bước 1:** Ở màn hình "Security" chọn tài khoản muốn sửa quyền</p>

![alt text](/img/selectuser.png)

<p>**Bước 2:** Gán hoặc loại bỏ vai trò tiếp đó ấn "APPLY"</p>

![alt text](/img/roleuser.png)

</details>


Vai trò người dùng thực hiện (User Role Involved)
Tình huống ví dụ / minh họa (Example Scenario / Screenshot)

<details>
<summary><strong>11. Tạo rule để sớm phát hiện hành vi bất thường</strong></summary>

**Mục tiêu:** Tạo ra các quy tắc nếu trong hệ thống có máy trạm vi phạm quy tắc sẽ phát sinh cảnh báo thông báo cho người quản trị. 

**Mô tả chi tiết:** 
File rule là nơi định nghĩa điều kiện và hành vi mà EDR sẽ kiểm tra trên các log thu thập từ endpoint (máy tính, máy chủ,...). Nếu log khớp với rule, EDR sẽ:
  + Sinh cảnh báo (alert)
  + Gán mức độ nghiêm trọng (level)
  + Gắn nhãn (group, category)
  + Thực hiện hành động (response, isolate,... nếu có tích hợp)

**Thành phần liên quan:** CyberAI agent, rule, decoder, alert.

**Luồng xử lý:** 

<p align="center"><img src="/img/flowchartrule.png" alt="lowchart Rule" /></p>

**Vai trò người dùng thực hiện:** administrator

**Tình huống ví dụ:** Một trang web "forexample.com" là trang web không an toàn người quản trị sẽ tạo một file quy tắc nếu có máy trạm truy cập trang "forexample.com" sẽ phát sinh cảnh báo ở phần màn hình "Alerts" hay gửi thông báo cho quản trị viên qua slack, gmail,... kênh kết nối với CyberAI EDR.

```xml
<group name="web-log,forexample-monitor,">
  <rule id="100010" level="10">
    <decoded_as>json</decoded_as>
    <field name="url">.*forexample\.com.*</field>
    <description>Truy cập vào trang web forexample.com</description>
    <group>access,web,</group>
  </rule>
</group>
```

**Cách thực hiện:** 

***Cách 1 Thêm thủ công:***

<p>**Bước 1:** Ở màn hình "Rules" chọn "Manage rules files"</p>

![alt text](/img/managerulefile.png)

<p>**Bước 2:** Chọn "Add new rule file" Nhập tên rule, viết điều kiện tiếp đó ấn "SAVE". </p>

![alt text](/img/rulethucong.png)

***Cách 2 Import bằng file có sẵn:***

<p>**Bước 1:** Ở màn hình "Rules" chọn "Manage rules files"</p>

![alt text](/img/managerulefile.png)

<p>**Bước 2:** Ấn "Import files" chọn file rule từ máy tính tiếp đó ấn "Upload"</p>

![alt text](/img/importfiles.png)

<p align="center"><img src="/img/overwrite.png" alt="Menu EDR" /></p>

<p>***Lưu ý:*** khi tắt và mở chức năng overwrite là cho không cho phép hoặc cho phép ghi đè file upload trùng tên với file rule có sẵn trên hệ thống.</p>
</details>
