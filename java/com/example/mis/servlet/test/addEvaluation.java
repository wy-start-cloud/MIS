package com.example.mis.servlet.test;

import com.example.mis.dao.ClassDataAccessObjects;
import com.example.mis.dao.EvaluationDataAccessObjects;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

/**
 * 向评教表中插入一个评教信息
 */
@WebServlet(name = "addEvaluation" , value = "/add_evaluation")
public class addEvaluation extends HttpServlet {
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

        EvaluationDataAccessObjects evaluationDao = new EvaluationDataAccessObjects();

        String studentNo = request.getParameter("student_no");
        String courseNo = request.getParameter("course_no");
        String teacherNo = request.getParameter("teacher_no");
        String evaluationGrade = request.getParameter("evaluation_grade");
        String evaluationComment = request.getParameter("evaluation_comment");

        try {
            evaluationDao.insertEvaluation(studentNo,courseNo,teacherNo,
                                            evaluationGrade,evaluationComment);
        } catch (Exception e) {
            out.println(e);
        }
    }
}
