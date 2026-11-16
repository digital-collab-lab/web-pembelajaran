// SVG Logo Default (Data URI)
const DEFAULT_LOGOS = {
  logo1: "data:image/svg+xml;utf8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#2563eb"/>
      <path d="M32 14L10 25l22 11 22-11-22-11zm-14 16v10c0 5 6.3 9 14 9s14-4 14-9V30l-14 7-14-7z" fill="#ffffff"/>
    </svg>
  `),
  logo2: "data:image/svg+xml;utf8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#059669"/>
      <circle cx="32" cy="32" r="18" fill="none" stroke="#ffffff" stroke-width="4"/>
      <path d="M24 32l6 6 12-12" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `),
  footerLogo: "data:image/svg+xml;utf8," + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1e3a8a"/>
          <stop offset="100%" stop-color="#2563eb"/>
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#g)"/>
      <text x="32" y="29" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#fbbf24" text-anchor="middle">ME</text>
      <text x="32" y="48" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">'23</text>
    </svg>
  `)
};

// Data Materi Default Kelas 8
const DEFAULT_DATA = {
  matematika: [
    {
      id: "mtk-1",
      bab: "Bab 1: Relasi dan Fungsi",
      title: "1.1 Memahami Relasi & Penyajiannya",
      desc: "Pengertian relasi dua himpunan serta penyajian diagram panah, diagram Kartesius, dan himpunan pasangan berurutan.",
      materialUrl: "https://drive.google.com",
      gformUrl: "https://forms.google.com"
    },
    {
      id: "mtk-2",
      bab: "Bab 1: Relasi dan Fungsi",
      title: "1.2 Ciri-Ciri, Bentuk, dan Nilai Fungsi",
      desc: "Membedakan fungsi dan bukan fungsi, menentukan domain, kodomain, range, serta menghitung nilai fungsi.",
      materialUrl: "https://drive.google.com",
      gformUrl: "https://forms.google.com"
    },
    {
      id: "mtk-3",
      bab: "Bab 2: Persamaan Garis Lurus",
      title: "2.1 Grafik & Kemiringan (Gradien) Garis Lurus",
      desc: "Menggambar grafik persamaan garis lurus pada bidang Kartesius serta menentukan gradien garis.",
      materialUrl: "https://drive.google.com",
      gformUrl: "https://forms.google.com"
    },
    {
      id: "mtk-4",
      bab: "Bab 2: Persamaan Garis Lurus",
      title: "2.2 Menentukan Persamaan Garis Lurus",
      desc: "Menyusun persamaan garis lurus melalui titik serta hubungan dua garis sejajar dan tegak lurus.",
      materialUrl: "https://drive.google.com",
      gformUrl: "https://forms.google.com"
    },
    {
      id: "mtk-5",
      bab: "Bab 3: SPLDV",
      title: "3.1 Konsep SPLDV & Metode Grafik",
      desc: "Model matematika persamaan linear dua variabel dan mencari penyelesaian menggunakan titik potong grafik.",
      materialUrl: "https://drive.google.com",
      gformUrl: "https://forms.google.com"
    },
    {
      id: "mtk-6",
      bab: "Bab 3: SPLDV",
      title: "3.2 Metode Substitusi, Eliminasi, & Penerapan",
      desc: "Menyelesaikan SPLDV secara aljabar serta penerapannya dalam soal cerita ekonomi sehari-hari.",
      materialUrl: "https://drive.google.com",
      gformUrl: "https://forms.google.com"
    }
  ],
  ips: [
    {
      id: "ips-1",
      bab: "Bab 1: Kondisi Geografis & SDA",
      title: "1.1 Keragaman Alam Indonesia",
      desc: "Pengaruh letak geografis, astronomis, dan geologis terhadap keragaman iklim serta sumber daya alam.",
      materialUrl: "https://drive.google.com",
      gformUrl: "https://forms.google.com"
    },
    {
      id: "ips-2",
      bab: "Bab 1: Kondisi Geografis & SDA",
      title: "1.2 Pemanfaatan & Pelestarian SDA",
      desc: "Potensi sumber daya hutan, tambang, dan kemaritiman serta upaya pemanfaatan berkelanjutan.",
      materialUrl: "https://drive.google.com",
      gformUrl: "https://forms.google.com"
    },
    {
      id: "ips-3",
      bab: "Bab 2: Kemajemukan Masyarakat",
      title: "2.1 Mobilitas Sosial & Pluralitas",
      desc: "Bentuk-bentuk mobilitas sosial, faktor pendorong dan penghambat, serta keragaman budaya Indonesia.",
      materialUrl: "https://drive.google.com",
      gformUrl: "https://forms.google.com"
    },
    {
      id: "ips-4",
      bab: "Bab 3: Nasionalisme & Jati Diri",
      title: "3.1 Penjelajahan Samudra & Pergerakan",
      desc: "Latar belakang kedatangan bangsa Barat, perlawanan daerah, hingga lahirnya pergerakan nasional.",
      materialUrl: "https://drive.google.com",
      gformUrl: "https://forms.google.com"
    }
  ]
};

// State Aplikasi
const STORAGE_KEY_DATA = "portal_kls8_data_v2";
const STORAGE_KEY_LOGOS = "portal_kls8_logos_v2";

let appData = JSON.parse(localStorage.getItem(STORAGE_KEY_DATA)) || structuredClone(DEFAULT_DATA);
let appLogos = JSON.parse(localStorage.getItem(STORAGE_KEY_LOGOS)) || { ...DEFAULT_LOGOS };
let currentSubject = "matematika";
let selectedBab = "";
let isAdminMode = false;
let activeLogoSlot = null;
let tempUploadedDataUrl = null;

// Inisialisasi Halaman
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("current-year").textContent = new Date().getFullYear();
  renderLogos();
  bindEvents();
});

// Render Logo Header & Footer
function renderLogos() {
  document.getElementById("logo-img-1").src = appLogos.logo1 || DEFAULT_LOGOS.logo1;
  document.getElementById("logo-img-2").src = appLogos.logo2 || DEFAULT_LOGOS.logo2;
  document.getElementById("footer-logo-img").src = appLogos.footerLogo || DEFAULT_LOGOS.footerLogo;
}

// Event Listeners
function bindEvents() {
  document.getElementById("nav-home").addEventListener("click", () => switchView("home"));
  document.getElementById("nav-matematika").addEventListener("click", () => switchView("matematika"));
  document.getElementById("nav-ips").addEventListener("click", () => switchView("ips"));

  document.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", () => {
      switchView(card.getAttribute("data-target"));
    });
  });

  document.getElementById("toggle-admin-btn").addEventListener("click", toggleAdminMode);

  document.getElementById("reset-all-btn").addEventListener("click", () => {
    if (confirm("Kembalikan seluruh materi, link Google Form, dan logo ke pengaturan awal?")) {
      appData = structuredClone(DEFAULT_DATA);
      appLogos = { ...DEFAULT_LOGOS };
      saveData();
      saveLogos();
      renderLogos();
      selectedBab = "";
      if (currentSubject) renderSubjectPage();
      showToast("Data berhasil dikembalikan ke default.");
    }
  });

  // Slot Logo Klik
  document.getElementById("logo-slot-1").addEventListener("click", () => openLogoModal("logo1", "Ubah Logo Kanan 1"));
  document.getElementById("logo-slot-2").addEventListener("click", () => openLogoModal("logo2", "Ubah Logo Kanan 2"));
  document.getElementById("footer-logo-trigger").addEventListener("click", () => openLogoModal("footerLogo", "Ubah Logo Matematika Ekonomi 23"));

  // Modal Logo Events
  document.getElementById("close-logo-modal").addEventListener("click", closeLogoModal);
  document.getElementById("logo-file-input").addEventListener("change", handleLogoFileUpload);
  document.getElementById("logo-url-input").addEventListener("input", (e) => {
    if (e.target.value.trim()) {
      tempUploadedDataUrl = null;
      document.getElementById("modal-logo-preview").src = e.target.value.trim();
    }
  });
  document.getElementById("reset-single-logo-btn").addEventListener("click", () => {
    if (!activeLogoSlot) return;
    appLogos[activeLogoSlot] = DEFAULT_LOGOS[activeLogoSlot];
    saveLogos();
    renderLogos();
    closeLogoModal();
    showToast("Logo dikembalikan ke default.");
  });
  document.getElementById("save-logo-btn").addEventListener("click", saveLogoChange);

  // Modal Sub-Bab Events
  document.getElementById("add-subbab-btn").addEventListener("click", () => openSubbabModal());
  document.getElementById("close-subbab-modal").addEventListener("click", closeSubbabModal);
  document.getElementById("cancel-subbab-btn").addEventListener("click", closeSubbabModal);
  document.getElementById("subbab-form").addEventListener("submit", handleSubbabSubmit);
}

// Perpindahan Tampilan (Beranda / Matematika / IPS)
function switchView(view) {
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));

  if (view === "home") {
    document.getElementById("nav-home").classList.add("active");
    document.getElementById("view-home").classList.remove("hidden");
    document.getElementById("view-subject").classList.add("hidden");
  } else {
    currentSubject = view;
    selectedBab = "";
    document.getElementById(`nav-${view}`).classList.add("active");
    document.getElementById("view-home").classList.add("hidden");
    document.getElementById("view-subject").classList.remove("hidden");
    renderSubjectPage();
  }
}

// Toggle Mode Admin
function toggleAdminMode() {
  isAdminMode = !isAdminMode;
  const toggleBtn = document.getElementById("toggle-admin-btn");
  const banner = document.getElementById("admin-banner");
  const addBtn = document.getElementById("add-subbab-btn");

  toggleBtn.classList.toggle("active", isAdminMode);
  document.getElementById("admin-btn-text").textContent = isAdminMode ? "Admin: ON" : "Mode Admin";
  banner.classList.toggle("hidden", !isAdminMode);
  addBtn.classList.toggle("hidden", !isAdminMode);

  if (!document.getElementById("view-subject").classList.contains("hidden")) {
    renderSubjectPage();
  }
  showToast(isAdminMode ? "Mode Admin diaktifkan." : "Mode Admin dinonaktifkan.");
  
}


// Render Tab Bab & Sub-Bab (Fit 1 Layar Tanpa Scroll)
function renderSubjectPage() {
  const tabsContainer = document.getElementById("bab-tabs");
  const container = document.getElementById("subbab-container");
  const items = appData[currentSubject] || [];

  if (items.length === 0) {
    tabsContainer.innerHTML = "";
    container.innerHTML = `<p style="color: var(--text-muted);">Belum ada sub-bab untuk mata pelajaran ini.</p>`;
    return;
  }

  // Ambil daftar Bab unik
  const babList = [...new Set(items.map(item => item.bab || "Materi Pembelajaran"))];
  if (!selectedBab || !babList.includes(selectedBab)) {
    selectedBab = babList[0];
  }

  // Render Tombol Tab Bab
  tabsContainer.innerHTML = babList.map(bab => `
    <button class="bab-tab-btn ${bab === selectedBab ? "active" : ""}" data-bab="${escapeAttr(bab)}">
      ${escapeHtml(bab)}
    </button>
  `).join("");

  tabsContainer.querySelectorAll(".bab-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedBab = btn.getAttribute("data-bab");
      renderSubjectPage();
    });
  });

  // Filter sub-bab sesuai Bab yang sedang dipilih
  const filteredItems = items.filter(item => (item.bab || "Materi Pembelajaran") === selectedBab);

  container.innerHTML = filteredItems.map(item => `
    <article class="subbab-card">
      <div class="subbab-top">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.desc || "Klik tombol di bawah untuk membuka materi atau mengerjakan latihan soal.")}</p>
      </div>
      <div>
        <div class="subbab-actions">
          <a href="${escapeAttr(item.materialUrl)}" target="_blank" rel="noopener noreferrer" class="btn-link btn-materi">
            📘 Buka Materi
          </a>
          <a href="${escapeAttr(item.gformUrl)}" target="_blank" rel="noopener noreferrer" class="btn-link btn-gform">
            📝 Soal Latihan
          </a>
        </div>
        ${isAdminMode ? `
          <div class="admin-card-controls">
            <button class="btn-edit-sm" onclick="editSubbab('${item.id}')">✎ Edit Link</button>
            <button class="btn-delete-sm" onclick="deleteSubbab('${item.id}')">🗑 Hapus</button>
          </div>
        ` : ""}
      </div>
    </article>
  `).join("");
}

// Modal Logo Functions
function openLogoModal(slotKey, modalTitle) {
  activeLogoSlot = slotKey;
  tempUploadedDataUrl = null;
  document.getElementById("logo-modal-title").textContent = modalTitle;
  document.getElementById("modal-logo-preview").src = appLogos[slotKey] || DEFAULT_LOGOS[slotKey];
  document.getElementById("logo-file-input").value = "";
  document.getElementById("logo-url-input").value = "";
  document.getElementById("logo-modal").classList.remove("hidden");
}

function closeLogoModal() {
  document.getElementById("logo-modal").classList.add("hidden");
  activeLogoSlot = null;
  tempUploadedDataUrl = null;
}

function handleLogoFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    tempUploadedDataUrl = event.target.result;
    document.getElementById("modal-logo-preview").src = tempUploadedDataUrl;
    document.getElementById("logo-url-input").value = "";
  };
  reader.readAsDataURL(file);
}

function saveLogoChange() {
  if (!activeLogoSlot) return;
  const urlVal = document.getElementById("logo-url-input").value.trim();

  if (tempUploadedDataUrl) {
    appLogos[activeLogoSlot] = tempUploadedDataUrl;
  } else if (urlVal) {
    appLogos[activeLogoSlot] = urlVal;
  } else {
    closeLogoModal();
    return;
  }

  saveLogos();
  renderLogos();
  closeLogoModal();
  showToast("Logo berhasil diperbarui!");
}

// Modal Sub-Bab Functions (Admin)
function openSubbabModal(item = null) {
  document.getElementById("subbab-modal-title").textContent = item ? "Edit Sub-Bab & Link" : "Tambah Sub-Bab Baru";
  document.getElementById("edit-subbab-id").value = item ? item.id : "";
  document.getElementById("input-bab").value = item ? item.bab : selectedBab;
  document.getElementById("input-title").value = item ? item.title : "";
  document.getElementById("input-desc").value = item ? item.desc : "";
  document.getElementById("input-material-url").value = item ? item.materialUrl : "";
  document.getElementById("input-gform-url").value = item ? item.gformUrl : "";
  document.getElementById("subbab-modal").classList.remove("hidden");
}

function closeSubbabModal() {
  document.getElementById("subbab-modal").classList.add("hidden");
}

window.editSubbab = function(id) {
  const item = appData[currentSubject].find(x => x.id === id);
  if (item) openSubbabModal(item);
};

window.deleteSubbab = function(id) {
  if (!confirm("Hapus sub-bab ini?")) return;
  appData[currentSubject] = appData[currentSubject].filter(x => x.id !== id);
  saveData();
  renderSubjectPage();
  showToast("Sub-bab berhasil dihapus.");
};

function handleSubbabSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("edit-subbab-id").value;
  const babInput = document.getElementById("input-bab").value.trim();
  const payload = {
    id: id || `${currentSubject}-${Date.now()}`,
    bab: babInput,
    title: document.getElementById("input-title").value.trim(),
    desc: document.getElementById("input-desc").value.trim(),
    materialUrl: document.getElementById("input-material-url").value.trim(),
    gformUrl: document.getElementById("input-gform-url").value.trim()
  };

  if (id) {
    const idx = appData[currentSubject].findIndex(x => x.id === id);
    if (idx !== -1) appData[currentSubject][idx] = payload;
    showToast("Perubahan sub-bab & link disimpan!");
  } else {
    appData[currentSubject].push(payload);
    showToast("Sub-bab baru berhasil ditambahkan!");
  }

  selectedBab = babInput;
  saveData();
  renderSubjectPage();
  closeSubbabModal();
}

// LocalStorage & Helpers
function saveData() {
  localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(appData));
}

function saveLogos() {
  localStorage.setItem(STORAGE_KEY_LOGOS, JSON.stringify(appLogos));
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2800);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}