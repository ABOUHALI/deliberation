<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<meta
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
	name="viewport">
<title>D E L I B E R A T I O N</title>
<!-- Favicon-->
<link rel="icon" href="../../favicon.ico" type="image/x-icon">

<!-- Google Fonts -->
<link
	href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext"
	rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet" type="text/css">

<!-- Bootstrap Core Css -->
<link href="plugins/bootstrap/css/bootstrap.css" rel="stylesheet">

<!-- Waves Effect Css -->
<link href="plugins/node-waves/waves.css" rel="stylesheet" />

<!-- Animation Css -->
<link href="plugins/animate-css/animate.css" rel="stylesheet" />

<!-- Custom Css -->
<link href="css1/style.css" rel="stylesheet">

<!-- AdminBSB Themes. You can choose a theme from css/themes instead of get all themes -->
<link href="css1/themes/all-themes.css" rel="stylesheet" />
</head>

<body class="theme-red">
	<!-- Page Loader -->

	<!-- #END# Page Loader -->
	<!-- Overlay For Sidebars -->

	<!-- #Top Bar -->

	<%@include file="static.jsp"%>
	<section class="content">

		
		<div class="container-fluid">

			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="card">
						<div class="header">

							<ul class="header-dropdown m-r--5">
								<li class="dropdown"><a href="javascript:void(0);"
									class="dropdown-toggle" data-toggle="dropdown" role="button"
									aria-haspopup="true" aria-expanded="false"> <i
										class="material-icons">more_vert</i>
								</a>
									<ul class="dropdown-menu pull-right">
										<li><a href="javascript:void(0);">Action</a></li>
										<li><a href="javascript:void(0);">Another action</a></li>
										<li><a href="javascript:void(0);">Something else here</a></li>
									</ul></li>
							</ul>
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
													<c:set var="var" value="saveNOTE.do?id=${e.getCNE()}&element=${element}" />
												</c:if>
												<c:if test="${e.getNOTE() != 0}">
													<c:set var="var" value="#" />										
												</c:if>
												<td><c:out value="${e.getCNE()}" /></td>
												<td><c:out value="${e.getNom()}" /></td>
												<td><c:out value="${e.getPrenom()}" /></td>
												<td><a	href="${var}" ><c:out value="${e.getNOTE()}" /></a></td>

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

	</section>

	<!-- Jquery Core Js -->
	<script src="plugins/jquery/jquery.min.js"></script>

	<!-- Bootstrap Core Js -->
	<script src="plugins/bootstrap/js/bootstrap.js"></script>

	<!-- Select Plugin Js -->
	<script src="plugins/bootstrap-select/js/bootstrap-select.js"></script>

	<!-- Slimscroll Plugin Js -->
	<script src="plugins/jquery-slimscroll/jquery.slimscroll.js"></script>

	<!-- Waves Effect Plugin Js -->
	<script src="plugins/node-waves/waves.js"></script>

	<!-- Editable Table Plugin Js -->
	<script src="plugins/editable-table/mindmup-editabletable.js"></script>

	<!-- Custom Js -->
	<script src="js1/admin.js"></script>
	<script src="js1/pages/tables/editable-table.js"></script>

	<!-- Demo Js -->
	<script src="js1/demo.js"></script>
</body>

</html>
