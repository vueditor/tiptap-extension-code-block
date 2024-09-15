import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import tsx from 'shiki/langs/tsx.mjs'
import githubDark from 'shiki/themes/github-dark.mjs'
import githubLight from 'shiki/themes/github-light.mjs'
import { codeBlock } from '../../..'
import './Editor.scss'

// define your extension array
const extensions = [StarterKit.configure({
  codeBlock: false,
}), codeBlock.configure({
  themes: {
    light: githubLight,
    dark: githubDark,
  },
  languages: [tsx],
})]
const content = '@vueditor/tiptap-extension-code-block'

export default function Editor() {
  return (
    <div className="editor">
      <EditorProvider extensions={extensions} content={content}>

      </EditorProvider>
    </div>
  )
}
