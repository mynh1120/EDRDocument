---
title: Tasks
sidebar_position: 1
---

## 1 Màn hình Template Tasks

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
| **ACTION**        | Các hành động như gán Template Task cho Incident, xem chi tiết, xóa       |

### 1.1 Tạo tác vụ (Task) xử lý sự cố (Incident) 

- **Chức năng:** Tạo tác vụ (task) để xử lý các sự cố (incident).

![alt text](/img/buttoncreatenewtask.png)

* **Thao tác:** Điền thông tin các trường 1,2,3,4 tương ứng theo ảnh sau đó ấn "Save".
<p>Lưu ý: các trường có dấu "*" màu đỏ cạnh tiêu đề là trường bắt buộc phải nhập.</p>

![alt](/img/createnewtask.png)

### 1.2 Tạo sự cố (Incident)

![alt text](/img/createnewincedent.png)

- **Chức năng:** Tạo thêm sự cố (incident) và gán tác vụ, máy trạm cho sự cố đó

![alt text](/img/createnewincedent1.png)

**Bước 1:** Nhập thông tin sự cố (incident) 
<p>Lưu ý: các trường có dấu sao màu đỏ bên cạnh bắt buộc phải nhập.</p>

![alt text](/img/fillnewincedent.png)

**Bước 2:** Gán thêm alert hoặc gỡ bỏ Alert khỏi incident

* Ấn "Add alert" --> chọn Alert cần thêm --> Ấn "ADD" 

![alt text](/img/addalert.png)

* Tích chọn Alert --> Ấn "Remove"
![alt text](/img/RemoveAlert1.png)

**Bước 3:** Bổ sung hoặc gỡ bỏ task xử lý incident

* Ấn "Assign to tasks" -->  chọn task --> Ấn "ASSIGN"
![alt text](/img/assigntotasks.png)

* Chọn task --> Ấn "UNASSIGN"

![alt text](/img/unassigntotask.png)

**Bước 4:** Bổ sung hoặc gỡ bỏ task xử lý incident

* Ấn "Assign to agents" -->  chọn agent --> Ấn "ASSIGN"
![alt text](/img/assigntoagents.png)

* Chọn agents --> Ấn "UNASSIGN"

![alt text](/img/unassigntoagents.png)

**Bước 5:** Kiểm tra lại thông tin ấn "SAVE"

![alt text](/img/save.png)

### 1.3 Xoá tác vụ (task)
 
- **Chức năng:** Xoá tác vụ (Task) đã tạo

Cách 1:

* **Thao tác:** Chọn task cần xoá ấn "Delete task"

![alt text](/img/deletetask.png)

Cách 2:

* **Thao tác:** Xác định tác vụ cần xoá chọn biểu tượng    ấn "Delete task"

![alt text](/img/deletetask.png)

### 1.4 Gán sự tác vụ (Task) xử lý sự cố (Incident)

- **Chức năng:** gồm các button cho phép assign incident, edit task, delete task.

![alt text](/img/taskbuttonaction.png)

### 1.5 Sửa tác vụ (Task) đã tạo

![alt text](/img/taskbuttonaction.png)

### 1.6 Giới thiệu về file json 

**Chức năng:** File json chứa các hành động thực thi trên máy trạm để xử lý sự cố phát sinh.

- Cấu trúc tổng thể của file

```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": ,
          "module": {
            "name": ,
            "feature": ,
            "parameters": {
              "pids": [
              ]
            }
          },
          "timeout": ,
          "permission": 
        }
      ],
      "execution_parallel": 
    }
  },
  "command": "",
  "arguments": []
}
```

![alt text](/img/jsoncautruc.png)

| **Thành phần** |                          **Chức năng**                                         |
| -------------- | ------------------------------------------------------------------------------ |
| `command`      | Lệnh chính được gửi đến agent                                                  |
| `arguments`    | Danh sách tham số bổ sung cho lệnh `command`                                   |
| `alert`        | Phần chính chứa các hành động sẽ được thực thi khi có cảnh báo hoặc lệnh       |
| `data`         | Dữ liệu của hành động, bao gồm các `subtasks` (hành động con)                  |
| `subtasks`     | Danh sách các tác vụ con mà hệ thống cần thực hiện                             |
| `order`        | Dùng trong trường hợp các tác vụ chạy tuần tự                                  |
| `module.name`  | Module chịu trách nhiệm thực hiện hành động và xử lý tác vụ quản lý tiến trình |
| `feature`      | Tính năng mà module sẽ thực hiện – ví dụ: kết thúc một tiến trình              |
| `parameters`   | Tham số của hành động                                                          |
| `timeout`      | Thời gian cho phép thực thi hành động                                          |
| `permission`   | Cấp quyền cần thiết để thực hiện hành động                                     |

- Sử dụng ngoặc nhọn {} trong json
    - Mục đích: Biểu diễn một đối tượng (Object), dùng để gom nhóm các cặp key: value. Mỗi key là một chuỗi (string), và mỗi value có thể là: chuỗi, số, boolean, null,...
VD: "module" là một object chứa 3 cặp key: value. "parameters" là object con, chứa "enable": true.

```json
{
  "module": {
    "name": "self_protect",
    "feature": "manager_protect",
    "parameters": {
      "enable": true
    }
  }
}
```

- Sử dụng ngoặc vuông [] trong json
    - Mục đích: Biểu diễn một mảng (Array), dùng để chứa một danh sách các giá trị không gắn nhãn — giống như danh sách nhiều phần tử. Các phần tử có thể là: object {}, string "...", số 123, boolean true/false, mảng lồng nhau [], v.v.
VD: "pids" là một mảng chứa nhiều pids.

```json
{
  "order": 1,
  "module": {
    "name": "network",
    "feature": "unblock_net_pid",
    "parameters": {
      "pids": [
        1231,
        6345,
        87345
      ]
    }
  }
}
```

- Một số tác vụ thực thi thông qua pid của tiến trình: 
    + Thông tin pid của tiến trình trên window

![alt text](/img/pid.png)

- Lấy id tệp đính kèm gửi xuống máy trạm
    + File được upload sẽ sinh ra id
![alt text](/img/idfile.png)
    + Thay id file tải lên vào đây
![alt text](/img/thayidfile.png)

### 1.7 Các file json cơ bản

#### 1.7.1 Isolate: cách ly mạng khỏi hệ thống

```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "network",
            "feature": "isolate",
            "parameters": {}
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
#### 1.7.2 Unisolate: gỡ bỏ cô lập mạng: 

```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "network",
            "feature": "unisolate",
            "parameters": {}
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```

- Download_file: tải file xuống máy trạm
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "file",
            "feature": "download_file",
            "parameters": {
              "files": [
                "C:\\programdata\\update\\microsoft.bdd.wdsenum.exe"
              ]
            }
          },
          "timeout": 15000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```

- Kill process: cưỡng ép tắt tiến trình
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "file",
            "feature": "terminate_process",
            "parameters": {
              "pids": [
                7980
              ]
            }
          },
          "timeout": 5000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}

```
- Dump_process: tạo ra bản sao bộ nhớ của một tiến trình để phân tích
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "file",
            "feature": "dump_process",
            "parameters": {
              "pids": [
                123,
                456
              ]
            }
          },
          "timeout": 30000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
- Close_command: hủy một lệnh command thông qua command_uuid
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "command",
            "feature": "close_command",
            "parameters": {
              "command_uuid": "550e8400-e29b-41d4-a716-446655440000"
            }
          },
          "timeout": 3000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
- Execute_command: chạy lệnh command trên máy trạm. Trường hợp này là chạy lệnh "whoami" 
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "command",
            "feature": "execute_command",
            "parameters": {
              "command": "whoami"
            }
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
- Shut_down: tắt nguồn máy trạm 
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "computer",
            "feature": "shut_down",
            "parameters": {}
          },
          "timeout": 5000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0"
}
```
- Sleep: chuyển máy trạm về trạng thái ngủ
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "computer",
            "feature": "sleep",
            "parameters": {}
          },
          "timeout": 3000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0"
}
```
- Restart: khởi động lại máy trạm
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "computer",
            "feature": "restart",
            "parameters": {}
          },
          "timeout": 3000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0"
}
```
- List_service: Xem danh sách dịch vụ 
Liệt kê các dịch vụ (VD: docker, ssh, ...) phục vụ việc kiểm tra trạng thái hoạt động của dịch vụ
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "services",
            "feature": "list_services",
            "parameters": {}
          },
          "timeout": 3000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
- Stop_service: Dừng dịch vụ 
Cụ thể trong tường hợp này dừng dịch vụ ssh, ufw
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "services",
            "feature": "stop_service",
            "parameters": {
              "services": [
                "ssh",
                "ufw"
              ]
            }
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
- Run_service: chạy dịch vụ 
Cụ thể trong tường hợp này chạy dịch vụ ssh, ufw
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "services",
            "feature": "start_service",
            "parameters": {
              "services": [
                "ssh",
                "ufw"
              ]
            }
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
- Resume_process: tiếp tục chạy tiến trình
Cụ thể trong tường hợp này tiếp tục chạy các tiến trình có pids là 1231
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "process",
            "feature": "resume_process",
            "parameters": {
              "pids": [
                1231
              ]
            }
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
- Suspend_process: dừng chạy tiến trình
Cụ thể trong tường hợp này tiếp tục chạy các tiến trình có pids là 1231
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "process",
            "feature": "suspend_process",
            "parameters": {
              "pids": [
                1231,
                6345,
                87345
              ]
            }
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
- List_process: liệt kê danh sách tiến trình
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "process",
            "feature": "list_process",
            "parameters": {}
          },
          "timeout": 3000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0"
}
```
- Firewall_status: kiểm tra trạng thái tường lửa
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "network",
            "feature": "firewall_status",
            "parameters": {}
          },
          "timeout": 5000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0"
}
```
- Manage_firewall: quản lý tường lửa 
Nếu "enable": true (bật tường lửa) / enable": false (tắt tường lửa)
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "network",
            "feature": "manage_firewall",
            "parameters": {
              "enable": true
            }
          },
          "timeout": 5000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0"
}
```

- Block File: khóa tệp không cho phép truy cập mạng
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "network",
            "feature": "block_net_file",
            "parameters": {
              "files": [
                "/home/rust/pidcheck/client"
              ]
            }
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
- Unblock File: mở khóa tệp khỏi bị chặn truy cập mạng
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "network",
            "feature": "unblock_net_file",
            "parameters": {
              "files": [
                "/home/rust/pidcheck/client"
              ]
            }
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
- Block pid: Khoá thông qua pids
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "network",
            "feature": "block_net_pid",
            "parameters": {
              "pids": [
                123,
                456
              ]
            }
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}

- Unblock pid: Mở khoá thông qua pids

```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "network",
            "feature": "unblock_net_pid",
            "parameters": {
              "pids": [
                1231,
                6345,
                87345
              ]
            }
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```
- Block_ipv4: chặn máy thông qua ip
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "network",
            "feature": "block_ipv4",
            "parameters": {
              "ipv4s": [
                "192.168.111.43",
                "192.168.111.44"
              ]
            }
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}

- Unblock_ipv4: mở chặn máy thông qua ip
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "network",
            "feature": "unblock_ipv4",
            "parameters": {
              "ipv4s": [
                "192.168.111.43",
                "192.168.111.44"
              ]
            }
          },
          "timeout": 1000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```

- Manager_protect: Kích hoạt chế độ bảo vệ quản trị viên / thành phần quản lý khỏi bị tấn công, sửa đổi, hay gỡ cài đặt.
```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "self_protect",
            "feature": "manager_protect",
            "parameters": {
              "enable": true
            }
          },
          "timeout": 3000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```

- Protect Status: Kiểm tra trạng thái bảo vệ

```json
{
  "alert": {
    "data": {
      "subtasks": [
        {
          "order": 1,
          "module": {
            "name": "self_protect",
            "feature": "protect_status",
            "parameters": {}
          },
          "timeout": 5000,
          "permission": 3
        }
      ],
      "execution_parallel": true
    }
  },
  "command": "linux-remote-manager0",
  "arguments": []
}
```

## 2 Màn hình Instance Tasks

- **Chức năng:** Hiển thị danh sách các task tạo ra từ Template task để gán cho từng sự cố cụ thể. Chúng thể hiện chi tiết trạng hoạt động của từng task.

![alt](/img/InstanceTasks.png)

### 2.1 Hiển thị tác vụ theo tên máy trạm

- **Chức năng:** Lọc theo theo tên máy trạm để hiển thị các tác vụ được gán cho máy trạm.

![alt](/img/filterbyagent.png)

### 2.2 Hiển thị tác vụ theo trạng thái của tác vụ.

- **Chức năng:** lọc các trạng thái hoàn thành, mới được khởi tạo, đang chạy,... để quản trị viên dễ ràng kiểm soát các task hành động.

* **Thao tác:** Ở phần "Status" chọn trạng thái muốn hiển thị chọn "failed".
Hiển thị các tác vụ chạy không thành công

![alt](/img/failedtask.png)

### 2.3 Thực thi tác vụ đã tạo

- **Chức năng:** thực thi các tác vụ đã tạo, chạy lại tác vụ thất bại.
<p>Lưu ý: tác vụ ở trạng thái "running" không thể được thực thi.</p>

* **Thao tác:** Xác định tác vụ cần thực thi ấn nút ![alt text](/img/runicon.png) ở cột Action tiếp đó ấn "YES"

![alt text](/img/runtask.png)

### 2.4 Dừng tác vụ đang chạy

- **Chức năng:** Dừng tác vụ ở trạng thái "running" - đang chạy.

* **Thao tác:** Xác định tác vụ đang chạy cần dừng ấn nút ![alt text](/img/stopicon.png) ở cột Action tiếp đó ấn "YES"

![alt text](/img/stoptask.png)

### 2.5 Sửa tác vụ

- **Chức năng:** Sửa thông tin tác vụ đã tạo.

* **Thao tác:** 

**Bước 1:** Xác định tác vụ cần sửa chọn biểu tượng  ![alt text](/img/bachamicon.png) ở cột Action ấn "Edit task"

![alt text](/img/edittask.png)

**Bước 2:** Sửa thông tin mong muốn: 
- Thông tin:
    + Task Name: tên tác vụ
    + Description: mô tả về tác vụ 
    + Upload File: tài liệu, bộ cài muốn gửi tới agent nếu có
    + Task Detail: file json chứa các hành động muốn thực thi với agent.
![alt text](/img/editinfortask.png)

**Bước 3:** Gán thêm hoặc gỡ bỏ agent khỏi tác vụ

- Gán thêm: Ấn "Assign to agent" tích chọn agent cần thêm ấn "Assign"

![alt text](/img/assigntasktoagent.png)

- Gỡ agent đã gán: tích chọn agent muốn gỡ ấn "Unassign"

![alt text](/img/unassigntask.png)

### 2.6 Xoá tác vụ

- **Chức năng:** Xoá tác vụ

* **Thao tác:** Xác định tác vụ cần xoá chọn biểu tượng  ![alt text](/img/bachamicon.png)  ở cột Action ấn "Delete task"

![alt text](/img/deletetask1.png)

### 2.7 Xem chi tiết thông tin log của tác vụ

- **Chức năng:** xem chi tiết log của dịch vụ chạy thất bại hoặc đã hoàn thành

* **Thao tác:** 

**Bước 1:** Xác định tác vụ cần xem thông tin log ấn vào biểu tượng ![alt text](/img/eyeicon.png) ở cột Action

![alt text](/img/detaillog1.png)

**Bước 2:** Ở phần Task log xác định lần chạy tác vụ muốn xem ấn vào biểu tượng ![alt text](/img/eyeicon.png) ở cột Action

![alt text](/img/detaillog2.png)

**Bước 3:** Xem thông tin chi tiết tải về file "task configuration"

![alt text](/img/downloadtaskconfig.png)








