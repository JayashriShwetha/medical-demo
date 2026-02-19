function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    window.speechSynthesis.speak(speech);
}

function scanMedicine() {
    let data = "Medicine: Paracetamol | Expiry: Dec 2026 | Batch: BZ45X21";
    document.getElementById("scanResult").innerText = data;
    speak(data);
}

function giveInstructions() {
    let msg = "Take one tablet after food, twice daily.";
    document.getElementById("instruction").innerText = msg;
    speak(msg);
}

function takenDose() {
    let msg = "If already taken, wait at least 6 hours before next dose.";
    document.getElementById("healthResponse").innerText = msg;
    speak(msg);
}

function reportSideEffect() {
    let msg = "Side effect recorded. Thank you for protecting the community.";
    document.getElementById("healthResponse").innerText = msg;
    speak(msg);
}

function emergencyAlert() {
    let msg = "Emergency mode activated. Please contact nearest doctor.";
    document.getElementById("emergencyMsg").innerText = msg;
    speak(msg);
}
