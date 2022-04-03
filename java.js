$(document).ready(function () {
    // $('.top input').change(function (e) { 
    //     let text=$(e.target).val();
    //     console.log(text);
    // });
    let arr=[
            {
            savol:"- har bir yurishda erishiladigan (pul yoki ball yoki boshqa ko‘rinishda ifodalanadigan) natija.",
            javob:"#Yutuq"
            },
            
            {
            savol:"– o‘yinchining qarori yoki yurishi, optimal strategiya esa – eng ratsional qaror yoki yurishdir.",
            javob:"#Strategiya"
            },
            
            {
            savol:"– o‘yinchilar yurishlarining kombinatsiyalarini va ularga tegishli yutuqlarni ko‘rsatuvchi jadval.",
            javob:"#To‘lov matritsasi"
            },
            
            {
            savol:"O‘yinlar nazariyasi asosiy tushunchalar quyidagilardan qaysi birida to’liq ko’rsatilgan.",
            javob:"#o‘yin, o‘yinchi, yutuq, strategiya, optimal strategiya, to‘lov matritsasi."
            },
            
            {
            savol:"Antogonistik o’yin yig’indisi nechchiga teng bo’lishi kerak?",
            javob:"#0"
            },
            
            {
            savol:"Vaqtni inobatga olinishi bo’yicha o’yinlar necha turga bo’linadi?",
            javob:"#2"
            },
            
            {
            savol:"O’zaro munosabat turi bo’yicha o’yinlar necha turga bo’linadi?",
            javob:"#3"
            },
            
            {
            savol:"Korporativ tur qaysi munosabatga kiradi.",
            javob:"#O’zaro munosabatlar shakliga"
            },
            
            {
            savol:"Koalitsion tur qaysi munosabatga kiradi.",
            javob:"#O’zaro munosabatlar shakliga"
            },
            
            {
            savol:"Dinamik tur qaysi munosabatga kiradi.",
            javob:"#Vaqtni inobatga olinishi"
            },
            
            {
            savol:"O’yinlar nechta munosabatga bo’linadi.",
            javob:"#11"
            },
            
            {
            savol:"Ekistensiv va Narmal shakllar qaysi munosabatga kiradi?",
            javob:"#Berilish shartiga"
            },
            
            {
            savol:"Yutuq matritsalarining soni bo’yicha necha turga bo’linadi.",
            javob:"#3"
            },
            
            {
            savol:"O’yinlar nazariyasi fanining asoschisi kim?",
            javob:"#Djon fon Neyman"
            },
            
            {
            savol:"Djon fon Neyman va Oskar Morgenshtern tomonidan ularning “Theory of Games and Economic Behavior” deb nomlangan kitobi nechanchi yilda chop etilgan?",
            javob:"#1944-yil"
            },
            
            {
            savol:"Ikki o'yinchidan iborat nol yig'indili o‘yin ________  deyiladi",
            javob:"#matritsali o‘yin"
            },
            
            {
            savol:"Ikki o'yinchidan iborat nolmas yig'indili o‘yin _________ deyiladi.",
            javob:"#bimatritsali o‘yin"
            },
            
            {
            savol:"Qachon va neccchi yoshida Jon Nash o'yin nazariyasi bo'yicha ishi uchun Nobel mukofotini oldi?",
            javob:"#1994 yilda, 66 yoshida"
            },
            
            {
            savol:"Kim Nashning Chiroyli aql: matematik daho hayoti va Nobel mukofoti sovrindori  biografiyasini yozdi? Kitob tezkor bestsellerga aylandi.",
            javob:"#iqtisod professori Silviya Nazar"
            },
            
            {
            savol:"To’liq to’liqsiz tur qaysi munosabatga bo’ysunadi.",
            javob:"#Ma’lumotlar mavjudligiga"
            },
            
            {
            savol:"Deterministik yurisharga ega bo’lgan tur qaysi munosabatga kiradi.",
            javob:"#Yurishlarni aniqligiga"
            },
            
            {
            savol:"Antogonistik va noantogonistik tur qaysi munosabatga kiradi",
            javob:"#Yutuq yig’indisining nolga tengligiga"
            },
            
            {
            savol:"Korporativ, koalitsion va Nokoalitsion turlar qaysi munosabatga kiradi.",
            javob:"#O’zaro munosabatlar shakli bo’yicha"
            },
            
            {
            savol:"Vaqt munosabati qaysi turlarga bo’linadi",
            javob:"#Diskret va uzliksiz"
            },
            
            {
            savol:"Quyidagi turlarni  qaysi birlari yutuq matritsalarining soni  munosabatiga kiradi?",
            javob:"#Matritsali, Bimatritsali va Ko’p matritsali"
            },
            
            {
            savol:"Noantagonistikani qiymati nimaga teng?",
            javob:"#Yutuqlar yig’indisi 0 ga teng emas"
            },
            
            {
            savol:"Dinamik o’yinlar qanday o’yinlar",
            javob:"#Ketma – ket o’yinlar"
            },
            
            {
            savol:"Statik o’yinlar qanday o’yinlar",
            javob:"#Bir vaqtli o’yinlar"
            },
            
            {
            savol:"Muqobil strategiyada tashqi muhit holatlari necha qismdan iborat?",
            javob:"#3"
            },
            
            {
            savol:"Muqobil strategiyada tashqi muhit holatlari qaysilar?",
            javob:"#Foyda solig'i past, Foyda solig'i o'rta, Foyda solig'i yuqori"
            },
            
            {
            savol:"Muqobil strategiyada soliq to'lamaslik jinoyatlarini oldini olishga qaratilgan dastur loyihasini qabul qilish va amalga oshirishda foyda solig`i qanchadan past bo`lishi kerak?",
            javob:"#-700 dan"
            },
            
            {
            savol:"Muqobil strategiyada noqonuniy valyuta ayirboshlash jinoyatlarini oldini olishga qaratilgan dastur loyihasini qabul qilish va amalga oshirishda foyda solig`i qanchadan yuqori bo`lishi kerak?",
            javob:"#300 dan"
            },
            
            {
            savol:"Muqobil strategiyada soliq to'lamaslik jinoyatlarini oldini olishga qaratilgan dastur loyihasini qabul qilish va amalga oshirishda foyda solig`ining o`rtacha qiymati qancha?",
            javob:"#500"
            },
            
            {
            savol:"Bayes qoyidasiga ko'ra, kutilayotgan yutuqlarga keltiruvchi strategiyalardan qanday yutuqqa keltiruvchisi tanlanadi:",
            javob:"#Eng yuqori"
            },
            
            {
            savol:"Bayes-Sevidj qoyidasiga ko'ra, kutilayotgan yutkazishlarga keltiruvchi strategiyalardan qanday yutuqqa  keltiruvchisi tanlanadi:",
            javob:"#Eng kichik"
            },
            
            {
            savol:"Bayes qoidasining kamchiligi nima?",
            javob:"#Yutuqlarning inobatga olinmasligi"
            },
            
            {
            savol:"Oʻyinlarda optimal strategiyalarni oʻrganuvchi matematik metod bu",
            javob:"#O’yinlar nazayiyasi"
            },
            
            {
            savol:"O’yinlar qanday turlarga bo’linadi.",
            javob:"#pozitsion va normal."
            },
            
            {
            savol:"Egar nuqtali o’yinlar deb nimaga aytiladi?",
            javob:"#Quyi va yuqori baxolari o‘zaro teng"
            },
            
            {
            savol:"O’yinchining harakatini butun oʻyin davomida toʻla belgilab beruvchi qoida bu?",
            javob:"#Strategiya"
            },
            
            {
            savol:"Juft o’yinda ishtirokchilar soni nechta bo’ladi?",
            javob:"#2 ta"
            },
            
            {
            savol:"Umumlashgan maksimum mezon deb qanday mezonni ataymiz?",
            javob:"#Gurvits mezoni"
            },
            
            {
            savol:"Ko’rilayotgan o’yin ikki ishtirokchili o’yinga keltirilgan bo’lin, ikkinchi ishtirokcho “ongsiz” raqib sifatida qabul qilinsa, bunday o’yin nma deb ataladi?",
            javob:"#Tabiat bilan o’yin"
            },
            
            {
            savol:"Ixtiyoriy jarayonni tadqiq etish davomida yechim qabul qilish jarayoni nma deb ataladi?",
            javob:"#Tavakkalchilik"
            },
            
            {
            savol:"Nizoli vaziyatning matematik nazariyasi nima deb ataladi?",
            javob:"#O’yinlar nazariyasi"
            },
            
            {
            savol:"O’yinning ko’p bora takrorlanishida muayyan o’yinchini erishish ehtimoli eng yuqori bo’lgan o’rtacha yutuq bilan ta’minlovchi strategiyaga nima deb ataladi?",
            javob:"#Optimal strategiya"
            },
            
            {
            savol:"Dinamik dasturlash jarayonida avvaldan  hammasi rejalashtirilgan bo`ladi",
            javob:"#Oxirgi qadam"
            },
            
            {
            savol:"Dinamik dasturlash masalalarida qadam boshqaruvini qanday tanlash kerak",
            javob:"#Kelajakdagi oqibatlarini hisobga olgan holda"
            },
            
            {
            savol:"Ryukzakni yuklash vazifasi  .... deyiladi",
            javob:"#Dinamik"
            },
            
            {
            savol:"O'yinlar nazariyasi muammolarida, agar o'yinda egar nuqtasi bor  bo`lsa … deyiladi",
            javob:"#o'yinning past narxi yuqoriga teng"
            },
            
            {
            savol:"Agar o'yin nol summali o'yin bo`lsa … bo`ladi",
            javob:"#o'yinchilarning yutuqlari yig'indisi 0 ga teng"
            },
            
            {
            savol:"Tog’ri ta’rifni belgilang. Nesha balansi bu-",
            javob:"#Muozanat"
            },
            
            {
            savol:"Tog’ri ta’rifni belgilang. Pareto optimalligi bu-",
            javob:"#Tizimning holatini tavsiflovchi har bir xususiy mezonning qiymati boshqa elementlarning pozitsiyasini yomonlashtirmasdan yaxshilanmaydi."
            },
            
            {
            savol:"Tog’ri ta’rifni belgilang. Operasiya deb-",
            javob:"#Qandaydir maqsadni ko’zlab qilinayotgan va shu maqsadga erishish uchun birlashtirilgan harakatlar tizimiga aytiladi."
            },
            
            {
            savol:"Agar qarorlar ichida birortasi boshqalariga qaraganda qandaydir maqsadga erishishda eng yaxshi, eng qulay, eng keraklisi bo’lsa, bunday qarorga …………. deyiladi. Nuqtalar o’rniga mos so’zni tanlang",
            javob:"#Optemal qaror"
            },
            
            {
            savol:"Qo’yilgan maqsadga erishishga intiluvchi va operasiyalarni o’tkazishga mutasaddi shaxslar, qurilmalar, avtomatlar majmuini ………… deb aytaladi. Nuqtalar o’rniga mos so’zni tanlang",
            javob:"#operasiyani o’tkazuvchi tomon A"
            },
            
            {
            savol:"Tog’ri ta’rifni belgilang. Operasiyani o’tkazuvchi tomon strategiyalari  bu-",
            javob:"# Operasiyani o’tkazuvchi tomon o’z ixtiyorida ma’lum resurslar zahirasiga ega bo’ladi va ulardan foydalanib, ularni sarflab ko’zlangan maqsadga erishishga intiladi. Bunday resurslar - aktiv vositalar, ulardan foydalanish, ularni sarflash usullari bilan baholanadi."
            },
            
            {
            savol:"…….. deb qandaydir mulohazalarga ko’ra boshqalardan afzalroq bo’lgan strategiyalarga aytiladi.’’ Nuqtalar o’rniga mos so’zni tanlang.",
            javob:"# Optimal strategiya"
            },
            
            {
            savol:"Biroq operasiyaning natijasiga operasiyani o’tkazuvchi tomon ixtiyorida bo’lmagan omillarga ham ta’sir qiladi - bular nazorat qilib bo’lmaydigan omillar deb ataladi.,  .",
            javob:"#Nazorat qilib bo’lmaydigan omillar"
            },
            
            {
            savol:"“Xar qanday matritsaviy o’yin aralash strategiyalarda ……..egadir.”Nuqtalar o’rniga mos so’zni qoing.",
            javob:"#Muozanat vaziatiga"
            },
            
            {
            savol:"Operatsiyalarni tekshirish bu-",
            javob:"#Eng umumiy ma’noda tashkiliy boshqaruv tizimlari ishi bilan bog’liq masalalarga, ularni boshqaruvchilarga optimal yechimlar berish maqsadida, ilmiy prinsiplar, usullar va vositalarni qo’llash deb ta’riflanishi mumkin."
            },
            
            {
            savol:"Operatsiyalarni tekshirish”ning asosiy predmeti bu-",
            javob:"#Bir-biri bilan uzviy bog’langan ob’yektlar majmuasidan iborat bo’lgan va muayyan maqsadga erishishga xizmat qiluvchi tizilmalardir."
            },
            
            {
            savol:"Agar qarorlar ichida birortasi boshqalariga qaraganda qandaydir maqsadga erishishda eng yaxshi, eng qulay, eng keraklisi bo’lsa, bunday qaror qanday qaror  deyiladi?",
            javob:"#Optimal qaror"
            },
            
            {
            savol:"Qo’yilgan maqsadga erishishga intiluvchi va operasiyalarni o’tkazishga mutasaddi shaxslar, qurilmalar, avtomatlar majmuini ………….. deb aytamiz. Nuqtalar o’rniga mos so’zni qoing.",
            javob:"#operasiyani o’tkazuvchi tomon"
            },
            
       ];
    $('.content table').html("");
    for (const item of arr) {
        let html="<tr><td><b>Savol: </b>"+item.savol+"</td><td><b>Javob: </b>"+item.javob+"</td></tr>";
        $('.content table').append(html);
    }


    $('input').keypress(function (e) { 
        if(e.key=='Enter')
        {
            let text=$(e.target).val();
            let result=arr.filter(x=>x.savol.toLowerCase().indexOf(text.toLowerCase())>=0);
            console.log(result);
            $('.content table').html("");
            for (const item of result) {
                let html="<tr><td><b>Savol: </b>"+item.savol+"</td><td><b>Javob: </b>"+item.javob+"</td></tr>";
                $('.content table').append(html);
            }
        }
    
    });
    $('#qidirish').click(function(){
        let text=$('.top input').val();
        let result=arr.filter(x=>x.savol.toLowerCase().indexOf(text.toLowerCase())>=0);
        console.log(result);
        $('.content table').html("");
        for (const item of result) {
            let html="<tr><td><b>Savol: </b>"+item.savol+"</td><td><b>Javob: </b>"+item.javob+"</td></tr>";
            $('.content table').append(html);
        }
    });
});