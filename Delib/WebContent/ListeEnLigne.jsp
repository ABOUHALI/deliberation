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
							<h4>Inscriptions en ligne List</h4>

							<div class="add-product">
								<a href="add-inscriptionEexcel">Ajouter une inscription depuis excel</a>
							</div>
							<div class="asset-inner">
								<table>
									<tr>

										<th>Code Massar</th>
										<th>Nom</th>
										<th>Prenom</th>
										<th>Cin</th>
										<th>Serie bac</th>
										<th>Mention</th>
										<th>Date de l'inscription</th>
										<th>Action</th>
									</tr>

									<c:forEach items="${etudiants}" var="e" >
										<tr>

											<td>${ e.getMassarEtud()}</td>
											<td>${ e.getNomFr()}</td>
											<td>${ e.getPrenomFr()}</td>
											<td>${ e.getCin()}</td>
											<td>${ e.getsBac()}</td>
											<td>${ e.getMt()}</td>
											<td>${ e.getDate1in()}</td>

											<td>
												<!--    <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                            <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>-->
												<a href="/Delib/administrative.php?massarEtud=<c:out value='${e.getMassarEtud()}'/>" ><button
														class="btn btn-primary waves-effect waves-light">
														Inscrire administrativement</button> </a>

											</td>



										</tr>
									</c:forEach>


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