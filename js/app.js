/**
 * Python Starter - Main Web Application Logic
 * Điều khiển giao diện, bộ lọc bài tập, tiến độ học tập, tìm kiếm và tương tác.
 */

// Trạng thái ứng dụng
const AppState = {
  currentTab: "theory", // theory | exercises | playground | cheatsheet | roadmap
  currentLessonId: "intro",
  activeExerciseId: 1,
  completedExercises: new Set(),
  bookmarkedExercises: new Set(),
  exerciseFilters: {
    level: "all",
    category: "all",
    status: "all",
    search: ""
  },
  theme: "dark"
};

// Khởi chạy khi DOM tải xong
document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();
  initTheme();
  initNavigation();
  initTheorySection();
  initExercisesSection();
  initPlaygroundSection();
  initSearchModal();
  updateProgressStats();
});

// ==========================================
// 1. STATE & STORAGE MANAGEMENT
// ==========================================
function loadSavedState() {
  try {
    const savedCompleted = localStorage.getItem("python_starter_completed");
    if (savedCompleted) {
      AppState.completedExercises = new Set(JSON.parse(savedCompleted));
    }

    const savedBookmarks = localStorage.getItem("python_starter_bookmarks");
    if (savedBookmarks) {
      AppState.bookmarkedExercises = new Set(JSON.parse(savedBookmarks));
    }

    const savedTheme = localStorage.getItem("python_starter_theme");
    if (savedTheme) {
      AppState.theme = savedTheme;
    }
  } catch (e) {
    console.error("Error reading localStorage", e);
  }
}

function saveState() {
  try {
    localStorage.setItem("python_starter_completed", JSON.stringify([...AppState.completedExercises]));
    localStorage.setItem("python_starter_bookmarks", JSON.stringify([...AppState.bookmarkedExercises]));
    localStorage.setItem("python_starter_theme", AppState.theme);
  } catch (e) {
    console.error("Error writing localStorage", e);
  }
}

// ==========================================
// 2. THEME & NAVIGATION
// ==========================================
function initTheme() {
  document.documentElement.setAttribute("data-theme", AppState.theme);
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      AppState.theme = AppState.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", AppState.theme);
      saveState();
      updateThemeIcon();
    });
    updateThemeIcon();
  }
}

function updateThemeIcon() {
  const icon = document.getElementById("theme-toggle-icon");
  if (!icon) return;
  if (AppState.theme === "dark") {
    icon.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    icon.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

function initNavigation() {
  const navButtons = document.querySelectorAll(".nav-link[data-tab]");
  navButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = btn.getAttribute("data-tab");
      switchTab(tab);
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobile-menu-btn");
  const mainNav = document.getElementById("main-nav");
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }
}

function switchTab(tabName) {
  AppState.currentTab = tabName;
  document.querySelectorAll(".nav-link[data-tab]").forEach(el => {
    el.classList.toggle("active", el.getAttribute("data-tab") === tabName);
  });

  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === `tab-${tabName}`);
  });

  // Close mobile nav if open
  const mainNav = document.getElementById("main-nav");
  if (mainNav) mainNav.classList.remove("open");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 3. THEORY (LÝ THUYẾT) SECTION
// ==========================================
function initTheorySection() {
  const lessonList = document.getElementById("theory-lesson-list");
  if (!lessonList) return;

  lessonList.innerHTML = THEORY_DATA.map((lesson, idx) => `
    <li class="lesson-nav-item ${idx === 0 ? 'active' : ''}" data-lesson-id="${lesson.id}">
      <span class="lesson-num">${idx + 1}</span>
      <div class="lesson-info">
        <div class="lesson-title">${lesson.title.replace(/^\\d+\\.\\s*/, '')}</div>
        <div class="lesson-meta"><span class="badge-mini">${lesson.badge}</span> <span>${lesson.time}</span></div>
      </div>
    </li>
  `).join("");

  lessonList.querySelectorAll(".lesson-nav-item").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-lesson-id");
      showLesson(id);
    });
  });

  // Hiển thị bài đầu tiên
  showLesson(THEORY_DATA[0].id);
}

function showLesson(lessonId) {
  AppState.currentLessonId = lessonId;
  const lesson = THEORY_DATA.find(l => l.id === lessonId);
  if (!lesson) return;

  document.querySelectorAll(".lesson-nav-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-lesson-id") === lessonId);
  });

  const contentContainer = document.getElementById("theory-content-view");
  if (!contentContainer) return;

  const currentIndex = THEORY_DATA.findIndex(l => l.id === lessonId);
  const prevLesson = currentIndex > 0 ? THEORY_DATA[currentIndex - 1] : null;
  const nextLesson = currentIndex < THEORY_DATA.length - 1 ? THEORY_DATA[currentIndex + 1] : null;

  contentContainer.innerHTML = `
    <div class="theory-article">
      <div class="article-header">
        <div class="article-meta">
          <span class="category-badge">${lesson.badge}</span>
          <span class="read-time">⏱ ${lesson.time} đọc</span>
        </div>
        <h1 class="article-title">${lesson.title}</h1>
        <p class="article-summary">${lesson.summary}</p>
      </div>

      <div class="article-body">
        ${lesson.content}
      </div>

      <div class="article-footer-nav">
        ${prevLesson ? `
          <button class="btn btn-outline" onclick="showLesson('${prevLesson.id}')">
            ← Bài trước: ${prevLesson.title.replace(/^\\d+\\.\\s*/, '')}
          </button>
        ` : `<div></div>`}

        ${nextLesson ? `
          <button class="btn btn-primary" onclick="showLesson('${nextLesson.id}')">
            Bài kế tiếp: ${nextLesson.title.replace(/^\\d+\\.\\s*/, '')} →
          </button>
        ` : `
          <button class="btn btn-success" onclick="switchTab('exercises')">
            Bắt đầu làm 50 bài tập thực chiến 🚀
          </button>
        `}
      </div>
    </div>
  `;

  // Thêm nút sao chép mã và nút chạy thử vào tất cả pre code
  attachCodeActionButtons(contentContainer);
}

function attachCodeActionButtons(container) {
  const codeBlocks = container.querySelectorAll("pre");
  codeBlocks.forEach(pre => {
    const codeEl = pre.querySelector("code");
    if (!codeEl) return;

    // Header bar cho code block
    const bar = document.createElement("div");
    bar.className = "code-block-header";
    bar.innerHTML = `
      <span class="code-lang-label">Python</span>
      <div class="code-actions">
        <button class="code-btn btn-copy" title="Sao chép mã">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Sao chép
        </button>
        <button class="code-btn btn-run" title="Mở trong Playground">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Chạy thử
        </button>
      </div>
    `;

    pre.insertBefore(bar, codeEl);

    // Xử lý sự kiện copy
    const copyBtn = bar.querySelector(".btn-copy");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(codeEl.innerText).then(() => {
        showToast("Đã sao chép mã vào Clipboard!");
        copyBtn.innerHTML = `✔ Đã chép`;
        setTimeout(() => {
          copyBtn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg> Sao chép
          `;
        }, 2000);
      });
    });

    // Xử lý sự kiện chạy thử
    const runBtn = bar.querySelector(".btn-run");
    runBtn.addEventListener("click", () => {
      sendCodeToPlayground(codeEl.innerText);
    });
  });
}

// ==========================================
// 4. EXERCISES (50 BÀI TẬP) SECTION
// ==========================================
function initExercisesSection() {
  // Bộ lọc level
  const levelBtns = document.querySelectorAll(".filter-pill[data-level]");
  levelBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      levelBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.exerciseFilters.level = btn.getAttribute("data-level");
      renderExercisesGrid();
    });
  });

  // Bộ lọc chuyên mục
  const catSelect = document.getElementById("exercise-category-filter");
  if (catSelect) {
    catSelect.addEventListener("change", (e) => {
      AppState.exerciseFilters.category = e.target.value;
      renderExercisesGrid();
    });
  }

  // Bộ lọc trạng thái
  const statusSelect = document.getElementById("exercise-status-filter");
  if (statusSelect) {
    statusSelect.addEventListener("change", (e) => {
      AppState.exerciseFilters.status = e.target.value;
      renderExercisesGrid();
    });
  }

  // Tìm kiếm bài tập
  const searchInput = document.getElementById("exercise-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.exerciseFilters.search = e.target.value.toLowerCase().trim();
      renderExercisesGrid();
    });
  }

  renderExercisesGrid();
}

function renderExercisesGrid() {
  const grid = document.getElementById("exercises-grid");
  const countEl = document.getElementById("filtered-exercises-count");
  if (!grid) return;

  const filtered = EXERCISES_DATA.filter(ex => {
    // Lọc theo level
    if (AppState.exerciseFilters.level !== "all" && ex.level.toString() !== AppState.exerciseFilters.level) {
      return false;
    }
    // Lọc theo chuyên mục
    if (AppState.exerciseFilters.category !== "all" && ex.category !== AppState.exerciseFilters.category) {
      return false;
    }
    // Lọc theo trạng thái
    const isCompleted = AppState.completedExercises.has(ex.id);
    const isBookmarked = AppState.bookmarkedExercises.has(ex.id);
    if (AppState.exerciseFilters.status === "completed" && !isCompleted) return false;
    if (AppState.exerciseFilters.status === "pending" && isCompleted) return false;
    if (AppState.exerciseFilters.status === "bookmarked" && !isBookmarked) return false;

    // Lọc theo tìm kiếm
    if (AppState.exerciseFilters.search) {
      const q = AppState.exerciseFilters.search;
      const matchTitle = ex.title.toLowerCase().includes(q);
      const matchDesc = ex.description.toLowerCase().includes(q);
      const matchCat = ex.category.toLowerCase().includes(q);
      const matchId = ex.id.toString() === q;
      if (!matchTitle && !matchDesc && !matchCat && !matchId) return false;
    }

    return true;
  });

  if (countEl) {
    countEl.innerText = `${filtered.length} / ${EXERCISES_DATA.length} bài tập`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>Không tìm thấy bài tập phù hợp</h3>
        <p>Thử đổi bộ lọc hoặc từ khóa tìm kiếm để xem các bài tập khác nhé!</p>
        <button class="btn btn-outline" onclick="resetExerciseFilters()">Đặt lại bộ lọc</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(ex => {
    const isCompleted = AppState.completedExercises.has(ex.id);
    const isBookmarked = AppState.bookmarkedExercises.has(ex.id);
    const stars = "⭐".repeat(ex.level);

    return `
      <div class="exercise-card ${isCompleted ? 'is-completed' : ''}" data-id="${ex.id}">
        <div class="card-top">
          <div class="card-id-badge">Bài ${ex.id}</div>
          <div class="card-level" title="Độ khó: Cấp ${ex.level}">${stars}</div>
          <button class="card-bookmark-btn ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark(${ex.id}, event)" title="${isBookmarked ? 'Bỏ lưu' : 'Lưu lại để ôn tập'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>

        <h3 class="card-title">${ex.title}</h3>
        <p class="card-desc">${ex.description.slice(0, 110)}...</p>

        <div class="card-category-tag">${ex.category}</div>

        <div class="card-footer">
          <button class="btn-check ${isCompleted ? 'checked' : ''}" onclick="toggleCompleteExercise(${ex.id}, event)" title="${isCompleted ? 'Đã hoàn thành' : 'Đánh dấu hoàn thành'}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${isCompleted ? 'Đã hoàn thành' : 'Chưa xong'}</span>
          </button>

          <button class="btn btn-sm btn-primary" onclick="openExerciseModal(${ex.id})">
            Xem đề & Giải
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function resetExerciseFilters() {
  AppState.exerciseFilters = { level: "all", category: "all", status: "all", search: "" };
  document.querySelectorAll(".filter-pill[data-level]").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-level") === "all");
  });
  const cat = document.getElementById("exercise-category-filter");
  if (cat) cat.value = "all";
  const st = document.getElementById("exercise-status-filter");
  if (st) st.value = "all";
  const sr = document.getElementById("exercise-search-input");
  if (sr) sr.value = "";
  renderExercisesGrid();
}

function toggleCompleteExercise(id, event) {
  if (event) event.stopPropagation();
  if (AppState.completedExercises.has(id)) {
    AppState.completedExercises.delete(id);
    showToast(`Đã hủy hoàn thành Bài ${id}`);
  } else {
    AppState.completedExercises.add(id);
    showToast(`🎉 Tuyệt vời! Bạn đã hoàn thành Bài ${id}`);
  }
  saveState();
  renderExercisesGrid();
  updateProgressStats();
}

function toggleBookmark(id, event) {
  if (event) event.stopPropagation();
  if (AppState.bookmarkedExercises.has(id)) {
    AppState.bookmarkedExercises.delete(id);
    showToast(`Đã bỏ lưu Bài ${id}`);
  } else {
    AppState.bookmarkedExercises.add(id);
    showToast(`Đã lưu Bài ${id} vào danh sách yêu thích 🔖`);
  }
  saveState();
  renderExercisesGrid();
}

// Modal chi tiết bài tập
function openExerciseModal(id) {
  const ex = EXERCISES_DATA.find(item => item.id === id);
  if (!ex) return;

  AppState.activeExerciseId = id;
  const modal = document.getElementById("exercise-detail-modal");
  const modalContent = document.getElementById("modal-exercise-body");
  if (!modal || !modalContent) return;

  const isCompleted = AppState.completedExercises.has(ex.id);
  const stars = "⭐".repeat(ex.level);

  modalContent.innerHTML = `
    <div class="modal-exercise-header">
      <div class="exercise-meta-row">
        <span class="badge-id">BÀI ${ex.id}</span>
        <span class="badge-cat">${ex.category}</span>
        <span class="badge-stars">Độ khó: ${stars} (Level ${ex.level})</span>
      </div>
      <h2 class="modal-ex-title">${ex.title}</h2>
    </div>

    <div class="modal-section">
      <h4>📌 Yêu Cầu Đề Bài:</h4>
      <div class="problem-box">${ex.description}</div>
    </div>

    <div class="io-grid">
      <div class="io-box">
        <strong>📥 Định dạng đầu vào (Input):</strong>
        <p>${ex.inputFormat}</p>
        <div class="sample-io">
          <span class="sample-label">Ví dụ Input:</span>
          <code>${ex.exampleInput.replace(/\\n/g, '<br/>')}</code>
        </div>
      </div>
      <div class="io-box">
        <strong>📤 Định dạng đầu ra (Output):</strong>
        <p>${ex.outputFormat}</p>
        <div class="sample-io">
          <span class="sample-label">Ví dụ Output:</span>
          <code>${ex.exampleOutput.replace(/\\n/g, '<br/>')}</code>
        </div>
      </div>
    </div>

    <div class="modal-section">
      <div class="alert-info-box">
        <strong>💡 Giải thích ví dụ:</strong> ${ex.explanation}
      </div>
    </div>

    <!-- HINT SECTION -->
    <div class="collapsible-section">
      <button class="collapsible-toggle" onclick="toggleSpoiler('hint-content')">
        <span>💡 Gợi ý tư duy thuật toán (Hint)</span>
        <span class="chevron">▼</span>
      </button>
      <div id="hint-content" class="collapsible-content">
        <div class="hint-body">
          ${ex.hint}
        </div>
      </div>
    </div>

    <!-- SOLUTION SECTION -->
    <div class="collapsible-section open">
      <button class="collapsible-toggle" onclick="toggleSpoiler('solution-content')">
        <span>🔑 Lời giải mã nguồn chuẩn Python & Giải thích</span>
        <span class="chevron">▼</span>
      </button>
      <div id="solution-content" class="collapsible-content active">
        <div class="solution-body">
          <pre><code class="language-python">${escapeHtml(ex.solution)}</code></pre>
          <div class="solution-explanation">
            <strong>🔍 Giải thích chi tiết từng câu lệnh:</strong>
            <p>${ex.codeExplanation}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-action-bar">
      <button class="btn btn-outline" onclick="toggleCompleteExercise(${ex.id}); closeModal();">
        ${isCompleted ? 'Đánh dấu chưa làm' : '✔ Đánh dấu đã hoàn thành'}
      </button>
      <button class="btn btn-success" onclick="tryInPlayground(${ex.id})">
        ▶ Thử chạy trong Web Playground
      </button>
    </div>
  `;

  attachCodeActionButtons(modalContent);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function toggleSpoiler(contentId) {
  const content = document.getElementById(contentId);
  if (!content) return;
  content.classList.toggle("active");
}

function closeModal() {
  const modal = document.getElementById("exercise-detail-modal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function tryInPlayground(exerciseId) {
  const ex = EXERCISES_DATA.find(e => e.id === exerciseId);
  if (!ex) return;
  closeModal();
  sendCodeToPlayground(ex.solution, ex.exampleInput);
}

// ==========================================
// 5. PLAYGROUND SECTION
// ==========================================
function initPlaygroundSection() {
  const runBtn = document.getElementById("btn-run-code");
  const clearBtn = document.getElementById("btn-clear-terminal");
  const templateSelect = document.getElementById("playground-templates");

  if (runBtn) {
    runBtn.addEventListener("click", () => {
      const codeInput = document.getElementById("code-editor");
      const customInput = document.getElementById("custom-input");
      if (codeInput) {
        runPythonCode(codeInput.value, customInput ? customInput.value : "");
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", clearTerminal);
  }

  if (templateSelect) {
    templateSelect.addEventListener("change", (e) => {
      const val = e.target.value;
      loadPlaygroundTemplate(val);
    });
  }
}

function sendCodeToPlayground(code, sampleInput = "") {
  switchTab("playground");
  const editor = document.getElementById("code-editor");
  const customInput = document.getElementById("custom-input");
  if (editor) {
    editor.value = code;
  }
  if (customInput && sampleInput && sampleInput !== "Chạy trực tiếp") {
    customInput.value = sampleInput;
  }
  showToast("Mã nguồn đã được nạp vào Playground! Nhấn 'Chạy Code' để thực thi.");
}

function loadPlaygroundTemplate(templateKey) {
  const editor = document.getElementById("code-editor");
  if (!editor) return;

  const templates = {
    hello: `# Chương trình Hello World đầu tiên
print("Xin chào! Chào mừng bạn đến với thế giới Python 3.12!")
name = input("Bạn tên là gì? ")
print(f"Rất vui được đồng hành cùng {name} trên con đường lập trình!")`,
    sum: `# Tính tổng các số từ 1 đến N
n = 100
tong = sum(range(1, n + 1))
print(f"Tổng các số từ 1 đến {n} là: {tong}")`,
    list: `# Xử lý danh sách và List Comprehension
trai_cay = ["Táo", "Chuối", "Cam", "Xoài", "Nho"]
print("Danh sách ban đầu:", trai_cay)

# Lọc các loại trái cây có chứa chữ 'a'
co_chu_a = [tc for tc in trai_cay if 'a' in tc.lower()]
print("Trái cây có chứa chữ 'a':", co_chu_a)`,
    dict: `# Thống kê từ vựng bằng Dictionary
cau = "học python rất vui và python rất hữu ích cho sinh viên"
cac_tu = cau.split()

thong_ke = {}
for tu in cac_tu:
    thong_ke[tu] = thong_ke.get(tu, 0) + 1

print("Thống kê số lần xuất hiện:")
for tu, dem in thong_ke.items():
    print(f"- {tu}: {dem} lần")`
  };

  if (templates[templateKey]) {
    editor.value = templates[templateKey];
    showToast("Đã tải đoạn mã mẫu!");
  }
}

// ==========================================
// 6. PROGRESS STATS
// ==========================================
function updateProgressStats() {
  const total = EXERCISES_DATA.length;
  const completed = AppState.completedExercises.size;
  const percent = Math.round((completed / total) * 100);

  const fillEl = document.getElementById("progress-bar-fill");
  const textEl = document.getElementById("progress-text");
  const badgeEl = document.getElementById("header-completed-badge");

  if (fillEl) fillEl.style.width = `${percent}%`;
  if (textEl) textEl.innerText = `${completed}/${total} bài (${percent}%)`;
  if (badgeEl) badgeEl.innerText = `${percent}%`;
}

// ==========================================
// 7. GLOBAL SEARCH MODAL
// ==========================================
function initSearchModal() {
  const searchTrigger = document.getElementById("global-search-trigger");
  const modal = document.getElementById("global-search-modal");
  const input = document.getElementById("global-search-input");
  const resultsContainer = document.getElementById("search-results-list");

  if (!searchTrigger || !modal || !input || !resultsContainer) return;

  const openSearch = () => {
    modal.classList.add("active");
    input.value = "";
    input.focus();
    renderSearchResults("");
  };

  const closeSearch = () => {
    modal.classList.remove("active");
  };

  searchTrigger.addEventListener("click", openSearch);

  // Phím tắt Ctrl + K hoặc /
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape") {
      closeSearch();
      closeModal();
    }
  });

  input.addEventListener("input", (e) => {
    renderSearchResults(e.target.value.toLowerCase().trim());
  });

  // Đóng modal khi bấm ra ngoài
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSearch();
  });
}

function renderSearchResults(query) {
  const resultsContainer = document.getElementById("search-results-list");
  if (!resultsContainer) return;

  if (!query) {
    resultsContainer.innerHTML = `
      <div class="search-tip">
        <p>Gõ từ khóa để tra cứu lý thuyết hoặc 50 bài tập...</p>
        <div class="quick-keywords">
          <span class="kw-tag" onclick="quickSearch('vòng lặp')">vòng lặp</span>
          <span class="kw-tag" onclick="quickSearch('list')">list</span>
          <span class="kw-tag" onclick="quickSearch('nguyên tố')">nguyên tố</span>
          <span class="kw-tag" onclick="quickSearch('fibonacci')">fibonacci</span>
          <span class="kw-tag" onclick="quickSearch('dictionary')">dictionary</span>
        </div>
      </div>
    `;
    return;
  }

  // Tìm trong lý thuyết
  const matchedTheory = THEORY_DATA.filter(t => 
    t.title.toLowerCase().includes(query) || 
    t.summary.toLowerCase().includes(query)
  );

  // Tìm trong bài tập
  const matchedEx = EXERCISES_DATA.filter(e =>
    e.title.toLowerCase().includes(query) ||
    e.description.toLowerCase().includes(query) ||
    e.category.toLowerCase().includes(query)
  );

  if (matchedTheory.length === 0 && matchedEx.length === 0) {
    resultsContainer.innerHTML = `<div class="empty-state"><p>Không tìm thấy nội dung phù hợp với "<strong>${escapeHtml(query)}</strong>"</p></div>`;
    return;
  }

  let html = "";
  if (matchedTheory.length > 0) {
    html += `<div class="search-section-title">📚 Lý Thuyết Nhập Môn (${matchedTheory.length})</div>`;
    matchedTheory.forEach(t => {
      html += `
        <div class="search-result-item" onclick="selectSearchTheory('${t.id}')">
          <div class="res-title">${t.title}</div>
          <div class="res-sub">${t.summary}</div>
        </div>
      `;
    });
  }

  if (matchedEx.length > 0) {
    html += `<div class="search-section-title">🎯 Bài Tập Thực Chiến (${matchedEx.length})</div>`;
    matchedEx.forEach(e => {
      html += `
        <div class="search-result-item" onclick="selectSearchExercise(${e.id})">
          <div class="res-title">Bài ${e.id}: ${e.title} <span class="badge-mini">${e.category}</span></div>
          <div class="res-sub">${e.description.slice(0, 90)}...</div>
        </div>
      `;
    });
  }

  resultsContainer.innerHTML = html;
}

function quickSearch(kw) {
  const input = document.getElementById("global-search-input");
  if (input) {
    input.value = kw;
    renderSearchResults(kw);
  }
}

function selectSearchTheory(lessonId) {
  const modal = document.getElementById("global-search-modal");
  if (modal) modal.classList.remove("active");
  switchTab("theory");
  showLesson(lessonId);
}

function selectSearchExercise(exId) {
  const modal = document.getElementById("global-search-modal");
  if (modal) modal.classList.remove("active");
  switchTab("exercises");
  openExerciseModal(exId);
}

// ==========================================
// 8. TOAST NOTIFICATIONS & UTILITIES
// ==========================================
function showToast(message) {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerText = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

