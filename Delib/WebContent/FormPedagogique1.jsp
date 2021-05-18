<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html >
<head>
<meta charset="UTF-8">
<meta
	content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
	name="viewport">
<title>Inscription Pédagogique</title>

<!-- General CSS Files -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
	integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
	crossorigin="anonymous">

<!-- CSS Libraries -->

<!-- Template CSS -->

<link rel="stylesheet" href="../assets/css/style.css">
<link rel="stylesheet" href="../assets/css/components.css">
</head>

<body>
<%@include file="static.jsp"%>
	<div class="edit" style="margin-left: 300px; margin-bottom: 300px;">
	<div id="app">
		<section class="section">
			<div class="container mt-5">
				<div class="row">
					<div class="col-12 col-md-10 offset-md-1 col-lg-10 offset-lg-1">
						<div class="login-brand">Inscription Pédagogique</div>
						<form action="pedagogique2.do" method="post">
							<div class="card card-primary">
								<div class="row">

									<div class="col-20 col-md-20 col-lg-5 p-0">
											<div class="card-header text-center">
												<h4>Formulaire de saisie</h4>
											</div>

											<div class="card-body">

												<div class="form-group">
													<label>CNE</label> <input type="text" name="cne"
														class="form-control" value="${etudiant.getCne()}"
														readonly="readonly">
												</div>

												<div class="form-group">
													<label>Filiere</label> <input type="text"
														name="nom_filiere" class="form-control"
														value="${etudiant.getNom_filiere()}"
														readonly="readonly">
												</div>
												<div class="form-group">
													<label>Anne_Academique</label> <input type="text" name="au"
														class="form-control" value="${etudiant.getAnne_acad()}"
														readonly="readonly">
												</div>
											<div class="form-group">
												<label>Etape</label><br> <input type="text" name="etape"
													class="form-control"
													value="${etape}"
													readonly="readonly">
											</div>
											
											<div class="form-group">
													<label>Semestres</label><br> <select name="semestre"
														class="form-control">
														<option>
															<!-- 														<label th:text="${p.libelle_etape}" th:value="${p.id}"></label> -->

														<option></option>
														<c:forEach items="${semestres}" var="s" varStatus="loop">
															<option>${s.getLabelleSemestre()}</option>
														</c:forEach>
													
														
												</select>
											</div>
											
											

<!-- 											<div class="form-group"> -->
<!-- 												<label>Module</label><br>  -->
<!-- 												<select name="mod"> -->
<!-- 													<option th:each="p:${modules}"  > -->
<!-- 														<label th:text="${p.id_module}+'| '+${p.libelle_module}" ></label> -->
<!-- 													</option> -->
<!-- 												</select> -->

<!-- 											</div> -->


											<!-- <div class="form-group">
												<label>Module</label>

												<table class="table table-striped mb-0">
													<thead>
														<tr>
															<th>Selected</th>
															<th>ID</th>
															<th>Libellé Module</th>

														</tr>
													</thead>
													<tbody>

														<tr th:each="p:${modules}">

															<td><div class="radio">
																	<label><input type="radio" id='module'
																		name="module" th:value="${p.id_module}"></label>
																</div></td>
															<td th:text="${p.id_module}"></td>

															<td th:text="${p.libelle_module}"></td>

														</tr>


													</tbody>
												</table>

											</div> -->
											<div class="form-group text-right">
												<button type="submit"
													class="btn btn-round btn-lg btn-primary">Suivant</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
	</div>

	<!-- General JS Scripts -->
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"
		integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
		integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
		crossorigin="anonymous"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
		integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
	<script src="../assets/js/stisla.js"></script>

	<!-- JS Libraies -->
	<script
		src="http://maps.google.com/maps/api/js?key=AIzaSyB55Np3_WsZwUQ9NS7DP-HnneleZLYZDNw&amp;sensor=true"></script>
	<script src="../node_modules/gmaps/gmaps.min.js"></script>

	<!-- Template JS File -->
	<script src="../assets/js/scripts.js"></script>
	<script src="../assets/js/custom.js"></script>

	<!-- Page Specific JS File -->
	<script src="../assets/js/page/utilities-contact.js"></script>
</body>
</html>