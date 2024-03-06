function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const dob = new Date(dobInput);
    const now = new Date();

    const yearDiff = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    const dateDiff = now.getDate() - dob.getDate();

    if (yearDiff < 0) {
        document.getElementById("result").textContent = "Invalid Date";
        return;
    }

    if (monthDiff > 0 || (monthDiff === 0 && dateDiff >= 0)) {
        document.getElementById("result").textContent = `Your current age is ${yearDiff} years ${monthDiff} months ${dateDiff} days`;
    } else {
        yearDiff--;
        if (monthDiff <= 0) {
            if (dateDiff > 0) {
                monthDiff = 12 + monthDiff;
            } else {
                monthDiff = 11 - monthDiff;
            }
        }
        if (dateDiff < 0) {
            dateDiff = 30 + dateDiff;
            monthDiff--;
        }
        document.getElementById("result").textContent = `Your current age is ${yearDiff} years ${monthDiff} months ${dateDiff} days`;
    }
}

// Set the default date value for the current date
function currentDate() {
    const d = document.getElementById("dob");
    d.value = formatted();
}

// Format date as YYYY-MM-DD
function formatted(date = new Date()) {
    return [
        date.getFullYear(),
        short(date.getMonth() + 1),
        short(date.getDate())
    ].join("-");
}

// Ensure month and day components are zero-padded
function short(num) {
    return num.toString().padStart(2, "0");
}

currentDate();
