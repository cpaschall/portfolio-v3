// const mediaQuery = window.matchMedia('(min-width: 751px)')
// let portCards = $(".proj-ex").children();

// function changeClass() {
//     for(var i =0; portCards.length; i++) {
//         portCards[i].classList.remove;
//         if($(".proj-ex").children()[i].id === $("#proj-2")) {
//             $(".proj-ex").children()[i].classList.remove("col-sm-1")
//             $(".proj-ex").children()[i].classList.add("col-sm-8")
//         }else if($(".proj-ex").children()[i].id != $("#proj-2") && $(".proj-ex").children()[i].classList.contains("col-sm-8")) {
//             $(".proj-ex").children()[i].classList.remove("col-sm-8");
//             $(".proj-ex").children()[i].classList.add("col-sm-1")
//         }
//     }
// }

// function cycleProjects(event) {
//     event.preventDefault();
//     // console.log(portCards)
//     // console.log(portCards[i].classList[1])
//     if (event.target.classList.value.includes("btn-next")) {
//         // let portCards = $(".proj-ex").children();
//         for(var i = 0; i < portCards.length; i++) {
//             if(i<portCards.length - 1) {
//                 portCards[i].id = `proj-${i+1}`;
//             }else if (i = portCards.length - 1) {
//                 portCards[i].id = `proj-0`;
//             }
//         }
//         // changeClass();
//         $(".proj-ex").prepend($(".proj-ex").children()[4].outerHTML);
//         $(".proj-ex").children().eq(5).remove();
//         changeClass();
//     } else if(event.target.classList.value.includes("btn-prev")) {
//         // let portCards = $(".proj-ex").children()
//         for(var i = 0; i < portCards.length; i++) {
//             if (i === 0) {
//                 portCards[0].id = `proj-4`
//             } else if(0 < i < portCards.length) {
//                 portCards[i].id = `proj-${i-1}`
//             } 
//         }
//         // changeClass();
//         $(".proj-ex").append($(".proj-ex").children()[0].outerHTML);
//         $(".proj-ex").children().eq(0).remove();
//         changeClass();
//     }
// }

// function init() {
//     $(".proj-ex").append("<div class='card col-sm-1 code-quiz desktop' id='proj-0'><a class='proj-link' href='https://cpaschall.github.io/code-quiz/' alt='code quiz gif'><span id='rotate-0'>code quiz</span></a><a href='https://github.com/cpaschall/code-quiz' alt='code-quiz repo'><i class='fa-brands fa-github-alt repo-icon' style='color:#FF008E'></i></a></div>");
//     $(".proj-ex").append("<div class='card col-sm-1 weather-dash desktop' id='proj-1'><a class='proj-link' href='https://cpaschall.github.io/weather-dashboard/' alt='weather dashboard gif'><span id='rotate-1'>weather dashboard</span></a><a href='https://github.com/cpaschall/weather-dashboard' alt='weather dash repo'><i class='fa-brands fa-github-alt repo-icon' style='color:#FF008E'></i></a></div>");
//     $(".proj-ex").append("<div class='card col-sm-8 stocks desktop' id='proj-2'><a class='proj-link' href='https://anthonydiblasio.github.io/stock-weather/' alt='stock-weather gif'><span id='rotate-2'>stock-weather</span></a><a href='https://github.com/AnthonyDiBlasio/stock-weather' alt='stock-weather repo'><i class='fa-brands fa-github-alt fa-2xl repo-icon' style='color:#FF008E'></i></a></div>");
//     $(".proj-ex").append("<div class='card col-sm-1 scheduler desktop' id='proj-3'><a class='proj-link' href='https://cpaschall.github.io/workday-scheduler/' alt='scheduler gif'><span id='rotate-3'>scheduler</span></a><a href='https://github.com/cpaschall/workday-scheduler' alt='scheduler repo'><i class='fa-brands fa-github-alt repo-icon' style='color:#FF008E'></i></a></div>");
//     $(".proj-ex").append("<div class='card col-sm-1 pw-gen desktop' id='proj-4'><a class='proj-link' href='https://cpaschall.github.io/password-generator/' alt='pw gen png'><span id='rotate-0'>password generator</span></a><a href='https://github.com/cpaschall/password-generator' alt='pw gen repo'><i class='fa-brands fa-github-alt repo-icon' style='color:#FF008E'></i></a></div>");
// }
 
// if(mediaQuery.matches) {
//      init()
//  }

// $(".cycle-btn").on("click", cycleProjects)

$(".about").hover(
    function () {
        if($(".about-row").data("about") === "hide") {
            console.log("this is hidden")
            // $(this).attr("data", "show")
            $(".about-row").data().about = "show";
            $(".about-row").css({"height" : "150px"})
            $(".about-summary").css({"display" : "block"})
            // console.log($(this).data())
        } else if($(".about-row").data("about") === "show") {
            console.log("this is displayed")
            $(".about-row").data().about = "hide";
            $(".about-row").css({"height" : "5px"})
            $(".about-summary").css({"display" : "none"})
            // console.log($(this).data())
        }
    }
)

$(".projects").hover(
    function () {
        if($(".project-expand").data("projects") === "hide") {
            console.log("this is hidden")
            // $(this).attr("data", "show")
            $(".project-expand").data().projects = "show";
            $(".project-expand").css({"height" : "800px"})
            $(".project-card").css({"display" : "block"})
            console.log($(".project-expand").data())
        } else if($(".project-expand").data("projects") === "show") {
            console.log("this is displayed")
            $(".project-expand").data().projects = "hide";
            $(".project-expand").css({"height" : "5px"})
            $(".project-card").css({"display" : "none"})
            console.log($(".project-expand").data())
        }
    }
)
