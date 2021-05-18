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
							Profil <b>Etablissement</b>
						</h2>
					</div>
					
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>

						<th>Id Etab</th>
						<th>Nom Etablissement</th>
						<th>DESC -Etablissement</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					

						
							<tr>
								<td>${etab.getIDEtablissement()}</td>
								<td>${ etab.getEtablissement()}</td>
								<td>${ etab.getDescription()}</td>
								<td><a href="#editEmployeeModal" class="edit"
									data-toggle="modal"><i class="material-icons"
										data-toggle="tooltip" title="Edit">&#xE254;</i></a> <a
									href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i
										class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>

								</td>
							</tr>

						

					

				</tbody>
			</table>

		</div>
	</div>
</div>
	

</body>
</html>