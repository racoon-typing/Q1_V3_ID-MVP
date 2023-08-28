<?php
if (!(isset($_SERVER['HTTPS']) && ($_SERVER['HTTPS'] == 'on' || 
   $_SERVER['HTTPS'] == 1) ||  
   isset($_SERVER['HTTP_X_FORWARDED_PROTO']) &&   
   $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https'))
{
   $redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
   header('HTTP/1.1 301 Moved Permanently');
   header('Location: ' . $redirect);
   exit();
}
?>
<!DOCTYPE html>
<html class="no-js" lang="ru">

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="./css/style-thx.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%7CLato%7CUbuntu">
<title>Garcinia</title>

<script>
    var qParams = new URLSearchParams(window.location.search);
    ! function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', qParams.get('p'));
    fbq('track', 'Purchase');
    fbq('track', 'Lead');
    fbq('track', 'PageView');
</script>
</head>

<body style="direction: rtl; text-align: right;">
    <header class="">
        <div style="clear: both;"></div>
        <div class="green-bl " style="text-align: left; padding: 18px 20px 20px 20px; ">
            <p class="fontSize" style="text-align: center;">
                تم قبول طلبك
            </p>
        </div>
        <img src="./img/content/operator.jpeg" alt="" style="width: 100%;">

        <div class="header-yellow-block" style="text-align: left; padding: 18px 20px 20px 20px; ">
            <p class="fontSize" style="text-align: center;">
                مشغلنا سوف يتصل بك قريبا تأكد من تشغيل هاتفك و
                متاح لى
                المكالمات
            </p>
    </header>
    <div>
        <div>
            <div class="doc-info">
                <p style="text-align: right;">
                    مرحبا صديقي العزيز! اسمي <span>الدكتور محمد أحمد منصور</span> وأنا أستاذ في هذا المجال. الصحة والتغذية.
                    أنا سعيد جدًا لأنك قررت تجربة منتج Garcinia ، المصمم على شكل
                    جزء من منهجية إنقاص الوزن على مرحلتين. أود أن أبلغكم أن طلبك
                    تم قبوله بنجاح من قبل شركة النقل وسيتصل بك للحصول على استشارة في أقرب وقت ممكن.
                    ممكن. تأكد من تضمين رقم الاتصال الخاص بك حتى يتمكنوا من الاتصال بك بسهولة. أنا
                    نحن على ثقة من أن أداة Garcinia الخاصة بنا ستساعدك على خسارة 14 كجم في 28 يومًا. هؤلاء
                    النتائج التي يمكن تحقيقها بفضل الصيغة الفريدة والتقنية الاحترافية لدينا
                    معدات.
                    نحن نؤمن بشدة بفاعلية Garcinia و
                    على استعداد لإثبات ذلك لك من خلال نتائجنا.
                    اريد ان اشكرك لاختيارك
                    من منتجنا ، وأنا متأكد من أنك لن تندم على هذا القرار. فريقنا
                    دائما مستعد
                    للمساعدة
                    تحقيق أهدافك وسيدعمك في كل خطوة على الطريق. اشكرك على ثقتك
                    منتجاتنا ونتمنى لك كل التوفيق في رحلتك إلى جسم صحي وجميل.
                </p>
            </div>

            <div class="content-img1 margin martop" style="/* display: none; */ background: #ffffff!important;">
                <img style="display: block; width: 100%; margin: 0 auto; padding-bottom: 40px;"
                    src="./img/content/product.png" alt="">
            </div>
        </div>
    </div>
    <footer>
        <p class="copy"> جميع الحقوق محفوظة © موضوع 2023 <br>
        </p>
        <!-- <p class="rights">Reservados todos los derechos.</p> -->
    </footer>
    <div class="foot-btn-bl margin">
        <!-- <div class="btn">
            <img src="./img/content/back_to_top.png" alt="">
        </div> -->
        <div style="clear: both"></div>
    </div>

</body>

</html>