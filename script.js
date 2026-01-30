const addons = [
  { 
    name:"현대 유니버스 2022 올 라인업", 
    version:"2.0", 
    size:"1.2GB",
    date:"2024-10-05",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1jGoRAk9igGogORbJt03Hx9xidbpmbLGW",
    customButtons:[ { name:"커스텀 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1weipfcj1ZdHgYSzNyGjTAKSg5eo6Jd50" },{ name:"도색 UV 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1iQhqaJy3v2nUTogyj8busET-TtNoxbEg" }],
    img:"image/universe2022.jpg",
    manufacturer: "현대",
    category: "버스"
  },

  { 
    name:"기아 그랜버드 실크로드 2022",  
    version:"1.4", 
    size:"509MB",
    date: "2024-12-15",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1-2miMTCFtdgz5okC3gJVqESjJujsd8U5",
    customButtons:[ { name:"커스텀 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1sBO-u3zwikbNCkr-qj_VwPSafCmEYfaT" },{ name:"도색 UV 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1ile2Ki4OEiXMLjQnIz_HNRVlaWc3CFXn" }],
    img:"image/granbird2022.jpg",
    manufacturer: "기아",
    category: "버스"
  },

  { 
    name: "현대 유니버스 2017", 
    version: "1.1.0.1", 
    size: "615MB",
    date: "2024-08-18",
    redirectUrl:"https://drive.google.com/uc?export=download&id=17vx3bVeAPxMNqRhNXMwJdFZqwfnLj-07",
    customButtons:[ { name:"커스텀 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=12JyrLzKJS-IguUw_E_e3sirQCP32SftG" },{ name:"도색 UV 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1KHwMJWGdnswk6-9iMNUj6T3aHzI8EGvG" }],
    img:"image/universe2017.jpg",
    manufacturer: "현대",
    category: "버스"
  },

  { 
    name:"기아 뉴그랜버드 실크로드 (구형 그랜버드)", 
    version:"beta. 2.0.1", 
    size:"694MB",
    date: "2026-01-31",
    redirectUrl:"https://drive.google.com/uc?export=download&id=12UFLTM8yDRONBx2Lo8wTetqGWD6Sw9h0",
    customButtons:[ { name:"커스텀 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=18ToDrJexNwr2IXrcfTUw-VZZVYwnQYJ-" },{ name:"도색 UV 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1vQF-tfrpx5IOQ6Fx_uGymEe6k3p7dMIc" }],
    img:"image/newgranbird.jpg",
    manufacturer: "기아",
    category: "버스"
  },

  { 
    name:"기아 봉고 3", 
    version:"1.0", 
    size:"610MB",
    date: "2024-12-03",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1go-0NNvVpauOWYEXj0IbQPHjEFDq52H5",
    customButtons:[ { name:"커스텀 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1qXHSsRPiJxtnWRiv2GRyRMtNpkQ3viYB" }],
    img:"image/bongo3.jpg",
    manufacturer: "기아",
    category: "트럭"
  },

    { 
    name:"현대 N Vision 74", 
    version:"1.0", 
    size:"120MB",
    date: "2022-12-04",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1XcczpV5KiSzwZmbBcxY38aDyS-jWvE2t",
    img:"image/vision74.jpg",
    manufacturer: "기아",
    category: "스포츠카"
  },


  { 
    name:"현대 일렉시티 2", 
    version:"2.0b", 
    size:"187MB",
    date: "2025-05-10",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1khqs6ZA9Y7PNXHAj33wkrDfjQGILPJsD",
    customButtons:[ { name:"커스텀 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1k_hmpgS1dBzd_h1AGm1t4-bfsbFX4b-5" },{ name:"도색 UV 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1b8iUvc6U5_Po-ENc-z-raeQNl67HNHYk" }],
    img:"image/eleccity.jpg",
    manufacturer: "현대",
    category: "버스"
  },

  { 
    name:"티맵 네비게이션", 
    version:"3.01", 
    size:"14MB",
    date: "2022-05-18",
    redirectUrl:"https://steamcommunity.com/sharedfiles/filedetails/?id=2603145129",
    img:"image/tmap.jpg",
    manufacturer: "티맵",
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
      <p>버전: ${a.version} | 용량: ${a.size}</p>
      <p>업데이트일: ${formatDate(a.date)}</p>
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
  modalVersion.textContent = `버전: ${addon.version} | 용량: ${addon.size} | 날짜: ${formatDate(addon.date)}`;

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