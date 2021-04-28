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
							Liste <b>Filiere</b>
						</h2>
					</div>
					<div class="col-sm-6">
						<a href="#addEmployeeModal" class="btn btn-success"
							data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Ajouter
								Filiere</span></a>
					</div>
				</div>
			</div>
			<table class="table table-striped table-hover">
				<thead>
					<tr>

						<th>Id Filiere</th>
						<th>Nom Filiere</th>
						<th>id etab</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
	
							<tr>
							
								<td>${f.getIDFiliere()}</td>
								<td>${f.getFiliere()}</td>
								
								
							</tr>

						

					

				</tbody>
			</table>

		</div>
	</div>
</div>
	

</body>
</html>