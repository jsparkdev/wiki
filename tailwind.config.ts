import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.astro"],
  theme: {
    fontFamily: {
      sans: '"Noto Sans KR", sans-serif',
      mono: '"JetBrains Mono", monospace',
    },
  },
} satisfies Config;
