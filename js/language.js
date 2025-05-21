// 多语言翻译对象 - 包含所有支持的语言及其对应的文本翻译
const translations = {
    // 英文翻译
    en: {
        // 页头部分
        'popular-games': 'Popular Games',
        'more-games': 'More Games',
        'fullscreen': 'Fullscreen',
        
        // 游戏信息部分
        'game-features': 'Game Features',
        'how-to-play': 'How to Play',
        'what-players-love': 'What Players Love',
        'faq': 'Frequently Asked Questions',
        
        // 游戏特点部分
        'feature-1': 'Brain-teasing puzzles',
        'feature-2': 'Stunning visuals and smooth animations',
        'feature-3': 'Multiple difficulty levels',
        'feature-4': 'Interactive gameplay for all ages',
        
        // 游戏操作指南部分
        'controls': 'Use the Left Mouse Button to drag, drop, shoot, and connect.',
        
        // 常见问题解答部分
        'faq-1-q': 'Is this game free to play?',
        'faq-1-a': 'Yes, all games on our platform are completely free!',
        'faq-2-q': 'What are the system requirements?',
        'faq-2-a': 'The game runs smoothly on most modern browsers. We recommend using Chrome or Firefox for the best experience.',
        
        // 页脚部分
        'copyright': '© 2025 Stone Puzzle Games. All rights reserved.',
        'contact-us': 'Contact Us'
    },
    // 中文翻译
    zh: {
        // 页头部分
        'popular-games': '热门游戏',
        'more-games': '更多游戏',
        'fullscreen': '全屏',
        
        // 游戏信息部分
        'game-features': '游戏特色',
        'how-to-play': '如何玩',
        'what-players-love': '玩家喜爱',
        'faq': '常见问题',
        
        // 游戏特点部分
        'feature-1': '烧脑的益智谜题',
        'feature-2': '精美的视觉效果和流畅的动画',
        'feature-3': '多样的难度等级',
        'feature-4': '适合所有年龄的互动玩法',
        
        // 游戏操作指南部分
        'controls': '使用鼠标左键拖放、发射和连接。',
        
        // 常见问题解答部分
        'faq-1-q': '这个游戏是免费的吗？',
        'faq-1-a': '是的，我们平台上的所有游戏都是完全免费的！',
        'faq-2-q': '系统需求是什么？',
        'faq-2-a': '游戏在大多数现代浏览器上都能流畅运行。我们推荐使用Chrome或Firefox以获得最佳体验。',
        
        // 页脚部分
        'copyright': '© 2025 石头解谜游戏. 保留所有权利。',
        'contact-us': '联系我们'
    },
    // 日文翻译
    ja: {
        // 页头部分
        'popular-games': '人気のゲーム',
        'more-games': 'その他のゲーム',
        'fullscreen': '全画面表示',
        
        // 游戏信息部分
        'game-features': 'ゲームの特徴',
        'how-to-play': '遊び方',
        'what-players-love': 'プレイヤーの声',
        'faq': 'よくある質問',
        
        // 游戏特点部分
        'feature-1': '頭を使うパズル',
        'feature-2': '美しいビジュアルと滑らかなアニメーション',
        'feature-3': '複数の難易度レベル',
        'feature-4': '全年齢向けのインタラクティブな遊び方',
        
        // 游戏操作指南部分
        'controls': 'マウスの左ボタンでドラッグ、ドロップ、発射、接続します。',
        
        // 常见问题解答部分
        'faq-1-q': 'このゲームは無料ですか？',
        'faq-1-a': 'はい、当プラットフォームのすべてのゲームは完全に無料です！',
        'faq-2-q': 'システム要件は何ですか？',
        'faq-2-a': 'ゲームは最新のブラウザでスムーズに動作します。最高の体験のためにChromeまたはFirefoxの使用をお勧めします。',
        
        // 页脚部分
        'copyright': '© 2025 ストーンパズルゲーム. 全権利所有。',
        'contact-us': 'お問い合わせ'
    },
    // 韩文翻译
    ko: {
        // 页头部分
        'popular-games': '인기 게임',
        'more-games': '더 많은 게임',
        'fullscreen': '전체 화면',
        
        // 游戏信息部分
        'game-features': '게임 특징',
        'how-to-play': '게임 방법',
        'what-players-love': '플레이어 리뷰',
        'faq': '자주 묻는 질문',
        
        // 游戏特点部分
        'feature-1': '두뇌를 자극하는 퍼즐',
        'feature-2': '아름다운 비주얼과 부드러운 애니메이션',
        'feature-3': '다양한 난이도 레벨',
        'feature-4': '모든 연령대를 위한 상호작용 게임플레이',
        
        // 游戏操作指南部分
        'controls': '마우스 왼쪽 버튼으로 드래그, 드롭, 발사 및 연결하세요.',
        
        // 常见问题解答部分
        'faq-1-q': '이 게임은 무료인가요?',
        'faq-1-a': '네, 저희 플랫폼의 모든 게임은 완전히 무료입니다!',
        'faq-2-q': '시스템 요구사항은 무엇인가요?',
        'faq-2-a': '게임은 대부분의 최신 브라우저에서 원활하게 실행됩니다. 최상의 경험을 위해 Chrome 또는 Firefox를 권장합니다.',
        
        // 页脚部分
        'copyright': '© 2025 스톤 퍼즐 게임즈. 모든 권리 보유.',
        'contact-us': '문의하기'
    },
    // 西班牙语翻译
    es: {
        // 页头部分
        'popular-games': 'Juegos Populares',
        'more-games': 'Más Juegos',
        'fullscreen': 'Pantalla Completa',
        
        // 游戏信息部分
        'game-features': 'Características del Juego',
        'how-to-play': 'Cómo Jugar',
        'what-players-love': 'Lo Que Aman los Jugadores',
        'faq': 'Preguntas Frecuentes',
        
        // 游戏特点部分
        'feature-1': 'Rompecabezas estimulantes',
        'feature-2': 'Gráficos impresionantes y animaciones suaves',
        'feature-3': 'Múltiples niveles de dificultad',
        'feature-4': 'Jugabilidad interactiva para todas las edades',
        
        // 游戏操作指南部分
        'controls': 'Usa el botón izquierdo del ratón para arrastrar, soltar, disparar y conectar.',
        
        // 常见问题解答部分
        'faq-1-q': '¿Este juego es gratuito?',
        'faq-1-a': '¡Sí, todos los juegos en nuestra plataforma son completamente gratuitos!',
        'faq-2-q': '¿Cuáles son los requisitos del sistema?',
        'faq-2-a': 'El juego funciona sin problemas en la mayoría de los navegadores modernos. Recomendamos usar Chrome o Firefox para la mejor experiencia.',
        
        // 页脚部分
        'copyright': '© 2025 Stone Puzzle Games. Todos los derechos reservados.',
        'contact-us': 'Contáctanos'
    }
};

/**
 * 更新网站语言函数
 * 根据选择的语言代码更新页面上所有带有data-i18n属性的元素文本
 * @param {string} lang - 语言代码（en, zh, ja, ko, es）
 */
function updateLanguage(lang) {
    // 查找所有带有data-i18n属性的元素，并更新其文本内容
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n'); // 获取翻译键名
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key]; // 设置对应语言的文本
        }
    });
    
    // 更新HTML文档的lang属性，有助于屏幕阅读器和搜索引擎识别页面语言
    document.documentElement.lang = lang;
    
    // 更新语言按钮的激活状态，高亮显示当前选中的语言
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active'); // 移除所有按钮的激活状态
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active'); // 为当前语言按钮添加激活状态
        }
    });
    
    // 将用户语言偏好保存到本地存储，下次访问时自动应用
    localStorage.setItem('preferred-language', lang);
}

// 初始化语言设置
// 在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 为页面元素添加data-i18n属性，标记需要翻译的文本
    document.querySelector('.game-links h2').setAttribute('data-i18n', 'popular-games');
    document.querySelector('.mini-games h2').setAttribute('data-i18n', 'more-games');
    document.querySelector('.fullscreen-btn').setAttribute('data-i18n', 'fullscreen');
    document.querySelector('.game-features h3').setAttribute('data-i18n', 'game-features');
    document.querySelector('.how-to-play h3').setAttribute('data-i18n', 'how-to-play');
    document.querySelector('.player-reviews h3').setAttribute('data-i18n', 'what-players-love');
    document.querySelector('.faq h3').setAttribute('data-i18n', 'faq');
    
    // 为所有语言按钮添加点击事件监听器
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang'); // 获取按钮的语言代码
            updateLanguage(lang); // 更新网站语言
        });
    });
    
    // 加载用户偏好语言或默认使用英语
    // 从本地存储中获取之前保存的语言偏好，如果没有则默认为英语
    const preferredLang = localStorage.getItem('preferred-language') || 'en';
    updateLanguage(preferredLang); // 应用语言设置
});