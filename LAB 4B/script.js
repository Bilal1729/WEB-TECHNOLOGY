function validate() {
    var a = document.myform.name.value;
    if (a == "") {
        alert("Name is empty");
        document.myform.name.focus();
        return false;
    }
    if (!isNaN(a)) {
        alert("Only entered numbers");
        document.myform.name.select();
        return false;
    }

    var d = document.myform.mail.value;
    if (d == "") {
        alert("please, Enter your mail id!!!");
        document.myform.mail.focus();
        return false;
    }
    var atposition = d.indexOf("@");
    var dotposition = d.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= d.length) {
        alert("please enter valid mail address!!!!");
        return false;
    }

    var p = document.myform.pass.value;
    if (p == "") {
        alert("please, Enter your password!!!");
        document.myform.pass.focus();
        return false;
    }
    var cp = document.myform.cpass.value;
    if (cp == "") {
        alert("please, Enter your password!!!");
        document.myform.cpass.focus();
        return false;
    }
    if (p != cp) {
        alert("Password not matched please enter correct one!!!!");
        document.myform.cpass.focus();
        return false;
    }

    var m = document.myform.mno.value;
    if (m == "") {
        alert("please, Enter your moblie number!!!");
        document.myform.mno.focus();
        return false;
    }
    else if (m.length < 10 || m.length > 10) {
        alert("please enter only 10 digits!");
        document.myform.mno.focus();
        return false;
    }

    var rb = document.myform.gender;
    var status = 0;
    for (var i = 0; i < rb.length; i++) {
        if (rb[i].checked == true) {
            status = 1;
        }
    }
    if (status == 0) {
        alert("select gender");
        return false;
    }

    var interest = document.myform.course;
    if (interest.selectedIndex == 0) {
        alert("select your course");
        document.myform.course.focus();
        return false;
    }


    return true;
}