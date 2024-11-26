const foydalanuvchilar = []; 

document.getElementById("ro'yxatdan").addEventListener("click", () => {
    const ism = document.getElementById("ism").value.trim();
    const login = document.getElementById("login").value.trim();
    const parol = document.getElementById("parol").value.trim();

    try {
        if (ism.length < 1) throw "Ism kamida 1 ta belgidan iborat bo'lishi kerak.";
        if (login.length < 4) throw "Login kamida 4 ta belgidan iborat bo'lishi kerak.";
        if (parol.length < 6) throw "Parol kamida 6 ta belgidan iborat bo'lishi kerak.";

        const mavjud = foydalanuvchilar.some(f => f.login === login);
        if (mavjud) throw "Bu login allaqachon band.";

        foydalanuvchilar.push({ ism, login, parol });
        alert("Ro'yxatdan o'tish muvaffaqiyatli bajarildi!");
    } catch (xato) {
        alert(xato); 
    }
});
