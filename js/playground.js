/**
 * Python In-Browser Playground
 * Chạy mã nguồn Python trực tiếp trên trình duyệt bằng Pyodide WebAssembly
 */

let pyodideInstance = null;
let isPyodideLoading = false;

// Khởi tạo Pyodide
async function initPyodideEnvironment() {
  const statusEl = document.getElementById("pyodide-status");
  if (pyodideInstance) return pyodideInstance;
  if (isPyodideLoading) return null;

  isPyodideLoading = true;
  if (statusEl) {
    statusEl.innerHTML = `<span class="spinner"></span> Đang tải môi trường Python WebAssembly...`;
    statusEl.className = "status-badge loading";
  }

  try {
    if (typeof loadPyodide === "undefined") {
      // Dynamic load script if not already loaded
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js";
        script.onload = resolve;
        script.onerror = () => reject(new Error("Không thể tải Pyodide từ CDN. Vui lòng kiểm tra kết nối mạng."));
        document.head.appendChild(script);
      });
    }

    pyodideInstance = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/"
    });

    if (statusEl) {
      statusEl.innerHTML = `🟢 Python 3.12+ (WebAssembly) Đã sẵn sàng`;
      statusEl.className = "status-badge ready";
    }
    return pyodideInstance;
  } catch (err) {
    console.error("Pyodide Load Error:", err);
    if (statusEl) {
      statusEl.innerHTML = `⚠️ Chế độ ngoại tuyến (Không có internet tải Pyodide)`;
      statusEl.className = "status-badge error";
    }
    return null;
  } finally {
    isPyodideLoading = false;
  }
}

// Chạy code Python
async function runPythonCode(code, customInput = "") {
  const terminal = document.getElementById("terminal-output");
  const runBtn = document.getElementById("btn-run-code");

  if (!terminal) return;

  terminal.innerHTML = "";
  const appendOutput = (text, type = "normal") => {
    const span = document.createElement("span");
    span.className = `term-line ${type}`;
    span.textContent = text;
    terminal.appendChild(span);
    terminal.scrollTop = terminal.scrollHeight;
  };

  appendOutput("▶ Đang khởi chạy chương trình...\n", "info");

  try {
    if (runBtn) {
      runBtn.disabled = true;
      runBtn.innerHTML = `<span class="spinner"></span> Đang chạy...`;
    }

    const pyodide = await initPyodideEnvironment();
    if (!pyodide) {
      appendOutput("❌ Không thể kết nối môi trường Python WebAssembly. Bạn có thể cài đặt Python trực tiếp trên máy hoặc kiểm tra đường truyền Internet để tải trình biên dịch trình duyệt.\n", "error");
      return;
    }

    // Thiết lập xử lý input()
    let inputLines = customInput.split("\n");
    let inputIdx = 0;

    pyodide.setStdin({
      stdin: () => {
        if (inputIdx < inputLines.length) {
          const val = inputLines[inputIdx++];
          appendOutput(`[Nhập vào]: ${val}\n`, "input-echo");
          return val;
        }
        const promptVal = prompt("Chương trình yêu cầu nhập input():");
        appendOutput(`[Nhập vào]: ${promptVal || ""}\n`, "input-echo");
        return promptVal || "";
      }
    });

    // Thiết lập stdout và stderr
    pyodide.setStdout({
      batched: (text) => appendOutput(text + "\n", "stdout")
    });
    pyodide.setStderr({
      batched: (text) => appendOutput(text + "\n", "stderr")
    });

    const startTime = performance.now();
    await pyodide.runPythonAsync(code);
    const endTime = performance.now();

    const duration = ((endTime - startTime) / 1000).toFixed(3);
    appendOutput(`\n✔ Chương trình kết thúc thành công trong ${duration}s.\n`, "success");

  } catch (err) {
    appendOutput(`\n❌ LỖI THỰC THI (Traceback):\n${err.message}\n`, "error");
  } finally {
    if (runBtn) {
      runBtn.disabled = false;
      runBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <span>Chạy Code</span>
      `;
    }
  }
}

// Xóa Terminal
function clearTerminal() {
  const terminal = document.getElementById("terminal-output");
  if (terminal) {
    terminal.innerHTML = '<span class="term-line info">Terminal đã được làm sạch. Sẵn sàng nhận lệnh mới.</span>\n';
  }
}

