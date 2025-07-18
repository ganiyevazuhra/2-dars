// ====================================
// ============ 4-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 ga teng bo'lsa, "To'g'ri son!" deb alert chiqaring, aks holda "Boshqa son kiritdingiz!" deb alert chiqaring.

// Tushuntirish
// 10 вЂ“ sehrli son! рџЋ‰ Foydalanuvchi 10 kiritadimi yoki yoвЂ™qmi, tekshiramiz. == bilan tenglikni sinab koвЂ™ring.

// Input: 10
// Output: alert("To'g'ri son!")
// Input: 7
// Output: alert("Boshqa son kiritdingiz!")

// // Qani bir kod yozingchi рџ‘Ђ

// let son = prompt("Son kiriting: ");
// if(son == 10){
//     alert("To'g'ri son!")
// } else {
//     alert("Boshqa son kiritdingiz!");
// }


// ====================================
// ============ 5-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali "ha" yoki "yo'q" deb kiritadi. Agar "ha" kiritilgan bo'lsa, "Ruxsat bor!" deb alert chiqaring, aks holda "Ruxsat yo'q!" deb alert chiqaring.

// Tushuntirish
// Xuddi ota-onangdan ruxsat soвЂ™ragandek! рџ„ "ha" desa, yashaymiz, "yoвЂ™q" desa, xafa boвЂ™lamiz. Stringlarni === bilan tekshir.

// Input: "ha"
// Output: alert("Ruxsat bor!")
// Input: "yo'q"
// Output: alert("Ruxsat yo'q!")

// // Qani bir kod yozingchi рџ‘Ђ

// let permission = prompt("Parkka ruxsat so'rash: ")
// if (permission == "ha"){
//     console.log("Ruhsat bor!")
// } else {
//     console.log("Ruhsat yo'q!")
// }

// ============ 6-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 dan katta va 100 dan kichik bo'lsa, "Yaxshi diapazon!" deb alert chiqaring, aks holda "Diapazon tashqarisida!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi termometr oвЂ™qishdek! рџЊЎпёЏ 0 va 100 oraligвЂ™ida boвЂ™lsa, hamma narsa zoвЂ™r, aks holda muammo! && operatorini sinab koвЂ™ramiz.

// Input: 50
// Output: alert("Yaxshi diapazon!")
// Input: 150
// Output: alert("Diapazon tashqarisida!")

// // Qani bir kod yozingchi рџ‘Ђ

// let number = prompt("Termometr ko'rsatkichi:")
// if (number > 0 && number < 100){
//     alert("Yaxshi diapazon!")
// } else {
//     alert("Diapazon tashqarisida!")
// }

// ====================================
// ============ 7-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z uzunligi 5 dan katta bo'lsa, "Uzoq so'z!" deb alert chiqaring, aks holda "Qisqa so'z!" deb alert chiqaring.

// Tushuntirish
// SoвЂ™zlarning uzunligini oвЂ™lchaymiz! рџ“Џ Agar soвЂ™z uzun boвЂ™lsa, faxrlanamiz, qisqa boвЂ™lsa, qisqartirib yubormaymiz! length va > ishlatamiz.

// Input: "salom"
// Output: alert("Qisqa so'z!")
// Input: "javascript"
// Output: alert("Uzoq so'z!")

// // Qani bir kod yozingchi рџ‘Ђ

// let word = prompt("So'z uzunligi: ")
// if (word.length >= 0 && word.length <= 5){
//  alert("Qisqa so'z!")
// } else {
//     alert("Uzoq so'z!")  
// }

// ====================================
// ============ 8-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son juft bo'lsa, "Juft son!" deb alert chiqaring, aks holda "Toq son!" deb alert chiqaring.

// Tushuntirish
// Juft yoki toq вЂ“ bu sonlar olamidagi klassik jang! вљ”пёЏ Sonni 2 ga boвЂ™lib, qoldiqni tekshirish uchun % va == ishlatamiz.

// Input: 4
// Output: alert("Juft son!")
// Input: 7
// Output: alert("Toq son!")

// // Qani bir kod yozingchi рџ‘Ђ

// let son = prompt("Juft yoki toq son: ")
// if (son % 2 === 0){
//     alert("Juft son!")
// } else {
//     alert("Toq son!")
// }

// ====================================
// ============ 9-masala ==============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lsa, "Nol kiritdingiz!" deb alert chiqaring, aks holda "Nol emas!" deb alert chiqaring.

// Tushuntirish
// Nol вЂ“ bu xuddi boвЂ™sh choвЂ™ntakdek! рџ… Uni alohida tekshirish kerak. === bilan aniq tenglikni sinab koвЂ™ramiz.

// Input: 0
// Output: alert("Nol kiritdingiz!")
// Input: 5
// Output: alert("Nol emas!")

// // Qani bir kod yozingchi рџ‘Ђ

// let noll = prompt("Nol kiriting: ")
// if(noll === "0"){
//     alert("Nol kiritdingiz!") 
// } else {
//     alert("Nol emas!")
// }

// ====================================
// ============ 10-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "salom" bo'lsa, "Salom, dunyo!" deb alert chiqaring, aks holda "Boshqa so'z kiritdingiz!" deb alert chiqaring.

// Tushuntirish
// "Salom" desa, dunyoni quchoqlaymiz! рџЊЌ Aks holda, biroz xafa boвЂ™lamiz. === bilan soвЂ™zni aniq tekshir.

// Input: "salom"
// Output: alert("Salom, dunyo!")
// Input: "hello"
// Output: alert("Boshqa so'z kiritdingiz!")

// Qani bir kod yozingchi рџ‘Ђ
// let world = prompt("Salom, dunyo!") 
// if(world == "salom"){
//     alert("Salom, dunyo!")
// }else{
//     alert("Boshqa so'z kiritdingiz!") 
// }
// ====================================
// ============ 11-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa, "Birinchi son katta!" deb alert chiqaring, aks holda "Ikkichi son katta yoki teng!" deb alert chiqaring.

// Tushuntirish
// Sonlar oвЂ™rtasida musobaqa! рџЏ† Birinchi son ikkinchisini yengadimi, yoki yoвЂ™qmi? > bilan solishtiramiz.

// Input: 10, 5
// Output: alert("Birinchi son katta!")
// Input: 3, 7
// Output: alert("Ikkichi son katta yoki teng!")

// // Qani bir kod yozingchi рџ‘Ђ
//  let number = prompt("Son kiriting: ")
//  if(number == 10 || number > 5){
//     alert("Birinchi son katta!")
//  }else{
//     alert("Ikkichi son katta yoki teng!")
//  }

// ====================================
// ============ 12-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini va ismini kiritadi. Agar yosh 18 dan katta va ism "Ali" bo'lsa, "Xush kelibsiz, Ali!" deb alert chiqaring, aks holda "Kirish taqiqlanadi!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi VIP klubga kirishdek! рџЋ Faqat Ali va 18+ yoshdagilar uchun. && operatorini sinab koвЂ™ramiz.

// Input: 20, "Ali"
// Output: alert("Xush kelibsiz, Ali!")
// Input: 15, "Vali"
// Output: alert("Kirish taqiqlanadi!")

// Qani bir kod yozingchi рџ‘Ђ

// let year = prompt("VIP klubga kirish:")
// let name = prompt("Ali")
// if(year > 18){

// }

// ====================================
// ============ 13-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 dan kichik yoki 100 dan katta bo'lsa, "Chegaradan tashqarida!" deb alert chiqaring, aks holda "Chegara ichida!" deb alert chiqaring.

// Tushuntirish
// Sonlar chegarada yashaydi! рџљ§ 10 dan kichik yoki 100 dan katta boвЂ™lsa, ularni qaytarib yuboramiz. || operatorini sinab koвЂ™ramiz.

// Input: 5
// Output: alert("Chegaradan tashqarida!")
// Input: 50
// Output: alert("Chegara ichida!")

// // Qani bir kod yozingchi рџ‘Ђ
// let border = prompt("Chegaradagi raqam: ")
// if(border < 10 || border > 100){
//     alert("Chegaradan tashqarida!")
// }else{
//     alert("Chegara ichida!") 
// }
// ====================================
// ============ 14-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z bo'sh bo'lmasa ("" emas), "So'z kiritdingiz!" deb alert chiqaring, aks holda "Hech narsa kiritmadingiz!" deb alert chiqaring.

// Tushuntirish
// BoвЂ™sh joyni yoqtirmaymiz! рџ¤ Foydalanuvchi biror narsa yozsa, quvonamiz, aks holda biroz ranjimaymiz. ! operatorini sinab koвЂ™ramiz.

// Input: "test"
// Output: alert("So'z kiritdingiz!")
// Input: ""
// Output: alert("Hech narsa kiritmadingiz!")

// Qani bir kod yozingchi рџ‘Ђ
// let empty = prompt("Ma'lumot kiriting: ")
// if(empty != ""){
//     alert("So'z kiritdingiz!") 
// }else{
//     alert("Hech narsa kiritmadingiz!")
// }
// ====================================
// ============ 15-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar sonlar teng bo'lsa, "Sonlar teng!" deb alert chiqaring, aks holda "Sonlar teng emas!" deb alert chiqaring.

// Tushuntirish
// Sonlar oвЂ™rtasida tenglik bormi? рџ¤ќ == bilan tekshirib, doвЂ™stlikni mustahkamlaymiz!

// Input: 5, 5
// Output: alert("Sonlar teng!")
// Input: 5, 6
// Output: alert("Sonlar teng emas!")

// Qani bir kod yozingchi рџ

// let number = prompt("Birinchi sonni kiriting: ")
// let number2 = prompt("Ikkinchi sonni kiriting: ")
// if(number === number2){
//     alert("Sonlar teng!") 
// }else{
//     alert("Sonlar teng emas!")  
// }

// ====================================
// ============ 16-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 50 dan katta yoki teng bo'lsa va juft bo'lsa, "Katta juft son!" deb alert chiqaring, aks holda "Boshqa son!" deb alert chiqaring.

// Tushuntirish
// Katta va juft sonlar вЂ“ bu olamning yulduzlari! рџЊџ && va % operatorlarini birlashtirib, sinab koвЂ™ramiz.

// Input: 60
// Output: alert("Katta juft son!")
// Input: 45
// Output: alert("Boshqa son!")

// Qani bir kod yozingchi рџ‘Ђ
// let number = prompt("Son kiriting: ")
// if(number >= 50 && number % 2 === 0){
//     alert("Katta juft son!")
// }else{
//     alert("Boshqa son!")  
// }

// ====================================
// ============ 17-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "javascript" yoki "coding" bo'lsa, "Siz dasturchisiz!" deb alert chiqaring, aks holda "Boshqa so'z!" deb alert chiqaring.

// Tushuntirish
// Dasturchilar uchun maxsus salom! рџ‘ЁвЂЌрџ’» || operatorini ishlatib, sevimli soвЂ™zlarimizni tekshiramiz.

// Input: "javascript"
// Output: alert("Siz dasturchisiz!")
// Input: "hello"
// Output: alert("Boshqa so'z!")

// Qani bir kod yozingchi рџ‘Ђ
// let word = prompt("Dasturchilar! ")
// if(word == "javascript" || word == "coding"){
//     alert("Siz dasturchisiz!") 
// } else {
//     alert("Boshqa so'z!")
// }

// ====================================
// ============ 18-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lmasa, "Son nol emas!" deb alert chiqaring, aks holda "Son nol!" deb alert chiqaring.

// Tushuntirish
// Nol вЂ“ bu xuddi boвЂ™sh quti! рџ“¦ ! operatorini ishlatib, nol yoki nolni tekshiramiz.

// Input: 10
// Output: alert("Son nol emas!")
// Input: 0
// Output: alert("Son nol!")

// Qani bir kod yozingchi рџ‘Ђ
// let noll = prompt("Nolni tekshirish: ")
// if(noll != 0){
//     alert("Son nol emas!")
// }else{
//     alert("Son nol!")   
// }

// ====================================
// ============ 19-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini kiritadi. Agar yosh 13 dan katta va 19 dan kichik bo'lsa, "Siz o'smirsiz!" deb alert chiqaring, aks holda "O'smir emassiz!" deb alert chiqaring.

// Tushuntirish
// OвЂ™smirlik вЂ“ bu hayotning eng qiziq davri! рџњ && bilan yoshni chegaralaymiz.

// Input: 15
// Output: alert("Siz o'smirsiz!")
// Input: 20
// Output: alert("O'smir emassiz!")

// // Qani bir kod yozingchi рџ‘Ђ
// let year = prompt("O'smirlikni aniqlash: ")
// if(year > 13 && year < 19){
//     alert("Siz o'smirsiz!") 
// }else{
//     alert("O'smir emassiz!")
// }

// ====================================
// ============ 20-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z uzunligi 3 dan kichik bo'lsa yoki bo'sh bo'lsa, "So'z juda qisqa!" deb alert chiqaring, aks holda "Yaxshi so'z!" deb alert chiqaring.

// Tushuntirish
// Qisqa soвЂ™zlarni yoqtirmaymiz! рџ¤ || va length bilan soвЂ™zni sinab koвЂ™ramiz.

// Input: "hi"
// Output: alert("So'z juda qisqa!")
// Input: "hello"
// Output: alert("Yaxshi so'z!")

// Qani bir kod yozingchi рџ‘Ђ
// let word = prompt("So'z uzunligi: ")
// if(word.length < 3 || word == " "){
//     alert("So'z juda qisqa!")
// }else{
//     alert("Yaxshi so'z!") 
// }

// ====================================
// ============ 21-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa va juft bo'lsa, "Birinchi son katta va juft!" deb alert chiqaring, aks holda "Shart bajarilmadi!" deb alert chiqaring.

// Tushuntirish
// Bu xuddi musobaqada gвЂ™olibni aniqlashdek! рџЏ… && va % bilan birinchi sonni sinab koвЂ™ramiz.

// Input: 10, 5
// Output: alert("Birinchi son katta va juft!")
// Input: 7, 3
// Output: alert("Shart bajarilmadi!")

// Qani bir kod yozingchi рџ‘Ђ
// let son = prompt("Birinchi son")
// let son2 = prompt("Ikkinchi son")
// if(son > son2 && son % 2 === 0){
//     alert("Birinchi son katta va juft!")
// }else{
//     alert("Shart bajarilmadi!")
// }

// ====================================
// ============ 22-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini va "erkak" yoki "ayol" deb jinsini kiritadi. Agar yosh 18 dan katta bo'lsa va jins "erkak" bo'lsa, "Siz armiyaga borasiz!" deb alert chiqaring, aks holda "Armiyaga bormaysiz!" deb alert chiqaring.

// Tushuntirish
// Armiyaga chaqiruv vaqti! рџ… Faqat 18+ erkaklar uchun. && bilan shartlarni birlashtiramiz.

// Input: 20, "erkak"
// Output: alert("Siz armiyaga borasiz!")
// Input: 16, "ayol"
// Output: alert("Armiyaga bormaysiz!")

// // Qani bir kod yozingchi рџ‘Ђ

// let yosh = prompt("Yoshingizni kiriting: ")
// let jins = prompt("Jinsingizni kiriting: ")
// if(yosh > 18 && jins === "erkak"){
//     alert("Siz armiyaga borasiz!") 
// }else{
//     alert("Armiyaga bormaysiz!")
// }

// ====================================
// ============ 23-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 10 dan kichik yoki 100 dan katta bo'lsa va toq bo'lsa, "Chegaradagi toq son!" deb alert chiqaring, aks holda "Boshqa son!" deb alert chiqaring.

// Tushuntirish
// Toq sonlar chegarada sayr qilmoqda! рџљ¶ || va % bilan ularni ushlaymiz.

// Input: 5
// Output: alert("Chegaradagi toq son!")
// Input: 50
// Output: alert("Boshqa son!")

// Qani bir kod yozingchi рџ‘Ђ

// let son = prompt("Son kiriting: ")
// if(son < 10 || son > 100 && son % 2 === 0){
//     alert("Chegaradagi toq son!")
// }else{
//     alert("Boshqa son!")
// }

// ====================================
// ============ 24-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir so'z kiritadi. Agar so'z "admin" bo'lmasa, "Siz admin emassiz!" deb alert chiqaring, aks holda "Xush kelibsiz, admin!" deb alert chiqaring.

// Tushuntirish
// Adminlik вЂ“ bu mas'uliyat! рџЋ ! operatorini ishlatib, admin yoki yoвЂ™qligini tekshiramiz.

// Input: "admin"
// Output: alert("Xush kelibsiz, admin!")
// Input: "user"
// Output: alert("Siz admin emassiz!")

// // Qani bir kod yozingchi рџ‘Ђ
// let soz = prompt("Tizimga kirish: ")
// if(soz === "admin"){
//     alert("Xush kelibsiz, admin!") 
// }else{
//     alert("Siz admin emassiz!")  
// }


// ============ 25-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita son kiritadi. Agar birinchi son ikkinchisidan katta bo'lsa yoki teng bo'lsa va birinchi son musbat bo'lsa, "Birinchi son mos keladi!" deb alert chiqaring, aks holda "Shart bajarilmadi!" deb alert chiqaring.

// Tushuntirish
// Birinchi son oвЂ™zini koвЂ™rsatmoqchi! рџЏ || va > bilan uning qobiliyatini sinaymiz.

// Input: 10, 5
// Output: alert("Birinchi son mos keladi!")
// Input: -3, 5
// Output: alert("Shart bajarilmadi!")

// // Qani bir kod yozingchi рџ‘Ђ
// let son = prompt("Birinchi sonni kiriting:");
// let son2 = prompt("Ikkinchi sonni kiriting:");

// if (son >= son2 || son > 0) {
//   alert("Birinchi son mos keladi!");
// } else {
//   alert("Shart bajarilmadi!");
// }

// ====================================
// ============ 26-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 dan katta bo'lsa, lekin 10 dan kichik bo'lsa yoki 100 dan katta bo'lsa, lekin 200 dan kichik bo'lsa, "Maxsus diapazon!" deb alert chiqaring, aks holda "Oddiy son!" deb alert chiqaring.

// Tushuntirish
// Bu sonlar maxsus zonada yashaydi! рџЏќпёЏ && va || operatorlarini aralashtirib, chegaralarni tekshiramiz.

// Input: 5
// Output: alert("Maxsus diapazon!")
// Input: 50
// Output: alert("Oddiy son!")

// Qani bir kod yozingchi рџ‘Ђ
// let son = prompt("Maxsus diapazon! ")
// if((son > 0 && son < 10) || (son > 100 && son < 200)){
//     alert("Maxsus diapazon!")
// }else{
//     alert("Oddiy son!")
// }

// ====================================
// ============ 27-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ismini va yoshini kiritadi. Agar ism bo'sh bo'lmasa va yosh 18 dan kichik bo'lsa, "Yoshsin, [ism]!" deb alert chiqaring, aks holda "Boshqa holat!" deb alert chiqaring.

// Tushuntirish
// Yoshlik вЂ“ bu ajoyib vaqt! рџ„ && va ! bilan ism va yoshni tekshiramiz.

// Input: "Ali", 15
// Output: alert("Yoshsin, Ali!")
// Input: "", 20
// Output: alert("Boshqa holat!")

// Qani bir kod yozingchi рџ‘Ђ
// let ism = prompt("Ismingizni kiriting:");
// let yosh = parseInt(prompt("Yoshingizni kiriting:"));

// if (ism.trim() !== "" && yosh < 18) {
//   alert("Yoshsin, " + ism + "!");
// } else {
//   alert("Boshqa holat!");
// }

// ====================================
// ============ 28-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali bir son kiritadi. Agar son 0 bo'lmasa va juft bo'lsa, yoki son 100 dan katta bo'lsa, "Maxsus son!" deb alert chiqaring, aks holda "Oddiy son!" deb alert chiqaring.

// Tushuntirish
// Bu sonlar oвЂ™ziga xos! рџЊџ ||, && va % bilan ularni ajratib olamiz.

// Input: 120
// Output: alert("Maxsus son!")
// Input: 7
// Output: alert("Oddiy son!")

// // Qani bir kod yozingchi рџ‘Ђ

// let son = prompt("Son kiriting: ")
// if(son != 0 && son % 2 === 0 || son > 100){
//     alert("Maxsus son!")
// }else{
//     alert("Oddiy son!")
// }

// ====================================
// ============ 29-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali ikkita so'z kiritadi. Agar birinchi so'z ikkinchisidan uzun bo'lsa yoki birinchi so'z "salom" bo'lsa, "Birinchi so'z g'olib!" deb alert chiqaring, aks holda "Ikkichi so'z g'olib!" deb alert chiqaring.

// Tushuntirish
// SoвЂ™zlar oвЂ™rtasida musobaqa! рџ—ЈпёЏ || va length bilan gвЂ™olibni aniqlaymiz.

// Input: "salom", "hi"
// Output: alert("Birinchi so'z g'olib!")
// Input: "test", "hello"
// Output: alert("Ikkichi so'z g'olib!")

// // Qani bir kod yozingchi рџ‘Ђ
// let soz = prompt("Birinchi so'zni kiriting:");
// let soz2 = prompt("Ikkinchi so'zni kiriting:");

// if ((soz.length > soz2.length) || (soz === "salom")) {
//   alert("Birinchi so'z g'olib!");
// } else {
//   alert("Ikkinchi so'z g'olib!");
// }

// ====================================
// ============ 30-masala =============
// ====================================
// ----Masala sharti-----
// Foydalanuvchi prompt orqali yoshini, ismini va "ha" yoki "yo'q" deb javob kiritadi. Agar yosh 18 dan katta bo'lsa, ism bo'sh bo'lmasa va javob "ha" bo'lsa, "Siz superstarsiz, [ism]!" deb alert chiqaring, aks holda "Superstar emassiz!" deb alert chiqaring.

// Tushuntirish
// Superstar boвЂ™lish oson emas! рџЊџ && va ! bilan barcha shartlarni tekshiramiz. Bu eng qiyin masala, lekin siz buni uddalaysiz!

// Input: 20, "Ali", "ha"
// Output: alert("Siz superstarsiz, Ali!")
// Input: 15, "Vali", "yo'q"
// Output: alert("Superstar emassiz!")

// // Qani bir kod yozingchi рџ‘Ђ

// let yosh = prompt("Yoshingizni kiriting:");
// let ism = prompt("Ismingizni kiriting:");
// let javob = prompt("Ha yoki yo'q deb javob bering:");

// if (yosh > 18 && ism.trim() !== "" && javob === "ha") {
//   alert("Siz superstarsiz, " + ism + "!");
// } else {
//   alert("Superstar emassiz!");
// }