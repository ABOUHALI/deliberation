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
							<h4>LISTE</h4>
							<nav aria-label="navigation">
								
							</nav>
							
							<div class="asset-inner">
								<div class="form-group">
									<label>ELEMENT</label><br> <input type="text"
										name="element" class="form-control" value="${element}"
										readonly="readonly">
								</div>

								<div>
								<form action="rattrapage.do?${element}" method="post">
									<input type="checkbox" class="form-check-input"
							 name="ratt"
							style="margin-left: 1px" >
							<label style="margin-left: 15px">RATTRAPAGE</label>
							</form>
								</div>
							</div>
							<div class="body">

								<table id="mainTable" class="table table-striped">
									<thead>
										<tr>
											<th>CNE</th>
											<th>NOM</th>
											<th>PRENOM</th>
											<th>NOTE</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<c:forEach items="${etudiants}" var="e">
												<tr>
													
													<td><c:out value="${e.getCNE()}" /></td>
													<td><c:out value="${e.getNom()}" /></td>
													<td><c:out value="${e.getPrenom()}" /></td>
													<td><c:out value="${e.getNOTE()}" /></td>
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