package metierEntite;

import java.io.IOException;
import java.net.http.HttpRequest;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Image;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import dao.InscripEnLigne;
import dao.InscripPDAO;
import dao.StructureETab;

public class UserPdf {
	StructureETab se = new StructureETab();
	private List<ETUD_NOTE>e=new ArrayList<ETUD_NOTE>();
	private List<Etudiant> et = new ArrayList<Etudiant>();
	String element ;
	InscripEnLigne insc = new InscripEnLigne();
	InscripPDAO ip = new InscripPDAO();
	public UserPdf(List<ETUD_NOTE>listEtud,HttpServletRequest request,String element) {
		HttpSession session = request.getSession();
		 element=(String)session.getAttribute("element-prof");
		this.e= se.getListeNote(element);
	}
	public UserPdf(List<ETUD_NOTE>listEtud) {
		e=listEtud;
	}
	public UserPdf(String element) {
		e= ip.getListeEtudiant(element);
		for (int i = 0; i < e.size(); i++) {
			e.get(i).setEtat(se.getETAT_NOTE(e.get(i).getCNE(), element));
		}
	}
	public UserPdf(List<Etudiant> e,String element ) {
		this.element=element;
		e=insc.listEt();
	}
	private void writeTableHeader(PdfPTable table) {
		PdfPCell cell=new PdfPCell();
		cell.setBackgroundColor(BaseColor.YELLOW);
		cell.setPadding(5);
		
		Font font=FontFactory.getFont(FontFactory.HELVETICA);
		font.setColor(BaseColor.WHITE);
		
		cell.setPhrase(new Phrase(" CNE",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" Nom ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" PRENOM ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" NOTE ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase("ETAT",font));
		table.addCell(cell);
		
	}
	private void writeTableData(PdfPTable table) {
		for(ETUD_NOTE en:e) {
			table.addCell(en.getCNE());
			table.addCell(en.getNom());
			table.addCell(en.getPrenom());
			table.addCell(en.getNOTE()+"");
			

			if(en.getEtat().equals("Valide")) {
				PdfPCell c = new PdfPCell();
				c.addElement(new Paragraph(en.getEtat()));
				c.setBackgroundColor(BaseColor.GREEN);
				table.addCell(c);
				
			}else if(en.getEtat().equals("Rattrapage")||en.getEtat().equals("Non Valide")){
				PdfPCell c = new PdfPCell();
				c.addElement(new Paragraph(en.getEtat()));
				c.setBackgroundColor(BaseColor.RED);
				table.addCell(c);
			}
			
		}
	}
	public void exporte(HttpServletResponse response,String element) throws DocumentException, IOException {
		Document document=new Document(PageSize.A4);
		PdfWriter.getInstance(document, response.getOutputStream());
		document.open();
		
		Image img=Image.getInstance("C:\\Users\\pc\\Desktop\\logggo.png");
		document.add(img);
		
		Font font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		
		font.setSize(18);
		
		Paragraph titre=new Paragraph("PV ELEMENT "+element,font);
		titre.setAlignment(Paragraph.ALIGN_CENTER);
		document.add(titre);
		
		PdfPTable table=new PdfPTable(5);
		table.setWidthPercentage(100);
		table.setSpacingBefore(20);//espace entre liste etablissement et header du tableau
		table.setWidths(new float[] {4.5f ,3.5f,3.0f,3.0f,2.0f});
		
		writeTableHeader(table);
		writeTableData(table);
		
		document.add(table);
		
		
		document.close();
		
		
	}

	public void exporterModule(HttpServletResponse response,String module,int id_anne) throws DocumentException,IOException{
		Document document=new Document(PageSize.A4);
		PdfWriter.getInstance(document, response.getOutputStream());
		document.open();
		
		Image img=Image.getInstance("C:\\Users\\pc\\Desktop\\logggo.png");
		document.add(img);
		
		Font font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		
		font.setSize(18);
		
		Paragraph titre=new Paragraph("PV Module "+module,font);
		titre.setAlignment(Paragraph.ALIGN_CENTER);
		document.add(titre);
		
		PdfPTable table=new PdfPTable(6);
		table.setWidthPercentage(100);
		table.setSpacingBefore(20);//espace entre liste etablissement et header du tableau
		table.setWidths(new float[] {3.0f ,3.5f,3.0f,3.0f,3.0f,3.0f});
		
		writeTableHeaderModule(table,module);
		writeTableDataModule(table,module,id_anne);
		
		document.add(table);
		
		
		document.close();
		
	}
	
	
	public void writeTableDataModule(PdfPTable table,String module,int id_anne) {
		int id_module =se.getIDModule(module);
		List<Element> elts = se.getElementByMODULE(id_module);
		for(ETUD_NOTE en:e) {
			table.addCell(en.getCNE());
			table.addCell(en.getNom());
			table.addCell(en.getPrenom());
			for (int i = 0; i < elts.size(); i++) {
				table.addCell(se.getNoteElement(en.getCNE(),elts.get(i).getLabelleElement(),id_anne)+"");
			}
			

			if(se.NotedsModule(module, en.getCNE(),id_anne)>=10) {
				PdfPCell c = new PdfPCell();
				c.addElement(new Paragraph(se.NotedsModule(module, en.getCNE(),id_anne)+""));
				c.setBackgroundColor(BaseColor.GREEN);
				table.addCell(c);
				
			}else if(se.NotedsModule(module, en.getCNE(),id_anne)<10){
				PdfPCell c = new PdfPCell();
				c.addElement(new Paragraph(se.NotedsModule(module, en.getCNE(),id_anne)+""));
				c.setBackgroundColor(BaseColor.RED);
				table.addCell(c);
			}
			
		}
	}
	public void writeTableHeaderModule(PdfPTable table,String module) {
		int id_module =se.getIDModule(module);
		List<Element> elts = se.getElementByMODULE(id_module);
		PdfPCell cell=new PdfPCell();
		cell.setBackgroundColor(BaseColor.YELLOW);
		
		cell.setPadding(5);
		
		Font font=FontFactory.getFont(FontFactory.HELVETICA);
		font.setColor(BaseColor.BLACK);
		
		cell.setPhrase(new Phrase(" CNE",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" Nom ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" PRENOM ",font));
		table.addCell(cell);
		
		for (int i = 0; i < elts.size(); i++) {
			cell.setPhrase(new Phrase(elts.get(i).getLabelleElement(),font));
			table.addCell(cell);
												}
		
		cell.setPhrase(new Phrase(module,font));
		table.addCell(cell);
		
	}



	private void writeTableDataTOT(PdfPTable table) {
		for(ETUD_NOTE en:e) {
			table.addCell(en.getCNE());
			table.addCell(en.getNom());
			table.addCell(en.getPrenom());
			table.addCell(en.getNOTE()+"");
			

			if(en.getEtat().equals("Valide")) {
				PdfPCell c = new PdfPCell();
				c.addElement(new Paragraph(en.getEtat()));
				c.setBackgroundColor(BaseColor.GREEN);
				table.addCell(c);
				
			}else if(en.getEtat().equals("Non Valide")){
				PdfPCell c = new PdfPCell();
				c.addElement(new Paragraph(en.getEtat()));
				c.setBackgroundColor(BaseColor.RED);
				table.addCell(c);
			}
			
		}
	}
	public void exporteTOT(HttpServletResponse response,String element) throws DocumentException, IOException {
		Document document=new Document(PageSize.A4);
		PdfWriter.getInstance(document, response.getOutputStream());
		document.open();
		
		Image img=Image.getInstance("C:\\Users\\pc\\Desktop\\logggo.png");
		document.add(img);
		
		Font font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		
		font.setSize(18);
		
		Paragraph titre=new Paragraph("PV ELEMENT "+element,font);
		titre.setAlignment(Paragraph.ALIGN_CENTER);
		document.add(titre);
		
		PdfPTable table=new PdfPTable(5);
		table.setWidthPercentage(100);
		table.setSpacingBefore(20);//espace entre liste etablissement et header du tableau
		table.setWidths(new float[] {4.5f ,3.5f,3.0f,3.0f,2.0f});
		
		writeTableHeader(table);
		writeTableDataTOT(table);
		
		document.add(table);
		
		
		document.close();
		
		
	}
	
	public void RN(HttpServletResponse response,String MASSAR) throws DocumentException, IOException {
		Document document=new Document(PageSize.A4);
		PdfWriter.getInstance(document, response.getOutputStream());
		document.open();
		Etudiant e =insc.getET3(MASSAR);
		Image img=Image.getInstance("C:\\Users\\pc\\Desktop\\logggo.png");
		document.add(img);
		
		Font font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		
		font.setSize(18);
		
		Paragraph titre=new Paragraph("RELEVE NOTE  : "+e.getNomFr()+" "+e.getPrenomFr(),font);
		titre.setAlignment(Paragraph.ALIGN_CENTER);
		document.add(titre);
		
		PdfPTable table=new PdfPTable(6);
		table.setWidthPercentage(100);
		table.setSpacingBefore(20);//espace entre liste etablissement et header du tableau
		table.setWidths(new float[] {4.5f ,3.5f,3.0f,3.0f,2.0f,3.0f});
		
		writeTableHeaderRN(table);
		writeTableDataRN(table);
		
		document.add(table);
		
		
		document.close();
		
		
	}
	
	private void writeTableDataRN(PdfPTable table) {
		for(ETUD_NOTE en:e) {
			table.addCell(en.getCNE());
			table.addCell(en.getNom());
			table.addCell(en.getPrenom());
			table.addCell(en.getElement());
			table.addCell(en.getNOTE()+"");
			table.addCell(en.getEtat());
			
			
		}
	}
	public void writeTableHeaderRN(PdfPTable table) {
		
		PdfPCell cell=new PdfPCell();
		cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
		
		cell.setPadding(5);
		
		Font font=FontFactory.getFont(FontFactory.HELVETICA);
		font.setColor(BaseColor.BLACK);
		
		cell.setPhrase(new Phrase(" CNE",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" Nom ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" PRENOM ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" ELEMENT ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" NOTE ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" ETAT ",font));
		table.addCell(cell);
	}
	public void exporterSemestre(HttpServletResponse response,String semestre,int id_anne) throws DocumentException,IOException{
		Document document=new Document(PageSize.A4);
		PdfWriter.getInstance(document, response.getOutputStream());
		document.open();
		
		Image img=Image.getInstance("C:\\Users\\pc\\Desktop\\logggo.png");
		document.add(img);
		
		Font font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		
		font.setSize(18);
		
		Paragraph titre=new Paragraph("PV Semestre "+semestre,font);
		titre.setAlignment(Paragraph.ALIGN_CENTER);
		document.add(titre);
		
		PdfPTable table=new PdfPTable(6);
		table.setWidthPercentage(100);
		table.setSpacingBefore(20);//espace entre liste etablissement et header du tableau
		table.setWidths(new float[] {3.0f ,3.5f,3.0f,3.0f,3.0f,3.0f});
		
		writeTableHeaderSEM(table);
		writeTableDataSEM(table,semestre,id_anne);
		
		document.add(table);
		
		
		document.close();
		
	}
public void writeTableHeaderSEM(PdfPTable table) {
		
		PdfPCell cell=new PdfPCell();
		cell.setBackgroundColor(BaseColor.LIGHT_GRAY);
		
		cell.setPadding(5);
		
		Font font=FontFactory.getFont(FontFactory.HELVETICA);
		font.setColor(BaseColor.BLACK);
		
		cell.setPhrase(new Phrase(" CNE",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" Nom ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" PRENOM ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" SEMESTRE ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" ETAT ",font));
		table.addCell(cell);
		
		cell.setPhrase(new Phrase(" NOTE ",font));
		table.addCell(cell);
	}

private void writeTableDataSEM(PdfPTable table,String semestre,int id_anne) {
	for(ETUD_NOTE en:e) {
		table.addCell(en.getCNE());
		table.addCell(en.getNom());
		table.addCell(en.getPrenom());
		table.addCell(semestre);
		table.addCell(ip.calculerSEM(en.getCNE(), semestre,id_anne)+"");
		
		
		
		if(ip.getEtatSEM(en.getCNE(), semestre,id_anne).equals("Valide")) {
			PdfPCell c = new PdfPCell();
			c.addElement(new Paragraph(ip.getEtatSEM(en.getCNE(), semestre,id_anne)));
			c.setBackgroundColor(BaseColor.GREEN);
			table.addCell(c);
			
		}else if(ip.getEtatSEM(en.getCNE(), semestre,id_anne).equals("Non Valide")){
			PdfPCell c = new PdfPCell();
			c.addElement(new Paragraph(ip.getEtatSEM(en.getCNE(), semestre,id_anne)));
			c.setBackgroundColor(BaseColor.RED);
			table.addCell(c);
		}else if(ip.getEtatSEM(en.getCNE(), semestre,id_anne).equals("Valide par Compensation")) {
			PdfPCell c = new PdfPCell();
			c.addElement(new Paragraph(ip.getEtatSEM(en.getCNE(), semestre,id_anne)));
			c.setBackgroundColor(BaseColor.ORANGE);
			table.addCell(c);
		}
		
	}
}
public UserPdf() {
	super();
}
public void exportCertiScola(HttpServletResponse response,String massar) throws DocumentException,IOException{
	Document doc=new  Document(PageSize.A4);
	PdfWriter.getInstance(doc, response.getOutputStream());
	doc.open();
	Image img=Image.getInstance("C:\\Users\\pc\\Desktop\\logggo.png");
	doc.add(img);
	String etab =insc.certificat(massar);
	Etudiant e = insc.getET3(massar);
	Etudiant e2 =insc.getEt(massar);
	int d = insc.anneAcad(massar);
	doc.addTitle("CERTIFICAT DE SCOLARITE");
	
	Paragraph para=new Paragraph("CNE :"+massar+"\n          NOM :   "+e.getNomFr() +"             PRENOM :"+e.getPrenomFr(),FontFactory.getFont(FontFactory.TIMES_ITALIC,18,Font.BOLDITALIC,BaseColor.BLACK));
	Paragraph para2=new Paragraph("Né(e) le "+e2.getDateN() +"à "+e2.getVilleNaissance()+"\n",FontFactory.getFont(FontFactory.HELVETICA,16,Font.BOLDITALIC,BaseColor.BLACK));
	Paragraph para3=new Paragraph("est regulierement inscrit(e) pour la presente année "+d,FontFactory.getFont(FontFactory.COURIER_OBLIQUE,14,Font.BOLDITALIC,BaseColor.BLACK));
	doc.add(para);
	doc.add(para2);
	doc.add(para3);

	doc.close();
}

}