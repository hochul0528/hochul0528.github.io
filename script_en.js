const addons = [
  { 
    name:"Hyundai 2022 All Line Up", 
    version:"2.0.1", 
    size:"1.2GB",
    date:"2024-10-05",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1jGoRAk9igGogORbJt03Hx9xidbpmbLGW",
    customButtons:[ { name:"Custom Download", redirectUrl:"https://drive.google.com/uc?export=download&id=1weipfcj1ZdHgYSzNyGjTAKSg5eo6Jd50" },{ name:"Paint UV Download", redirectUrl:"https://drive.google.com/uc?export=download&id=1iQhqaJy3v2nUTogyj8busET-TtNoxbEg" }],
    img:"image/universe2022.jpg",
    manufacturer: "Hyundai",
    category: "Bus"
  },

  { 
    name:"Kia Granbird Silkroad 2022",  
    version:"1.4.1", 
    size:"509MB",
    date: "2024-12-15",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1-2miMTCFtdgz5okC3gJVqESjJujsd8U5",
    customButtons:[ { name:"Custom Download", redirectUrl:"https://drive.google.com/uc?export=download&id=1sBO-u3zwikbNCkr-qj_VwPSafCmEYfaT" },{ name:"Paint UV Download", redirectUrl:"https://drive.google.com/uc?export=download&id=1ile2Ki4OEiXMLjQnIz_HNRVlaWc3CFXn" }],
    img:"image/granbird2022.jpg",
    manufacturer: "Kia",
    category: "Bus"
  },

  { 
    name: "Hyundai Universe 2017", 
    version: "1.1.0.2", 
    size: "615MB",
    date: "2024-08-18",
    redirectUrl:"https://drive.google.com/uc?export=download&id=17vx3bVeAPxMNqRhNXMwJdFZqwfnLj-07",
    customButtons:[ { name:"Custom Download", redirectUrl:"https://drive.google.com/uc?export=download&id=12JyrLzKJS-IguUw_E_e3sirQCP32SftG" },{ name:"Paint UV Download", redirectUrl:"https://drive.google.com/uc?export=download&id=1KHwMJWGdnswk6-9iMNUj6T3aHzI8EGvG" }],
    img:"image/universe2017.jpg",
    manufacturer: "Hyundai",
    category: "Bus"
  },

  { 
    name:"Kia NewGranbird Silkroad (2014 ~ 2019)", 
    version:"beta. 2.0.2", 
    size:"694MB",
    date: "2026-01-31",
    redirectUrl:"https://drive.google.com/uc?export=download&id=12UFLTM8yDRONBx2Lo8wTetqGWD6Sw9h0",
    customButtons:[ { name:"Custom Download", redirectUrl:"https://drive.google.com/uc?export=download&id=18ToDrJexNwr2IXrcfTUw-VZZVYwnQYJ-" },{ name:"Paint UV Download", redirectUrl:"https://drive.google.com/uc?export=download&id=1vQF-tfrpx5IOQ6Fx_uGymEe6k3p7dMIc" }],
    img:"image/newgranbird.jpg",
    manufacturer: "Kia",
    category: "Bus"
  },

  { 
    name:"Kia Bongo 3", 
    version:"1.0", 
    size:"610MB",
    date: "2024-12-03",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1go-0NNvVpauOWYEXj0IbQPHjEFDq52H5",
    customButtons:[ { name:"Custom Download", redirectUrl:"https://drive.google.com/uc?export=download&id=1qXHSsRPiJxtnWRiv2GRyRMtNpkQ3viYB" }],
    img:"image/bongo3.jpg",
    manufacturer: "Kia",
    category: "Truck"
  },

  { 
    name:"Hyundai N Vision 74", 
    version:"1.0", 
    size:"120MB",
    date: "2022-12-04",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1XcczpV5KiSzwZmbBcxY38aDyS-jWvE2t",
    img:"image/vision74.jpg",
    manufacturer: "Kia",
    category: "Car"
  },


  { 
    name:"Hyundai Eleccity 2", 
    version:"beta. 2.0.1", 
    size:"187MB",
    date: "2025-05-10",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1khqs6ZA9Y7PNXHAj33wkrDfjQGILPJsD",
    customButtons:[ { name:"Custom Download", redirectUrl:"https://drive.google.com/uc?export=download&id=1k_hmpgS1dBzd_h1AGm1t4-bfsbFX4b-5" },{ name:"Paint UV Download", redirectUrl:"https://drive.google.com/uc?export=download&id=1b8iUvc6U5_Po-ENc-z-raeQNl67HNHYk" }],
    img:"image/eleccity.jpg",
    manufacturer: "Hyundai",
    category: "Bus"
  },

  { 
    name:"[KR] T Map Voice Navigation (Workshop)", 
    version:"3.01", 
    size:"14MB",
    date: "2022-05-18",
    redirectUrl:"https://steamcommunity.com/sharedfiles/filedetails/?id=2603145129",
    img:"image/tmap.jpg",
    manufacturer: "GPS Sound",
  }
];

// ===============================
// DOM 요소
// ===============================
const addonList = document.getElementById("addon-list");
const modal = document.getElementById("addon-modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalVersion = document.getElementById("modal-version");
const modalDownload = document.getElementById("modal-download");
const modalCustomContainer = document.getElementById("modal-custom-container");
const modalClose = document.getElementById("modal-close");

const searchInput = document.getElementById("search");
const manufacturerFilter = document.getElementById("manufacturerFilter");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortFilter");

let currentAddon = null;

// ===============================
// 필터 옵션 생성
// ===============================
function populateFilters() {
  const manufacturers = new Set();
  const categories = new Set();

  addons.forEach(a => {
    if (a.manufacturer) manufacturers.add(a.manufacturer);
    if (a.category) categories.add(a.category);
  });

  manufacturers.forEach(m => {
    const option = document.createElement("option");
    option.value = m;
    option.textContent = m;
    manufacturerFilter.appendChild(option);
  });

  categories.forEach(c => {
    const option = document.createElement("option");
    option.value = c;
    option.textContent = c;
    categoryFilter.appendChild(option);
  });
}

// ===============================
// 날짜 포맷
// ===============================
function formatDate(dateStr) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${year}.${month}.${day}`;
}

// ===============================
// 애드온 표시
// ===============================
function displayAddons() {
  const mFilter = manufacturerFilter.value;
  const cFilter = categoryFilter.value;
  const searchText = searchInput.value.toLowerCase();
  const sortOrder = sortSelect.value;

  let filtered = addons.filter(a =>
    (mFilter === "all" || a.manufacturer === mFilter) &&
    (cFilter === "all" || a.category === cFilter) &&
    a.name.toLowerCase().includes(searchText)
  );

  // 정렬
  if(sortOrder === "latest") {
    filtered.sort((a,b) => new Date(b.date) - new Date(a.date));
  } else if(sortOrder === "name") {
    filtered.sort((a,b) => a.name.localeCompare(b.name));
  }

  addonList.innerHTML = "";

  filtered.forEach(a => {
    const card = document.createElement("div");
    card.className = "card";

    // 카드 innerHTML
    card.innerHTML = `
      <img src="${a.img}" alt="${a.name}" />
      <h3>${a.name}</h3>
      <p>Version: ${a.version} | Size: ${a.size}</p>
      <p>Updated: ${formatDate(a.date)}</p>
    `;

    card.onclick = () => openModal(a);
    addonList.appendChild(card);
  });
}

// ===============================
// 모달
// ===============================
function openModal(addon) {
  currentAddon = addon;

  modalImg.src = addon.img || "previews/default.png";
  modalName.textContent = addon.name;
  modalVersion.textContent = `Version: ${addon.version} | Size: ${addon.size} | Updated: ${formatDate(addon.date)}`;

  // 기본 다운로드
  modalDownload.onclick = e => {
    e.preventDefault();
    if (addon.redirectUrl) window.location.href = addon.redirectUrl;
  };

  // 커스텀 버튼
  modalCustomContainer.innerHTML = "";
  (addon.customButtons || []).forEach(btn => {
    const button = document.createElement("button");
    button.textContent = btn.name;
    button.onclick = () => { if (btn.redirectUrl) window.location.href = btn.redirectUrl; };
    modalCustomContainer.appendChild(button);
  });

  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

// ===============================
// 이벤트
// ===============================
searchInput.addEventListener("input", displayAddons);
manufacturerFilter.addEventListener("change", displayAddons);
categoryFilter.addEventListener("change", displayAddons);
sortSelect.addEventListener("change", displayAddons);
modalClose.onclick = closeModal;
window.onclick = e => { if (e.target === modal) closeModal(); };

// 초기화
populateFilters();
displayAddons();

// ESC 모달 닫기
window.addEventListener("keydown", e => { if(e.key==="Escape") closeModal(); });