// 等待DOM完全加载后执行脚本，确保所有HTML元素都已加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取页面中需要操作的DOM元素
    const fullscreenBtn = document.getElementById('fullscreenBtn'); // 全屏按钮
    const mainGameFrame = document.getElementById('mainGameFrame'); // 主游戏iframe
    const gameContainer = document.querySelector('.game-container'); // 游戏容器
    const miniGames = document.querySelectorAll('.mini-game'); // 所有小游戏元素
    
    // 全屏功能实现
    // 检查全屏按钮和主游戏iframe是否存在
    if (fullscreenBtn && mainGameFrame) {
        // 为全屏按钮添加点击事件监听器
        fullscreenBtn.addEventListener('click', function() {
            // 尝试使用不同浏览器的全屏API，确保兼容性
            if (mainGameFrame.requestFullscreen) {
                mainGameFrame.requestFullscreen(); // 标准全屏API
            } else if (mainGameFrame.webkitRequestFullscreen) {
                mainGameFrame.webkitRequestFullscreen(); // Webkit内核浏览器(Chrome, Safari)
            } else if (mainGameFrame.msRequestFullscreen) {
                mainGameFrame.msRequestFullscreen(); // IE/Edge浏览器
            }
        });
    }
    
    // 小游戏选择功能实现
    // 为每个小游戏添加点击事件监听器
    miniGames.forEach(game => {
        game.addEventListener('click', () => {
            // 从data-src属性获取游戏链接
            const gameSrc = game.dataset.src;
            
            // 更新主游戏iframe的src属性，加载选中的游戏
            mainGameFrame.src = gameSrc;
            
            // 更新游戏信息区域的标题，显示当前选中的游戏名称
            const gameTitle = game.querySelector('.game-cover img').alt;
            document.querySelector('.game-info h2').textContent = gameTitle;
            
            // 平滑滚动到主游戏区域，提供良好的用户体验
            mainGameFrame.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // 处理iframe加载完成事件
    // 当游戏加载完成后，移除加载状态，显示游戏内容
    mainGameFrame.addEventListener('load', function() {
        this.style.opacity = '1'; // 设置透明度为1，显示游戏
        gameContainer.classList.remove('loading'); // 移除加载状态类
    });
    
    // 移动端菜单功能实现
    // 创建移动端菜单按钮
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn'; // 设置类名
    mobileMenuBtn.innerHTML = '☰'; // 设置汉堡菜单图标
    document.body.appendChild(mobileMenuBtn); // 添加到页面
    
    // 获取左侧游戏链接和右侧小游戏区域
    const gameLinks = document.querySelector('.game-links');
    const miniGamesSection = document.querySelector('.mini-games');
    
    // 跟踪当前打开的菜单
    let currentMenu = null;
    
    // 为移动端菜单按钮添加点击事件监听器
    mobileMenuBtn.addEventListener('click', function() {
        if (currentMenu) {
            // 如果有菜单已打开，则关闭它
            currentMenu.classList.remove('active');
            currentMenu = null;
        } else {
            // 否则，打开游戏链接菜单
            gameLinks.classList.add('active');
            currentMenu = gameLinks;
        }
    });
    
    // 点击菜单外区域关闭菜单
    document.addEventListener('click', function(event) {
        // 检查点击是否在菜单外部
        if (currentMenu && !event.target.closest('.game-links') && !event.target.closest('.mini-games') && !event.target.closest('.mobile-menu-btn')) {
            currentMenu.classList.remove('active'); // 关闭菜单
            currentMenu = null; // 重置当前菜单状态
        }
    });
    
    // 添加小游戏菜单切换按钮
    // 创建小游戏菜单按钮
    const miniGamesToggle = document.createElement('button');
    miniGamesToggle.className = 'mobile-menu-btn'; // 设置类名
    miniGamesToggle.innerHTML = '🎮'; // 设置游戏手柄图标
    miniGamesToggle.style.left = '4rem'; // 设置位置，与主菜单按钮错开
    document.body.appendChild(miniGamesToggle); // 添加到页面
    
    // 为小游戏菜单按钮添加点击事件监听器
    miniGamesToggle.addEventListener('click', function() {
        if (currentMenu) {
            // 如果有菜单已打开，则关闭它
            currentMenu.classList.remove('active');
        }
        // 打开小游戏菜单
        miniGamesSection.classList.add('active');
        currentMenu = miniGamesSection;
    });
    
    // 处理所有iframe的加载状态
    // 获取页面中所有iframe元素
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        // 为每个iframe添加加载完成事件监听器
        iframe.addEventListener('load', function() {
            this.style.opacity = '1'; // 加载完成后显示内容
        });
        
        // 设置初始状态为透明，并添加过渡效果
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.3s ease-in-out';
    });
    
    // 为所有锚点链接添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // 为每个锚点链接添加点击事件监听器
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止默认跳转行为
            // 获取目标元素
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // 平滑滚动到目标位置
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 