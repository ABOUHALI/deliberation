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

							<div class="add-product">
								<a href="/note-element-excel">Ajouter une note depuis Liste
									excel</a>
							</div>
							<div class="asset-inner">
								<form action="Liste-A-Deliberer-Semestre" method="post">


									<h2>Choisir Liste</h2>


									<div class="form-group">
												<label>Etape</label><br> <input type="text" name="etape"
													class="form-control"
													value="${etape}"
													readonly="readonly">
											</div>
											<div class="form-group">
													<label>Semestres</label><br> <select name="semestre"
														class="form-control">
														
														<c:forEach items="${semestres}" var="s" varStatus="loop">
															<option>${s.getLabelleSemestre()}</option>
														</c:forEach>
													
														
												</select>
											</div>
										<input type="submit" class="btn btn-lg btn-primary"
												value="Afficher"></form>
	
																</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>