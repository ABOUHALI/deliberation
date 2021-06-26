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
	<%@include file="indexdprof.jsp"%>
	<div class="edit" style="margin-left: 300px; margin-bottom: 300px;">

		<div class="product-status mg-b-15">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="product-status-wrap drp-lst">
							<h4>LISTE DE MES COLLEGUES</h4>
							<nav aria-label="navigation">
								
							</nav>
							
							<div class="asset-inner">


								
								


							</div>
							<div class="body">

								<table id="mainTable" class="table table-striped">
									<thead>
										<tr>
											<th>ID PROF</th>
											<th>NOM</th>
											<th>PRENOM</th>
											<th>E-mail</th>
											<th>Etablissement</th>
											<th>Grade</th>
											<th>element</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<c:forEach items="${professeurs}" var="p">
												<tr>
													
													<td><c:out value="${p.getId()}" /></td>
													<td><c:out value="${p.getNom()}" /></td>
													<td><c:out value="${p.getPrenom()}" /></td>
													<td><c:out value="${p.getEmail()}" /></td>
													<td><c:out value="${etab}" /></td>
													<td><c:out value="${p.getGrade()}" /></td>
													<td><c:out value="${p.getElement()}" /></td>
												</tr>
											</c:forEach>
										</tr>
									</tbody>

								</table>
								
							</div>


						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>