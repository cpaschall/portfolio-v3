// const mediaQuery = window.matchMedia('(min-width: 751px)')
// let portCards = $(".proj-ex").children();

$(".about").on("click", 
    function () {
        if($(".about-row").data("about") === "hide") {
            $(".about-row").data().about = "show";
            $(".about-row").css({"height" : "150px"})
            $(".about-summary").css({"display" : "block"})
        } else if($(".about-row").data("about") === "show") {
            $(".about-row").data().about = "hide";
            $(".about-row").css({"height" : "5px"})
            $(".about-summary").css({"display" : "none"})
        }
    }
)

$(".projects").on("click", 
    function (event) {
        console.log(event.target.classList)
        if(event.target.classList.contains("card-front")){
            $(".project-expand").css({"height" : "1000px"})
            $(".project-card").css({"display" : "flex"})
        } else if(event.target.classList.contains("card-back")){
            $(".project-expand").css({"height" : "1000px"})
            $(".project-card").css({"display" : "flex"})
        } else if($(".project-expand").data("projects") === "hide") {
            $(".project-expand").data().projects = "show";
            $(".project-expand").css({"height" : "1000px"})
            $(".project-card").css({"display" : "flex"})
            console.log($(".project-expand").data())
        } else if($(".project-expand").data("projects") === "show") {
            $(".project-expand").data().projects = "hide";
            $(".project-expand").css({"height" : "5px"})
            $(".project-card").css({"display" : "none"})
        }
    }
)

$(".contact").on("click", 
    function (event) {
        console.log(event.target.classList)
        if(event.target.classList.contains("text-input") || event.target.id === "email-btn") {
            $(".contact-row").css({"height" : "600px"})
            $("#contact-form").css({"display" : "block"})
        } else if(!(event.target.classList.contains("text-input")) && $(".contact-row").data("contact") === "hide") {
            $(".contact-row").data().contact = "show";
            $(".contact-row").css({"height" : "600px"})
            $("#contact-form").css({"display" : "block"})
        } else if(!(event.target.classList.contains("text-input")) && $(".contact-row").data("contact") === "show") {
            $(".contact-row").data().contact = "hide";
            $(".contact-row").css({"height" : "5px"})
            $("#contact-form").css({"display" : "none"})
        }
    }
)

$("#email-btn").on("click", 
function() {
    let message = $("#message").val();
    let name = $("#full-name").val();
    
    window.open(
        "mailto:cpaschall0105@gmail.com"
        + "?subject=" + name + " has something to say about Cal's profile!"
        + "&body=" + message
        );
})

// mobile response
$(".menu-icon").on("click", 
function(event) {
    if($(".nav-links-mobile").data("mobile") === "hide"){
       $(".nav-links-mobile").css({"display": "flex"});
       $(".nav-links-mobile").data().mobile = "show";
    } else if($(".nav-links-mobile").data("mobile") === "show") {
        $(".nav-links-mobile").css({"display": "none"});
       $(".nav-links-mobile").data().mobile = "hide";
    }
})