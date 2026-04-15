"use client";

export const useCopyToClipboard = () => {
  const copy = async (text: string) => {
    // 现代 Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.error("Clipboard API failed:", err);
        return fallbackCopy(text);
      }
    } else {
      // 降级方案
      return fallbackCopy(text);
    }
  };

  const fallbackCopy = (text: string) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      return success;
    } catch (err) {
      console.error("Fallback copy failed:", err);
      return false;
    }
  };

  return { copy };
};