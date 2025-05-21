// // CSS布局测试脚本
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('CSS布局测试脚本已加载');
    
//     // 设置main元素的网格列布局
//     const mainElement = document.querySelector('main');
//     if (mainElement) {
//         console.log('找到main元素，正在应用布局');
//         mainElement.style.display = 'grid';
//         mainElement.style.gridTemplateColumns = '8fr 1fr 8fr';
//         mainElement.style.gap = '1rem';
//         mainElement.style.border = '2px solid red'; // 添加边框以便于观察
        
//         // 添加测试标记
//         const testDiv = document.createElement('div');
//         testDiv.textContent = '布局测试生效中';
//         testDiv.style.position = 'fixed';
//         testDiv.style.top = '50px';
//         testDiv.style.right = '10px';
//         testDiv.style.background = 'red';
//         testDiv.style.color = 'white';
//         testDiv.style.padding = '5px';
//         testDiv.style.zIndex = '9999';
//         document.body.appendChild(testDiv);
//     } else {
//         console.error('未找到main元素');
//     }
// }); 