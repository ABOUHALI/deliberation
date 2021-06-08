<%@ page language="java" 
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@include file="static.jsp"%>
<div class="edit" style="margin-left:300px; margin-bottom: 300px; "  >
<div class="main-card mb-3 card">
	<div class="card-body">
		<h5 class="card-title">Inscription Administrative de l'Etudiant</h5>
		<form class="" action="inscriptionAd.do" method="Post"
			enctype="multipart/form-data">


			<div class="form-row">
				<div class="col-md-6">
					<div class="position-relative form-group">
						<label for="Nom Etudiant" class="">Nom Etudiant</label> <input
							type="text"
							value="${e.getNomFr() } -- ${e.getPrenomFr() }"
							 name="test" readonly="readonly"/>


					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6">
					<div class="position-relative form-group">
						<label for="Nom Etudiant" class="">CNE</label> <input
							type="text"
							value="${massar}" readonly="readonly"
							 name="cne" />


					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="col-md-6">
					<div class="position-relative form-group">
						<label for="Nom Etudiant" class="">Adresse Parents</label> <input
							type="text" name="adresse" />


					</div>
				</div>
				<div class="form-row" style="margin:auto;align-content:flex-end;">
					<div class="col-md-6">
						<div class="position-relative form-group">
							<label for="Nom Etudiant" class="">Telephone</label> <input
								type="text" name="tel" />


						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="position-relative form-group">
						<label for="Filiere" class="">Filiere</label> <select
							name="filiere" id="exampleSelect" class="form-control" required>
							<option>Choisir la filiére</option>
							<c:forEach var="f" items="${fil }">
								<option value="${f.getIDFiliere()}">${f.getFiliere() }</option>
							</c:forEach>
						</select>
					</div>

				</div>
				<div class="col-md-6">
					<div class="position-relative form-group">
						<label for="Filiere" class="">Bourse</label> <input type="text"
							name="bourse" />

					</div>

				</div>

			</div>

			<div class="form-row">

				<div class="col-md-6">
					<div class="position-relative form-group">
						<label for="annee_academique" class="">Année academique</label> <select
							class="form-control custom-select-value" name="acad">
							<option></option>
							<c:forEach items="${an_acad}" var="a" varStatus="loop">
								<option><c:out value="${a.getAnne_acad()}"/></option>
							</c:forEach>

						</select>
					</div>
				</div>

			</div>
			<div class="form-row">
				<div class="col-md-6">
					<div class="position-relative form-group">
						<input type="checkbox" class="form-check-input"
							onchange="displayInput('photo')" name="filtre"
							style="margin-left: 1px">
						<label style="margin-left: 15px">Photo</label>
						
						
						<input type="checkbox" class="form-check-input"
							onchange="displayInput('cne')" name="filtre"
							style="margin-left: 1px">
						<label style="margin-left: 15px">CNE</label>
						
						
						<input type="checkbox" class="form-check-input"
							onchange="displayInput('bac')" name="filtre"
							style="margin-left: 10px">
						<label style="margin-left: 28px">Bac</label>
						
						
						 <input type="checkbox"	class="form-check-input" onchange="displayInput('rn')"
							name="filtre" style="margin-left: 10px">
						<label	style="margin-left: 28px">Relevé de note</label>
						
						 <input	type="checkbox" class="form-check-input"
							onchange="displayInput('an')" name="filtre"
							style="margin-left: 10px">
						<label style="margin-left: 28px">Acte de Naissance</label>
						
						 <input	type="checkbox" class="form-check-input"
							onchange="displayInput('cin')" name="filtre"
							style="margin-left: 10px">
						<label style="margin-left: 28px">Cin</label><br>
					</div>
				</div>

				<div class="col-md-6" id="photo" style="display: none">
					<div class="position-relative form-group">
						<label for="annee_academique" class="">Inserer photo</label><input
							name="photo" id="file" type="file" class="form-control-file">
					</div>
				</div>
				<div class="col-md-6" id="cne" style="display: none">
					<div class="position-relative form-group">
						<label for="annee_academique" class="">Inserer CNE</label><input
							name="cne" id="file" type="file" class="form-control-file">
					</div>
				</div>
				<div class="col-md-6" id="bac" style="display: none">
					<div class="position-relative form-group">
						<label for="annee_academique" class="">Inserer Bac</label><input
							name="bac" id="file" type="file" class="form-control-file">
					</div>
				</div>

				<div class="col-md-6" id="rn" style="display: none">
					<div class="position-relative form-group">
						<label for="annee_academique" class="">Inserer Relevé de
							note</label><input name="rn" id="file" type="file"
							class="form-control-file">
					</div>
				</div>
				<div class="col-md-6" id="an" style="display: none">
					<div class="position-relative form-group">
						<label for="annee_academique" class="">Inserer Acte de
							naissance</label><input name="an" id="file" type="file"
							class="form-control-file">
					</div>
				</div>
				<div class="col-md-6" id="cin" style="display: none">
					<div class="position-relative form-group">
						<label for="annee_academique" class="">Inserer Cin</label><input
							name="cin" id="file" type="file" class="form-control-file">
					</div>
				</div>

			</div>

			<button class="mt-2 btn btn-primary col-md-12" type="submit">Valider</button>
		</form>
		
</div>
	</div>
</div>

<script>
	function displayInput(idS) {

		var x = document.getElementById(idS + "");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}
</script>
