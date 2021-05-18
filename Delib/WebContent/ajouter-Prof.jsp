<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="mt" tagdir="/WEB-INF/tags"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


<!doctype html>
<html class="no-js" lang="en">

<head>
<mt:head title="Ajout d'un professeur"></mt:head>

</head>

<body>
	<!--[if lt IE 8]>
		<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->
	<!-- Start Left menu area -->

	<!-- End Left menu area -->
	<!-- Start Welcome area -->
	
		<div class="header-advance-area">
			<!-- Mobile Menu start -->

			<!-- Mobile Menu end -->

			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="sparkline12-list">
						<div class="sparkline12-hd">
							<div class="main-sparkline12-hd">
								<h1>Ajout d'un professeur</h1>
							</div>
						</div>
						<div class="sparkline12-graph">
							<div class="basic-login-form-ad">
								<div class="row">
									<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div class="all-form-element-inner">
											<form action="ajouter-professeur.php" method=post>
												<div class="form-group-inner">
													<div class="row">
														<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
															<label class="login2 pull-right pull-right-pro">Nom</label>
														</div>
														<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
															<input type="text" class="form-control" name="nom" />
														</div>
													</div>
												</div>

												<div class="form-group-inner">
													<div class="row">
														<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
															<label class="login2 pull-right pull-right-pro">Prenom</label>
														</div>
														<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
															<input type="text" class="form-control" name="prenom" />
														</div>
													</div>
												</div>

												<div class="form-group-inner">
													<div class="row">
														<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
															<label class="login2 pull-right pull-right-pro">E-mail</label>
														</div>
														<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
															<input type="text" class="form-control" name="email" />
														</div>
													</div>
												</div>
												<div class="form-group-inner">
													<div class="row">
														<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
															<label class="login2 pull-right pull-right-pro">Etablissement</label>
														</div>
														<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
															<div class="form-select-list">
																<select class="form-control custom-select-value"
																	name="etablissement">
																	<option></option>
																	<option>
																		<c:forEach items="${etablissements}" var="e"
																			varStatus="loop">
                                                             		 ${e.getEtablissement()}  
                                                                         
                                                                 </c:forEach>
																	</option>

																</select>
															</div>
														</div>
													</div>
												</div>

												<div class="form-group-inner">
													<div class="row">
														<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
															<label class="login2 pull-right pull-right-pro">Grade</label>
														</div>
														<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
															<div class="form-select-list">
																<select class="form-control custom-select-value"
																	name="grade">
																	<option></option>
																	<option>PA</option>
																	<option>PH</option>
																	<option>PES</option>
																</select>
															</div>
														</div>
													</div>
												</div>



												<div class="form-group-inner">
													<div class="row">
														<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
															<label class="login2 pull-right pull-right-pro">Login</label>
														</div>
														<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
															<input type="text" class="form-control" name="login" />
														</div>
													</div>
												</div>

												<div class="form-group-inner">
													<div class="row">





														<div class="sparkline12-graph">
															<div id="pwd-container1">
																<div class="form-group">
																	<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
																		<label class="login2 pull-right pull-right-pro">Mot
																			de passe</label>
																	</div>
																	<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
																		<input name="mdp" type="text"
																			class="form-control example1" id="password1"
																			placeholder="Password">

																		<div class="form-group mg-b-pass">
																			<div class="pwstrength_viewport_progress"></div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>



													<div class="form-group-inner">
														<div class="row">
															<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
																<label class="login2 pull-right pull-right-pro">Role</label>
															</div>
															<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
																<div class="form-select-list">
																	<select class="form-control custom-select-value"
																		name="role" id="role">
																		<option></option>
																		<option>Professeur</option>
																		<option>Responsable de filiere</option>
																		<option>Responsable de module</option>
																	</select>
																</div>
															</div>
														</div>
													</div>




													<div id="row_dim">
														<div class="form-group-inner" id="filiere" hidden="true">
															<div class="row">
																<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
																	<label class="login2 pull-right pull-right-pro">Filiere</label>
																</div>
																<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
																	<div class="form-select-list">
																		<select class="form-control custom-select-value"
																			name="filiere">
																			<option></option>
																			<c:forEach items="${filieres}" var="e"
																				varStatus="loop">
																				<option>${ e.getFiliere()}</option>
																			</c:forEach>

																		</select>
																	</div>
																</div>
															</div>
														</div>



														<div class="form-group-inner" id="module" hidden="true">
															<div class="row">
																<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
																	<label class="login2 pull-right pull-right-pro">Module</label>
																</div>
																<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
																	<div class="form-select-list">
																		<select class="form-control custom-select-value"
																			name="module">
																			<option></option>
																			<c:forEach items="${modules}" var="e"
																				varStatus="loop">
																				<option>${ e.getLabelleMod()}</option>
																			</c:forEach>
																		</select>
																	</div>
																</div>
															</div>
														</div>


														<div class="form-group-inner" id="element" hidden="true">
															<div class="row">
																<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
																	<label class="login2 pull-right pull-right-pro">Element</label>
																</div>
																<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
																	<div class="form-select-list">
																		<select class="form-control custom-select-value"
																			name="element">
																			<option></option>
																			<c:forEach items="${Leselements}" var="e"
																				varStatus="loop">
																				<option>${ e.getLabelleElement()}</option>
																			</c:forEach>

																		</select>
																	</div>
																</div>
															</div>
														</div>




													</div>

													<script>
												
												 $('#role').change(function() {
													if($('#role').val() == 'Professeur') {

											            $('#element').show(); 
											            $('#module').hide(); 
											            $('#filiere').hide(); 
											        }
													
													else if($('#role').val() == 'Responsable de filiere') {

											            $('#element').hide(); 
											            $('#module').hide(); 
											            $('#filiere').show(); 
											        }
													else if($('#role').val() == 'Responsable de module') {

											            $('#element').hide(); 
											            $('#module').show(); 
											            $('#filiere').hide(); 
											        }
													else{
														 $('#element').hide(); 
												            $('#module').hide(); 
												            $('#filiere').hide(); 
														
													}
													
												});
													
													

												
											</script>

													<button type="submit"
														class="btn btn-custon-rounded-three btn-success">
														Ajouter le professeur</button>
											</form>
										</div>
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