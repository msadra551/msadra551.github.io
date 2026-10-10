const province = document.getElementById("province");
const city = document.getElementById("city");
const form = document.getElementById("personalForm");

const birthDay = document.getElementById("birthDay");
const birthMonth = document.getElementById("birthMonth");
const birthYear = document.getElementById("birthYear");

const phone = document.getElementById("phone");

// شهرهای هر استان
const cities = {
    "تهران": ["تهران", "ری", "شهریار", "دماوند"],
    "اصفهان": ["اصفهان", "کاشان", "نجف آباد", "خمینی شهر"],
    "فارس": ["شیراز", "مرودشت", "کازرون", "جهرم"],
    "خراسان رضوی": ["مشهد", "نیشابور", "سبزوار", "تربت حیدریه"],
    "آذربایجان شرقی": ["تبریز", "مراغه", "مرند", "اهر"],
    "گیلان": ["رشت", "انزلی", "لاهیجان", "لنگرود"]
};

// ساخت روزهای تولد
for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    birthDay.appendChild(option);
}

// ساخت سال‌های شمسی
for (let i = 1405; i >= 1300; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    birthYear.appendChild(option);
}

// تغییر شهر بر اساس استان
province.addEventListener("change", function () {
    const selectedProvince = province.value;

    city.innerHTML = '<option value="">شهر را انتخاب کنید</option>';

    if (selectedProvince !== "" && cities[selectedProvince]) {
        const provinceCities = cities[selectedProvince];

        provinceCities.forEach(function (cityName) {
            const option = document.createElement("option");
            option.value = cityName;
            option.textContent = cityName;
            city.appendChild(option);
        });

        city.disabled = false;
    } else {
        city.disabled = true;
        city.innerHTML =
            '<option value="">ابتدا استان را انتخاب کنید</option>';
    }
});

// بررسی شماره موبایل
phone.addEventListener("input", function () {
    const mobilePattern = /^09[0-9]{9}$/;

    if (phone.value === "" || mobilePattern.test(phone.value)) {
        phone.setCustomValidity("");
    } else {
        phone.setCustomValidity(
            "شماره موبایل باید 11 رقم باشد و با 09 شروع شود."
        );
    }
});

// پاک کردن فرم
form.addEventListener("reset", function () {
    setTimeout(function () {
        city.disabled = true;

        city.innerHTML =
            '<option value="">ابتدا استان را انتخاب کنید</option>';

        phone.setCustomValidity("");
    }, 0);
});
