<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>

<html>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
							<nav aria-label="navigation"></nav>
							
							<div class="asset-inner">
								<div class="form-group">
									<label>ELEMENT</label><br> <input type="text"
										name="element" class="form-control" value="${element}"
										readonly="readonly">
								</div>

								<div>

									<a href="rattrapage.do?element=<c:out value="${element}"/>"
										class="btn btn-primary btn-lg " role="button">RATTRAPAGE</a>
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
											<th>ETAT</th>
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
													<td><c:out value="${e.getEtat()}" />
												</tr>
											</c:forEach>
										</tr>
									</tbody>

								</table>
								<div>
									<div>

										<a href="pdf-element.do" class="btn btn-primary btn-lg "
											role="button">
												PV <i class="fa fa-file-pdf-o"></i>
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