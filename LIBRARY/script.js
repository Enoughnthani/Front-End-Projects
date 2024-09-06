
function searchBooks() {
    let books = document.getElementsByClassName("bookpanel")[0].children;
    let input = "" + document.getElementById("searchInput").value;
    let count=0;

    if(input=="") return;

    for (i = 0; i < books.length; i++) {
        books[i].style.display = "block";
    }

    for (i = 0; i < books.length; i++) {
        if (!(books[i].innerHTML.toLowerCase().includes(input.toLowerCase().trim()))) {
            books[i].style.display = "none";
            count++;
        }
    }

    if(count==15) alert("No book matches your description!");
}

function submit() {
    let box = document.getElementsByTagName("input");
    let msg = document.getElementById("msg");
    let count = 0;


    for (i = 2; i < box.length; i++) {
        if (box[i].value == "") {
            count++;
        }
    }

    if (count == 0 && msg.value != "") {
        alert("Thank you for your feedback")
        for (i = 2; i < box.length; i++) {
            box[i].value = "";
        }
        msg.value = "";
    }

}
