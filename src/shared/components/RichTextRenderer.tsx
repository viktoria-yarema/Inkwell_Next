"use client"
import { useMemo } from 'react'
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'
import createDOMPurify from 'isomorphic-dompurify'
import he from 'he'

interface RichTextRendererProps {
  delta: string
}

export function parseDeltaString(raw: string) {
    const decoded = he.decode(raw);
    try {
      return JSON.parse(decoded);
    } catch (e) {
      console.error('Failed to JSON.parse decoded Delta:', decoded);
      throw e;
    }
  }

export default function RichTextRenderer({ delta }: RichTextRendererProps) {

  const sanitizedHtml = useMemo(() => {
    const converter = new QuillDeltaToHtmlConverter(parseDeltaString(delta).ops, {
      encodeHtml: true,
    })

    const rawHtml = converter.convert()

    const DOMPurify = createDOMPurify(
      typeof window === 'undefined'
        ? undefined
        : window
    )
 
    return DOMPurify.sanitize(rawHtml)
  }, [delta])

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
}
