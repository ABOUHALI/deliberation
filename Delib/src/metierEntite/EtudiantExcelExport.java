package metierEntite;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import dao.InscripPDAO;

public class EtudiantExcelExport {
	InscripPDAO ip=new InscripPDAO();
	Etudiant etudiant= new Etudiant();
	
	private XSSFWorkbook workbook;
	private XSSFSheet sheet;

	List<Element> elts = ip.getElementDANSModule("java");
	List<Etudiant>e=new ArrayList<Etudiant>();
	
	
	public EtudiantExcelExport(List<Etudiant> e) {
		this.e = e;
		workbook =new XSSFWorkbook();
		sheet=workbook.createSheet("Etudiant");
	}
	public void writeEtud(Etudiant e , Row r) {
		Cell cell = r.createCell(0);
		cell.setCellValue(e.getMassarEtud());
		
		cell = r.createCell(1);
		cell.setCellValue(e.getNomFr());
		
		cell = r.createCell(2);
		cell.setCellValue(e.getPrenomFr());
	}
	
	public void writeHeader(Sheet sheet) {
		
		Row header = sheet.createRow(0);
		header.createCell(0).setCellValue("CNE");
		header.createCell(1).setCellValue("NOM");
		header.createCell(2).setCellValue("PRENOM");
		header.createCell(3).setCellValue("NOTE TP");
		header.createCell(4).setCellValue("NOTE CC");
		header.createCell(5).setCellValue("NOTE EXAM.O");
	}
	
	public void exporter(List<Etudiant> l ,HttpServletResponse response) throws IOException {
		
		
		@SuppressWarnings("resource")
		Workbook workbook = new HSSFWorkbook();
		Sheet sheet = workbook.createSheet();
		int rowCount=0;
		writeHeader(sheet);
		for(Etudiant e :l) {
			Row row = sheet.createRow(++rowCount);
			writeEtud(e, row);
		}
		try (ServletOutputStream outputStream= response.getOutputStream();){
			workbook.write(outputStream);
		}
		
	}
public void exporterRatt(List<Etudiant> l ,HttpServletResponse response) throws IOException {
		
		
		@SuppressWarnings("resource")
		Workbook workbook = new HSSFWorkbook();
		Sheet sheet = workbook.createSheet();
		int rowCount=0;
		writeHeaderR(sheet);
		for(Etudiant e :l) {
			Row row = sheet.createRow(++rowCount);
			writeEtud(e, row);
		}
		try (ServletOutputStream outputStream= response.getOutputStream();){
			workbook.write(outputStream);
		}
		
	}
public void writeHeaderR(Sheet sheet) {
	
	Row header = sheet.createRow(0);
	header.createCell(0).setCellValue("CNE");
	header.createCell(1).setCellValue("NOM");
	header.createCell(2).setCellValue("PRENOM");
	header.createCell(3).setCellValue("NOTE EXAM.R");
	
}
public void exporterLISTEs(List<Etudiant> l ,HttpServletResponse response) throws IOException {
	
	
	@SuppressWarnings("resource")
	Workbook workbook = new HSSFWorkbook();
	Sheet sheet = workbook.createSheet();
	int rowCount=0;
	writeHeaderLISTE(sheet);
	for(Etudiant e :l) {
		Row row = sheet.createRow(++rowCount);
		writeEtud(e, row);
	}
	try (ServletOutputStream outputStream= response.getOutputStream();){
		workbook.write(outputStream);
	}
	
}
public void writeHeaderLISTE(Sheet sheet) {
	
	Row header = sheet.createRow(0);
	header.createCell(0).setCellValue("CNE");
	header.createCell(1).setCellValue("NOM");
	header.createCell(2).setCellValue("PRENOM");
	
}
public void rn(List<ETUD_NOTE> l ,HttpServletResponse response) throws IOException {
	
	
	@SuppressWarnings("resource")
	Workbook workbook = new HSSFWorkbook();
	Sheet sheet = workbook.createSheet();
	int rowCount=0;
	writeHeaderRN(sheet);
	for(ETUD_NOTE e :l) {
		Row row = sheet.createRow(++rowCount);
		writeEtudNR(e, row);
	}
	try (ServletOutputStream outputStream= response.getOutputStream();){
		workbook.write(outputStream);
	}
	
}
public void writeHeaderRN(Sheet sheet) {
	
	Row header = sheet.createRow(0);
	header.createCell(0).setCellValue("CNE");
	header.createCell(1).setCellValue("NOM");
	header.createCell(2).setCellValue("PRENOM");
	header.createCell(3).setCellValue("ELEMENT");
	header.createCell(4).setCellValue("NOTE");
	header.createCell(5).setCellValue("ETAT");
}
public void writeEtudNR(ETUD_NOTE e , Row r) {
	Cell cell = r.createCell(0);
	cell.setCellValue(e.getCNE());
	
	cell = r.createCell(1);
	cell.setCellValue(e.getNom());
	
	cell = r.createCell(2);
	cell.setCellValue(e.getPrenom());
	
	cell = r.createCell(3);
	cell.setCellValue(e.getElement());
	
	cell = r.createCell(4);
	cell.setCellValue(e.getNOTE());
	
	cell = r.createCell(2);
	cell.setCellValue(e.getEtat());
}
}