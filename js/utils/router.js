export class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentRoute = null;
        
        // 初始化时添加路由状态到 URL
        window.addEventListener('popstate', this.handlePopState.bind(this));
    }

    navigate(target) {
        try {
            console.log('Navigating to:', target);
            
            // 获取所有内容区域
            const contentSections = document.querySelectorAll('.content-section');
            
            // 隐藏所有内容
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // 如果是首页，显示静态内容
            if (target === 'home') {
                const homeSection = document.getElementById('home');
                if (homeSection) {
                    homeSection.classList.add('active');
                } else {
                    console.error('Home section not found');
                }
            } else {
                // 检查路由是否存在
                if (!this.routes[target]) {
                    console.error(`Route "${target}" not found`);
                    return;
                }
                
                // 其他页面使用动态内容
                const mainContent = document.querySelector('.main-content');
                if (!mainContent) {
                    console.error('Main content container not found');
                    return;
                }
                
                // 创建新的内容区域
                const newSection = document.createElement('div');
                newSection.className = 'content-section active';
                newSection.innerHTML = this.routes[target];
                
                // 移除之前的动态内容
                contentSections.forEach(section => {
                    if (section.id !== 'home') {
                        section.remove();
                    }
                });
                
                mainContent.appendChild(newSection);
            }
            
            // 更新当前路由
            this.currentRoute = target;
            
            // 更新 URL，但不重新加载页面
            history.pushState({ route: target }, '', `#${target}`);
            
        } catch (error) {
            console.error('Navigation error:', error);
        }
    }

    handlePopState(event) {
        // 处理浏览器的前进/后退
        const target = window.location.hash.slice(1) || 'home';
        this.navigate(target);
    }
} 