// COURSE DATA
const courses = {

  computer_packages: {
    title: "Computer Packages",
    units: [
      "CP101 - Introduction to Computers",
      "CP102 - Microsoft Word",
      "CP103 - Microsoft Excel",
      "CP104 - Microsoft PowerPoint",
      "CP105 - Internet & Email Applications",
      "CP106 - Computer Operating Systems",
      "CP107 - Data Entry & Typing Skills",
      "CP108 - Computer Maintenance Basics"
    ]
  },

  agro_entrepreneurship: {
    title: "Agro Entrepreneurship",
    units: [
      "AE101 - Introduction to Agriculture",
      "AE102 - Agribusiness Management",
      "AE103 - Farm Record Keeping",
      "AE104 - Crop Production Techniques",
      "AE105 - Livestock Management",
      "AE106 - Agricultural Marketing",
      "AE107 - Financial Management for Farmers",
      "AE108 - Sustainable Farming Practices"
    ]
  },

  smartphone_literacy: {
    title: "Smartphone Literacy",
    units: [
      "SL101 - Introduction to Smartphones",
      "SL102 - Android Phone Basics",
      "SL103 - Internet Browsing & Google Services",
      "SL104 - Social Media Applications",
      "SL105 - Mobile Money & Digital Payments",
      "SL106 - Smartphone Security & Privacy",
      "SL107 - Photography & Video Basics",
      "SL108 - Online Communication Skills"
    ]
  },

  ict_short_courses: {
    title: "ICT Short Courses",
    units: [
      "ICT101 - Introduction to ICT",
      "ICT102 - Networking Fundamentals",
      "ICT103 - Web Design Basics",
      "ICT104 - Graphic Design Essentials",
      "ICT105 - Database Management",
      "ICT106 - Cybersecurity Basics",
      "ICT107 - Programming Fundamentals",
      "ICT108 - Digital Marketing"
    ]
  }

};

// OPEN SELECTED COURSE
function openUnits(courseName){

  localStorage.setItem("selectedCourse", courseName);

  window.location.href = "units.html";
}

// LOAD ONLY SELECTED COURSE
window.onload = function(){

  const selectedCourse = localStorage.getItem("selectedCourse");

  const course = courses[selectedCourse];

  if(!course) return;

  document.getElementById("courseTitle").innerText = course.title;

  const unitsContainer = document.getElementById("unitsContainer");

  course.units.forEach(unit => {

    const li = document.createElement("li");

    li.innerText = unit;

    unitsContainer.appendChild(li);

  });

};