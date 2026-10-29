Basit, temiz bir HTML sayfası hazırladım. İstediğin metin, indirme linki ve sağ üstte **ömer studio** yazısı var.  

Aşağıdaki kodu kopyalayıp `index.html` olarak kaydedebilirsin:  

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FeslegenSMP Deneme</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
            color: #e0e0e0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .studio {
            position: fixed;
            top: 20px;
            right: 25px;
            font-size: 18px;
            font-weight: 600;
            color: #00d9ff;
            letter-spacing: 1px;
            text-shadow: 0 0 10px rgba(0, 217, 255, 0.4);
        }

        .container {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 40px 50px;
            max-width: 650px;
            text-align: center;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        h1 {
            font-size: 28px;
            margin-bottom: 25px;
            color: #00d9ff;
        }

        p {
            font-size: 17px;
            line-height: 1.7;
            margin-bottom: 18px;
            color: #d0d0d0;
        }

        .uyari {
            background: rgba(255, 193, 7, 0.15);
            border-left: 4px solid #ffc107;
            padding: 14px 18px;
            border-radius: 8px;
            margin: 25px 0;
            font-size: 15px;
            color: #ffe082;
        }

        .download-btn {
            display: inline-block;
            margin-top: 15px;
            padding: 14px 32px;
            background: linear-gradient(90deg, #00d9ff, #0099cc);
            color: #111;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            border-radius: 50px;
            transition: all 0.3s ease;
            box-shadow: 0 5px 20px rgba(0, 217, 255, 0.3);
        }

        .download-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 217, 255, 0.5);
        }

        .footer {
            margin-top: 30px;
            font-size: 13px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="studio">ömer studio</div>

    <div class="container">
        <h1>Selam 👋</h1>
        
        <p>
            Bu <strong>.bat</strong> dosyası bilgisayarından veri çalmaz, truva bulaştırmaz.<br>
            Sadece <strong>Test, Eğlence, Eğitim, Şaka</strong> amaçlıdır.
        </p>

        <div class="uyari">
            ⚠️ Arkadaşlarınıza denettirmeden önce mutlaka uyarın!
        </div>

        <a class="download-btn" href="https://download1472.mediafire.com/jdhvrk9no5lg0djXoPGYScEVEosmQKRWn2smKC12aJTZnRCeKizd8LNYAtTgAJb8hw1xWMO5GJS9HhomoQVA3mlazMqqaWIo0VtZSI1FeTu0aHEbdiu06o97geUYs58FihfYeHu0wy7e2RJXArvLYN2YPXZvLdzgXy68CIxnCyOw/r4qcq42jecleo8x/FeslegenSMP_deneme_virus.bat" target="_blank">
            Dosyayı İndir
        </a>

        <div class="footer">
            Sadece test / eğlence amaçlıdır
        </div>
    </div>
</body>
</html>
```

İstersen renkleri, yazı boyutlarını veya tasarımı değiştirebilirim.
