import { homeContent } from './pages/home.js';
import { installationContent, initInstallationPage } from './pages/installation.js';
import { usageContent, initUsagePage } from './pages/usage.js';

// 页面内容映射
const pages = {
    home: homeContent,
    installation: installationContent,
    usage: usageContent
};

// 页面初始化函数映射
const pageInitializers = {
    installation: initInstallationPage,
    usage: initUsagePage
};

// 加载页面内容
function loadPage(pageId) {
    const contentSection = document.getElementById(pageId);
    if (contentSection) {
        // 更新内容
        contentSection.innerHTML = pages[pageId];
        
        // 更新 URL hash
        window.location.hash = pageId;
        
        // 更新页面标题
        updatePageTitle(pageId);
        
        // 如果存在初始化函数，则调用它
        if (pageInitializers[pageId]) {
            pageInitializers[pageId]();
        }
        
        // 更新导航状态
        updateNavigation(pageId);
        
        // 显示当前内容区块
        showContent(pageId);
    }
}

// 更新页面标题
function updatePageTitle(pageId) {
    const titles = {
        home: 'Cursor - AI 驱动的智能代码编辑器',
        installation: 'Cursor - 下载安装',
        usage: 'Cursor - 配置和使用'
    };
    document.title = titles[pageId] || 'Cursor 使用教程';
}

// 更新导航状态
function updateNavigation(pageId) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(nav => {
        const navTarget = nav.getAttribute('href').substring(1);
        nav.classList.toggle('active', navTarget === pageId);
    });
}

// 显示内容区块
function showContent(pageId) {
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.toggle('active', section.id === pageId);
    });
}

// 处理 hash 变化
function handleHashChange() {
    const hash = window.location.hash.slice(1) || 'home';
    loadPage(hash);
}

// 初始化应用
function initializeApp() {
    // 监听 hash 变化
    window.addEventListener('hashchange', handleHashChange);
    
    // 为导航项添加点击事件
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            loadPage(targetId);
        });
    });

    // 处理初始路由
    handleHashChange();
}

// 当 DOM 加载完成时初始化应用
document.addEventListener('DOMContentLoaded', initializeApp); 