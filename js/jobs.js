/**
 * RECRUITMENT AGENCY - Jobs Data & Functional Engine
 * Vanilla JavaScript (ES6+)
 * Contains fictional demonstration job listings and filter mechanisms.
 */

const DEMO_JOBS = [
  {
    id: "frontend-developer-01",
    title: "Frontend Developer",
    employer: "Demo Employer - Digital Solutions",
    industry: "Information Technology",
    location: "Hyderabad, Telangana (Hybrid)",
    city: "Hyderabad",
    type: "Full-Time",
    experience: "3 - 5 Years",
    salary: "₹8,00,000 - ₹13,00,000 P.A.",
    salaryMin: 8,
    salaryMax: 13,
    posted: "1 day ago",
    overview: "We are seeking a skilled and detail-oriented Frontend Developer to build responsive, accessible, and high-performance user interfaces for enterprise web applications.",
    responsibilities: [
      "Develop responsive and accessible web applications using modern semantic HTML5, CSS3, and modern JavaScript.",
      "Collaborate closely with UI/UX designers, product managers, and backend engineers to translate Figma designs into pixel-perfect web pages.",
      "Optimize web pages for maximum performance, cross-browser compatibility, and search engine crawlability.",
      "Conduct code reviews, write unit tests, and maintain comprehensive technical documentation for front-end workflows."
    ],
    requiredSkills: ["JavaScript (ES6+)", "HTML5 & CSS3", "Responsive Design", "Git", "REST APIs", "Web Accessibility (WCAG)"],
    qualifications: [
      "B.Tech / B.E. in Computer Science, Information Technology, or equivalent practical experience.",
      "Minimum 3 years of hands-on experience in building modern web interfaces.",
      "Solid understanding of DOM manipulation, asynchronous programming, and CSS layout engines (Flexbox, Grid)."
    ],
    preferredExperience: [
      "Experience with frontend performance benchmarking, Lighthouse audits, and asset optimization.",
      "Exposure to CI/CD pipelines and agile sprint environments."
    ],
    applicationInstructions: "Submit your profile and updated resume through our candidate registration portal or click Apply Now below to begin our verified screening process."
  },
  {
    id: "software-tester-02",
    title: "Software Tester / QA Engineer",
    employer: "Demo Employer - Cloud FinTech",
    industry: "Information Technology",
    location: "Bengaluru, Karnataka (On-site)",
    city: "Bengaluru",
    type: "Full-Time",
    experience: "2 - 4 Years",
    salary: "₹6,00,000 - ₹9,50,000 P.A.",
    salaryMin: 6,
    salaryMax: 9.5,
    posted: "2 days ago",
    overview: "Looking for an analytical Software Quality Assurance Specialist to execute functional, regression, API, and automation test suites for cloud-based payment modules.",
    responsibilities: [
      "Design detailed test scenarios, test plans, and defect reports based on system software specifications.",
      "Execute manual and automated test suites across multi-platform environments.",
      "Track, isolate, and log bug tickets with detailed replication steps in project tracking software.",
      "Collaborate with development teams to verify issue resolutions and execute pre-release regression passes."
    ],
    requiredSkills: ["Manual Testing", "Test Automation", "Selenium", "API Testing (Postman)", "SQL Queries", "Defect Tracking"],
    qualifications: [
      "Bachelor's degree in Computer Science, Engineering, or relevant technical field.",
      "2+ years of continuous experience in web application and API quality testing.",
      "ISTQB Certified Tester Foundation Level (CTFL) is an advantage."
    ],
    preferredExperience: [
      "Familiarity with financial technology standards and security validation.",
      "Experience writing automated scripts in Python or Java."
    ],
    applicationInstructions: "Apply directly through our talent portal to schedule an initial technical screening conversation with our talent acquisition team."
  },
  {
    id: "hr-executive-03",
    title: "HR Executive - Talent & Operations",
    employer: "Demo Employer - Enterprise Services",
    industry: "Human Resources",
    location: "Hyderabad, Telangana (On-site)",
    city: "Hyderabad",
    type: "Full-Time",
    experience: "1 - 3 Years",
    salary: "₹4,50,000 - ₹6,50,000 P.A.",
    salaryMin: 4.5,
    salaryMax: 6.5,
    posted: "3 days ago",
    overview: "Seeking a proactive Human Resources Executive to manage end-to-end recruitment coordination, onboarding logistics, employee documentation, and workplace operations.",
    responsibilities: [
      "Manage end-to-end candidate pipeline logistics, interview scheduling, and feedback collation.",
      "Facilitate employee onboarding, document verification, and introductory workplace orientation.",
      "Maintain HRMIS databases, leave records, attendance logs, and statutory compliance documentation.",
      "Support HR business partners in executing employee engagement initiatives and retention surveys."
    ],
    requiredSkills: ["HR Coordination", "Candidate Screening", "HRIS Management", "Onboarding", "Employee Relations", "Communication"],
    qualifications: [
      "MBA or Post Graduate Diploma in Human Resource Management, or relevant bachelor's degree.",
      "1 to 3 years of demonstrated HR executive or talent sourcing experience.",
      "Strong verbal and written English communication skills."
    ],
    preferredExperience: [
      "Experience with modern Applicant Tracking Systems (ATS) and background check protocols.",
      "Proficiency in Microsoft Excel / Google Sheets for HR reporting."
    ],
    applicationInstructions: "Register your profile and upload your resume via our online registration page to be considered for our partner hiring drives."
  },
  {
    id: "digital-marketing-04",
    title: "Digital Marketing Executive",
    employer: "Demo Employer - E-Commerce Retail",
    industry: "Sales and Marketing",
    location: "Mumbai, Maharashtra (Hybrid)",
    city: "Mumbai",
    type: "Full-Time",
    experience: "2 - 5 Years",
    salary: "₹5,50,000 - ₹8,50,000 P.A.",
    salaryMin: 5.5,
    salaryMax: 8.5,
    posted: "4 days ago",
    overview: "An established retail consumer brand is seeking an energetic Digital Marketing Executive to plan, execute, and monitor digital campaigns across search, social, and email channels.",
    responsibilities: [
      "Execute organic SEO audits, on-page optimization, keyword clustering, and link building.",
      "Manage and optimize paid search (Google Ads) and paid social ad campaigns within budgeted ROI targets.",
      "Create engaging social media calendars, campaign copy, and monthly analytics performance reports.",
      "Monitor conversion funnels, CTRs, and CAC using Google Analytics 4 and advertising dashboards."
    ],
    requiredSkills: ["SEO Optimization", "Google Ads", "Social Media Marketing", "Google Analytics 4", "Content Strategy", "Email Automation"],
    qualifications: [
      "Bachelor's degree in Marketing, Mass Media, Business Administration, or related discipline.",
      "2+ years of hands-on experience handling multi-channel digital campaigns.",
      "Google Ads or Meta Certified Media Associate certification is preferred."
    ],
    preferredExperience: [
      "Prior experience in B2C e-commerce marketing and customer retention workflows.",
      "Basic understanding of HTML/CSS for landing page tweaking."
    ],
    applicationInstructions: "Interested candidates can click Apply Now to share their campaign portfolio and resume with our recruitment team."
  },
  {
    id: "accountant-05",
    title: "Senior Accountant - Corporate Finance",
    employer: "Demo Employer - Manufacturing Group",
    industry: "Banking and Finance",
    location: "Pune, Maharashtra (On-site)",
    city: "Pune",
    type: "Full-Time",
    experience: "4 - 7 Years",
    salary: "₹7,00,000 - ₹10,50,000 P.A.",
    salaryMin: 7,
    salaryMax: 10.5,
    posted: "Just now",
    overview: "Looking for an experienced Senior Accountant to oversee daily accounting operations, statutory GST filing, TDS deductions, ledger reconciliations, and quarterly financial audits.",
    responsibilities: [
      "Prepare monthly balance sheets, profit and loss statements, and bank reconciliation statements.",
      "Ensure timely computation and statutory filing of GST, TDS, EPF, and corporate tax returns.",
      "Coordinate with internal and external auditors during annual and quarterly statutory reviews.",
      "Manage vendor payouts, accounts payable, accounts receivable, and purchase order audits."
    ],
    requiredSkills: ["Tally Prime / ERP", "GST & TDS Compliance", "Financial Reporting", "Ledger Reconciliation", "Internal Audit", "MS Excel"],
    qualifications: [
      "B.Com / M.Com / Inter CA / CMA with strong grasp of Indian accounting standards (Ind AS).",
      "4+ years of proven accounting experience within manufacturing or trading corporate firms."
    ],
    preferredExperience: [
      "Experience with ERP systems such as SAP FICO or Oracle Financials.",
      "Strong expertise with advanced Excel functions (VLOOKUP, Pivot tables, Financial models)."
    ],
    applicationInstructions: "Submit your candidature via our application form for an initial consultation with our finance recruitment consultants."
  },
  {
    id: "business-development-06",
    title: "Business Development Executive (B2B)",
    employer: "Demo Employer - SaaS Tech",
    industry: "Sales and Marketing",
    location: "Delhi NCR (Gurugram) (Hybrid)",
    city: "Delhi NCR",
    type: "Full-Time",
    experience: "2 - 5 Years",
    salary: "₹6,50,000 - ₹11,00,000 P.A. + Incentives",
    salaryMin: 6.5,
    salaryMax: 11,
    posted: "1 day ago",
    overview: "Join an expanding enterprise SaaS provider as a Business Development Executive focused on outbound client prospecting, demo presentations, and consultative enterprise sales.",
    responsibilities: [
      "Generate new qualified business leads through cold outreach, LinkedIn prospecting, and industry networks.",
      "Conduct discovery calls with VP and CXO level prospects to understand enterprise operational pain points.",
      "Deliver tailored product demonstrations and prepare customized commercial proposals.",
      "Manage deal pipeline stages through CRM software and achieve quarterly closed revenue targets."
    ],
    requiredSkills: ["B2B Sales", "Lead Generation", "Client Pitching", "CRM Management", "Contract Negotiation", "Market Research"],
    qualifications: [
      "Graduate or Post Graduate in Business Management, Marketing, or Engineering.",
      "2+ years of B2B sales or business development track record in tech or consulting."
    ],
    preferredExperience: [
      "Proven track record of quota attainment in software or corporate services.",
      "Excellent executive communication and presentation delivery."
    ],
    applicationInstructions: "Register on our portal with your updated sales track record and CV for an expedited screening interview."
  },
  {
    id: "mechanical-engineer-07",
    title: "Mechanical Design Engineer",
    employer: "Demo Employer - Precision Engineering",
    industry: "Engineering",
    location: "Chennai, Tamil Nadu (On-site)",
    city: "Chennai",
    type: "Full-Time",
    experience: "3 - 6 Years",
    salary: "₹6,00,000 - ₹9,00,000 P.A.",
    salaryMin: 6,
    salaryMax: 9,
    posted: "5 days ago",
    overview: "Seeking a qualified Mechanical Design Engineer to design, model, and simulate mechanical components, precision tooling, and automation machinery assemblies.",
    responsibilities: [
      "Create 3D CAD models, detailed fabrication drawings, and GD&T specifications for mechanical assemblies.",
      "Perform finite element analysis (FEA), stress checks, and thermal calculations on custom fixtures.",
      "Collaborate with shop-floor manufacturing and procurement teams to validate prototype feasibility.",
      "Maintain Engineering Change Orders (ECO) and Bill of Materials (BOM) documentation."
    ],
    requiredSkills: ["SolidWorks / AutoCAD", "GD&T", "FEA Analysis", "BOM Management", "Prototyping", "Design for Manufacturing (DFM)"],
    qualifications: [
      "B.E. / B.Tech in Mechanical or Automobile Engineering from an accredited institution.",
      "3+ years of professional CAD modeling and mechanical fabrication experience."
    ],
    preferredExperience: [
      "Knowledge of sheet metal design and plastic injection molding constraints.",
      "Familiarity with ISO 9001 and automotive manufacturing standards."
    ],
    applicationInstructions: "Click Apply Now to upload your resume and component design portfolio for evaluation."
  },
  {
    id: "customer-support-08",
    title: "Customer Support Executive - Enterprise Clients",
    employer: "Demo Employer - Healthcare Tech",
    industry: "Operations",
    location: "Hyderabad, Telangana (Remote / Hybrid)",
    city: "Hyderabad",
    type: "Full-Time",
    experience: "1 - 3 Years",
    salary: "₹4,00,000 - ₹5,50,000 P.A.",
    salaryMin: 4,
    salaryMax: 5.5,
    posted: "3 days ago",
    overview: "Provide courteous, proactive, and accurate support assistance to enterprise healthcare clients, answering inquiries via ticketing, live chat, and voice calls.",
    responsibilities: [
      "Respond to client tickets, system inquiries, and onboarding queries within established SLAs.",
      "Troubleshoot basic portal access issues and escalate technical bugs to Tier 2 engineering teams.",
      "Maintain helpful, empathetic, and professional communication across all support interactions.",
      "Document frequently asked questions into internal knowledge base articles and client user guides."
    ],
    requiredSkills: ["Customer Service", "Ticketing Tools (Zendesk / Freshdesk)", "Active Listening", "Problem Solving", "CRM", "Email Etiquette"],
    qualifications: [
      "Bachelor's degree in any stream with high English communication proficiency.",
      "1 to 3 years of customer success or support center experience in a corporate environment."
    ],
    preferredExperience: [
      "Prior exposure to healthcare informatics, SaaS, or clinical helpdesks.",
      "Ability to work in rotational day/evening shifts as per operational rosters."
    ],
    applicationInstructions: "Submit your application to participate in our weekend interview drive for enterprise customer support roles."
  },
  {
    id: "executive-search-lead-09",
    title: "Senior Vice President - Healthcare Operations",
    employer: "Demo Employer - Hospital Network",
    industry: "Healthcare",
    location: "Hyderabad, Telangana (On-site)",
    city: "Hyderabad",
    type: "Full-Time",
    experience: "12 - 16 Years",
    salary: "₹30,00,000 - ₹45,00,000 P.A.",
    salaryMin: 30,
    salaryMax: 45,
    posted: "1 week ago",
    overview: "An executive leadership opportunity for an experienced healthcare administrator to spearhead hospital operations, clinical quality standards, and multi-facility growth across South India.",
    responsibilities: [
      "Direct multi-hospital healthcare facility operations, operational budgets, and clinical infrastructure expansion.",
      "Ensure adherence to national and international healthcare accreditations (NABH, JCI).",
      "Drive continuous clinical process improvements, patient satisfaction scores, and medical talent retention.",
      "Advise the board on strategic joint ventures, medical equipment capital expenditure, and institutional governance."
    ],
    requiredSkills: ["Healthcare Management", "Executive Leadership", "Hospital Operations", "NABH Accreditation", "P&L Management", "Strategic Planning"],
    qualifications: [
      "Master's in Hospital Administration (MHA) / MBA in Healthcare Management / MBBS + Management Degree.",
      "12+ years of senior administrative leadership experience in large multispecialty hospitals."
    ],
    preferredExperience: [
      "Track record of successfully commissioning new tertiary care facilities.",
      "Strong relationships with medical councils and regulatory authorities."
    ],
    applicationInstructions: "This is a confidential executive search role. Please contact our Executive Search Practice through our employer solutions channel for a confidential briefing."
  },
  {
    id: "contract-data-analyst-10",
    title: "Data & BI Analyst (Contract Staffing)",
    employer: "Demo Employer - Global Analytics Hub",
    industry: "Information Technology",
    location: "Bengaluru, Karnataka (Remote)",
    city: "Bengaluru",
    type: "Contract",
    experience: "2 - 5 Years",
    salary: "₹7,50,000 - ₹11,00,000 P.A. (6-Month Renewable)",
    salaryMin: 7.5,
    salaryMax: 11,
    posted: "2 days ago",
    overview: "A 6-month contract staffing assignment (extendable) for an analytical Data Specialist to construct Power BI dashboards, analyze consumer metrics, and write automated SQL queries.",
    responsibilities: [
      "Extract, clean, and transform structured operational data from data warehouses using advanced SQL.",
      "Design interactive and automated Power BI and Tableau dashboards for leadership review.",
      "Identify operational anomalies, sales trends, and customer lifecycle insights.",
      "Collaborate with database administrators to maintain data integrity and semantic reporting layers."
    ],
    requiredSkills: ["SQL Queries", "Power BI / Tableau", "Python / R", "Data Modeling", "ETL Pipelines", "Business Intelligence"],
    qualifications: [
      "B.Sc / B.Tech in Mathematics, Statistics, Computer Science, or Data Science.",
      "2+ years of proven data visualization and business intelligence reporting experience."
    ],
    preferredExperience: [
      "Experience with Snowflake or BigQuery data warehouses.",
      "Understanding of statistical hypothesis testing and cohort analysis."
    ],
    applicationInstructions: "Apply to secure rapid deployment through our contract staffing wing with full benefits and continuity support."
  }
];

// Helper Functions
function getAllJobs() {
  return DEMO_JOBS;
}

function getJobById(id) {
  return DEMO_JOBS.find(job => job.id === id);
}

// Generate single job card HTML markup
function createJobCardHTML(job) {
  return `
    <article class="job-card" data-job-id="${job.id}">
      <div class="job-card-header">
        <div class="job-card-badge-group">
          <span class="badge badge-industry">${job.industry}</span>
          <span class="badge badge-type">${job.type}</span>
        </div>
        <span class="job-posted-time">${job.posted}</span>
      </div>
      <h3 class="job-card-title">
        <a href="job-details.html?id=${encodeURIComponent(job.id)}">${job.title}</a>
      </h3>
      <p class="job-card-employer">
        <svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M6 11h2M6 15h2M10 11h2M10 15h2M14 11h2M14 15h2M6 7V3h12v4"/></svg>
        ${job.employer}
      </p>
      <div class="job-card-meta">
        <div class="meta-item">
          <svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>${job.location}</span>
        </div>
        <div class="meta-item">
          <svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
          <span>Exp: ${job.experience}</span>
        </div>
        <div class="meta-item meta-salary">
          <svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          <span>${job.salary}</span>
        </div>
      </div>
      <p class="job-card-summary">${job.overview}</p>
      <div class="job-card-tags">
        ${job.requiredSkills.slice(0, 3).map(skill => `<span class="tag-pill">${skill}</span>`).join('')}
        ${job.requiredSkills.length > 3 ? `<span class="tag-pill more-tag">+${job.requiredSkills.length - 3} more</span>` : ''}
      </div>
      <div class="job-card-footer">
        <a href="job-details.html?id=${encodeURIComponent(job.id)}" class="btn btn-outline btn-sm">View Details</a>
        <a href="job-details.html?id=${encodeURIComponent(job.id)}#apply-section" class="btn btn-primary btn-sm">Apply Now</a>
      </div>
    </article>
  `;
}

// Initializer for Homepage Featured Jobs
function initHomeFeaturedJobs() {
  const container = document.getElementById("featured-jobs-container");
  if (!container) return;

  // Display 6 jobs on homepage
  const featured = DEMO_JOBS.slice(0, 6);
  container.innerHTML = featured.map(createJobCardHTML).join('');
}

// Initializer for Browse Jobs Page
function initBrowseJobsPage() {
  const jobsListContainer = document.getElementById("jobs-list-container");
  if (!jobsListContainer) return;

  const countDisplay = document.getElementById("jobs-count-display");
  const keywordInput = document.getElementById("filter-keyword");
  const locationSelect = document.getElementById("filter-location");
  const industrySelect = document.getElementById("filter-industry");
  const typeSelect = document.getElementById("filter-type");
  const salarySelect = document.getElementById("filter-salary");
  const clearBtn = document.getElementById("clear-all-filters");
  const filterForm = document.getElementById("jobs-filter-form");

  // Read URL params if redirected from homepage search bar
  const urlParams = new URLSearchParams(window.location.search);
  const paramKeyword = urlParams.get("keyword") || "";
  const paramLocation = urlParams.get("location") || "";
  const paramIndustry = urlParams.get("industry") || "";

  if (paramKeyword && keywordInput) keywordInput.value = paramKeyword;
  if (paramLocation && locationSelect) locationSelect.value = paramLocation;
  if (paramIndustry && industrySelect) industrySelect.value = paramIndustry;

  function applyFilters() {
    const keyword = (keywordInput ? keywordInput.value : "").trim().toLowerCase();
    const location = (locationSelect ? locationSelect.value : "").trim().toLowerCase();
    const industry = (industrySelect ? industrySelect.value : "").trim().toLowerCase();
    const type = (typeSelect ? typeSelect.value : "").trim().toLowerCase();
    const salary = (salarySelect ? salarySelect.value : "").trim();

    const filtered = DEMO_JOBS.filter(job => {
      // Keyword match in title, skills, or overview
      if (keyword) {
        const titleMatch = job.title.toLowerCase().includes(keyword);
        const descMatch = job.overview.toLowerCase().includes(keyword);
        const skillMatch = job.requiredSkills.some(s => s.toLowerCase().includes(keyword));
        if (!titleMatch && !descMatch && !skillMatch) return false;
      }

      // Location match
      if (location && location !== "all") {
        if (!job.location.toLowerCase().includes(location) && !job.city.toLowerCase().includes(location)) {
          return false;
        }
      }

      // Industry match
      if (industry && industry !== "all") {
        if (!job.industry.toLowerCase().includes(industry)) {
          return false;
        }
      }

      // Employment type match
      if (type && type !== "all") {
        if (!job.type.toLowerCase().includes(type)) {
          return false;
        }
      }

      // Salary match
      if (salary && salary !== "all") {
        if (salary === "0-6" && job.salaryMin > 6) return false;
        if (salary === "6-10" && (job.salaryMax < 6 || job.salaryMin > 10)) return false;
        if (salary === "10-20" && (job.salaryMax < 10 || job.salaryMin > 20)) return false;
        if (salary === "20+" && job.salaryMax < 20) return false;
      }

      return true;
    });

    // Update count display
    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${DEMO_JOBS.length} available opportunities`;
    }

    // Render list or empty state
    if (filtered.length === 0) {
      jobsListContainer.innerHTML = `
        <div class="empty-state-card">
          <div class="empty-state-icon">
            <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          </div>
          <h3>No matching job opportunities found</h3>
          <p>Try modifying your search keywords, broadening your location, or clearing applied filters to view more positions.</p>
          <button type="button" id="reset-filter-btn" class="btn btn-secondary mt-3">Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-filter-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          if (filterForm) filterForm.reset();
          applyFilters();
        });
      }
    } else {
      jobsListContainer.innerHTML = filtered.map(createJobCardHTML).join('');
    }
  }

  // Attach event listeners
  if (filterForm) {
    filterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      applyFilters();
    });
  }

  if (keywordInput) keywordInput.addEventListener("input", applyFilters);
  if (locationSelect) locationSelect.addEventListener("change", applyFilters);
  if (industrySelect) industrySelect.addEventListener("change", applyFilters);
  if (typeSelect) typeSelect.addEventListener("change", applyFilters);
  if (salarySelect) salarySelect.addEventListener("change", applyFilters);

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (filterForm) filterForm.reset();
      applyFilters();
    });
  }

  // Initial render
  applyFilters();
}

// Initializer for Job Details Page
function initJobDetailsPage() {
  const container = document.getElementById("job-details-content");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get("id");
  const job = getJobById(jobId);

  if (!job) {
    container.innerHTML = `
      <div class="fallback-job-box card">
        <div class="fallback-icon">
          <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="#2864A5" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <h2>Job Position Not Found or Inactive</h2>
        <p>The job opportunity you are looking for may have been filled, updated, or the link provided is incomplete.</p>
        <div class="fallback-actions mt-4">
          <a href="jobs.html" class="btn btn-primary">Browse All Open Jobs</a>
          <a href="index.html" class="btn btn-secondary">Return to Homepage</a>
        </div>
      </div>
    `;
    return;
  }

  // Set document title dynamically
  document.title = `${job.title} - RECRUITMENT AGENCY`;

  // Render Full Job Details
  container.innerHTML = `
    <div class="job-details-grid">
      <!-- Main Content Column -->
      <div class="job-details-main">
        <div class="job-details-header card">
          <div class="job-header-badges">
            <span class="badge badge-industry">${job.industry}</span>
            <span class="badge badge-type">${job.type}</span>
            <span class="job-posted-time">Posted ${job.posted}</span>
          </div>
          <h1 class="job-details-title">${job.title}</h1>
          <p class="job-employer-name">
            <svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M6 11h2M6 15h2M10 11h2M10 15h2M14 11h2M14 15h2M6 7V3h12v4"/></svg>
            ${job.employer} <span class="text-muted">(Fictional Client Profile)</span>
          </p>

          <div class="job-meta-grid">
            <div class="job-meta-card">
              <span class="meta-label">Location</span>
              <span class="meta-val">${job.location}</span>
            </div>
            <div class="job-meta-card">
              <span class="meta-label">Experience Required</span>
              <span class="meta-val">${job.experience}</span>
            </div>
            <div class="job-meta-card">
              <span class="meta-label">Offered Salary</span>
              <span class="meta-val text-primary font-bold">${job.salary}</span>
            </div>
            <div class="job-meta-card">
              <span class="meta-label">Employment Type</span>
              <span class="meta-val">${job.type}</span>
            </div>
          </div>

          <div class="job-header-actions">
            <a href="#apply-section" class="btn btn-primary btn-lg">Apply for this Position</a>
            <a href="jobs.html" class="btn btn-outline btn-lg">Back to Job Listings</a>
          </div>
        </div>

        <!-- Section: Overview -->
        <section class="job-section card mt-4">
          <h2 class="section-subheading">Job Overview</h2>
          <p class="leading-relaxed">${job.overview}</p>
        </section>

        <!-- Section: Key Responsibilities -->
        <section class="job-section card mt-4">
          <h2 class="section-subheading">Key Responsibilities</h2>
          <ul class="styled-checklist">
            ${job.responsibilities.map(r => `<li><span class="check-bullet">✓</span> <span>${r}</span></li>`).join('')}
          </ul>
        </section>

        <!-- Section: Required Skills & Qualifications -->
        <section class="job-section card mt-4">
          <h2 class="section-subheading">Required Skills & Competencies</h2>
          <div class="skill-pills-wrap mb-4">
            ${job.requiredSkills.map(skill => `<span class="tag-pill tag-pill-lg">${skill}</span>`).join('')}
          </div>

          <h3 class="subsection-title">Minimum Educational & Professional Qualifications</h3>
          <ul class="styled-checklist">
            ${job.qualifications.map(q => `<li><span class="check-bullet">✓</span> <span>${q}</span></li>`).join('')}
          </ul>

          <h3 class="subsection-title mt-4">Preferred Experience</h3>
          <ul class="styled-checklist">
            ${job.preferredExperience.map(p => `<li><span class="check-bullet">✓</span> <span>${p}</span></li>`).join('')}
          </ul>
        </section>

        <!-- Section: Application Section -->
        <section id="apply-section" class="job-section card mt-4">
          <h2 class="section-subheading">Application Instructions</h2>
          <p class="leading-relaxed mb-4">${job.applicationInstructions}</p>
          
          <div class="apply-notice-box">
            <svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <div>
              <strong>Demonstration Notice:</strong> Submitting this application verifies your frontend interaction within this portfolio website. No external records are stored.
            </div>
          </div>

          <!-- Application Form -->
          <form id="job-quick-apply-form" class="job-apply-form mt-4" novalidate>
            <input type="hidden" name="applied_job_id" value="${job.id}">
            <input type="hidden" name="applied_job_title" value="${job.title}">
            
            <div class="form-grid">
              <div class="form-group">
                <label for="apply-name">Full Name <span class="required">*</span></label>
                <input type="text" id="apply-name" name="name" class="form-control" placeholder="Enter your full name" required>
                <div class="invalid-feedback">Please enter your full name.</div>
              </div>
              <div class="form-group">
                <label for="apply-email">Email Address <span class="required">*</span></label>
                <input type="email" id="apply-email" name="email" class="form-control" placeholder="name@example.com" required>
                <div class="invalid-feedback">Please enter a valid email address.</div>
              </div>
            </div>

            <div class="form-grid">
              <div class="form-group">
                <label for="apply-phone">Phone Number <span class="required">*</span></label>
                <input type="tel" id="apply-phone" name="phone" class="form-control" placeholder="+91 90000 00000" required>
                <div class="invalid-feedback">Please enter a valid phone number.</div>
              </div>
              <div class="form-group">
                <label for="apply-experience">Total Experience <span class="required">*</span></label>
                <select id="apply-experience" name="experience" class="form-control" required>
                  <option value="">Select experience level</option>
                  <option value="Fresher (0-1 year)">Fresher (0-1 year)</option>
                  <option value="1 - 3 Years">1 - 3 Years</option>
                  <option value="3 - 5 Years">3 - 5 Years</option>
                  <option value="5 - 8 Years">5 - 8 Years</option>
                  <option value="8+ Years">8+ Years</option>
                </select>
                <div class="invalid-feedback">Please select your experience level.</div>
              </div>
            </div>

            <div class="form-group">
              <label for="apply-resume">Attach Resume (PDF, DOC, DOCX - Demo Only) <span class="required">*</span></label>
              <div class="file-upload-wrapper">
                <input type="file" id="apply-resume" name="resume" class="file-input" accept=".pdf,.doc,.docx" required>
                <div class="file-upload-box">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                  <span class="file-label-text">Click to choose a file or drag and drop</span>
                  <span class="file-chosen-name" id="apply-file-name">No file selected (Demonstration)</span>
                </div>
              </div>
              <div class="invalid-feedback">Please choose a resume file to test the demonstration.</div>
            </div>

            <div class="form-group">
              <label for="apply-notes">Cover Note or Message (Optional)</label>
              <textarea id="apply-notes" name="notes" rows="3" class="form-control" placeholder="Briefly mention why you are suitable for this role..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg mt-3">Submit Demonstration Application</button>
          </form>
        </section>
      </div>

      <!-- Sidebar Column -->
      <aside class="job-details-sidebar">
        <div class="sidebar-widget card">
          <h3 class="widget-title">Agency Hiring Guarantee</h3>
          <p class="text-sm text-muted mb-3">Our recruitment process is completely free for candidates. We connect verified professionals with top companies across India.</p>
          <ul class="sidebar-feature-list">
            <li><span>✓</span> Verified employer requirement</li>
            <li><span>✓</span> Structured feedback at every stage</li>
            <li><span>✓</span> Zero candidate consultation fees</li>
            <li><span>✓</span> Confidential profile management</li>
          </ul>
        </div>

        <div class="sidebar-widget card mt-4">
          <h3 class="widget-title">Need Career Guidance?</h3>
          <p class="text-sm text-muted mb-3">Explore our professional resources to prepare for interviews and elevate your resume presentation.</p>
          <div class="sidebar-btn-group">
            <a href="interview-preparation.html" class="btn btn-outline btn-sm btn-block">Interview Preparation Guide</a>
            <a href="resume-tips.html" class="btn btn-outline btn-sm btn-block mt-2">Resume Writing Tips</a>
            <a href="resources.html" class="btn btn-secondary btn-sm btn-block mt-2">Career Resources Hub</a>
          </div>
        </div>

        <div class="sidebar-widget card mt-4 bg-soft-sky">
          <h3 class="widget-title">Are You an Employer?</h3>
          <p class="text-sm text-muted mb-3">Need to fill similar positions within your organization? Explore our specialized recruitment solutions.</p>
          <a href="employers.html" class="btn btn-primary btn-sm btn-block">Explore Employer Solutions</a>
        </div>
      </aside>
    </div>
  `;

  // Attach File Preview handler
  const fileInput = document.getElementById("apply-resume");
  const fileNameDisplay = document.getElementById("apply-file-name");
  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        fileNameDisplay.textContent = `Selected: ${e.target.files[0].name} (${(e.target.files[0].size / 1024).toFixed(1)} KB)`;
        fileNameDisplay.classList.add("file-selected");
      } else {
        fileNameDisplay.textContent = "No file selected (Demonstration)";
        fileNameDisplay.classList.remove("file-selected");
      }
    });
  }

  // Attach Quick Apply Form Handler
  const quickApplyForm = document.getElementById("job-quick-apply-form");
  if (quickApplyForm) {
    quickApplyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById("apply-name");
      const emailInput = document.getElementById("apply-email");
      const phoneInput = document.getElementById("apply-phone");
      const expInput = document.getElementById("apply-experience");
      const fileInp = document.getElementById("apply-resume");

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add("is-invalid");
        isValid = false;
      } else {
        nameInput.classList.remove("is-invalid");
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add("is-invalid");
        isValid = false;
      } else {
        emailInput.classList.remove("is-invalid");
      }

      // Validate Phone
      if (!phoneInput.value.trim() || phoneInput.value.trim().length < 8) {
        phoneInput.classList.add("is-invalid");
        isValid = false;
      } else {
        phoneInput.classList.remove("is-invalid");
      }

      // Validate Exp
      if (!expInput.value) {
        expInput.classList.add("is-invalid");
        isValid = false;
      } else {
        expInput.classList.remove("is-invalid");
      }

      // Validate file
      if (!fileInp.files || fileInp.files.length === 0) {
        fileInp.classList.add("is-invalid");
        isValid = false;
      } else {
        fileInp.classList.remove("is-invalid");
      }

      if (!isValid) return;

      // Show Success Modal / Alert
      if (window.showDemoAlert) {
        window.showDemoAlert(
          "Application Submitted Successfully (Demo)",
          `Thank you, ${nameInput.value.trim()}! Your demonstration application for "${job.title}" at ${job.employer} has been recorded locally. In a production environment, our talent specialists would review your profile and contact you within 48 hours.`
        );
      } else {
        alert(`Demonstration application for "${job.title}" submitted successfully!`);
      }

      quickApplyForm.reset();
      if (fileNameDisplay) {
        fileNameDisplay.textContent = "No file selected (Demonstration)";
        fileNameDisplay.classList.remove("file-selected");
      }
    });
  }
}

// Global DOM Ready for Jobs
document.addEventListener("DOMContentLoaded", () => {
  initHomeFeaturedJobs();
  initBrowseJobsPage();
  initJobDetailsPage();
});
