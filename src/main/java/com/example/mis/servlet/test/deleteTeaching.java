package com.example.mis.servlet.test;

import com.example.mis.dao.teachingDataAccessObjects;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

/**
 * 从teaching表中删除指定教师号、课程号、cid的授课信息
 */
@WebServlet(name = "deleteTeaching",value = "/delete_teaching")
public class deleteTeaching extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doGet(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("utf-8");
        request.setCharacterEncoding("utf-8");

        PrintWriter out = response.getWriter();

        teachingDataAccessObjects teachingDao = new teachingDataAccessObjects();

        String teacherNo = request.getParameter("teacher_no");
        String courseNo = request.getParameter("course_no");
        String cid = request.getParameter("cid");
        try {
            teachingDao.deleteTeaching(courseNo,teacherNo,cid);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
