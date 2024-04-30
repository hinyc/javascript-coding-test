import { css } from '@emotion/css';
import React, { useState } from 'react';
import { validAnagram, validAnagram2, validAnagram3 } from './funtion';

export default function ValidAnagram() {
  const [stringA, setStringA] = useState('listen');
  const [stringB, setStringB] = useState('silent');

  const [isValidAnagram, setIsValidAnagram] = useState(false);
  //valid anagram
  //두 단어의 글자 나열 순서는 다르지만 구성이 일치할시 -> anagram

  //split, sort, join

  return (
    <div>
      ValidAnagram
      <div>
        stringA: <input type="text" value={stringA} onChange={(e) => setStringA(e.target.value)} />
      </div>
      <div>
        stringB:{' '}
        <input
          type="text"
          value={stringB}
          onChange={(e) => {
            setStringB(e.target.value);
          }}
        />
      </div>
      <div
        className={css`
          padding: 20px;
          display: flex;
          gap: 12px;
          button {
            transition: 0.2s;
            :hover {
              transform: scale(1.1);
            }
            :active {
              transform: scale(0.9);
            }
          }
        `}
      >
        <button onClick={() => setIsValidAnagram(validAnagram(stringA, stringB))}>validAnagram</button>

        <button onClick={() => setIsValidAnagram(validAnagram2(stringA, stringB))}>validAnagram2</button>

        <button onClick={() => setIsValidAnagram(validAnagram3(stringA, stringB))}>validAnagram3</button>
      </div>
      <div
        className={css`
          font-weight: 700;
        `}
      >
        result: {isValidAnagram ? 'true' : 'false'}
      </div>
    </div>
  );
}
