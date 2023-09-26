package exerecicio;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Project")
public class ExercicioT extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Tabuada de Multiplicação</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Tabuada de Multiplicação</h1>");
        out.println("<table border='1'>");
        out.println("<tr><th>Número</th><th>Tabuada</th></tr>");

        for (int i = 1; i <= 9; i++) {
            out.println("<tr>");
            out.println("<td>" + i + "</td>");
            out.println("<td>");
            
            for (int j = 1; j <= 10; j++) {
                out.println(i + " x " + j + " = " + (i * j) + "<br>");
            }
            
            out.println("</td>");
            out.println("</tr>");
        }

        out.println("</table>");
        out.println("</body>");
        out.println("</html>");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }
}
