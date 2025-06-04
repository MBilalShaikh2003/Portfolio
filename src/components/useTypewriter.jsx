'use client';
import { useState, useEffect } from 'react';

const useTypewriter = (words, delay = 1500) => {
  const [index, setIndex] = useState(0); // current word index
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index];
    let typeSpeed = isDeleting ? 50 : 100;

    const handler = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(handler);
  }, [charIndex, isDeleting, index]);

  return text;
};

export default useTypewriter;
