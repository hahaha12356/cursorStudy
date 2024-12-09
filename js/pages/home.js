export const homeContent = `
    <!-- 英雄区 -->
    <section class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title">用 AI 重新定义编程体验</h1>
            <p class="hero-subtitle">Cursor - 首个集成 AI 助手的智能代码编辑器</p>
            <div class="hero-buttons">
                <a href="#installation" class="btn btn-primary">立即下载</a>
                <a href="#usage" class="btn btn-secondary">查看教程</a>
            </div>
        </div>
        <div class="hero-animation">
            <div class="code-editor-preview">
                <pre><code>// AI 智能代码补全示例
function calculateTotal(items) {
    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}</code></pre>
            </div>
        </div>
    </section>

    <!-- 核心特性区 -->
    <section class="features-section">
        <h2>核心特性</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🤖</div>
                <h3>AI 代码助手</h3>
                <ul>
                    <li>实时代码建议</li>
                    <li>智能代码补全</li>
                    <li>自然语言交互</li>
                </ul>
            </div>
            <div class="feature-card">
                <div class="feature-icon">⚡</div>
                <h3>效率提升</h3>
                <ul>
                    <li>快速重构</li>
                    <li>智能调试</li>
                    <li>自动文档生成</li>
                </ul>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🌟</div>
                <h3>全面支持</h3>
                <ul>
                    <li>支持主流编程语言</li>
                    <li>丰富的插件生态</li>
                    <li>持续更新迭代</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- 使用场景展示 -->
    <section class="use-cases-section">
        <h2>使用场景</h2>
        <div class="use-cases-grid">
            <div class="use-case-card">
                <img src="images/illustrations/learning.jpg" alt="编程学习">
                <h3>初学者编程学习</h3>
                <ul>
                    <li>AI 辅助编程入门</li>
                    <li>代码解释和教学</li>
                </ul>
            </div>
            <div class="use-case-card">
                <img src="images/illustrations/development.jpg" alt="专业开发">
                <h3>专业开发提效</h3>
                <ul>
                    <li>快速原型开发</li>
                    <li>代码优化建议</li>
                </ul>
            </div>
            <div class="use-case-card">
                <img src="images/illustrations/collaboration.jpg" alt="团队协作">
                <h3>团队协作</h3>
                <ul>
                    <li>代码审查</li>
                    <li>文档生成</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- 用户反馈区 -->
    <section class="testimonials-section">
        <h2>用户反馈</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>"Cursor 让我的编程效率提升了至少 50%，AI 助手就像一个随时在线的编程导师。"</p>
                </div>
                <div class="testimonial-author">
                    <img src="images/avatars/avatar1.jpg" alt="用户头像">
                    <div class="author-info">
                        <h4>张小明</h4>
                        <p>全栈开发工程师</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>"作为编程初学者，Cursor 的 AI 解释功能帮助我快速理解代码逻辑。"</p>
                </div>
                <div class="testimonial-author">
                    <img src="images/avatars/avatar2.jpg" alt="用户头像">
                    <div class="author-info">
                        <h4>李小华</h4>
                        <p>计算机专业学生</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 底部区域 -->
    <footer class="home-footer">
        <div class="footer-grid">
            <div class="footer-column">
                <h4>快速链接</h4>
                <ul>
                    <li><a href="#installation">下载安装</a></li>
                    <li><a href="#usage">使用教程</a></li>
                    <li><a href="#about">关于我们</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>社交媒体</h4>
                <div class="social-links">
                    <a href="#" class="social-link">GitHub</a>
                    <a href="#" class="social-link">Twitter</a>
                    <a href="#" class="social-link">Discord</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© 2024 Cursor IDE. All rights reserved.</p>
        </div>
    </footer>
`;
console.log('Home module loaded'); 