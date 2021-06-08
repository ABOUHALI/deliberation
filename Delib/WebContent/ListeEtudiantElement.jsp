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

		<div class="product-status mg-b-15">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="product-status-wrap drp-lst">
							<h4>NOTE</h4>
							<nav aria-label="navigation">
								
							</nav>
							<div class="add-product">
								<a href="/note-element-excel">Ajouter une note depuis Liste
									excel</a>
							</div>
							<div class="asset-inner">


								<h2>Choisir Liste</h2>


								<div class="form-group">
									<label>Etape</label><br> <input type="text" name="etape"
										class="form-control" value="${etape}" readonly="readonly">
								</div>
								<div class="form-group">
									<label>Semestre</label><br> <input type="text"
										name="semestre" class="form-control" value="${semestre}"
										readonly="readonly">
								</div>
								<div class="form-group">
									<label>Modules</label><br> <input type="text"
										name="module" class="form-control" value="${module}"
										readonly="readonly">
								</div>
								<div class="form-group">
									<label>ELEMENT</label><br> <input type="text"
										name="element" class="form-control" value="${element}"
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
											<c:forEach items="${etudiants}" var="e">
												<tr>
													<c:if test="${e.getNOTE() == 0}">
														<c:set var="var"
															value="saveNOTE.do?id=${e.getCNE()}&element=${element}" />
													</c:if>
													<c:if test="${e.getNOTE() != 0}">
														<c:set var="var" value="#" />
													</c:if>
													<td><c:out value="${e.getCNE()}" /></td>
													<td><c:out value="${e.getNom()}" /></td>
													<td><c:out value="${e.getPrenom()}" /></td>
													<td><a href="${var}"><c:out
																value="${e.getNOTE()}" /></a></td>

												</tr>
											</c:forEach>
										</tr>
									</tbody>

								</table>
								<div>
									<a href="deliberer">
										<button type="submit" class="btn btn-primary btn-lg">DELIBERATION</button>
									</a>
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