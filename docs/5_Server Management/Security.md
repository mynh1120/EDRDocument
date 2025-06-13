---
title: Security
sidebar_position: 5
---

# Màn hình Security

## 1. Màn hình quản lý USER 

![alt](/img/configurationSecurity.png)

- Các thành phần trong bảng:

| Thành phần         | Chức năng                                                       |
| ------------------ | --------------------------------------------------------------- |
| **User**           | Tên tài khoản người dùng trong hệ thống                         |
| **Allow run as**   | Cho phép user này thực hiện hành động thay mặt user khác        |
| **Roles**          | Danh sách các vai trò được gán cho user để xác định quyền hạn   |
| **Actions**        | Cho phép xoá user khỏi hệ thống (biểu tượng 🗑️)                |
| **Create user**    | Tạo mới một tài khoản người dùng                                |
| **Search bar**     | Tìm nhanh tài khoản trong danh sách                             |
| **Tabs trên cùng** | Chuyển đổi giữa các phần: Users, Roles, Policies, Roles mapping |

### 1.1. Mục đích của giao diện “Users”
- Mục đích
    + Mục tiêu chính là quản lý danh sách người dùng, bao gồm:
    + Cấp quyền truy cập hệ thống EDR.
    + Gán vai trò (roles) để phân quyền theo nhiệm vụ.
    + Cho phép hoặc từ chối thực thi hành động “run as” (đóng vai một user khác).
    + Xoá hoặc tạo người dùng mới.

* Một số roles hiện có

| Role            | Mô tả quyền                                     |
| --------------- | ----------------------------------------------- |
| `administrator` | Toàn quyền trên hệ thống                        |
| `agents_admin`  | Quản lý các agent (các endpoint đã cài Wazuh)   |
| `users_admin`   | Quản lý tài khoản người dùng                    |
| `role_incident` | Phân tích và xử lý sự cố bảo mật                |
| `develop`       | Vai trò dành cho người phát triển hoặc kiểm thử |

### 1.2. Nút "Create user" - tạo tài khoản

- Tạo tài khoản cho nhân viên mới

![alt](/img/createuser.png)

### 1.3. Nút "Delete user" - xoá tài khoản đã tạo

![alt](/img/deleteuser.png)

### 1.4. Tình huống sử dụng
+ Phân chia quyền theo chức năng được phân role.
+ Tạo tài khoản cho nhân viên mới.
+ Xem audit theo từng người để biết ai làm gì trong hệ thống qua các role và hành động.
+ Thu hồi quyền truy cập khi có người rời công ty hay chuyển cổng tác.
+ Bảo mật phân quyền chặt chẽ: chỉ phân quyền cần thiết theo tài khoản.

## 2. Màn hình Roles

### 2.1. Mục đích của giao diện Roles

* Quản lý vai trò (Roles) dùng để phân quyền truy cập và thao tác cho người dùng trong hệ thống.
* Một Role chứa một hoặc nhiều Policy (chính sách), giúp xác định user đó được phép làm gì.

![alt](/img/deleteuser.png)

* Các thành phần trong bảng:

| Thành phần      | Chức năng                                                                          |
| --------------- | ---------------------------------------------------------------------------------- |
| **ID**          | Mã định danh duy nhất cho mỗi Role                                                 |
| **Name**        | Tên của Role (vai trò)                                                             |
| **Policies**    | Danh sách các quyền hạn cụ thể mà Role đó được phép thực hiện                      |
| **Status**      | Trạng thái role (VD: `Reserved` là role hệ thống mặc định, không thể sửa hoặc xóa) |
| **Actions**     | Xoá Role (trừ role “Reserved”)                                                     |

* Giải thích quyền theo role 

| Role            | Mô tả                                                                                |
| --------------- | ------------------------------------------------------------------------------------ |
| `administrator` | Toàn quyền hệ thống — xem, sửa, xoá, cập nhật mọi thứ                                |
| `readonly`      | Chỉ có quyền xem (read-only) tài nguyên liên quan đến agent, cluster, rules...       |
| `users_admin`   | Quản lý tài khoản người dùng: tạo, xoá, phân quyền user                              |
| `agents_admin`  | Quản lý các agent đang giám sát các endpoint                                         |
| `role_incident` | Xử lý sự cố bảo mật: tạo, đọc, cập nhật, xoá incident                                |
| `develop`       | Có quyền thao tác sâu hơn: sự kiện, tác vụ, dashboard... phục vụ phát triển hệ thống |
| `cluster_admin` | Quản lý hạ tầng cluster trong hệ thống EDR                                           |

* Chức năng Policies thường gặp:

| Policy                                | Ý nghĩa                               |
| ------------------------------------- | ------------------------------------- |
| `agents_all_agents`                   | Truy cập và thao tác với tất cả agent |
| `users_all_users`                     | Toàn quyền trên user                  |
| `incident_create` / `incident_update` | Tạo hoặc cập nhật báo cáo sự cố       |
| `dashboard_manager`                   | Quản lý bảng điều khiển               |
| `task_status_task`                    | Xem trạng thái tác vụ                 |
| `logtest_all_logtest`                 | Phân tích log mẫu                     |

### 2.2. Nút "Create role" - tạo vai trò và quyền được thực hiện

- Role name: Tên của vai trò mới do bạn đặt. Trong ảnh là “Quyền admin” – đây chỉ là nhãn hiển thị, không ảnh hưởng đến quyền thực sự.
- Policies: Danh sách các chính sách bạn muốn gán cho vai trò này. Mỗi policy đại diện cho một hành động hoặc phạm vi quyền nhất định.

![alt](/img/createrole.png)

### 2.3. Nút "Delete role" - xoá role đã tạo

![alt text](/img/deleterole.png)

### 2.4. Thêm, xoá Policies của role đã tạo

- Chọn role đã tạo

![alt text](/img/selectrole.png)

- Thêm Policies: Nhập Policies cần thêm --> Ấn "Add Policies"

![alt text](/img/addpolices.png)

- Xoá Policies: Ấn biểu tượng "thùng rác" để xoá Policies

![alt text](/img/deletepolices.png)

### 2.5. Tình huống sử dụng
- Phân quyền theo bộ phận: - Admin cấp `administrator`- Nhân sự dùng `users_admin`- IT dùng `agents_admin` hoặc `develop`
- Tạo Role tùy chỉnh: Tạo role chỉ chứa các policies cần thiết để tránh lạm quyền
- Hạn chế truy cập: Dùng `readonly`, `agents_readonly` hoặc `cluster_readonly` để đảm bảo người dùng chỉ xem được dữ liệu
- Phân vai xử lý sự cố: Gán `role_incident` cho các analyst hoặc SOC để họ xử lý incident mà không cần quyền admin 
- Điều chỉnh quyền đã phân cho các role.

## 3. Màn hình Policies

### 3.1. Mục đích của giao diện "Policies"

- Quản trị viên xem, tạo hoặc sửa đổi các chính sách (policies) để kiểm soát quyền truy cập và hành động trong hệ thống.
- Mỗi policy là một tập hợp các quyền thao tác (actions) trên các nguồn tài nguyên (resources) với một hiệu lực (effect) như allow hoặc deny.
- Giao diện này là nơi bạn xây dựng hoặc hiệu chỉnh quyền chi tiết, sau đó gán vào Roles → rồi gán Role cho người dùng.

![alt](/img/policies.png)

- Các thành phần trong bảng: 

| Cột                        | Ý nghĩa                                                                                |
| -------------------------- | -------------------------------------------------------------------------------------- |
| **ID**                     | Mã định danh của policy                                                                |
| **Name**                   | Tên chính sách (VD: `agents_all_agents`)                                               |
| **Actions**                | Các hành động được phép (VD: `agent:delete`, `group:read`)                             |
| **Resources**              | Phạm vi tài nguyên áp dụng (VD: `agent:id:*`)                                          |
| **Effect**                 | Cho phép (`allow`) hay từ chối (`deny`) hành động                                      |
| **Status**                 | Trạng thái của policy, `Reserved` nghĩa là chính sách hệ thống không được xóa hoặc sửa |
| **Actions (cột bên phải)** | Cho phép xóa policy nếu không phải Reserved                                            |

### 3.2. Nút "Create Policy"

![alt](/img/createpolices.png)

- Nhập các thông tin thứ tự lần lượt theo ảnh: 
    + Policy name: Tên chính sách bạn muốn tạo, ví dụ `agents_create_all`                                                                     
    + Action: Hành động cụ thể mà người dùng có thể thực hiện (VD: `agent:create`, `agent:delete`, `group:read`, `security:update`, ...) 
    + Resource: Loại tài nguyên áp dụng hành động (VD: `agent:id:*`, `group:id:*`, `user:id:*`, `*` cho tất cả)                           
    + Resource identifier: Giá trị định danh của tài nguyên (nhập `*` nếu áp dụng cho tất cả)                                                                               
    + Select an effect: Hiệu lực của policy: `Allow` (cho phép) hoặc `Deny` (từ chối) 
- Nhập xong thông tin ấn nút "Create policy" để tạo chính sách.                     

### 3.3. Tình huống sử dụng thực tế
- Cho phép nhân viên vận hành đọc thông tin tất cả agent
- Tạo chính sách để chặn xóa người dùng
- Chỉ cho phép tạo nhóm

## 4. Màn hình Roles mapping

### 4.1. Mục đích của giao diện "Roles mapping"

- Gán vai trò (roles) cho người dùng hoặc nhóm người dùng cụ thể.
- Quyết định người dùng nào được cấp quyền truy cập nào, dựa trên các Role đã định nghĩa (Role chứa các Policy).
- Là bước quan trọng trong quản trị phân quyền theo RBAC (Role-Based Access Control).

![alt](/img/rolesmapping.png)

- Các thành phần trong bảng: 

| Thành phần              | Mô tả                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **ID**                  | Mã định danh tự tăng của bản mapping                                                                               |
| **Name**                | Tên định danh của role mapping (ví dụ: `wui_elastic_admin`)                                                        |
| **Roles**               | Danh sách các **vai trò (Role)** được ánh xạ tới người dùng                                                        |
| **Status**              | Trạng thái của bản mapping: `Reserved`: mapping mặc định không được sửa, `wazuh-wui`: thuộc nhóm hệ thống          |
| **Actions**             | Xoá bản ánh xạ nếu không còn cần thiết (chỉ áp dụng cho bản có thể chỉnh sửa)                                      |

### 4.2. Nút "Creat mapping" - Tạo ánh xạ vai trò mới

- **Thao tác:** Ấn nút "Create Role Mapping" --> Nhập thông tin --> Ấn "Save role mapping".

![alt](/img/createmappingrole.png)

### 4.3. Tình huống sử dụng thực tế
- Cấp toàn quyền admin cho người dùng "admin01".
- Cho phép nhóm "devops" chỉ xem thông tin agent .
- Phân quyền riêng cho đội phát triển.





