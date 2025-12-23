const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz6yZMcdrxStFIgpusKVWVRy2CWDUUoghkqoVPNjr0zM-uRFUJDKe2HtvdI0VOGrvV1cQ/exec";
const modal = document.getElementById("scheduleModal");
const openBtn = document.getElementById("openScheduleBtn");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => modal.style.display = "flex";
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
};

const eventForm = document.getElementById("eventForm");
const submitBtn = eventForm.querySelector('button[type="submit"]');
const originalBtnText = submitBtn.textContent;

eventForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
    
    const fd = new FormData(eventForm);
    
    try {
        await fetch(WEB_APP_URL, {
            method: "POST",
            mode: "no-cors",
            body: fd,
            signal: controller.signal
        });
        
        submitBtn.textContent = "Submitted!";
        eventForm.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalBtnText;
        }, 1000);
    } catch (error) {
        alert("Submission failed—please try again.");
    } finally {
        clearTimeout(timeoutId);
        submitBtn.disabled = false;
        if (submitBtn.textContent === "Submitting...") {
            submitBtn.textContent = originalBtnText;
        }
    }
});
