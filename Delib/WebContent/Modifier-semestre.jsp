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
  <h2>Modifier Semestre</h2>
  <form action="modifier-semestre" method="post" >
    <div class="form-group" >
      <label >id Semestre:</label>
      <input type="text" class="form-control" name="id" value="${s.getIDSemestre()}" readonly="readonly">
    </div>
    <div class="form-group">
      <label for="pwd">Semestre:</label>
      <input type="text" class="form-control" name="semestre"value="${s.getLabelleSemestre()}">
    </div>
    
     <div class="form-group">
      <label for="pwd">Etape</label>
      <input type="text" class="form-control" name="etape"value="${s.getIDEtape() }">
    </div>
    <div class="form-group">
      <label for="pwd">Note de validation</label>
      <input type="text" class="form-control" name="note" value="${s.getNoteValidation()}">
    </div>
    
    <div>
    	<button type="submit" class="btn btn-primary">Modifier</button>
    </div>
  </form>
</div>
</div>
</body>
</html>