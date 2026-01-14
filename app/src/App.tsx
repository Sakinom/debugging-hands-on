import { useMemo } from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'
import './App.css'
import quiz1Html from './quiz-1/index.html?raw'
import quiz1Js from './quiz-1/index.js?raw'
import quiz1Css from './quiz-1/styles.css?raw'
import quiz2Html from './quiz-2/index.html?raw'
import quiz2Js from './quiz-2/index.js?raw'
import quiz2Css from './quiz-2/styles.css?raw'

// HTMLファイル内のパスを調整する関数
const adjustHtmlPaths = (html: string, quizDir: string) => {
  return html
    .replace(/href="\.\/style\.css"/g, `href="/${quizDir}/styles.css"`)
    .replace(/href="\.\/styles\.css"/g, `href="/${quizDir}/styles.css"`)
    .replace(/src="\.\/script\.js"/g, `src="/${quizDir}/index.js"`)
    .replace(/src="\.\/index\.js"/g, `src="/${quizDir}/index.js"`)
}

const quizData = {
  'quiz-1': {
    name: 'Quiz 1',
    html: quiz1Html,
    js: quiz1Js,
    css: quiz1Css,
  },
  'quiz-2': {
    name: 'Quiz 2',
    html: quiz2Html,
    js: quiz2Js,
    css: quiz2Css,
  },
}

function App() {
  // すべてのquizファイルをディレクトリ構造で含める
  // 選択されたquizのファイルはルートにも配置（Sandpackのエントリーポイント用）
  const allFiles = useMemo(() => {
    const files: Record<string, string> = {}

    // まず、すべてのquizファイルをディレクトリ構造で配置
    Object.entries(quizData).forEach(([quizId, data]) => {
      const adjustedHtml = adjustHtmlPaths(data.html, quizId)
      files[`/${quizId}/index.html`] = adjustedHtml
      files[`/${quizId}/index.js`] = data.js
      files[`/${quizId}/styles.css`] = data.css
    })

    return files
  }, [])

  return (
    <div className="App">
      <Sandpack
        key="unique-key"
        template="vanilla"
        files={allFiles}
        options={{
          showConsole: true,
          showLineNumbers: true,
          activeFile: '/index.js',
        }}
      />
    </div>
  )
}

export default App
