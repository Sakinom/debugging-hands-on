import { useState } from 'react'
import { Sandpack } from '@codesandbox/sandpack-react'
import './App.css'
import quiz1Html from './quiz-1/index.html?raw'
import quiz1Js from './quiz-1/index.js?raw'
import quiz1Css from './quiz-1/style.css?raw'

const quizzes = {
  'quiz-1': {
    name: 'Quiz 1',
    files: {
      '/index.html': quiz1Html,
      '/style.css': quiz1Css,
      '/index.js': quiz1Js,
    },
    template: 'vanilla' as const,
  },
  'quiz-2': {
    name: 'Quiz 2',
    files: {
      '/index.html': quiz1Html,
      '/style.css': quiz1Css,
      '/index.js': quiz1Js,
    },
    template: 'vanilla' as const,
  },
}

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState<keyof typeof quizzes>('quiz-1')
  const currentQuiz = quizzes[selectedQuiz]

  return (
    <div className="App">
      <div style={{ padding: '20px', borderBottom: '1px solid #e1e4e8' }}>
        <label htmlFor="quiz-select" style={{ marginRight: '10px', fontWeight: 'bold' }}>
          問題を選択:
        </label>
        <select
          id="quiz-select"
          value={selectedQuiz}
          onChange={(e) => setSelectedQuiz(e.target.value as keyof typeof quizzes)}
          style={{
            padding: '8px 12px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #d1d5db',
            cursor: 'pointer',
          }}
        >
          {Object.keys(quizzes).map((quizId) => (
            <option key={quizId} value={quizId}>
              {quizzes[quizId as keyof typeof quizzes].name}
            </option>
          ))}
        </select>
      </div>
      <Sandpack
        key={selectedQuiz}
        template={currentQuiz.template}
        files={currentQuiz.files}
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
