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
			<ul class="pager">
									<li><a href="Liste-A-Deliberer-Element" title="Précédent">Précédent</a></li>
									
								</ul>
			<div>
				<a href="http://localhost:8080/Delib/choix-listp-note.do" class="btn btn-primary btn-lg " 
					role="button" >CHOISIR A NOUVEAU ...</a>
			</div>
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="product-status-wrap drp-lst">
							<h4>NOTE</h4>

							<div class="add-product">
								<a href="note-element-excel">Ajouter une note depuis Liste
									excel</a>
							</div>
							<div class="asset-inner">
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
													<td><c:out value="${e.getEtat()}" /></td>
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