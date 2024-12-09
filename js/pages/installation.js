export const installationContent = `
    <section class="system-check-section">
        <h1>下载安装</h1>
        <div class="system-requirements">
            <div class="requirement-card">
                <div class="requirement-icon">🖥️</div>
                <h3>系统要求</h3>
                <div class="os-requirements">
                    <div class="os-item">
                        <span class="os-icon">Windows</span>
                        <p>Windows 10/11 64位</p>
                    </div>
                    <div class="os-item">
                        <span class="os-icon">macOS</span>
                        <p>macOS 10.15+</p>
                    </div>
                    <div class="os-item">
                        <span class="os-icon">Linux</span>
                        <p>Ubuntu 20.04+</p>
                    </div>
                </div>
            </div>
            <div class="requirement-card">
                <div class="requirement-icon">💻</div>
                <h3>硬件要求</h3>
                <ul class="hardware-list">
                    <li>CPU: 双核及以上</li>
                    <li>内存: 8GB 及以上</li>
                    <li>硬盘空间: 2GB 可用空间</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="download-section">
        <div class="download-card">
            <div class="download-header">
                <h2>下载 Cursor</h2>
                <p class="version-info">获取最新版本</p>
                <p class="download-tips">点击下方按钮前往官网下载</p>
            </div>
            <div class="download-options">
                <!-- 主下载按钮 -->
                <a href="https://www.cursor.com" 
                   class="download-btn primary" 
                   target="_blank"
                   id="mainDownloadBtn">
                    <span class="os-icon"></span>
                    <span class="btn-text">前往官网下载</span>
                </a>
            </div>
        </div>
    </section>

    <section class="installation-guide">
        <h2>安装指南</h2>
        <div class="installation-tabs">
            <div class="tab-headers">
                <button class="tab-btn active" data-os="windows">Windows</button>
                <button class="tab-btn" data-os="macos">macOS</button>
                <button class="tab-btn" data-os="linux">Linux</button>
            </div>
            <div class="tab-content active" data-os="windows">
                <ol class="install-steps">
                    <li>运行下载的安装程序</li>
                    <li>选择安装位置</li>
                    <li>创建桌面快捷方式</li>
                    <li>配置环境变量（可选）</li>
                </ol>
            </div>
            <div class="tab-content" data-os="macos">
                <ol class="install-steps">
                    <li>打开下载的 DMG 文件</li>
                    <li>将 Cursor 拖拽到应用程序文件夹</li>
                    <li>首次运行时进行安全设置</li>
                </ol>
            </div>
            <div class="tab-content" data-os="linux">
                <ol class="install-steps">
                    <li>打开终端</li>
                    <li>运行安装命令</li>
                    <li>设置必要权限</li>
                    <li>完成依赖安装</li>
                </ol>
            </div>
        </div>
    </section>

    <section class="faq-section">
        <h2>常见问题</h2>
        <div class="faq-list">
            <div class="faq-item">
                <h3>安装失败怎么办？</h3>
                <p>请检查系统要求，确保有足够的磁盘空间，并尝试以管理员身份运行安装程序。</p>
            </div>
            <div class="faq-item">
                <h3>如何配置环境变量？</h3>
                <p>Windows 用户可以通过系统设置 > 高级系统设置 > 环境变量进行配置。</p>
            </div>
            <div class="faq-item">
                <h3>卸载方法</h3>
                <p>可以通过系统的程序卸载功能，或使用 Cursor 提供的卸载程序进行卸载。</p>
            </div>
        </div>
    </section>

    <section class="support-section">
        <h2>需要帮助？</h2>
        <div class="support-options">
            <a href="https://cursor.sh/docs" 
               class="support-card"
               target="_blank">
                <div class="support-icon">📚</div>
                <h3>在线文档</h3>
                <p>查看详细的安装指南和使用文档</p>
                <ul class="support-links">
                    <li>安装配置教程</li>
                    <li>快速入门指南</li>
                    <li>常见问题解答</li>
                </ul>
            </a>

            <a href="https://discord.gg/cursor" 
               class="support-card"
               target="_blank">
                <div class="support-icon">💬</div>
                <h3>社区支持</h3>
                <p>加入开发者社区获取帮助</p>
                <ul class="support-links">
                    <li>Discord 交流群</li>
                    <li>问题讨论</li>
                    <li>经验分享</li>
                </ul>
            </a>

            <a href="https://github.com/getcursor/cursor/issues" 
               class="support-card"
               target="_blank">
                <div class="support-icon">🛠️</div>
                <h3>技术支持</h3>
                <p>联系我们的技术支持团队</p>
                <ul class="support-links">
                    <li>问题反馈</li>
                    <li>功能建议</li>
                    <li>Bug 报告</li>
                </ul>
            </a>
        </div>
    </section>
`;

// 简化初始化函数
export function initInstallationPage() {
    // 检测用户操作系统并更新下载按钮文本
    const userOS = detectOS();
    const mainDownloadBtn = document.getElementById('mainDownloadBtn');
    
    if (mainDownloadBtn) {
        const osIcon = mainDownloadBtn.querySelector('.os-icon');
        osIcon.textContent = `${userOS} `;
    }

    // 保留标签页切换逻辑
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const os = btn.dataset.os;
            
            // 更新按钮状态
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 更新内容显示
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.dataset.os === os) {
                    content.classList.add('active');
                }
            });
        });
    });

    // 添加所有样式
    const allStyles = styles + supportStyles;
    const styleSheet = document.createElement('style');
    styleSheet.textContent = allStyles;
    document.head.appendChild(styleSheet);
}

// 检测用户操作系统
function detectOS() {
    const platform = navigator.platform.toLowerCase();
    if (platform.includes('win')) return 'Windows';
    if (platform.includes('mac')) return 'macOS';
    if (platform.includes('linux')) return 'Linux';
    return 'Windows'; // 默认返回 Windows
} 

// 添加或更新相关样式
const styles = `
    .download-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 1rem 2rem;
        font-size: 1.1rem;
        font-weight: 500;
        color: white;
        background: var(--primary-color);
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        width: auto;
        min-width: 200px;
    }

    .download-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 122, 255, 0.3);
    }

    .download-btn .os-icon {
        font-size: 1.1rem;
    }

    .download-btn .btn-text {
        flex: 1;
        text-align: center;
    }

    .tab-headers {
        display: flex;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .tab-btn {
        padding: 1rem 2rem;
        border: none;
        background: none;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .tab-btn.active {
        color: var(--primary-color);
        border-bottom: 2px solid var(--primary-color);
    }

    .tab-content {
        display: none;
        padding: 2rem;
    }

    .tab-content.active {
        display: block;
    }
`;

// 添加支持卡片的样式
const supportStyles = `
    .support-section {
        margin: 4rem 0;
        padding: 2rem;
        background: #f8f9fa;
        border-radius: 16px;
    }

    .support-section h2 {
        text-align: center;
        margin-bottom: 2rem;
        color: var(--text-color);
    }

    .support-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
    }

    .support-card {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: var(--card-shadow);
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .support-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .support-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .support-card h3 {
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }

    .support-card p {
        color: #666;
        font-size: 0.95rem;
        margin-bottom: 1rem;
    }

    .support-links {
        list-style: none;
        padding: 0;
        margin-top: 1rem;
        width: 100%;
        text-align: left;
    }

    .support-links li {
        padding: 0.5rem 0;
        color: #666;
        border-bottom: 1px solid #eee;
        transition: all 0.3s ease;
    }

    .support-links li:last-child {
        border-bottom: none;
    }

    .support-card:hover .support-links li {
        color: var(--primary-color);
        transform: translateX(4px);
    }

    @media (max-width: 768px) {
        .support-options {
            grid-template-columns: 1fr;
        }
    }
`;