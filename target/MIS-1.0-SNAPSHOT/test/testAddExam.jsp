<%--
  Created by IntelliJ IDEA.
  User: MHB
  Date: 2024/5/27
  Time: 20:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>Exam Registration Test</h1>
<form action="add_exam" method="post">
  <div>
    <label for="cid">CID：</label>
    <input type="text" id="cid" name = "cid" required>
  </div>
  <div>
    <label for="exam_date">考试时间：</label>
    <input type="text" id="exam_date" name="exam_date" required>
  </div>
  <div>
    <button type="submit">提交</button>
  </div>
</form>
</body>
</html>
