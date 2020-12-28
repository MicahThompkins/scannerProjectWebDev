var titles_arr = ["Pattonville App Capstone Project", "Go Tournament Administrator", "Network Scanner", "Reliable Transport Streamer over UDP"]
var app_desc_arr =["Over the course of one year I worked with seven other students to produce two apps, one for iOS and one for Android. We split into iOS and Android teams at the beginning of the year, but worked closely together to ensure similar design, within the given design standards of the two platforms, and features.  The year before we had all taken a class on Android development so we had learned the basics of mobile development and Android Development.  As a member of the iOS team I had to teach myself Swift in order to be able to develop for iOS as part of this project. ", "Throughout the course of the year we used principles from Agile development to produce features by deadlines. We met with our client, the board of education multiple times to present, and sent out surveys to parents, students and teachers about what features they wanted. We also formed a group of Alpha testers to test our app through various stages and give us feedback. As we continued to work we next released a semi-open beta, taking in feedback to figure out what features worked well and what didn’t and improving upon our design. Finally at the end of the year we held an open launch party for our app and presented on the process. ","I was a developer on the iOS team and the Documentation Lead. I worked to add data persistence across the app about which schools people needed to receive information from as well as created the calendar interface, among many other little tweaks. I also led the team in documenting our code and writing clean, reusable, readable code, in case another capstone group were to come along and maintain our project. "]
var go_desc_arr = ["In Software Construction I worked with a partner over the course of the quarter to build a Go tournament administrator. Go is the abstract strategy board game where the goal is to use stones to surround more territory than your opponent. We used pair programming to build this project, programming primarily on one computer and discussing our code choices step by step as we did so. We built the entire project from scratch, first starting with the point and stone objects before growing the project to the boards objects, the rule checker, the game referee, and finally the tournament administrator. Throughout the quarter we gave multiple code walks to our class explaining and defending our code choice to the professor and our fellow students. Our final project had a visual component, as well as the ability to run a tournament comprised of local and remote players. We presented our final project to our professor giving one last final code walk discussing the entire breadth of our project.", "In this project I learned a lot about modular code design and the importance and effectiveness of Unit testing. Because this was a project that started small and grew rather large we had to design our code in a very modular and scalable way with frequent testing in order to ensure all the moving pieces worked together well. Additionally as an added challenge our professors had us switch partners half way through, as part of this process we had to decide which code base to use, and what elements we wanted to take from the other unchosen base. All in all this project gave me a lot of skills and practice that I believe I can apply to the workforce.", ""]
var scanner_desc_arr = ["In my Introduction to Networking class we built a network scanner that given a list of domains would return information about the network. For this project I used Python 3, working within virtual environments and creating code that could be downloaded and ran on any machine through use of a pip requirements file. The scanner utilizes command line tools to do most of its lookups, and if the host machine is missing one of those command line tools the scanner still operates with graceful error handling.", "", ""]
var tcp_desc_arr = ["In my Introduction to Networking class we built a reliable streaming transport protocol on top of UDP. It was a simplified version of TCP. We wrote code to break the data into chunks, code to handle the reordering of out of order packets, and we also used acknowledgments and pipelining to handle packet loss. Finally we wrote code to handle corruption errors. At the end we had a simplified version of TCP that we could use to transfer data. I learned a lot about concurrency issues and how to design code to avoid deadlock doing this project. ", "", ""]
var descriptions_arr = [app_desc_arr, go_desc_arr, scanner_desc_arr, tcp_desc_arr]

// var descriptions_arr = ["Over the course of one year I worked with seven other students to produce two apps, one for iOS and one for Android. We split into iOS and Android teams at the beginning of the year, but worked closely together to ensure similar design, within the given design standards of the two platforms, and features.  The year before we had all taken a class on Android development so we had learned the basics of mobile development and Android Development.  As a member of the iOS team I had to teach myself Swift in order to be able to develop for iOS as part of this project. Throughout the course of the year we used principles from Agile development to produce features by deadlines. We met with our client, the board of education multiple times to present, and sent out surveys to parents, students and teachers about what features they wanted. We also formed a group of Alpha testers to test our app through various stages and give us feedback. As we continued to work we next released a semi-open beta, taking in feedback to figure out what features worked well and what did not and improving upon our design. Finally at the end of the year we held an open launch party for our app and presented on the process. I was a developer on the iOS team and the Documentation Lead. I worked to add data persistence across the app about which schools people needed to receive information from as well as created the calendar interface, among many other little tweaks. I also led the team in documenting our code and writing clean, reusable, readable code, in case another capstone group were to come along and maintain our project.", "In Software Construction I worked with a partner over the course of the quarter to build a Go tournament administrator. Go is the abstract strategy board game where the goal is to use stones to surround more territory than your opponent. We used pair programming to build this project, programming primarily on one computer and discussing our code choices step by step as we did so. We built the entire project from scratch, first starting with the point and stone objects before growing the project to the boards objects, the rule checker, the game referee, and finally the tournament administrator. Throughout the quarter we gave multiple code walks to our class explaining and defending our code choice to the professor and our fellow students. Our final project had a visual component, as well as the ability to run a tournament comprised of local and remote players. We presented our final project to our professor giving one last final code walk discussing the entire breadth of our project. In this project I learned a lot about modular code design and the importance and effectiveness of Unit testing. Because this was a project that started small and grew rather large we had to design our code in a very modular and scalable way with frequent testing in order to ensure all the moving pieces worked together well. Additionally as an added challenge our professors had us switch partners half way through, as part of this process we had to decide which code base to use, and what elements we wanted to take from the other unchosen base. All in all this project gave me a lot of skills and practice that I believe I can apply to the workforce.", "In my Introduction to Networking class we built a network scanner that given a list of domains would return information about the network. For this project I used Python 3, working within virtual environments and creating code that could be downloaded and ran on any machine through use of a pip requirements file. The scanner utilizes command line tools to do most of it’s lookups, and if the host machine is missing one of those command line tools the scanner still operates with graceful error handling.", "In my Introduction to Networking class we built a reliable streaming transport protocol on top of UDP. It was basically a simplified version of TCP. We wrote chunking code to break the data into chunks, we wrote code to handle the reordering of out of order packets, we also used acknowledgments and pipeline to handle packet loss. Finally we wrote code to handle corruption errors. At the end we had a simplified version of TCP that we could use to transfer data. I learned a lot about concurrency issues and how to design code to avoid deadlock doing this project."]
var roles_arr = ["App Developer",  "Developer", "Lead Developer","Lead Developer"]
var links_arr = ["https://github.com/Pattonville-App-Development-Team/ios-official", "https://github.com/MicahThompkins/go_project", "https://github.com/MicahThompkins/class_project1", "I can not link to this project due to academic integrity purposes. "]
var photos_arr =[["//:0","//:0"], ["//:0","//:0"], ["files/domain_info.png", "files/rtt_range.png"], ["//:0","//:0"]]
var app_index = 0
var go_index = 1
var scanner_index = 2
var tcp_index = 3

function replace_projects_display(index){
  document.getElementById("project_title").innerHTML = titles_arr[index]
  replace_description(descriptions_arr[index])
  // document.getElementById("description_text").innerHTML = descriptions_arr[index]
  document.getElementById("role_text").innerHTML = roles_arr[index]
  replace_link(index)
//   document.getElementById("project_link").innerHTML = links_arr[index]
  // document.getElementById("project_photo1").src = photos_arr[index][0]
  // document.getElementById("project_photo2").src = photos_arr[index][1]
}
function replace_description(desc_arr){
  var desc_id = "description_text";
  for (i = 0; i < desc_arr.length; i++){
    var string_i = i.toString();
    var desc_id_i = desc_id.concat(string_i);
    document.getElementById(desc_id_i).innerHTML = desc_arr[i];
  }
}
function replace_link(index){
    var link_text = document.getElementById('project_link');
    link_text.innerHTML = links_arr[index]
    if (index != tcp_index){
        console.log("got in index != tcp index")
        link_text.setAttribute('href', links_arr[index]);
        link_text.style.textDecoration = 'underline'
    } else{
        link_text.removeAttribute('href');
        link_text.style.textDecoration = 'none'
    }
}
function app_click(){
  replace_projects_display(app_index)
}
function go_click(){
  replace_projects_display(go_index)
}
function scanner_click(){
  replace_projects_display(scanner_index)
}
function tcp_click(){
  replace_projects_display(tcp_index)
}
