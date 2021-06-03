<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>NOTE MODULE --Excel</title>
</head>
<body>

	<%@include file="static.jsp"%>
	<div class="edit" style="margin-left: 300px; margin-bottom: 300px;">
		<form action="note-element-excel.do" method="POST"
			enctype="multipart/form-data">
			<div class="multi-uploaded-area mg-b-15">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="alert-title dropzone-custom-sys">
								<h2>Ajouter une NOTE</h2>
								
								<div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
									<c:if test="${not empty message}"><div class="alert alert-danger" role="alert"><c:out value="${message}"/></div></c:if>
									<div class="form-select-list">
										<select class="form-control custom-select-value"
											name="element">
											<option></option>
											<c:forEach items="${elements}" var="m" varStatus="loop">
												<option>${m.getLabelleElement()}</option>
											</c:forEach>

										</select>
									</div>
								</div>
							</div>
							<p>Veuillez ajouter le fichier Excel contenant la Liste</p>
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
			<button type="submit"
				class="btn btn-primary waves-effect waves-light">IMPORTER</button>
		</form>

	</div>




</body>
</html>