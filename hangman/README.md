# Hangman

## วิธีการเล่น

พิมพ์ hangman ใน command line

```
hangman
```

เลือกหมวดหมู่ของคำ โดยพิมพ์เลขของหมวดหมู่ที่ต้องการเลือก

หลังจากเลือกหมวดหมู่ จะได้คำที่สุ่มออกมาจากหมวดหมู่นั้น 1 คำพร้อมคำใบ้ (Hint)

โดยสามารถทายได้ที่ละ 1 ตัวอักษร (เฉพาะตัวอักษร a-z,A-Z)

กติกาคือ สามารถทายผิดได้ 10 ครั้ง (ถ้าทายผิดครบ 10 ครั้งจะถือว่าแพ้ และจบเกม) คะแนนในการทายแต่ครั้งจะเท่ากับ จำนวนครั้งที่ทายผิดได้ที่เหลือ \* 10

เมื่อทายครบทุกตัวอักษรจะถือว่าชนะ และจบเกม

## Package

Node Package ที่ได้ใช้

NPM readlineSync
https://www.npmjs.com/package/readline-sync

## References

แหล่งข้อมูลที่ได้สืบค้นและได้นำมาประยุกต์ใช้กับโปรเจค Hangman

How to check if character is a letter in Javascript?
https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript

Javascript replace char at index
https://gist.github.com/efenacigiray/9367920

How to check whether a string contains a substring in JavaScript?
https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
