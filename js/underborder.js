
        (function () {

            var target = document.querySelector(".target");
            var begin = document.querySelector('#tel');
            var other = document.querySelector('#xdy');
            var links = document.querySelectorAll(".mynav a");
            var colors = ["orange"];
            function mouseenterFunc() {
                if (!this.parentNode.classList.contains("active")) {
                    for (var i = 0; i < links.length; i++) {
                        if (links[i].parentNode.classList.contains("active")) {
                            links[i].parentNode.classList.remove("active");
                        }
                        links[i].style.opacity = "0.25";
                    }

                    this.parentNode.classList.add("active");
                    this.style.opacity = "1";

                    //元素大小
                    var width = this.getBoundingClientRect().width;
                    var height = this.getBoundingClientRect().height;
                    var left = this.getBoundingClientRect().left + window.pageXOffset;
                    var top = this.getBoundingClientRect().top + window.pageYOffset;
                    var color = colors[Math.floor(Math.random() * colors.length)];

                    target.style.width = width + "px";
                    target.style.height = height + "px";
                    target.style.left = left + "px";
                    target.style.top = top + "px";
                    target.style.borderColor = color;
                    target.style.transform = "none";
                }
            }

            for (var i = 0; i < links.length; i++) {
                links[i].addEventListener("click", function (e) {
                    return e.preventDefault();
                });
                links[i].addEventListener("mouseenter", mouseenterFunc);
            }

            function resizeFunc() {
                var active = document.querySelector(".mynav li.active");

                if (active) {
                    var left = active.getBoundingClientRect().left + window.pageXOffset;
                    var top = active.getBoundingClientRect().top + window.pageYOffset;

                    target.style.left = left + "px";
                    target.style.top = top + "px";
                }
            }

            window.addEventListener("resize", resizeFunc);
            window.onload = function () {
                var width = begin.getBoundingClientRect().width;
                    var height = begin.getBoundingClientRect().height;
                    var left = begin.getBoundingClientRect().left + window.pageXOffset;
                    var top = begin.getBoundingClientRect().top + window.pageYOffset;
                    var color = colors[Math.floor(Math.random() * colors.length)];

                    target.style.width = width + "px";
                    target.style.height = height + "px";
                    target.style.left = left + "px";
                    target.style.top = top + "px";
                    target.style.borderColor = color;
                    target.style.transform = "none";

                    other.style.opacity="0.25";
            }
        })();
