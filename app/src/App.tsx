import { useMemo } from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'
import './App.css'
import tabHtml from './tab/index.html?raw'
import tabJs from './tab/index.js?raw'
import tabCss from './tab/styles.css?raw'
import tabForEachHtml from './tab-forEach/index.html?raw'
import tabForEachJs from './tab-forEach/index.js?raw'
import tabForEachCss from './tab-forEach/styles.css?raw'
import hamburgerMenuHtml from './hamburger-menu/index.html?raw'
import hamburgerMenuJs from './hamburger-menu/index.js?raw'
import hamburgerMenuCss from './hamburger-menu/styles.css?raw'
import quizyHtml from './quizy/index.html?raw'
import quizyJs from './quizy/index.js?raw'
import quizyCss from './quizy/styles.css?raw'
import rootHtml from './index.html?raw'
import rootJs from './index.js?raw'
import rootCss from './styles.css?raw'

// HTMLファイル内のパスを調整する関数
const adjustHtmlPaths = (html: string, quizDir: string) => {
  return html
    .replace(/href="\.\/style\.css"/g, `href="/${quizDir}/styles.css"`)
    .replace(/href="\.\/styles\.css"/g, `href="/${quizDir}/styles.css"`)
    .replace(/src="\.\/script\.js"/g, `src="/${quizDir}/index.js"`)
    .replace(/src="\.\/index\.js"/g, `src="/${quizDir}/index.js"`)
}

const quizData = {
  'no-1': {
    html: tabHtml,
    js: tabJs,
    css: tabCss,
  },
  'no-2': {
    html: tabForEachHtml,
    js: tabForEachJs,
    css: tabForEachCss,
  },
  'no-3': {
    html: hamburgerMenuHtml,
    js: hamburgerMenuJs,
    css: hamburgerMenuCss,
  },
  'no-4': {
    html: quizyHtml,
    js: quizyJs,
    css: quizyCss,
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

    // ルートのindex.html、index.js、styles.cssを配置
    files['/index.html'] = rootHtml
    files['/index.js'] = rootJs
    files['/styles.css'] = rootCss

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
