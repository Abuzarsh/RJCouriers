const app = document.getElementById("app");

const views = {
  home: `
    <section class="hero">
      <h2>Fast, Reliable, Affordable Courier Services</h2>
      <p>Delivering packages across India & worldwide with trust since 2000.</p>
      <button onclick="loadView('create')">Ship a Package</button>
    </section>

    <section class="card">
      <h3 class="section-title">Why Choose Us?</h3>
      <div class="grid">
        <div class="service-card"><h4>🚚 On-Time Delivery</h4><p>98% success rate in timely deliveries across 150+ cities.</p></div>
        <div class="service-card"><h4>🌍 Global Reach</h4><p>International tie-ups in 40+ countries for smooth shipping.</p></div>
        <div class="service-card"><h4>💳 COD Services</h4><p>Secure cash-on-delivery for individuals & businesses.</p></div>
        <div class="service-card"><h4>📦 Safe Handling</h4><p>Special care for fragile packages with smart packaging.</p></div>
      </div>
    </section>

    <section class="card">
      <h3 class="section-title">Testimonials</h3>
      <p>⭐ "RJCouriers is my go-to for online orders — fast & safe!" – Priya, Mumbai</p>
      <p>⭐ "Their international service helped me expand my business." – Aarav, Delhi</p>
    </section>

    <section class="card">
      <h3 class="section-title">Coverage</h3>
      <p>We cover <b>150+ Indian cities</b> & <b>40 international destinations</b>.</p>
      <ul>
        <li>India: Mumbai, Delhi, Bangalore, Kolkata, Hyderabad, Chennai</li>
        <li>Global: Dubai, London, New York, Singapore</li>
      </ul>
    </section>

    <section class="card">
      <h3 class="section-title">Start Shipping Now</h3>
      <button class="primary" onclick="loadView('create')">Create a Shipment</button>
    </section>
  `,

  services: `
    <div class="card">
      <h2>Our Services</h2>
      <ul>
        <li>Standard Delivery (3–5 days)</li>
        <li>Express Delivery (1–2 days)</li>
        <li>Same-Day Intra-City Delivery</li>
        <li>International Shipping</li>
        <li>Bulk / Business Shipping</li>
        <li>Cash on Delivery</li>
      </ul>
    </div>
  `,

  create: `
    <div class="card">
      <h2>Create Shipment</h2>
      <div class="form-row">
        <input type="text" placeholder="Sender Name" />
        <input type="text" placeholder="Recipient Name" />
      </div>
      <div class="form-row">
        <input type="text" placeholder="Pickup Address" />
        <input type="text" placeholder="Delivery Address" />
      </div>
      <div class="form-row">
        <input type="number" placeholder="Weight (kg)" />
        <select><option>Standard</option><option>Express</option><option>Same-Day</option></select>
      </div>
      <button class="primary">Submit Shipment</button>
    </div>
  `,

  track: `
    <div class="card">
      <h2>Track Shipment</h2>
      <input type="text" placeholder="Enter Tracking Number" />
      <button class="primary">Track</button>
    </div>
  `,

  rates: `
    <div class="card">
      <h2>Shipping Rates</h2>
      <table class="table">
        <tr><th>Service</th><th>Rate (per kg)</th></tr>
        <tr><td>Standard</td><td>₹50</td></tr>
        <tr><td>Express</td><td>₹100</td></tr>
        <tr><td>Same-Day</td><td>₹150</td></tr>
        <tr><td>International</td><td>₹400</td></tr>
      </table>
    </div>
  `,

  locations: `
    <div class="card">
      <h2>Our Locations</h2>
      <p>Serving across all metro cities & expanding rapidly nationwide.</p>
    </div>
  `,

  about: `
    <div class="card">
      <h2>About Us</h2>
      <p>RJCouriers has been delivering trust since 2000, with 2000+ employees across India. We are committed to fast, safe, and reliable logistics.</p>
    </div>
  `,

  contact: `
    <div class="card">
      <h2>Contact Us</h2>
      <p>Email: support@rjcouriers.com</p>
      <p>Phone: +91 98765 43210</p>
    </div>
  `,

  admin: `
    <div class="card">
      <h2>Admin Panel</h2>
      <p>Restricted area. For staff only.</p>
    </div>
  `
};

function loadView(view) {
  app.innerHTML = views[view] || "<p>Page not found.</p>";
}

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => loadView(btn.dataset.view));
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuToggle");
const nav = document.getElementById("navbar");
menuBtn.addEventListener("click", () => nav.classList.toggle("show"));

// Load home by default
loadView("home");
