const API_URL = "http://localhost:5000/api";

// ---------------- PATIENT ----------------

async function addPatient() {
    await fetch(`${API_URL}/patients/add`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: pname.value,
            age: page.value,
            disease: pdisease.value
        })
    });

    pname.value = "";
    page.value = "";
    pdisease.value = "";

    loadPatients();
}

async function loadPatients() {
    const res = await fetch(`${API_URL}/patients`);
    const data = await res.json();
    displayPatients(data);
}

function displayPatients(data) {
    const list = document.getElementById("patientList");
    if (list) {
        list.innerHTML = "";

        data.forEach(p => {
            list.innerHTML += `
            <li>
                ${p.name} - ${p.age} - ${p.disease}
                <button onclick="deletePatient(${p.id})">Delete</button>
            </li>`;
        });
    }

    const total = document.getElementById("totalPatients");
    if (total) total.innerText = data.length;
}

async function deletePatient(id) {
    await fetch(`${API_URL}/patients/${id}`, { method: "DELETE" });
    loadPatients();
}

// 🔍 SEARCH PATIENT
async function searchPatients() {
    const keyword = document.getElementById("searchPatient").value.toLowerCase();

    const res = await fetch(`${API_URL}/patients`);
    const data = await res.json();

    const filtered = data.filter(p =>
        p.name.toLowerCase().includes(keyword)
    );

    displayPatients(filtered);
}

function resetPatientSearch() {
    const searchInput = document.getElementById("searchPatient");
    if (searchInput) searchInput.value = "";
    loadPatients();
}

// ---------------- APPOINTMENT ----------------

async function addAppointment() {
    await fetch(`${API_URL}/appointments/add`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: aname.value,
            date: adate.value,
            time: atime.value,
            ampm: ampm.value
        })
    });

    aname.value = "";
    adate.value = "";
    atime.value = "";

    loadAppointments();
}

async function loadAppointments() {
    const res = await fetch(`${API_URL}/appointments`);
    const data = await res.json();
    displayAppointments(data);
}

function displayAppointments(data) {
    const list = document.getElementById("appointmentList");
    if (list) {
        list.innerHTML = "";

        data.forEach(a => {
            list.innerHTML += `
            <li>
                ${a.name} - ${a.date} - ${a.time} ${a.ampm}
                <button onclick="deleteAppointment(${a.id})">Delete</button>
            </li>`;
        });
    }

    const total = document.getElementById("totalAppointments");
    if (total) total.innerText = data.length;
}

async function deleteAppointment(id) {
    await fetch(`${API_URL}/appointments/${id}`, { method: "DELETE" });
    loadAppointments();
}

// 🔍 SEARCH APPOINTMENT
async function searchAppointments() {
    const keyword = document.getElementById("searchAppointment").value.toLowerCase();

    const res = await fetch(`${API_URL}/appointments`);
    const data = await res.json();

    const filtered = data.filter(a =>
        a.name.toLowerCase().includes(keyword)
    );

    displayAppointments(filtered);
}

function resetAppointmentSearch() {
    const searchInput = document.getElementById("searchAppointment");
    if (searchInput) searchInput.value = "";
    loadAppointments();
}

// ---------------- AUTH ----------------

function loginUser() {
    window.location.href = "dashboard.html";
}

function registerUser() {
    alert("Registered successfully");
}

// ---------------- LOAD ----------------

window.onload = () => {
    loadPatients();
    loadAppointments();
};

window.addEventListener('focus', () => {
    loadPatients();
    loadAppointments();
});

function logout() {
    window.location.href = "login.html";
}