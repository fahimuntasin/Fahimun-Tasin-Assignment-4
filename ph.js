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
      company: "CloudFirst Inc",
      role: "Backend Developer",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$140,000 - $190,000",
      status: "not_applied",
      description: "Design scalable backend systems using Python and AWS."
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


