<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<div class="breadcome-area">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="breadcome-list single-page-breadcome">
						<div class="row">
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="breadcome-heading">
									<form role="search" class="sr-input-func">
										<input type="text" placeholder="Search..."
											class="search-int form-control"> <a href="#"><i
											class="fa fa-search"></i></a>
									</form>
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<ul class="breadcome-menu">
									<li><a href="#">Home</a> <span class="bread-slash">/</span>
									</li>
									<li><span class="bread-blod">Inscriptions en ligne</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	<div class="product-status mg-b-15">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="product-status-wrap drp-lst">
						<h4>Inscriptions en ligne List</h4>

						<div class="add-product">
							<a href="">Ajouter une inscription depuis excel</a>
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
								</tr>

								<c:forEach items="${etudiants}" var="e" varStatus="loop">
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
											<a href="inscriptionAd.do?massarEtud=${e.getMassarEtud()}"><button
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
</body>
</html>