---
title: Tasks
sidebar_position: 1
---

## 1. Màn hình Template Tasks

- **Chức năng:** Hiển thị danh sách các tasks được tạo mẫu sẵn phù hợp để xử lý ngay trong một số lỗi phổ hoặc đã từng gặp phải.

![alt](/img/TemplateTasks.png)

- Các thành phần trong bảng.

| **Cột**           | **Ý nghĩa**                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| **TASK ID**       | Mã định danh duy nhất của từng tác vụ.                                    |
| **TASK NAME**     | Tên của tác vụ                                                            |
| **DESCRIPTION**   | Mô tả ngắn về nội dung hoặc hướng dẫn sử dụng tác vụ.                     |
| **CREATION TIME** | Thời gian tạo tác vụ (ngày, giờ, phút, giây).                             |
| **CREATOR NAME**  | Tài khoản tạo tác vụ                                                      |
| **LAST UPDATED**  | Thời gian tác vụ được chỉnh sửa lần cuối.                                 |
| **ACTION**        | Các biểu tượng thao tác như phân công, chi tiết, xoá.                     |

### 1.1. Nút "Create New task"
![alt text](/img/buttoncreatenewtask.png)

<p>**Chức năng:** Tạo task (tác vụ) có hành động để xử lý các incident (sự cố).</p>
<p>**Hướng dẫn:** Các trường có dấu sao màu đỏ cạnh tiêu là trường bắt buộc phải nhập, điền thông tin các trường 1,2,3,4 tương ứng theo ảnh sau đó ấn "Save".</p>

![alt](/img/createnewtask.png)

### 1.2. Nút "Create new incident"
![alt text](/img/createnewincedent.png)
<p>**Chức năng:** Tạo thêm incident (sự cố) và gán task, agent cho incident đó</p>

![alt text](/img/createnewincedent1.png)

<p>**Bước 1:** Nhập thông tin incident (các trường có dấu sao màu đỏ bên cạnh bắt buộc phải nhập)</p>

![alt text](/img/fillnewincedent.png)

<p>**Bước 2:** Gán thêm alert hoặc gỡ bỏ Alert khỏi incident</p>

* Ấn "Add alert" --> chọn Alert cần thêm --> Ấn "ADD" 

![alt text](/img/addalert.png)

* Tích chọn Alert --> Ấn "Remove"
![alt text](/img/RemoveAlert1.png)

<p>**Bước 3:** Bổ sung hoặc gỡ bỏ task xử lý incident</p>

* Ấn "Assign to tasks" -->  chọn task --> Ấn "ASSIGN"
![alt text](/img/assigntotasks.png)

* Chọn task --> Ấn "UNASSIGN"

![alt text](/img/unassigntotask.png)

<p>**Bước 4:** Bổ sung hoặc gỡ bỏ task xử lý incident</p>

* Ấn "Assign to agents" -->  chọn agent --> Ấn "ASSIGN"
![alt text](/img/assigntoagents.png)

* Chọn agents --> Ấn "UNASSIGN"

![alt text](/img/unassigntoagents.png)

<p>**Bước 5:** Kiểm tra lại thông tin ấn "SAVE"</p>

![alt text](/img/save.png)

### 1.3. Nút "Delete task"

* **Chức năng:** Xoá task đã tạo
* **Hướng dẫn:** Chọn task ấn "Delete task"

![alt text](/img/deletetask.png)

### 1.4. Các chức năng ở cột "ACTION"

* **Chức năng:** gồm các button cho phép assign incident, edit task, delete task.

![alt text](/img/taskbuttonaction.png)

## 2. Màn hình Instance Tasks

- **Instance task:** là danh sách các task tạo ra từ Template task để gán cho từng sự cố cụ thể. Chúng thể hiện chi tiết trạng hoạt động của từng task.

![alt](/img/InstanceTasks.png)

### 2.1. Cho phép lọc theo tên Agent

* **Chức năng:** Dùng filter lọc theo tên các agent để xem các task, trạng thái các task thực hiện trên agent đó.
![alt](/img/filterbyagent.png)

### 2.2. Filter theo trạng thái hoạt động của các task.

* **Chức năng:** lọc các trạng thái hoàn thành, mới được khởi tạo, đang chạy,... để quản trị viên dễ ràng kiểm soát các task hành động.
<p>Trong trường hợp cụ thể Filter trạng thái created để chạy task hay filter trạng thái running để dừng hoạt động của task.</p>

![alt](/img/filterbystatus.png)

![alt](/img/filterbystatus1.png)

### 2.3. Các chức năng ở cột "ACTION"

* **Chức năng:** gồm các button cho phép run, stop, delete, edit, xem chi tiết log.

![alt text](/img/InstanceTasksaction.png)





