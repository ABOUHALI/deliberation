<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Inscription</title>
</head>
<body>
	<%@include file="static.jsp"%>
	<div class="edit" style="margin-left: 300px; margin-bottom: 300px;">
		<h4>LISTE INSCRIPTION ADMINISTRATIVE</h4>
		<div class="body">
								
									<table id="mainTable" class="table table-striped">
										<thead>
											<tr>
												<th>Code MASSAR</th>
												<th>Nom</th>
												<th>Prenom</th>
												<th>Filiere Inscrits</th>
												<th>Annee Academique</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<c:forEach items="${etudiants}" var="e">
													<tr>

														<td><c:out value="${e.getCne()}" /></td>
														<td><c:out value="${e.getNomFr()}" /></td>
														<td><c:out value="${e.getPrenomFr()}" /></td>
														<td><c:out value="${e.getNom_filiere()}" /></td>
														<td><c:out value="${e.getAnne_acad()}" /></td>
											<td>
												<!--    <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                            <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>-->
												<a href="/Delib/pedagogique.php?massarEtud=<c:out value='${e.getCne()}'/>&au=<c:out value='${e.getAnne_acad()}'/>" ><button
														class="btn btn-primary waves-effect waves-light">
														Inscrire pedagogiquement</button> </a>

											</td>



												</tr>
												</c:forEach>
											</tr>
										</tbody>

									</table>

								</div>
					</div>
		

</body>
</html>