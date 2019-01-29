# Weather

## วิธีใช้งาน

Run คำสั่ง weather ตาม OS ที่ใช้งานใน terminal ตามด้วยชื่อไฟล์ (เช่น weather.xml)

Windows

```
weather-win weather.xml
```

Mac

```
weather-macos weather.xml
```

Linux

```
weather-linux weather.xml
```

หรือ กรณีมีการติดตั้ง Node.js บนอุปกรณ์ที่ใช้ Run

ทำการ install โปรเจคก่อน

```
npn install
```

และ run คำสั่งด้านล่าง

```
node index.js weather.xml
```

จะได้ไฟล์ json ขึ้นมาใหม่ชื่อ ตามชื่อของไฟล์ xml ที่ได้รับเข้ามา (เช่น weather.json)

```
The file (weather.json) was saved
```
