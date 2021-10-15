function gen_color() {

    var rand_color = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + rand_color;


}