 const jobs = [
    {
      id: 1,
      company: "Mobile First Corp",
      role: "React Native Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$130,000 - $175,000",
      status: "not_applied",
      description: "Build cross-platform mobile apps using React Native."
    },
    {
      id: 2,
      company: "WebFlow Agency",
      role: "Web Designer & Developer",
      location: "Los Angeles, CA",
      type: "Part-time",
      salary: "$80,000 - $120,000",
      status: "not_applied",
      description: "Create stunning web experiences for high-profile clients."
    },
{
  id: 3,
  company: "DataViz Solutions",
  role: "Data Visualization Specialist",
  location: "Boston, MA",
  type: "Full-time",
  salary: "$115,000 - $155,000",
  status: "not_applied",
  description: "Transform complex datasets into clear dashboards and visual reports using D3.js, React, and analytics tools."
},

 {
      id: 4,
      company: "CloudFirst Inc",
      role: "Backend Developer",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$140,000 - $190,000",
      status: "not_applied",
      description: "Design scalable backend systems using Python and AWS."
    },

{
  id: 5,
  company: "Innovation Labs",
  role: "UI/UX Engineer",
  location: "Austin, TX",
  type: "Full-time",
  salary: "$110,000 - $150,000",
  status: "not_applied",
  description: "Develop intuitive interfaces and collaborate with product teams to deliver user-centered digital experiences."
},


{
  id: 6,
  company: "MegaCorp Solutions",
  role: "JavaScript Developer",
  location: "New York, NY",
  type: "Full-time",
  salary: "$130,000 - $170,000",
  status: "not_applied",
  description: "Build enterprise-grade applications using modern JavaScript frameworks. Focus on performance and maintainable code."
},
{
  id: 7,
  company: "StartupXYZ",
  role: "Full Stack Engineer",
  location: "Remote",
  type: "Full-time",
  salary: "$120,000 - $160,000",
  status: "not_applied",
  description: "Work on both frontend and backend systems using React and Node.js. Contribute to architecture decisions in a fast-growing startup."
},

{
  id: 8,
  company: "TechCorp Industries",
  role: "Senior Frontend Developer",
  location: "San Francisco, CA",
  type: "Full-time",
  salary: "$130,000 - $175,000",
  status: "not_applied",
  description: "Lead frontend development using React and TypeScript. Improve UI performance and mentor junior developers."
}

  ];

  let currentFilter = "all";



  function updateCounts() {
    document.getElementById("totalCount").textContent = jobs.length;
    document.getElementById("interviewCount").textContent =
      jobs.filter(job => job.status === "interview").length;
    document.getElementById("rejectedCount").textContent =
      jobs.filter(job => job.status === "rejected").length;
  }

  function setFilter(filter) {
    currentFilter = filter;

    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("tab-active"));
    event.target.classList.add("tab-active");

    renderJobs();
  }

  function updateStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    job.status = status;
    updateCounts();
    renderJobs();
  }




function deleteJob(id) {
  const index = jobs.findIndex(job => job.id === id);

  if (index !== -1) {
    jobs.splice(index, 1);
  }

  updateCounts();
  renderJobs();
}

  function renderJobs() {
    const container = document.getElementById("jobsContainer");
    const emptyState = document.getElementById("emptyState");

    container.innerHTML = "";

    const filteredJobs = jobs.filter(job => {
      if (currentFilter === "all") return true;
      return job.status === currentFilter;
    });

    if (filteredJobs.length === 0) {
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }

    filteredJobs.forEach(job => {
      const badgeClass =
        job.status === "interview"
          ? "badge-success"
          : job.status === "rejected"
          ? "badge-error"
          : "badge-ghost";

      const badgeText =
        job.status === "not_applied"
          ? "NOT APPLIED"
          : job.status.toUpperCase();

      const card = document.createElement("div");
      card.className = "card bg-base-100 shadow";


     card.innerHTML = `
  <div class="card-body flex justify-between">

    <!-- LEFT SIDE (All Job Content) -->
    <div class="flex-1">
      <h2 class="card-title">${job.company}</h2>
      <p class="text-sm opacity-70">${job.role}</p>
      <p class="text-xs opacity-60">
        ${job.location} • ${job.type} • ${job.salary}
      </p>

      <div class="mt-2">
        <span class="badge ${badgeClass}">${badgeText}</span>
      </div>

      <p class="mt-3">${job.description}</p>

      <div class="card-actions mt-4 flex-wrap gap-2">
        <button class="btn btn-outline btn-success btn-sm"
          onclick="updateStatus(${job.id}, 'interview')">
          Interview
        </button>

        <button class="btn btn-outline btn-error btn-sm"
          onclick="updateStatus(${job.id}, 'rejected')">
          Rejected
        </button>
      </div>
    </div>

    <!-- RIGHT SIDE (VERTICALLY CENTERED DELETE) -->
    <div class="flex items-center ml-240">
      <button class="btn btn-error btn-sm"
        onclick="deleteJob(${job.id})">
        Delete
      </button>
    </div>

  </div>
`;
      container.appendChild(card);
    });
  }

  updateCounts();
  renderJobs();


