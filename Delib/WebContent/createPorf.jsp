<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="main-card mb-3 card">
			<div class="card-body">
				<h5 class="card-title">Ajout d'un professeur</h5>
				<form class="" action="/professeur/creer" method="POST">
					<div class="form-row">
						<div class="col-md-6">
							<div class="position-relative form-group">
								<label for="last_name" class="">Nom: </label><input
									name="last_name" id="last_name" placeholder="Nom du professeur"
									type="text" class="form-control">
							</div>
						</div>
					</div>
					<div class="form-row">
						<div class="col-md-6">
							<div class="position-relative form-group">
								<label for="first_name" class="">Prénom: </label><input
									name="first_name" id="first_name" placeholder="Prénom du professeur"
									type="text" class="form-control">
							</div>
						</div>
					</div>
					<div class="form-row">
						<div class="col-md-6">
							<div class="position-relative form-group">
								<label for="email" class="">Email: </label><input
									name="email" id="email" placeholder="Email du professeur"
									type="email" class="form-control">
							</div>
						</div>
					</div>
					<button class="mt-2 btn btn-primary col-md-6" type="submit">Valider</button>
				</form>
			</div>
		</div>
</body>
</html>