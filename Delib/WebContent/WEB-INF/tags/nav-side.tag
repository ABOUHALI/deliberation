<%@ tag language="java" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
  <!-- Start Left menu area  -->
    <div class="left-sidebar-pro">
        <nav id="sidebar" class="">
            <div class="sidebar-header">
                <a href="/miniprojet/home"><img class="main-logo" src="temp2/img/logo/logo.png" width="100" height="200"alt="" /></a>
                <strong><a href="/miniprojet/home"><img src="temp2/img/logo/logosn.png" alt="" /></a></strong>
            </div>
            <div class="left-custom-menu-adp-wrap comment-scrollbar">
                <nav class="sidebar-nav left-sidebar-menu-pro">
                    <ul class="metismenu" id="menu1">
                        <li >
                          <a class="has-arrow" href="/miniprojet/home" aria-expanded="false" >
								   <span> <img  src="temp2/img/product/home.png" width="25" height="25" alt="" /></span>
								   <span class="mini-click-non">Home</span>
								</a> 
                            <ul class="submenu-angle" aria-expanded="false">
                                <li><a title="Dashboard v.1" href="/miniprojet/home"><span class="mini-sub-pro">Home</span></a></li>
                                
                            </ul>
                        </li>
                      <c:if test="${role eq 'Administrateur'}">
                        <li>
                            <a class="has-arrow" href="all-students.html" aria-expanded="false"> <span> <img  src="temp2/img/product/enligne.png" width="25" height="25" alt="" /></span> <span class="mini-click-non">Inscriptions en li</span></a>
                            <ul class="submenu-angle" aria-expanded="false">
                                <li><a title="All Students" href="/miniprojet/inscriptionsE"><span class="mini-sub-pro">Liste des inscriptions en ligne</span></a></li>
                                <li><a title="Add Students" href="/miniprojet/add-inscriptionEexcel"><span class="mini-sub-pro">Ajouter depuis Excel</span></a></li>
                       
                            </ul>
                        </li>

                        <li>
                            <a class="has-arrow" href="all-students.html" aria-expanded="false"> <span> <img  src="temp2/img/product/admini.png" width="25" height="25" alt="" /></span> <span class="mini-click-non">Inscriptions administr</span></a>
                            <ul class="submenu-angle" aria-expanded="false">
                                <li><a title="All Students" href="/miniprojet/inscriptionsA"><span class="mini-sub-pro">Liste inscriptions administratifs</span></a></li>
                                <li><a title="All Students" href="/miniprojet//inscrireAd"><span class="mini-sub-pro">Inscrire administrativement</span></a></li>
                                <li><a title="Add Students" href="/miniprojet/add-inscriptionAexcel"><span class="mini-sub-pro">Ajouter depuis Excel</span></a></li>
                       
                            </ul>
                        </li>
                        </c:if>
					<c:if test="${role eq 'Responsable de filiere' || role eq 'Administrateur'}"  >
                        <li>
                            <a class="has-arrow" href="all-students.html" aria-expanded="false"> <span> <img  src="temp2/img/product/edit.png" width="25" height="25" alt="" /></span> <span class="mini-click-non">Inscriptions pédagogi</span></a>
                            <ul class="submenu-angle" aria-expanded="false">
                                <li><a title="All Students" href="/miniprojet/choisir-filiere"><span class="mini-sub-pro">Inscrire pédagogiquement</span></a></li>
                                                       
                            </ul>
                            <ul class="submenu-angle" aria-expanded="false">
                                <li><a title="All Students" href="/miniprojet/inscriptionsP"><span class="mini-sub-pro">Liste inscriptions pédagogiques</span></a></li>
                                                       
                            </ul>
                        </li>
                      </c:if>  
                      <c:if test="${role eq 'Administrateur'}">
                         <li>
                            <a class="has-arrow" href="all-students.html" aria-expanded="false"> <img  src="temp2/img/product/instructor.png" width="25" height="25" alt="" /> <span class="mini-click-non">Professeurs</span></a>
                            <ul class="submenu-angle" aria-expanded="false">
                                <li><a title="All Students" href="/miniprojet/ajouter-professeur"><span class="mini-sub-pro">Ajouter professeur</span></a></li>
                                 <li><a title="All Students" href="/miniprojet/list-professeurs"><span class="mini-sub-pro">Liste des professeurs</span></a></li>                      
                            </ul>
                        </li>
                         <li>
                            <a class="has-arrow" href="all-students.html" aria-expanded="false"><span><img  src="temp2/img/product/team.png" width="25" height="25" alt="" /></span> <span class="mini-click-non">Utilisateurs</span></a>
                            <ul class="submenu-angle" aria-expanded="false">
                                <li><a title="All Students" href="/miniprojet/ajouter-professeur"><span class="mini-sub-pro">Modifier un utilisateur</span></a></li>                 
                            </ul>
                        </li>
                        
                        <li>
                            <a class="has-arrow" href="all-students.html" aria-expanded="false"><span><img  src="temp2/img/product/add.png" width="25" height="25" alt="" /></span> <span class="mini-click-non">Gestion d'affectation</span></a>
                            <ul class="submenu-angle" aria-expanded="false">
                                <li><a title="All Students" href="/miniprojet/ajouter-filiere"><span class="mini-sub-pro">Ajouter une filiere</span></a></li>
                                <li><a title="All Students" href="/miniprojet/ajouter-etape"><span class="mini-sub-pro">Ajouter une étape </span></a></li>
                                <li><a title="All Students" href="/miniprojet/ajouter-semestre"><span class="mini-sub-pro">Ajouter un semestre</span></a></li>
                                <li><a title="All Students" href="/miniprojet/ajouter-module"><span class="mini-sub-pro">Ajouter un module</span></a></li>
                                
                                <li><a title="All Students" href="/miniprojet/list-module"><span class="mini-sub-pro">List des modules</span></a></li>                
                            </ul>
                        </li>
                       </c:if>
                    
                    </ul>
                    
                    
                    
                    
                </nav>
            </div>
        </nav>
    </div>
    <!-- End Left menu area -->
