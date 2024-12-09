// 首先定义 Python 教程内容
const pythonTutorialContent = `
    <div class="tutorial-section">
        <h3>Python 入门实战：制作待办事项程序</h3>
        <div class="tutorial-content">
            <div class="tutorial-intro">
                <p>通过这个教程，我们将使用 Cursor 和 Python 制作一个简单的待办事项程序。无需任何编程基础，跟着步骤一步步来就可以了！</p>
            </div>

            <div class="tutorial-steps">
                <div class="step">
                    <h4>第 1 步：准备开发环境</h4>
                    <div class="step-content">
                        <ol>
                            <li>
                                <strong>安装 Python</strong>
                                <p>访问 Python 官网 (python.org)，下载并安装最新版本的 Python</p>
                                <div class="tip">
                                    <i class="tip-icon">💡</i>
                                    <p>安装时记得勾选"Add Python to PATH"选项</p>
                                </div>
                            </li>
                            <li>
                                <strong>打开 Cursor</strong>
                                <p>启动 Cursor，创建一个新的文件夹，命名为"todo_app"</p>
                            </li>
                            <li>
                                <strong>创建项目文件</strong>
                                <p>在文件夹中创建一个新文件，命名为"todo.py"</p>
                            </li>
                        </ol>
                    </div>
                </div>

                <div class="step">
                    <h4>第 2 步：创建基础程序结构</h4>
                    <div class="step-content">
                        <p>在 todo.py 中，我们先创建一个简单的程序框架。将光标放在文件中，输入以下提示：</p>
                        <div class="ai-prompt-example">
                            <p class="prompt-label">在 Cursor 中输入这段文字：</p>
                            <div class="prompt-content">
                                "创建一个简单的待办事项程序，包含添加任务和显示任务的功能"
                            </div>
                        </div>
                        <p>按下 <kbd>Ctrl</kbd> + <kbd>Enter</kbd>，Cursor 的 AI 助手会生成类似这样的代码：</p>
                        <pre><code class="language-python">
# 创建一个空列表来存储待办事项
todos = []

def add_todo(task):
    """添加一个新的待办事项"""
    todos.append(task)
    print(f"已添加任务: {task}")

def show_todos():
    """显示所有待办事项"""
    if not todos:
        print("没有待办事项")
        return
    
    print("\\n当前待办事项:")
    for i, task in enumerate(todos, 1):
        print(f"{i}. {task}")
                        </code></pre>
                        <div class="code-explanation">
                            <h5>代码说明：</h5>
                            <ul>
                                <li><code>todos = []</code> - 创建一个空列表存储任务</li>
                                <li><code>add_todo()</code> - 添加新任务的函数</li>
                                <li><code>show_todos()</code> - 显示所有任务的函数</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <h4>第 3 步：添加用户交互</h4>
                    <div class="step-content">
                        <p>现在我们添加一个简单的菜单，让用户可以选择操作。在代码下方输入：</p>
                        <div class="ai-prompt-example">
                            <p class="prompt-label">在 Cursor 中输入：</p>
                            <div class="prompt-content">
                                "添加一个主菜单，让用户可以选择添加任务、查看任务或退出程序"
                            </div>
                        </div>
                        <pre><code class="language-python">
def main():
    while True:
        print("\\n=== 待办事项管理 ===")
        print("1. 添加新任务")
        print("2. 查看所有任务")
        print("3. 退出程序")
        
        choice = input("\\n请选择操作 (1-3): ")
        
        if choice == "1":
            task = input("请输入新任务: ")
            add_todo(task)
        elif choice == "2":
            show_todos()
        elif choice == "3":
            print("感谢使用，再见！")
            break
        else:
            print("无效的选择，请重试")

if __name__ == "__main__":
    main()
                        </code></pre>
                        <div class="code-explanation">
                            <h5>代码说明：</h5>
                            <ul>
                                <li><code>main()</code> - 程序的主函数，包含菜单循环</li>
                                <li><code>input()</code> - 获取用户输入</li>
                                <li><code>if __name__ == "__main__"</code> - 程序的入口点</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <h4>第 4 步：运行程序</h4>
                    <div class="step-content">
                        <ol>
                            <li>
                                <strong>保存文件</strong>
                                <p>按 <kbd>Ctrl</kbd> + <kbd>S</kbd> 保存 todo.py 文件</p>
                            </li>
                            <li>
                                <strong>运行程序</strong>
                                <p>在 Cursor 的终端中输入：</p>
                                <pre><code class="language-bash">python todo.py</code></pre>
                            </li>
                            <li>
                                <strong>测试功能</strong>
                                <ul>
                                    <li>选择 1 添加一些任务</li>
                                    <li>选择 2 查看已添加的任务</li>
                                    <li>选择 3 退出程序</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>

                <div class="step">
                    <h4>第 5 步：尝试改进程序</h4>
                    <div class="step-content">
                        <p>现在你可以尝试使用 Cursor 的 AI 助手添加更多功能：</p>
                        <div class="improvement-suggestions">
                            <div class="suggestion">
                                <h5>添加删除任务功能</h5>
                                <div class="ai-prompt-example">
                                    <p class="prompt-label">尝试输入：</p>
                                    <div class="prompt-content">
                                        "添加一个删除任务的功能，允许用户输入任务编号来删除对应的任务"
                                    </div>
                                </div>
                            </div>
                            <div class="suggestion">
                                <h5>添加任务完成状态</h5>
                                <div class="ai-prompt-example">
                                    <p class="prompt-label">尝试输入：</p>
                                    <div class="prompt-content">
                                        "修改程序，让每个任务都有完成状态，可以标记任务为已完成"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tutorial-summary">
                <h4>恭喜你！</h4>
                <p>你已经成功创建了第一个 Python 程序！通过这个简单的项目，你学会了：</p>
                <ul>
                    <li>使用 Cursor 创建和编辑 Python 文件</li>
                    <li>利用 AI 助手生成代码</li>
                    <li>基本的 Python 程序结构</li>
                    <li>处理用户输入和程序循环</li>
                </ul>
            </div>
        </div>
    </div>
`;

// 添加 Java 教程内容
const javaTutorialContent = `
    <div class="tutorial-section">
        <h3>Java 入门实战：学生成绩管理系统</h3>
        <div class="tutorial-content">
            <div class="tutorial-intro">
                <p>通过这个教程，我们将使用 Cursor 和 Java 创建一个简单的学生成绩管理系统。这个项目将帮助你理解 Java 的基础概念和面向对象编程。</p>
            </div>

            <div class="tutorial-steps">
                <div class="step">
                    <h4>第 1 步：准备开发环境</h4>
                    <div class="step-content">
                        <ol>
                            <li>
                                <strong>安装 JDK</strong>
                                <p>访问 Oracle 官网下载并安装 JDK（Java Development Kit）</p>
                                <div class="tip">
                                    <i class="tip-icon">💡</i>
                                    <p>安装完成后，打开命令行输入 "java -version" 确认安装成功</p>
                                </div>
                            </li>
                            <li>
                                <strong>打开 Cursor</strong>
                                <p>创建新文件夹 "student_management"</p>
                            </li>
                            <li>
                                <strong>创建项目文件</strong>
                                <p>在文件夹中创建以下文件：</p>
                                <ul>
                                    <li>Student.java - 学生类</li>
                                    <li>StudentManager.java - 管理类</li>
                                    <li>Main.java - 主程序</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>

                <div class="step">
                    <h4>第 2 步：创建学生类</h4>
                    <div class="step-content">
                        <p>在 Student.java 中，输入以下提示：</p>
                        <div class="ai-prompt-example">
                            <p class="prompt-label">在 Cursor 中输入：</p>
                            <div class="prompt-content">
                                "创建一个学生类，包含学号、姓名、成绩等属性，并提供相应的 getter 和 setter 方法"
                            </div>
                        </div>
                        <p>AI 将生成类似这样的代码：</p>
                        <pre><code class="language-java">
public class Student {
    private String id;
    private String name;
    private double score;

    // 构造函数
    public Student(String id, String name, double score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }

    // Getter 和 Setter 方法
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public double getScore() { return score; }
    public void setScore(double score) { this.score = score; }

    @Override
    public String toString() {
        return "学号: " + id + ", 姓名: " + name + ", 成绩: " + score;
    }
}
                        </code></pre>
                        <div class="code-explanation">
                            <h5>代码说明：</h5>
                            <ul>
                                <li><code>private</code> - 私有属性，保护数据</li>
                                <li><code>构造函数</code> - 创建对象时初始化属性</li>
                                <li><code>Getter/Setter</code> - 访问和修改私有属性的方法</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <h4>第 3 步：创建管理类</h4>
                    <div class="step-content">
                        <p>在 StudentManager.java 中，输入：</p>
                        <div class="ai-prompt-example">
                            <p class="prompt-label">在 Cursor 中输入：</p>
                            <div class="prompt-content">
                                "创建一个学生管理类，使用 ArrayList 存储学生信息，包含添加、查找、显示所有学生的方法"
                            </div>
                        </div>
                        <pre><code class="language-java">
import java.util.ArrayList;
import java.util.List;

public class StudentManager {
    private List<Student> students;

    public StudentManager() {
        students = new ArrayList<>();
    }

    public void addStudent(Student student) {
        students.add(student);
        System.out.println("已添加学生: " + student.getName());
    }

    public Student findStudent(String id) {
        for (Student student : students) {
            if (student.getId().equals(id)) {
                return student;
            }
        }
        return null;
    }

    public void displayAllStudents() {
        if (students.isEmpty()) {
            System.out.println("没有学生记录");
            return;
        }
        
        System.out.println("\\n所有学生信息：");
        for (Student student : students) {
            System.out.println(student);
        }
    }
}
                        </code></pre>
                        <div class="code-explanation">
                            <h5>代码说明：</h5>
                            <ul>
                                <li><code>ArrayList</code> - 动态数组，存储学生对象</li>
                                <li><code>addStudent</code> - 添加新学生</li>
                                <li><code>findStudent</code> - 根据学号查找学生</li>
                                <li><code>displayAllStudents</code> - 显示所有学生信息</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <h4>第 4 步：创建主程序</h4>
                    <div class="step-content">
                        <p>在 Main.java 中，输入：</p>
                        <div class="ai-prompt-example">
                            <p class="prompt-label">在 Cursor 中输入：</p>
                            <div class="prompt-content">
                                "创建主程序，提供菜单界面，允许用户添加学生、查找学生、显示所有学生信息"
                            </div>
                        </div>
                        <pre><code class="language-java">
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        StudentManager manager = new StudentManager();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\\n=== 学生成绩管理系统 ===");
            System.out.println("1. 添加学生");
            System.out.println("2. 查找学生");
            System.out.println("3. 显示所有学生");
            System.out.println("4. 退出");
            
            System.out.print("请选择操作 (1-4): ");
            String choice = scanner.nextLine();

            switch (choice) {
                case "1":
                    System.out.print("请输入学号: ");
                    String id = scanner.nextLine();
                    System.out.print("请输入姓名: ");
                    String name = scanner.nextLine();
                    System.out.print("请输入成绩: ");
                    double score = Double.parseDouble(scanner.nextLine());
                    
                    manager.addStudent(new Student(id, name, score));
                    break;

                case "2":
                    System.out.print("请输入要查找的学号: ");
                    String searchId = scanner.nextLine();
                    Student found = manager.findStudent(searchId);
                    if (found != null) {
                        System.out.println("找到学生：" + found);
                    } else {
                        System.out.println("未找到该学生");
                    }
                    break;

                case "3":
                    manager.displayAllStudents();
                    break;

                case "4":
                    System.out.println("感谢使用，再见！");
                    scanner.close();
                    return;

                default:
                    System.out.println("无效的选择，请重试");
            }
        }
    }
}
                        </code></pre>
                        <div class="code-explanation">
                            <h5>代码说明：</h5>
                            <ul>
                                <li><code>Scanner</code> - 用于读取用户输入</li>
                                <li><code>switch</code> - 处理不同的菜单选项</li>
                                <li><code>Double.parseDouble</code> - 将字符串转换为数字</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <h4>第 5 步：编译和运行</h4>
                    <div class="step-content">
                        <ol>
                            <li>
                                <strong>保存所有文件</strong>
                                <p>确保三个 .java 文件都已保存</p>
                            </li>
                            <li>
                                <strong>编译程序</strong>
                                <p>在终端中输入：</p>
                                <pre><code class="language-bash">javac *.java</code></pre>
                            </li>
                            <li>
                                <strong>运行程序</strong>
                                <p>在终端中输入：</p>
                                <pre><code class="language-bash">java Main</code></pre>
                            </li>
                            <li>
                                <strong>测试功能</strong>
                                <ul>
                                    <li>添加几个学生信息</li>
                                    <li>查找已添加的学生</li>
                                    <li>显示所有学生信息</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>

                <div class="step">
                    <h4>第 6 步：尝试改进</h4>
                    <div class="step-content">
                        <p>使用 Cursor 的 AI 助手添加更多功能：</p>
                        <div class="improvement-suggestions">
                            <div class="suggestion">
                                <h5>添加成绩统计功能</h5>
                                <div class="ai-prompt-example">
                                    <p class="prompt-label">尝试输入：</p>
                                    <div class="prompt-content">
                                        "添加计算平均分、最高分、最低分的功能"
                                    </div>
                                </div>
                            </div>
                            <div class="suggestion">
                                <h5>添加文件保存功能</h5>
                                <div class="ai-prompt-example">
                                    <p class="prompt-label">尝试输入：</p>
                                    <div class="prompt-content">
                                        "添加将学生信息保存到文件和从文件读取的功能"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tutorial-summary">
                <h4>恭喜你！</h4>
                <p>你已经成功创建了第一个 Java 程序！通过这个项目，你学会了：</p>
                <ul>
                    <li>Java 类的创建和使用</li>
                    <li>面向对象编程的基本概念</li>
                    <li>ArrayList 的使用</li>
                    <li>用户输入处理</li>
                    <li>基本的程序结构设计</li>
                </ul>
            </div>
        </div>
    </div>
`;

// 添加 Vue3 教程内容
const vue3TutorialContent = `
    <div class="tutorial-section">
        <h3>Vue3 入门实战：创建个人笔记应用</h3>
        <div class="tutorial-content">
            <div class="tutorial-intro">
                <p>通过这个教程，我们将使用 Cursor 和 Vue3 创建一个简单的个人笔记应用。你将学习 Vue3 的基础概念和组合式 API。</p>
            </div>

            <div class="tutorial-steps">
                <div class="step">
                    <h4>第 1 步：准备开发环境</h4>
                    <div class="step-content">
                        <ol>
                            <li>
                                <strong>安装 Node.js</strong>
                                <p>访问 Node.js 官网下载并安装最新的长期支持版（LTS）</p>
                                <div class="tip">
                                    <i class="tip-icon">💡</i>
                                    <p>安装完成后，在终端输入 "node -v" 和 "npm -v" 确认安装成功</p>
                                </div>
                            </li>
                            <li>
                                <strong>创建 Vue 项目</strong>
                                <p>在终端中执行以下命令：</p>
                                <pre><code class="language-bash">
npm create vue@latest my-notes-app
cd my-notes-app
npm install
                                </code></pre>
                            </li>
                            <li>
                                <strong>打开 Cursor</strong>
                                <p>在 Cursor 中打开 my-notes-app 文件夹</p>
                            </li>
                        </ol>
                    </div>
                </div>

                <div class="step">
                    <h4>第 2 步：创建笔记组件</h4>
                    <div class="step-content">
                        <p>在 src/components 文件夹中，创建 NoteList.vue：</p>
                        <div class="ai-prompt-example">
                            <p class="prompt-label">在 Cursor 中输入：</p>
                            <div class="prompt-content">
                                "创建一个 Vue3 组件，使用组合式 API 实现笔记列表功能，包含添加、删除笔记的功能"
                            </div>
                        </div>
                        <pre><code class="language-vue">&lt;!-- NoteList.vue --&gt;
&lt;template&gt;
  &lt;div class="notes-container"&gt;
    &lt;div class="add-note"&gt;
      &lt;input 
        v-model="newNote" 
        @keyup.enter="addNote"
        placeholder="输入笔记内容，按回车添加..."
      &gt;
      &lt;button @click="addNote"&gt;添加笔记&lt;/button&gt;
    &lt;/div&gt;

    &lt;div class="notes-list"&gt;
      &lt;div v-for="note in notes" :key="note.id" class="note-item"&gt;
        &lt;p&gt;{{ note.text }}&lt;/p&gt;
        &lt;button @click="deleteNote(note.id)" class="delete-btn"&gt;删除&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

// 响应式状态
const newNote = ref('')
const notes = ref([])

// 添加笔记
const addNote = () => {
  if (newNote.value.trim()) {
    notes.value.push({
      id: Date.now(),
      text: newNote.value
    })
    newNote.value = '' // 清空输入
  }
}

// 删除笔记
const deleteNote = (id) => {
  notes.value = notes.value.filter(note => note.id !== id)
}
&lt;/script&gt;

&lt;style scoped&gt;
.notes-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.add-note {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-note input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.note-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  background: #f9f9f9;
  border-radius: 4px;
}

.delete-btn {
  background: #ff4444;
}
&lt;/style&gt;</code></pre>
                    </div>
                </div>

                <div class="step">
                    <h4>第 3 步：修改主应用</h4>
                    <div class="step-content">
                        <p>修改 src/App.vue：</p>
                        <div class="ai-prompt-example">
                            <p class="prompt-label">在 Cursor 中输入：</p>
                            <div class="prompt-content">
                                "创建一个简单的应用布局，包含标题和笔记列表组件"
                            </div>
                        </div>
                        <pre><code class="language-vue">&lt;!-- App.vue --&gt;
&lt;template&gt;
  &lt;div class="app"&gt;
    &lt;header&gt;
      &lt;h1&gt;我的笔记本&lt;/h1&gt;
    &lt;/header&gt;
    &lt;main&gt;
      &lt;NoteList /&gt;
    &lt;/main&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import NoteList from './components/NoteList.vue'
&lt;/script&gt;

&lt;style&gt;
.app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  color: #2c3e50;
}
&lt;/style&gt;</code></pre>
                    </div>
                </div>

                <div class="step">
                    <h4>第 4 步：添加数据持久化</h4>
                    <div class="step-content">
                        <p>使用 localStorage 保存笔记数据：</p>
                        <div class="ai-prompt-example">
                            <p class="prompt-label">在 Cursor 中输入：</p>
                            <div class="prompt-content">
                                "添加使用 localStorage 保存和读取笔记数据的功能"
                            </div>
                        </div>
                        <pre><code class="language-vue">
<!-- 在 NoteList.vue 的 script setup 中添加 -->
import { ref, onMounted, watch } from 'vue'

const notes = ref([])

// 从 localStorage 加载数据
onMounted(() => {
  const savedNotes = localStorage.getItem('notes')
  if (savedNotes) {
    notes.value = JSON.parse(savedNotes)
  }
})

// 监听数据变化并保存
watch(notes, (newNotes) => {
  localStorage.setItem('notes', JSON.stringify(newNotes))
}, { deep: true })
                        </code></pre>
                        <div class="code-explanation">
                            <h5>代码说明：</h5>
                            <ul>
                                <li><code>onMounted</code> - 组件挂载时执行</li>
                                <li><code>watch</code> - 监听响应式数据变化</li>
                                <li><code>localStorage</code> - 浏览器本地存储</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="step">
                    <h4>第 5 步：运行和测试</h4>
                    <div class="step-content">
                        <ol>
                            <li>
                                <strong>启动开发服务器</strong>
                                <p>在终端中运行：</p>
                                <pre><code class="language-bash">npm run dev</code></pre>
                            </li>
                            <li>
                                <strong>测试功能</strong>
                                <ul>
                                    <li>添加几条笔记</li>
                                    <li>删除笔记</li>
                                    <li>刷新页面，确认数据保持</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>

                <div class="step">
                    <h4>第 6 步：改进建议</h4>
                    <div class="step-content">
                        <p>使用 Cursor 的 AI 助手添加更多功能：</p>
                        <div class="improvement-suggestions">
                            <div class="suggestion">
                                <h5>添加笔记编辑功能</h5>
                                <div class="ai-prompt-example">
                                    <p class="prompt-label">尝试输入：</p>
                                    <div class="prompt-content">
                                        "添加编辑已有笔记的功能，包含编辑按钮和保存功能"
                                    </div>
                                </div>
                            </div>
                            <div class="suggestion">
                                <h5>添加笔记分类</h5>
                                <div class="ai-prompt-example">
                                    <p class="prompt-label">尝试输入：</p>
                                    <div class="prompt-content">
                                        "添加笔记分类功能，允许用户为笔记添加标签并按标签筛选"
                                    </div>
                                </div>
                            </div>
                            <div class="suggestion">
                                <h5>美化界面</h5>
                                <div class="ai-prompt-example">
                                    <p class="prompt-label">尝试输入：</p>
                                    <div class="prompt-content">
                                        "添加过渡动画效果，改进用户界面设计"
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tutorial-summary">
                <h4>恭喜你！</h4>
                <p>你已经成功创建了第一个 Vue3 应用！通过这个项目，你学会了：</p>
                <ul>
                    <li>Vue3 组合式 API 的基本使用</li>
                    <li>组件的创建和使用</li>
                    <li>响应式数据管理</li>
                    <li>事件处理和表单输入</li>
                    <li>本地数据存储</li>
                    <li>基本的样式和布局</li>
                </ul>
            </div>
        </div>
    </div>
`;

// 完整的使用教程页面内容
export const usageContent = `
    <div class="usage-content">
        <!-- 基础配置指南 -->
        <section class="basic-config-section">
            <h1>配置和使用指南</h1>
            <div class="config-cards">
                <div class="config-card">
                    <h3>界面设置</h3>
                    <div class="config-content">
                        <ul>
                            <li>
                                <span class="config-title">主题选择</span>
                                <p>支持浅色/深色主题，以及多种代码配色方案</p>
                            </li>
                            <li>
                                <span class="config-title">字体设置</span>
                                <p>可自定义编辑器字体、大小和行高</p>
                            </li>
                            <li>
                                <span class="config-title">快捷键配置</span>
                                <p>支持自定义所有操作的快捷键组合</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="config-card">
                    <h3>AI 功能配置</h3>
                    <div class="config-content">
                        <ul>
                            <li>
                                <span class="config-title">API Key 设置</span>
                                <p>配置 OpenAI API 密钥以启用 AI 功能</p>
                            </li>
                            <li>
                                <span class="config-title">AI 模型选择</span>
                                <p>可选择不同的 AI 模型以适应不同需求</p>
                            </li>
                            <li>
                                <span class="config-title">响应语言设置</span>
                                <p>支持中文/英文等多语言 AI 响应</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="config-card">
                    <h3>插件推荐</h3>
                    <div class="config-content">
                        <ul>
                            <li>
                                <span class="config-title">必备插件</span>
                                <p>Git 集成、代码格式化、智能补全等</p>
                            </li>
                            <li>
                                <span class="config-title">语言特定插件</span>
                                <p>Python、Java、Vue.js 等专用插件</p>
                            </li>
                            <li>
                                <span class="config-title">效率工具插件</span>
                                <p>项目管理、代码片段、远程协作等</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- 开发实战教程 -->
        <section class="practical-tutorials">
            <h2>开发实战教程</h2>
            ${pythonTutorialContent}
            ${javaTutorialContent}
            ${vue3TutorialContent}
        </section>

        <!-- AI 辅助编程技巧 -->
        <section class="ai-tips-section">
            <h2>AI 辅助编程技巧</h2>
            <div class="tips-content">
                <div class="tips-card">
                    <h3>提示词编写指南</h3>
                    <ul>
                        <li>使用清晰、具体的描述</li>
                        <li>提供上下文和示例</li>
                        <li>指定输出格式和要求</li>
                    </ul>
                </div>
                <div class="tips-card">
                    <h3>常见场景示例</h3>
                    <ul>
                        <li>代码解释和学习</li>
                        <li>问题诊断和修复</li>
                        <li>代码优化和重构</li>
                    </ul>
                </div>
                <div class="tips-card">
                    <h3>效率提升技巧</h3>
                    <ul>
                        <li>使用代码片段</li>
                        <li>自定义 AI 命令</li>
                        <li>快捷键组合</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 进阶使用技巧 -->
        <section class="advanced-tips-section">
            <h2>进阶使用技巧</h2>
            <div class="advanced-content">
                <div class="advanced-card">
                    <h3>自定义设置</h3>
                    <ul>
                        <li>快捷键定制</li>
                        <li>代码片段设置</li>
                        <li>工作区配置</li>
                    </ul>
                </div>
                <div class="advanced-card">
                    <h3>团队协作</h3>
                    <ul>
                        <li>代码规范配置</li>
                        <li>版本控制集成</li>
                        <li>代码审查工作流</li>
                    </ul>
                </div>
                <div class="advanced-card">
                    <h3>性能优化</h3>
                    <ul>
                        <li>编辑器性能调优</li>
                        <li>AI 响应优化</li>
                        <li>资源占用管理</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
`;

// 添加样式
const tutorialStyles = `
    .tutorial-steps {
        margin-top: 2rem;
    }

    .step {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        box-shadow: var(--card-shadow);
    }

    .step h4 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .step-content {
        color: #444;
    }

    .ai-prompt-example {
        background: #f8f9fa;
        border-left: 4px solid var(--primary-color);
        padding: 1rem;
        margin: 1rem 0;
    }

    .prompt-label {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }

    .prompt-content {
        background: white;
        padding: 1rem;
        border-radius: 6px;
        font-family: monospace;
        color: var(--primary-color);
    }

    .code-explanation {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
    }

    .code-explanation h5 {
        color: var(--text-color);
        margin-bottom: 0.5rem;
    }

    .code-explanation ul {
        padding-left: 1.5rem;
    }

    .tip {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        background: rgba(52, 199, 89, 0.1);
        padding: 0.75rem;
        border-radius: 6px;
        margin: 0.5rem 0;
    }

    .tip-icon {
        font-style: normal;
    }

    kbd {
        background: #eee;
        border-radius: 4px;
        padding: 0.2rem 0.4rem;
        font-size: 0.9em;
        font-family: monospace;
    }

    .improvement-suggestions {
        display: grid;
        gap: 1rem;
        margin-top: 1rem;
    }

    .suggestion {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 8px;
    }

    .tutorial-summary {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 12px;
        margin-top: 2rem;
    }

    .tutorial-summary ul {
        padding-left: 1.5rem;
        margin-top: 1rem;
    }
`;

// 初始化函数
export function initUsagePage() {
    // 添加教程样式
    addTutorialStyles();

    // 代码高亮
    if (window.hljs) {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }

    // 处理教程部分的展开/收起
    const tutorialSections = document.querySelectorAll('.tutorial-section');
    tutorialSections.forEach(section => {
        const header = section.querySelector('h3');
        const content = section.querySelector('.tutorial-content');
        
        if (header && content) {
            header.addEventListener('click', () => {
                // 切换 header 的展开状态
                header.classList.toggle('expanded');
                // 切换 content 的展开状态
                content.classList.toggle('expanded');
                
                // 更新内容区域的最大高度
                if (content.classList.contains('expanded')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            });
        }
    });
}

// 辅助函数：添加样式
function addTutorialStyles() {
    if (!document.getElementById('tutorial-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'tutorial-styles';
        styleSheet.textContent = tutorialStyles;
        document.head.appendChild(styleSheet);
    }
} 