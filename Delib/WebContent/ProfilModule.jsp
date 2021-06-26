<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>


</head>

<body>

<%@include file="static.jsp"%>
<div class="edit" style="margin-left:300px; margin-bottom: 300px; "  >
		<div class="container">
		<div class="table-wrapper">
			<div class="table-title">
				<div class="row">
					<div class="col-sm-6">
						<h2>
							Profil <b>Module</b>
						</h2>
					</div>
					
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>

						<th>Id Module</th>
						<th>Nom Module</th>
						<th>Coeff</th>
						<th>Nbr ELT</th>
						<th>Semestre</th>
						<th>Note De Validation</th>
						
						
					</tr>
				</thead>
				<tbody>
					

						
							<tr>
								<td>${m.getIDModule()}</td>
								<td>${ m.getLabelleMod()}</td>
								<td>${ m.getCoeff()}</td>
								<td>${ m.getNbr_elt()}</td>
								<td>${ m.getIDSemestre()}</td>
								<td>${ m.getNote_valid()}</td>
								
							</tr>

						

					

				</tbody>
			</table>

		</div>
	</div>
</div>
	

</body>
