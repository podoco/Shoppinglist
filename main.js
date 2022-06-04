const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

function onAdd(){
    //1.사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if(text ===''){
        input.focus();
        return;
    }
    //2.새로운 아이템을 만듦(텍스트 + 삭제버튼)
    const item = createItem(text);
    //3.items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item);
    //4. 새로 추가된 아이템으로 스크롤링함
    item.scrollIntoView({block: 'center'});
    //5.인풋을 초기화한다.
    input.value = '';
    input.focus();
}

let id = 0;  //UUID
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');
    itemRow.innerHTML = `
            <div class="item" data-id =${id}>
                    <span class="item_name">${text}</span>
                    <button class="item_delete" data-id =${id}>
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
            </div>
            <div class="item_divider"></div>`;
    id++;
    return itemRow;
}

addBtn.addEventListener('click', () => {
    onAdd();
});


input.addEventListener('keypress', (event) => {
    if(event.key ==='Enter'){
        onAdd();
    }
});

items.addEventListener('click',event => {
    if(event.target.nodeName === 'I'){
        console.log('he');
    }

});

