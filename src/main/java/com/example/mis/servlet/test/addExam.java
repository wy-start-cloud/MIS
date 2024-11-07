package com.example.mis.servlet.test;

import com.example.mis.dao.examDataAccessObjects;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

/**
 * 向考试表中加入一个考试信息
 */
@WebServlet(name = "addExam" , value = "/add_exam")
public class addExam extends HttpServlet {
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

        examDataAccessObjects examDao = new examDataAccessObjects();

        String cid = request.getParameter("cid");
        String examDate = request.getParameter("exam_date");

        try {
            examDao.insertExam(cid,examDate);
        } catch (Exception e) {
            out.println(e);
        }
    }
}
