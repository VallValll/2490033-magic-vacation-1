export default () => {
  const texts = document.querySelectorAll(`.js-text-accent`);

  texts.forEach((textElement) => {
    const text = textElement.textContent;
    const words = text.split(` `);

    textElement.innerHTML = ``;

    words.forEach((word, index) => {
      const wordSpan = document.createElement(`span`);
      wordSpan.classList.add(`text-accent-word`);

      word.split(``).forEach((char) => {
        const charSpan = document.createElement(`span`);
        charSpan.classList.add(`text-accent-char`);
        charSpan.textContent = char;
        wordSpan.appendChild(charSpan);
      });

      textElement.appendChild(wordSpan);

      if (index < words.length - 1) {
        const spaceSpan = textElement.appendChild(document.createElement(`span`));
        spaceSpan.innerHTML = `&nbsp;`;
        textElement.appendChild(spaceSpan);
      }
    });
  });
};
