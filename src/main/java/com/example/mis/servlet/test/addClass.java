package com.example.mis.servlet.test;

import com.example.mis.dao.ClassDataAccessObjects;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

/**
 * 向课程表中插入一个课程
 */
@WebServlet(name = "addClass" ,value="/add_class")
public class addClass extends HttpServlet {
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

        ClassDataAccessObjects classDao = new ClassDataAccessObjects();

        String classNo = request.getParameter("class_no");
        String className = request.getParameter("class_name");
        String classMajor = request.getParameter("class_major");
        String classDept = request.getParameter("class_dept");
        String studentNumber = request.getParameter("student_number");

        try {
            classDao.insertClass(classNo, className, classMajor, classDept, studentNumber);
        } catch (Exception e) {
            out.println(e);
        }
    }
}
