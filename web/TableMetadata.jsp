<%-- 
    Document   : MeteData
    Created on : Jun 14, 2019, 6:51:44 PM
    Author     : Mallick
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<tree id="${tname}">
    <c:forEach var="erwin" items="${dblist}">
        <item id="${erwin.columnname}" text="${erwin.columnname}" child="1">
          </item>
    </c:forEach>
</tree>


