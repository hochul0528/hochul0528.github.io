const addons = [
  { 
    name:"현대 유니버스 2022 올 라인업", 
    version:"2.0", 
    size:"3.2MB",         // 용량 추가
    redirectUrl:"https://drive.google.com/uc?export=download&id=1jGoRAk9igGogORbJt03Hx9xidbpmbLGW",
    customButtons:[ { name:"커스텀 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1weipfcj1ZdHgYSzNyGjTAKSg5eo6Jd50" },{ name:"도색 UV 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1iQhqaJy3v2nUTogyj8busET-TtNoxbEg" }],
    img:"image/universe2022.png" 
  },
  { 
    name:"기아 그랜버드 실크로드 2022",  
    version:"1.4", 
    size:"1.8MB",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1-2miMTCFtdgz5okC3gJVqESjJujsd8U5",
    customButtons:[ { name:"커스텀 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1sBO-u3zwikbNCkr-qj_VwPSafCmEYfaT" },{ name:"도색 UV 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1ile2Ki4OEiXMLjQnIz_HNRVlaWc3CFXn" }],
    img:"image/granbird2022.png" 
  },
  { 
    name:"현대 유니버스 2017", 
    version:"1.1.0.1", 
    size:"5.7MB",
    redirectUrl:"https://drive.google.com/uc?export=download&id=17vx3bVeAPxMNqRhNXMwJdFZqwfnLj-07",
    customButtons:[ { name:"커스텀 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=12JyrLzKJS-IguUw_E_e3sirQCP32SftG" },{ name:"도색 UV 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1KHwMJWGdnswk6-9iMNUj6T3aHzI8EGvG" }],
    img:"image/universe2017.png" 
  },
    { 
    name:"기아 뉴그랜버드 실크로드 (구형 그랜버드)", 
    version:"1.1.0.1", 
    size:"5.7MB",
    redirectUrl:"https://drive.google.com/uc?export=download&id=12UFLTM8yDRONBx2Lo8wTetqGWD6Sw9h0",
    customButtons:[ { name:"커스텀 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=18ToDrJexNwr2IXrcfTUw-VZZVYwnQYJ-" },{ name:"도색 UV 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1vQF-tfrpx5IOQ6Fx_uGymEe6k3p7dMIc" }],
    img:"image/newgranbird.png" 
  },
    { 
    name:"현대 일렉시티 2", 
    version:"2.0b", 
    size:"5.7MB",
    redirectUrl:"https://drive.google.com/uc?export=download&id=1khqs6ZA9Y7PNXHAj33wkrDfjQGILPJsD",
    customButtons:[ { name:"커스텀 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1k_hmpgS1dBzd_h1AGm1t4-bfsbFX4b-5" },{ name:"도색 UV 다운로드", redirectUrl:"https://drive.google.com/uc?export=download&id=1b8iUvc6U5_Po-ENc-z-raeQNl67HNHYk" }],
    img:"image/eleccity.png" 
  }
];

const addonList = document.getElementById("addon-list");
const modal = document.getElementById("addon-modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalVersion = document.getElementById("modal-version");
const modalDownload = document.getElementById("modal-download");
const modalCustomContainer = document.getElementById("modal-custom-container");
const modalClose = document.getElementById("modal-close");
const howtoBtn = document.getElementById("howto-btn");
const howtoModal = document.getElementById("howto-modal");
const howtoClose = document.getElementById("howto-close");

howtoBtn.onclick = () => { howtoModal.style.display = "block"; };
howtoClose.onclick = () => { howtoModal.style.display = "none"; };
window.onclick = (e) => { 
  if(e.target === howtoModal) howtoModal.style.display = "none";
};

let currentAddon = null;

// 카드 렌더링
function renderAddons(list){
  addonList.innerHTML = "";
  list.forEach(a=>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${a.img}" alt="${a.name}" />
      <h3>${a.name}</h3>
      <p>버전: ${a.version} | 용량: ${a.size}</p>
    `;
    card.onclick = () => openModal(a);
    addonList.appendChild(card);
  });
}

// 모달 오픈
function openModal(addon){
  currentAddon = addon;

  modalImg.src = addon.img || "previews/default.png";
  modalName.textContent = addon.name;
  modalVersion.textContent = `버전: ${addon.version} | 용량: ${addon.size}`;

  // 기본 다운로드 버튼 클릭 → redirectUrl
  modalDownload.onclick = (e)=>{
    e.preventDefault();
    if(addon.redirectUrl){
      window.location.href = addon.redirectUrl;
      // 새 탭으로 열려면 아래 사용
      // window.open(addon.redirectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // 커스텀 버튼 생성
  modalCustomContainer.innerHTML = "";
  (addon.customButtons || []).forEach(btn=>{
    const button = document.createElement("button");
    button.textContent = btn.name;
    button.onclick = ()=>{
      if(btn.redirectUrl){
        window.location.href = btn.redirectUrl;
        // 새 탭으로 열려면 아래 사용
        // window.open(btn.redirectUrl, '_blank', 'noopener,noreferrer');
      }
    };
    modalCustomContainer.appendChild(button);
  });

  modal.style.display = "block";
}

// 모달 닫기
modalClose.onclick = ()=> modal.style.display = "none";
window.onclick = e => { if(e.target === modal) modal.style.display = "none"; };

renderAddons(addons);
