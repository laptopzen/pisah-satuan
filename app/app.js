jalankan = () => {
  $(".hasil").val($(".input").val().replace(/(.)/g, "$1\t"))
}

$(".input").on("keyup", () => jalankan())
$(".input").on("keydown", () => jalankan())