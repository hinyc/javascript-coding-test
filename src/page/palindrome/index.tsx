import { css } from '@emotion/css';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Notification from '../../components/Notification';

/** 앞뒤로 읽어도 같은 단어나 문장
 * @Palindrome
 * 팰린드롬/회문
 */
export default function Palindrome() {
  const [string, setString] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const onCheckPalindrome = (text: string) => {
    // 문자를 거꾸로 뒤집어 비교
    console.time('onCheckPalindrome');
    const reversed = text.split('').reverse().join('');
    setIsPalindrome(text === reversed);
    console.timeEnd('onCheckPalindrome');
  };

  const onCheckPalindrome2 = (text: string) => {
    console.time('onCheckPalindrome2');

    const limit = Math.floor(text.length / 2);

    for (let i = 0; i < limit; i++) {
      if (text.charAt(i) !== text.charAt(text.length - 1 - i)) {
        setIsPalindrome(false);
        console.timeEnd('onCheckPalindrome2');
        return;
      }
    }
    setIsPalindrome(true);

    console.timeEnd('onCheckPalindrome2');
  };

  return (
    <div>
      <h1>Palindrome</h1>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        `}
      >
        <span>검증 문자</span>
        <input
          type="text" //
          value={string}
          onChange={(e) => setString(e.target.value)}
        />
        <div
          className={css`
            margin-top: 12px;
            display: flex;
            gap: 12px;
          `}
        >
          <Button onClick={() => onCheckPalindrome(string)}>check1</Button>
          <Button onClick={() => onCheckPalindrome2(string)}>check2</Button>
        </div>
        <div>
          isPalindrome? <strong>{isPalindrome ? 'true' : 'false'}</strong>
        </div>
        <Notification>문자열이 길어질수록 2번 방식에 비해 1번방식의 속도가 현저히 느려짐.</Notification>
      </div>
    </div>
  );
}
