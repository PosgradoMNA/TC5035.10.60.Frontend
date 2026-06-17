import React from "react"
import { Button } from "../../reactbits/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "../../reactbits/components/ui/drawer"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { downloadMarkdownPdf } from "../../services/downloadPdf"

type MarkdownDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  markdown: string
}

export function MarkdownDrawer({
  open,
  onOpenChange,
  markdown,
}: MarkdownDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>Here's your CV</DrawerTitle>
          <DrawerDescription>
            Analized in AWS Lambda.
          </DrawerDescription>
        </DrawerHeader>

        <div className="no-scrollbar overflow-y-auto px-4">
            <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>

        <DrawerFooter>
          <Button onClick={() => downloadMarkdownPdf(markdown)}>Download</Button>

          <DrawerClose asChild>
            <Button variant="outline">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}