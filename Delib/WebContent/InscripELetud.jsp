
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
<!-- Required meta tags-->
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="Colorlib Templates">
<meta name="author" content="Colorlib">
<meta name="keywords" content="Colorlib Templates">

<!-- Title Page-->
<title>Inscription</title>

<!-- Icons font CSS-->
<link href="vendor/mdi-font/css/material-design-iconic-font.min.css"
	rel="stylesheet" media="all">
<link href="vendor/font-awesome-4.7/css/font-awesome.min.css"
	rel="stylesheet" media="all">
<!-- Font special for pages-->
<link
	href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
	rel="stylesheet">

<!-- Vendor CSS-->
<link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
<link href="vendor/datepicker/daterangepicker.css" rel="stylesheet"
	media="all">

<!-- Main CSS-->
<link href="css/main.css" rel="stylesheet" media="all">
</head>

<body>
	<div class="page-wrapper bg-blue p-t-180 p-b-100 font-robo">
		<div class="wrapper wrapper--w960">
			<div class="card card-2">
				<div class="card-heading"></div>
				<div class="card-body">
					<h2 class="title">Inscription en ligne</h2>
					<form action="InscriptionEnLigne" method="POST"
						enctype="multipart/form-data">
						<!--       <div class="input-group">
	                            <input class="input--style-2" type="text" placeholder="Nom" name="name">
	                        </div>
	
	                        <div class="input-group">
	                            <input class="input--style-2" type="text" placeholder="Name" name="name">
	                        </div>  -->


						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<input class="input--style-2" type="text" placeholder="Nom"
										name="NomFr">

								</div>
							</div>
							<div class="col-2">
								<div class="input-group">
									<input class="input--style-2" type="text" placeholder="Prenom"
										name="PrenomFr">
								</div>
							</div>
						</div>


						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<input class="input--style-2" type="text"
										placeholder="الاسم عائلي " name="NomAr">

								</div>
							</div>
							<div class="col-2">
								<div class="input-group">
									<input class="input--style-2" type="text"
										placeholder="الاسم الشخصي"  name="PrenomAr">
								</div>
							</div>
						</div>
						<div class="input--style-2 js-datepicker" >
						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<input type="date" placeholder="Date de naissance" name="dateN">
									<i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
								</div>
							</div>
							<div class="col-2">
								<div class="input-group">
									<div class="rs-select2 js-select-simple select--no-search">
										<select name="sexe">
											<option disabled="disabled" selected="selected">Sexe</option>
											<option>M</option>
											<option>F</option>
										</select>
										<div class="select-dropdown"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="input-group">
							<div class="rs-select2 js-select-simple select--no-search">
								<select name="lieu_naissance">
									<option disabled="disabled" selected="selected">Lieu
										de naissance</option>
									<option value="Afghanistan">Afghanistan</option>
									<option value="Afrique du Sud">Afrique du Sud</option>
									<option value="Akrotiri">Akrotiri</option>
									<option value="Albanie">Albanie</option>
									<option value="Algérie">Algérie</option>
									<option value="Allemagne">Allemagne</option>
									<option value="Andorre">Andorre</option>
									<option value="Angola">Angola</option>
									<option value="Anguilla">Anguilla</option>
									<option value="Antarctique">Antarctique</option>
									<option value="Antigua-et-Barbuda">Antigua-et-Barbuda
									</option>
									<option value="Arabie saoudite">Arabie saoudite</option>
									<option value="Arctic Ocean">Arctic Ocean</option>
									<option value="Argentine">Argentine</option>
									<option value="Arménie">Arménie</option>
									<option value="Aruba">Aruba</option>
									<option value="Ashmore and Cartier Islands">Ashmore
										and Cartier Islands</option>
									<option value="Atlantic Ocean">Atlantic Ocean</option>
									<option value="Australie">Australie</option>
									<option value="Autriche">Autriche</option>
									<option value="Azerbaïdjan">Azerbaïdjan</option>
									<option value="Bahamas">Bahamas</option>
									<option value="Bahreïn">Bahreïn</option>
									<option value="Bangladesh">Bangladesh</option>
									<option value="Barbade">Barbade</option>
									<option value="Belau">Belau</option>
									<option value="Belgique">Belgique</option>
									<option value="Belize">Belize</option>
									<option value="Bénin">Bénin</option>
									<option value="Bermudes">Bermudes</option>
									<option value="Bhoutan">Bhoutan</option>
									<option value="Biélorussie">Biélorussie</option>
									<option value="Birmanie">Birmanie</option>
									<option value="Bolivie">Bolivie</option>
									<option value="Bosnie-Herzégovine">Bosnie-Herzégovine
									</option>
									<option value="Botswana">Botswana</option>
									<option value="Brésil">Brésil</option>
									<option value="Brunei">Brunei</option>
									<option value="Bulgarie">Bulgarie</option>
									<option value="Burkina Faso">Burkina Faso</option>
									<option value="Burundi">Burundi</option>
									<option value="Cambodge">Cambodge</option>
									<option value="Cameroun">Cameroun</option>
									<option value="Canada">Canada</option>
									<option value="Cap-Vert">Cap-Vert</option>
									<option value="Chili">Chili</option>
									<option value="Chine">Chine</option>
									<option value="Chypre">Chypre</option>
									<option value="Clipperton Island">Clipperton Island</option>
									<option value="Colombie">Colombie</option>
									<option value="Comores">Comores</option>
									<option value="Congo">Congo</option>
									<option value="Coral Sea Islands">Coral Sea Islands</option>
									<option value="Corée du Nord">Corée du Nord</option>
									<option value="Corée du Sud">Corée du Sud</option>
									<option value="Costa Rica">Costa Rica</option>
									<option value="Côte d&#x27;Ivoire">Côte d&#x27;Ivoire
									</option>
									<option value="Croatie">Croatie</option>
									<option value="Cuba">Cuba</option>
									<option value="Curacao">Curacao</option>
									<option value="Danemark">Danemark</option>
									<option value="Dhekelia">Dhekelia</option>
									<option value="Djibouti">Djibouti</option>
									<option value="Dominique">Dominique</option>
									<option value="Égypte">Égypte</option>
									<option value="Émirats arabes unis">Émirats arabes
										unis</option>
									<option value="Équateur">Équateur</option>
									<option value="Érythrée">Érythrée</option>
									<option value="Espagne">Espagne</option>
									<option value="Estonie">Estonie</option>
									<option value="États-Unis">États-Unis</option>
									<option value="Éthiopie">Éthiopie</option>
									<option value="ex-République yougoslave de Macédoine">
										ex-République yougoslave de Macédoine</option>
									<option value="Finlande">Finlande</option>
									<option value="France">France</option>
									<option value="Gabon">Gabon</option>
									<option value="Gambie">Gambie</option>
									<option value="Gaza Strip">Gaza Strip</option>
									<option value="Géorgie">Géorgie</option>
									<option value="Ghana">Ghana</option>
									<option value="Gibraltar">Gibraltar</option>
									<option value="Grèce">Grèce</option>
									<option value="Grenade">Grenade</option>
									<option value="Groenland">Groenland</option>
									<option value="Guam">Guam</option>
									<option value="Guatemala">Guatemala</option>
									<option value="Guernsey">Guernsey</option>
									<option value="Guinée">Guinée</option>
									<option value="Guinée équatoriale">Guinée équatoriale
									</option>
									<option value="Guinée-Bissao">Guinée-Bissao</option>
									<option value="Guyana">Guyana</option>
									<option value="Haïti">Haïti</option>
									<option value="Honduras">Honduras</option>
									<option value="Hong Kong">Hong Kong</option>
									<option value="Hongrie">Hongrie</option>
									<option value="Ile Bouvet">Ile Bouvet</option>
									<option value="Ile Christmas">Ile Christmas</option>
									<option value="Ile Norfolk">Ile Norfolk</option>
									<option value="Iles Cayman">Iles Cayman</option>
									<option value="Iles Cook">Iles Cook</option>
									<option value="Iles des Cocos (Keeling)">Iles des
										Cocos (Keeling)</option>
									<option value="Iles Falkland">Iles Falkland</option>
									<option value="Iles Féroé">Iles Féroé</option>
									<option value="Iles Fidji">Iles Fidji</option>
									<option value="Iles Géorgie du Sud et Sandwich du Sud">
										Iles Géorgie du Sud et Sandwich du Sud</option>
									<option value="Iles Heard et McDonald">Iles Heard et
										McDonald</option>
									<option value="Iles Marshall">Iles Marshall</option>
									<option value="Iles Pitcairn">Iles Pitcairn</option>
									<option value="Iles Salomon">Iles Salomon</option>
									<option value="Iles Svalbard et Jan Mayen">Iles
										Svalbard et Jan Mayen</option>
									<option value="Iles Turks-et-Caicos">Iles
										Turks-et-Caicos</option>
									<option value="Iles Vierges américaines">Iles Vierges
										américaines</option>
									<option value="Iles Vierges britanniques">Iles Vierges
										britanniques</option>
									<option value="Inde">Inde</option>
									<option value="Indian Ocean">Indian Ocean</option>
									<option value="Indonésie">Indonésie</option>
									<option value="Iran">Iran</option>
									<option value="Iraq">Iraq</option>
									<option value="Irlande">Irlande</option>
									<option value="Islande">Islande</option>
									<option value="Israël">Israël</option>
									<option value="Italie">Italie</option>
									<option value="Jamaïque">Jamaïque</option>
									<option value="Jan Mayen">Jan Mayen</option>
									<option value="Japon">Japon</option>
									<option value="Jersey">Jersey</option>
									<option value="Jordanie">Jordanie</option>
									<option value="Kazakhstan">Kazakhstan</option>
									<option value="Kenya">Kenya</option>
									<option value="Kirghizistan">Kirghizistan</option>
									<option value="Kiribati">Kiribati</option>
									<option value="Kosovo">Kosovo</option>
									<option value="Koweït">Koweït</option>
									<option value="Laos">Laos</option>
									<option value="Lesotho">Lesotho</option>
									<option value="Lettonie">Lettonie</option>
									<option value="Liban">Liban</option>
									<option value="Liberia">Liberia</option>
									<option value="Libye">Libye</option>
									<option value="Liechtenstein">Liechtenstein</option>
									<option value="Lituanie">Lituanie</option>
									<option value="Luxembourg">Luxembourg</option>
									<option value="Macao">Macao</option>
									<option value="Madagascar">Madagascar</option>
									<option value="Malaisie">Malaisie</option>
									<option value="Malawi">Malawi</option>
									<option value="Maldives">Maldives</option>
									<option value="Mali">Mali</option>
									<option value="Malte">Malte</option>
									<option value="Man, Isle of">Man, Isle of</option>
									<option value="Mariannes du Nord">Mariannes du Nord</option>
									<option value="Maroc">Maroc</option>
									<option value="Maurice">Maurice</option>
									<option value="Mauritanie">Mauritanie</option>
									<option value="Mexique">Mexique</option>
									<option value="Micronésie">Micronésie</option>
									<option value="Moldavie">Moldavie</option>
									<option value="Monaco">Monaco</option>
									<option value="Monde">Monde</option>
									<option value="Mongolie">Mongolie</option>
									<option value="Monténégro">Monténégro</option>
									<option value="Montserrat">Montserrat</option>
									<option value="Mozambique">Mozambique</option>
									<option value="Namibie">Namibie</option>
									<option value="Nauru">Nauru</option>
									<option value="Navassa Island">Navassa Island</option>
									<option value="Népal">Népal</option>
									<option value="Nicaragua">Nicaragua</option>
									<option value="Niger">Niger</option>
									<option value="Nigeria">Nigeria</option>
									<option value="Nioué">Nioué</option>
									<option value="Norvège">Norvège</option>
									<option value="Nouvelle-Calédonie">Nouvelle-Calédonie
									</option>
									<option value="Nouvelle-Zélande">Nouvelle-Zélande</option>
									<option value="Oman">Oman</option>
									<option value="Ouganda">Ouganda</option>
									<option value="Ouzbékistan">Ouzbékistan</option>
									<option value="Pacific Ocean">Pacific Ocean</option>
									<option value="Pakistan">Pakistan</option>
									<option value="Panama">Panama</option>
									<option value="Papouasie-Nouvelle-Guinée">
										Papouasie-Nouvelle-Guinée</option>
									<option value="Paracel Islands">Paracel Islands</option>
									<option value="Paraguay">Paraguay</option>
									<option value="Pays-Bas">Pays-Bas</option>
									<option value="Pérou">Pérou</option>
									<option value="Philippines">Philippines</option>
									<option value="Pologne">Pologne</option>
									<option value="Polynésie française">Polynésie
										française</option>
									<option value="Porto Rico">Porto Rico</option>
									<option value="Portugal">Portugal</option>
									<option value="Qatar">Qatar</option>
									<option value="République centrafricaine">République
										centrafricaine</option>
									<option value="République démocratique du Congo">
										République démocratique du Congo</option>
									<option value="République dominicaine">République
										dominicaine</option>
									<option value="Roumanie">Roumanie</option>
									<option value="Royaume-Uni">Royaume-Uni</option>
									<option value="Russie">Russie</option>
									<option value="Rwanda">Rwanda</option>
									<option value="Sahara occidental">Sahara occidental</option>
									<option value="Saint-Barthélemy">Saint-Barthélemy</option>
									<option value="Saint-Christophe-et-Niévès">
										Saint-Christophe-et-Niévès</option>
									<option value="Sainte-Hélène">Sainte-Hélène</option>
									<option value="Sainte-Lucie">Sainte-Lucie</option>
									<option value="Saint-Marin">Saint-Marin</option>
									<option value="Saint-Martin">Saint-Martin</option>
									<option value="Saint-Pierre-et-Miquelon">
										Saint-Pierre-et-Miquelon</option>
									<option value="Saint-Siège">Saint-Siège</option>
									<option value="Saint-Vincent-et-les-Grenadines">
										Saint-Vincent-et-les-Grenadines</option>
									<option value="Salvador">Salvador</option>
									<option value="Samoa">Samoa</option>
									<option value="Samoa américaines">Samoa américaines</option>
									<option value="Sao Tomé-et-Principe">Sao
										Tomé-et-Principe</option>
									<option value="Sénégal">Sénégal</option>
									<option value="Serbie">Serbie</option>
									<option value="Seychelles">Seychelles</option>
									<option value="Sierra Leone">Sierra Leone</option>
									<option value="Singapour">Singapour</option>
									<option value="Sint Maarten">Sint Maarten</option>
									<option value="Slovaquie">Slovaquie</option>
									<option value="Slovénie">Slovénie</option>
									<option value="Somalie">Somalie</option>
									<option value="Soudan">Soudan</option>
									<option value="Soudan du Sud">Soudan du Sud</option>
									<option value="Southern Ocean">Southern Ocean</option>
									<option value="Spratly Islands">Spratly Islands</option>
									<option value="Sri Lanka">Sri Lanka</option>
									<option value="Suède">Suède</option>
									<option value="Suisse">Suisse</option>
									<option value="Suriname">Suriname</option>
									<option value="Swaziland">Swaziland</option>
									<option value="Syrie">Syrie</option>
									<option value="Tadjikistan">Tadjikistan</option>
									<option value="Taïwan">Taïwan</option>
									<option value="Tanzanie">Tanzanie</option>
									<option value="Tchad">Tchad</option>
									<option value="Terres australes françaises">Terres
										australes françaises</option>
									<option value="Territoire britannique de l&#x27;Océan Indien">
										Territoire britannique de l&#x27;Océan Indien</option>
									<option value="Thaïlande">Thaïlande</option>
									<option value="Timor Oriental">Timor Oriental</option>
									<option value="Togo">Togo</option>
									<option value="Tokélaou">Tokélaou</option>
									<option value="Tonga">Tonga</option>
									<option value="Trinité-et-Tobago">Trinité-et-Tobago</option>
									<option value="Tunisie">Tunisie</option>
									<option value="Turkménistan">Turkménistan</option>
									<option value="Turquie">Turquie</option>
									<option value="Tuvalu">Tuvalu</option>
									<option value="Ukraine">Ukraine</option>
									<option value="Union européenne">Union européenne</option>
									<option value="Uruguay">Uruguay</option>
									<option value="Vanuatu">Vanuatu</option>
									<option value="Venezuela">Venezuela</option>
									<option value="Viêt Nam">Viêt Nam</option>
									<option value="Wake Island">Wake Island</option>
									<option value="Wallis-et-Futuna">Wallis-et-Futuna</option>
									<option value="West Bank">West Bank</option>
									<option value="Yémen">Yémen</option>
									<option value="Zambie">Zambie</option>
									<option value="Zimbabwe">Zimbabwe</option>
								</select>
								<div class="select-dropdown"></div>
							</div>
						</div>
						<div class="input-group">
							<div class="rs-select2 js-select-simple select--no-search">
								<select name="lieuN_ar">
									<option disabled="disabled" selected="selected">مكان
										الولادة</option>

									<option value="لصين">لصين</option>
									<option value=" الهند">الهند</option>
									<option value=" الولايات المتحدة">الولايات المتحدة</option>
									<option value=" إندونيسيا">إندونيسيا</option>
									<option value=" البرازيل">البرازيل</option>
									<option value=" باكستان">باكستان</option>
									<option value=" نيجيريا">نيجيريا</option>
									<option value=" بنغلاديش">بنغلاديش</option>
									<option value=" روسيا">روسيا</option>
									<option value=" اليابان">اليابان</option>
									<option value=" المكسيك">المكسيك</option>
									<option value=" الفلبين">الفلبين</option>
									<option value=" فيتنام">فيتنام</option>
									<option value=" إثيوبيا">إثيوبيا</option>
									<option value=" مصر">مصر</option>
									<option value=" ألمانيا">ألمانيا</option>
									<option value=" إيران">إيران</option>
									<option value=" تركيا">تركيا</option>
									<option value=" جمهورية الكونغو الديمقراطية">جمهورية
										الكونغو الديمقراطية</option>
									<option value=" تايلاند">تايلاند</option>
									<option value=" فرنسا">فرنسا</option>
									<option value=" المملكة المتحدة">المملكة المتحدة</option>
									<option value=" إيطاليا">إيطاليا</option>
									<option value=" جنوب أفريقيا">جنوب أفريقيا</option>
									<option value=" كوريا الجنوبية">كوريا الجنوبية</option>
									<option value=" كولومبيا">كولومبيا</option>
									<option value=" إسبانيا">إسبانيا</option>
									<option value=" أوكرانيا">أوكرانيا</option>
									<option value=" تنزانيا">تنزانيا</option>
									<option value=" كينيا">كينيا</option>
									<option value=" الأرجنتين">الأرجنتين</option>
									<option value=" بولندا">بولندا</option>
									<option value=" السودان">السودان</option>
									<option value=" الجزائر">الجزائر</option>
									<option value=" العراق">العراق</option>
									<option value=" كندا">كندا</option>
									<option value=" أوغندا">أوغندا</option>
									<option value=" المغرب">المغرب</option>
									<option value=" بيرو">بيرو</option>
									<option value=" أوزبكستان">أوزبكستان</option>
									<option value=" ماليزيا">ماليزيا</option>
									<option value=" السعودية">السعودية</option>
									<option value=" فنزويلا">فنزويلا</option>
									<option value=" نيبال">نيبال</option>
									<option value=" أفغانستان">أفغانستان</option>
									<option value=" كوريا الشمالية">كوريا الشمالية</option>
									<option value=" غانا">غانا</option>
									<option value=" اليمن">اليمن</option>
									<option value=" موزمبيق">موزمبيق</option>
									<option value=" تايوان">تايوان</option>
									<option value=" أستراليا">أستراليا</option>
									<option value=" ساحل العاج">ساحل العاج</option>
									<option value=" سوريا">سوريا</option>
									<option value=" مدغشقر">مدغشقر</option>
									<option value=" أنغولا">أنغولا</option>
									<option value=" الكاميرون">الكاميرون</option>
									<option value=" سريلانكا">سريلانكا</option>
									<option value=" رومانيا">رومانيا</option>
									<option value=" بوركينا فاسو">بوركينا فاسو</option>
									<option value=" النيجر">النيجر</option>
									<option value=" كازاخستان">كازاخستان</option>
									<option value=" هولندا">هولندا</option>
									<option value=" تشيلي">تشيلي</option>
									<option value=" مالاوي">مالاوي</option>
									<option value=" الإكوادور">الإكوادور</option>
									<option value=" غواتيمالا">غواتيمالا</option>
									<option value=" مالي">مالي</option>
									<option value=" السنغال">السنغال</option>
									<option value=" زامبيا">زامبيا</option>
									<option value=" زيمبابوي">زيمبابوي</option>
									<option value=" تشاد">تشاد</option>
									<option value=" جنوب السودان">جنوب السودان</option>
									<option value=" كوبا">كوبا</option>
									<option value=" بلجيكا">بلجيكا</option>
									<option value=" غينيا">غينيا</option>
									<option value=" اليونان">اليونان</option>
									<option value=" تونس">تونس</option>
									<option value=" البرتغال">البرتغال</option>
									<option value=" رواندا">رواندا</option>
									<option value=" التشيك">التشيك</option>
									<option value=" الصومال">الصومال</option>
									<option value=" هايتي">هايتي</option>
									<option value=" بنين">بنين</option>
									<option value=" بوروندي">بوروندي</option>
									<option value=" بوليفيا">بوليفيا</option>
									<option value=" المجر">المجر</option>
									<option value=" السويد">السويد</option>
									<option value=" بيلاروسيا">بيلاروسيا</option>
									<option value=" جمهورية الدومينيكان">جمهورية
										الدومينيكان</option>
									<option value=" أذربيجان">أذربيجان</option>
									<option value=" النمسا">النمسا</option>
									<option value=" هندوراس">هندوراس</option>
									<option value=" الإمارات">الإمارات</option>
									<option value=" سويسرا">سويسرا</option>
									<option value=" إسرائيل">إسرائيل</option>
									<option value=" طاجيكستان">طاجيكستان</option>
									<option value=" بلغاريا">بلغاريا</option>
									<option value=" صربيا">صربيا</option>
									<option value=" هونغ كونغ (الصين)">هونغ كونغ (الصين)</option>
									<option value=" بابوا غينيا الجديدة">بابوا غينيا
										الجديدة</option>
									<option value=" باراغواي">باراغواي</option>
									<option value=" لاوس">لاوس</option>
									<option value=" الأردن">الأردن</option>
									<option value=" السلفادور">السلفادور</option>
									<option value=" إريتريا">إريتريا</option>
									<option value=" ليبيا">ليبيا</option>
									<option value=" توغو">توغو</option>
									<option value=" سيراليون">سيراليون</option>
									<option value=" نيكاراجوا">نيكاراجوا</option>
									<option value=" الدنمارك">الدنمارك</option>
									<option value=" قرغيزستان">قرغيزستان</option>
									<option value=" فنلندا">فنلندا</option>
									<option value=" سلوفاكيا">سلوفاكيا</option>
									<option value=" سنغافورة">سنغافورة</option>
									<option value=" تركمانستان">تركمانستان</option>
									<option value=" النرويج">النرويج</option>
									<option value=" لبنان">لبنان</option>
									<option value=" كوستاريكا">كوستاريكا</option>
									<option value=" جمهورية أفريقيا الوسطى">جمهورية
										أفريقيا الوسطى</option>
									<option value=" جمهورية أيرلندا">جمهورية أيرلندا</option>
									<option value=" جورجيا">جورجيا</option>
									<option value=" نيوزيلندا">نيوزيلندا</option>
									<option value=" جمهورية الكونغو">جمهورية الكونغو</option>
									<option value=" فلسطين">فلسطين</option>
									<option value=" ليبيريا">ليبيريا</option>
									<option value=" كرواتيا">كرواتيا</option>
									<option value=" البوسنة والهرسك">البوسنة والهرسك</option>
									<option value=" سلطنة عمان">سلطنة عمان</option>
									<option value=" بورتوريكو (الولايات المتحدة)">
										بورتوريكو (الولايات المتحدة)</option>
									<option value=" الكويت">الكويت</option>
									<option value=" مولدافيا">مولدافيا</option>
									<option value=" موريتانيا">موريتانيا</option>
									<option value=" بنما">بنما</option>
									<option value=" أوروغواي">أوروغواي</option>
									<option value=" أرمينيا">أرمينيا</option>
									<option value=" ليتوانيا">ليتوانيا</option>
									<option value=" ألبانيا">ألبانيا</option>
									<option value=" منغوليا">منغوليا</option>
									<option value=" جامايكا">جامايكا</option>
									<option value=" ناميبيا">ناميبيا</option>
									<option value=" ليسوتو">ليسوتو</option>
									<option value=" سلوفينيا">سلوفينيا</option>
									<option value=" جمهورية مقدونيا">جمهورية مقدونيا</option>
									<option value=" بوتسوانا">بوتسوانا</option>
									<option value=" لاتفيا">لاتفيا</option>
									<option value=" قطر">قطر</option>
									<option value=" غامبيا">غامبيا</option>
									<option value=" غينيا بيساو">غينيا بيساو</option>
									<option value=" الغابون">الغابون</option>
									<option value=" غينيا الاستوائية">غينيا الاستوائية</option>
									<option value=" ترينيداد وتوباغو">ترينيداد وتوباغو</option>
									<option value=" إستونيا">إستونيا</option>
									<option value=" موريشيوس">موريشيوس</option>
									<option value=" سوازيلاند">سوازيلاند</option>
									<option value=" البحرين">البحرين</option>
									<option value=" تيمور الشرقية">تيمور الشرقية</option>
									<option value=" جيبوتي">جيبوتي</option>
									<option value=" قبرص">قبرص</option>
									<option value=" فيجي">فيجي</option>
									<option value=" ريونيون (فرنسا)">ريونيون (فرنسا)</option>
									<option value=" غويانا">غويانا</option>
									<option value=" بوتان">بوتان</option>
									<option value=" جزر القمر">جزر القمر</option>
									<option value=" الجبل الأسود">الجبل الأسود</option>
									<option value=" ماكاو (الصين)">ماكاو (الصين)</option>
									<option value=" الصحراء الغربية">الصحراء الغربية</option>
									<option value=" لوكسمبورغ">لوكسمبورغ</option>
									<option value=" سورينام">سورينام</option>
									<option value=" الرأس الأخضر">الرأس الأخضر</option>
									<option value=" مالطا">مالطا</option>
									<option value=" جوادلوب (فرنسا)">جوادلوب (فرنسا)</option>
									<option value=" مارتينيك (فرنسا)">مارتينيك (فرنسا)</option>
									<option value=" بروناي">بروناي</option>
									<option value=" البهاما">البهاما</option>
									<option value=" آيسلندا">آيسلندا</option>
									<option value=" جزر المالديف">جزر المالديف</option>
									<option value=" بليز">بليز</option>
									<option value=" باربادوس">باربادوس</option>
									<option value=" بولينزيا الفرنسية (فرنسا)">بولينزيا
										الفرنسية (فرنسا)</option>
									<option value=" فانواتو">فانواتو</option>
									<option value=" كاليدونيا الجديدة (فرنسا)">كاليدونيا
										الجديدة (فرنسا)</option>
									<option value=" غويانا الفرنسية (فرنسا)">غويانا
										الفرنسية (فرنسا)</option>
									<option value=" مايوت (فرنسا)">مايوت (فرنسا)</option>
									<option value=" ساموا">ساموا</option>
									<option value=" ساو تومي وبرينسيب">ساو تومي وبرينسيب</option>
									<option value=" سانت لوسيا">سانت لوسيا</option>
									<option value=" غوام (الولايات المتحدة)">غوام
										(الولايات المتحدة)</option>
									<option value=" كوراساو (هولندا)">كوراساو (هولندا)</option>
									<option value=" سانت فنسنت والجرينادين">سانت فنسنت
										والجرينادين</option>
									<option value=" كيريباتي">كيريباتي</option>
									<option value=" جزر العذراء الأمريكية (الولايات المتحدة)">
										جزر العذراء الأمريكية (الولايات المتحدة)</option>
									<option value=" جرينادا">جرينادا</option>
									<option value=" تونجا">تونجا</option>
									<option value=" أروبا (هولندا)">أروبا (هولندا)</option>
									<option value=" ولايات ميكرونيسيا المتحدة">ولايات
										ميكرونيسيا المتحدة</option>
									<option value=" جيرزي (المملكة المتحدة)">جيرزي
										(المملكة المتحدة)</option>
									<option value=" سيشيل">سيشيل</option>
									<option value=" أنتيغوا وباربودا">أنتيغوا وباربودا</option>
									<option value=" جزيرة مان (المملكة المتحدة)">جزيرة مان
										(المملكة المتحدة)</option>
									<option value=" أندورا">أندورا</option>
									<option value=" دومينيكا">دومينيكا</option>
									<option value=" برمودا (المملكة المتحدة)">برمودا
										(المملكة المتحدة)</option>
									<option value=" جيرنزي (المملكة المتحدة)">جيرنزي
										(المملكة المتحدة)</option>
									<option value=" جرينلاند (الدنمارك)">جرينلاند
										(الدنمارك)</option>
									<option value=" جزر مارشال">جزر مارشال</option>
									<option value=" ساموا الأمريكية (الولايات المتحدة)">
										ساموا الأمريكية (الولايات المتحدة)</option>
									<option value=" جزر كايمان (المملكة المتحدة)">جزر
										كايمان (المملكة المتحدة)</option>
									<option value=" جزر ماريانا الشمالية (الولايات المتحدة)">
										جزر ماريانا الشمالية (الولايات المتحدة)</option>
									<option value=" جزر فارو (الدنمارك)">جزر فارو
										(الدنمارك)</option>
									<option value=" سينت مارتن (هولندا)">سينت مارتن
										(هولندا)</option>
									<option value=" سانت مارتن الفرنسية (فرنسا)">سانت
										مارتن الفرنسية (فرنسا)</option>
									<option value=" ليختنشتاين">ليختنشتاين</option>
									<option value=" موناكو">موناكو</option>
									<option value=" سان مارينو(المملكة المتحدة)">سان
										مارينو(المملكة المتحدة)</option>
									<option value=" جبل طارق (منطقة حكم ذاتي) (المملكة المتحدة)">
										جبل طارق (منطقة حكم ذاتي) (المملكة المتحدة)</option>
									<option value=" الجزر العذراء البريطانية (المملكة المتحدة)">
										الجزر العذراء البريطانية (المملكة المتحدة)</option>
									<option value=" أولند(فنلندا)">أولند(فنلندا)</option>
									<option value=" الجزر الكاريبية الهولندية (هولندا)">
										الجزر الكاريبية الهولندية (هولندا)</option>
									<option value=" بالاو">بالاو</option>
									<option value=" جزر كوك (نيوزيلندا)">جزر كوك
										(نيوزيلندا)</option>
									<option value=" أنجويلا (المملكة المتحدة)">أنجويلا
										(المملكة المتحدة)</option>
									<option value=" والس وفوتونا (فرنسا)">والس وفوتونا
										(فرنسا)</option>
									<option value=" ناورو">ناورو</option>
									<option value=" سان بارتليمي (فرنسا)">سان بارتليمي
										(فرنسا)</option>
									<option value=" سان بيار وميكلون (فرنسا)">سان بيار
										وميكلون (فرنسا)</option>
									<option value=" مونتسرات (المملكة المتحدة)">مونتسرات
										(المملكة المتحدة)</option>
									<option value=" سانت هيلين (المملكة المتحدة)">سانت
										هيلين (المملكة المتحدة)</option>
									<option value=" سفالبارد ويان ماين (النرويج)">
										سفالبارد ويان ماين (النرويج)</option>
									<option value=" جزر فوكلاند (المملكة المتحدة)">جزر
										فوكلاند (المملكة المتحدة)</option>
									<option value=" جزيرة نورفولك (أستراليا)">جزيرة
										نورفولك (أستراليا)</option>
									<option value=" جزيرة عيد الميلاد (أستراليا)">جزيرة
										عيد الميلاد (أستراليا)</option>
									<option value=" نييوي (نيوزيلندا)">نييوي (نيوزيلندا)</option>
									<option value=" توكلو (نيوزيلندا)">توكلو (نيوزيلندا)</option>
									<option value=" الفاتيكان">الفاتيكان</option>
									<option value=" جزر كوكس (أستراليا)">جزر كوكس
										(أستراليا)</option>
									<option value=" جزر بيتكيرن (المملكة المتحدة)">جزر
										بيتكيرن (المملكة المتحدة)</option>


								</select>
								<div class="select-dropdown"></div>
							</div>
						</div>
						<div class="input-group">
							<div class="rs-select2 js-select-simple select--no-search">
								<select name="ville">
									<option disabled="disabled" selected="selected">Ville
										de naissance</option>
									<option value=" AL HAJEB">AL HAJEB</option>
									<option value=" AGADIR ">AGADIR</option>
									<option value="AL HOCEIMA ">AL HOCEIMA</option>
									<option value="ASSA ">ASSA</option>
									<option value="ZAG ">ZAG</option>
									<option value="AZILAL ">AZILAL</option>
									<option value="BENI MELLAL">BENI MELLAL</option>
									<option value=" BENSLIMANE ">BENSLIMANE</option>
									<option value="BOUJDOUR">BOUJDOUR</option>
									<option value=" BOULEMANE ">BOULEMANE</option>
									<option value="BERRECHID ">BERRECHID</option>
									<option value="CASABLANCA ">CASABLANCA</option>
									<option value="CHEFCHAOUEN ">CHEFCHAOUEN</option>
									<option value="CHTOUKA ">CHTOUKA</option>
									<option value="AIT BAHA ">AIT BAHA</option>
									<option value="CHICHAOUA">CHICHAOUA</option>
									<option value=" EL JADIDA">EL JADIDA</option>
									<option value=" EL KELAA DES SRAGHNAS">EL KELAA DES
										SRAGHNAS</option>
									<option value=" ERRACHIDIA ">ERRACHIDIA</option>
									<option value="ESSAOUIRA">ESSAOUIRA</option>
									<option value=" ES SEMARA">ES SEMARA</option>
									<option value=" FES ">FES</option>
									<option value="FIGUIG">FIGUIG</option>
									<option value=" GUELMIM">GUELMIM</option>
									<option value=" IFRANE">IFRANE</option>
									<option value=" KENITRA">KENITRA</option>
									<option value=" KHEMISSET">KHEMISSET</option>
									<option value=" KHENIFRA ">KHENIFRA</option>
									<option value="KHOURIBGA ">KHOURIBGA</option>
									<option value="LAAYOUNE">LAAYOUNE</option>
									<option value=" LARACHE ">LARACHE</option>
									<option value="MOHAMMEDIA ">MOHAMMEDIA</option>
									<option value="MARRAKECH ">MARRAKECH</option>
									<option value="MEKNES ">MEKNES</option>
									<option value="NADOR">NADOR</option>
									<option value=" OUARZAZATE">OUARZAZATE</option>
									<option value=" OUJDA ">OUJDA</option>
									<option value="OUED EDDAHAB ">OUED EDDAHAB</option>
									<option value="RABAT ">RABAT</option>
									<option value="SALE ">SALE</option>
									<option value="SKHIRAT">SKHIRAT</option>
									<option value=" TEMARA ">TEMARA</option>
									<option value="SEFROU">SEFROU</option>
									<option value=" SAFI">SAFI</option>
									<option value=" SETTAT">SETTAT</option>
									<option value=" SIDI KACEM ">SIDI KACEM</option>
									<option value="TANGER ">TANGER</option>
									<option value="TAN TAN">TAN TAN</option>
									<option value=" TAOUNAT ">TAOUNAT</option>
									<option value="TAROUDANNT">TAROUDANNT</option>
									<option value=" TATA">TATA</option>
									<option value=" TAZA">TAZA</option>
									<option value=" TETOUAN ">TETOUAN</option>
									<option value="TIZNIT">TIZNIT</option>

									<option value="TIZNIT">autres...</option>
								</select>
								<div class="select-dropdown"></div>
							</div>
						</div>
						<div class="input-group">
							<div class="rs-select2 js-select-simple select--no-search">
								<select name="nationalite">
									<option disabled="disabled" selected="selected">
										Nationnalité</option>
									<option value="Afghan   ">Afghan</option>
									<option value="Albanais">Albanais</option>
									<option value="Algérien   ">Algérien</option>
									<option value="Allemand">Allemand</option>
									<option value="Américain">Américain</option>
									<option value="Angolais   ">Angolais</option>
									<option value="Argentin   ">Argentin</option>
									<option value="Arménien   ">Arménien</option>
									<option value="Arubais    ">Arubais</option>
									<option value="Australien">Australien</option>
									<option value="Autrichien ">Autrichien</option>
									<option value="Azerbaïdjanais ">Azerbaïdjanais</option>
									<option value="Bahaméen   ">Bahaméen</option>
									<option value="Bangladais ">Bangladais</option>
									<option value="Belge">Belge</option>
									<option value="Benin">Benin</option>
									<option value="Biélorusse ">Biélorusse</option>
									<option value="Birmain    ">Birmain</option>
									<option value="Bolivien   ">Bolivien</option>
									<option value="Bosniaque">Bosniaque</option>
									<option value="Botswanais ">Botswanais</option>
									<option value="Bouthan    ">Bouthan</option>
									<option value="Brésilien  ">Brésilien</option>
									<option value="Britannique    ">Britannique</option>
									<option value="Bulgare">Bulgare</option>
									<option value="Burkinabè  ">Burkinabè</option>
									<option value="Cambodgien ">Cambodgien</option>
									<option value="Camerounais    ">Camerounais</option>
									<option value="Canadien   ">Canadien</option>
									<option value="Chilien">Chilien</option>
									<option value="Chinois    ">Chinois</option>
									<option value="Chypriote">Chypriote</option>
									<option value="Colombien  ">Colombien</option>
									<option value="Congolais  ">Congolais</option>
									<option value="Costaricain">Costaricain</option>
									<option value="Croate ">Croate</option>
									<option value="Cubain ">Cubain</option>
									<option value="Danois ">Danois</option>
									<option value="Dominicain ">Dominicain</option>
									<option value="Ecossais">Ecossais</option>
									<option value="Egyptien   ">Egyptien</option>
									<option value="Emirati    ">Emirati</option>
									<option value="Equatorien ">Equatorien</option>
									<option value="Espagnol   ">Espagnol</option>
									<option value="Estonien">Estonien</option>
									<option value="Ethiopien  ">Ethiopien</option>
									<option value="Européen   ">Européen</option>
									<option value="Finlandais ">Finlandais</option>
									<option value="Français   ">Français</option>
									<option value="Gabonais">Gabonais</option>
									<option value="Georgien   ">Georgien</option>
									<option value="Ghanéen    ">Ghanéen</option>
									<option value="Grec   ">Grec</option>
									<option value="Guatemala  ">Guatemala</option>
									<option value="Guinéen">Guinéen</option>
									<option value="Haïtien    ">Haïtien</option>
									<option value="Hollandais ">Hollandais</option>
									<option value="Hong-Kong  ">Hong-Kong</option>
									<option value="Hongrois   ">Hongrois</option>
									<option value="Indien">Indien</option>
									<option value="Indonésien ">Indonésien</option>
									<option value="Irakien    ">Irakien</option>
									<option value="Iranien    ">Iranien</option>
									<option value="Irlandais  ">Irlandais</option>
									<option value="Islandais">Islandais</option>
									<option value="Israélien  ">Israélien</option>
									<option value="Italien    ">Italien</option>
									<option value="Ivoirien   ">Ivoirien</option>
									<option value="Jamaïcain">Jamaïcain</option>
									<option value="Japonais">Japonais</option>
									<option value="Jordanien">Jordanien</option>
									<option value="Kazakh ">Kazakh</option>
									<option value="Kenyan ">Kenyan</option>
									<option value="Kirghiz    ">Kirghiz</option>
									<option value="Kosovar">Kosovar</option>
									<option value="Koweïtien  ">Koweïtien</option>
									<option value="Kurde  ">Kurde</option>
									<option value="Laotien    ">Laotien</option>
									<option value="Letton">Letton</option>
									<option value="Libanais">Libanais</option>
									<option value="Libyen ">Libyen</option>
									<option value="Liechtenstein  ">Liechtenstein</option>
									<option value="Lituanien  ">Lituanien</option>
									<option value="Luxembourgeois ">Luxembourgeois</option>
									<option value="Macédonien">Macédonien</option>
									<option value="Madagascar ">Madagascar</option>
									<option value="Malaisien  ">Malaisien</option>
									<option value="Malien">Malien</option>
									<option value="Maltais    ">Maltais</option>
									<option value="Marocain">Marocain</option>
									<option value="Mauritanien    ">Mauritanien</option>
									<option value="Mauritien  ">Mauritien</option>
									<option value="Mexicain   ">Mexicain</option>
									<option value="Monégasque ">Monégasque</option>
									<option value="Mongol">Mongol</option>
									<option value="Mozambique ">Mozambique</option>
									<option value="Namibien   ">Namibien</option>
									<option value="Néo-Zélandais  ">Néo-Zélandais</option>
									<option value="Népalais   ">Népalais</option>
									<option value="Nigérien">Nigérien</option>
									<option value="Nord Coréen    ">Nord Coréen</option>
									<option value="Norvégien  ">Norvégien</option>
									<option value="Pakistanais    ">Pakistanais</option>
									<option value="Palestinien    ">Palestinien</option>
									<option value="Panaméen">Panaméen</option>
									<option value="Paraguayen ">Paraguayen</option>
									<option value="Péruvien   ">Péruvien</option>
									<option value="Philippiens    ">Philippiens</option>
									<option value="Polonais">Polonais</option>
									<option value="Portoricain">Portoricain</option>
									<option value=""></option>
									<option value="Portugais  ">Portugais</option>
									<option value="Qatar  ">Qatar</option>
									<option value="Roumain">Roumain</option>
									<option value="Russe  ">Russe</option>
									<option value="Rwandais">Rwandais</option>
									<option value="Saoudien   ">Saoudien</option>
									<option value="Sénégalais ">Sénégalais</option>
									<option value="Serbe  ">Serbe</option>
									<option value="Serbo-Croate   ">Serbo-Croate</option>
									<option value="Singapour">Singapour</option>
									<option value="Slovaque   ">Slovaque</option>
									<option value="Soudanais  ">Soudanais</option>
									<option value="Soviétique ">Soviétique</option>
									<option value="Sri-Lankais    ">Sri-Lankais</option>
									<option value="Sud-Africain">Sud-Africain</option>
									<option value="Sud-Coréen ">Sud-Coréen</option>
									<option value="Suédois    ">Suédois</option>
									<option value="Suisse ">Suisse</option>
									<option value="Syrien ">Syrien</option>
									<option value="Tadjik">Tadjik</option>
									<option value="Taïwanais  ">Taïwanais</option>
									<option value="Tanzanien  ">Tanzanien</option>
									<option value="Tchadien   ">Tchadien</option>
									<option value="Tchèque    ">Tchèque</option>
									<option value="Thaïlandais">Thaïlandais</option>
									<option value="Tunisien   ">Tunisien</option>
									<option value="Turc   ">Turc</option>
									<option value="Ukranien   ">Ukranien</option>
									<option value="Uruguayen  ">Uruguayen</option>
									<option value="Vénézuélien">Vénézuélien</option>
									<option value="Vietnamien ">Vietnamien</option>
									<option value="Yéménite   ">Yéménite</option>
									<option value="Yougoslave ">Yougoslave</option>
									<option value="Zimbabwéen">Zimbabwéen</option>

								</select>
								<div class="select-dropdown"></div>
							</div>
						</div>
						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<div class="rs-select2 js-select-simple select--no-search">
										<select name="province">
											<option disabled="disabled" selected="selected">Province</option>
											<option value="Province de Tétouan">Province de
												Tétouan</option>
											<option value="Province de Fahs-Anjra">Province de
												Fahs-Anjra</option>
											<option value="Province de Larache">Province de
												Larache</option>
											<option value="Province d&#x27;Al Hoceïma">Province
												d&#x27;Al Hoceïma</option>
											<option value="Province de Chefchaouen">Province de
												Chefchaouen</option>
											<option value="Province d&#x27;Ouezzane">Province
												d&#x27;Ouezzane</option>
											<option value="Province de Nador">Province de Nador
											</option>
											<option value="Province de Driouch">Province de
												Driouch</option>
											<option value="Province de Jerada">Province de
												Jerada</option>
											<option value="Province de Berkane">Province de
												Berkane</option>
											<option value="Province de Taourirt">Province de
												Taourirt</option>
											<option value="Province de Guercif">Province de
												Guercif</option>
											<option value="Province de Figuig">Province de
												Figuig</option>
											<option value="Province d’El Hajeb">Province d’El
												Hajeb</option>
											<option value="Province d’Ifrane">Province d’Ifrane
											</option>
											<option value="Province de Moulay Yaâcoub">Province
												de Moulay Yaâcoub</option>
											<option value="Province de Séfrou">Province de
												Séfrou</option>
											<option value="Province de Boulemane">Province de
												Boulemane</option>
											<option value="Province de Taounate">Province de
												Taounate</option>
											<option value="Province de Taza">Province de Taza</option>
											<option value="Province de Kénitra">Province de
												Kénitra</option>
											<option value="Province de Khémisset">Province de
												Khémisset</option>
											<option value="Province de Sidi Kacem">Province de
												Sidi Kacem</option>
											<option value="Province de Sidi Slimane">Province de
												Sidi Slimane</option>
											<option value="Province de Béni-Mellal">Province de
												Béni-Mellal</option>
											<option value="Province d&#x27;Azilal">Province
												d&#x27;Azilal</option>
											<option value="Province de Fquih Ben Salah">
												Province de Fquih Ben Salah</option>
											<option value="Province de Khénifra">Province de
												Khénifra</option>
											<option value="Province de Khouribga">Province de
												Khouribga</option>
											<option value="Province d&#x27;El Jadida">Province
												d&#x27;El Jadida</option>
											<option value="Province de Nouaceur">Province de
												Nouaceur</option>
											<option value="Province de Médiouna">Province de
												Médiouna</option>
											<option value="Province de Benslimane">Province de
												Benslimane</option>
											<option value="Province de Berrechid">Province de
												Berrechid</option>
											<option value="Province de Settat">Province de
												Settat</option>
											<option value="Province de Sidi Bennour">Province de
												Sidi Bennour</option>
											<option value="Province de Chichaoua">Province de
												Chichaoua</option>
											<option value="Province d&#x27;Al Haouz">Province
												d&#x27;Al Haouz</option>
											<option value="Province d&#x27;El Kelaâ des Sraghna">
												Province d&#x27;El Kelaâ des Sraghna</option>
											<option value="Province d&#x27;Essaouira">Province
												d&#x27;Essaouira</option>
											<option value="Province de Rehamna">Province de
												Rehamna</option>
											<option value="Province de Safi">Province de Safi</option>
											<option value="Province de Youssoufia">Province de
												Youssoufia</option>
											<option value="Province d&#x27;Errachidia">Province
												d&#x27;Errachidia</option>
											<option value="Province de Ouarzazate">Province de
												Ouarzazate</option>
											<option value="Province de Midelt">Province de
												Midelt</option>
											<option value="Province de Tinghir">Province de
												Tinghir</option>
											<option value="Province de Zagora">Province de
												Zagora</option>
											<option value="Province de Chtouka-Aït Baha">
												Province de Chtouka-Aït Baha</option>
											<option value="Province de Taroudant">Province de
												Taroudant</option>
											<option value="Province de Tiznit">Province de
												Tiznit</option>
											<option value="Province de Tata">Province de Tata</option>
											<option value="Province de Guelmim">Province de
												Guelmim</option>
											<option value="Province d&#x27;Assa-Zag">Province
												d&#x27;Assa-Zag</option>
											<option value="Province de Tan-Tan">Province de
												Tan-Tan</option>
											<option value="Province de Sidi Ifni">Province de
												Sidi Ifni</option>
											<option value="Province de Laâyoune">Province de
												Laâyoune</option>
											<option value="Province de Boujdour">Province de
												Boujdour</option>
											<option value="Province de Tarfaya">Province de
												Tarfaya</option>
											<option value="Province d&#x27;Es-Semara">Province
												d&#x27;Es-Semara</option>
											<option value="Province d&#x27;Oued Ed Dahab">
												Province d&#x27;Oued Ed Dahab</option>
											<option value="Province d&#x27;Aousserd">Province
												d&#x27;Aousserd</option>
											<option value="Autres">Autres</option>
										</select>
										<div class="select-dropdown"></div>
									</div>

								</div>
							</div>

							<div class="col-2">
								<div class="input-group">
									<div class="rs-select2 js-select-simple select--no-search">
										<select name="region">
											<option disabled="disabled" selected="selected">Region</option>
											<option value="Région de Tanger-Tétouan-Al Hoceïma">
												Région de Tanger-Tétouan-Al Hoceïma</option>
											<option value="Région de l&#x27;Oriental">Région de
												l&#x27;Oriental</option>
											<option value="Région de Fès-Meknès">Région de
												Fès-Meknès</option>
											<option value="Région de Rabat-Salé-Kénitra">Région
												de Rabat-Salé-Kénitra</option>
											<option value="Région de Béni Mellal-Khénifra">
												Région de Béni Mellal-Khénifra</option>
											<option value="Région de Casablanca-Settat">Région
												de Casablanca-Settat</option>
											<option value="Région de Marrakech-Safi">Région de
												Marrakech-Safi</option>
											<option value="Région de Drâa-Tafilalet">Région de
												Drâa-Tafilalet</option>
											<option value="Région de Souss-Massa">Région de
												Souss-Massa</option>
											<option value="Région de Guelmim-Oued Noun">Région
												de Guelmim-Oued Noun</option>
											<option value="Région de Laâyoune-Sakia El Hamra">
												Région de Laâyoune-Sakia El Hamra</option>
											<option value="Région de Dakhla-Oued Ed Dahab">
												Région de Dakhla-Oued Ed Dahab</option>
											<option value="Autres">Autres</option>
										</select>
										<div class="select-dropdown"></div>
									</div>
								</div>
							</div>


						</div>

						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<input class="input--style-2" type="text" placeholder="cin"
										name="cin">

								</div>
							</div>
							<div class="col-2">
								<div class="input-group">
									<input class="input--style-2" type="text"
										placeholder="Code massar" name="massarEtud">
								</div>
							</div>
						</div>
						<div class="input-group">
							<div class="rs-select2 js-select-simple select--no-search">
								<select name="sBac">
									<option disabled="disabled" selected="selected">Serie
										Bac</option>
									<option value="Sciences de la Vie et de la Terre">
										Sciences de la Vie et de la Terre</option>
									<option value="Sciences Physiques et Chimiques">
										Sciences Physiques et Chimiques</option>
									<option value="Sciences Maths A">Sciences Maths A</option>
									<option value="Sciences Maths B">Sciences Maths B</option>
									<option value="Sciences agronomiques">Sciences
										agronomiques</option>
									<option value="Sciences et Technologies Electriques">
										Sciences et Technologies Electriques</option>
									<option value="Sciences et Technologies Mécaniques">
										Sciences et Technologies Mécaniques</option>
								</select>
								<div class="select-dropdown"></div>
							</div>
						</div>
						<div class="input-group">
							<div class="rs-select2 js-select-simple select--no-search">
								<select name="mt">
									<option disabled="disabled" selected="selected">
										Mention du bac</option>
									<option value="Très bien ">Très bien</option>
									<option value="bien">bien</option>
									<option value="assez bien">assez bien</option>
									<option value="passable">passable</option>


								</select>
								<div class="select-dropdown"></div>
							</div>
						</div>
						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<input class="input--style-2" type="text"
										placeholder="Lycee du Bac" name="lycee">

								</div>
							</div>

							<div class="col-2">
								<div class="input-group">
									<div class="rs-select2 js-select-simple select--no-search">
										<select name="villeBac">
											<option disabled="disabled" selected="selected">Ville
												du bac</option>
											<option value=" AL HAJEB">AL HAJEB</option>
											<option value=" AGADIR ">AGADIR</option>
											<option value="AL HOCEIMA ">AL HOCEIMA</option>
											<option value="ASSA ">ASSA</option>
											<option value="ZAG ">ZAG</option>
											<option value="AZILAL ">AZILAL</option>
											<option value="BENI MELLAL">BENI MELLAL</option>
											<option value=" BENSLIMANE ">BENSLIMANE</option>
											<option value="BOUJDOUR">BOUJDOUR</option>
											<option value=" BOULEMANE ">BOULEMANE</option>
											<option value="BERRECHID ">BERRECHID</option>
											<option value="CASABLANCA ">CASABLANCA</option>
											<option value="CHEFCHAOUEN ">CHEFCHAOUEN</option>
											<option value="CHTOUKA ">CHTOUKA</option>
											<option value="AIT BAHA ">AIT BAHA</option>
											<option value="CHICHAOUA">CHICHAOUA</option>
											<option value=" EL JADIDA">EL JADIDA</option>
											<option value=" EL KELAA DES SRAGHNAS">EL KELAA DES
												SRAGHNAS</option>
											<option value=" ERRACHIDIA ">ERRACHIDIA</option>
											<option value="ESSAOUIRA">ESSAOUIRA</option>
											<option value=" ES SEMARA">ES SEMARA</option>
											<option value=" FES ">FES</option>
											<option value="FIGUIG">FIGUIG</option>
											<option value=" GUELMIM">GUELMIM</option>
											<option value=" IFRANE">IFRANE</option>
											<option value=" KENITRA">KENITRA</option>
											<option value=" KHEMISSET">KHEMISSET</option>
											<option value=" KHENIFRA ">KHENIFRA</option>
											<option value="KHOURIBGA ">KHOURIBGA</option>
											<option value="LAAYOUNE">LAAYOUNE</option>
											<option value=" LARACHE ">LARACHE</option>
											<option value="MOHAMMEDIA ">MOHAMMEDIA</option>
											<option value="MARRAKECH ">MARRAKECH</option>
											<option value="MEKNES ">MEKNES</option>
											<option value="NADOR">NADOR</option>
											<option value=" OUARZAZATE">OUARZAZATE</option>
											<option value=" OUJDA ">OUJDA</option>
											<option value="OUED EDDAHAB ">OUED EDDAHAB</option>
											<option value="RABAT ">RABAT</option>
											<option value="SALE ">SALE</option>
											<option value="SKHIRAT">SKHIRAT</option>
											<option value=" TEMARA ">TEMARA</option>
											<option value="SEFROU">SEFROU</option>
											<option value=" SAFI">SAFI</option>
											<option value=" SETTAT">SETTAT</option>
											<option value=" SIDI KACEM ">SIDI KACEM</option>
											<option value="TANGER ">TANGER</option>
											<option value="TAN TAN">TAN TAN</option>
											<option value=" TAOUNAT ">TAOUNAT</option>
											<option value="TAROUDANNT">TAROUDANNT</option>
											<option value=" TATA">TATA</option>
											<option value=" TAZA">TAZA</option>
											<option value=" TETOUAN ">TETOUAN</option>
											<option value="TIZNIT">TIZNIT</option>
										</select>
										<div class="select-dropdown"></div>
									</div>
								</div>
							</div>


						</div>
						<div class="input-group">
							<div class="rs-select2 js-select-simple select--no-search">
								<select name="acad">
									<option disabled="disabled" selected="selected">
										Academie</option>
									<option value="Dakhla-Oued Ed-Dahab">Dakhla-Oued
										Ed-Dahab</option>
									<option value="Laâyoune-Sakia El Hamra">
										Laâyoune-Sakia El Hamra</option>
									<option value="Guelmim-Oued Noun">Guelmim-Oued Noun</option>
									<option value="Souss-Massa">Souss-Massa</option>
									<option value="Marrakech-Safi">Marrakech-Safi</option>
									<option value=" L’oriental">L’oriental</option>
									<option value="Casablanca-Settat">Casablanca-Settat</option>
									<option value="Rabat-Salé-Kénitra">Rabat-Salé-Kénitra
									</option>
									<option value=" Béni Mellal-Khénifra">Béni
										Mellal-Khénifra</option>
									<option value="Drâa Tafilalt">Drâa Tafilalt</option>
									<option value="Fès-Meknès">Fès-Meknès</option>
									<option value="Tanger - Tetouan - Alhouceima">Tanger -
										Tetouan - Alhouceima</option>


								</select>
								<div class="select-dropdown"></div>
							</div>
						</div>

						<div class="input-group">
							<div class="rs-select2 js-select-simple select--no-search">
								<select name="an_Bac">
									<option disabled="disabled" selected="selected">Année
										d'obtention du bac</option>
									<option value="1980">1980</option>
									<option value="1981">1981</option>
									<option value="1982">1982</option>
									<option value="1983">1983</option>
									<option value="1984">1984</option>
									<option value="1985">1985</option>
									<option value="1986">1986</option>
									<option value="1987">1987</option>
									<option value="1988">1988</option>
									<option value="1989">1989</option>
									<option value="1990">1990</option>
									<option value="1991">1991</option>
									<option value="1992">1992</option>
									<option value="1993">1993</option>
									<option value="1994">1994</option>
									<option value="1995">1995</option>
									<option value="1996">1996</option>
									<option value="1997">1997</option>
									<option value="1998">1998</option>
									<option value="1999">1999</option>
									<option value="2000">2000</option>
									<option value="2001">2001</option>
									<option value="2002">2002</option>
									<option value="2003">2003</option>
									<option value="2004">2004</option>
									<option value="2005">2005</option>
									<option value="2006">2006</option>
									<option value="2007">2007</option>
									<option value="2008">2008</option>
									<option value="2009">2009</option>
									<option value="2010">2010</option>
									<option value="2011">2011</option>
									<option value="2012">2012</option>
									<option value="2013">2013</option>
									<option value="2014">2014</option>
									<option value="2015">2015</option>
									<option value="2016">2016</option>
									<option value="2017">2017</option>
									<option value="2018">2018</option>
									<option value="2019">2019</option>
									<option value="2020">2020</option>


								</select>
								<div class="select-dropdown"></div>
							</div>
						</div>























						<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<div class="rs-select2 js-select-simple select--no-search">
										<select name="etatPhy">
											<option disabled="disabled" selected="selected">Etat
												physique</option>
											<option value="Province de Tétouan">Sain</option>
											<option value="Province de Fahs-Anjra">Déplacement
												limité</option>
											<option value="Province de Larache">Sain</option>

											<option value="Autres">Autres</option>
										</select>
										<div class="select-dropdown"></div>
									</div>

								</div>
							</div>

							<div class="col-2">
								<div class="input-group">
									<div class="rs-select2 js-select-simple select--no-search">
										<select name="GroupSocio">
											<option disabled="disabled" selected="selected">Groupe
												socioprofessionnel</option>
											<option value="Agriculteurs exploitants">
												Agriculteurs exploitants</option>
											<option value="Artisans, commerçants et chefs d’entreprise">
												Artisans, commerçants et chefs d’entreprise</option>
											<option
												value="Cadres et professions intellectuelles supérieures">
												Cadres et professions intellectuelles supérieures</option>
											<option value="Professions intermédiaires">
												Professions intermédiaires</option>
											<option value="Employés">Employés</option>
											<option value="Ouvriers">Ouvriers</option>
											<option value="Retraités">Retraités</option>
											<option
												value="Autres personnes sans activité professionnelle">
												Autres personnes sans activité professionnelle</option>
											<option value="Autres">Autres</option>
										</select>
										<div class="select-dropdown"></div>
									</div>
								</div>
							</div>
							<div class="row row-space">
							<div class="col-2">
								<div class="input-group">
									<input class="input--style-2" type="text" placeholder="Login"
										name="Login">

								</div>
							</div>
							<div class="col-2">
								<div class="input-group">
									<input class="input--style-2" type="text" placeholder="Password"
										name="Password">
								</div>
							</div>
						</div>


						</div>

<!--  PHOOOOOOOOOOOOOOOOOOOTOOOOOOOOOOOOOO -->

					 	  <div class="input-group">

							<p class="input--style-2">Photo</p>

							<div class="rs-select2 js-select-simple select--no-search">

								<input type="file" id="avatar" name="photo"
									accept=".png, .jpg, .jpeg" placeholder="photo">
							</div>
						</div> 
						<div class="p-t-30">
							<button class="login100-form-btn" type="submit">S'inscrire</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Jquery JS-->
	<script src="vendor/jquery/jquery.min.js"></script>
	<!-- Vendor JS-->
	<script src="vendor/select2/select2.min.js"></script>
	<script src="vendor/datepicker/moment.min.js"></script>
	<script src="vendor/datepicker/daterangepicker.js"></script>

	<!-- Main JS-->
	<script src="js/global.js"></script>

</body>

</html>
<!-- end document-->