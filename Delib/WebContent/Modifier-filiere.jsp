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
  <h2>Modifier filiere</h2>
  <form action="modifier-filiere" method="post" >
    <div class="form-group" >
      <label >id filiere:</label>
      <input type="text" class="form-control" name="id" value="${f.getIDFiliere()}" readonly="readonly">
    </div>
    <div class="form-group">
      <label for="pwd">Nom de filiere:</label>
      <input type="text" class="form-control" name="nom"value="${ f.getFiliere()}">
    </div>
     <div class="form-group">
      <label for="pwd">id Etablissement:</label>
      <input type="text" class="form-control" name="etab"value="${f.getIDetab()}">
    </div>
    <div>
    	<button type="submit" class="btn btn-primary">UPDATE</button>
    </div>
  </form>
</div>
</div>
</body>
</html>