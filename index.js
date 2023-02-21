window.onload = function () {

// LOCAL STORAGE
let username = localStorage.getItem("id");
document.getElementById("username").innerHTML = "personal infomation " + username;

// Personal information
let myInfo = new Array ()
const firstName = "Lucky";
const lastName = "Hlongwane";
const bio = "I'm a full-stack web developer with a passion for building responsive and dynamic web applications.";
const education = [
  {
    certficate: "IT Systems Support",
    institution: "Thasululo FET Colledge",
    year: "2012"
  },
  {
    Certificate: "Microsoft Dynamics CRM",
    institution: "Microsoft CRM academy",
    year: "2016"
  }
];
const contactInfo = {
  email: "lhlongwane@gmail.com",
  phone: "0670962825",
  address: "11 seekoei street, Elandsfontein, Germiston, 1601"
};

// Projects
const projects = [
  {
    name: "project 1",
    Discription: "This is description of project 1"
  },

  {
    name: "project 2",
    Discription: "This is description of project 2"
  },

  {
    name: "project 3",
    Discription: "This is description of project 3"
  },
];

};
