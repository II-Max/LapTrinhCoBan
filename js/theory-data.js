/**
 * Python Basics Theory Dataset
 * Chứa nội dung lý thuyết chi tiết, chuẩn xác và dễ hiểu nhất dành cho sinh viên mới nhập môn lập trình.
 */
const THEORY_DATA = [
  {
    id: "intro",
    title: "1. Khởi động với Python & Cú pháp cơ bản",
    summary: "Tìm hiểu ngôn ngữ Python, quy tắc thụt dòng (Indentation), cách viết chú thích và chương trình 'Hello World'.",
    badge: "Bắt đầu",
    time: "10 phút",
    content: `
      <h3>1.1. Python là gì? Tại sao người mới nên học Python?</h3>
      <p>Python là một ngôn ngữ lập trình bậc cao, thông dịch (interpreted), hướng đối tượng và có cú pháp cực kỳ trong sáng, gần gũi với tiếng Anh thông thường. Với triết lý <em>"Đơn giản tốt hơn phức tạp" (The Zen of Python)</em>, Python giúp bạn tập trung vào tư duy thuật toán và giải quyết vấn đề thay vì phải đánh vật với cú pháp rườm rà.</p>
      
      <div class="tip-box">
        <strong>💡 Lời khuyên cho tân sinh viên:</strong> Python được ứng dụng rộng rãi từ Lập trình Web (Django, Flask), Tự động hóa tác vụ (Automation), Trí tuệ nhân tạo (AI & Machine Learning), đến Xử lý dữ liệu (Data Science). Nắm vững Python là bước đệm tuyệt vời cho sự nghiệp công nghệ của bạn!
      </div>

      <h3>1.2. Thụt dòng (Indentation) - Quy tắc sống còn trong Python!</h3>
      <p>Nếu như các ngôn ngữ như C, C++, Java dùng cặp dấu ngoặc nhọn <code>{ }</code> để bao bọc các khối lệnh (code block), thì <strong>Python sử dụng thụt dòng (khoảng trắng)</strong> để xác định phạm vi khối lệnh.</p>
      <ul>
        <li>Tiêu chuẩn quốc tế (PEP 8) khuyến nghị dùng <strong>4 dấu cách (4 spaces)</strong> cho mỗi cấp độ thụt dòng.</li>
        <li><strong>Tuyệt đối không trộn lẫn</strong> giữa phím <code>Tab</code> và phím <code>Space</code> vì sẽ gây lỗi <code>IndentationError</code> hoặc <code>TabError</code>.</li>
      </ul>

      <pre><code class="language-python"># Ví dụ về thụt lề chuẩn:
if True:
    print("Dòng này thụt vào 4 khoảng trắng")
    print("Dòng này cùng nằm trong khối lệnh if")
print("Dòng này nằm ngoài khối if")
</code></pre>

      <h3>1.3. Viết chú thích (Comments) trong mã nguồn</h3>
      <p>Chú thích giúp người khác (và chính bạn trong tương lai) hiểu được ý đồ đoạn mã mà không ảnh hưởng tới việc thực thi chương trình.</p>
      <pre><code class="language-python"># Đây là chú thích trên 1 dòng

x = 10  # Chú thích nằm sau câu lệnh

"""
Đây là chuỗi tài liệu (Docstring) hoặc chú thích
nhiều dòng. Thường dùng để ghi chú mục đích của hàm
hoặc thông tin module.
"""
</code></pre>

      <h3>1.4. Chương trình đầu tiên: Hello, World!</h3>
      <p>Trong Python, để in ra màn hình bất kỳ thứ gì, bạn chỉ cần dùng hàm built-in <code>print()</code>:</p>
      <pre><code class="language-python">print("Xin chào! Tôi bắt đầu học Python!")
</code></pre>
    `
  },
  {
    id: "variables_types",
    title: "2. Biến & Các kiểu dữ liệu cơ bản",
    summary: "Nắm vững các kiểu dữ liệu nền tảng: int, float, str, bool, None và cơ chế ép kiểu (Type Casting).",
    badge: "Cốt lõi",
    time: "15 phút",
    content: `
      <h3>2.1. Biến (Variables) trong Python</h3>
      <p>Trong Python, bạn <strong>không cần khai báo kiểu dữ liệu</strong> trước cho biến (đây gọi là cơ chế Dynamic Typing - định kiểu động). Biến sẽ tự động nhận kiểu dữ liệu tùy theo giá trị được gán cho nó.</p>
      <pre><code class="language-python"># Khai báo và gán giá trị
tuoi = 19               # Kiểu số nguyên (int)
diem_tb = 8.75          # Kiểu số thực (float)
ho_ten = "Nguyen Van A" # Kiểu chuỗi (str)
la_sinh_vien = True     # Kiểu logic (bool)
</code></pre>

      <div class="warning-box">
        <strong>⚠️ Quy tắc đặt tên biến chuẩn PEP 8:</strong>
        <ul>
          <li>Chỉ gồm chữ cái (a-z, A-Z), chữ số (0-9) và dấu gạch dưới <code>_</code>.</li>
          <li><strong>Không</strong> bắt đầu bằng chữ số (ví dụ: <code>1diem</code> là sai, phải là <code>diem_1</code>).</li>
          <li>Phân biệt chữ hoa và chữ thường: <code>age</code> khác với <code>Age</code> hay <code>AGE</code>.</li>
          <li>Tránh trùng từ khóa hệ thống: <code>if</code>, <code>for</code>, <code>class</code>, <code>def</code>, <code>int</code>...</li>
          <li>Nên đặt tên dạng <code>snake_case</code> (các từ viết thường cách nhau bởi dấu gạch dưới).</li>
        </ul>
      </div>

      <h3>2.2. Các kiểu dữ liệu cơ sở quan trọng nhất</h3>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Kiểu dữ liệu</th>
              <th>Tên trong Python</th>
              <th>Ví dụ</th>
              <th>Ý nghĩa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Số nguyên</td>
              <td><code>int</code></td>
              <td><code>42</code>, <code>-15</code>, <code>0</code></td>
              <td>Các số không có phần thập phân (độ lớn không bị giới hạn tràn số như C++!)</td>
            </tr>
            <tr>
              <td>Số thực</td>
              <td><code>float</code></td>
              <td><code>3.14</code>, <code>-0.5</code>, <code>2.0</code></td>
              <td>Các số có dấu phẩy thập phân (dấu chấm <code>.</code>)</td>
            </tr>
            <tr>
              <td>Chuỗi ký tự</td>
              <td><code>str</code></td>
              <td><code>"Python"</code>, <code>'Hà Nội'</code></td>
              <td>Đặt trong nháy đơn <code>''</code> hoặc nháy kép <code>""</code></td>
            </tr>
            <tr>
              <td>Logic (Boolean)</td>
              <td><code>bool</code></td>
              <td><code>True</code>, <code>False</code></td>
              <td>Chỉ có 2 giá trị đúng/sai (lưu ý viết hoa chữ cái đầu!)</td>
            </tr>
            <tr>
              <td>Không có giá trị</td>
              <td><code>NoneType</code></td>
              <td><code>None</code></td>
              <td>Đại diện cho trạng thái "rỗng", "chưa có giá trị"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>2.3. Kiểm tra kiểu dữ liệu với hàm <code>type()</code></h3>
      <pre><code class="language-python">a = 100
b = 3.14
c = "Hello"

print(type(a))  # Kết quả: &lt;class 'int'&gt;
print(type(b))  # Kết quả: &lt;class 'float'&gt;
print(type(c))  # Kết quả: &lt;class 'str'&gt;
</code></pre>

      <h3>2.4. Ép kiểu dữ liệu (Type Casting)</h3>
      <p>Khi nhập dữ liệu từ bàn phím bằng <code>input()</code>, Python luôn trả về một <strong>chuỗi (str)</strong>. Muốn tính toán số học, ta bắt buộc phải ép kiểu sang <code>int</code> hoặc <code>float</code>:</p>
      <pre><code class="language-python">chuoi_so = "25"
so_nguyen = int(chuoi_so)     # 25 (int)
so_thuc = float(chuoi_so)     # 25.0 (float)

pi = 3.99
pi_nguyen = int(pi)           # 3 (lấy phần nguyên, bỏ phần thập phân)

tuoi = 20
thong_bao = "Tuổi của tôi là: " + str(tuoi)  # Ghép chuỗi an toàn
</code></pre>
    `
  },
  {
    id: "io",
    title: "3. Nhập và Xuất dữ liệu (Input & Output)",
    summary: "Thành thạo hàm print(), hàm input(), các tham số sep/end và nghệ thuật định dạng f-strings.",
    badge: "I/O",
    time: "15 phút",
    content: `
      <h3>3.1. Nhập dữ liệu với hàm <code>input()</code></h3>
      <p>Hàm <code>input(prompt)</code> dừng chương trình lại và chờ người dùng nhập văn bản từ bàn phím rồi nhấn <code>Enter</code>.</p>
      <pre><code class="language-python">ten = input("Nhập tên của bạn: ")
print("Chào bạn,", ten)

# Nhập số nguyên:
tuoi = int(input("Nhập tuổi của bạn: "))
print("Năm sau bạn sẽ:", tuoi + 1, "tuổi")

# Nhập số thực:
chieu_cao = float(input("Nhập chiều cao (m): "))
</code></pre>

      <div class="tip-box">
        <strong>🔥 Tuyệt chiêu thi cử: Nhập nhiều số trên 1 dòng</strong><br/>
        Trong các đề thi trắc nghiệm hoặc bài tập trên trường (HackerRank, LeetCode, chấm tự động), đề bài thường yêu cầu nhập các số cách nhau bởi dấu cách trên cùng 1 dòng:
        <pre><code class="language-python"># Nhập 2 số a và b trên cùng 1 dòng:
a, b = map(int, input().split())

# Nhập cả một danh sách các số nguyên:
danh_sach = list(map(int, input().split()))
</code></pre>
      </div>

      <h3>3.2. Xuất dữ liệu với hàm <code>print()</code></h3>
      <p>Hàm <code>print()</code> có 2 tham số ẩn rất mạnh mẽ là <code>sep</code> (separator - ký tự phân cách các phần tử) và <code>end</code> (ký tự kết thúc dòng, mặc định là xuống dòng <code>\\n</code>):</p>
      <pre><code class="language-python">print("A", "B", "C")            # A B C (mặc định cách nhau 1 space)
print("A", "B", "C", sep="-")    # A-B-C
print("192", "168", "1", "1", sep=".") # 192.168.1.1

# In trên cùng 1 dòng không bị xuống dòng:
print("Đang tải dữ liệu", end="...")
print("Hoàn tất!")
# Kết quả hiển thị: Đang tải dữ liệu...Hoàn tất!
</code></pre>

      <h3>3.3. Định dạng chuỗi hiện đại với F-Strings (Từ Python 3.6+)</h3>
      <p>F-strings là cách viết chuỗi có chèn biến hoặc biểu thức tiện lợi và nhanh nhất hiện nay. Đặt chữ <code>f</code> hoặc <code>F</code> trước dấu nháy kép, và đặt biến hoặc biểu thức trong cặp ngoặc nhọn <code>{}</code>:</p>
      <pre><code class="language-python">ho_ten = "Minh"
tuoi = 20
diem = 9.4567

# Cách viết f-string cực kỳ rõ ràng:
print(f"Xin chào {ho_ten}, bạn {tuoi} tuổi.")
print(f"Sang năm bạn sẽ {tuoi + 1} tuổi.")

# Định dạng số thực (làm tròn 2 chữ số thập phân):
print(f"Điểm làm tròn: {diem:.2f}")  # 9.46

# Căn lề và tạo khoảng trống:
print(f"{'Mã SV':<10} | {'Tên':<15}")
</code></pre>
    `
  },
  {
    id: "operators",
    title: "4. Toán tử trong Python (Operators)",
    summary: "Tìm hiểu toán tử số học, so sánh, logic, gán và toán tử thành viên in / not in.",
    badge: "Toán tử",
    time: "15 phút",
    content: `
      <h3>4.1. Toán tử số học (Arithmetic Operators)</h3>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Toán tử</th>
              <th>Tên phép toán</th>
              <th>Ví dụ</th>
              <th>Kết quả</th>
              <th>Lưu ý quan trọng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>+</code></td>
              <td>Cộng</td>
              <td><code>5 + 3</code></td>
              <td><code>8</code></td>
              <td>Có thể dùng để ghép chuỗi: <code>"a" + "b"</code></td>
            </tr>
            <tr>
              <td><code>-</code></td>
              <td>Trừ</td>
              <td><code>10 - 4</code></td>
              <td><code>6</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>*</code></td>
              <td>Nhân</td>
              <td><code>4 * 3</code></td>
              <td><code>12</code></td>
              <td>Có thể nhân bản chuỗi: <code>"-" * 10</code></td>
            </tr>
            <tr>
              <td><code>/</code></td>
              <td>Chia thực</td>
              <td><code>7 / 2</code></td>
              <td><code>3.5</code></td>
              <td><strong>Luôn luôn trả về kiểu float!</strong></td>
            </tr>
            <tr>
              <td><code>//</code></td>
              <td>Chia lấy nguyên (Floor Division)</td>
              <td><code>7 // 2</code></td>
              <td><code>3</code></td>
              <td>Lấy phần nguyên lớn nhất không vượt quá thương số</td>
            </tr>
            <tr>
              <td><code>%</code></td>
              <td>Chia lấy dư (Modulus)</td>
              <td><code>7 % 2</code></td>
              <td><code>1</code></td>
              <td>Rất hay dùng để kiểm tra tính chẵn lẻ hoặc chia hết</td>
            </tr>
            <tr>
              <td><code>**</code></td>
              <td>Lũy thừa (Mũ)</td>
              <td><code>2 ** 3</code></td>
              <td><code>8</code></td>
              <td>Tính 2 mũ 3 (tương đương math.pow)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>4.2. Toán tử so sánh (Comparison Operators)</h3>
      <p>Luôn trả về kết quả kiểu <code>bool</code> (True hoặc False):</p>
      <ul>
        <li><code>==</code> : Bằng nhau (Lưu ý: <code>=</code> là phép gán, <code>==</code> là so sánh bằng)</li>
        <li><code>!=</code> : Khác nhau</li>
        <li><code>&gt;</code>, <code>&lt;</code> : Lớn hơn, Nhỏ hơn</li>
        <li><code>&gt;=</code>, <code>&lt;=</code> : Lớn hơn hoặc bằng, Nhỏ hơn hoặc bằng</li>
      </ul>
      <pre><code class="language-python"># Trong Python có thể so sánh chuỗi liên hoàn cực tiện lợi:
x = 5
print(1 &lt; x &lt; 10)  # Kết quả: True (không cần viết: x > 1 and x < 10)
</code></pre>

      <h3>4.3. Toán tử Logic (Logical Operators)</h3>
      <ul>
        <li><code>and</code>: Đúng khi <strong>cả hai</strong> điều kiện cùng đúng.</li>
        <li><code>or</code>: Đúng khi <strong>ít nhất một</strong> trong hai điều kiện đúng.</li>
        <li><code>not</code>: Đảo ngược giá trị logic (True thành False, False thành True).</li>
      </ul>
      <pre><code class="language-python">tuoi = 20
co_bang_lai = True

if tuoi >= 18 and co_bang_lai:
    print("Đủ điều kiện lái xe ô tô!")

troi_mua = False
if not troi_mua:
    print("Thời tiết đẹp, đi chơi thôi!")
</code></pre>

      <h3>4.4. Toán tử thành viên (Membership Operators)</h3>
      <p>Dùng để kiểm tra xem một giá trị có nằm trong một tập hợp (chuỗi, danh sách, tuple...) hay không:</p>
      <pre><code class="language-python">chuoi = "Xin chào các bạn sinh viên"
print("sinh viên" in chuoi)       # True
print("giáo viên" in chuoi)       # False
print("Python" not in chuoi)      # True
</code></pre>
    `
  },
  {
    id: "conditionals",
    title: "5. Cấu trúc Rẽ nhánh (if, elif, else)",
    summary: "Cách ra quyết định trong chương trình, lồng ghép điều kiện, và toán tử ba ngôi (ternary operator).",
    badge: "Điều kiện",
    time: "20 phút",
    content: `
      <h3>5.1. Cấu trúc cơ bản của câu lệnh điều kiện</h3>
      <p>Câu lệnh rẽ nhánh cho phép chương trình đưa ra các quyết định khác nhau tùy thuộc vào điều kiện kiểm tra là <code>True</code> hay <code>False</code>.</p>
      
      <pre><code class="language-python"># Cấu trúc đầy đủ if - elif - else:
diem = float(input("Nhập điểm trung bình: "))

if diem >= 8.5:
    print("Xếp loại: Giỏi")
elif diem >= 7.0:
    print("Xếp loại: Khá")
elif diem >= 5.0:
    print("Xếp loại: Trung bình")
else:
    print("Xếp loại: Yếu")
</code></pre>

      <div class="tip-box">
        <strong>📌 Nguyên tắc hoạt động của if - elif - else:</strong>
        <ul>
          <li>Python kiểm tra từ trên xuống dưới.</li>
          <li>Khi bắt gặp điều kiện đầu tiên thỏa mãn (True), khối lệnh tương ứng sẽ được thực thi ngay lập tức.</li>
          <li>Toàn bộ các nhánh <code>elif</code> và <code>else</code> phía sau sẽ bị bỏ qua!</li>
        </ul>
      </div>

      <h3>5.2. Câu lệnh điều kiện lồng nhau (Nested If)</h3>
      <p>Bạn có thể đặt một câu lệnh <code>if</code> bên trong một câu lệnh <code>if</code> khác khi cần kiểm tra nhiều tầng lớp quyết định:</p>
      <pre><code class="language-python">co_tai_khoan = True
so_du = 500000

if co_tai_khoan:
    if so_du >= 50000:
        print("Đủ số dư duy trì tài khoản.")
    else:
        print("Cần nạp thêm tiền!")
else:
    print("Vui lòng đăng ký tài khoản.")
</code></pre>

      <h3>5.3. Toán tử ba ngôi (Ternary Operator) - Viết if/else trên 1 dòng</h3>
      <p>Khi bạn muốn gán giá trị cho một biến dựa trên một điều kiện đơn giản, cấu trúc 1 dòng này rất ngắn gọn và thanh lịch (Pythonic):</p>
      <pre><code class="language-python"># Cú pháp: [Giá trị khi đúng] if [Điều kiện] else [Giá trị khi sai]
so = 10
trang_thai = "Chẵn" if so % 2 == 0 else "Lẻ"
print(trang_thai)  # Kết quả: Chẵn
</code></pre>

      <h3>5.4. Khái niệm Truthy và Falsy trong Python</h3>
      <p>Trong Python, bất kỳ giá trị nào cũng có thể được đánh giá là True (Truthy) hoặc False (Falsy) khi đưa vào câu lệnh <code>if</code>:</p>
      <ul>
        <li><strong>Các giá trị Falsy (coi như False):</strong> <code>0</code>, <code>0.0</code>, chuỗi rỗng <code>""</code>, danh sách rỗng <code>[]</code>, dict rỗng <code>{}</code>, tập hợp rỗng <code>set()</code>, <code>None</code>, và <code>False</code>.</li>
        <li><strong>Các giá trị Truthy:</strong> Tất cả các giá trị còn lại (số khác 0, chuỗi có ký tự, danh sách có phần tử...).</li>
      </ul>
      <pre><code class="language-python">danh_sach = []
if not danh_sach:
    print("Danh sách đang trống rỗng!")
</code></pre>
    `
  },
  {
    id: "loops",
    title: "6. Vòng lặp For và While",
    summary: "Làm chủ vòng lặp for với range(), vòng lặp while, lệnh break, continue và khối else sau vòng lặp.",
    badge: "Vòng lặp",
    time: "20 phút",
    content: `
      <h3>6.1. Vòng lặp <code>for</code> và hàm <code>range()</code></h3>
      <p>Vòng lặp <code>for</code> trong Python được dùng để duyệt qua một chuỗi các phần tử (như một dãy số, một chuỗi ký tự, một danh sách...).</p>
      <p>Hàm <code>range(start, stop, step)</code> tạo ra dãy số nguyên:</p>
      <ul>
        <li><code>range(n)</code>: Tạo dãy từ <code>0</code> đến <code>n - 1</code>.</li>
        <li><code>range(a, b)</code>: Tạo dãy từ <code>a</code> đến <code>b - 1</code>.</li>
        <li><code>range(a, b, step)</code>: Dãy từ <code>a</code> đến <code>b - 1</code> với bước nhảy <code>step</code>.</li>
      </ul>

      <pre><code class="language-python"># In các số từ 1 đến 5:
for i in range(1, 6):
    print(i, end=" ")
# Kết quả: 1 2 3 4 5

# Duyệt từng ký tự trong chuỗi:
for char in "PYTHON":
    print(char, end="-")
# Kết quả: P-Y-T-H-O-N-
</code></pre>

      <h3>6.2. Vòng lặp <code>while</code></h3>
      <p>Vòng lặp <code>while</code> tiếp tục thực thi chừng nào điều kiện kiểm tra vẫn còn <code>True</code>. Thường dùng khi không biết trước chính xác số lần lặp.</p>
      <pre><code class="language-python"># Đếm ngược từ 5 về 1:
count = 5
while count > 0:
    print(count)
    count -= 1  # Rất quan trọng: phải thay đổi biến đếm để tránh lặp vô tận!
print("Bắt đầu phóng tên lửa!")
</code></pre>

      <div class="warning-box">
        <strong>⚠️ Nguy cơ vòng lặp vô tận (Infinite Loop):</strong> Nếu điều kiện trong <code>while</code> không bao giờ trở thành <code>False</code>, chương trình sẽ chạy mãi mãi và làm treo máy. Hãy luôn đảm bảo có câu lệnh làm thay đổi điều kiện dừng!
      </div>

      <h3>6.3. Lệnh điều khiển: <code>break</code> và <code>continue</code></h3>
      <ul>
        <li><code>break</code>: Dừng ngay lập tức và thoát ra khỏi vòng lặp gần nhất.</li>
        <li><code>continue</code>: Bỏ qua phần còn lại của lượt lặp hiện tại và nhảy sang lượt lặp tiếp theo.</li>
      </ul>
      <pre><code class="language-python"># Ví dụ break: Tìm số chia hết cho 7 đầu tiên
for n in range(1, 100):
    if n % 7 == 0:
        print(f"Số chia hết cho 7 đầu tiên là: {n}")
        break

# Ví dụ continue: In các số lẻ từ 1 đến 10
for i in range(1, 11):
    if i % 2 == 0:
        continue  # Bỏ qua số chẵn
    print(i, end=" ")
# Kết quả: 1 3 5 7 9
</code></pre>

      <h3>6.4. Khối <code>else</code> đặc biệt sau vòng lặp</h3>
      <p>Một tính năng độc đáo của Python: bạn có thể đặt <code>else</code> sau <code>for</code> hoặc <code>while</code>. Khối <code>else</code> này sẽ <strong>chạy khi vòng lặp kết thúc bình thường (không bị ngắt bởi lệnh <code>break</code>)</strong>.</p>
      <pre><code class="language-python"># Kiểm tra số nguyên tố cơ bản:
n = 13
for i in range(2, n):
    if n % i == 0:
        print(f"{n} không phải là số nguyên tố")
        break
else:
    print(f"{n} là số nguyên tố!")
</code></pre>
    `
  },
  {
    id: "strings",
    title: "7. Xử lý Chuỗi ký tự (String)",
    summary: "Chỉ mục (Indexing), Cắt lát (Slicing), các phương thức split, join, replace, strip và tìm kiếm trong chuỗi.",
    badge: "Chuỗi",
    time: "20 phút",
    content: `
      <h3>7.1. Tính chất bất biến (Immutable) của Chuỗi</h3>
      <p>Trong Python, chuỗi ký tự là <strong>bất biến</strong>. Nghĩa là bạn không thể thay đổi trực tiếp một ký tự trong chuỗi (ví dụ <code>s[0] = 'A'</code> sẽ gây lỗi <code>TypeError</code>). Muốn thay đổi, bạn phải tạo ra chuỗi mới.</p>

      <h3>7.2. Indexing và Slicing (Cắt lát chuỗi)</h3>
      <p>Python hỗ trợ cả chỉ mục dương (tính từ đầu chuỗi, bắt đầu từ 0) và chỉ mục âm (tính từ cuối chuỗi, bắt đầu từ -1):</p>
      <pre><code class="language-python">#  Chỉ mục dương:   0   1   2   3   4   5
#  Ký tự:          P   y   t   h   o   n
#  Chỉ mục âm:    -6  -5  -4  -3  -2  -1

s = "Python"
print(s[0])    # 'P'
print(s[-1])   # 'n' (ký tự cuối cùng)

# Cắt lát: s[start:stop:step]
print(s[0:4])   # 'Pyth' (từ vị trí 0 đến 3)
print(s[2:])    # 'thon' (từ vị trí 2 đến hết)
print(s[:3])    # 'Pyt'  (từ đầu đến vị trí 2)
print(s[::2])   # 'Pto'  (bước nhảy là 2)
print(s[::-1])  # 'nohtyP' (đảo ngược chuỗi kinh điển!)
</code></pre>

      <h3>7.3. Các phương thức xử lý chuỗi thông dụng nhất</h3>
      <pre><code class="language-python">van_ban = "   Hoc Lap Trinh Python   "

# 1. Xóa khoảng trắng thừa hai đầu:
s_clean = van_ban.strip()       # "Hoc Lap Trinh Python"

# 2. Đổi chữ hoa / thường:
print(s_clean.lower())          # "hoc lap trinh python"
print(s_clean.upper())          # "HOC LAP TRINH PYTHON"
print(s_clean.title())          # "Hoc Lap Trinh Python"

# 3. Thay thế chuỗi con:
print(s_clean.replace("Python", "AI")) # "Hoc Lap Trinh AI"

# 4. Tách chuỗi thành danh sách (split):
tu = s_clean.split(" ")
print(tu)                       # ['Hoc', 'Lap', 'Trinh', 'Python']

# 5. Nối các phần tử thành chuỗi (join):
chuoi_noi = "-".join(tu)
print(chuoi_noi)                # "Hoc-Lap-Trinh-Python"

# 6. Kiểm tra tiền tố / hậu tố:
file_name = "bai_tap.py"
print(file_name.endswith(".py")) # True
print(file_name.startswith("bai")) # True
</code></pre>
    `
  },
  {
    id: "lists",
    title: "8. Danh sách (List) & Thao tác Mảng",
    summary: "Cấu trúc dữ liệu linh hoạt nhất trong Python: thêm, sửa, xóa, sắp xếp, duyệt và List Comprehension.",
    badge: "Danh sách",
    time: "25 phút",
    content: `
      <h3>8.1. Khởi tạo danh sách</h3>
      <p>List là một tập hợp các phần tử có thứ tự, có thể thay đổi giá trị (mutable), và các phần tử có thể thuộc các kiểu dữ liệu khác nhau.</p>
      <pre><code class="language-python">ds_rong = []
so_nguyen = [1, 2, 3, 4, 5]
hon_hop = ["Nam", 20, 8.5, True]
</code></pre>

      <h3>8.2. Thêm, Sửa, Xóa phần tử trong List</h3>
      <pre><code class="language-python">trai_cay = ["Táo", "Chuối", "Cam"]

# Thêm vào cuối danh sách:
trai_cay.append("Xoài")         # ['Táo', 'Chuối', 'Cam', 'Xoài']

# Chèn vào vị trí chỉ định:
trai_cay.insert(1, "Nho")       # ['Táo', 'Nho', 'Chuối', 'Cam', 'Xoài']

# Sửa giá trị:
trai_cay[0] = "Dâu tây"

# Xóa theo giá trị:
trai_cay.remove("Chuối")        # Xóa phần tử "Chuối" đầu tiên tìm thấy

# Xóa và lấy ra phần tử cuối:
da_lay = trai_cay.pop()         # Lấy ra 'Xoài'

# Xóa theo vị trí bằng từ khóa del:
del trai_cay[0]
</code></pre>

      <h3>8.3. Các hàm built-in thông dụng với List</h3>
      <pre><code class="language-python">diem = [8, 9, 5, 10, 7, 9]

print("Số lượng phần tử:", len(diem))       # 6
print("Điểm cao nhất:", max(diem))           # 10
print("Điểm thấp nhất:", min(diem))          # 5
print("Tổng điểm:", sum(diem))               # 48
print("Điểm trung bình:", sum(diem)/len(diem))# 8.0
print("Số lần xuất hiện điểm 9:", diem.count(9)) # 2

# Sắp xếp danh sách tại chỗ (thay đổi trực tiếp list):
diem.sort()                     # [5, 7, 8, 9, 9, 10]
diem.sort(reverse=True)         # Sắp xếp giảm dần

# Sắp xếp tạo list mới (giữ nguyên list cũ):
ds_moi = sorted(diem)
</code></pre>

      <h3>8.4. Tuyệt kỹ List Comprehension</h3>
      <p>List comprehension là cách tạo danh sách mới từ một danh sách hoặc dãy số có sẵn chỉ bằng 1 dòng code duy nhất, chạy nhanh hơn vòng lặp thông thường:</p>
      <pre><code class="language-python"># Cú pháp: [biểu_thức for phần_tử in tập_hợp if điều_kiện]

# Tạo danh sách bình phương các số từ 1 đến 5:
binh_phuong = [x**2 for x in range(1, 6)]
# Kết quả: [1, 4, 9, 16, 25]

# Lọc chỉ lấy các số chẵn:
so = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
so_chan = [x for x in so if x % 2 == 0]
# Kết quả: [2, 4, 6, 8, 10]
</code></pre>
    `
  },
  {
    id: "tuples_sets_dicts",
    title: "9. Tuple, Set và Dictionary",
    summary: "Phân biệt 3 cấu trúc dữ liệu cốt lõi: Tuple (bất biến), Set (không trùng lặp), Dictionary (cặp khóa-giá trị).",
    badge: "Cấu trúc dữ liệu",
    time: "25 phút",
    content: `
      <h3>9.1. Tuple - Danh sách không thể sửa đổi</h3>
      <p>Tuple giống hệt List nhưng được đặt trong dấu ngoặc đơn <code>()</code> và <strong>không thể thay đổi</strong> (immutable). Tuple thường dùng để chứa dữ liệu cố định (tọa độ, ngày tháng năm sinh, cấu hình hệ thống).</p>
      <pre><code class="language-python">toa_do = (10, 20)
print(toa_do[0])  # 10
# toa_do[0] = 15  # LỖI TypeError: 'tuple' object does not support item assignment!

# Kỹ thuật Tuple Unpacking (Gỡ gói tuple):
x, y = toa_do
print(f"x = {x}, y = {y}")

# Hoán đổi giá trị 2 biến cực kỳ nhanh trong Python dựa trên Tuple:
a = 5
b = 10
a, b = b, a       # Bây giờ a = 10, b = 5!
</code></pre>

      <h3>9.2. Set - Tập hợp các phần tử độc nhất (Không trùng lặp)</h3>
      <p>Set được đặt trong cặp ngoặc nhọn <code>{}</code>, không có thứ tự chỉ mục, và tự động loại bỏ các phần tử trùng lặp.</p>
      <pre><code class="language-python"># Loại bỏ trùng lặp trong một danh sách cực nhanh:
ds_trung = [1, 2, 2, 3, 4, 4, 4, 5]
tap_hop = set(ds_trung)
print(tap_hop)  # {1, 2, 3, 4, 5}

# Các phép toán tập hợp:
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

print(A | B)    # Phép hợp (Union): {1, 2, 3, 4, 5, 6}
print(A & B)    # Phép giao (Intersection): {3, 4}
print(A - B)    # Phép hiệu (Difference): {1, 2}
</code></pre>

      <h3>9.3. Dictionary - Bảng tra cứu Khóa - Giá trị (Key - Value)</h3>
      <p>Dictionary là cấu trúc dữ liệu cực kỳ mạnh mẽ trong thực tế. Nó lưu trữ dữ liệu dưới dạng cặp <code>khóa: giá trị</code>.</p>
      <pre><code class="language-python">sinh_vien = {
    "ma_sv": "B24DCCN001",
    "ho_ten": "Trần Văn Bình",
    "tuoi": 19,
    "diem_gpa": 3.65
}

# Truy xuất giá trị bằng Khóa (Key):
print(sinh_vien["ho_ten"])            # Trần Văn Bình

# Truy xuất an toàn bằng hàm .get() (không bị văng lỗi nếu key không tồn tại):
print(sinh_vien.get("email", "Chưa có email"))

# Thêm hoặc cập nhật:
sinh_vien["email"] = "binh@gmail.com"  # Thêm key mới
sinh_vien["tuoi"] = 20                # Cập nhật key đã có

# Duyệt Dictionary:
for key, value in sinh_vien.items():
    print(f"{key}: {value}")
</code></pre>
    `
  },
  {
    id: "functions",
    title: "10. Hàm (Functions) & Tư duy Tái sử dụng Mã",
    summary: "Định nghĩa hàm với def, tham số mặc định, *args, **kwargs, từ khóa return và hàm ẩn danh Lambda.",
    badge: "Hàm",
    time: "25 phút",
    content: `
      <h3>10.1. Tại sao cần dùng hàm?</h3>
      <p>Hàm là một khối lệnh được đặt tên để thực hiện một nhiệm vụ cụ thể. Khi cần thực hiện nhiệm vụ đó, bạn chỉ cần gọi tên hàm mà không cần viết lại mã nguồn (nguyên tắc <strong>DRY - Don't Repeat Yourself</strong>).</p>

      <pre><code class="language-python"># Cú pháp định nghĩa hàm bằng từ khóa 'def':
def chao_mung(ten):
    print(f"Xin chào, {ten}! Chúc bạn một ngày học tập tốt lành.")

# Gọi hàm:
chao_mung("An")
chao_mung("Bình")
</code></pre>

      <h3>10.2. Lệnh <code>return</code> - Trả về kết quả</h3>
      <p>Lệnh <code>return</code> dùng để trả kết quả tính toán từ bên trong hàm ra bên ngoài cho nơi gọi hàm sử dụng.</p>
      <pre><code class="language-python">def tinh_tong(a, b):
    ket_qua = a + b
    return ket_qua

tong = tinh_tong(15, 25)
print("Tổng là:", tong)  # 40

# Hàm có thể trả về nhiều giá trị cùng lúc (trả về dưới dạng tuple):
def tinh_toan(a, b):
    return a + b, a - b, a * b

cong, tru, nhan = tinh_toan(10, 2)
</code></pre>

      <h3>10.3. Tham số mặc định (Default Parameters)</h3>
      <pre><code class="language-python">def luy_thua(co_so, so_mu=2):
    return co_so ** so_mu

print(luy_thua(5))     # 25 (mặc định số mũ là 2)
print(luy_thua(5, 3))  # 125 (truyền số mũ là 3)
</code></pre>

      <h3>10.4. Tham số tùy biến <code>*args</code> và <code>**kwargs</code></h3>
      <ul>
        <li><code>*args</code>: Cho phép hàm nhận một số lượng đối số vị trí không xác định (dưới dạng một Tuple).</li>
        <li><code>**kwargs</code>: Cho phép hàm nhận các đối số có đặt tên không xác định (dưới dạng một Dictionary).</li>
      </ul>
      <pre><code class="language-python">def tinh_tong_tat_ca(*args):
    # args ở đây là một tuple chứa tất cả các số truyền vào
    return sum(args)

print(tinh_tong_tat_ca(1, 2, 3))          # 6
print(tinh_tong_tat_ca(10, 20, 30, 40))   # 100
</code></pre>

      <h3>10.5. Hàm ẩn danh Lambda (Hàm 1 dòng)</h3>
      <p>Hàm Lambda là hàm không tên, được định nghĩa ngắn gọn trên một dòng duy nhất, thường dùng cho các hàm phụ trợ ngắn:</p>
      <pre><code class="language-python"># Cú pháp: lambda tham_số: biểu_thức
nhan_doi = lambda x: x * 2
print(nhan_doi(7))  # 14

# Ứng dụng phổ biến: Làm tiêu chí sắp xếp (key)
ds_hoc_sinh = [("Bình", 8.0), ("An", 9.5), ("Chi", 7.0)]
# Sắp xếp danh sách theo điểm số tăng dần:
ds_hoc_sinh.sort(key=lambda item: item[1])
print(ds_hoc_sinh)
</code></pre>
    `
  },
  {
    id: "exceptions_errors",
    title: "11. Bắt lỗi & Gỡ lỗi (Try - Except & Debugging)",
    summary: "Xử lý ngoại lệ với try/except, nhận diện các lỗi kinh điển của người mới học và kỹ năng đọc Traceback.",
    badge: "Bắt lỗi",
    time: "20 phút",
    content: `
      <h3>11.1. Xử lý ngoại lệ với khối <code>try - except</code></h3>
      <p>Khi chương trình gặp lỗi bất ngờ (như người dùng nhập chữ thay vì số, hoặc chia một số cho 0), chương trình sẽ bị "crash" (dừng đột ngột). Khối lệnh <code>try - except</code> giúp chương trình xử lý sự cố êm đẹp mà không bị sập.</p>

      <pre><code class="language-python">try:
    so = int(input("Nhập vào một số nguyên: "))
    ket_qua = 100 / so
    print("100 chia cho số đó bằng:", ket_qua)
except ZeroDivisionError:
    print("Lỗi: Không thể chia cho số 0!")
except ValueError:
    print("Lỗi: Bạn phải nhập một chữ số hợp lệ!")
except Exception as e:
    print("Có lỗi không xác định xảy ra:", e)
else:
    print("Khối này chạy khi KHÔNG có lỗi nào xảy ra!")
finally:
    print("Khối finally LUÔN LUÔN chạy (dù có lỗi hay không).")
</code></pre>

      <h3>11.2. Top 6 lỗi 'kinh điển' của sinh viên mới học Python</h3>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Tên lỗi</th>
              <th>Nguyên nhân thường gặp</th>
              <th>Cách khắc phục</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>SyntaxError</code></td>
              <td>Quên dấu hai chấm <code>:</code> ở cuối câu lệnh <code>if</code>, <code>for</code>, <code>def</code>; hoặc mở ngoặc mà không đóng ngoặc.</td>
              <td>Kiểm tra lại dấu <code>:</code> và các cặp ngoặc <code>()</code>, <code>[]</code>, <code>{}</code>.</td>
            </tr>
            <tr>
              <td><code>IndentationError</code></td>
              <td>Thụt dòng không đều, dòng thụt 3 space dòng thụt 4 space, hoặc trộn Tab với Space.</td>
              <td>Dùng trình soạn thảo (VS Code) bật định dạng 4 spaces chuẩn.</td>
            </tr>
            <tr>
              <td><code>NameError</code></td>
              <td>Gọi tên một biến hoặc hàm chưa được định nghĩa, hoặc gõ sai chính tả tên biến.</td>
              <td>Kiểm tra xem biến đã được gán giá trị ở dòng trên chưa.</td>
            </tr>
            <tr>
              <td><code>TypeError</code></td>
              <td>Thực hiện phép toán sai kiểu dữ liệu (ví dụ: cộng chuỗi với số: <code>"Tuổi: " + 20</code>).</td>
              <td>Ép kiểu sang chuỗi: <code>str(20)</code> hoặc dùng f-string.</td>
            </tr>
            <tr>
              <td><code>ValueError</code></td>
              <td>Ép kiểu sai giá trị (ví dụ: <code>int("abc")</code>).</td>
              <td>Kiểm tra kỹ chuỗi có phải toàn ký tự số trước khi ép kiểu.</td>
            </tr>
            <tr>
              <td><code>IndexError</code></td>
              <td>Truy xuất chỉ mục vượt quá độ dài danh sách (Index out of range).</td>
              <td>Nhớ rằng chỉ mục bắt đầu từ 0 đến <code>len - 1</code>.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="tip-box">
        <strong>🔍 Kỹ năng đọc thông báo lỗi Traceback:</strong>
        <p>Khi màn hình đỏ rực chữ lỗi, đừng hoảng loạn! Hãy nhìn vào <strong>dòng dưới cùng</strong> (nó nói cho bạn biết loại lỗi gì) và nhìn lên dòng <strong>File "...", line X</strong> (nó chỉ chính xác lỗi xảy ra ở dòng code số mấy). Đây là kỹ năng gỡ lỗi quan trọng nhất của mọi lập trình viên.</p>
      </div>
    `
  }
];

