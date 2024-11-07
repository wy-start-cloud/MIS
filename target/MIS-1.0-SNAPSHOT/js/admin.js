//折叠菜单效果
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.link');

        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
        ;
    }

    var accordion = new Accordion($('#accordion'), false);
});

/*-------------------课程操作----------------------------*/

//查询课程平均分信息
function course_avg() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var url = "/mis/query_all_user?action=course_avg";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//查询课程不及格率信息
function fail_rate() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var url = "/mis/query_all_user?action=fail_rate";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//显示查询成绩排名信息
function show_course_ranking() {
    var result = document.getElementById("result");
    var show = "<div id='course_ranking'  class='d_form'>"
        + "<h3>请输入课程编号</h3>"
        + "<input id='course_ranking_value' type='text' autofocus='autofocus' name='cno' value placeholder='课程号'>"
        + "<input id='submit' onclick='course_ranking()' type='button' name='submit' value='查询'>"
        + "</div>";
    result.innerHTML = show;
}
//查询成绩排名信息
function course_ranking() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var Cno = document.getElementById("course_ranking_value").value;
    var url = "/mis/query_all_user?action=course_ranking&cno=" + Cno;

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

/*-------------------------全部信息-------------------------*/

function query_all(object) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    url = "/mis/query_all_user?action="+object;
    console.log(url);
    xmlhttp.open("GET", url , true);
   // xmlhttp.open("GET", "/StudentManagement/AdminDao?action=query_all_" + object, true);
   xmlhttp.send();
}

function insert(object) {
    console.log("insert");
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var url = null;
    //判断执行
    if (object == "user") {
        var user = document.getElementById("show_insert_user").getElementsByTagName("input");
        var username = user[0].value.toString();
        var password = user[1].value.toString();
        var level = null;
        if (user[2].checked == true)
            level = user[2].value.toString();
        else
            level = user[3].value.toString();
        url = "/mis/insert?action=insert_user&username=" + username + "&password=" + password + "&level=" + level;
    }
    //TODO:改url
    else if (object == "class") {
        var classes = document.getElementById("show_insert_class").getElementsByTagName("input");
        var clno = classes[0].value.toString();
        var clname = classes[1].value.toString();
        var cmajor = classes[2].value.toString();
        var dno = classes[3].value.toString();
        console.log(cmajor);
        console.log("在js中")
        url = "/mis/insert?action=insert_class&clno=" + clno + "&clname=" + clname +"&cmajor="+cmajor+ "&dno=" + dno;
    }
    else if (object == "student") {
        var student = document.getElementById("show_insert_student").getElementsByTagName("input");
        var sno = student[0].value.toString();
        var sname = student[1].value.toString();
        var ssex = null;
        if (student[2].checked == true)
            ssex = student[2].value.toString();
        else
            ssex = student[3].value.toString();
        var sage = student[4].value;
        var clno = student[5].value.toString();
        url = "/mis/insert?action=insert_student&sno=" + sno + "&sname=" + sname + "&ssex=" + ssex + "&sage=" + sage + "&clno=" + clno;
    }
    else if (object == "course") {
        var course = document.getElementById("show_insert_course").getElementsByTagName("input");
        var cno = course[0].value.toString();
        var cname = course[1].value.toString();
        // var cteacher = course[2].value.toString();
        var ccredit = course[2].value;
        url = "/mis/insert?action=insert_course&cno=" + cno + "&cname=" + cname  + "&ccredit=" + ccredit;
    }
    else if (object == "sc") {
        var sc = document.getElementById("show_insert_sc").getElementsByTagName("input");
        var sno = sc[0].value.toString();
        var cno = sc[1].value.toString();
        var grade = sc[2].value;
        url = "/mis/insert?action=insert_sc&sno=" + sno + "&cno=" + cno + "&grade=" + grade;
    }else if(object == "teaching"){
        var teaching = document.getElementById("show_insert_teaching").getElementsByTagName("input");
        var courseNo = teaching[0].value.toString();
        var teacherNo= teaching[1].value.toString();
        var language = teaching[2].value.toString();
        var cid = teaching[3].value.toString();
        url = "/mis/insert?action=insert_teaching&courseNo=" + courseNo + "&teacherNo=" + teacherNo + "&language=" + language + "&cid=" + cid;
    }else if(object == "teacher"){
        var teacher = document.getElementById("show_insert_teacher").getElementsByTagName("input");
        var tno = teacher[0].value.toString();
        var tname = teacher[1].value.toString();
        var tsex = null;
        if (teacher[2].checked == true)
            tsex = teacher[2].value.toString();
        else
            tsex = teacher[3].value.toString();
        var tage = teacher[4].value;
        var title = teacher[5].value.toString();
        url = "/mis/insert?action=insert_teacher&tno=" + tno + "&tname=" + tname + "&tsex=" + tsex + "&tage=" + tage + "&title=" + title;
    }
    //TODO:跳转一个404页面
    else {
        url = "src/main/webapp/message.jsp";
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function show_delete(object) {
    var result = document.getElementById("result");
    var show = null;
    if (object == "user") {
        show = "<div id='delete_" + object + "'  class='d_form'>"
            + "<h3>请输入删除用户信息</h3>"
            + "<input type='text' autofocus='autofocus' name='username' value placeholder='用户名'  required>"
            + "<input id='submit' onclick='delete_user()' type='button' name='submit' value='删除'>"
            + "</div>";
    }
    else if (object == "class") {
        show = "<div id='delete_" + object + "'  class='d_form'>"
            + "<h3>请输入删除班级信息</h3>"
            + "<input type='text' autofocus='autofocus' name='clno' value placeholder='班级编号' required>"
            + "<input id='submit' onclick='delete_class()' type='button' name='submit' value='删除'>"
            + "</div>";
    }
    else if (object == "student") {
        show = "<div id='delete_student'  class='d_form'>"
            + "<h3>请输入删除学生信息</h3>"
            + "<input type='text' autofocus='autofocus' name='sno' value placeholder='学号' required>"
            + "<input id='submit' onclick='delete_student()' type='button' name='submit' value='删除'>"
            + "</div>";
    }
    else if (object == "course") {
        show = "<div id='delete_" + object + "'  class='d_form'>"
            + "<h3>请输入删除课程信息</h3>"
            + "<input type='text' autofocus='autofocus' name='clno' value placeholder='课程号' required>"
            + "<input id='submit' onclick='delete_course()' type='button' name='submit' value='删除'>"
            + "</div>";
    }
    else if (object == "sc") {
        show = "<div id='delete_" + object + "'  class='d_form'>"
            + "<h3>请输入需删除的成绩信息</h3>"
            + "<input type='text' autofocus='autofocus' name='sno' value placeholder='学号' required>"
            + "<input type='text' name='cno' value placeholder='课程号' required>"
            + "<input id='submit' onclick='delete_sc()' type='button' name='submit' value='删除'>"
            + "</div>";
    }else if(object == "teaching"){
        show = "<div id='delete_" + object + "'  class='d_form'>"
            + "<h3>请输入需删除的任课信息</h3>"
            + "<input type='text' autofocus='autofocus' name='cid' value placeholder='课程cid' required>"
            + "<input id='submit' onclick='delete_teaching()' type='button' name='submit' value='删除'>"
            + "</div>";
    }else if(object == "teacher"){
        show = "<div id='delete_" + object + "'  class='d_form'>"
            + "<h3>请输入需删除的任课信息</h3>"
            + "<input type='text' autofocus='autofocus' name='tno' value placeholder='教师号' required>"
            + "<input id='submit' onclick='delete_teacher()' type='button' name='submit' value='删除'>"
            + "</div>";
    }
    result.innerHTML = show;
}
//TODO：加入修改院系信息？
function show_alter(object) {
    var result = document.getElementById("result");
    var show = null;
    if (object == "user") {
        show = "<div id='alter_user'  class='d_form'>"
            + "<h3>请输入需要修改的用户信息</h3>"
            + "<p>修改前</p>"
            + "<input type='text' autofocus='autofocus' name='username' value placeholder='修改前用户名' required>"
            + "<p>修改后</p>"
            + "<input type='text' name='after_username' value placeholder='用户名' required>"
            + "<input type='password' name='after_password' value placeholder='密码'>"
            + "<p>权限级别</p>"
            + "<div id='radio' class='radio'>"
            + "<input type='radio' name='after_level' value='用户' checked='checked'><span>用户</span>"
            + "<input type='radio' name='after_level' value='教师''><span>教师</span>"
            + "</div>"
            + "<input id='submit' onclick='alter_user()' type='button' name='submit' value='修改'>"
            + "</div>";
    }
    else if (object == "class") {
        show = "<div id='alter_class'  class='d_form'>"
            + "<h3>请输入需要修改的班级信息</h3>"
            + "<p>修改前</p>"
            + "<input type='text' autofocus='autofocus' name='clno' value placeholder='班级编号' required>"
            + "<p>修改后</p>"
            + "<input type='text' name='after_clno' value placeholder='班级编号' required>"
            + "<input type='text' name='after_clname' value placeholder='班级名称'>"
            + "<input type='text' name='after_dno' value placeholder='所属院系编号'>"
            + "<input id='submit' onclick='alter_class()' type='button' name='submit' value='修改'>"
            + "</div>";
    }
    else if (object == "student") {
        show = "<div id='alter_student'  class='d_form'>"
            + "<h3>请输入需要修改的学生信息</h3>"
            + "<p>修改前</p>"
            + "<input type='text' autofocus='autofocus' name='sno' value placeholder='学号' required>"
            + "<p>修改后</p>"
            + "<input type='text' name='after_sno' value placeholder='学号' required>"
            + "<input type='text' name='after_sname' value placeholder='姓名'>"
            + "<p>性别</p>"
            + "<div id='radio' class='radio'>"
            + "<input type='radio' name='after_ssex' value='男' checked='checked'><span>男</span>"
            + "<input type='radio' name='after_ssex' value='女'><span>女</span>"
            + "</div>"
            + "<input type='number' name='after_sage' value placeholder='年龄'>"
            + "<input type='text' name='after_clno' value placeholder='所在班级编号'>"
            + "<input id='submit' onclick='alter_student()' type='button' name='submit' value='修改'>"
            + "</div>";
    }
    else if (object == "course") {
        show = "<div id='show_alter_course'  class='d_form'>"
            + "<h3>请输入需要修改的课程信息</h3>"
            + "<p>修改前</p>"
            + "<input type='text' autofocus='autofocus' name='cno' value placeholder='课程号' required>"
            + "<p>修改后</p>"
            + "<input type='text' name='after_cno' value placeholder='课程号' required>"
            + "<input type='text' name='after_cname' value placeholder='课程名称'>"
            + "<input type='text' name='after_cteacher' value placeholder='执教老师'>"
            + "<input type='number' name='after_ccredit' value placeholder='学分'>"
            + "<input id='submit' onclick='alter_course()' type='button' name='submit' value='修改'>"
            + "</div>";
    }
    else if (object == "sc") {
        show = "<div id='alter_sc'  class='d_form'>"
            + "<h3>请输入需要修改的成绩信息</h3>"
            + "<p>修改前</p>"
            + "<input type='text' autofocus='autofocus' name='sno' value placeholder='学号' required>"
            + "<input type='text' name='cno' value placeholder='课程号' required>"
            + "<p>修改后</p>"
            + "<input type='number' name='after_grade' value placeholder='成绩'>"
            + "<input id='submit' onclick='alter_sc()' type='button' name='submit' value='修改'>"
            + "</div>";
    }else if(object == "teaching"){
        show = "<div id='alter_teaching'  class='d_form'>"
            + "<h3>请输入需要修改的任课信息</h3>"
            + "<p>修改前</p>"
            + "<input type='text' autofocus='autofocus' name='cid' value placeholder='课程cid' required>"
            + "<p>修改后</p>"
            + "<input type='text' name='after_courseNo' value placeholder='课程号'>"
            + "<input type='text' name='after_teacherNo' value placeholder='教师号'>"
            + "<input type='text' name='after_language' value placeholder='授课语言'>"
            + "<input id='submit' onclick='alter_teaching()' type='button' name='submit' value='修改'>"
            + "</div>";
    }else if(object == "teacher"){
        show = "<div id='alter_teacher'  class='d_form'>"
            + "<h3>请输入需要修改的教师信息</h3>"
            + "<p>修改前</p>"
            + "<input type='text' autofocus='autofocus' name='tno' value placeholder='教师号' required>"
            + "<p>修改后</p>"
            + "<input type='text' name='after_tname' value placeholder='姓名'>"
            + "<p>性别</p>"
            + "<div id='radio' class='radio'>"
            + "<input type='radio' name='after_tsex' value='男' checked='checked'><span>男</span>"
            + "<input type='radio' name='after_tsex' value='女'><span>女</span>"
            + "</div>"
            + "<input type='number' name='after_tage' value placeholder='年龄'>"
            + "<input type='text' name='after_ttitle' value placeholder='职称'>"
            + "<input id='submit' onclick='alter_teacher()' type='button' name='submit' value='修改'>"
            + "</div>";
    }
    result.innerHTML = show;
}


/*------------------------------------显示插入-------------------------------*/
//显示插入用户
function show_insert_user() {
    var result = document.getElementById("result");
    var show = "<div id='show_insert_user'  class='d_form'>"
        + "<h3>请输入新增用户信息</h3>"
        + "<input id='username' type='text' autofocus='autofocus' name='username' value placeholder='用户名' required>"
        + "<input id='password' type='password' name='password' value placeholder='密码' required>"
        + "<p>权限级别</p>"
        + "<div class='radio'>"
        + "<input type='radio' name='level' value='用户' checked='checked'><span>用户</span>"
        + "<input type='radio' name='level' value='教师'><span>教师</span>"
        + "</div>"
        + "<input id='submit' onclick=insert('user') type='button' name='submit' value='插入'>"
        + "</div>";
    result.innerHTML = show;
}
//显示插入班级
function show_insert_class() {
    var result = document.getElementById("result");
    var show = "<div id='show_insert_class'  class='d_form'>"
        + "<h3>请输入新增班级信息</h3>"
        + "<input type='text' autofocus='autofocus' name='clno' value placeholder='班级编号' required>"
        + "<input type='text' name='clname' value placeholder='班级名称'>"
        + "<input type='text' name='cmajor' value placeholder='班级专业'>"
        + "<input type='text' name='dno' value placeholder='所属院系编号'>"
        + "<input id='submit' onclick=insert('class') type='button' name='submit' value='插入'>"
        + "</div>";
    result.innerHTML = show;
}
//显示插入学生
function show_insert_student() {
    var result = document.getElementById("result");
    var show = "<div id='show_insert_student'  class='d_form'>"
        + "<h3>请输入新增学生信息</h3>"
        + "<input type='text' autofocus='autofocus' name='sno' value placeholder='学号' required>"
        + "<input type='text' name='sname' value placeholder='姓名'>"
        + "<p>性别</p>"
        + "<div class='radio'>"
        + "<input type='radio' name='ssex' value='男' checked='checked'><span>男</span>"
        + "<input type='radio' name='ssex' value='女'><span>女</span>"
        + "</div>"
        + "<input type='number' name='sage' value placeholder='年龄'>"
        + "<input type='text' name='clno' value placeholder='所在班级编号'>"
        + "<input id='submit' onclick=insert('student') type='button' name='submit' value='插入'>"
        + "</div>";
    result.innerHTML = show;
}
//显示插入教师
function show_insert_teacher(){
    var result = document.getElementById("result");
    var show = "<div id='show_insert_teacher'  class='d_form'>"
        + "<h3>请输入新增教师信息</h3>"
        + "<input type='text' autofocus='autofocus' name='tno' value placeholder='教师号' required>"
        + "<input type='text' name='sname' value placeholder='姓名'>"
        + "<p>性别</p>"
        + "<div class='radio'>"
        + "<input type='radio' name='ssex' value='男' checked='checked'><span>男</span>"
        + "<input type='radio' name='ssex' value='女'><span>女</span>"
        + "</div>"
        + "<input type='number' name='sage' value placeholder='年龄'>"
        + "<input type='text' name='ttitle' value placeholder='职称'>"
        + "<input id='submit' onclick=insert('teacher') type='button' name='submit' value='插入'>"
        + "</div>";
    result.innerHTML = show;
}
//显示插入课程
function show_insert_course() {
    var result = document.getElementById("result");
    var show = "<div id='show_insert_course'  class='d_form'>"
        + "<h3>请输入新增课程信息</h3>"
        + "<input type='text' autofocus='autofocus' name='cno' value placeholder='课程号' required>"
        + "<input type='text' name='cname' value placeholder='课程名称'>"
        // + "<input type='text' name='cteacher' value placeholder='执教老师'>"
        + "<input type='number' name='ccredit' value placeholder='学分'>"
        + "<input id='submit' onclick=insert('course') type='button' name='submit' value='插入'>"
        + "</div>";
    result.innerHTML = show;
}
//显示插入成绩
function show_insert_sc() {
    var result = document.getElementById("result");
    var show = "<div id='show_insert_sc'  class='d_form'>"
        + "<h3>请输入新增成绩信息</h3>"
        + "<input type='text' autofocus='autofocus' name='sno' value placeholder='学号' required>"
        + "<input type='text' name='cno' value placeholder='课程号' required>"
        + "<input type='number' name='grade' value placeholder='成绩'>"
        + "<input id='submit' onclick=insert('sc') type='button' name='submit' value='插入'>"
        + "</div>";
    result.innerHTML = show;
}
//显示插入任课信息
function show_insert_teaching(){
    var result = document.getElementById("result");
    var show = "<div id='show_insert_teaching'  class='d_form'>"
        + "<h3>请输入新增任课信息</h3>"
        + "<input type='text' autofocus='autofocus' name='courseNo' value placeholder='课程号' required>"
        + "<input type='text' name='teacherNo' value placeholder='教师号' required>"
        + "<input type='text' name='language' value placeholder='授课语言'>"
        + "<input type='number' name='cid' value placeholder='课程cid'>"
        + "<input id='submit' onclick=insert('teaching') type='button' name='submit' value='插入'>"
        + "</div>";
    result.innerHTML = show;
}
/*-------------------------------------删除------------------------------*/
//删除用户
function delete_user() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var user = document.getElementById("delete_user").getElementsByTagName("input");
    var username = user[0].value.toString();
    var url = "/mis/delete?action=delete_user&username=" + username;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//删除班级
function delete_class() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("delete_class").getElementsByTagName("input");
    var clno = all[0].value.toString();
    var url = "/mis/delete?action=delete_class&clno=" + clno;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//删除学生
function delete_student() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("delete_student").getElementsByTagName("input");
    var sno = all[0].value.toString();
    var url = "/mis/delete?action=delete_student&sno=" + sno;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//删除课程
function delete_course() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("delete_course").getElementsByTagName("input");
    var cno = all[0].value.toString();
    var url = "/mis/delete?action=delete_course&cno=" + cno;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//删除成绩
function delete_sc() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("delete_sc").getElementsByTagName("input");
    var sno = all[0].value.toString();
    var cno = all[1].value.toString();
    var url = "/StudentManagement/AdminDao?action=delete_sc&sno=" + sno + "&cno="+cno;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function delete_teaching(){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("delete_teaching").getElementsByTagName("input");
    var cid = all[0].value.toString();
    var url = "/mis/delete?action=delete_teaching&cid=" + cid ;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function delete_teacher(){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("delete_teacher").getElementsByTagName("input");
    var tno = all[0].value.toString();
    var url = "/mis/delete?action=delete_teacher&tno=" + tno ;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
/*-----------------------------------修改---------------------------------*/
//修改用户
function alter_user() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var user = document.getElementById("alter_user").getElementsByTagName("input");
    var username = user[0].value.toString();
    var after_username = user[1].value.toString();
    var after_password = user[2].value.toString();

    var after_level;

    if (user[3].checked == true)
        after_level = user[3].value.toString();
    else
        after_level = user[4].value.toString();
    var url = "/mis/alter?action=alter_user&username=" + username + "&after_username=" + after_username + "&after_password=" + after_password + "&after_level=" + after_level;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//修改班级
function alter_class() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("alter_class").getElementsByTagName("input");
    var clno = all[0].value.toString();
    var after_clno = all[1].value.toString();
    var after_clname = all[2].value.toString();
    var after_dno = all[3].value.toString();
    var url = "/mis/alter?action=alter_class&clno=" + clno + "&after_clno=" + after_clno + "&after_clname=" + after_clname + "&after_dno=" + after_dno;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//修改学生
function alter_student() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("alter_student").getElementsByTagName("input");
    var sno = all[0].value.toString();
    var after_sno = all[1].value.toString();
    var after_sname = all[2].value.toString();
    var after_ssex = null;
    if (all[3].checked == true)
        after_ssex = all[3].value.toString();
    else
        after_ssex = all[4].value.toString();
    var after_sage = all[5].value;
    var after_clno = all[6].value.toString();
    var url = "/mis/alter?action=alter_student&sno=" + sno + "&after_sno=" + after_sno + "&after_sname=" + after_sname + "&after_ssex=" + after_ssex+"&after_sage="+after_sage+"&after_clno="+after_clno;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//修改课程
function alter_course() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("show_alter_course").getElementsByTagName("input");
    var cno = all[0].value.toString();
    var after_cno = all[1].value.toString();
    var after_cname = all[2].value.toString();
    var after_cteacher = all[3].value.toString();
    var after_ccredit = all[4].value;
    var url = "/mis/alter?action=alter_course&cno=" + cno + "&after_cno=" + after_cno + "&after_cname=" + after_cname + "&after_cteacher=" + after_cteacher+"&after_ccredit="+after_ccredit;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//修改成绩
function alter_sc() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("alter_sc").getElementsByTagName("input");
    var sno = all[0].value.toString();
    var cno = all[1].value.toString();
    var after_grade = all[2].value;
    var url = "/mis/alter?action=alter_sc&sno=" + sno + "&cno=" + cno + "&after_grade=" + after_grade;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
//修改任课信息
function alter_teaching(){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("alter_teaching").getElementsByTagName("input");
    var cid = all[0].value.toString();
    var courseNo = all[1].value.toString();
    var teacherNo = all[2].value.toString();
    var language = all[3].value.toString();
    var url = "/mis/alter?action=alter_teaching&cid=" + cid + "&courseNo=" + courseNo + "&teacherNo=" + teacherNo + "&language=" + language;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function alter_teacher(){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("result").innerHTML = xmlhttp.responseText;
        }
    }
    var all = document.getElementById("alter_teacher").getElementsByTagName("input");
    var tno = all[0].value.toString();
    var after_tname = all[1].value.toString();
    var after_tsex = null;
    if (all[2].checked == true)
        after_tsex = all[2].value.toString();
    else
        after_tsex = all[3].value.toString();
    var after_tage = all[4].value;
    var after_ttitle = all[5].value.toString();
    var url = "/mis/alter?action=alter_teacher&tno=" + tno + "&after_tname=" + after_tname + "&after_tsex=" + after_tsex + "&after_tage=" + after_tage+ "&after_ttitle="+after_ttitle;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}