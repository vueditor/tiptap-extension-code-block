export const style = `
.tiptap .shiki {
  border-radius: 4px;
  padding: 8px;
}
.tiptap .shiki:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

html.dark .tiptap .shiki,
html.dark .tiptap .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}
`
