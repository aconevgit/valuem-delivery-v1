/** Strip Markdown/MDX syntax to get plain prose text for word counting. */
export function stripMarkdown(text: string): string {
  return text
    .replace(/^---[\s\S]*?---\s*\n?/, '')     // YAML frontmatter
    .replace(/```[\s\S]*?```/g, ' ')           // fenced code blocks
    .replace(/`[^`\n]+`/g, ' ')               // inline code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')      // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')  // links → keep label text
    .replace(/^#{1,6}\s+/gm, '')              // heading markers
    .replace(/\*{1,2}([^*\n]+)\*{1,2}/g, '$1') // bold / italic *
    .replace(/_{1,2}([^_\n]+)_{1,2}/g, '$1') // bold / italic _
    .replace(/^\s*[-*+>]\s+/gm, '')           // list markers and blockquotes
    .replace(/^\s*\d+\.\s+/gm, '')            // ordered list markers
    .trim();
}

/**
 * Estimate reading time for a Markdown/MDX body string.
 * Uses 265 WPM (industry standard for on-screen reading).
 */
export function readingTime(body: string): string {
  const text = stripMarkdown(body);
  const words = text ? text.split(/\s+/).filter(w => w.length > 0).length : 0;
  const minutes = Math.ceil(words / 265);
  return minutes > 0 ? `${minutes} min read` : '< 1 min read';
}
