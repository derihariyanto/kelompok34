$(window).scroll(example); 
function example() {
    var tempScrollTop = $(window).scrollTop();
    // console.log("Scroll from Top: " + tempScrollTop.toString());
    var y = document.getElementById("test");
    var z = document.getElementById("test1");
    
    if (tempScrollTop > 1320 && y.className === "map-responsive defaultpos hide")
    {
        y.className = "map-responsive defaultpos";
    }

    if (tempScrollTop > 1320 && z.className === "col-md-12 default mText")
    {
        z.className = "col-md-12 default";
    }

};