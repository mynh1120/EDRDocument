---
sidebar_position: 3
title: Advanced settings
id: advanced settings
---
Đây là các thiết lập nâng cao, Các tinh chỉnh bạn thực hiện ở đây có thể phá vỡ phần lớn bảng điều khiển. Một số thiết lập này có thể không được ghi chép, không được hỗ trợ hoặc mang tính thử nghiệm. Nếu một trường có giá trị mặc định, việc xóa trường sẽ đặt lại trường về giá trị mặc định, điều này có thể không được chấp nhận do các chỉ thị cấu hình khác
<p align="center">
   <img src="/img/Setting/Dash/as.png" alt="Menu EDR" />
</p>

<p><b>1. General</b></p>

Mục này là phần "General" trong giao diện cài đặt ứng dụng, chứa các cài đặt cơ bản liên quan đến xuất dữ liệu, định dạng ngày giờ, chỉ mục mặc định, và giới hạn hiển thị. Các cài đặt cụ thể gồm:

<p align="center">
   <img src="/img/Setting/Dash/genset1.png" alt="Menu EDR" />
</p>

- Quote CSV values: Xác định liệu các giá trị trong xuất CSV có nên được đặt trong dấu ngoặc kép hay không. Giá trị hiện tại là "Off".

- CSV separator: Ký tự phân tách cho các giá trị xuất CSV. Hiện tại để trống.

- Date format: Định dạng ngày giờ được sử dụng khi hiển thị ngày giờ được định dạng đẹp. Giá trị hiện tại là "MMM D, YYYY @ HH:mm:ss".

- Day of week: Ngày bắt đầu tuần. Giá trị hiện tại là "Sunday".

- Scaled date format: Định dạng ngày giờ sử dụng trong các tình huống dựa trên thời gian, với các khoảng thời gian tự động điều chỉnh. Giá trị hiện tại là một cấu hình JSON phức tạp.

- Timezone for date formatting: Múi giờ được sử dụng cho định dạng ngày giờ. Giá trị hiện tại là "Browser" (tự động theo trình duyệt).

- Date with nanoseconds format: Định dạng ngày giờ với độ chính xác nanosecond, dùng cho kiểu dữ liệu OpenSearch. Giá trị hiện tại là "MMM D, YYYY @ HH:mm:ss.SSSSSSS".

- Default index: Chỉ mục mặc định để truy cập nếu không có chỉ mục nào được đặt. Giá trị hiện tại là "wazuh-alerts-*", có thể đặt lại.

- Default route: Đường dẫn mặc định khi mở OpenSearch Dashboards. Giá trị hiện tại là "/app/home", không thể thay đổi vì được định nghĩa bởi máy chủ OpenSearch Dashboards.

- Popular fields limit: Số lượng trường phổ biến nhất để hiển thị. Giá trị hiện tại là "10".

- Popular fields limit: Số lượng trường phổ biến nhất trong top N để hiển thị. Giá trị hiện tại là "10".

<p align="center">
   <img src="/img/Setting/Dash/genset2.png" alt="Menu EDR" />
</p>

- Filter editor suggest values: Bật/tắt gợi ý giá trị trong bộ chỉnh sửa bộ lọc. Giá trị hiện tại là "On".

- Pin filters by default: Xác định liệu bộ lọc có được ghim mặc định hay không. Giá trị hiện tại là "Off".

- Bytes format: Định dạng số mặc định cho kiểu "bytes". Giá trị hiện tại là "0.0.[0]B".

- Currency format: Định dạng số mặc định cho kiểu "currency". Giá trị hiện tại là "$0,0.00".

- Field type format name: Bản đồ định dạng mặc định cho từng kiểu trường, sử dụng cấu hình JSON phức tạp. Giá trị hiện tại bao gồm các kiểu như "date", "number", "boolean", "string", v.v.

- Formatting locale: Ngôn ngữ định dạng số. Giá trị hiện tại là "en".

- Number format: Định dạng số mặc định cho kiểu "number". Giá trị hiện tại là "0,0.000".

- Percent format: Định dạng số mặc định cho kiểu "percent". Giá trị hiện tại là "0.0[0]%".

- Target bars: Số lượng cột mục tiêu khi sử dụng "auto" interval trong biểu đồ histogram. Giá trị hiện tại là "50".

- Maximum bars: Giới hạn tối đa số cột trong biểu đồ histogram, có thể mở rộng nếu cần. Giá trị hiện tại là "100".

- History limit: Số lượng giá trị gần đây nhất để hiển thị (ví dụ: đầu vào truy vấn). Giá trị hiện tại là "10".

- Use New Home Page: Bật/tắt thử nghiệm trang chủ mới. Giá trị hiện tại là "Off".

<p align="center">
   <img src="/img/Setting/Dash/genset3.png" alt="Menu EDR" />
</p>

- Index pattern placeholder: Tên mẫu chỉ mục mặc định trong "Management > Index Patterns". Giá trị hiện tại để trống.

- Meta fields: Các trường meta nằm ngoài nguồn dữ liệu để hiển thị trong tài liệu. Giá trị hiện tại là "_source, _index", có thể đặt lại về mặc định.

- Maximum buckets: Số lượng tối đa bucket mà một nguồn dữ liệu có thể chứa. Giá trị hiện tại là "2000".

- Allow leading wildcards in query: Cho phép ký tự đại diện (*) làm ký tự đầu tiên trong truy vấn. Giá trị hiện tại là "On".

- Query string options: Tùy chọn cho bộ phân tích chuỗi truy vấn Lucene, chỉ áp dụng khi "Query language" được đặt thành Lucene. Giá trị hiện tại là cấu hình JSON với "allowLeadingWildcard" là "true".

- Objects listing limit: Số lượng đối tượng để lấy cho các trang liệt kê. Giá trị hiện tại là "1000".

- Objects per page: Số lượng đối tượng hiển thị trên mỗi trang trong hộp thoại tải. Giá trị hiện tại là "20".

- Query language: Ngôn ngữ truy vấn được sử dụng, với DQL là ngôn ngữ mới dành riêng cho OpenSearch Dashboards. Giá trị hiện tại là "DQL".

- Shorten fields: Rút ngắn tên trường dài (ví dụ: foo.bar.baz thành f.b.baz). Giá trị hiện tại là "Off".

- Sort options: Tùy chọn cho tham số sắp xếp của OpenSearch. Giá trị hiện tại là cấu hình JSON với "unmapped_type" là "boolean".

- Store URLs in session storage: Lưu URL trong bộ nhớ phiên để hỗ trợ trình duyệt xử lý dữ liệu lớn. Giá trị hiện tại là "Off".

<p align="center">
   <img src="/img/Setting/Dash/genset4.png" alt="Menu EDR" />
</p>

- Time filter quick ranges: Danh sách các khoảng thời gian hiển thị trong phần "Quick" của bộ lọc thời gian. Giá trị hiện tại là một mảng JSON với các khoảng như "Today", "This week", "Last 15 minutes", "Last 30 minutes", "Last 1 hour", "Last 24 hours", v.v.

- Time filter refresh interval: Khoảng thời gian làm mới mặc định của bộ lọc thời gian, được chỉ định bằng mili giây. Giá trị hiện tại là một cấu hình JSON với "pause" là false và "value" là 0.

- Time filter defaults: Giá trị mặc định của bộ lọc thời gian khi OpenSearch Dashboards khởi động mà không có lựa chọn nào. Giá trị hiện tại là một mảng JSON với các khoảng như "now-24h" đến "now" và "now-15m" đến "now", có thể đặt lại về mặc định.

- Maximum table cell height: Chiều cao tối đa mà một ô trong bảng có thể chiếm, đặt thành 0 để vô hiệu hóa cắt bớt. Giá trị hiện tại là "115".

<p><b>2. Appearance</b></p>

Phần Appearance tập trung vào các tùy chọn giao diện người dùng của OpenSearch Dashboards. Các cài đặt cụ thể bao gồm:

<p align="center">
   <img src="/img/Setting/Dash/apper.png" alt="Menu EDR" />
</p>

- Disable Animations: Tắt tất cả các hoạt ảnh không cần thiết trong giao diện OpenSearch Dashboards. Cần làm mới trang để áp dụng thay đổi. Giá trị hiện tại là "Off".

- Side nav style: Thay đổi kiểu điều hướng bên (side navigation). Giá trị hiện tại là "Modern".

- Dark mode: Bật chế độ tối cho giao diện OpenSearch Dashboards. Cần làm mới trang để áp dụng. Giá trị hiện tại là "On", mặc định là "False", có thể đặt lại về mặc định.

- Theme version: Chuyển đổi giữa các chủ đề được sử dụng cho phiên bản hiện tại và tiếp theo của OpenSearch Dashboards. Cần làm mới trang để áp dụng. Giá trị hiện tại là "v7".

- Theme feedback: Liên kết để gửi phản hồi về chủ đề (hiện tại là một liên kết màu xanh).

<p><b>3. Discover</b></p>

Mục này là phần cài đặt trong tab "Discover" của giao diện ứng dụng, chứa các tùy chọn liên quan đến hiển thị và hành vi của dữ liệu. Các cài đặt cụ thể bao gồm:

<p align="center">
   <img src="/img/Setting/Dash/discover.png" alt="Menu EDR" />
</p>

- Context size: Số lượng mục nhập xung quanh để hiển thị trong chế độ xem ngữ cảnh. Giá trị hiện tại là "5".

- Context size step: Bước tăng/giảm kích thước ngữ cảnh. Giá trị hiện tại là "5".

- Tie breaker fields: Danh sách các trường để phân loại giữa các tài liệu có cùng giá trị timestamp, lấy trường đầu tiên có mặt và có thể sắp xếp. Giá trị hiện tại là "doc".

- Default columns: Cột được hiển thị mặc định trong tab Discover. Giá trị hiện tại là "source".

- Number of terms: Số lượng thuật ngữ được trực quan hóa khi nhấp vào nút "Visualize" trong danh sách thả xuống của trường trong thanh bên Discover. Giá trị hiện tại là "20".

- Modify columns when changing index patterns: Xóa cột không khả dụng khi thay đổi mẫu chỉ mục. Giá trị hiện tại là "On".

- Number of rows: Số hàng hiển thị trong bảng. Giá trị hiện tại là "500".

- Search on page load: Thực hiện tìm kiếm khi tải tab Discover, không ảnh hưởng đến tìm kiếm đã lưu. Giá trị hiện tại là "On".

- Default sort direction: Hướng sắp xếp mặc định cho mẫu chỉ mục dựa trên thời gian trong ứng dụng Discover. Giá trị hiện tại là "Descending".

- Hide 'Time' column: Ẩn cột "Time" trong Discover và tất cả Saved Searches trên Dashboards. Giá trị hiện tại là "Off".

- Highlight results: Làm nổi bật kết quả trong Discover và Saved Searches Dashboards, có thể làm chậm khi làm việc với tài liệu lớn. Giá trị hiện tại là "On".

<p><b>4. DiscoverEvent</b></p>

Discover Event chứa các tùy chọn liên quan đến hiển thị và hành vi của dữ liệu trong tab Discover. Các cài đặt cụ thể bao gồm:

<p align="center">
   <img src="/img/Setting/Dash/de.png" alt="Menu EDR" />
</p>

- Context size: Số lượng mục nhập xung quanh để hiển thị trong chế độ xem ngữ cảnh. Giá trị hiện tại là "5".

- Context size step: Bước tăng/giảm kích thước ngữ cảnh. Giá trị hiện tại là "5".

- Tie breaker fields: Danh sách các trường để phân loại giữa các tài liệu có cùng giá trị timestamp, lấy trường đầu tiên có mặt và có thể sắp xếp. Giá trị hiện tại là "doc".

- Hide 'Time' column: Ẩn cột "Time" trong Discover và tất cả Saved Searches trên Dashboards. Giá trị hiện tại là "Off".

- Number of terms: Số lượng thuật ngữ được trực quan hóa khi nhấp vào nút "Visualize" trong danh sách thả xuống của trường trong thanh bên DiscoverEvent. Giá trị hiện tại là "20".

- Modify columns when changing index patterns: Xóa cột không khả dụng khi thay đổi mẫu chỉ mục. Giá trị hiện tại là "On".

- Number of rows: Số hàng hiển thị trong bảng. Giá trị hiện tại là "500".

- Search on page load: Thực hiện tìm kiếm khi tải tab Discover, không ảnh hưởng đến tìm kiếm đã lưu. Giá trị hiện tại là "On".

- Default sort direction: Hướng sắp xếp mặc định cho mẫu chỉ mục dựa trên thời gian trong ứng dụng Discover. Giá trị hiện tại là "Descending".

<p><b>5. Event</b></p>

Mục này mô tả các tùy chọn hiển thị trong tab Discover

<p align="center">
   <img src="/img/Setting/Dash/event.png" alt="Menu EDR" />
</p>

- Default columns: Cột được hiển thị mặc định trong tab Discover. Giá trị hiện tại là "source".

<p><b>6. Notifications</b></p>

Mục này chứa các tùy chọn liên quan đến thời gian hiển thị các loại thông báo khác nhau. Các cài đặt cụ thể bao gồm:

<p align="center">
   <img src="/img/Setting/Dash/notifi.png" alt="Menu EDR" />
</p>

- Custom banner notification: Một thông báo dạng banner tùy chỉnh dành cho thông báo tạm thời đến tất cả người dùng, hỗ trợ Markdown. Hiện tại để trống.

- Banner notification lifetime: Thời gian (tính bằng mili giây) mà thông báo banner sẽ hiển thị trên màn hình, đặt thành vô hạn để vô hiệu hóa. Giá trị hiện tại là "300000" (5 phút).

- Error notification lifetime: Thời gian (tính bằng mili giây) mà thông báo lỗi sẽ hiển thị trên màn hình, đặt thành vô hạn để vô hiệu hóa. Giá trị hiện tại là "300000" (5 phút).

- Info notification lifetime: Thời gian (tính bằng mili giây) mà thông báo thông tin sẽ hiển thị trên màn hình, đặt thành vô hạn để vô hiệu hóa. Giá trị hiện tại là "5000" (5 giây).

- Warning notification lifetime: Thời gian (tính bằng mili giây) mà thông báo cảnh báo sẽ hiển thị trên màn hình, đặt thành vô hạn để vô hiệu hóa. Giá trị hiện tại là "10000" (10 giây).

<p><b>7. Search</b></p>

Mục này là phần "Search" trong giao diện cài đặt ứng dụng, chứa các tùy chọn liên quan đến cách xử lý yêu cầu tìm kiếm. Các cài đặt cụ thể bao gồm:

<p align="center">
   <img src="/img/Setting/Dash/search.png" alt="Menu EDR" />
</p>

- Batch concurrent searches: Khi tắt, các bảng điều khiển dashboard sẽ tải riêng lẻ và yêu cầu tìm kiếm sẽ bị hủy khi người dùng chuyển trang hoặc cập nhật truy vấn. Khi bật, các bảng điều khiển sẽ tải cùng nhau sau khi tất cả dữ liệu được tải và không hủy yêu cầu. Giá trị hiện tại là "Off".

- Custom request preference: Ưu tiên yêu cầu được sử dụng khi courier:setRequestPreference được đặt thành "custom". Giá trị hiện tại là "local".

- Ignore filter(s): Tăng cường hỗ trợ cho dashboard chứa trực quan hóa truy cập chỉ mục không tương thích. Khi bật, bộ lọc sẽ bị bỏ qua cho trực quan hóa nếu chỉ mục không chứa bộ lọc. Giá trị hiện tại là "Off".

- Max Concurrent Shard Requests: Điều khiển cài đặt max_concurrent_shard_requests dùng cho yêu cầu tìm kiếm gửi bởi OpenSearch Dashboards. Đặt thành 0 để vô hiệu hóa và sử dụng mặc định của OpenSearch. Giá trị hiện tại là "0".

- Request preference: Cho phép đặt shard nào xử lý yêu cầu tìm kiếm. Giá trị hiện tại là "Session ID".

- Search in frozen indices: Khi bật, tìm kiếm qua chỉ mục frozen có thể tăng thời gian tìm kiếm. Giá trị hiện tại là "Off".

<p><b>8. Timeline</b></p>

Phần timeline chứa các tùy chọn liên quan đến chỉ mục, trường thời gian, và cấu hình đồ thị. Các cài đặt cụ thể bao gồm:

<p align="center">
   <img src="/img/Setting/Dash/timeline.png" alt="Menu EDR" />
</p>

- Default index: Chỉ mục mặc định để tìm kiếm với OpenSearch. Giá trị hiện tại là "all".

- Time field: Trường mặc định chứa timestamp khi sử dụng OpenSearch. Giá trị hiện tại là "@timestamp".

- Graphite URL: URL của host Graphite (thử nghiệm). Hiện tại để trống.

- Maximum buckets: Số lượng tối đa bucket mà một nguồn dữ liệu có thể trả về. Giá trị hiện tại là "2000", có thể đặt lại về mặc định.

- Minimum interval: Khoảng thời gian nhỏ nhất được tính toán khi sử dụng "auto". Giá trị hiện tại là "1ms".

- Quandl key: Khóa API từ www.quandl.com (thử nghiệm). Giá trị hiện tại là "someKeyHere".

- Target buckets: Số lượng bucket mục tiêu khi sử dụng auto intervals. Giá trị hiện tại là "200".

<p><b>9. Visualization</b></p>

Mục này chứa các tùy chọn liên quan đến hiển thị và hiệu suất của trực quan hóa. Các cài đặt cụ thể bao gồm:

<p align="center">
   <img src="/img/Setting/Dash/visua.png" alt="Menu EDR" />
</p>

- Color mapping: Bản đồ giá trị sang màu sắc trong trực quan hóa. Giá trị hiện tại là một cấu hình JSON với mã màu "#548B9".

- Dimming opacity: Độ mờ của các mục trong biểu đồ khi làm nổi bật một phần tử khác, nằm giữa 0 và 1. Giá trị hiện tại là "0.5".

- Enable plugin augmentation: Bật chức năng bổ trợ plugin từ các trực quan hóa dạng biểu đồ. Giá trị hiện tại là "On".

- Max number of associated augmentations: Số lượng tối đa các bổ trợ liên kết, vượt quá 10 có thể ảnh hưởng đến hiệu suất và chi phí vận hành cụm. Giá trị hiện tại là "10".

- Heatmap maximum buckets: Số lượng tối đa bucket mà một nguồn dữ liệu có thể trả về trong heatmap, một số lớn hơn có thể ảnh hưởng đến hiệu suất trình duyệt. Giá trị hiện tại là "50".

- Custom vector map size: Số lượng tối đa đặc trưng để tải từ bản đồ vector tùy chỉnh, một số lớn hơn có thể ảnh hưởng đến hiệu suất. Giá trị hiện tại là "1000".

- Show region map warnings: Hiển thị cảnh báo bản đồ vùng khi các thuật ngữ không thể được nối với một hình dạng trên bản đồ. Giá trị hiện tại là "On".

- Default WMS properties: Thuộc tính mặc định cho máy chủ bản đồ WMS trong bản đồ tọa độ, bao gồm các cấu hình JSON chi tiết. Giá trị hiện tại là một cấu hình với "enabled" là false và các tham số khác.

- Maximum tile map precision: Độ chính xác tối đa của bản đồ gạch (tile maps), từ 0 đến 12. Giá trị hiện tại là "7".

- Disable visualizations bucket aggregation types: Danh sách các loại tổng hợp bucket bị vô hiệu hóa trong trực quan hóa. Giá trị hiện tại để trống.

- Enable experimental visualizations: Bật các trực quan hóa thử nghiệm, chỉ người dùng được phép mới có thể tạo hoặc chỉnh sửa. Giá trị hiện tại là "On".
