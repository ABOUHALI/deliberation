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
	

	
	public void exporter(List<Etudiant> l ,HttpServletResponse response) throws IOException {
		
		
		Workbook workbook = new HSSFWorkbook();
		Sheet sheet = workbook.createSheet();
		int rowCount=0;
		for(Etudiant e :l) {
			Row row = sheet.createRow(++rowCount);
			writeEtud(e, row);
		}
		try (ServletOutputStream outputStream= response.getOutputStream();){
			workbook.write(outputStream);
		}
		
	}
}