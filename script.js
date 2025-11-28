// 분실물 목록을 저장할 배열
const lostItems = [];

// HTML 요소들
const lostItemsList = document.getElementById('lostItems');
const searchInput = document.getElementById('searchInput');
const registerForm = document.getElementById('registerForm');
const itemNameInput = document.getElementById('itemName');
const itemDescriptionInput = document.getElementById('itemDescription');

// 물건 등록 함수
function registerLostItem(name, description) {
    const item = {
        name: name,
        description: description
    };
    lostItems.push(item);
    renderLostItems();
}

// 분실물 목록을 화면에 출력하는 함수
function renderLostItems() {
    lostItemsList.innerHTML = '';  // 목록 초기화

    lostItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.description}`;
        lostItemsList.appendChild(li);
    });
}

// 검색 기능 구현
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredItems = lostItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm) || 
        item.description.toLowerCase().includes(searchTerm)
    );

    lostItemsList.innerHTML = '';
    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.description}`;
        lostItemsList.appendChild(li);
    });
});

// 분실물 등록 폼 제출 시
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();  // 페이지 리로드 방지
    const itemName = itemNameInput.value.trim();
    const itemDescription = itemDescriptionInput.value.trim();

    if (itemName && itemDescription) {
        registerLostItem(itemName, itemDescription);
        itemNameInput.value = '';  // 입력란 초기화
        itemDescriptionInput.value = '';  // 입력란 초기화
    }
});
