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


// console.log(jobs)
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

