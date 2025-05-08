const gameItems = document.querySelectorAll('.game-item');
const mainContent = document.querySelector('.main-content');

gameItems.forEach((item) => {
    item.addEventListener('click', function () {
        // 这里可以添加切换游戏展示内容的逻辑，如更换截图、描述等
        console.log('点击了', this.textContent);
    });
});