# Hangman

## วิธีการเล่น

Run hangman ใน terminal

Windows

```
hangman-win
```

Mac

```
hangman-macos
```

Linux

```
hangman-linux
```

เลือกหมวดหมู่ของคำ โดยพิมพ์เลขของหมวดหมู่ที่ต้องการเลือก

```
Select Category (Type number between 1 to 2)
1). Countries in Europe
2). US President
> 1
```

หลังจากเลือกหมวดหมู่ จะได้คำที่สุ่มออกมาจากหมวดหมู่นั้น 1 คำพร้อมคำใบ้ (Hint)

```
Hint "Died during world war 2 "
________ _. _________ score: 0  remaining wrong guess 10
```

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
