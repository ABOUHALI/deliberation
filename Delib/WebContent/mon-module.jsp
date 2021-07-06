<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>

<html>
<head>
<meta charset="ISO-8859-1">
<title>MON ELEMENT</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
</head>
<body>
	<%@include file="indexdresp.jsp"%>
	<div class="edit" style="margin-left: 300px; margin-bottom: 300px;">
		<c:if test="${not empty message}">
			<div class=" alert alert-success" role="alert">
				<c:out value="${message}" />
			</div>
		</c:if>

		<form class="row g-3 needs-validation" novalidate method="post"
			action="update_mon_element.do">

			<div class="col-md-4">
				<div class="form-outline">
					<input type="number" class="form-control" id=""
						value="${module.getIDModule()}" readonly="readonly"
						name="idmodule" /> <label for="" class="form-label">ID
						MODULE</label>

				</div>
			</div>
			<div class="col-md-4">
				<div class="form-outline">
					<input type="text" class="form-control" id="validationCustom02"
						value="${module.getLabelleMod()}" readonly="readonly"
						name="libelle" /> <label for="validationCustom02"
						class="form-label">Libelle Module</label>

				</div>
			</div>
			<div class="col-md-4">
				<div class="input-group form-outline">
					<span class="input-group-text" id="inputGroupPrepend">@</span> <input
						type="text" class="form-control" id="validationCustomUsername"
						aria-describedby="inputGroupPrepend"
						value="${module.getCoeff()}" name="coeff" /> <label
						for="validationCustomUsername" class="form-label">Coefficient
						</label>

				</div>
			</div>
			<div class="col-md-6">
				<div class="form-outline">
					<input type="text" class="form-control" id="validationCustom03"
						value="${module.getIDSemestre()}" name="idmo" /> <label
						for="validationCustom03" class="form-label">ID Semestre LIE</label>

				</div>
			</div>
			<div class="col-md-6">
				<div class="form-outline">
					<input type="text" class="form-control" id="validationCustom05"
						value="${module.getNote_valid()}" name="note" /> <label
						for="validationCustom05" class="form-label">NOTE VALDATION</label>

				</div>
			</div>
			
			<div class="col-md-6">
				<div class="form-outline">
					<input type="text" class="form-control" id="validationCustom05"
						value="${module.getNe()}" name="ne" /> <label
						for="validationCustom05" class="form-label">NOTE ELIMINATOIRE</label>

				</div>
			</div>
			

			<div class="col-12">
				<button class="btn btn-primary" type="submit">UPDATE DATA</button>
			</div>
		</form>
	</div>
	<script>// Example starter JavaScript for disabling form submissions if there are invalid fields
	(() => {
		  'use strict';

		  // Fetch all the forms we want to apply custom Bootstrap validation styles to
		  const forms = document.querySelectorAll('.needs-validation');

		  // Loop over them and prevent submission
		  Array.prototype.slice.call(forms).forEach((form) => {
		    form.addEventListener('submit', (event) => {
		      if (!form.checkValidity()) {
		        event.preventDefault();
		        event.stopPropagation();
		      }
		      form.classList.add('was-validated');
		    }, false);
		  });
		})();</script>
</body>
</html>