"use client"

import { ContextMenu } from "ui"

export default function ContextMenuDisabledDemo() {
  return (
    <ContextMenu>
      <ContextMenu.Trigger className="grid place-content-center w-56 h-28 rounded-lg border-2 border-dashed">
        Right click me
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item id="view">View</ContextMenu.Item>
        <ContextMenu.Item id="edit">Edit</ContextMenu.Item>
        <ContextMenu.Item id="gsu" isDisabled>
          Generate Short URL
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  )
}
