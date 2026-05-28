# Administration Modes

The 3C Platform supports three modes of administration, ranging from fully remote to completely offline. You can choose the mode that best fits your study design, infrastructure, and participant population — and you can combine modes within the same study.

---

## 1. Remote Server

**What it is:** JATOS is installed on a secure server connected to the internet. Participants receive a unique URL and complete the study from any location using their own device.

**How it works:**

- The server runs JATOS continuously and serves studies to participants over HTTPS.
- Each participant follows their personal study link, which encodes a unique Worker ID.
- Results are stored directly on the server as they are submitted.
- The NeuroClinic (if installed) is accessible to administrators from any browser.

**When to use it:**

- Remote or distributed participant populations
- Large-scale studies where participants cannot come to a lab
- Studies that require longitudinal follow-up over weeks or months

**Requirements:**

- A server with a public IP address and HTTPS (TLS certificate)
- JATOS installed and configured on the server
- Optionally: MySQL + NeuroClinic for result review

!!! tip "Security"
    Always run your remote JATOS server with HTTPS enabled. JATOS documentation covers TLS configuration and reverse proxy setup with Nginx or Apache.

---

## 2. Local JATOS (Laptop, No Internet)

**What it is:** JATOS runs on a local laptop. The researcher administers the study in person, and the participant uses the laptop's browser (or connects via localhost).

**How it works:**

- Start JATOS on the laptop before the session.
- Open the study URL in the browser: `http://localhost:9000/`.
- The participant completes all tasks on that device.
- Results are stored in the local JATOS database on the laptop.

**When to use it:**

- In-person clinical or lab assessments
- Field research without a reliable internet connection
- Pilot testing before deploying to a remote server

**Requirements:**

- A laptop with JATOS installed (no internet required after setup)
- The NCMBattery study imported into local JATOS

---

## 3. Offline LAN (Tablet Network)

**What it is:** A laptop running JATOS serves as a local access point for multiple tablets or phones, all connected through a Wi-Fi router that has no internet connection.

**How it works:**

```
Internet (not connected)
         |
         x
         |
    Wi-Fi Router
    /     |     \
Tablet  Tablet  Laptop (JATOS)
```

1. The laptop connects to the Wi-Fi router.
2. Tablets and phones connect to the same router.
3. Participants navigate to the laptop's local IP address (e.g., `http://192.168.1.100:9000/`) in their tablet browser.
4. JATOS serves the study to all connected devices simultaneously.
5. Results are stored on the laptop as participants complete the tasks.

**When to use it:**

- Group testing sessions in classrooms, clinics, or community centres
- Settings with no internet access (remote communities, hospitals with restricted networks)
- Any situation where you need multiple simultaneous participants without a server

**Requirements:**

- A laptop running JATOS
- A Wi-Fi router (no internet connection needed)
- Tablets or phones with a modern browser (Chrome or Safari recommended)
- Participants and the laptop on the same Wi-Fi network

!!! warning "Battery and screen size"
    Tablets on battery power will eventually lose charge during long sessions. Make sure devices are charged before the session. The 3C Platform's touchscreen support works well on most modern tablets.

---

## Merging offline data with the remote database

After an offline LAN session, the locally collected data can be merged into the main remote JATOS database. Scripts included with the platform handle this merge process.

**General workflow:**

1. Export results from the local JATOS instance (JATOS → Studies → Export Results).
2. Run the merge script against your remote JATOS database:
   ```bash
   python main.py --merge-results /path/to/exported_results.zip
   ```
3. The script appends the offline results to the remote database, preserving Worker IDs and timestamps.

This means that data collected from in-person offline sessions and remote online sessions for the same study can be combined in a single dataset for analysis.

!!! note "Same participant, multiple modes"
    If a participant completes some sessions remotely and some in-person (offline LAN), their data from both modes can be merged into a unified record, provided their Worker ID is consistent across sessions.
