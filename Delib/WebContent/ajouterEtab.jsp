<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<!doctype html>
<html class="no-js" lang="en">

<head>


</head>

<body>
	<!--[if lt IE 8]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->
	<!-- Start Left menu area -->
	
	<!-- End Left menu area -->
	<!-- Start Welcome area -->
	<div class="all-content-wrapper">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<
					<div class="logo-pro">
						<a href="index.html"><img class="main-logo"
							src="temp2/img/logo/logo.png" alt="" width="100" height="200" /></a>
					</div>
				</div>
			</div>
		</div>
		<div class="header-advance-area">
			
			<!-- Mobile Menu start -->

			<!-- Mobile Menu end -->
			<div class="breadcome-area">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="breadcome-list">
								<div class="row">
									<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12"></div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div class="sparkline12-list">
					<div class="sparkline12-hd">
						<div class="main-sparkline12-hd">
							<h1>Ajout d'une Etablissement</h1>
						</div>
					</div>

					<div class="sparkline12-graph">
						<div class="basic-login-form-ad">
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div class="all-form-element-inner">
										<form action="ajouter-etablissement.php" method="post">
											<div class="form-group-inner">
												<div class="row">
													<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
														<label class="login2 pull-right pull-right-pro">Nom
															d etablissement</label>
													</div>
													<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
														<input type="text" class="form-control"
															name="etablissement" />
													</div>
												</div>
											</div>


											<div class="form-group-inner">
												<div class="row">
													<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
														<label class="login2 pull-right pull-right-pro">Description
															d'etablissement</label>
													</div>
													<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
														<input type="text" class="form-control" name="desc_etab" />
													</div>
												</div>
											</div>
									</div>

									



									<button type="submit"
										class="btn btn-custon-rounded-three btn-success">Valider</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		
</body>

</html>