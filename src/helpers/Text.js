class Text {
  static fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('[Error] Could not copy text: ', err);
    }

    document.body.removeChild(textArea);
  }

  static copyToClipboard(string) {
    if (!navigator.clipboard) {
      this.fallbackCopyTextToClipboard(string);
      return;
    }

    navigator.clipboard.writeText(string).then(null, (err) => {
      // eslint-disable-next-line no-console
      console.error('[Error] Could not copy text: ', err);
    });
  }
}

export default Text;
