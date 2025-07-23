async function send() {
  const msg = document.getElementById("message").value;
  if (!msg) return alert("Please enter a message.");

  try {
    const res = await fetch("https://n8ncontabo.duckdns.org/webhook/2b2e3b9c-b073-4621-8283-6f7e67ef69f5/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    });

    const data = await res.json();
    document.getElementById("response").innerText = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById("response").innerText = "Error: " + err.message;
  }
}
