<%--
  Created by IntelliJ IDEA.
  User: MHB
  Date: 2024/5/28
  Time: 21:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>Grade</h1>
<form id = "selectedCourseForm" action="display_selectedCourse" method="post">
  <div>
    <label for="student_no">学号：</label>
    <input type="text" id="student_no" name = "student_no" required>
  </div>
  <div>
    <button type="submit">提交</button>
  </div>
</form>
</body>
</html>
