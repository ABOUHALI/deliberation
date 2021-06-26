<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>IMPORTER NOTE</title>
</head>
<body>
	<%@include file="indexdprof.jsp"%>
		<div class="edit" style="margin-left: 300px; margin-bottom: 300px;">
		<form action="recuperer-Liste-EltR" method="POST"
			enctype="multipart/form-data">
			<div class="multi-uploaded-area mg-b-15">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="alert-title dropzone-custom-sys">
								<h2>Importer liste des notes pour <c:out value="${element}"/></h2>
								<p>Veuillez ajouter le fichier Excel contenant les
									notes pour session Rattrapage</p>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<input name="fichier" type="file"
								accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
						</div>

					</div>
				</div>
			</div>

			<div class="payment-adress">
				<button type="submit"
					class="btn btn-primary waves-effect waves-light">Importer</button>
			</div>

			<div class="col-lg-12"></div>
		</form>
	</div>
</body>
</html>