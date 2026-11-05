/**
 * 50 Bài Tập Lập Trình Python Điển Hình (Từ Cơ Bản Đến Nâng Cao)
 * Bộ bài tập chuẩn hóa tư duy giải thuật dành cho sinh viên mới bắt đầu.
 */
const EXERCISES_DATA = [
  // ==========================================
  // LEVEL 1: NHẬP MÔN I/O & TÍNH TOÁN SỐ HỌC (1 - 10)
  // ==========================================
  {
    id: 1,
    title: "Tính Tổng, Hiệu, Tích, Thương 2 số",
    level: 1,
    category: "Số học & I/O",
    description: "Viết chương trình nhập vào 2 số nguyên a và b từ bàn phím. Hãy tính và in ra lần lượt tổng, hiệu, tích, thương thực, thương nguyên và số dư của a chia cho b.",
    inputFormat: "Hai số nguyên a và b (b khác 0) trên 2 dòng hoặc trên 1 dòng cách nhau bởi dấu cách.",
    outputFormat: "In kết quả từng phép toán trên từng dòng.",
    exampleInput: "10 3",
    exampleOutput: "Tổng: 13\nHiệu: 7\nTích: 30\nThương thực: 3.33\nThương nguyên: 3\nSố dư: 1",
    explanation: "a = 10, b = 3. Phép chia thực 10 / 3 = 3.333..., chia nguyên 10 // 3 = 3, chia dư 10 % 3 = 1.",
    hint: "Dùng map(int, input().split()) để nhập cả 2 số trên 1 dòng. Dùng các toán tử +, -, *, /, //, % và định dạng f-string {thuong:.2f} để làm tròn 2 chữ số thập phân.",
    starterCode: `# Nhập 2 số a và b
a, b = map(int, input("Nhập a và b: ").split())

# Viết mã tính toán của bạn ở đây...
`,
    solution: `# Nhập 2 số nguyên
a, b = map(int, input("Nhập a và b: ").split())

# Thực hiện các phép toán
tong = a + b
hieu = a - b
tich = a * b
thuong_thuc = a / b
thuong_nguyen = a // b
so_du = a % b

# Xuất kết quả
print(f"Tổng: {tong}")
print(f"Hiệu: {hieu}")
print(f"Tích: {tich}")
print(f"Thương thực: {thuong_thuc:.2f}")
print(f"Thương nguyên: {thuong_nguyen}")
print(f"Số dư: {so_du}")`,
    codeExplanation: "Hàm map(int, input().split()) đọc cả dòng, tách theo dấu cách và ép kiểu sang int. Toán tử / chia trả về float, // lấy phần nguyên bỏ thập phân, % lấy phần dư."
  },
  {
    id: 2,
    title: "Chu vi và Diện tích Hình chữ nhật",
    level: 1,
    category: "Số học & I/O",
    description: "Nhập vào chiều dài và chiều rộng của một hình chữ nhật (số thực dương). Tính và in ra chu vi và diện tích của hình chữ nhật đó.",
    inputFormat: "Hai số thực dương a (chiều dài) và b (chiều rộng).",
    outputFormat: "Chu vi và diện tích làm tròn đến 2 chữ số thập phân.",
    exampleInput: "5.5 3.2",
    exampleOutput: "Chu vi: 17.40\nDiện tích: 17.60",
    explanation: "Chu vi = (5.5 + 3.2) * 2 = 17.4. Diện tích = 5.5 * 3.2 = 17.6.",
    hint: "Công thức: Chu vi = (dài + rộng) * 2, Diện tích = dài * rộng. Nhập số thực bằng float(input()).",
    starterCode: `dai = float(input("Nhập chiều dài: "))
rong = float(input("Nhập chiều rộng: "))
# Tính chu vi và diện tích...
`,
    solution: `dai = float(input("Nhập chiều dài: "))
rong = float(input("Nhập chiều rộng: "))

chu_vi = (dai + rong) * 2
dien_tich = dai * rong

print(f"Chu vi: {chu_vi:.2f}")
print(f"Diện tích: {dien_tich:.2f}")`,
    codeExplanation: "Sử dụng float() để nhận số thực. Dấu ngoặc tròn (dai + rong) bắt buộc phải có để thực hiện phép cộng trước khi nhân với 2."
  },
  {
    id: 3,
    title: "Đổi nhiệt độ từ Celsius sang Fahrenheit",
    level: 1,
    category: "Số học & I/O",
    description: "Viết chương trình nhập vào nhiệt độ C (Celsius). Tính và in ra nhiệt độ tương ứng theo thang độ F (Fahrenheit). Công thức: F = (C * 9/5) + 32.",
    inputFormat: "Một số thực C đại diện cho độ Celsius.",
    outputFormat: "Nhiệt độ F làm tròn đến 2 chữ số thập phân.",
    exampleInput: "25",
    exampleOutput: "25.0°C = 77.00°F",
    explanation: "F = (25 * 9/5) + 32 = 45 + 32 = 77.0.",
    hint: "Chú ý thứ tự ưu tiên của phép toán: nhân chia trước, cộng trừ sau.",
    starterCode: `c = float(input("Nhập độ C: "))
# Áp dụng công thức F = (C * 9/5) + 32
`,
    solution: `c = float(input("Nhập nhiệt độ (°C): "))
f = (c * 9 / 5) + 32

print(f"{c:.1f}°C = {f:.2f}°F")`,
    codeExplanation: "Trong Python, 9 / 5 cho ra 1.8. Ta nhân với c rồi cộng với 32 là ra độ F chính xác."
  },
  {
    id: 4,
    title: "Hoán đổi giá trị 2 biến (Swap Variables)",
    level: 1,
    category: "Số học & I/O",
    description: "Nhập vào 2 số nguyên a và b. Thực hiện tráo đổi giá trị của a và b sao cho sau khi hoán đổi, a mang giá trị cũ của b và b mang giá trị cũ của a.",
    inputFormat: "Hai số nguyên a và b.",
    outputFormat: "In giá trị của a và b trước và sau khi hoán đổi.",
    exampleInput: "5 10",
    exampleOutput: "Trước khi đổi: a = 5, b = 10\nSau khi đổi: a = 10, b = 5",
    explanation: "a nhận giá trị 10, b nhận giá trị 5.",
    hint: "Trong các ngôn ngữ như C/C++, ta cần biến phụ temp: temp = a; a = b; b = temp. Nhưng trong Python, bạn có thể dùng cú pháp kỳ diệu: a, b = b, a!",
    starterCode: `a = int(input("Nhập a: "))
b = int(input("Nhập b: "))
# Thực hiện hoán đổi...
`,
    solution: `a = int(input("Nhập a: "))
b = int(input("Nhập b: "))

print(f"Trước khi đổi: a = {a}, b = {b}")

# Cách chuẩn Pythonic (Tuple Unpacking):
a, b = b, a

print(f"Sau khi đổi: a = {a}, b = {b}")`,
    codeExplanation: "Cú pháp a, b = b, a hoạt động bằng cách tạo ra một tuple (b, a) ở vế phải, sau đó gỡ gói (unpack) lần lượt vào biến a và b ở vế trái mà không cần biến trung gian."
  },
  {
    id: 5,
    title: "Tổng các chữ số của số nguyên 3 chữ số",
    level: 1,
    category: "Số học & I/O",
    description: "Nhập một số nguyên dương có 3 chữ số N (100 <= N <= 999). Tính tổng 3 chữ số cấu tạo nên số đó.",
    inputFormat: "Một số nguyên dương N có 3 chữ số.",
    outputFormat: "Tổng 3 chữ số của N.",
    exampleInput: "385",
    exampleOutput: "Tổng các chữ số của 385 là: 16",
    explanation: "3 + 8 + 5 = 16.",
    hint: "Để tách chữ số: Hàng trăm = N // 100. Hàng chục = (N // 10) % 10. Hàng đơn vị = N % 10.",
    starterCode: `n = int(input("Nhập số có 3 chữ số: "))
# Tách các chữ số trăm, chục, đơn vị...
`,
    solution: `n = int(input("Nhập số nguyên có 3 chữ số (100 - 999): "))

tram = n // 100
chuc = (n // 10) % 10
don_vi = n % 10

tong = tram + chuc + don_vi
print(f"Tổng các chữ số của {n} là: {tong} (Chi tiết: {tram} + {chuc} + {don_vi} = {tong})")`,
    codeExplanation: "Dùng toán tử chia nguyên // và chia dư % để bóc tách từng chữ số từ phải sang trái hoặc từ trái sang phải."
  },
  {
    id: 6,
    title: "Chuyển đổi Giây sang Giờ : Phút : Giây",
    level: 1,
    category: "Số học & I/O",
    description: "Nhập vào tổng số giây (số nguyên dương). Hãy quy đổi ra định dạng Giờ, Phút và Giây tương ứng.",
    inputFormat: "Một số nguyên dương đại diện cho tổng số giây.",
    outputFormat: "Định dạng: HH:MM:SS (hoặc X giờ, Y phút, Z giây).",
    exampleInput: "3665",
    exampleOutput: "3665 giây = 1 giờ 1 phút 5 giây (01:01:05)",
    explanation: "1 giờ có 3600 giây. 3665 // 3600 = 1 giờ, còn dư 65 giây. 65 // 60 = 1 phút, dư 5 giây.",
    hint: "1 giờ = 3600 giây. Số giờ = tong_giay // 3600. Phần giây còn lại = tong_giay % 3600. Số phút = giay_con_lai // 60. Số giây = giay_con_lai % 60.",
    starterCode: `tong_giay = int(input("Nhập số giây: "))
# Quy đổi sang giờ, phút, giây...
`,
    solution: `tong_giay = int(input("Nhập tổng số giây: "))

gio = tong_giay // 3600
giay_con = tong_giay % 3600
phut = giay_con // 60
giay = giay_con % 60

print(f"{tong_giay} giây = {gio} giờ {phut} phút {giay} giây")
print(f"Định dạng chuẩn: {gio:02d}:{phut:02d}:{giay:02d}")`,
    codeExplanation: "{gio:02d} là định dạng in số nguyên có ít nhất 2 chữ số, nếu chỉ có 1 chữ số sẽ tự động đệm số 0 ở đầu (ví dụ: 1 -> '01')."
  },
  {
    id: 7,
    title: "Chu vi và Diện tích Hình tròn",
    level: 1,
    category: "Số học & I/O",
    description: "Nhập bán kính r của hình tròn (số thực). Hãy tính chu vi và diện tích của hình tròn đó với độ chính xác cao.",
    inputFormat: "Một số thực r > 0.",
    outputFormat: "Chu vi và diện tích làm tròn đến 3 chữ số thập phân.",
    exampleInput: "4.5",
    exampleOutput: "Chu vi: 28.274\nDiện tích: 63.617",
    explanation: "Chu vi = 2 * π * r, Diện tích = π * r².",
    hint: "Import thư viện toán học math bằng câu lệnh `import math` và dùng hằng số `math.pi` để có giá trị số Pi chuẩn xác nhất.",
    starterCode: `import math

r = float(input("Nhập bán kính r: "))
# Tính chu vi và diện tích...
`,
    solution: `import math

r = float(input("Nhập bán kính r: "))

chu_vi = 2 * math.pi * r
dien_tich = math.pi * (r ** 2)

print(f"Chu vi: {chu_vi:.3f}")
print(f"Diện tích: {dien_tich:.3f}")`,
    codeExplanation: "Sử dụng math.pi từ thư viện chuẩn math và toán tử lũy thừa ** để tính r mũ 2."
  },
  {
    id: 8,
    title: "Tính chỉ số khối cơ thể (BMI)",
    level: 1,
    category: "Số học & I/O",
    description: "Nhập vào cân nặng (kg) và chiều cao (m). Tính chỉ số BMI theo công thức: BMI = Cân_nặng / (Chiều_cao * Chiều_cao).",
    inputFormat: "Hai số thực: cân nặng (kg) và chiều cao (m).",
    outputFormat: "Chỉ số BMI làm tròn 2 chữ số thập phân.",
    exampleInput: "65 1.72",
    exampleOutput: "Chỉ số BMI của bạn là: 21.97",
    explanation: "BMI = 65 / (1.72 * 1.72) = 21.971... làm tròn thành 21.97.",
    hint: "Lưu ý chiều cao tính bằng mét (ví dụ 1m72 thì nhập 1.72 chứ không phải 172).",
    starterCode: `can_nang = float(input("Nhập cân nặng (kg): "))
chieu_cao = float(input("Nhập chiều cao (m): "))
# Tính BMI...
`,
    solution: `can_nang = float(input("Nhập cân nặng (kg): "))
chieu_cao = float(input("Nhập chiều cao (m): "))

bmi = can_nang / (chieu_cao ** 2)
print(f"Chỉ số BMI của bạn là: {bmi:.2f}")`,
    codeExplanation: "Dùng toán tử lũy thừa chieu_cao ** 2 để bình phương chiều cao."
  },
  {
    id: 9,
    title: "Tính tiền lương có tăng ca (Overtime)",
    level: 1,
    category: "Số học & I/O",
    description: "Nhập số giờ làm việc trong tuần và mức lương theo giờ. Nếu số giờ làm việc vượt quá 40 giờ, những giờ vượt quá được tính lương gấp 1.5 lần mức cơ bản.",
    inputFormat: "Hai số thực: số giờ làm việc và mức lương mỗi giờ.",
    outputFormat: "Tổng số tiền lương nhận được.",
    exampleInput: "45 50000",
    exampleOutput: "Tổng tiền lương: 2,375,000 VNĐ",
    explanation: "40 giờ đầu: 40 * 50,000 = 2,000,000. 5 giờ vượt mức: 5 * (50,000 * 1.5) = 375,000. Tổng = 2,375,000.",
    hint: "Dùng min(gio, 40) cho giờ chuẩn và max(0, gio - 40) cho giờ tăng ca, hoặc dùng câu lệnh if.",
    starterCode: `so_gio = float(input("Nhập số giờ làm việc: "))
luong_gio = float(input("Nhập mức lương/giờ: "))
# Tính lương...
`,
    solution: `so_gio = float(input("Nhập số giờ làm việc: "))
luong_gio = float(input("Nhập mức lương/giờ: "))

if so_gio <= 40:
    tong_luong = so_gio * luong_gio
else:
    gio_chuan = 40
    gio_tang_ca = so_gio - 40
    tong_luong = (gio_chuan * luong_gio) + (gio_tang_ca * luong_gio * 1.5)

print(f"Tổng tiền lương: {tong_luong:,.0f} VNĐ")`,
    codeExplanation: "Định dạng {:,.0f} tự động thêm dấu phẩy ngăn cách hàng nghìn (ví dụ 2,375,000)."
  },
  {
    id: 10,
    title: "Khoảng cách Euclid giữa 2 điểm 2D",
    level: 1,
    category: "Số học & I/O",
    description: "Nhập tọa độ 2 điểm A(x1, y1) và B(x2, y2) trong mặt phẳng tọa độ Oxy. Tính khoảng cách d giữa hai điểm đó theo công thức d = sqrt((x2 - x1)² + (y2 - y1)²).",
    inputFormat: "4 số thực x1, y1, x2, y2.",
    outputFormat: "Khoảng cách làm tròn đến 2 chữ số thập phân.",
    exampleInput: "1 2 4 6",
    exampleOutput: "Khoảng cách AB: 5.00",
    explanation: "sqrt((4 - 1)² + (6 - 2)²) = sqrt(3² + 4²) = sqrt(9 + 16) = sqrt(25) = 5.0.",
    hint: "Dùng math.sqrt() hoặc lũy thừa 0.5 để tính căn bậc hai.",
    starterCode: `import math

x1, y1 = map(float, input("Nhập x1, y1: ").split())
x2, y2 = map(float, input("Nhập x2, y2: ").split())
# Tính khoảng cách AB...
`,
    solution: `import math

x1, y1 = map(float, input("Nhập tọa độ điểm A (x1 y1): ").split())
x2, y2 = map(float, input("Nhập tọa độ điểm B (x2 y2): ").split())

khoang_cach = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
print(f"Khoảng cách giữa hai điểm AB là: {khoang_cach:.2f}")`,
    codeExplanation: "Áp dụng định lý Pythagoras trong không gian hai chiều bằng thư viện math."
  },

  // ==========================================
  // LEVEL 2: RẼ NHÁNH ĐIỀU KIỆN IF - ELSE (11 - 20)
  // ==========================================
  {
    id: 11,
    title: "Kiểm tra số chẵn hay số lẻ",
    level: 2,
    category: "Rẽ nhánh & Logic",
    description: "Nhập vào một số nguyên n từ bàn phím. Kiểm tra và in ra thông báo xem n là số chẵn hay số lẻ, hay bằng 0.",
    inputFormat: "Một số nguyên n.",
    outputFormat: "Thông báo n là số chẵn, lẻ hay là số 0.",
    exampleInput: "15",
    exampleOutput: "15 là số lẻ",
    explanation: "15 % 2 == 1 nên 15 là số lẻ.",
    hint: "Số chẵn chia hết cho 2 (n % 2 == 0), số lẻ chia 2 dư 1.",
    starterCode: `n = int(input("Nhập số nguyên n: "))
# Kiểm tra n % 2...
`,
    solution: `n = int(input("Nhập số nguyên n: "))

if n == 0:
    print("0 là số không âm cũng không dương (số chẵn đặc biệt)")
elif n % 2 == 0:
    print(f"{n} là số chẵn")
else:
    print(f"{n} là số lẻ")`,
    codeExplanation: "Sử dụng câu lệnh if-elif-else kết hợp toán tử chia dư % để phân loại tính chẵn lẻ của một số nguyên."
  },
  {
    id: 12,
    title: "Tìm số lớn nhất trong 3 số (Không dùng max)",
    level: 2,
    category: "Rẽ nhánh & Logic",
    description: "Nhập vào 3 số thực a, b, c. Không sử dụng hàm max() có sẵn của Python, hãy dùng cấu trúc rẽ nhánh if-else để tìm và in ra số lớn nhất.",
    inputFormat: "3 số thực a, b, c.",
    outputFormat: "Số lớn nhất trong 3 số.",
    exampleInput: "7.5 12.0 9.8",
    exampleOutput: "Số lớn nhất là: 12.0",
    explanation: "Trong 3 số 7.5, 12.0, 9.8 thì 12.0 là lớn nhất.",
    hint: "Giả sử số lớn nhất max_val = a. Nếu b > max_val thì cập nhật max_val = b. Nếu c > max_val thì cập nhật max_val = c. Đây là thuật toán đặt lính canh kinh điển!",
    starterCode: `a, b, c = map(float, input("Nhập 3 số a, b, c: ").split())
# Tìm số lớn nhất bằng thuật toán đặt lính canh...
`,
    solution: `a, b, c = map(float, input("Nhập 3 số: ").split())

# Thuật toán đặt lính canh (Sentinel):
max_val = a

if b > max_val:
    max_val = b

if c > max_val:
    max_val = c

print(f"Số lớn nhất là: {max_val}")`,
    codeExplanation: "Kỹ thuật đặt lính canh giả định phần tử đầu tiên là lớn nhất, sau đó lần lượt duyệt qua các phần tử còn lại để so sánh và hoán đổi vị trí lính canh nếu gặp phần tử lớn hơn."
  },
  {
    id: 13,
    title: "Kiểm tra Năm Nhuận (Leap Year)",
    level: 2,
    category: "Rẽ nhánh & Logic",
    description: "Nhập vào một năm dương lịch (số nguyên dương). Kiểm tra xem năm đó có phải năm nhuận hay không theo quy tắc lịch Gregory.",
    inputFormat: "Một số nguyên dương năm (ví dụ: 2024).",
    outputFormat: "Thông báo năm nhuận hoặc không nhuận.",
    exampleInput: "2024",
    exampleOutput: "Năm 2024 là năm nhuận",
    explanation: "2024 chia hết cho 4 và không chia hết cho 100 nên là năm nhuận.",
    hint: "Quy tắc: Năm nhuận là năm chia hết cho 400 HOẶC (chia hết cho 4 nhưng không chia hết cho 100).",
    starterCode: `nam = int(input("Nhập năm: "))
# Kiểm tra điều kiện năm nhuận...
`,
    solution: `nam = int(input("Nhập năm dương lịch: "))

# Năm nhuận: chia hết cho 400 HOẶC (chia hết cho 4 và không chia hết cho 100)
if (nam % 400 == 0) or (nam % 4 == 0 and nam % 100 != 0):
    print(f"Năm {nam} là năm nhuận (tháng 2 có 29 ngày).")
else:
    print(f"Năm {nam} không phải là năm nhuận (tháng 2 có 28 ngày).")`,
    codeExplanation: "Kết hợp toán tử logic 'or' và 'and' để biểu diễn chính xác điều kiện năm nhuận của lịch chuẩn quốc tế."
  },
  {
    id: 14,
    title: "Xếp loại học lực sinh viên",
    level: 2,
    category: "Rẽ nhánh & Logic",
    description: "Nhập điểm trung bình tích lũy hệ 10 (0 <= diem <= 10). Phân loại học lực: Xuất sắc (>= 9.0), Giỏi (8.0 - 8.9), Khá (6.5 - 7.9), Trung bình (5.0 - 6.4), Yếu (< 5.0). Kiểm tra nếu điểm nhập ngoài thang 0-10 thì báo lỗi.",
    inputFormat: "Một số thực điểm.",
    outputFormat: "Xếp loại tương ứng hoặc thông báo 'Điểm không hợp lệ'.",
    exampleInput: "8.6",
    exampleOutput: "Điểm 8.6: Xếp loại Giỏi",
    explanation: "8.6 nằm trong khoảng [8.0, 9.0) nên xếp loại Giỏi.",
    hint: "Kiểm tra tính hợp lệ trước: if not (0 <= diem <= 10): báo lỗi. Sau đó dùng chuỗi if-elif-else theo thứ tự từ cao xuống thấp.",
    starterCode: `diem = float(input("Nhập điểm TB (0 - 10): "))
# Kiểm tra hợp lệ và phân loại...
`,
    solution: `diem = float(input("Nhập điểm trung bình (0 - 10): "))

if diem < 0 or diem > 10:
    print("Lỗi: Điểm không hợp lệ! Vui lòng nhập trong thang điểm từ 0 đến 10.")
elif diem >= 9.0:
    print(f"Điểm {diem}: Xếp loại Xuất sắc 🏆")
elif diem >= 8.0:
    print(f"Điểm {diem}: Xếp loại Giỏi")
elif diem >= 6.5:
    print(f"Điểm {diem}: Xếp loại Khá")
elif diem >= 5.0:
    print(f"Điểm {diem}: Xếp loại Trung bình")
else:
    print(f"Điểm {diem}: Xếp loại Yếu")`,
    codeExplanation: "Kỹ thuật kiểm tra điều kiện biên (Boundary Check) đầu tiên giúp loại bỏ dữ liệu sai trước khi xử lý nghiệp vụ chính."
  },
  {
    id: 15,
    title: "Kiểm tra & Phân loại Tam giác",
    level: 2,
    category: "Rẽ nhánh & Logic",
    description: "Nhập vào 3 số thực a, b, c là độ dài 3 cạnh. Kiểm tra xem 3 cạnh đó có tạo thành tam giác hợp lệ hay không. Nếu có, hãy cho biết đó là tam giác đều, tam giác cân, tam giác vuông hay tam giác thường.",
    inputFormat: "3 số thực dương a, b, c.",
    outputFormat: "Thông báo loại tam giác hoặc 'Không phải tam giác'.",
    exampleInput: "3 4 5",
    exampleOutput: "Ba cạnh 3, 4, 5 tạo thành: Tam giác vuông",
    explanation: "Tổng 2 cạnh luôn lớn hơn cạnh còn lại và 3² + 4² = 5² (Định lý Pytago đảo) nên là tam giác vuông.",
    hint: "Điều kiện tam giác: a+b>c và a+c>b và b+c>a. Tam giác đều: a==b==c. Tam giác cân: a==b hoặc b==c hoặc c==a. Tam giác vuông: a² + b² == c² (hoặc các hoán vị).",
    starterCode: `a, b, c = map(float, input("Nhập 3 cạnh a, b, c: ").split())
# Kiểm tra điều kiện tồn tại tam giác và phân loại...
`,
    solution: `a, b, c = map(float, input("Nhập 3 cạnh: ").split())

# Kiểm tra điều kiện bất đẳng thức tam giác
if (a + b > c) and (a + c > b) and (b + c > a):
    # Kiểm tra tam giác đều
    if a == b == c:
        print("Tam giác đều")
    # Kiểm tra tam giác vuông (lưu ý làm tròn do số thực)
    elif round(a**2 + b**2, 5) == round(c**2, 5) or \\
         round(a**2 + c**2, 5) == round(b**2, 5) or \\
         round(b**2 + c**2, 5) == round(a**2, 5):
        if a == b or b == c or c == a:
            print("Tam giác vuông cân")
        else:
            print("Tam giác vuông")
    # Kiểm tra tam giác cân
    elif a == b or b == c or c == a:
        print("Tam giác cân")
    else:
        print("Tam giác thường")
else:
    print("Ba cạnh trên KHÔNG tạo thành một tam giác hợp lệ!")`,
    codeExplanation: "Hàm round(..., 5) được sử dụng để tránh sai số dấu phẩy động (floating point precision error) khi so sánh bằng số thực."
  },
  {
    id: 16,
    title: "Giải phương trình bậc nhất ax + b = 0",
    level: 2,
    category: "Rẽ nhánh & Logic",
    description: "Nhập 2 hệ số a và b. Giải và biện luận phương trình bậc nhất một ẩn ax + b = 0.",
    inputFormat: "Hai số thực a và b.",
    outputFormat: "Nghiệm của phương trình, hoặc thông báo 'Vô nghiệm', 'Vô số nghiệm'.",
    exampleInput: "2 -4",
    exampleOutput: "Phương trình có nghiệm duy nhất x = 2.00",
    explanation: "2x - 4 = 0 => x = 4 / 2 = 2.",
    hint: "Nếu a == 0: nếu b == 0 thì vô số nghiệm, ngược lại vô nghiệm. Nếu a != 0: nghiệm x = -b / a.",
    starterCode: `a, b = map(float, input("Nhập hệ số a và b: ").split())
# Giải và biện luận...
`,
    solution: `a, b = map(float, input("Nhập hệ số a và b: ").split())

if a == 0:
    if b == 0:
        print("Phương trình có vô số nghiệm (thỏa mãn với mọi x).")
    else:
        print("Phương trình vô nghiệm (mâu thuẫn: 0x = b).")
else:
    x = -b / a
    print(f"Phương trình có nghiệm duy nhất x = {x:.2f}")`,
    codeExplanation: "Phải biện luận trường hợp suy biến a = 0 trước khi thực hiện phép chia -b/a để tránh lỗi ZeroDivisionError."
  },
  {
    id: 17,
    title: "Giải phương trình bậc hai ax² + bx + c = 0",
    level: 2,
    category: "Rẽ nhánh & Logic",
    description: "Nhập 3 hệ số a, b, c của phương trình ax² + bx + c = 0. Giải và tìm tất cả các nghiệm thực của phương trình.",
    inputFormat: "3 số thực a, b, c.",
    outputFormat: "Các nghiệm thực hoặc thông báo vô nghiệm.",
    exampleInput: "1 -3 2",
    exampleOutput: "Phương trình có 2 nghiệm phân biệt: x1 = 2.00, x2 = 1.00",
    explanation: "Delta = (-3)² - 4*1*2 = 9 - 8 = 1 > 0. x1 = (3 + 1)/2 = 2, x2 = (3 - 1)/2 = 1.",
    hint: "Nếu a == 0, quay về bậc nhất. Nếu a != 0, tính delta = b² - 4ac. Delta > 0: 2 nghiệm; Delta == 0: nghiệm kép; Delta < 0: vô nghiệm thực.",
    starterCode: `import math

a, b, c = map(float, input("Nhập a, b, c: ").split())
# Tính biệt thức Delta và giải...
`,
    solution: `import math

a, b, c = map(float, input("Nhập hệ số a, b, c: ").split())

if a == 0:
    # Trường hợp phương trình bậc nhất bx + c = 0
    if b == 0:
        print("Phương trình vô số nghiệm" if c == 0 else "Phương trình vô nghiệm")
    else:
        print(f"Phương trình bậc nhất có nghiệm x = {-c / b:.2f}")
else:
    delta = b**2 - 4 * a * c
    if delta > 0:
        x1 = (-b + math.sqrt(delta)) / (2 * a)
        x2 = (-b - math.sqrt(delta)) / (2 * a)
        print(f"Phương trình có 2 nghiệm phân biệt:")
        print(f"x1 = {x1:.2f}")
        print(f"x2 = {x2:.2f}")
    elif delta == 0:
        x_kep = -b / (2 * a)
        print(f"Phương trình có nghiệm kép: x1 = x2 = {x_kep:.2f}")
    else:
        print("Phương trình vô nghiệm trong tập số thực (Delta < 0).")`,
    codeExplanation: "Đây là bài toán kinh điển trong mọi giáo trình nhập môn. Cần xử lý cả trường hợp hệ số bậc hai a = 0."
  },
  {
    id: 18,
    title: "Tính tiền cước Taxi lũy tiến",
    level: 2,
    category: "Rẽ nhánh & Logic",
    description: "Nhập vào số km đi taxi. Bảng giá cước: Giá mở cửa (km đầu tiên): 15,000đ. Từ km thứ 2 đến km thứ 10: 13,500đ/km. Từ km thứ 11 đến km thứ 30: 11,000đ/km. Từ km thứ 31 trở đi: 9,000đ/km. Tính tổng tiền cước khách phải trả.",
    inputFormat: "Số thực km > 0.",
    outputFormat: "Tổng số tiền cước taxi.",
    exampleInput: "15",
    exampleOutput: "Tổng tiền cước cho 15.0 km là: 191,500 VNĐ",
    explanation: "1km đầu: 15,000. 9km tiếp (km 2-10): 9 * 13,500 = 121,500. 5km tiếp (km 11-15): 5 * 11,000 = 55,000. Tổng = 191,500.",
    hint: "Chia theo từng bậc khoảng cách để cộng dồn tiền cước tương ứng.",
    starterCode: `km = float(input("Nhập số km: "))
# Tính tiền cước theo từng bậc...
`,
    solution: `km = float(input("Nhập số km: "))
tong_tien = 0

if km <= 1:
    tong_tien = km * 15000
elif km <= 10:
    tong_tien = 15000 + (km - 1) * 13500
elif km <= 30:
    tong_tien = 15000 + (9 * 13500) + (km - 10) * 11000
else:
    tong_tien = 15000 + (9 * 13500) + (20 * 11000) + (km - 30) * 9000

print(f"Tổng tiền cước cho {km} km là: {tong_tien:,.0f} VNĐ")`,
    codeExplanation: "Cấu trúc bậc thang tích lũy giúp tính chính xác chi phí từng chặng đường mà xe đã đi qua."
  },
  {
    id: 19,
    title: "Tính tiền điện sinh hoạt bậc thang",
    level: 2,
    category: "Rẽ nhánh & Logic",
    description: "Tính tiền điện sinh hoạt theo số kWh tiêu thụ: Bậc 1 (0-50 kWh): 1,678 đ/kWh; Bậc 2 (51-100 kWh): 1,734 đ/kWh; Bậc 3 (101-200 kWh): 2,014 đ/kWh; Bậc 4 (trên 200 kWh): 2,536 đ/kWh. Thêm thuế VAT 8% vào tổng hóa đơn.",
    inputFormat: "Số nguyên dương kWh điện tiêu thụ.",
    outputFormat: "Tổng tiền điện trước thuế, thuế VAT 8% và tổng tiền thanh toán.",
    exampleInput: "120",
    exampleOutput: "Tiền điện chưa thuế: 210,880 đ\nThuế VAT (8%): 16,870 đ\nTổng thanh toán: 227,750 đ",
    explanation: "50 kWh bậc 1: 50*1678 = 83900. 50 kWh bậc 2: 50*1734 = 86700. 20 kWh bậc 3: 20*2014 = 40280. Tổng chưa VAT = 210880.",
    hint: "Áp dụng tư duy bậc thang tương tự bài tính cước taxi, sau đó nhân với 0.08 để tính thuế VAT.",
    starterCode: `kwh = int(input("Nhập số kWh: "))
# Tính tiền điện sinh hoạt...
`,
    solution: `kwh = int(input("Nhập số điện tiêu thụ (kWh): "))

if kwh <= 50:
    tien_chua_thue = kwh * 1678
elif kwh <= 100:
    tien_chua_thue = 50 * 1678 + (kwh - 50) * 1734
elif kwh <= 200:
    tien_chua_thue = 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014
else:
    tien_chua_thue = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536

thue_vat = tien_chua_thue * 0.08
tong_tien = tien_chua_thue + thue_vat

print(f"Tiền điện chưa thuế: {tien_chua_thue:,.0f} đ")
print(f"Thuế VAT (8%): {thue_vat:,.0f} đ")
print(f"Tổng thanh toán: {tong_tien:,.0f} đ")`,
    codeExplanation: "Đây là bài toán thực tế áp dụng trong biểu giá điện sinh hoạt của tập đoàn Điện lực Việt Nam (EVN)."
  },
  {
    id: 20,
    title: "Kiểm tra Ngày Tháng Năm hợp lệ",
    level: 2,
    category: "Rẽ nhánh & Logic",
    description: "Nhập vào 3 số nguyên ngày (d), tháng (m), năm (y). Kiểm tra xem ngày tháng năm đó có tồn tại trên thực tế hay không (lưu ý tháng 2 của năm nhuận có 29 ngày, năm thường có 28 ngày; các tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày; các tháng 4, 6, 9, 11 có 30 ngày).",
    inputFormat: "3 số nguyên d, m, y.",
    outputFormat: "Thông báo hợp lệ hoặc không hợp lệ.",
    exampleInput: "29 2 2024",
    exampleOutput: "Ngày 29/02/2024 là ngày HỢP LỆ",
    explanation: "2024 là năm nhuận nên tháng 2 có ngày 29.",
    hint: "Viết hàm hoặc logic xác định số ngày tối đa trong tháng m của năm y, sau đó kiểm tra 1 <= d <= max_day.",
    starterCode: `d, m, y = map(int, input("Nhập ngày tháng năm (d m y): ").split())
# Kiểm tra tính hợp lệ...
`,
    solution: `d, m, y = map(int, input("Nhập ngày, tháng, năm: ").split())

hop_le = True

if y < 1 or m < 1 or m > 12:
    hop_le = False
else:
    # Kiểm tra năm nhuận
    la_nam_nhuan = (y % 400 == 0) or (y % 4 == 0 and y % 100 != 0)
    
    # Xác định số ngày tối đa của tháng m
    if m in [1, 3, 5, 7, 8, 10, 12]:
        so_ngay_max = 31
    elif m in [4, 6, 9, 11]:
        so_ngay_max = 30
    else: # Tháng 2
        so_ngay_max = 29 if la_nam_nhuan else 28
    
    if d < 1 or d > so_ngay_max:
        hop_le = False

if hop_le:
    print(f"Ngày {d:02d}/{m:02d}/{y} là ngày HỢP LỆ.")
else:
    print(f"Ngày {d}/{m}/{y} là ngày KHÔNG HỢP LỆ!")`,
    codeExplanation: "Xác định số ngày tối đa của tháng bằng cấu trúc rẽ nhánh, sau đó kiểm tra giới hạn của ngày d."
  },

  // ==========================================
  // LEVEL 3: VÒNG LẶP & THUẬT TOÁN SỐ HỌC (21 - 30)
  // ==========================================
  {
    id: 21,
    title: "In Bảng Cửu Chương từ 1 đến 9",
    level: 3,
    category: "Vòng lặp & Số học",
    description: "Viết chương trình in ra bảng cửu chương hoàn chỉnh từ 1 đến 9 bằng vòng lặp lồng nhau.",
    inputFormat: "Không yêu cầu input.",
    outputFormat: "Các phép tính bảng cửu chương được định dạng rõ ràng.",
    exampleInput: "Chạy trực tiếp",
    exampleOutput: "Bảng cửu chương 2:\n2 x 1 = 2\n2 x 2 = 4\n...\n2 x 10 = 20",
    explanation: "Duyệt vòng lặp ngoài từ 1 đến 9, vòng lặp trong từ 1 đến 10.",
    hint: "Dùng 2 vòng lặp for lồng nhau: `for i in range(1, 10): for j in range(1, 11): print(f'{i} x {j} = {i*j}')`",
    starterCode: `# In bảng cửu chương...
`,
    solution: `print("=== BẢNG CỬU CHƯƠNG TỪ 1 ĐẾN 9 ===")
for i in range(1, 10):
    print(f"--- BẢNG {i} ---")
    for j in range(1, 11):
        print(f"{i} x {j:2d} = {i * j:2d}")
    print()  # In dòng trống giữa các bảng`,
    codeExplanation: "Vòng lặp for lồng nhau (Nested loop) cho phép chạy qua từng bảng (i) và từng số nhân (j)."
  },
  {
    id: 22,
    title: "Tính tổng dãy số S = 1 + 2 + ... + N",
    level: 3,
    category: "Vòng lặp & Số học",
    description: "Nhập số nguyên dương N. Tính tổng S = 1 + 2 + 3 + ... + N bằng vòng lặp for hoặc while và so sánh với công thức toán Gauss: N * (N + 1) / 2.",
    inputFormat: "Một số nguyên dương N.",
    outputFormat: "Tổng S tính bằng vòng lặp và bằng công thức.",
    exampleInput: "100",
    exampleOutput: "Tổng tính bằng vòng lặp: 5050\nTổng tính bằng công thức Gauss: 5050",
    explanation: "1 + 2 + ... + 100 = 100 * 101 / 2 = 5050.",
    hint: "Khởi tạo tong = 0. Duyệt i từ 1 đến N, mỗi bước cộng dồn tong += i.",
    starterCode: `n = int(input("Nhập N: "))
# Tính tổng bằng vòng lặp...
`,
    solution: `n = int(input("Nhập số nguyên dương N: "))

# Cách 1: Dùng vòng lặp for tích lũy
tong = 0
for i in range(1, n + 1):
    tong += i

# Cách 2: Dùng công thức Gauss (O(1) thời gian)
tong_gauss = n * (n + 1) // 2

print(f"Tổng tính bằng vòng lặp: {tong}")
print(f"Tổng tính bằng công thức Gauss: {tong_gauss}")`,
    codeExplanation: "Biến cộng dồn (Accumulator pattern) là mẫu tư duy nền tảng trong lập trình để tích lũy giá trị qua từng vòng lặp."
  },
  {
    id: 23,
    title: "Tính Giai Thừa N! (Factorial)",
    level: 3,
    category: "Vòng lặp & Số học",
    description: "Nhập vào số nguyên không âm N (0 <= N). Tính giai thừa N! = 1 * 2 * 3 * ... * N. Quy ước 0! = 1.",
    inputFormat: "Một số nguyên N >= 0.",
    outputFormat: "Giá trị của N!.",
    exampleInput: "5",
    exampleOutput: "5! = 120",
    explanation: "5! = 1 * 2 * 3 * 4 * 5 = 120.",
    hint: "Khởi tạo biến giai_thua = 1. Duyệt từ 1 đến N và nhân dồn: giai_thua *= i.",
    starterCode: `n = int(input("Nhập N: "))
# Tính N!...
`,
    solution: `n = int(input("Nhập N (N >= 0): "))

if n < 0:
    print("Không tồn tại giai thừa của số âm!")
else:
    giai_thua = 1
    for i in range(1, n + 1):
        giai_thua *= i
    print(f"{n}! = {giai_thua}")`,
    codeExplanation: "Trong Python, số nguyên có kích thước tùy biến (Arbitrary Precision) nên bạn có thể tính giai thừa của số rất lớn như 100! mà không bao giờ bị tràn số như trong C++ hay Java."
  },
  {
    id: 24,
    title: "Đếm số chữ số của một số nguyên",
    level: 3,
    category: "Vòng lặp & Số học",
    description: "Nhập một số nguyên dương N. Đếm xem số đó có bao nhiêu chữ số bằng cách sử dụng vòng lặp chia nguyên cho 10.",
    inputFormat: "Một số nguyên dương N.",
    outputFormat: "Số lượng chữ số của N.",
    exampleInput: "987654",
    exampleOutput: "Số 987654 có 6 chữ số.",
    explanation: "Số 987654 có 6 chữ số: 9, 8, 7, 6, 5, 4.",
    hint: "Dùng vòng lặp while n > 0: chia n //= 10 và tăng biến đếm count += 1.",
    starterCode: `n = int(input("Nhập N: "))
# Đếm số chữ số...
`,
    solution: `n = int(input("Nhập số nguyên dương N: "))
temp = n
count = 0

if temp == 0:
    count = 1
else:
    while temp > 0:
        count += 1
        temp //= 10  # Cắt bỏ chữ số cuối cùng

print(f"Số {n} có {count} chữ số.")`,
    codeExplanation: "Mỗi lần chia nguyên cho 10 (temp //= 10), ta loại bỏ đi chữ số hàng đơn vị cho đến khi số trở về 0."
  },
  {
    id: 25,
    title: "Đảo ngược một số nguyên",
    level: 3,
    category: "Vòng lặp & Số học",
    description: "Nhập một số nguyên dương N. Hãy tạo ra một số nguyên mới có các chữ số đảo ngược thứ tự so với số ban đầu (ví dụ: 12345 -> 54321) bằng thuật toán số học.",
    inputFormat: "Số nguyên dương N.",
    outputFormat: "Số đảo ngược.",
    exampleInput: "12345",
    exampleOutput: "Số đảo ngược của 12345 là: 54321",
    explanation: "12345 đảo ngược thành 54321.",
    hint: "Công thức đảo số học: so_dao = so_dao * 10 + (n % 10); n = n // 10.",
    starterCode: `n = int(input("Nhập N: "))
# Đảo ngược số bằng thuật toán số học...
`,
    solution: `n = int(input("Nhập số nguyên dương N: "))
so_goc = n
so_dao = 0

while n > 0:
    chu_so_cuoi = n % 10
    so_dao = so_dao * 10 + chu_so_cuoi
    n //= 10

print(f"Số đảo ngược của {so_goc} là: {so_dao}")`,
    codeExplanation: "Đây là thuật toán đảo số kinh điển không cần ép kiểu sang chuỗi, rèn luyện tư duy toán học cho sinh viên."
  },
  {
    id: 26,
    title: "Kiểm tra Số đối xứng (Palindrome Number)",
    level: 3,
    category: "Vòng lặp & Số học",
    description: "Một số đối xứng là số đọc xuôi hay đọc ngược đều cho cùng một giá trị (ví dụ: 121, 1331, 12321). Hãy viết chương trình kiểm tra một số nhập vào có phải số đối xứng hay không.",
    inputFormat: "Một số nguyên dương N.",
    outputFormat: "Thông báo N là số đối xứng hay không.",
    exampleInput: "12321",
    exampleOutput: "12321 là số đối xứng (Palindrome)",
    explanation: "Số 12321 đảo ngược lại vẫn là 12321.",
    hint: "Tái sử dụng thuật toán đảo số ở Bài 25. So sánh xem so_dao == so_goc hay không.",
    starterCode: `n = int(input("Nhập N: "))
# Kiểm tra số đối xứng...
`,
    solution: `n = int(input("Nhập số nguyên N: "))

so_goc = n
so_dao = 0

temp = n
while temp > 0:
    so_dao = so_dao * 10 + (temp % 10)
    temp //= 10

if so_dao == so_goc:
    print(f"Số {so_goc} là số đối xứng (Palindrome) ✅")
else:
    print(f"Số {so_goc} KHÔNG phải là số đối xứng ❌ (Đảo ngược là {so_dao})")`,
    codeExplanation: "So sánh giá trị gốc ban đầu với giá trị sau khi đã đảo ngược các chữ số."
  },
  {
    id: 27,
    title: "Kiểm tra Số nguyên tố (Tối ưu căn bậc hai)",
    level: 3,
    category: "Vòng lặp & Số học",
    description: "Nhập một số nguyên N. Kiểm tra xem N có phải số nguyên tố hay không bằng thuật toán tối ưu chỉ duyệt đến căn bậc hai của N (O(sqrt(N))).",
    inputFormat: "Một số nguyên N.",
    outputFormat: "Thông báo N là số nguyên tố hoặc hợp số.",
    exampleInput: "29",
    exampleOutput: "29 là số nguyên tố",
    explanation: "29 chỉ chia hết cho 1 và chính nó.",
    hint: "Nếu N <= 1: không phải số nguyên tố. Duyệt i từ 2 đến int(math.isqrt(N)). Nếu N % i == 0 thì N không phải số nguyên tố.",
    starterCode: `import math

n = int(input("Nhập N: "))
# Kiểm tra số nguyên tố tối ưu...
`,
    solution: `import math

n = int(input("Nhập số nguyên N: "))

if n <= 1:
    la_nguyen_to = False
elif n <= 3:
    la_nguyen_to = True
elif n % 2 == 0 or n % 3 == 0:
    la_nguyen_to = False
else:
    la_nguyen_to = True
    # Chỉ cần kiểm tra các ước từ 5 đến căn bậc 2 của n với bước nhảy 6
    can_n = int(math.isqrt(n))
    for i in range(5, can_n + 1, 6):
        if n % i == 0 or n % (i + 2) == 0:
            la_nguyen_to = False
            break

if la_nguyen_to:
    print(f"{n} là số nguyên tố! 🌟")
else:
    print(f"{n} KHÔNG phải là số nguyên tố.")`,
    codeExplanation: "Độ phức tạp giảm từ O(N) xuống O(sqrt(N)), tối ưu tốc độ gấp hàng ngàn lần khi kiểm tra các số lớn."
  },
  {
    id: 28,
    title: "In ra N số nguyên tố đầu tiên",
    level: 3,
    category: "Vòng lặp & Số học",
    description: "Nhập số nguyên dương N. Hãy in ra N số nguyên tố đầu tiên trên cùng một dòng.",
    inputFormat: "Một số nguyên dương N.",
    outputFormat: "Dãy N số nguyên tố cách nhau bởi dấu cách.",
    exampleInput: "8",
    exampleOutput: "2 3 5 7 11 13 17 19",
    explanation: "8 số nguyên tố đầu tiên là 2, 3, 5, 7, 11, 13, 17, 19.",
    hint: "Viết hàm kiem_tra_nguyen_to(x). Dùng vòng lặp while với biến đếm dem < N. Bắt đầu thử từ x = 2.",
    starterCode: `n = int(input("Nhập số lượng N: "))
# In N số nguyên tố đầu tiên...
`,
    solution: `import math

def la_snt(x):
    if x < 2: return False
    for i in range(2, int(math.isqrt(x)) + 1):
        if x % i == 0:
            return False
    return True

n = int(input("Nhập số lượng số nguyên tố cần tìm: "))
dem = 0
so_hien_tai = 2
ket_qua = []

while dem < n:
    if la_snt(so_hien_tai):
        ket_qua.append(so_hien_tai)
        dem += 1
    so_hien_tai += 1

print(f"{n} số nguyên tố đầu tiên:")
print(*ket_qua)`,
    codeExplanation: "Sử dụng toán tử gỡ gói *ket_qua để in tất cả các phần tử trong list cách nhau bởi dấu cách."
  },
  {
    id: 29,
    title: "Tìm UCLN và BCNN (Thuật toán Euclid)",
    level: 3,
    category: "Vòng lặp & Số học",
    description: "Nhập vào 2 số nguyên dương a và b. Tìm ước chung lớn nhất (UCLN) và bội chung nhỏ nhất (BCNN) bằng thuật toán Euclid.",
    inputFormat: "Hai số nguyên dương a và b.",
    outputFormat: "UCLN và BCNN của a và b.",
    exampleInput: "24 36",
    exampleOutput: "UCLN(24, 36) = 12\nBCNN(24, 36) = 72",
    explanation: "UCLN của 24 và 36 là 12. BCNN = (24 * 36) / 12 = 72.",
    hint: "Thuật toán Euclid: while b != 0: a, b = b, a % b. Khi đó a chính là UCLN. BCNN = (a_ban_dau * b_ban_dau) // UCLN.",
    starterCode: `a, b = map(int, input("Nhập a và b: ").split())
# Thuật toán Euclid tìm UCLN...
`,
    solution: `a, b = map(int, input("Nhập hai số nguyên dương a và b: ").split())

so_a, so_b = a, b

# Thuật toán Euclid
while b != 0:
    a, b = b, a % b

ucln = a
bcnn = (so_a * so_b) // ucln

print(f"UCLN({so_a}, {so_b}) = {ucln}")
print(f"BCNN({so_a}, {so_b}) = {bcnn}")`,
    codeExplanation: "Thuật toán Euclid là một trong những thuật toán cổ xưa và thanh lịch nhất của toán học và khoa học máy tính."
  },
  {
    id: 30,
    title: "In dãy số Fibonacci đến phần tử thứ N",
    level: 3,
    category: "Vòng lặp & Số học",
    description: "Dãy Fibonacci bắt đầu bằng F0 = 0, F1 = 1, và Fn = Fn-1 + Fn-2. Nhập số nguyên N (N >= 1), in ra N số đầu tiên của dãy Fibonacci.",
    inputFormat: "Một số nguyên dương N.",
    outputFormat: "Dãy N số Fibonacci.",
    exampleInput: "8",
    exampleOutput: "0 1 1 2 3 5 8 13",
    explanation: "0, 1, 0+1=1, 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13.",
    hint: "Khởi tạo a = 0, b = 1. Trong vòng lặp: in a, sau đó cập nhật a, b = b, a + b.",
    starterCode: `n = int(input("Nhập N: "))
# In dãy Fibonacci...
`,
    solution: `n = int(input("Nhập số phần tử Fibonacci cần in: "))

a, b = 0, 1
fib_list = []

for _ in range(n):
    fib_list.append(a)
    a, b = b, a + b

print(f"{n} số Fibonacci đầu tiên:")
print(*fib_list)`,
    codeExplanation: "Kỹ thuật tịnh tiến 2 biến a, b = b, a + b tính số Fibonacci kế tiếp trong thời gian O(1) và không gian O(1)."
  },

  // ==========================================
  // LEVEL 4: XỬ LÝ CHUỖI & DANH SÁCH (31 - 40)
  // ==========================================
  {
    id: 31,
    title: "Vẽ Kim Tự Tháp Sao bằng Vòng Lặp",
    level: 4,
    category: "Chuỗi & Danh sách",
    description: "Nhập chiều cao h (số nguyên dương). In ra một tam giác cân (kim tự tháp) gồm các ký tự '*' có chiều cao h.",
    inputFormat: "Một số nguyên dương h.",
    outputFormat: "Hình kim tự tháp sao cân đối.",
    exampleInput: "4",
    exampleOutput: "   *\n  ***\n *****\n*******",
    explanation: "Dòng i (từ 1 đến h) có (h - i) khoảng trắng và (2*i - 1) ngôi sao.",
    hint: "Tại mỗi dòng i: in khoảng trắng ' ' * (h - i) kết hợp với '*' * (2*i - 1).",
    starterCode: `h = int(input("Nhập chiều cao h: "))
# Vẽ kim tự tháp...
`,
    solution: `h = int(input("Nhập chiều cao h: "))

for i in range(1, h + 1):
    khoang_trang = " " * (h - i)
    ngoi_sao = "*" * (2 * i - 1)
    print(khoang_trang + ngoi_sao)`,
    codeExplanation: "Tận dụng toán tử nhân bản chuỗi của Python: ' ' * n tạo ra chuỗi n dấu cách."
  },
  {
    id: 32,
    title: "Đếm Nguyên Âm và Phụ Âm trong chuỗi",
    level: 4,
    category: "Chuỗi & Danh sách",
    description: "Nhập một chuỗi ký tự bất kỳ. Đếm xem có bao nhiêu nguyên âm (a, e, i, o, u) và bao nhiêu phụ âm (chỉ tính các chữ cái tiếng Anh, bỏ qua dấu cách và số).",
    inputFormat: "Một chuỗi văn bản.",
    outputFormat: "Số nguyên âm và số phụ âm.",
    exampleInput: "Hello World 2026",
    exampleOutput: "Nguyên âm: 3\nPhụ âm: 7",
    explanation: "Chữ cái: H, e, l, l, o, W, o, r, l, d. Nguyên âm: e, o, o (3). Phụ âm: H, l, l, W, r, l, d (7).",
    hint: "Chuyển chuỗi về chữ thường bằng .lower(). Dùng char.isalpha() để kiểm tra có phải chữ cái hay không, sau đó kiểm tra char in 'aeiou'.",
    starterCode: `s = input("Nhập chuỗi: ")
# Đếm nguyên âm và phụ âm...
`,
    solution: `s = input("Nhập văn bản: ")

nguyen_am_count = 0
phu_am_count = 0
nguyen_am_set = "aeiou"

for char in s.lower():
    if char.isalpha():  # Kiểm tra ký tự là chữ cái
        if char in nguyen_am_set:
            nguyen_am_count += 1
        else:
            phu_am_count += 1

print(f"Số nguyên âm: {nguyen_am_count}")
print(f"Số phụ âm: {phu_am_count}")`,
    codeExplanation: "Hàm .isalpha() lọc bỏ các ký tự số, ký tự đặc biệt và dấu cách."
  },
  {
    id: 33,
    title: "Chuẩn hóa Họ Tên người dùng",
    level: 4,
    category: "Chuỗi & Danh sách",
    description: "Nhập vào một chuỗi họ tên bị lỗi định dạng (thừa khoảng trắng lung tung, chữ hoa chữ thường lộn xộn, ví dụ: '  nGuYEn   vAn    aN  '). Hãy chuẩn hóa về dạng chuẩn: mỗi từ cách nhau 1 dấu cách, chữ cái đầu viết hoa, các chữ còn lại viết thường ('Nguyen Van An').",
    inputFormat: "Chuỗi họ tên chưa chuẩn hóa.",
    outputFormat: "Chuỗi họ tên đã được chuẩn hóa đẹp đẽ.",
    exampleInput: "   tRaN   thI   mAiphuong   ",
    exampleOutput: "Tran Thi Maiphuong",
    explanation: "Tách các từ, viết hoa chữ cái đầu bằng .capitalize() và ghép lại bằng ' '.join().",
    hint: "Dùng s.split() không tham số để tự động gom và loại bỏ mọi khoảng trắng thừa, sau đó duyệt từng từ áp dụng .capitalize() rồi ' '.join().",
    starterCode: `s = input("Nhập họ tên: ")
# Chuẩn hóa họ tên...
`,
    solution: `ho_ten = input("Nhập họ tên: ")

# 1. Tách chuỗi theo khoảng trắng (tự động loại bỏ khoảng trắng thừa)
cac_tu = ho_ten.split()

# 2. Chuẩn hóa từng từ (chữ đầu viết hoa, còn lại viết thường)
cac_tu_chuan = [tu.capitalize() for tu in cac_tu]

# 3. Nối lại bằng 1 khoảng trắng duy nhất
ket_qua = " ".join(cac_tu_chuan)

print(f"Họ tên sau chuẩn hóa: '{ket_qua}'")`,
    codeExplanation: "s.split() khi không truyền tham số sẽ tự động phân tách theo bất kỳ khoảng trắng liên tiếp nào."
  },
  {
    id: 34,
    title: "Kiểm tra Chuỗi Đối Xứng (Palindrome String)",
    level: 4,
    category: "Chuỗi & Danh sách",
    description: "Kiểm tra một chuỗi có phải chuỗi đối xứng hay không. Bỏ qua các ký tự không phải chữ/số và không phân biệt chữ hoa, chữ thường (Ví dụ: 'A man, a plan, a canal: Panama' là đối xứng).",
    inputFormat: "Một chuỗi văn bản.",
    outputFormat: "Thông báo chuỗi có đối xứng hay không.",
    exampleInput: "Race a car",
    exampleOutput: "Chuỗi 'Race a car' KHÔNG phải chuỗi đối xứng.",
    explanation: "Lọc bỏ ký tự chỉ còn 'raceacar', đảo lại là 'racaecar' (không trùng).",
    hint: "Lọc các ký tự bằng [c.lower() for c in s if c.isalnum()]. Sau đó so sánh chuỗi đó với chuỗi đảo ngược [::-1].",
    starterCode: `s = input("Nhập chuỗi: ")
# Kiểm tra chuỗi Palindrome...
`,
    solution: `s = input("Nhập chuỗi kiểm tra: ")

# Lọc chỉ lấy chữ và số, chuyển về chữ thường
clean_str = "".join([c.lower() for c in s if c.isalnum()])

if clean_str == clean_str[::-1]:
    print(f"Chuỗi đối xứng (Palindrome) hợp lệ! 🎉")
    print(f"Chuỗi sau xử lý: '{clean_str}' == '{clean_str[::-1]}'")
else:
    print(f"KHÔNG phải chuỗi đối xứng.")`,
    codeExplanation: "Đây là bài toán nổi tiếng xuất hiện ở các vòng phỏng vấn kỹ thuật của Google, Meta."
  },
  {
    id: 35,
    title: "Tìm Min, Max và Vị trí trong Danh sách",
    level: 4,
    category: "Chuỗi & Danh sách",
    description: "Nhập một danh sách các số nguyên. Tìm giá trị lớn nhất, nhỏ nhất cùng với vị trí (chỉ số index) đầu tiên xuất hiện của chúng trong danh sách.",
    inputFormat: "Dãy số nguyên trên một dòng cách nhau bởi dấu cách.",
    outputFormat: "Giá trị Max, vị trí Max; Giá trị Min, vị trí Min.",
    exampleInput: "12 45 8 99 23 99 5",
    exampleOutput: "Max = 99 tại vị trí index 3\nMin = 5 tại vị trí index 6",
    explanation: "Số lớn nhất là 99 xuất hiện đầu tiên tại index 3, số nhỏ nhất là 5 tại index 6.",
    hint: "Dùng max(arr), min(arr) và hàm arr.index(val) để tìm vị trí xuất hiện đầu tiên.",
    starterCode: `arr = list(map(int, input("Nhập danh sách số: ").split()))
# Tìm min, max và index...
`,
    solution: `arr = list(map(int, input("Nhập danh sách các số nguyên: ").split()))

if not arr:
    print("Danh sách rỗng!")
else:
    max_val = max(arr)
    min_val = min(arr)
    
    max_idx = arr.index(max_val)
    min_idx = arr.index(min_val)
    
    print(f"Giá trị lớn nhất (Max): {max_val} tại vị trí index: {max_idx}")
    print(f"Giá trị nhỏ nhất (Min): {min_val} tại vị trí index: {min_idx}")`,
    codeExplanation: "arr.index(x) trả về vị trí index đầu tiên có giá trị bằng x trong danh sách."
  },
  {
    id: 36,
    title: "Tính Trung Bình Cộng các số dương trong List",
    level: 4,
    category: "Chuỗi & Danh sách",
    description: "Nhập vào một danh sách các số thực (bao gồm cả số âm, số 0 và số dương). Hãy lọc ra và tính trung bình cộng của các số dương (> 0).",
    inputFormat: "Dãy số thực cách nhau bởi dấu cách.",
    outputFormat: "Trung bình cộng các số dương, hoặc thông báo nếu không có số dương nào.",
    exampleInput: "-5 10 0 20 -3 30",
    exampleOutput: "Trung bình cộng các số dương: 20.00",
    explanation: "Các số dương là: [10, 20, 30]. Tổng = 60, số lượng = 3. TBC = 60 / 3 = 20.0.",
    hint: "Dùng List Comprehension: `so_duong = [x for x in arr if x > 0]`. Kiểm tra len(so_duong) > 0 trước khi chia.",
    starterCode: `arr = list(map(float, input("Nhập dãy số: ").split()))
# Lọc số dương và tính trung bình cộng...
`,
    solution: `arr = list(map(float, input("Nhập các số thực: ").split()))

# Lọc các số lớn hơn 0
so_duong = [x for x in arr if x > 0]

if so_duong:
    tbc = sum(so_duong) / len(so_duong)
    print(f"Các số dương: {so_duong}")
    print(f"Trung bình cộng: {tbc:.2f}")
else:
    print("Trong danh sách không có số dương nào!")`,
    codeExplanation: "List comprehension kết hợp sum() và len() tạo nên đoạn mã vừa ngắn gọn vừa hiệu quả."
  },
  {
    id: 37,
    title: "Tách Danh Sách Số Chẵn và Số Lẻ",
    level: 4,
    category: "Chuỗi & Danh sách",
    description: "Nhập một danh sách các số nguyên. Hãy tách thành 2 danh sách riêng biệt: một danh sách gồm toàn các số chẵn và một danh sách gồm toàn các số lẻ.",
    inputFormat: "Dãy số nguyên cách nhau bởi khoảng trắng.",
    outputFormat: "In danh sách số chẵn và danh sách số lẻ.",
    exampleInput: "1 2 3 4 5 6 7 8 9 10",
    exampleOutput: "Danh sách chẵn: [2, 4, 6, 8, 10]\nDanh sách lẻ: [1, 3, 5, 7, 9]",
    explanation: "Phân loại theo điều kiện x % 2 == 0.",
    hint: "Dùng 2 biểu thức list comprehension: [x for x in arr if x % 2 == 0] và [x for x in arr if x % 2 != 0].",
    starterCode: `arr = list(map(int, input("Nhập dãy số: ").split()))
# Tách chẵn lẻ...
`,
    solution: `arr = list(map(int, input("Nhập dãy số: ").split()))

so_chan = [x for x in arr if x % 2 == 0]
so_le = [x for x in arr if x % 2 != 0]

print(f"Danh sách số chẵn ({len(so_chan)} số): {so_chan}")
print(f"Danh sách số lẻ ({len(so_le)} số): {so_le}")`,
    codeExplanation: "Cực kỳ ngắn gọn nhờ cú pháp List Comprehension của Python."
  },
  {
    id: 38,
    title: "Xóa Trùng Lặp Giữ Nguyên Thứ Tự Ban Đầu",
    level: 4,
    category: "Chuỗi & Danh sách",
    description: "Nhập một danh sách các phần tử có thể bị trùng lặp. Hãy loại bỏ các phần tử trùng lặp sao cho mỗi phần tử chỉ xuất hiện 1 lần và VẪN GIỮ NGUYÊN thứ tự xuất hiện ban đầu.",
    inputFormat: "Dãy phần tử cách nhau bởi dấu cách.",
    outputFormat: "Danh sách sau khi xóa trùng lặp.",
    exampleInput: "apple banana apple orange banana kiwi",
    exampleOutput: "['apple', 'banana', 'orange', 'kiwi']",
    explanation: "'apple' và 'banana' xuất hiện lần 2 bị loại bỏ, giữ lại lần xuất hiện đầu tiên.",
    hint: "Dùng set() sẽ làm mất thứ tự! Hãy dùng một set 'da_gap' để kiểm tra nhanh O(1) và thêm vào một list mới nếu chưa gặp.",
    starterCode: `arr = input("Nhập các phần tử: ").split()
# Xóa trùng lặp giữ nguyên thứ tự...
`,
    solution: `arr = input("Nhập các phần tử cách nhau bởi dấu cách: ").split()

da_gap = set()
ket_qua = []

for item in arr:
    if item not in da_gap:
        da_gap.add(item)
        ket_qua.append(item)

print("Danh sách sau khi loại bỏ trùng lặp:")
print(ket_qua)`,
    codeExplanation: "Kết hợp set để tra cứu phần tử đã gặp với độ phức tạp O(1) và list để duy trì đúng thứ tự ban đầu."
  },
  {
    id: 39,
    title: "Đảo ngược Danh sách không dùng hàm có sẵn",
    level: 4,
    category: "Chuỗi & Danh sách",
    description: "Nhập một danh sách các phần tử. Không dùng arr.reverse() hay arr[::-1], hãy đảo ngược danh sách tại chỗ bằng kỹ thuật 2 con trỏ (Two Pointers).",
    inputFormat: "Dãy phần tử cách nhau bởi khoảng trắng.",
    outputFormat: "Danh sách sau khi đảo ngược.",
    exampleInput: "1 2 3 4 5",
    exampleOutput: "[5, 4, 3, 2, 1]",
    explanation: "Đổi chỗ phần tử đầu và cuối, tiến dần vào giữa.",
    hint: "Đặt con trỏ trái left = 0, con trỏ phải right = len(arr) - 1. Khi left < right: hoán đổi arr[left], arr[right] = arr[right], arr[left] rồi tăng left, giảm right.",
    starterCode: `arr = input("Nhập danh sách: ").split()
# Kỹ thuật hai con trỏ đảo danh sách...
`,
    solution: `arr = input("Nhập danh sách các phần tử: ").split()

left = 0
right = len(arr) - 1

while left < right:
    # Hoán đổi hai phần tử đối xứng
    arr[left], arr[right] = arr[right], arr[left]
    left += 1
    right -= 1

print("Danh sách sau khi đảo ngược:")
print(arr)`,
    codeExplanation: "Kỹ thuật Two Pointers là một trong những kỹ thuật cơ bản nhất trong thuật toán, đạt độ phức tạp O(N) và O(1) bộ nhớ phụ."
  },
  {
    id: 40,
    title: "Tìm Phần Tử Lớn Thứ Nhì (Second Largest)",
    level: 4,
    category: "Chuỗi & Danh sách",
    description: "Nhập một danh sách các số nguyên. Tìm giá trị lớn thứ nhì (khác với giá trị lớn nhất). Nếu tất cả các số đều bằng nhau, hãy thông báo không tồn tại.",
    inputFormat: "Dãy số nguyên.",
    outputFormat: "Giá trị lớn thứ hai trong dãy.",
    exampleInput: "10 5 20 20 8 15",
    exampleOutput: "Số lớn thứ nhì là: 15",
    explanation: "Số lớn nhất là 20. Số lớn tiếp theo phân biệt là 15.",
    hint: "Loại bỏ trùng lặp bằng set(), chuyển thành list rồi sắp xếp giảm dần, hoặc duyệt 1 lượt duy trì 2 biến max1 và max2.",
    starterCode: `arr = list(map(int, input("Nhập các số: ").split()))
# Tìm số lớn thứ nhì...
`,
    solution: `arr = list(map(int, input("Nhập danh sách số nguyên: ").split()))

# Loại bỏ các số trùng lặp
tap_hop_so = list(set(arr))

if len(tap_hop_so) < 2:
    print("Không tồn tại số lớn thứ nhì (danh sách có ít hơn 2 giá trị khác nhau)!")
else:
    tap_hop_so.sort(reverse=True)
    so_lon_nhi = tap_hop_so[1]
    print(f"Số lớn nhất: {tap_hop_so[0]}")
    print(f"Số lớn thứ nhì: {so_lon_nhi}")`,
    codeExplanation: "Chuyển sang set để loại bỏ các số lớn nhất bị trùng lặp (ví dụ hai số 20), sau đó sort giảm dần để lấy phần tử tại index 1."
  },

  // ==========================================
  // LEVEL 5: DICTIONARY, HÀM & THUẬT TOÁN (41 - 50)
  // ==========================================
  {
    id: 41,
    title: "Đếm Tần Suất Xuất Hiện của Từ (Word Count)",
    level: 5,
    category: "Dict & Thuật toán",
    description: "Nhập một đoạn văn bản. Đếm số lần xuất hiện của mỗi từ trong đoạn văn đó (không phân biệt chữ hoa, chữ thường, bỏ qua dấu câu) và in kết quả sắp xếp theo số lần xuất hiện giảm dần.",
    inputFormat: "Một đoạn văn bản tiếng Anh hoặc tiếng Việt.",
    outputFormat: "Bảng thống kê từ và tần suất xuất hiện.",
    exampleInput: "Python is easy. Python is powerful! Python is fun.",
    exampleOutput: "python: 3 lần\nis: 3 lần\neasy: 1 lần\npowerful: 1 lần\nfun: 1 lần",
    explanation: "Từ 'python' và 'is' xuất hiện 3 lần, các từ khác 1 lần.",
    hint: "Dùng từ điển (Dictionary) để đếm: `dem[tu] = dem.get(tu, 0) + 1`.",
    starterCode: `text = input("Nhập đoạn văn: ")
# Đếm tần suất từ...
`,
    solution: `import re

text = input("Nhập đoạn văn bản: ")

# Tách từ, bỏ dấu câu và chuyển về chữ thường
cac_tu = re.findall(r'\\w+', text.lower())

tan_suat = {}
for tu in cac_tu:
    tan_suat[tu] = tan_suat.get(tu, 0) + 1

# Sắp xếp theo số lần xuất hiện giảm dần
sorted_words = sorted(tan_suat.items(), key=lambda x: x[1], reverse=True)

print("--- THỐNG KÊ TẦN SUẤT XUẤT HIỆN ---")
for tu, so_lan in sorted_words:
    print(f"{tu:<15}: {so_lan} lần")`,
    codeExplanation: "re.findall(r'\\w+', text) giúp lọc toàn bộ từ ngữ loại bỏ dấu câu; dict.get(key, default) tránh lỗi KeyError."
  },
  {
    id: 42,
    title: "Gom Nhóm Sinh Viên theo Xếp Loại (Grouping)",
    level: 5,
    category: "Dict & Thuật toán",
    description: "Cho danh sách sinh viên gồm họ tên và điểm trung bình. Hãy gom nhóm các sinh viên vào một Dictionary theo xếp loại học lực (Giỏi: >=8.0, Khá: 6.5-7.9, Trung bình: còn lại).",
    inputFormat: "Dữ liệu mẫu sinh viên định dạng tên:điểm.",
    outputFormat: "Dictionary chứa các nhóm học lực và danh sách sinh viên trong nhóm đó.",
    exampleInput: "An:8.5,Binh:7.0,Cuong:9.0,Dung:5.5,Hoa:6.8",
    exampleOutput: "{'Giỏi': ['An', 'Cuong'], 'Khá': ['Binh', 'Hoa'], 'Trung bình': ['Dung']}",
    explanation: "An và Cường có điểm >= 8.0 vào nhóm Giỏi...",
    hint: "Khởi tạo dict với các danh sách rỗng: groups = {'Giỏi': [], 'Khá': [], 'Trung bình': []}.",
    starterCode: `du_lieu = input("Nhập danh sách SV (Ten:Diem, cách nhau dấu phẩy): ")
# Gom nhóm sinh viên...
`,
    solution: `du_lieu = input("Nhập danh sách SV (vd: An:8.5,Binh:7.0,Cuong:9.0): ")

nhom = {
    "Giỏi": [],
    "Khá": [],
    "Trung bình": []
}

for item in du_lieu.split(","):
    if ":" in item:
        ten, diem_str = item.split(":")
        diem = float(diem_str)
        
        if diem >= 8.0:
            nhom["Giỏi"].append(ten.strip())
        elif diem >= 6.5:
            nhom["Khá"].append(ten.strip())
        else:
            nhom["Trung bình"].append(ten.strip())

print("Kết quả gom nhóm:")
for loai, dssv in nhom.items():
    print(f"- {loai} ({len(dssv)} bạn): {', '.join(dssv)}")`,
    codeExplanation: "Mô hình Gom nhóm dữ liệu (Data Grouping / Bucket pattern) là nền tảng của kỹ thuật xử lý dữ liệu và SQL GROUP BY."
  },
  {
    id: 43,
    title: "Kiểm tra Hai Chuỗi Đảo Ngữ (Anagram)",
    level: 5,
    category: "Dict & Thuật toán",
    description: "Hai chuỗi được gọi là đảo ngữ (Anagram) của nhau nếu chúng có cùng các ký tự với số lần xuất hiện giống nhau, chỉ khác thứ tự (ví dụ: 'listen' và 'silent', 'triangle' và 'integral'). Viết hàm kiểm tra.",
    inputFormat: "Hai chuỗi s1 và s2.",
    outputFormat: "True nếu là Anagram, ngược lại False.",
    exampleInput: "listen silent",
    exampleOutput: "'listen' và 'silent' là hai chuỗi đảo ngữ (Anagram)!",
    explanation: "Cả 2 chuỗi đều gồm các chữ cái: e, i, l, n, s, t.",
    hint: "Cách 1: sorted(s1) == sorted(s2). Cách 2: Đếm tần suất ký tự bằng Dictionary.",
    starterCode: `s1, s2 = input("Nhập 2 từ: ").split()
# Kiểm tra Anagram...
`,
    solution: `s1, s2 = input("Nhập 2 từ cách nhau bởi dấu cách: ").split()

# Chuẩn hóa về chữ thường và xóa khoảng trắng
s1_clean = s1.lower().replace(" ", "")
s2_clean = s2.lower().replace(" ", "")

if sorted(s1_clean) == sorted(s2_clean):
    print(f"'{s1}' và '{s2}' là hai chuỗi ĐẢO NGỮ (Anagram) của nhau! ✨")
else:
    print(f"'{s1}' và '{s2}' KHÔNG phải là đảo ngữ.")`,
    codeExplanation: "Hàm sorted() biến chuỗi thành danh sách các ký tự đã sắp xếp tăng dần theo mã ASCII. Nếu giống hệt nhau thì chắc chắn là Anagram."
  },
  {
    id: 44,
    title: "Tìm Kiếm Nhị Phân (Binary Search)",
    level: 5,
    category: "Dict & Thuật toán",
    description: "Cài đặt thuật toán Tìm kiếm nhị phân (Binary Search) trên một danh sách đã được sắp xếp tăng dần. Trả về vị trí index của phần tử cần tìm hoặc -1 nếu không thấy.",
    inputFormat: "Dòng 1: Danh sách số đã sắp xếp. Dòng 2: Giá trị target cần tìm.",
    outputFormat: "Vị trí index của target.",
    exampleInput: "2 5 8 12 16 23 38 56 72 91\n23",
    exampleOutput: "Tìm thấy 23 tại vị trí index: 5",
    explanation: "Dãy có 10 phần tử, giá trị 23 nằm ở vị trí thứ 5 (bắt đầu từ 0).",
    hint: "low = 0, high = len(arr) - 1. Lấy mid = (low + high) // 2. Nếu arr[mid] == target thì return mid. Nếu arr[mid] < target thì low = mid + 1, ngược lại high = mid - 1.",
    starterCode: `def binary_search(arr, target):
    # Cài đặt thuật toán ở đây...
    pass
`,
    solution: `def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    buoc = 0
    
    while low <= high:
        buoc += 1
        mid = (low + high) // 2
        print(f"Bước {buoc}: Xét đoạn [{low}..{high}], phần tử giữa arr[{mid}] = {arr[mid]}")
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
            
    return -1

# Nhập mảng và mục tiêu
arr = list(map(int, input("Nhập mảng đã sắp xếp: ").split()))
target = int(input("Nhập giá trị cần tìm: "))

idx = binary_search(arr, target)
if idx != -1:
    print(f"=> KẾT QUẢ: Tìm thấy {target} tại vị trí index {idx}")
else:
    print(f"=> KẾT QUẢ: Không tìm thấy {target} trong mảng")`,
    codeExplanation: "Thuật toán tìm kiếm nhị phân chia đôi không gian tìm kiếm sau mỗi bước, đạt độ phức tạp O(log N) siêu tốc."
  },
  {
    id: 45,
    title: "Thuật Toán Sắp Xếp Nổi Bọt (Bubble Sort)",
    level: 5,
    category: "Dict & Thuật toán",
    description: "Cài đặt thuật toán Bubble Sort để sắp xếp một dãy số tăng dần. Tối ưu thuật toán bằng cách dừng sớm nếu mảng đã được sắp xếp xong (cờ swapped).",
    inputFormat: "Dãy số nguyên bất kỳ.",
    outputFormat: "Mảng sau khi sắp xếp và số lượt tráo đổi.",
    exampleInput: "64 34 25 12 22 11 90",
    exampleOutput: "[11, 12, 22, 25, 34, 64, 90]",
    explanation: "Các phần tử lớn dần nổi về cuối mảng như bọt khí.",
    hint: "Dùng 2 vòng lặp lồng nhau. Nếu arr[j] > arr[j+1] thì tráo đổi arr[j], arr[j+1] = arr[j+1], arr[j].",
    starterCode: `def bubble_sort(arr):
    # Cài đặt Bubble Sort tối ưu...
    pass
`,
    solution: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                # Tráo đổi
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # Nếu trong lượt này không có hoán đổi nào, mảng đã xong!
        if not swapped:
            break
    return arr

danh_sach = list(map(int, input("Nhập danh sách số: ").split()))
print("Danh sách ban đầu:", danh_sach)
ket_qua = bubble_sort(danh_sach)
print("Danh sách sau sắp xếp tăng dần:", ket_qua)`,
    codeExplanation: "Cờ swapped giúp thuật toán đạt O(N) trong trường hợp mảng đã sắp xếp sẵn thay vì luôn mất O(N²)."
  },
  {
    id: 46,
    title: "Bài toán Two Sum (Kỹ thuật Hash Map O(N))",
    level: 5,
    category: "Dict & Thuật toán",
    description: "Cho một mảng số nguyên nums và một số nguyên target. Hãy tìm chỉ số index của hai số trong mảng sao cho tổng của chúng bằng target. (Bài toán LeetCode #1 kinh điển).",
    inputFormat: "Dòng 1: Mảng số nguyên. Dòng 2: Số nguyên target.",
    outputFormat: "Cặp chỉ số [index1, index2].",
    exampleInput: "2 7 11 15\n9",
    exampleOutput: "Tìm thấy cặp chỉ số: [0, 1] (Vì nums[0] + nums[1] = 2 + 7 = 9)",
    explanation: "2 + 7 = 9, vị trí của 2 là 0 và vị trí của 7 là 1.",
    hint: "Duyệt qua mảng: với mỗi số x, số cần tìm bổ sung là complement = target - x. Dùng Dictionary để lưu {giá_trị: index} đã duyệt qua.",
    starterCode: `def two_sum(nums, target):
    # Dùng Hash Map giải Two Sum trong O(N)...
    pass
`,
    solution: `def two_sum(nums, target):
    da_thay = {} # Lưu {số: index}
    
    for i, num in enumerate(nums):
        so_can_tim = target - num
        if so_can_tim in da_thay:
            return [da_thay[so_can_tim], i]
        da_thay[num] = i
        
    return []

nums = list(map(int, input("Nhập mảng nums: ").split()))
target = int(input("Nhập target: "))

ans = two_sum(nums, target)
if ans:
    print(f"Cặp chỉ số tìm thấy: {ans} (Giá trị: {nums[ans[0]]} + {nums[ans[1]]} = {target})")
else:
    print("Không tìm thấy cặp số nào có tổng bằng target!")`,
    codeExplanation: "Thay vì dùng 2 vòng lặp lồng nhau mất O(N²), kỹ thuật Hash Map giảm độ phức tạp xuống O(N) siêu tối ưu."
  },
  {
    id: 47,
    title: "Fibonacci bằng Đệ Quy có Nhớ (Memoization)",
    level: 5,
    category: "Dict & Thuật toán",
    description: "Tính số Fibonacci thứ N bằng hàm đệ quy kết hợp kỹ thuật Ghi nhớ (Memoization / Quy hoạch động) để tránh tính lặp lại các bài toán con.",
    inputFormat: "Số nguyên dương N (ví dụ N = 40).",
    outputFormat: "Giá trị số Fibonacci thứ N.",
    exampleInput: "40",
    exampleOutput: "F(40) = 102334155",
    explanation: "Nếu dùng đệ quy thông thường O(2^N), N=40 sẽ mất vài chục giây. Với Memoization, kết quả ra tức thì trong 0.001s!",
    hint: "Dùng từ điển memo = {} để lưu các kết quả fib(n) đã tính được.",
    starterCode: `memo = {}

def fib_memo(n):
    # Đệ quy có ghi nhớ...
    pass
`,
    solution: `memo = {}

def fib_memo(n):
    # Điều kiện dừng cơ sở
    if n <= 0: return 0
    if n == 1: return 1
    
    # Kiểm tra xem đã tính n chưa
    if n in memo:
        return memo[n]
        
    # Tính toán và lưu vào sổ nhớ
    memo[n] = fib_memo(n - 1) + fib_memo(n - 2)
    return memo[n]

n = int(input("Nhập N (thử với số lớn như 40, 50): "))
ket_qua = fib_memo(n)
print(f"F({n}) = {ket_qua}")`,
    codeExplanation: "Memoization biến cây đệ quy có độ phức tạp hàm mũ O(2^N) thành tuyến tính O(N), là cốt lõi của môn Cấu trúc dữ liệu và giải thuật."
  },
  {
    id: 48,
    title: "Nén Chuỗi Run-Length Encoding (RLE)",
    level: 5,
    category: "Dict & Thuật toán",
    description: "Cài đặt thuật toán nén dữ liệu Run-Length Encoding: nén các ký tự liên tiếp giống nhau thành ký tự kèm số lần lặp (Ví dụ: 'WWWWWWWWWWWWBWWWWWWWWWWWWBBB' nén thành 'W12B1W12B3').",
    inputFormat: "Một chuỗi ký tự.",
    outputFormat: "Chuỗi sau khi nén.",
    exampleInput: "aabcccccaaa",
    exampleOutput: "a2b1c5a3",
    explanation: "'aa' -> 'a2', 'b' -> 'b1', 'ccccc' -> 'c5', 'aaa' -> 'a3'.",
    hint: "Duyệt qua chuỗi, duy trì biến đếm dem = 1. Nếu ký tự kế tiếp giống ký tự hiện tại thì tăng đếm, nếu khác thì ghi nhận vào kết quả.",
    starterCode: `def compress_rle(s):
    # Nén chuỗi theo giải thuật RLE...
    pass
`,
    solution: `def compress_rle(s):
    if not s: return ""
    
    nen = []
    count = 1
    
    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            count += 1
        else:
            nen.append(f"{s[i-1]}{count}")
            count = 1
            
    # Ghi nhận cụm ký tự cuối cùng
    nen.append(f"{s[-1]}{count}")
    return "".join(nen)

chuoi = input("Nhập chuỗi cần nén (vd: aaabbccccd): ")
ket_qua = compress_rle(chuoi)
print(f"Chuỗi ban đầu ({len(chuoi)} ký tự): {chuoi}")
print(f"Chuỗi sau nén ({len(ket_qua)} ký tự): {ket_qua}")`,
    codeExplanation: "RLE là một trong những giải thuật nén dữ liệu không mất mát (Lossless Compression) cơ bản nhất trong đồ họa và truyền tin."
  },
  {
    id: 49,
    title: "Ma Trận Vuông: Tổng Đường Chéo Chính & Phụ",
    level: 5,
    category: "Dict & Thuật toán",
    description: "Nhập một ma trận vuông kích thước N x N (danh sách 2 chiều). Tính tổng các phần tử trên đường chéo chính (i == j) và đường chéo phụ (i + j == N - 1).",
    inputFormat: "Dòng 1: Kích thước N. N dòng tiếp theo: mỗi dòng N số.",
    outputFormat: "Tổng đường chéo chính và tổng đường chéo phụ.",
    exampleInput: "3\n1 2 3\n4 5 6\n7 8 9",
    exampleOutput: "Đường chéo chính: 1 + 5 + 9 = 15\nĐường chéo phụ: 3 + 5 + 7 = 15",
    explanation: "Đường chéo chính gồm các phần tử (0,0)=1, (1,1)=5, (2,2)=9. Phụ: (0,2)=3, (1,1)=5, (2,0)=7.",
    hint: "Duyệt i từ 0 đến N - 1: chéo chính là matrix[i][i], chéo phụ là matrix[i][N - 1 - i].",
    starterCode: `n = int(input("Nhập kích thước N: "))
# Nhập ma trận và tính tổng 2 đường chéo...
`,
    solution: `n = int(input("Nhập kích thước ma trận vuông N: "))
print("Nhập từng dòng ma trận (các số cách nhau bởi dấu cách):")

matrix = []
for _ in range(n):
    row = list(map(int, input().split()))
    matrix.append(row)

tong_chinh = 0
tong_phu = 0

for i in range(n):
    tong_chinh += matrix[i][i]
    tong_phu += matrix[i][n - 1 - i]

print(f"Tổng đường chéo chính: {tong_chinh}")
print(f"Tổng đường chéo phụ: {tong_phu}")`,
    codeExplanation: "Thao tác trên mảng 2 chiều (Nested List) với độ phức tạp tối ưu O(N) thay vì duyệt 2 vòng lặp O(N²)."
  },
  {
    id: 50,
    title: "Mini Project: Quản Lý Sinh Viên CRUD",
    level: 5,
    category: "Dict & Thuật toán",
    description: "Xây dựng một hệ thống quản lý danh sách sinh viên hoàn chỉnh với cấu trúc List of Dictionaries hỗ trợ các thao tác CRUD: (1) Thêm mới sinh viên, (2) Hiển thị bảng danh sách, (3) Tìm kiếm theo tên/mã, (4) Xóa sinh viên theo mã, (5) Sắp xếp theo điểm GPA giảm dần.",
    inputFormat: "Tương tác qua menu lựa chọn (1 - 5).",
    outputFormat: "Bảng dữ liệu sinh viên chi tiết, đẹp mắt.",
    exampleInput: "Chạy hệ thống và thao tác qua menu",
    exampleOutput: "Bảng sinh viên hiển thị đầy đủ Mã SV, Họ Tên, Điểm GPA",
    explanation: "Tổng hợp toàn bộ kiến thức: Biến, Kiểu dữ liệu, Điều kiện, Vòng lặp, List, Dict, Hàm và I/O.",
    hint: "Mỗi sinh viên là một dict: {'id': 'SV01', 'name': 'Nam', 'gpa': 8.5}. Quản lý danh sách chung bằng list: `students = []`.",
    starterCode: `students = []

def add_student():
    pass

def show_students():
    pass

# Hoàn thiện chương trình quản lý sinh viên...
`,
    solution: `students = [
    {"id": "SV01", "name": "Nguyễn Văn An", "gpa": 8.5},
    {"id": "SV02", "name": "Trần Thị Bình", "gpa": 9.2},
    {"id": "SV03", "name": "Lê Hoàng Cường", "gpa": 7.4}
]

def show_students(ds=None):
    if ds is None: ds = students
    print("\\n" + "="*50)
    print(f"{'MÃ SV':<10} | {'HỌ VÀ TÊN':<22} | {'ĐIỂM GPA':<8}")
    print("-"*50)
    for sv in ds:
        print(f"{sv['id']:<10} | {sv['name']:<22} | {sv['gpa']:<8.2f}")
    print("="*50)

def add_student():
    ma = input("Nhập mã SV: ").strip().upper()
    ten = input("Nhập họ tên: ").strip().title()
    gpa = float(input("Nhập GPA: "))
    students.append({"id": ma, "name": ten, "gpa": gpa})
    print(f"Đã thêm thành công sinh viên {ten}!")

def search_student():
    kw = input("Nhập từ khóa tìm kiếm (mã hoặc tên): ").lower()
    kq = [s for s in students if kw in s['id'].lower() or kw in s['name'].lower()]
    if kq:
        print(f"Tìm thấy {len(kq)} kết quả:")
        show_students(kq)
    else:
        print("Không tìm thấy sinh viên nào!")

def sort_by_gpa():
    students.sort(key=lambda s: s['gpa'], reverse=True)
    print("Đã sắp xếp danh sách sinh viên theo GPA giảm dần!")
    show_students()

# Chạy thử minh họa
print("=== HỆ THỐNG QUẢN LÝ SINH VIÊN MINI ===")
show_students()
sort_by_gpa()`,
    codeExplanation: "Đây là dự án tốt nghiệp thu nhỏ dành cho sinh viên sau khi hoàn thành 50 bài tập, hội tụ đầy đủ kỹ năng lập trình hướng cấu trúc dữ liệu."
  }
];

