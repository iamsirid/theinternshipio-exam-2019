# Hangman

## วิธีการเล่น

Run คำสั่ง hangman ตาม OS ที่ใช้งานใน terminal

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

หรือ (Node.js is required)

```
node index.js
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

## การเพิ่ม Category ของคำ

ข้อมูลของคำในแต่ละ Category จะถูกเก็บใน directory ชื่อ category โดยเป็นไฟล์ json ที่มีรูปแบบดังตัวอย่าง  
USPresident.json

```
{
  "name": "US President",
  "words": [
    { "hint": "First US President", "word": "George Washington" },
    { "hint": "Civil War", "word": "Abraham Lincoln" },
    { "hint": "Died during world war 2 ", "word": "Franklin D. Roosevelt" },
    {
      "hint": "Served in US Navy during world war 2 ",
      "word": "John F. Kennedy"
    },
    { "hint": "9/11 ", "word": "George W. Bush" }
  ]
}

```

โดย name คือชื่อของ Category  
words คือ array ของข้อมูลแต่ละคำซึ่งประกอบด้วย hint (คำใบ้) และ word (คำที่ใช้เล่น)  
การเพิ่ม category ใหม่สามารถทำได้โดยเพิ่มไฟล์ .json (ชื่อไฟล์อะไรก็ได้) ลงใน directory category ตามรูปแบบข้างต้น

## References

Generating random whole numbers in JavaScript in a specific range
https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
