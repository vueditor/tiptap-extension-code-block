# Tiptap extension code block

![GitHub License](https://img.shields.io/github/license/vueditor/tiptap-extension-code-block?style=plastic) ![NPM Version](https://img.shields.io/npm/v/%40vueditor%2Ftiptap-extension-code-block?style=plastic) ![NPM Downloads](https://img.shields.io/npm/dm/%40vueditor%2Ftiptap-extension-code-block?style=plastic)  ![GitHub Repo stars](https://img.shields.io/github/stars/vueditor/tiptap-extension-code-block?style=plastic)

A tiptap extension to support code block with [shiki](https://shiki.style/)

## Installation

```bash
pnpm add @vueditor/tiptap-extension-code-block
```

or

```bash
npm install @vueditor/tiptap-extension-code-block
```

## Basic usage

> [!TIP]
> For more detailed usage，see the [examples](./examples/) directory or more comprehensive usage: [rich text editor](https://github.com/vueditor/rich-text-editor.git).

```ts
import { Editor } from '@tiptap/core'
import { codeBlock } from '@vueditor/tiptap-extension-code-block'

const editor = new Editor({
  extension: [codeBlock]
})
```

### Options

```ts
interface CodeBlockOptions {
  // languages from shiki
  languages: LanguageRegistration[][]

  // themes from shiki
  themes: {
    light: ThemeRegistrationRaw
    dark: ThemeRegistrationRaw
  }

  // extend from @tiptap/extension-code-block
  // for more detail, go to https://tiptap.dev/docs/editor/extensions/nodes/code-block
  languageClassPrefix: string
  exitOnTripleEnter: boolean
  exitOnArrowDown: boolean
  defaultLanguage: string | null | undefined
  HTMLAttributes: Record<string, any>
}
```
