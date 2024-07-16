
function hovering(){
    document.querySelectorAll(".productsbox")
        .forEach(function (e) {
            var a;
            e.addEventListener("mouseenter", function (dets) {
                a = this.querySelector("button").textContent
                this.querySelector("button").textContent = 'View Detils'
            })
            e.addEventListener("mouseleave", function (dets) {
                this.querySelector("button").textContent = a;
            })
        })
}
hovering();

const menuitems = document.getElementById('menu-items')