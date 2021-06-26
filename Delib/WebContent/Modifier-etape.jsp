<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%@include file="static.jsp"%>
<div class="edit" style="margin-left:300px; margin-bottom: 300px; "  >
<div class="container">
  <h2>Modifier Etape</h2>
  <form action="modifier-etape" method="post" >
    <div class="form-group" >
      <label >id Etape:</label>
      <input type="text" class="form-control" name="id" value="${et.getIDEtape()}" readonly="readonly">
    </div>
    <div class="form-group">
      <label for="pwd">labelle etape:</label>
      <input type="text" class="form-control" name="labelle"value="${ et.getLabelleEtape()}">
    </div>
     <div class="form-group">
      <label for="pwd">Diplomante:</label>
      <select name="diplomante">
      	<option value="true">true</option>
      	<option value="false">false</option>
      	
      </select>
    </div>
     <div class="form-group">
      <label for="pwd">filiere:</label>
      <input type="text" class="form-control" name="filiere"value="${et.getIDFiliere() }">
    </div>
    <div>
    	<button type="submit" class="btn btn-primary">Modifier</button>
    </div>
  </form>
</div>
</div>
</body>
</html>