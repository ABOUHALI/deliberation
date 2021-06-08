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
	<%@include file="indexdresp.jsp"%>
	<div class="edit" style="margin-left: 300px; margin-bottom: 300px;">

		<div class="product-status mg-b-15">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="product-status-wrap drp-lst">
							<h4>LISTE</h4>
							<nav aria-label="navigation"></nav>
							<div>
								<div class="asset-inner">
									<div class="form-group">
										<label>ELEMENT</label><br> <input type="text"
											name="element" class="form-control" value="${element1}"
											readonly="readonly">
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
												<c:forEach items="${etudiants1}" var="e">
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
							<div>
								<div class="asset-inner">
									<div class="form-group">
										<label>ELEMENT</label><br> <input type="text"
											name="element" class="form-control" value="${element2}"
											readonly="readonly">
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
												<c:forEach items="${etudiants2}" var="e">
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
									<div>
									<a href="deliberer-module.do">
										<button type="submit" class="btn btn-primary btn-lg">DELIBERER MODULE</button>
									</a>
								</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>